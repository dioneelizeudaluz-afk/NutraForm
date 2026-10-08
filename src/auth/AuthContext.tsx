import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ReactNode
} from "react";
import type { Session, User } from "@supabase/supabase-js";
import { supabase, supabaseConfigError, requireSupabase } from "../lib/supabase";
import type { Database } from "../types/database";

type Profile = Database["public"]["Tables"]["profiles"]["Row"];

export interface AuthContextValue {
  loading: boolean;
  profileLoading: boolean;
  session: Session | null;
  user: User | null;
  profile: Profile | null;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, displayName?: string) => Promise<void>;
  signOut: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  updatePassword: (newPassword: string) => Promise<void>;
  refreshProfile: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextValue | null>(null);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [loading, setLoading] = useState(true);
  const [profileLoading, setProfileLoading] = useState(false);
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);

  const loadProfile = useCallback(async (userId: string) => {
    setProfileLoading(true);
    try {
      const client = requireSupabase();
      const { data, error } = await client
        .from("profiles")
        .select("*")
        .eq("user_id", userId)
        .maybeSingle();

      if (error) {
        console.error("[auth] erro ao carregar profile:", error.message);
        setProfile(null);
        return;
      }

      setProfile(data ?? null);
    } finally {
      setProfileLoading(false);
    }
  }, []);

  const refreshProfile = useCallback(async () => {
    if (!user) {
      setProfile(null);
      return;
    }
    await loadProfile(user.id);
  }, [user, loadProfile]);

  useEffect(() => {
    if (!supabase) {
      setLoading(false);
      return;
    }

    let active = true;

    const { data: sub } = supabase.auth.onAuthStateChange((_event, newSession) => {
      if (!active) return;
      setSession(newSession);
      setUser(newSession?.user ?? null);
      if (newSession?.user) {
        void loadProfile(newSession.user.id);
      } else {
        setProfile(null);
      }
    });

    supabase.auth
      .getSession()
      .then(({ data }) => {
        if (!active) return;
        setSession(data.session);
        setUser(data.session?.user ?? null);
        if (data.session?.user) {
          void loadProfile(data.session.user.id);
        }
        setLoading(false);
      })
      .catch((err: unknown) => {
        console.error("[auth] erro ao obter sessao:", err);
        if (active) setLoading(false);
      });

    return () => {
      active = false;
      sub.subscription.unsubscribe();
    };
  }, [loadProfile]);

  const signIn = useCallback(async (email: string, password: string) => {
    const client = requireSupabase();
    const { error } = await client.auth.signInWithPassword({ email, password });
    if (error) throw new Error(error.message);
  }, []);

  const signUp = useCallback(
    async (email: string, password: string, displayName?: string) => {
      const client = requireSupabase();
      const { error } = await client.auth.signUp({
        email,
        password,
        options: {
          data: displayName ? { display_name: displayName } : undefined
        }
      });
      if (error) throw new Error(error.message);
    },
    []
  );

  const signOut = useCallback(async () => {
    const client = requireSupabase();
    const { error } = await client.auth.signOut();
    if (error) throw new Error(error.message);
  }, []);

  const resetPassword = useCallback(async (email: string) => {
    const client = requireSupabase();
    const redirectTo = `${window.location.origin}/reset-password`;
    const { error } = await client.auth.resetPasswordForEmail(email, { redirectTo });
    if (error) throw new Error(error.message);
  }, []);

  const updatePassword = useCallback(async (newPassword: string) => {
    const client = requireSupabase();
    const { error } = await client.auth.updateUser({ password: newPassword });
    if (error) throw new Error(error.message);
  }, []);

  const value = useMemo<AuthContextValue>(
    () => ({
      loading,
      profileLoading,
      session,
      user,
      profile,
      signIn,
      signUp,
      signOut,
      resetPassword,
      updatePassword,
      refreshProfile
    }),
    [
      loading,
      profileLoading,
      session,
      user,
      profile,
      signIn,
      signUp,
      signOut,
      resetPassword,
      updatePassword,
      refreshProfile
    ]
  );

  if (supabaseConfigError) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "24px",
          background: "#FBFBF8",
          color: "#1B2B24",
          fontFamily: "Inter, system-ui, sans-serif",
          textAlign: "center"
        }}
      >
        <div style={{ maxWidth: "560px" }}>
          <h1 style={{ fontSize: "22px", marginBottom: "12px" }}>
            Supabase nao configurado
          </h1>
          <p style={{ fontSize: "14px", lineHeight: 1.6, color: "#5A6B63" }}>
            A aplicacao nao consegue ligar-se ao Supabase porque faltam as
            variaveis de ambiente. Verifica na Vercel:
          </p>
          <ul
            style={{
              textAlign: "left",
              marginTop: "16px",
              padding: "16px",
              background: "#ffffff",
              border: "1px solid #E4E8E3",
              borderRadius: "12px",
              fontSize: "13px",
              lineHeight: 1.8
            }}
          >
            <li>
              Vai a Vercel, projecto NutraForm, Settings, Environment Variables
            </li>
            <li>
              Adiciona <code>VITE_SUPABASE_URL</code> com o URL do projecto Supabase
            </li>
            <li>
              Adiciona <code>VITE_SUPABASE_ANON_KEY</code> com a chave anon public
            </li>
            <li>Marca Production, Preview e Development</li>
            <li>Faz Redeploy do projecto</li>
          </ul>
        </div>
      </div>
    );
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
