# NutraForm

Transforme sua rotina. Transforme seu corpo.

Plataforma inteligente que ajuda pessoas a melhorar a alimentacao, controlar a fome,
criar uma rotina de exercicios e acompanhar a propria evolucao.

## Estado

- FASE 1 concluida: estrutura, design system, landing, rotas base.
- FASE 2 pendente: Supabase (cliente, tipos, migrations, RLS, Storage).
- FASE 3 pendente: Autenticacao.
- FASE 4 pendente: Onboarding.
- FASE 5 pendente: Dashboard e rotina diaria.
- ... (ver SUMMARY.md)

## Stack

- React + TypeScript + Vite
- Tailwind CSS v3
- React Router v6
- Supabase (a partir da FASE 2)

## Requisitos

- Node.js 18+
- npm

## Instalacao

```bash
npm install
cp .env.example .env
npm run dev
```

## Scripts

- `npm run dev` — servidor de desenvolvimento (porta 5173)
- `npm run build` — build de producao (`vite build`)
- `npm run preview` — pre-visualizacao

## Estrutura

```
src/
  components/
    ui/
  layouts/
  pages/
  routes/
  lib/
  types/
```

## Design

- Verde profundo como cor principal.
- Verde suave para elementos secundarios.
- Off-white como fundo.
- Sem gradientes exagerados, sem emojis.
- Mobile-first.

## Responsabilidade sobre saude

Este aplicativo oferece orientacao geral sobre habitos alimentares e atividade fisica
e nao substitui avaliacao medica ou nutricional.
