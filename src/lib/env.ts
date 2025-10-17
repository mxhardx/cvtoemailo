export const env = {
  NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://demo.supabase.co',
  NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'demo_key',
  SUPABASE_SERVICE_ROLE_KEY: process.env.SUPABASE_SERVICE_ROLE_KEY || 'demo_service_key',
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || 'demo_key',
  RESEND_API_KEY: process.env.RESEND_API_KEY || 'demo_key',
  RESEND_FROM_EMAIL: process.env.RESEND_FROM_EMAIL || 'demo@example.com',
  NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
  CRON_SECRET: process.env.CRON_SECRET || 'demo_secret',
}

