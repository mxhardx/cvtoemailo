'use client'

import { Users, FileText, Mail, Briefcase, TrendingUp, Activity, CheckCircle, Clock } from 'lucide-react'
import { mockStats, mockRecentActivity, mockJobOffers } from '@/lib/mock-data'
import { formatDistanceToNow } from 'date-fns'
import { fr } from 'date-fns/locale'

export default function AdminDashboard() {
  const stats = [
    {
      title: 'Total Abonnés',
      value: mockStats.totalSubscribers.toLocaleString('fr-FR'),
      icon: Users,
      color: 'bg-blue-500',
      change: '+12%',
    },
    {
      title: 'Abonnés Actifs',
      value: mockStats.activeSubscribers.toLocaleString('fr-FR'),
      icon: Activity,
      color: 'bg-green-500',
      change: '+8%',
    },
    {
      title: 'CVs Traités',
      value: mockStats.totalCVsProcessed.toLocaleString('fr-FR'),
      icon: FileText,
      color: 'bg-purple-500',
      change: '+23%',
    },
    {
      title: 'Emails Envoyés',
      value: mockStats.totalEmailsSent.toLocaleString('fr-FR'),
      icon: Mail,
      color: 'bg-pink-500',
      change: '+15%',
    },
    {
      title: 'Offres Disponibles',
      value: mockStats.jobOffersAvailable.toLocaleString('fr-FR'),
      icon: Briefcase,
      color: 'bg-orange-500',
      change: `+${mockStats.newJobsToday} aujourd&apos;hui`,
    },
    {
      title: 'Score Moyen CV',
      value: `${mockStats.avgCVScore}/100`,
      icon: TrendingUp,
      color: 'bg-indigo-500',
      change: '+3 points',
    },
  ]

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'cv_upload':
        return <FileText className="w-5 h-5 text-blue-500" />
      case 'email_sent':
        return <Mail className="w-5 h-5 text-green-500" />
      case 'job_match':
        return <Briefcase className="w-5 h-5 text-orange-500" />
      default:
        return <Activity className="w-5 h-5 text-gray-500" />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold mb-2">Tableau de Bord Administrateur</h1>
          <p className="text-primary-100">Vue d'ensemble de la plateforme CV Enhancer</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm font-semibold text-green-600">{stat.change}</span>
              </div>
              <h3 className="text-gray-600 text-sm font-medium mb-1">{stat.title}</h3>
              <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Recent Activity */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Activity className="w-6 h-6 text-primary-600" />
              Activité Récente
            </h2>
            <div className="space-y-4">
              {mockRecentActivity.map((activity) => (
                <div
                  key={activity.id}
                  className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="mt-1">{getActivityIcon(activity.type)}</div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-gray-900">{activity.user}</p>
                    <p className="text-sm text-gray-600">{activity.action}</p>
                    <p className="text-xs text-gray-500 mt-1">
                      {formatDistanceToNow(new Date(activity.timestamp), {
                        addSuffix: true,
                        locale: fr,
                      })}
                    </p>
                  </div>
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                </div>
              ))}
            </div>
          </div>

          {/* System Performance */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-primary-600" />
              Performance Système
            </h2>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">Taux de Réussite</span>
                  <span className="text-lg font-bold text-green-600">
                    {mockStats.successRate}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-green-500 h-3 rounded-full"
                    style={{ width: `${mockStats.successRate}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">
                    Emails Envoyés Aujourd'hui
                  </span>
                  <span className="text-lg font-bold text-blue-600">
                    {mockStats.todayEmailsSent}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-blue-500 h-3 rounded-full"
                    style={{ width: `${(mockStats.todayEmailsSent / 10) * 100}%` }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                <div className="text-center p-4 bg-primary-50 rounded-lg">
                  <Clock className="w-6 h-6 text-primary-600 mx-auto mb-2" />
                  <p className="text-sm text-gray-600 mb-1">Temps Moyen</p>
                  <p className="text-xl font-bold text-gray-900">{mockStats.avgResponseTime}</p>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <Briefcase className="w-6 h-6 text-green-600 mx-auto mb-2" />
                  <p className="text-sm text-gray-600 mb-1">Offres Aujourd'hui</p>
                  <p className="text-xl font-bold text-gray-900">{mockStats.newJobsToday}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Latest Jobs */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Briefcase className="w-6 h-6 text-primary-600" />
            Dernières Offres d'Emploi
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Titre</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Entreprise</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Localisation</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Salaire</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Correspondances</th>
                </tr>
              </thead>
              <tbody>
                {mockJobOffers.map((job) => (
                  <tr key={job.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-4">
                      <p className="font-semibold text-gray-900">{job.title}</p>
                      <p className="text-xs text-gray-500">
                        {formatDistanceToNow(new Date(job.posted_date), {
                          addSuffix: true,
                          locale: fr,
                        })}
                      </p>
                    </td>
                    <td className="py-4 px-4 text-gray-700">{job.company}</td>
                    <td className="py-4 px-4 text-gray-600">{job.location}</td>
                    <td className="py-4 px-4">
                      <span className="text-green-600 font-semibold">{job.salary}</span>
                    </td>
                    <td className="py-4 px-4">
                      <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold">
                        {job.matched_users} utilisateurs
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

