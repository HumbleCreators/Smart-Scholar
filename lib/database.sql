-- Create a table for public profiles
create table profiles (
  id uuid references auth.users not null,
  updated_at timestamp with time zone,
  username text unique,
  full_name text,
  avatar_url text,
  website text,

  primary key (id),
  unique(username),
  constraint username_length check (char_length(username) >= 3)
);

alter table profiles enable row level security;

create policy "Public profiles are viewable by everyone."
  on profiles for select
  using ( true );

create policy "Users can insert their own profile."
  on profiles for insert
  with check ( auth.uid() = id );

create policy "Users can update own profile."
  on profiles for update
  using ( auth.uid() = id );

-- Create a table for learning paths
create table learning_paths (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users not null,
  path_name text not null,
  description text,
  modules jsonb not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table learning_paths enable row level security;

create policy "Users can view their own learning paths."
  on learning_paths for select
  using ( auth.uid() = user_id );

create policy "Users can create their own learning paths."
  on learning_paths for insert
  with check ( auth.uid() = user_id );

create policy "Users can update their own learning paths."
  on learning_paths for update
  using ( auth.uid() = user_id );

create policy "Users can delete their own learning paths."
  on learning_paths for delete
  using ( auth.uid() = user_id );

-- Create a table for user progress
create table user_progress (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users not null,
  path_id uuid references learning_paths not null,
  progress integer not null,
  completed boolean default false not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table user_progress enable row level security;

create policy "Users can view their own progress."
  on user_progress for select
  using ( auth.uid() = user_id );

create policy "Users can create their own progress."
  on user_progress for insert
  with check ( auth.uid() = user_id );

create policy "Users can update their own progress."
  on user_progress for update
  using ( auth.uid() = user_id );

create policy "Users can delete their own progress."
  on user_progress for delete
  using ( auth.uid() = user_id );
