import { Link, Outlet } from "react-router-dom";
import Container from "../components/ui/Container";
import Logo from "../components/ui/Logo";

export default function AuthLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-nf-cream">
      <div className="pointer-events-none absolute -left-24 top-16 h-64 w-64 rounded-full bg-nf-greenPale opacity-60 blur-2xl" />
      <div className="pointer-events-none absolute -right-32 bottom-24 h-72 w-72 rounded-full bg-nf-greenSoft opacity-20 blur-3xl" />

      <Container className="relative flex flex-1 items-center justify-center py-12" size="sm">
        <div className="w-full">
          <div className="mb-8 flex justify-center">
            <Link to="/" aria-label="Inicio NutraForm">
              <Logo />
            </Link>
          </div>
          <div className="card-nf p-6 sm:p-8">
            <Outlet />
          </div>
          <p className="mt-6 text-center text-xs text-nf-gray">
            <Link to="/" className="hover:text-nf-green">
              Voltar ao inicio
            </Link>
          </p>
        </div>
      </Container>
    </div>
  );
}
