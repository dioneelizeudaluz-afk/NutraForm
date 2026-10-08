import Container from "../../components/ui/Container";
import Card from "../../components/ui/Card";

export default function DashboardPlaceholder() {
  return (
    <Container className="py-12">
      <Card>
        <h1 className="font-display text-2xl font-semibold text-nf-ink">Dashboard</h1>
        <p className="mt-2 text-sm text-nf-gray">
          O dashboard sera construido na FASE 5. Esta pagina existe apenas para
          validar a rota protegida.
        </p>
      </Card>
    </Container>
  );
}
