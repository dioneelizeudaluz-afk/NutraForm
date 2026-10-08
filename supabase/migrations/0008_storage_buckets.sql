-- NutraForm - FASE 2 - 0008 storage buckets

insert into storage.buckets (id, name, public)
values
  ('meal-photos', 'meal-photos', false),
  ('avatars', 'avatars', false),
  ('recipe-images', 'recipe-images', true)
on conflict (id) do nothing;

-- meal-photos: cada utilizador gere a sua pasta
create policy "meal_photos_select_own" on storage.objects for select to authenticated
using (bucket_id = 'meal-photos' and (storage.foldername(name))[1] = auth.uid()::text);
create policy "meal_photos_insert_own" on storage.objects for insert to authenticated
with check (bucket_id = 'meal-photos' and (storage.foldername(name))[1] = auth.uid()::text);
create policy "meal_photos_update_own" on storage.objects for update to authenticated
using (bucket_id = 'meal-photos' and (storage.foldername(name))[1] = auth.uid()::text);
create policy "meal_photos_delete_own" on storage.objects for delete to authenticated
using (bucket_id = 'meal-photos' and (storage.foldername(name))[1] = auth.uid()::text);

-- avatars: cada utilizador gere a sua pasta
create policy "avatars_select_public" on storage.objects for select
to anon, authenticated
using (bucket_id = 'avatars');
create policy "avatars_insert_own" on storage.objects for insert to authenticated
with check (bucket_id = 'avatars' and (storage.foldername(name))[1] = auth.uid()::text);
create policy "avatars_update_own" on storage.objects for update to authenticated
using (bucket_id = 'avatars' and (storage.foldername(name))[1] = auth.uid()::text);
create policy "avatars_delete_own" on storage.objects for delete to authenticated
using (bucket_id = 'avatars' and (storage.foldername(name))[1] = auth.uid()::text);

-- recipe-images: leitura publica; escrita apenas admin
create policy "recipe_images_select_public" on storage.objects for select
to anon, authenticated
using (bucket_id = 'recipe-images');
create policy "recipe_images_admin_write" on storage.objects for all to authenticated
using (bucket_id = 'recipe-images' and public.is_admin())
with check (bucket_id = 'recipe-images' and public.is_admin());
