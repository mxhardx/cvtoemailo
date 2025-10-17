export interface CVAnalysis {
  strengths: string[]
  weaknesses: string[]
  suggestions: string[]
  score: number
  keywords: string[]
  missing_sections: string[]
}

export interface EnhancedCV {
  content: string
  improvements: string[]
  format: 'markdown' | 'html'
}

export interface JobOffer {
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

export interface JobPreferences {
  keywords: string[]
  locations: string[]
  job_types: string[]
  min_salary?: number
}

export interface ApiResponse<T> {
  ok: boolean
  data?: T
  error?: {
    code: string
    message: string
  }
}

