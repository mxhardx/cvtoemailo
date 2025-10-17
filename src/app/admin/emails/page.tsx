'use client'

import { Mail, Send, CheckCircle, XCircle, Eye, MousePointer } from 'lucide-react'
import { mockEmailLogs, mockStats } from '@/lib/mock-data'
import { formatDistanceToNow } from 'date-fns'
import { fr } from 'date-fns/locale'
import Link from 'next/link'

export default function EmailsPage() {
  const dailyJobsEmails = mockEmailLogs.filter((log) => log.type === 'daily_jobs')
  const cvEnhancedEmails = mockEmailLogs.filter((log) => log.type === 'cv_enhanced')

  const stats = [
    {
      title: 'Total Emails',
      value: mockStats.totalEmailsSent.toLocaleString('fr-FR'),
      icon: Mail,
      color: 'bg-blue-500',
    },
    {
      title: 'Envoyés Aujourd&apos;hui',
      value: mockStats.todayEmailsSent.toLocaleString('fr-FR'),
      icon: Send,
      color: 'bg-green-500',
    },
    {
      title: 'Taux d\'Ouverture',
      value: '78%',
      icon: Eye,
      color: 'bg-purple-500',
    },
    {
      title: 'Taux de Clic',
      value: '45%',
      icon: MousePointer,
      color: 'bg-orange-500',
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">Gestion des Emails</h1>
              <p className="text-primary-100">Suivi des emails quotidiens et notifications</p>
            </div>
            <Link
              href="/admin"
              className="px-4 py-2 bg-white text-primary-600 rounded-lg hover:bg-primary-50 font-semibold"
            >
              ← Retour au Dashboard
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className={`${stat.color} p-3 rounded-lg inline-block mb-4`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-gray-600 text-sm font-medium mb-1">{stat.title}</h3>
              <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Daily Jobs Emails */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Mail className="w-6 h-6 text-primary-600" />
            Emails Quotidiens d'Offres d'Emploi
          </h2>
          <div className="space-y-4">
            {dailyJobsEmails.map((email) => (
              <div
                key={email.id}
                className="flex items-center gap-4 p-5 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-100 hover:shadow-md transition-all"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="font-semibold text-gray-900">{email.recipient_name}</p>
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-semibold">
                      {email.jobs_count} offres
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-1">{email.recipient}</p>
                  <p className="text-sm font-medium text-gray-700">{email.subject}</p>
                  <p className="text-xs text-gray-500 mt-1">
                    {formatDistanceToNow(new Date(email.sent_at), {
                      addSuffix: true,
                      locale: fr,
                    })}
                  </p>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <div className="flex items-center gap-3">
                    {email.opened ? (
                      <div className="flex items-center gap-1 text-green-600">
                        <Eye className="w-4 h-4" />
                        <span className="text-xs font-semibold">Ouvert</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-1 text-gray-400">
                        <Eye className="w-4 h-4" />
                        <span className="text-xs">Non ouvert</span>
                      </div>
                    )}
                    {email.clicked ? (
                      <div className="flex items-center gap-1 text-blue-600">
                        <MousePointer className="w-4 h-4" />
                        <span className="text-xs font-semibold">Cliqué</span>
                      </div>
                    ) : null}
                  </div>
                  <CheckCircle className="w-6 h-6 text-green-500" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CV Enhanced Emails */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Send className="w-6 h-6 text-primary-600" />
            Emails de CV Améliorés
          </h2>
          <div className="space-y-4">
            {cvEnhancedEmails.map((email) => (
              <div
                key={email.id}
                className="flex items-center gap-4 p-5 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-100 hover:shadow-md transition-all"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <Send className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="font-semibold text-gray-900">{email.recipient_name}</p>
                    <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full font-semibold">
                      Score: {email.cv_score}/100
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-1">{email.recipient}</p>
                  <p className="text-sm font-medium text-gray-700">{email.subject}</p>
                  <p className="text-xs text-gray-500 mt-1">
                    {formatDistanceToNow(new Date(email.sent_at), {
                      addSuffix: true,
                      locale: fr,
                    })}
                  </p>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <div className="flex items-center gap-3">
                    {email.opened ? (
                      <div className="flex items-center gap-1 text-green-600">
                        <Eye className="w-4 h-4" />
                        <span className="text-xs font-semibold">Ouvert</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-1 text-gray-400">
                        <Eye className="w-4 h-4" />
                        <span className="text-xs">Non ouvert</span>
                      </div>
                    )}
                    {email.clicked ? (
                      <div className="flex items-center gap-1 text-blue-600">
                        <MousePointer className="w-4 h-4" />
                        <span className="text-xs font-semibold">Téléchargé</span>
                      </div>
                    ) : null}
                  </div>
                  <CheckCircle className="w-6 h-6 text-green-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

