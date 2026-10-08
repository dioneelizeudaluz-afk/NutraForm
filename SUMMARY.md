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
- FASE 2 concluida (18 tabelas, RLS, 3 buckets).
- FASE 3 concluida:
  - `src/auth/AuthContext.tsx` + `src/auth/useAuth.ts`.
  - `src/services/profileService.ts`.
  - `src/components/LoadingScreen.tsx`.
  - `src/components/ProtectedRoute.tsx` (funcional).
  - `src/components/AdminRoute.tsx` (funcional, com refreshProfile ao montar).
  - `src/pages/auth/Login.tsx`, `Register.tsx`, `ForgotPassword.tsx`, `ResetPassword.tsx`, `DashboardHome.tsx`.
  - `src/layouts/PublicLayout.tsx` com estado de sessao.
  - `src/routes/AppRoutes.tsx` com rotas auth.
  - `src/App.tsx` com `AuthProvider`.

## 4. Decisoes tecnicas

- `AuthProvider` subscreve `onAuthStateChange` ANTES de `getSession()` (evita race condition).
- `profileLoading` separado de `loading`.
- `AdminRoute` chama `refreshProfile` ao montar (evita bug do Kylie Borge).
- `updateProfile` nunca envia `role`.
- Logout redirecciona para `/`.
- `/reset-password` valida sessao (link do email).

## 5. Rotas

- `/` — Landing
- `/login`, `/register`, `/forgot-password`, `/reset-password`
- `/dashboard` — Protegida
- `*` — 404

## 6. Promover a admin

```sql
update public.profiles set role = 'admin' where user_id = '<uuid>';
```

## 7. Fases seguintes

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

## 8. Regras

- Nao inventar APIs, endpoints, credenciais.
- Nao expor secrets no frontend.
- Autorizacao real via RLS.
- Mobile-first. Sem emojis.
- Sem promessas de saude irresponsaveis.
- Sem dados ficticios apresentados como reais.
