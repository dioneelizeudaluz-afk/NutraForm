import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../auth/useAuth";

export default function Register() {
  const { signUp } = useAuth();
  const navigate = useNavigate();

  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [info, setInfo] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setInfo(null);

    if (password.length < 6) {
      setError("A palavra-passe deve ter pelo menos 6 caracteres.");
      return;
    }
    if (password !== confirm) {
      setError("As palavras-passe nao coincidem.");
      return;
    }

    setSubmitting(true);
    try {
      await signUp(email.trim(), password, displayName.trim() || undefined);
      setInfo("Conta criada. Verifica o teu email para confirmar o registo.");
      setTimeout(() => navigate("/login", { replace: true }), 1800);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro ao criar conta");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div>
      <h1 className="font-display text-2xl font-semibold text-nf-ink">Criar conta</h1>
      <p className="mt-2 text-sm text-nf-gray">
        Comece gratuitamente. Um passo de cada vez.
      </p>

      <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
        <div>
          <label htmlFor="reg-name" className="field-label">
            Nome
          </label>
          <input
            id="reg-name"
            type="text"
            autoComplete="name"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            className="field"
          />
        </div>

        <div>
          <label htmlFor="reg-email" className="field-label">
            Email
          </label>
          <input
            id="reg-email"
            type="email"
            required
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="field"
          />
        </div>

        <div>
          <label htmlFor="reg-password" className="field-label">
            Palavra-passe
          </label>
          <input
            id="reg-password"
            type="password"
            required
            autoComplete="new-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="field"
          />
        </div>

        <div>
          <label htmlFor="reg-confirm" className="field-label">
            Confirmar palavra-passe
          </label>
          <input
            id="reg-confirm"
            type="password"
            required
            autoComplete="new-password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            className="field"
          />
        </div>

        {error && (
          <p className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-xs text-red-700">
            {error}
          </p>
        )}
        {info && (
          <p className="rounded-lg border border-nf-green/30 bg-nf-greenPale px-3 py-2 text-xs text-nf-green">
            {info}
          </p>
        )}

        <button type="submit" disabled={submitting} className="btn-primary mt-2">
          {submitting ? "A criar..." : "Criar conta"}
        </button>
      </form>

      <p className="mt-6 text-xs text-nf-gray">
        Ja tens conta?{" "}
        <Link to="/login" className="font-medium text-nf-green hover:underline">
          Entrar
        </Link>
      </p>
    </div>
  );
}
