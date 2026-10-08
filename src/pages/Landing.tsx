import { Link } from "react-router-dom";
import Container from "../components/ui/Container";
import Card from "../components/ui/Card";
import { LANDING, HEALTH_DISCLAIMER } from "../lib/constants";

export default function Landing() {
  return (
    <div className="bg-nf-cream">
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-nf-greenPale opacity-70 blur-3xl" />
        <div className="pointer-events-none absolute top-40 -left-32 h-80 w-80 rounded-full bg-nf-greenSoft opacity-15 blur-3xl" />

        <Container className="relative py-16 sm:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="animate-fade-up">
              <span className="mb-4 inline-flex items-center rounded-pill border border-nf-green/20 bg-white px-4 py-1.5 text-xs font-medium text-nf-green">
                {LANDING.heroEyebrow}
              </span>
              <h1 className="font-display text-4xl font-semibold leading-tight tracking-tight text-nf-ink sm:text-5xl lg:text-6xl">
                {LANDING.heroTitle}
              </h1>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-nf-gray sm:text-lg">
                {LANDING.heroSubtitle}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link to="/register" className="btn-primary">
                  {LANDING.ctaPrimary}
                </Link>
                <Link to="/login" className="btn-ghost">
                  {LANDING.ctaSecondary}
                </Link>
              </div>
            </div>

            <div className="animate-fade-in">
              <Card className="!p-0 overflow-hidden">
                <div className="border-b border-nf-line bg-nf-greenPale/40 px-6 py-4">
                  <p className="text-xs font-medium uppercase tracking-wide text-nf-green">
                    Rotina de hoje
                  </p>
                </div>
                <ul className="divide-y divide-nf-line">
                  {[
                    { time: "07:30", label: "Hidratacao", desc: "Beba 1 copo de agua." },
                    { time: "08:00", label: "Pequeno-almoco", desc: "Papas de aveia com banana." },
                    { time: "10:30", label: "Lanche", desc: "Escolha uma opcao leve." },
                    { time: "12:30", label: "Almoco", desc: "Peixe, verduras e porcao adequada de xima." },
                    { time: "17:30", label: "Exercicio", desc: "30 minutos de atividade leve." }
                  ].map((item) => (
                    <li key={item.time} className="flex items-start gap-4 px-6 py-4">
                      <span className="mt-0.5 w-12 shrink-0 text-xs font-medium text-nf-gray">
                        {item.time}
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-nf-ink">{item.label}</p>
                        <p className="text-xs text-nf-gray">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-nf-line bg-white py-16 sm:py-20">
        <Container>
          <h2 className="font-display text-3xl font-semibold text-nf-ink sm:text-4xl">
            {LANDING.stepsTitle}
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {LANDING.steps.map((step, index) => (
              <Card key={step.title}>
                <span className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-nf-greenPale text-sm font-semibold text-nf-green">
                  {index + 1}
                </span>
                <h3 className="font-display text-lg font-semibold text-nf-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-nf-gray">{step.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-nf-line bg-nf-cream py-16 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="font-display text-3xl font-semibold text-nf-ink sm:text-4xl">
                {LANDING.foodCheckTitle}
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-nf-gray">
                {LANDING.foodCheckDescription}
              </p>
              <p className="mt-6 max-w-xl rounded-card border border-nf-line bg-white p-4 text-sm leading-relaxed text-nf-gray">
                {LANDING.foodCheckExample}
              </p>
            </div>
            <Card className="bg-white">
              <p className="text-xs font-medium uppercase tracking-wide text-nf-green">
                Analise de refeicao
              </p>
              <div className="mt-4 space-y-3">
                {[
                  { label: "Proteina", value: "Moderada" },
                  { label: "Carboidratos", value: "Alta" },
                  { label: "Vegetais / fibras", value: "Baixa" },
                  { label: "Porcao estimada", value: "Generosa" }
                ].map((row) => (
                  <div
                    key={row.label}
                    className="flex items-center justify-between border-b border-nf-line pb-2 text-sm last:border-0 last:pb-0"
                  >
                    <span className="text-nf-gray">{row.label}</span>
                    <span className="font-medium text-nf-ink">{row.value}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </Container>
      </section>

      <section className="border-t border-nf-line bg-white py-16 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="font-display text-3xl font-semibold text-nf-ink sm:text-4xl">
                {LANDING.recipesTitle}
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-nf-gray">
                {LANDING.recipesDescription}
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { title: "Papas de aveia com banana", tag: "Pequeno-almoco" },
                { title: "Peixe com legumes salteados", tag: "Almoco" },
                { title: "Salada de feijao e tomate", tag: "Jantar" },
                { title: "Fruta com iogurte natural", tag: "Lanche" }
              ].map((r) => (
                <Card key={r.title}>
                  <span className="text-[11px] font-medium uppercase tracking-wide text-nf-green">
                    {r.tag}
                  </span>
                  <p className="mt-2 font-display text-base font-semibold text-nf-ink">
                    {r.title}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-nf-line bg-nf-green py-16 text-white sm:py-20">
        <Container className="text-center">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">
            {LANDING.ctaTitle}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-white/80">
            {HEALTH_DISCLAIMER}
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              to="/register"
              className="btn bg-white text-nf-green hover:bg-white/90"
            >
              {LANDING.ctaButton}
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
