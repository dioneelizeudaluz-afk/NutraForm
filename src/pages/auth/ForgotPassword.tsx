import { Link } from "react-router-dom";

export default function ForgotPassword() {
  return (
    <div>
      <h1 className="font-display text-2xl font-semibold text-nf-ink">Recuperar palavra-passe</h1>
      <p className="mt-2 text-sm text-nf-gray">
        A recuperacao sera implementada numa proxima fase.
      </p>
      <Link to="/login" className="mt-6 inline-block text-sm font-medium text-nf-green hover:underline">
        Voltar ao login
      </Link>
    </div>
  );
}
