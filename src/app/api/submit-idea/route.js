import { NextResponse } from 'next/server';
import { RateLimiterMemory } from 'rate-limiter-flexible';
import validator from 'validator';
import { google } from 'googleapis';

// Initialize rate limiter - max 3 requests per hour per IP
const rateLimiter = new RateLimiterMemory({
  keyGenerator: (req) => getClientIP(req),
  points: 3, // Number of requests
  duration: 3600, // Per 1 hour
});

// Get client IP address
function getClientIP(request) {
  // Check various headers for IP address
  const forwarded = request.headers.get('x-forwarded-for');
  const realIP = request.headers.get('x-real-ip');
  const clientIP = request.headers.get('x-client-ip');
  
  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }
  if (realIP) {
    return realIP;
  }
  if (clientIP) {
    return clientIP;
  }
  return 'unknown';
}

// Verify hCaptcha token
async function verifyCaptcha(token) {
  if (process.env.NODE_ENV === 'development') {
    // Skip captcha verification in development
    return true;
  }
  
  try {
    const response = await fetch('https://hcaptcha.com/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        secret: process.env.HCAPTCHA_SECRET_KEY,
        response: token,
      }),
    });
    
    const data = await response.json();
    return data.success;
  } catch (error) {
    console.error('Captcha verification error:', error);
    return false;
  }
}

// Sanitize input to prevent XSS
function sanitizeInput(input) {
  if (typeof input !== 'string') return input;
  
  // Remove HTML tags
  input = input.replace(/<[^>]*>/g, '');
  
  // Remove potential script content
  input = input.replace(/javascript:/gi, '');
  input = input.replace(/on\w+=/gi, '');
  
  // Trim and normalize whitespace
  return input.trim().replace(/\s+/g, ' ');
}

// Advanced spam detection
function detectSpam(formData) {
  const { name, email, description } = formData;
  
  // Check for spam patterns in description
  const spamPatterns = [
    /\b(viagra|cialis|casino|poker|gambling|loan|bitcoin|crypto)\b/gi,
    /\b(make money|work from home|guaranteed income)\b/gi,
    /\b(click here|visit now|act now|limited time)\b/gi,
    /(http[s]?:\/\/[^\s]+)/gi, // URLs
    /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g, // Email addresses in description
  ];
  
  for (const pattern of spamPatterns) {
    if (pattern.test(description)) {
      return true;
    }
  }
  
  // Check for suspicious patterns
  if (description.length < 10) {
    return true;
  }
  
  // Check for repeated characters or words
  if (/(.)\1{10,}/.test(description)) {
    return true;
  }
  
  // Check for excessive capitalization
  const upperCaseRatio = (description.match(/[A-Z]/g) || []).length / description.length;
  if (upperCaseRatio > 0.5 && description.length > 20) {
    return true;
  }
  
  return false;
}

// Validate form data
function validateFormData(formData) {
  const errors = {};
  
  // Email validation
  if (!formData.email || !validator.isEmail(formData.email)) {
    errors.email = 'Valid email address is required';
  }
  
  // Description validation
  if (!formData.description || formData.description.trim().length < 10) {
    errors.description = 'Project description must be at least 10 characters';
  }
  
  if (formData.description && formData.description.length > 2000) {
    errors.description = 'Project description must be less than 2000 characters';
  }
  
  // Name validation (if provided)
  if (formData.name && formData.name.length > 100) {
    errors.name = 'Name must be less than 100 characters';
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}

// Send confirmation email to user
async function sendUserConfirmation(email, name) {
  const userName = name || 'there';
  
  try {
    const { Resend } = await import('resend');
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    await resend.emails.send({
      from: 'FourkComputing <noreply@fourkcomputing.com>',
      to: email,
      subject: 'Your Project Idea Has Been Received - FourkComputing',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #3b82f6, #1d4ed8); padding: 30px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 28px;">Thank You!</h1>
          </div>
          
          <div style="padding: 30px; background: #f9fafb;">
            <p style="font-size: 16px; color: #374151; margin-bottom: 20px;">
              Hi ${userName},
            </p>
            
            <p style="font-size: 16px; color: #374151; line-height: 1.6; margin-bottom: 20px;">
              Thank you for sharing your project idea with FourkComputing! We're excited to learn more about your vision.
            </p>
            
            <div style="background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #3b82f6; margin: 20px 0;">
              <h3 style="color: #1f2937; margin: 0 0 10px 0;">What happens next?</h3>
              <ul style="color: #6b7280; margin: 0; padding-left: 20px;">
                <li>Our team will review your project details within 24 hours</li>
                <li>We'll analyze the technical requirements and scope</li>
                <li>You'll receive a personalized response with next steps</li>
                <li>If it's a good fit, we'll schedule a consultation call</li>
              </ul>
            </div>
            
            <p style="font-size: 16px; color: #374151; line-height: 1.6; margin-bottom: 20px;">
              In the meantime, feel free to explore our portfolio and learn more about our development process on our website.
            </p>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="https://fourkcomputing.com/work" style="background: #3b82f6; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: 600;">
                View Our Work
              </a>
            </div>
            
            <p style="font-size: 14px; color: #6b7280; margin-bottom: 10px;">
              Best regards,<br>
              The FourkComputing Team
            </p>
            
            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;">
            
            <p style="font-size: 12px; color: #9ca3af; text-align: center;">
              This email was sent because you submitted a project idea at fourkcomputing.com
            </p>
          </div>
        </div>
      `,
    });
    
    return true;
  } catch (error) {
    console.error('Error sending user confirmation:', error);
    return false;
  }
}

// Send notification email to admin
async function sendAdminNotification(formData) {
  const { name, email, description } = formData;
  
  try {
    const { Resend } = await import('resend');
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    await resend.emails.send({
      from: 'FourkComputing Contact Form <noreply@fourkcomputing.com>',
      to: process.env.ADMIN_EMAIL || 'admin@fourkcomputing.com',
      subject: `New Project Idea Submission`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #1f2937; padding: 20px; text-align: center;">
            <h1 style="color: white; margin: 0;">New Project Idea Submission</h1>
          </div>
          
          <div style="padding: 30px; background: #f9fafb;">
            <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h3 style="color: #1f2937; margin: 0 0 15px 0;">Contact Information</h3>
              <p><strong>Name:</strong> ${name || 'Not provided'}</p>
              <p><strong>Email:</strong> ${email}</p>
            </div>
            
            <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h3 style="color: #1f2937; margin: 0 0 15px 0;">Project Description</h3>
              <div style="background: #f3f4f6; padding: 15px; border-radius: 6px; white-space: pre-wrap;">${description}</div>
            </div>
            
            <div style="background: #fef3c7; padding: 15px; border-radius: 8px; border-left: 4px solid #f59e0b;">
              <p style="margin: 0; color: #92400e;">
                <strong>Action Required:</strong> Please respond to this inquiry within 24 hours.
              </p>
            </div>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="mailto:${email}" style="background: #3b82f6; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: 600; margin-right: 10px;">
                Reply to Client
              </a>
              <a href="https://fourkcomputing.com/admin" style="background: #6b7280; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: 600;">
                View Admin Dashboard
              </a>
            </div>
          </div>
        </div>
      `,
    });
    
    return true;
  } catch (error) {
    console.error('Error sending admin notification:', error);
    return false;
  }
}

// Log to Google Sheets (optional)
async function logToGoogleSheets(formData, request) {
  if (!process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || !process.env.GOOGLE_SHEET_ID) {
    return false;
  }
  
  try {
    // Use individual environment variables (more reliable for private keys)
    const credentials = {
      type: 'service_account',
      project_id: process.env.GOOGLE_PROJECT_ID,
      private_key_id: process.env.GOOGLE_PRIVATE_KEY_ID,
      private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      client_id: process.env.GOOGLE_CLIENT_ID,
      auth_uri: 'https://accounts.google.com/o/oauth2/auth',
      token_uri: 'https://oauth2.googleapis.com/token',
      auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
      client_x509_cert_url: `https://www.googleapis.com/robot/v1/metadata/x509/${encodeURIComponent(process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL)}`,
      universe_domain: 'googleapis.com'
    };
    
    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });
    
    const sheets = google.sheets({ version: 'v4', auth });
    
    const { name, email, description } = formData;
    const timestamp = new Date().toISOString();
    
    // Get IP address for logging
    const ip = request.headers.get('x-forwarded-for') || 
             request.headers.get('x-real-ip') || 
             'unknown';
    
    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: 'A:E', // Updated to match spreadsheet columns A-E
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [
          [timestamp, name || '', email, description, ip]
        ],
      },
    });
    
    return true;
  } catch (error) {
    console.error('Error logging to Google Sheets:', error);
    return false;
  }
}

export async function POST(request) {
  try {
    // Rate limiting check
    try {
      await rateLimiter.consume(request);
    } catch (rateLimiterRes) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Too many requests. Please try again in an hour.' 
        },
        { status: 429 }
      );
    }
    
    // Parse request body
    const body = await request.json();
    const { name, email, description, honeypot, captchaToken } = body;
    
    // Check honeypot field (should be empty)
    if (honeypot) {
      console.log('Spam detected: honeypot field filled');
      return NextResponse.json(
        { success: false, message: 'Invalid submission' },
        { status: 400 }
      );
    }
    
    // Verify captcha
    if (!await verifyCaptcha(captchaToken)) {
      return NextResponse.json(
        { success: false, message: 'Captcha verification failed' },
        { status: 400 }
      );
    }
    
    // Sanitize inputs
    const sanitizedData = {
      name: sanitizeInput(name),
      email: sanitizeInput(email),
      description: sanitizeInput(description),
    };
    
    // Validate form data
    const validation = validateFormData(sanitizedData);
    if (!validation.isValid) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Validation failed',
          errors: validation.errors 
        },
        { status: 400 }
      );
    }
    
    // Spam detection
    if (detectSpam(sanitizedData)) {
      console.log('Spam detected in form submission');
      return NextResponse.json(
        { success: false, message: 'Invalid content detected' },
        { status: 400 }
      );
    }
    
    // Send emails
    const emailPromises = [
      sendUserConfirmation(sanitizedData.email, sanitizedData.name),
      sendAdminNotification(sanitizedData)
    ];
    
    const [userEmailSent, adminEmailSent] = await Promise.all(emailPromises);
    
    // Log to Google Sheets (optional)
    const sheetsLogged = await logToGoogleSheets(sanitizedData, request);
    
    // Log results
    console.log('Form submission processed:', {
      userEmailSent,
      adminEmailSent,
      sheetsLogged,
      email: sanitizedData.email
    });
    
    return NextResponse.json({
      success: true,
      message: 'Your project idea has been submitted successfully!',
      details: {
        confirmationEmailSent: userEmailSent,
        adminNotified: adminEmailSent,
        dataLogged: sheetsLogged
      }
    });
    
  } catch (error) {
    console.error('API route error:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'An internal error occurred. Please try again.' 
      },
      { status: 500 }
    );
  }
}