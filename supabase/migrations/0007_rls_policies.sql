-- NutraForm - FASE 2 - 0007 RLS policies

create or replace function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $func$
  select exists (
    select 1 from public.profiles
    where user_id = auth.uid() and role = 'admin'
  );
$func$;

grant execute on function public.is_admin() to authenticated, anon;

alter table public.recipes enable row level security;
alter table public.recipe_favorites enable row level security;
alter table public.workout_logs enable row level security;
alter table public.food_logs enable row level security;
alter table public.food_analysis enable row level security;
alter table public.ai_conversations enable row level security;
alter table public.notifications enable row level security;
alter table public.subscriptions enable row level security;
alter table public.admin_users enable row level security;

-- profiles
create policy "profiles_select_own" on public.profiles for select to authenticated
using (user_id = auth.uid() or public.is_admin());
create policy "profiles_insert_own" on public.profiles for insert to authenticated
with check (user_id = auth.uid());
create policy "profiles_update_own" on public.profiles for update to authenticated
using (user_id = auth.uid())
with check (user_id = auth.uid() and role = (select role from public.profiles p2 where p2.user_id = auth.uid()));
create policy "profiles_admin_all" on public.profiles for all to authenticated
using (public.is_admin()) with check (public.is_admin());

-- goals
create policy "goals_own" on public.goals for all to authenticated
using (user_id = auth.uid()) with check (user_id = auth.uid());
create policy "goals_admin_read" on public.goals for select to authenticated
using (public.is_admin());

-- user_preferences
create policy "user_preferences_own" on public.user_preferences for all to authenticated
using (user_id = auth.uid()) with check (user_id = auth.uid());

-- daily_routines
create policy "daily_routines_own" on public.daily_routines for all to authenticated
using (user_id = auth.uid()) with check (user_id = auth.uid());

-- routine_tasks
create policy "routine_tasks_own" on public.routine_tasks for all to authenticated
using (user_id = auth.uid()) with check (user_id = auth.uid());

-- habit_logs
create policy "habit_logs_own" on public.habit_logs for all to authenticated
using (user_id = auth.uid()) with check (user_id = auth.uid());

-- water_logs
create policy "water_logs_own" on public.water_logs for all to authenticated
using (user_id = auth.uid()) with check (user_id = auth.uid());

-- weight_logs
create policy "weight_logs_own" on public.weight_logs for all to authenticated
using (user_id = auth.uid()) with check (user_id = auth.uid());

-- sleep_logs
create policy "sleep_logs_own" on public.sleep_logs for all to authenticated
using (user_id = auth.uid()) with check (user_id = auth.uid());

-- recipes: leitura publica das publicadas; escrita apenas admin
create policy "recipes_read_published" on public.recipes for select
to anon, authenticated
using (published = true or public.is_admin());
create policy "recipes_admin_write" on public.recipes for all to authenticated
using (public.is_admin()) with check (public.is_admin());

-- recipe_favorites
create policy "recipe_favorites_own" on public.recipe_favorites for all to authenticated
using (user_id = auth.uid()) with check (user_id = auth.uid());

-- workout_logs
create policy "workout_logs_own" on public.workout_logs for all to authenticated
using (user_id = auth.uid()) with check (user_id = auth.uid());

-- food_logs
create policy "food_logs_own" on public.food_logs for all to authenticated
using (user_id = auth.uid()) with check (user_id = auth.uid());

-- food_analysis
create policy "food_analysis_own" on public.food_analysis for all to authenticated
using (user_id = auth.uid()) with check (user_id = auth.uid());

-- ai_conversations
create policy "ai_conversations_own" on public.ai_conversations for all to authenticated
using (user_id = auth.uid()) with check (user_id = auth.uid());

-- notifications
create policy "notifications_own" on public.notifications for all to authenticated
using (user_id = auth.uid()) with check (user_id = auth.uid());

-- subscriptions
create policy "subscriptions_own_read" on public.subscriptions for select to authenticated
using (user_id = auth.uid() or public.is_admin());
create policy "subscriptions_admin_write" on public.subscriptions for all to authenticated
using (public.is_admin()) with check (public.is_admin());

-- admin_users: apenas admin
create policy "admin_users_admin_only" on public.admin_users for all to authenticated
using (public.is_admin()) with check (public.is_admin());
