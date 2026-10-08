import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../auth/useAuth";

export default function ResetPassword() {
  const { updatePassword, session, loading } = useAuth();
  const navigate = useNavigate();
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
      await updatePassword(password);
      setInfo("Palavra-passe actualizada. Redireccionando...");
      setTimeout(() => navigate("/dashboard", { replace: true }), 1200);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro ao actualizar palavra-passe");
    } finally {
      setSubmitting(false);
    }
  }

  if (loading) {
    return (
      <div>
        <h1 className="font-display text-2xl font-semibold text-nf-ink">
          A validar link...
        </h1>
      </div>
    );
  }

  if (!session) {
    return (
      <div>
        <h1 className="font-display text-2xl font-semibold text-nf-ink">Link invalido</h1>
        <p className="mt-2 text-sm text-nf-gray">
          Este link expirou ou e invalido. Pede um novo link de recuperacao.
        </p>
        <p className="mt-6 text-xs text-nf-gray">
          <Link to="/forgot-password" className="font-medium text-nf-green hover:underline">
            Pedir novo link
          </Link>
        </p>
      </div>
    );
  }

  return (
    <div>
      <h1 className="font-display text-2xl font-semibold text-nf-ink">Nova palavra-passe</h1>
      <p className="mt-2 text-sm text-nf-gray">Define uma nova palavra-passe.</p>

      <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
        <div>
          <label htmlFor="reset-password" className="field-label">
            Nova palavra-passe
          </label>
          <input
            id="reset-password"
            type="password"
            required
            autoComplete="new-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="field"
          />
        </div>

        <div>
          <label htmlFor="reset-confirm" className="field-label">
            Confirmar
          </label>
          <input
            id="reset-confirm"
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
          {submitting ? "A guardar..." : "Guardar palavra-passe"}
        </button>
      </form>
    </div>
  );
}
