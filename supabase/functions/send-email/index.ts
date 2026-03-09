// @ts-nocheck
// This file runs in Deno runtime. TypeScript errors here are false positives from VS Code's TypeScript checker.
// Deno and JSR imports are not recognized by the standard TypeScript language service.
/// <reference lib="deno.window" />
import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "jsr:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const { formType, formData } = await req.json();

    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    // Store submission in database
    const submissionData: any = {
      form_type: formType,
      name: formData.name || '',
      email: formData.email,
      phone: formData.phone || '',
      message: formData.message || '',
      group_size: formData.groupSize || null,
    };

    if (formType === 'contact') {
      submissionData.trip_interest = formData.tripInterest || null;
      submissionData.preferred_dates = formData.preferredDates || null;
      if (formData.assistiveDevices) {
        submissionData.message = `Assistive Devices: ${formData.assistiveDevices.join(', ')}\n\n${formData.message || ''}`;
      }
    } else if (formType === 'booking') {
      submissionData.trip_name = formData.tripName || null;
      submissionData.departure_date = formData.departureDate || null;
    } else if (formType === 'newsletter') {
      submissionData.name = 'Newsletter Subscriber';
      submissionData.phone = 'N/A';
      submissionData.message = 'Newsletter subscription request';
    }

    const { error: dbError } = await supabase
      .from('form_submissions')
      .insert(submissionData);

    if (dbError) {
      console.error('Database error:', dbError);
      throw new Error('Failed to save form submission');
    }

    console.log('Form submission saved successfully to database');

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Your submission has been saved successfully! Our team will review it and contact you soon.',
        saved: true,
      }),
      {
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    console.error('Error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: errorMessage
      }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      }
    );
  }
});