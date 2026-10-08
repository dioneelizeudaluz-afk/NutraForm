-- NutraForm - FASE 2 - 0002 tables main

create table if not exists public.profiles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null unique references auth.users(id) on delete cascade,
  display_name text,
  avatar_url text,
  birth_date date,
  gender text,
  height_cm numeric(5,1),
  role text not null default 'user' check (role in ('user','admin')),
  onboarded boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index if not exists profiles_user_id_idx on public.profiles(user_id);
create index if not exists profiles_role_idx on public.profiles(role);
create trigger profiles_set_updated_at
before update on public.profiles
for each row execute function public.set_updated_at();

create table if not exists public.goals (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  goal_type text not null,
  start_weight_kg numeric(5,1),
  target_weight_kg numeric(5,1),
  current_weight_kg numeric(5,1),
  activity_level text,
  active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index if not exists goals_user_id_idx on public.goals(user_id);
create index if not exists goals_active_idx on public.goals(user_id, active);
create trigger goals_set_updated_at
before update on public.goals
for each row execute function public.set_updated_at();

create table if not exists public.user_preferences (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null unique references auth.users(id) on delete cascade,
  wake_time time,
  sleep_time time,
  breakfast_time time,
  lunch_time time,
  dinner_time time,
  meals_per_day integer,
  favorite_foods jsonb not null default '[]'::jsonb,
  disliked_foods jsonb not null default '[]'::jsonb,
  dietary_restrictions jsonb not null default '[]'::jsonb,
  available_foods jsonb not null default '[]'::jsonb,
  notifications_enabled boolean not null default true,
  notification_water boolean not null default true,
  notification_meals boolean not null default true,
  notification_workout boolean not null default true,
  notification_sleep boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index if not exists user_preferences_user_id_idx on public.user_preferences(user_id);
create trigger user_preferences_set_updated_at
before update on public.user_preferences
for each row execute function public.set_updated_at();

create table if not exists public.daily_routines (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  routine_date date not null,
  generated_by text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (user_id, routine_date)
);
create index if not exists daily_routines_user_date_idx on public.daily_routines(user_id, routine_date);
create trigger daily_routines_set_updated_at
before update on public.daily_routines
for each row execute function public.set_updated_at();
