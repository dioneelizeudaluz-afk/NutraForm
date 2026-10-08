# SUMMARY — NutraForm

## 1. Visao geral

Plataforma SaaS/health-tech de rotina e habitos saudaveis. Modelo freemium.

## 2. Stack

- React + TypeScript + Vite
- Tailwind CSS v3
- React Router v6
- Supabase (auth, DB, storage)

## 3. Estado

- FASE 1 concluida.
- FASE 2 concluida:
  - `@supabase/supabase-js` instalado.
  - `src/lib/supabase.ts` (cliente tipado, robusto contra env vars em falta).
  - `src/types/database.ts` (tipos de todas as 18 tabelas + funcao `is_admin`).
  - Migrations: `0001_core_tables.sql`, `0002_tables_main.sql`, `0003_tables_logs.sql`, `0004_tables_content.sql`, `0005_tables_analysis.sql`, `0006_tables_system.sql`, `0007_rls_policies.sql`, `0008_storage_buckets.sql`.
  - 18 tabelas com RLS activo:
    - profiles, goals, user_preferences, daily_routines, routine_tasks, habit_logs, water_logs, weight_logs, sleep_logs
    - recipes, recipe_favorites, workout_logs
    - food_logs, food_analysis, ai_conversations
    - notifications, subscriptions, admin_users
  - Funcao `is_admin()` (SECURITY DEFINER, `search_path = public`).
  - Buckets: `meal-photos` (privado, pasta por user), `avatars` (leitura publica, escrita na pasta do user), `recipe-images` (leitura publica, escrita admin).

## 4. Modelo de admin

- Fonte de verdade: `profiles.role` (`user` ou `admin`).
- `admin_users` e tabela de **log/auditoria** (nao fonte de verdade).

## 5. Decisoes tecnicas

- `supabase.ts` nao lanca na importacao; expoe `supabaseConfigError` e `requireSupabase()`.
- Enums text com check constraints (facilita evolucao).
- Timestamps `timestamptz` em todas as tabelas.
- Triggers `updated_at` nas tabelas que possuem essa coluna.
- Trigger `handle_new_user` cria `profiles` ao registar.
- RLS: cada user so ve os seus dados; recipes sao publicas se `published = true`.

## 6. Fases seguintes

- FASE 3: Auth (login, register, forgot, reset, useAuth, ProtectedRoute, AdminRoute).
- FASE 4: Onboarding multi-etapas.
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
