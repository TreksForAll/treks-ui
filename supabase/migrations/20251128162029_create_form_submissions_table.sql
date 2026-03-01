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