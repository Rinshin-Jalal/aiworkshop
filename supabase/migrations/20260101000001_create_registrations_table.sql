-- Migration: Create registrations table
-- Created: 2026-01-01

-- Enable UUID extension if not already enabled
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create registrations table with detailed personal information
CREATE TABLE IF NOT EXISTS registrations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  full_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  phone VARCHAR(50) NOT NULL,
  age INTEGER NOT NULL CHECK (age >= 10 AND age <= 100),
  gender VARCHAR(50) NOT NULL CHECK (gender IN ('Male', 'Female', 'Other', 'Prefer not to say')),
  place VARCHAR(255) NOT NULL,
  college_school VARCHAR(255),
  course VARCHAR(255),
  motivation TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_registrations_email ON registrations(email);
CREATE INDEX IF NOT EXISTS idx_registrations_created_at ON registrations(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_registrations_place ON registrations(place);

-- Create function to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Add trigger for updated_at
DROP TRIGGER IF EXISTS update_registrations_updated_at ON registrations;
CREATE TRIGGER update_registrations_updated_at
  BEFORE UPDATE ON registrations
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Enable Row Level Security
ALTER TABLE registrations ENABLE ROW LEVEL SECURITY;

-- Create RLS policies
CREATE POLICY "Anyone can insert registrations"
  ON registrations
  FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Anyone can read registrations"
  ON registrations
  FOR SELECT
  USING (true);

CREATE POLICY "No updates allowed"
  ON registrations
  FOR UPDATE
  USING (false);

CREATE POLICY "No deletes allowed"
  ON registrations
  FOR DELETE
  USING (false);
