'use client'

import { MapPin, Building2, Clock, DollarSign, ExternalLink } from 'lucide-react'
import type { JobOffer } from '@/lib/types'
import { formatDistanceToNow } from 'date-fns'
import { fr } from 'date-fns/locale'

interface JobCardProps {
  job: JobOffer
}

export default function JobCard({ job }: JobCardProps) {
  const timeAgo = job.created_at
    ? formatDistanceToNow(new Date(job.created_at), { addSuffix: true, locale: fr })
    : null

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-200">
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h3>
          <div className="flex items-center gap-2 text-primary-600 font-semibold mb-2">
            <Building2 className="w-4 h-4" />
            <span>{job.company}</span>
          </div>
        </div>
        <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
          {job.source}
        </span>
      </div>

      <div className="space-y-2 mb-4">
        <div className="flex items-center gap-2 text-gray-600">
          <MapPin className="w-4 h-4" />
          <span>{job.location}</span>
        </div>

        {job.job_type && (
          <div className="flex items-center gap-2 text-gray-600">
            <Clock className="w-4 h-4" />
            <span>{job.job_type}</span>
          </div>
        )}

        {job.salary && (
          <div className="flex items-center gap-2 text-green-600 font-semibold">
            <DollarSign className="w-4 h-4" />
            <span>{job.salary}</span>
          </div>
        )}

        {timeAgo && (
          <div className="text-sm text-gray-500">
            Publiée {timeAgo}
          </div>
        )}
      </div>

      <p className="text-gray-700 mb-4 line-clamp-3">{job.description}</p>

      {job.skills && job.skills.length > 0 && (
        <div className="mb-4">
          <p className="text-sm font-semibold text-gray-700 mb-2">Compétences:</p>
          <div className="flex flex-wrap gap-2">
            {job.skills.slice(0, 6).map((skill, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
            {job.skills.length > 6 && (
              <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                +{job.skills.length - 6} plus
              </span>
            )}
          </div>
        </div>
      )}

      <a
        href={job.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium"
      >
        Voir l'offre
        <ExternalLink className="w-4 h-4" />
      </a>
    </div>
  )
}

