# SUMMARY — NutraForm

## 1. Visao geral

Plataforma SaaS/health-tech de rotina e habitos saudaveis. Modelo freemium.

## 2. Stack

- React + TypeScript + Vite
- Tailwind CSS v3
- React Router v6
- Supabase

## 3. Estado

- FASE 1 concluida: estrutura, design, landing, rotas base.
- FASE 2 concluida: 18 tabelas, RLS, 3 buckets (avatars, meal-photos, recipe-images).
- FASE 3 em pausa (auth removida; sera reconstruida devagar).

## 4. Rotas existentes

- `/` — Landing
- `/login`, `/register`, `/forgot-password` — placeholders
- `/dashboard` — protegida (placeholder)
- `*` — 404

## 5. Proximos passos

- Reconstruir FASE 3 com passos pequenos e teste entre cada passo:
  1. Criar `src/lib/supabase.ts` (ja existe da FASE 2).
  2. Criar `AuthContext` + `useAuth` **sem** ligar ao App.
  3. Testar build + landing.
  4. Envolver App com `AuthProvider`.
  5. Testar build + landing.
  6. Activar `ProtectedRoute`.
  7. Testar.
  8. Substituir paginas placeholder por reais, uma de cada vez.

## 6. Regras

- Nao inventar APIs.
- Nao expor secrets no frontend.
- Autorizacao real via RLS.
- Mobile-first. Sem emojis.
- Sem promessas de saude irresponsaveis.
