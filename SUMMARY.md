# SUMMARY — NutraForm

Documento para continuidade por outra sessao de IA.

## 1. Visao geral

Plataforma SaaS/health-tech de rotina e habitos saudaveis. Modelo freemium.

## 2. Stack

- React + TypeScript + Vite
- Tailwind CSS v3
- React Router v6
- Supabase (FASE 2+)

## 3. Estado

- FASE 1 concluida:
  - `package.json`, `vite.config.ts`, `tsconfig.json`
  - `tailwind.config.js`, `postcss.config.js`
  - `index.html`, `public/favicon.svg`, `public/og-image.svg`
  - `vercel.json`
  - `.env.example`, `.gitignore`
  - `src/main.tsx`, `src/App.tsx`, `src/index.css`, `src/vite-env.d.ts`
  - `src/lib/constants.ts`
  - `src/types/index.ts`
  - `src/components/ui/Container.tsx`, `Button.tsx`, `Card.tsx`, `Logo.tsx`
  - `src/components/ProtectedRoute.tsx` (placeholder, AUTH_ENABLED=false)
  - `src/layouts/PublicLayout.tsx`, `AuthLayout.tsx`
  - `src/pages/Landing.tsx`, `NotFound.tsx`
  - `src/pages/auth/Login.tsx`, `Register.tsx`, `ForgotPassword.tsx`, `DashboardPlaceholder.tsx`
  - `src/routes/AppRoutes.tsx`

## 4. Decisoes tecnicas

- Tailwind v3 (nao v4).
- Sem aliases de import. Sem `@types/node`.
- Sem `tsconfig.node.json`. Build: `vite build`.
- `vercel.json` incluido para SPA routing funcionar desde a FASE 1.
- Sem Supabase nesta fase (nao ha imports).
- Design system: `nf-green`, `nf-greenSoft`, `nf-greenPale`, `nf-cream`, `nf-beige`, `nf-ink`, `nf-gray`, `nf-line`.
- Fontes: Inter (sans) + Fraunces (display).

## 5. Rotas existentes

- `/` — Landing
- `/login`, `/register`, `/forgot-password` — Auth (placeholders)
- `/dashboard` — Protegida (placeholder)
- `*` — 404

## 6. Fases seguintes

- FASE 2: Supabase, tipos, migrations (profiles, goals, daily_routines, routine_tasks, habit_logs, food_logs, food_analysis, recipes, recipe_favorites, water_logs, weight_logs, workout_logs, sleep_logs, notifications, user_preferences, ai_conversations, subscriptions, admin_users), RLS, Storage.
- FASE 3: Auth.
- FASE 4: Onboarding.
- FASE 5: Dashboard + Rotina diaria.
- FASE 6: Habitos, Hidratacao, Sono.
- FASE 7: Peso, Progresso.
- FASE 8: Receitas, Exercicios.
- FASE 9: "Posso comer?" + "Estou com fome" + aiService.
- FASE 10: Assistente NutraForm AI.
- FASE 11: Perfil, Notificacoes.
- FASE 12: Admin.
- FASE 13: Premium + Paywall.
- FASE 14: PWA, SEO, polimento.

## 7. Regras

- Nao inventar APIs, endpoints, credenciais.
- Nao expor secrets no frontend.
- Autorizacao real via RLS.
- Mobile-first. Sem emojis.
- Sem promessas de saude irresponsaveis.
- Sem dados ficticios apresentados como reais.
