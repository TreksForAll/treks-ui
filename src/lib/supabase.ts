import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;
const supabaseServiceRoleKey = import.meta.env.VITE_SUPABASE_SERVICE_ROLE_KEY as string;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables. Check VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in .env');
}

/** Public client – uses anon key, subject to RLS (use for form inserts) */
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

/**
 * Admin client – uses service role key, bypasses RLS.
 * Only use server-side or in protected admin routes.
 * Requires VITE_SUPABASE_SERVICE_ROLE_KEY in .env
 */
export const supabaseAdmin = supabaseServiceRoleKey
  ? createClient(supabaseUrl, supabaseServiceRoleKey, {
      auth: { persistSession: false },
    })
  : null;

export type FormSubmission = {
  id: string;
  form_type: 'contact' | 'booking';
  name: string;
  email: string;
  phone: string;
  trip_interest: string | null;
  group_size: string | null;
  preferred_dates: string | null;
  trip_name: string | null;
  departure_date: string | null;
  message: string;
  status: 'new' | 'reviewed' | 'contacted';
  created_at: string;
};
