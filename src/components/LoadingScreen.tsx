import Container from "./ui/Container";

interface LoadingScreenProps {
  label?: string;
}

export default function LoadingScreen({ label = "A carregar..." }: LoadingScreenProps) {
  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-nf-cream">
      <Container size="sm" className="text-center">
        <div className="mx-auto h-10 w-10 animate-spin rounded-full border-2 border-nf-green/20 border-t-nf-green" />
        <p className="mt-6 text-sm text-nf-gray">{label}</p>
      </Container>
    </div>
  );
}
