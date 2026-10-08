-- NutraForm - FASE 2 - 0003 tables logs

create table if not exists public.routine_tasks (
  id uuid primary key default gen_random_uuid(),
  routine_id uuid not null references public.daily_routines(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  scheduled_time time not null,
  title text not null,
  description text,
  icon text,
  category text not null,
  completed boolean not null default false,
  completed_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index if not exists routine_tasks_routine_id_idx on public.routine_tasks(routine_id);
create index if not exists routine_tasks_user_id_idx on public.routine_tasks(user_id);
create trigger routine_tasks_set_updated_at
before update on public.routine_tasks
for each row execute function public.set_updated_at();

create table if not exists public.habit_logs (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  habit_key text not null,
  log_date date not null,
  completed boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (user_id, habit_key, log_date)
);
create index if not exists habit_logs_user_date_idx on public.habit_logs(user_id, log_date);
create trigger habit_logs_set_updated_at
before update on public.habit_logs
for each row execute function public.set_updated_at();

create table if not exists public.water_logs (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  log_date date not null,
  amount_ml integer not null check (amount_ml > 0),
  created_at timestamptz not null default now()
);
create index if not exists water_logs_user_date_idx on public.water_logs(user_id, log_date);

create table if not exists public.weight_logs (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  weight_kg numeric(5,1) not null check (weight_kg > 0),
  logged_at timestamptz not null default now(),
  note text,
  created_at timestamptz not null default now()
);
create index if not exists weight_logs_user_logged_idx on public.weight_logs(user_id, logged_at desc);

create table if not exists public.sleep_logs (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  log_date date not null,
  sleep_time time not null,
  wake_time time not null,
  duration_minutes integer,
  quality integer check (quality is null or (quality >= 1 and quality <= 5)),
  note text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (user_id, log_date)
);
create index if not exists sleep_logs_user_date_idx on public.sleep_logs(user_id, log_date);
create trigger sleep_logs_set_updated_at
before update on public.sleep_logs
for each row execute function public.set_updated_at();

-- Activar RLS em todas as tabelas desta parte
-- (as policies serao criadas na Parte B)
alter table public.profiles enable row level security;
alter table public.goals enable row level security;
alter table public.user_preferences enable row level security;
alter table public.daily_routines enable row level security;
alter table public.routine_tasks enable row level security;
alter table public.habit_logs enable row level security;
alter table public.water_logs enable row level security;
alter table public.weight_logs enable row level security;
alter table public.sleep_logs enable row level security;
