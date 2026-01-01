# Supabase Migrations

This directory contains SQL migration files for the AI Workshop database.

## Migration Files

### 20260101000001_create_registrations_table.sql
- Creates the main `registrations` table with detailed personal information
- Sets up UUID extension for auto-generated IDs
- Adds indexes for performance optimization
- Implements Row Level Security (RLS) policies
- Creates automatic timestamp triggers

## Table Schema

### registrations
- `id` (UUID): Primary key, auto-generated
- `full_name` (VARCHAR 255): Registrant's full name
- `email` (VARCHAR 255): Unique email address
- `phone` (VARCHAR 50): Phone number
- `age` (INTEGER): Age between 10-100
- `gender` (VARCHAR 50): Gender ('Male', 'Female', 'Other', 'Prefer not to say')
- `place` (VARCHAR 255): City/Location
- `college_school` (VARCHAR 255): Optional institution name
- `course` (VARCHAR 255): Optional course/major
- `motivation` (TEXT): Optional motivation text
- `created_at` (TIMESTAMPTZ): Auto-populated timestamp
- `updated_at` (TIMESTAMPTZ): Auto-updated timestamp

## Running Migrations

### Via Supabase Dashboard
1. Go to SQL Editor in Supabase dashboard
2. Run each migration file in order

### Via Supabase CLI
```bash
supabase db push
```

### Via Direct SQL Execution
Execute each migration file sequentially through your SQL client.

## Rollback Instructions

To rollback, create new migration files with the reverse operations:
```sql
DROP TABLE IF EXISTS registrations CASCADE;
DROP FUNCTION IF EXISTS update_updated_at_column();
```
