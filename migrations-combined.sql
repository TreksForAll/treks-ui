
-- ==========================================
-- Migration: 20251128162029_create_form_submissions_table.sql
-- ==========================================

/*
  # Create Form Submissions Table

  1. New Tables
    - `form_submissions`
      - `id` (uuid, primary key)
      - `form_type` (text) - 'contact' or 'booking'
      - `name` (text)
      - `email` (text)
      - `phone` (text)
      - `trip_interest` (text, nullable) - for contact forms
      - `group_size` (text, nullable)
      - `preferred_dates` (text, nullable) - for contact forms
      - `trip_name` (text, nullable) - for booking forms
      - `departure_date` (text, nullable) - for booking forms
      - `message` (text)
      - `created_at` (timestamptz)
      - `status` (text) - 'new', 'reviewed', 'contacted'

  2. Security
    - Enable RLS on `form_submissions` table
    - No public access - only authenticated admin users can read
*/

CREATE TABLE IF NOT EXISTS form_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  form_type text NOT NULL,
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  trip_interest text,
  group_size text,
  preferred_dates text,
  trip_name text,
  departure_date text,
  message text NOT NULL,
  status text DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE form_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Only authenticated users can read submissions"
  ON form_submissions
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Public can insert submissions"
  ON form_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);


-- ==========================================
-- Migration: 20260112023819_fix_form_submissions_rls_policy.sql
-- ==========================================

/*
  # Fix Form Submissions RLS Policy

  1. Security Changes
    - Drop the insecure "Public can insert submissions" policy that uses WITH CHECK (true)
    - Create a new restrictive policy that validates:
      - Required fields are not empty
      - Email format is valid
      - Form type is one of the allowed values
      - Reasonable length limits on text fields

  2. Notes
    - This maintains public form submission capability while adding security validation
    - Prevents spam and malicious submissions through basic data validation
*/

DROP POLICY IF EXISTS "Public can insert submissions" ON form_submissions;

CREATE POLICY "Anonymous users can submit valid forms"
  ON form_submissions
  FOR INSERT
  TO anon
  WITH CHECK (
    form_type IN ('contact', 'booking')
    AND length(trim(name)) >= 2
    AND length(trim(name)) <= 100
    AND length(trim(email)) >= 5
    AND length(trim(email)) <= 255
    AND email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'
    AND length(trim(phone)) >= 10
    AND length(trim(phone)) <= 20
    AND length(trim(message)) >= 1
    AND length(trim(message)) <= 5000
  );

