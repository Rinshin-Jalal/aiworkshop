-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create registrations table
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

-- Create index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_registrations_email ON registrations(email);

-- Create index on created_at for sorting
CREATE INDEX IF NOT EXISTS idx_registrations_created_at ON registrations(created_at DESC);

-- Create index on place for location-based queries
CREATE INDEX IF NOT EXISTS idx_registrations_place ON registrations(place);

-- Add trigger for updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_registrations_updated_at
  BEFORE UPDATE ON registrations
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Enable Row Level Security (RLS)
ALTER TABLE registrations ENABLE ROW LEVEL SECURITY;

-- Create policy for inserts (anyone can register)
CREATE POLICY "Anyone can insert registrations"
  ON registrations
  FOR INSERT
  WITH CHECK (true);

-- Create policy for reads (anyone can view registrations)
CREATE POLICY "Anyone can read registrations"
  ON registrations
  FOR SELECT
  USING (true);

-- Create policy for updates (no updates allowed)
CREATE POLICY "No updates allowed"
  ON registrations
  FOR UPDATE
  USING (false);

-- Create policy for deletes (no deletes allowed via client)
CREATE POLICY "No deletes allowed"
  ON registrations
  FOR DELETE
  USING (false);
