import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div>
      <h1 className="font-display text-2xl font-semibold text-nf-ink">Criar conta</h1>
      <p className="mt-2 text-sm text-nf-gray">
        O registo sera implementado na proxima fase.
      </p>
      <Link to="/login" className="mt-6 inline-block text-sm font-medium text-nf-green hover:underline">
        Ja tens conta? Entrar
      </Link>
    </div>
  );
}
