'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import JobCard from '@/components/JobCard'
import { Search, Loader2, Briefcase } from 'lucide-react'
import type { JobOffer } from '@/lib/types'

export default function JobsPage() {
  const router = useRouter()
  const [jobs, setJobs] = useState<JobOffer[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    fetchJobs()
  }, [searchQuery])

  const fetchJobs = async () => {
    setLoading(true)
    try {
      const params = new URLSearchParams()
      if (searchQuery) params.append('search', searchQuery)
      
      const response = await fetch(`/api/jobs/list?${params}`)
      const data = await response.json()

      if (data.ok) {
        setJobs(data.data.jobs)
      }
    } catch (error) {
      console.error('Error fetching jobs:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    setSearchQuery(search)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Offres d'emploi</h1>
          <p className="text-gray-600">
            Découvrez les dernières opportunités professionnelles
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <form onSubmit={handleSearch} className="max-w-2xl">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Rechercher par titre, entreprise, compétence..."
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 font-medium"
              >
                Rechercher
              </button>
            </div>
          </form>
        </div>

        {/* Jobs List */}
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="w-12 h-12 text-primary-600 animate-spin" />
          </div>
        ) : jobs.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2">
            {jobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md p-12 text-center">
            <Briefcase className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Aucune offre trouvée
            </h3>
            <p className="text-gray-500">
              {searchQuery
                ? 'Essayez avec d&apos;autres mots-clés'
                : 'Les offres d&apos;emploi apparaîtront ici bientôt'}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

