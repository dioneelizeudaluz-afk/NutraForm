-- NutraForm - FASE 2 - 0004 tables content

create table if not exists public.recipes (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  description text,
  category text not null,
  image_url text,
  ingredients jsonb not null default '[]'::jsonb,
  steps jsonb not null default '[]'::jsonb,
  prep_minutes integer,
  difficulty text,
  servings integer,
  nutrition_approx jsonb,
  is_premium boolean not null default false,
  published boolean not null default true,
  created_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index if not exists recipes_category_idx on public.recipes(category);
create index if not exists recipes_published_idx on public.recipes(published);
create trigger recipes_set_updated_at
before update on public.recipes
for each row execute function public.set_updated_at();

create table if not exists public.recipe_favorites (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  recipe_id uuid not null references public.recipes(id) on delete cascade,
  created_at timestamptz not null default now(),
  unique (user_id, recipe_id)
);
create index if not exists recipe_favorites_user_idx on public.recipe_favorites(user_id);

create table if not exists public.workout_logs (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  workout_key text not null,
  workout_name text not null,
  duration_minutes integer,
  completed_at timestamptz not null default now(),
  note text,
  created_at timestamptz not null default now()
);
create index if not exists workout_logs_user_idx on public.workout_logs(user_id, completed_at desc);
