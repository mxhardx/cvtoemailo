import { z } from 'zod'

const envSchema = z.object({
  NEXT_PUBLIC_SUPABASE_URL: z.string().url(),
  NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string().min(1),
  SUPABASE_SERVICE_ROLE_KEY: z.string().min(1),
  OPENAI_API_KEY: z.string().min(1),
  RESEND_API_KEY: z.string().min(1),
  RESEND_FROM_EMAIL: z.string().email(),
  NEXT_PUBLIC_APP_URL: z.string().url(),
  CRON_SECRET: z.string().min(1),
})

export const env = {
  NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL!,
  NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  SUPABASE_SERVICE_ROLE_KEY: process.env.SUPABASE_SERVICE_ROLE_KEY!,
  OPENAI_API_KEY: process.env.OPENAI_API_KEY!,
  RESEND_API_KEY: process.env.RESEND_API_KEY!,
  RESEND_FROM_EMAIL: process.env.RESEND_FROM_EMAIL!,
  NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
  CRON_SECRET: process.env.CRON_SECRET!,
}

// Validate env on build
if (process.env.NODE_ENV !== 'production') {
  try {
    envSchema.parse(env)
  } catch (error) {
    console.warn('⚠️  Environment variables validation failed. Some features may not work.')
  }
}

