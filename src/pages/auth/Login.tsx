import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div>
      <h1 className="font-display text-2xl font-semibold text-nf-ink">Entrar</h1>
      <p className="mt-2 text-sm text-nf-gray">
        A autenticacao sera implementada numa proxima fase.
      </p>
      <Link to="/register" className="mt-6 inline-block text-sm font-medium text-nf-green hover:underline">
        Ainda nao tens conta? Criar conta
      </Link>
    </div>
  );
}
