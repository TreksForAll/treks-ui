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

    let emailSubject = '';
    let emailBody = '';

    if (formType === 'contact') {
      emailSubject = `New Contact Form Submission from ${formData.name}`;
      emailBody = `
New contact form submission received:

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CONTACT DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ADVENTURE DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Trip Interest: ${formData.tripInterest || 'Not specified'}
Group Size: ${formData.groupSize || 'Not specified'}
Preferred Dates: ${formData.preferredDates || 'Not specified'}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ASSISTIVE DEVICES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

${formData.assistiveDevices && formData.assistiveDevices.length > 0 ? formData.assistiveDevices.join(', ') : 'None specified'}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ACCESSIBILITY NEEDS & PREFERENCES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

${formData.message || 'No additional message provided'}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Submitted from: https://treksforall.in/contact
      `;
    } else if (formType === 'booking') {
      emailSubject = `New Booking Inquiry: ${formData.tripName} - ${formData.name}`;
      emailBody = `
New booking inquiry received:

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TRIP DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Trip: ${formData.tripName}
Departure Date: ${formData.departureDate}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
GUEST DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Group Size: ${formData.groupSize}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
MESSAGE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

${formData.message || 'No additional message provided'}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
      `;
    } else if (formType === 'newsletter') {
      emailSubject = `New Newsletter Subscription: ${formData.email}`;
      emailBody = `
New newsletter subscription:

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SUBSCRIBER DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Email: ${formData.email}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Subscribed from: https://treksforall.in
      `;
    }

    // Get Resend API key from environment
    const resendApiKey = Deno.env.get('RESEND_API_KEY');

    if (!resendApiKey) {
      console.error('RESEND_API_KEY not found in environment');
      return new Response(
        JSON.stringify({
          success: true,
          message: 'Form submitted successfully! Your inquiry has been saved and our team will contact you soon.',
          saved: true,
          emailSent: false
        }),
        {
          headers: {
            ...corsHeaders,
            'Content-Type': 'application/json',
          },
        }
      );
    }

    // Send email via Resend
    try {
      const emailPayload = {
        from: 'Treks For All <onboarding@resend.dev>',
        to: ['admin@treksforall.in'],
        subject: emailSubject,
        text: emailBody,
      };
      
      const emailResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${resendApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailPayload),
      });

      const emailResult = await emailResponse.json();

      if (!emailResponse.ok) {
        console.error('Email sending failed:', emailResult);
        return new Response(
          JSON.stringify({
            success: true,
            message: 'Form submitted successfully! Your inquiry has been saved.',
            saved: true,
            emailSent: false
          }),
          {
            headers: {
              ...corsHeaders,
              'Content-Type': 'application/json',
            },
          }
        );
      }

      console.log('Email sent successfully to admin@treksforall.in');

      return new Response(
        JSON.stringify({
          success: true,
          message: 'Form submitted and email sent successfully!',
          saved: true,
          emailSent: true,
          emailId: emailResult.id
        }),
        {
          headers: {
            ...corsHeaders,
            'Content-Type': 'application/json',
          },
        }
      );
    } catch (emailError) {
      console.error('Email sending exception:', emailError);
      return new Response(
        JSON.stringify({
          success: true,
          message: 'Form submitted successfully! Your inquiry has been saved.',
          saved: true,
          emailSent: false
        }),
        {
          headers: {
            ...corsHeaders,
            'Content-Type': 'application/json',
          },
        }
      );
    }
  } catch (error) {
    console.error('Error:', error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message
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