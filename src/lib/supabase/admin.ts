// Mock Supabase admin client for demo
export const supabaseAdmin = {
  from: () => ({
    select: () => ({
      eq: () => ({
        single: () => Promise.resolve({ data: null, error: null }),
      }),
    }),
  }),
  storage: {
    from: () => ({
      upload: () => Promise.resolve({ data: null, error: null }),
      getPublicUrl: () => ({ publicUrl: 'demo-url' }),
    }),
  },
}

