# NutraForm

Transforme sua rotina. Transforme seu corpo.

Plataforma inteligente que ajuda pessoas a melhorar a alimentacao, controlar a fome,
criar uma rotina de exercicios e acompanhar a propria evolucao.

## Estado

- FASE 1 concluida: estrutura, design system, landing, rotas base.
- FASE 2 concluida: Supabase, 18 tabelas, RLS, Storage.
- FASE 3 em pausa: autenticacao (a ser reconstruida devagar, com testes entre passos).

## Stack

- React + TypeScript + Vite
- Tailwind CSS v3
- React Router v6
- Supabase

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

## Base de dados

Migrations em `supabase/migrations/` (0001 a 0008).

## Build

```bash
npm run build
```
