# NutraForm

Transforme sua rotina. Transforme seu corpo.

Plataforma inteligente que ajuda pessoas a melhorar a alimentacao, controlar a fome,
criar uma rotina de exercicios e acompanhar a propria evolucao.

## Estado

- FASE 1: estrutura, design system, landing, rotas base.
- FASE 2: Supabase, 18 tabelas, RLS, Storage.
- FASE 3: autenticacao completa (login, registo, reset, protected route).
- FASE 4 pendente: onboarding.

## Stack

- React + TypeScript + Vite
- Tailwind CSS v3
- React Router v6
- Supabase (auth, DB, storage)

## Instalacao

```bash
npm install
cp .env.example .env
npm run dev
```

## Scripts

- `npm run dev`
- `npm run build`
- `npm run preview`

## Autenticacao

- `AuthProvider` em `src/auth/AuthContext.tsx`.
- `useAuth()` em `src/auth/useAuth.ts`.
- `ProtectedRoute` e `AdminRoute` em `src/components/`.
- Sessao persistente via Supabase Auth (`persistSession: true`, `detectSessionInUrl: true`).
- Trigger SQL `handle_new_user` cria `profiles` automaticamente ao registar.
- O campo `profiles.role` NAO e editavel pelo utilizador (protegido por RLS).

### Rotas de autenticacao

- `/login`
- `/register`
- `/forgot-password`
- `/reset-password` (link enviado por email)

### Promover a admin

No Supabase SQL Editor:

```sql
update public.profiles set role = 'admin' where user_id = '<uuid-do-user>';
```

## Base de dados

Migrations em `supabase/migrations/` (0001 a 0008).

## Build

```bash
npm run build
```
