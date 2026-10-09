import { Link, Outlet } from "react-router-dom";
import Container from "../components/ui/Container";
import Logo from "../components/ui/Logo";
import { HEALTH_DISCLAIMER } from "../lib/constants";

export default function PublicLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-nf-cream">
      <header className="border-b border-nf-line bg-nf-cream/80 backdrop-blur">
        <Container className="flex items-center justify-between py-4">
          <Link to="/" aria-label="Inicio NutraForm">
            <Logo />
          </Link>
          <nav className="flex items-center gap-3">
            <Link to="/login" className="text-sm font-medium text-nf-gray hover:text-nf-green">
              Entrar
            </Link>
            <Link to="/register" className="btn-primary !px-4 !py-2 !text-xs sm:!px-6 sm:!py-3 sm:!text-sm">
              Comecar
            </Link>
          </nav>
        </Container>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-nf-line bg-white">
        <Container className="flex flex-col gap-3 py-8 text-xs text-nf-gray sm:flex-row sm:items-center sm:justify-between">
          <span>
            &copy; {new Date().getFullYear()} NutraForm. Todos os direitos reservados.
          </span>
          <span className="max-w-lg leading-relaxed">{HEALTH_DISCLAIMER}</span>
        </Container>
      </footer>
    </div>
  );
}
