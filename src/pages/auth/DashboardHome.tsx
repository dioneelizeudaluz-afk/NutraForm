import { Link } from "react-router-dom";
import Container from "../../components/ui/Container";
import Card from "../../components/ui/Card";
import { useAuth } from "../../auth/useAuth";

export default function DashboardHome() {
  const { user, profile, signOut } = useAuth();

  return (
    <Container className="py-12">
      <Card>
        <h1 className="font-display text-2xl font-semibold text-nf-ink">
          Bem-vindo{profile?.display_name ? `, ${profile.display_name}` : ""}
        </h1>
        <p className="mt-2 text-sm text-nf-gray">
          O dashboard completo sera construido na proxima fase. Aqui ja tens acesso
          a tua conta.
        </p>

        <dl className="mt-6 grid gap-3 text-sm">
          <div className="flex justify-between border-b border-nf-line pb-2">
            <dt className="text-nf-gray">Email</dt>
            <dd className="font-medium text-nf-ink">{user?.email ?? "-"}</dd>
          </div>
          <div className="flex justify-between border-b border-nf-line pb-2">
            <dt className="text-nf-gray">Nome</dt>
            <dd className="font-medium text-nf-ink">{profile?.display_name ?? "-"}</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-nf-gray">Estado do onboarding</dt>
            <dd className="font-medium text-nf-ink">
              {profile?.onboarded ? "Completo" : "Pendente"}
            </dd>
          </div>
        </dl>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link to="/" className="btn-ghost">
            Voltar ao inicio
          </Link>
          <button
            type="button"
            onClick={() => void signOut()}
            className="btn-primary"
          >
            Terminar sessao
          </button>
        </div>
      </Card>
    </Container>
  );
}
