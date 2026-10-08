import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../auth/useAuth";

export default function ForgotPassword() {
  const { resetPassword } = useAuth();
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [info, setInfo] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setInfo(null);
    setSubmitting(true);
    try {
      await resetPassword(email.trim());
      setInfo("Se o email existir, receberas instrucoes para redefinir a palavra-passe.");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro ao enviar email");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div>
      <h1 className="font-display text-2xl font-semibold text-nf-ink">
        Recuperar palavra-passe
      </h1>
      <p className="mt-2 text-sm text-nf-gray">
        Recebe um link para redefinir a tua palavra-passe.
      </p>

      <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
        <div>
          <label htmlFor="forgot-email" className="field-label">
            Email
          </label>
          <input
            id="forgot-email"
            type="email"
            required
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
          {submitting ? "A enviar..." : "Enviar link"}
        </button>
      </form>

      <p className="mt-6 text-xs text-nf-gray">
        <Link to="/login" className="font-medium text-nf-green hover:underline">
          Voltar ao login
        </Link>
      </p>
    </div>
  );
}
