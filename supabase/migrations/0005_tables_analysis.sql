-- NutraForm - FASE 2 - 0005 tables analysis

create table if not exists public.food_logs (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  meal_type text not null,
  description text not null,
  photo_path text,
  logged_at timestamptz not null default now(),
  created_at timestamptz not null default now()
);
create index if not exists food_logs_user_idx on public.food_logs(user_id, logged_at desc);

create table if not exists public.food_analysis (
  id uuid primary key default gen_random_uuid(),
  food_log_id uuid not null references public.food_logs(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  status text not null default 'pending',
  meal_name text,
  protein text,
  carbs text,
  fats text,
  vegetables_fiber text,
  portion_estimate text,
  recommendation text,
  positives jsonb,
  adjustments jsonb,
  alternatives jsonb,
  raw_response jsonb,
  analyzed_at timestamptz,
  created_at timestamptz not null default now()
);
create index if not exists food_analysis_food_log_idx on public.food_analysis(food_log_id);
create index if not exists food_analysis_user_idx on public.food_analysis(user_id);

create table if not exists public.ai_conversations (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  role text not null check (role in ('user','assistant','system')),
  content text not null,
  context jsonb,
  created_at timestamptz not null default now()
);
create index if not exists ai_conversations_user_idx on public.ai_conversations(user_id, created_at desc);
