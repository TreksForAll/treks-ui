/**
 * Xano API Client
 * - submitForm()       → VITE_XANO_FORMS_URL      (contact + booking)
 * - submitNewsletter() → VITE_XANO_NEWSLETTER_URL  (email only)
 * Both endpoints are protected by the same x-api-key header.
 */

const XANO_FORMS_URL = import.meta.env.VITE_XANO_FORMS_URL as string | undefined;
const XANO_NEWSLETTER_URL = import.meta.env.VITE_XANO_NEWSLETTER_URL as string | undefined;
const XANO_API_KEY = import.meta.env.VITE_XANO_API_KEY as string | undefined;

export interface ContactFormData {
  formType: 'contact';
  name: string;
  email: string;
  phone: string;
  tripInterest?: string;
  groupSize?: string;
  preferredDates?: string;
  message: string;
  assistiveDevices?: string[];
}

export interface BookingFormData {
  formType: 'booking';
  name: string;
  email: string;
  phone: string;
  tripName: string;
  departureDate: string;
  groupSize: string;
  message: string;
}

export interface B2BFormData {
  formType: 'b2b';
  name: string;
  email: string;
  phone?: string;
  organisation?: string;
  message: string;
}

export interface ImmersionFormData {
  formType: 'immersion';
  name: string;
  email: string;
  organisation?: string;
  message?: string;
}

export type FormData = ContactFormData | BookingFormData | B2BFormData | ImmersionFormData;

type ApiResult = { success: boolean; message: string; data?: unknown };

// ---------------------------------------------------------------------------
// Internal helper
// ---------------------------------------------------------------------------

function buildHeaders(): Record<string, string> {
  const headers: Record<string, string> = { 'Content-Type': 'application/json' };
  if (XANO_API_KEY) headers['x-api-key'] = XANO_API_KEY;
  return headers;
}

async function post(url: string, body: unknown): Promise<ApiResult> {
  const response = await fetch(url, {
    method: 'POST',
    headers: buildHeaders(),
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const err = await response.json().catch(() => ({})) as { message?: string };
    throw new Error(err.message ?? `Xano API error: ${response.status}`);
  }

  const data = await response.json();
  return { success: true, message: 'Submitted successfully!', data };
}

// ---------------------------------------------------------------------------
// Newsletter  (Xano table: newsletter — fields: id, created_at, email)
// ---------------------------------------------------------------------------

export async function submitNewsletter(email: string): Promise<ApiResult> {
  try {
    if (!XANO_NEWSLETTER_URL) throw new Error('VITE_XANO_NEWSLETTER_URL not configured in .env');
    return await post(XANO_NEWSLETTER_URL, { email });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    console.error('[Xano newsletter]', message);
    return { success: false, message: `Subscription failed: ${message}` };
  }
}

// ---------------------------------------------------------------------------
// Form submissions  (Xano table: form_submissions — contact + booking)
// ---------------------------------------------------------------------------

export async function submitForm(data: FormData): Promise<ApiResult> {
  try {
    if (!XANO_FORMS_URL) throw new Error('VITE_XANO_FORMS_URL not configured in .env');

    const { formType, ...rest } = data;

    const payload = {
      form_type: formType,
      submitted_at: new Date().toISOString(),
      status: 'new',
      name: rest.name,
      email: rest.email,
      phone: rest.phone ?? null,
      message: (rest as { message?: string }).message || null,
      form_data: rest,   // full extra fields stored as JSON in Xano
    };

    return await post(XANO_FORMS_URL, payload);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    console.error('[Xano form]', message);
    return { success: false, message: `Submission failed: ${message}` };
  }
}
