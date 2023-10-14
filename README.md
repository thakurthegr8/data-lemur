# SQL Playground: Mastering SQL through Interactive Problem Solving

Welcome to the SQL Playground, a platform designed to empower SQL enthusiasts to enhance their skills through hands-on problem-solving. Whether you're a beginner eager to learn or an experienced SQL pro looking for challenges, this playground has something for everyone!
![Ace SQL](https://github.com/thakurthegr8/data-lemur/blob/main/public/assets/og.png)

## Table of Contents

- [Features](#features)

## Features

- **Top SQL Challenges:** Access a curated collection of challenging SQL questions to test and improve your skills.
- **Interactive Environment:** Practice your queries in a real-world SQL environment without the fear of affecting production data.
- **Immediate Feedback:** Receive instant feedback on your queries to learn from your mistakes and refine your approach.

## Initialize
1. Clone this repo.
2. Setup .env.local file
 ```bash
 # look into https://upstash.com/docs/redis/overall/getstarted
 CACHE_URL=""
 CACHE_ACCESS_TOKEN=""
 # look into https://supabase.com/
 NEXT_PUBLIC_SUPABASE_URL=""
 NEXT_PUBLIC_SUPABASE_ANON_KEY= ""
 ```
4. Make following tables
- Submissions
 ```sql
 create table
public.submissions (
  id text not null,
  created_at timestamp with time zone not null default now(),
  question text not null,
  solution text not null,
  status text not null,
  difficulty text not null,
  constraint submissions_pkey primary key (id, created_at, question)
) tablespace pg_default;
```
 - Users
 ```sql
  create table
  public.users (
  id text not null,
  created_at timestamp with time zone not null default now(),
  name text not null,
  profile_image text null,
  constraint users_pkey primary key (id)) tablespace pg_default;
 ```
 4. Make following views
  - solved_submissions_view_4
```sql
create view
  public.solved_submissions_view_4 as
select distinct
  submissions.question,
  submissions.difficulty,
  submissions.id
from
  submissions;
```
5. Run locally
```bash
npm run dev
```
6. Build the project
```bash
npm run build
```
