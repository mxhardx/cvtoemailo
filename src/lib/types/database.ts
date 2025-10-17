export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          email: string
          full_name: string | null
          phone: string | null
          job_preferences: Json | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          email: string
          full_name?: string | null
          phone?: string | null
          job_preferences?: Json | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          full_name?: string | null
          phone?: string | null
          job_preferences?: Json | null
          created_at?: string
          updated_at?: string
        }
      }
      cvs: {
        Row: {
          id: string
          user_id: string
          original_filename: string
          original_url: string
          enhanced_content: string | null
          enhanced_url: string | null
          analysis: Json | null
          status: 'pending' | 'processing' | 'completed' | 'failed'
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          original_filename: string
          original_url: string
          enhanced_content?: string | null
          enhanced_url?: string | null
          analysis?: Json | null
          status?: 'pending' | 'processing' | 'completed' | 'failed'
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          original_filename?: string
          original_url?: string
          enhanced_content?: string | null
          enhanced_url?: string | null
          analysis?: Json | null
          status?: 'pending' | 'processing' | 'completed' | 'failed'
          created_at?: string
          updated_at?: string
        }
      }
      job_offers: {
        Row: {
          id: string
          title: string
          company: string
          location: string
          description: string
          url: string
          source: string
          posted_date: string | null
          salary: string | null
          job_type: string | null
          skills: string[] | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          company: string
          location: string
          description: string
          url: string
          source: string
          posted_date?: string | null
          salary?: string | null
          job_type?: string | null
          skills?: string[] | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          company?: string
          location?: string
          description?: string
          url?: string
          source?: string
          posted_date?: string | null
          salary?: string | null
          job_type?: string | null
          skills?: string[] | null
          created_at?: string
          updated_at?: string
        }
      }
      email_logs: {
        Row: {
          id: string
          user_id: string
          type: 'cv_enhanced' | 'daily_jobs'
          subject: string
          sent_at: string
          status: 'sent' | 'failed'
          error: string | null
        }
        Insert: {
          id?: string
          user_id: string
          type: 'cv_enhanced' | 'daily_jobs'
          subject: string
          sent_at?: string
          status?: 'sent' | 'failed'
          error?: string | null
        }
        Update: {
          id?: string
          user_id?: string
          type?: 'cv_enhanced' | 'daily_jobs'
          subject?: string
          sent_at?: string
          status?: 'sent' | 'failed'
          error?: string | null
        }
      }
    }
  }
}

