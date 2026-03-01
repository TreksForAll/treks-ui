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