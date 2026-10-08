import { requireSupabase } from "../lib/supabase";
import type { Database } from "../types/database";

export type Profile = Database["public"]["Tables"]["profiles"]["Row"];

export async function getProfile(userId: string): Promise<Profile | null> {
  const supabase = requireSupabase();
  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("user_id", userId)
    .maybeSingle();

  if (error) throw new Error(error.message);
  return data ?? null;
}

export interface UpdateProfileInput {
  display_name?: string | null;
  avatar_url?: string | null;
  birth_date?: string | null;
  gender?: string | null;
  height_cm?: number | null;
  onboarded?: boolean;
}

export async function updateProfile(
  userId: string,
  input: UpdateProfileInput
): Promise<Profile> {
  const supabase = requireSupabase();

  const payload: UpdateProfileInput = {};
  if (input.display_name !== undefined) payload.display_name = input.display_name;
  if (input.avatar_url !== undefined) payload.avatar_url = input.avatar_url;
  if (input.birth_date !== undefined) payload.birth_date = input.birth_date;
  if (input.gender !== undefined) payload.gender = input.gender;
  if (input.height_cm !== undefined) payload.height_cm = input.height_cm;
  if (input.onboarded !== undefined) payload.onboarded = input.onboarded;

  const { data, error } = await supabase
    .from("profiles")
    .update(payload)
    .eq("user_id", userId)
    .select("*")
    .single();

  if (error) throw new Error(error.message);
  if (!data) throw new Error("Profile nao encontrado");
  return data;
}
