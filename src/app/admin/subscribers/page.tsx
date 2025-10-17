'use client'

import { Users, Mail, Phone, Calendar, FileText, MapPin, Search } from 'lucide-react'
import { mockSubscribers, mockStats } from '@/lib/mock-data'
import { formatDistanceToNow, format } from 'date-fns'
import { fr } from 'date-fns/locale'
import Link from 'next/link'
import { useState } from 'react'

export default function SubscribersPage() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredSubscribers = mockSubscribers.filter(
    (sub) =>
      sub.full_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sub.email.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">Liste des Abonnés</h1>
              <p className="text-primary-100">
                Gérez vos {mockStats.totalSubscribers.toLocaleString('fr-FR')} abonnés inscrits
              </p>
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
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center gap-4">
              <div className="bg-blue-500 p-3 rounded-lg">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-gray-600 text-sm">Total Abonnés</p>
                <p className="text-3xl font-bold text-gray-900">{mockStats.totalSubscribers.toLocaleString('fr-FR')}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center gap-4">
              <div className="bg-green-500 p-3 rounded-lg">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-gray-600 text-sm">Actifs</p>
                <p className="text-3xl font-bold text-gray-900">{mockStats.activeSubscribers.toLocaleString('fr-FR')}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center gap-4">
              <div className="bg-purple-500 p-3 rounded-lg">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-gray-600 text-sm">CVs Traités</p>
                <p className="text-3xl font-bold text-gray-900">{mockStats.totalCVsProcessed.toLocaleString('fr-FR')}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Rechercher un abonné par nom ou email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Info Message */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 mb-6 border border-blue-200">
          <div className="flex items-center gap-3">
            <div className="bg-blue-500 p-2 rounded-lg">
              <Users className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="font-semibold text-gray-900">
                {mockStats.totalSubscribers.toLocaleString('fr-FR')} abonnés totaux
              </p>
              <p className="text-sm text-gray-600">
                Affichage de quelques profils représentatifs ci-dessous
              </p>
            </div>
          </div>
        </div>

        {/* Subscribers List */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid gap-4 p-6">
            {filteredSubscribers.map((subscriber) => (
              <div
                key={subscriber.id}
                className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all hover:border-primary-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                      {subscriber.full_name
                        .split(' ')
                        .map((n) => n[0])
                        .join('')}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {subscriber.full_name}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <Mail className="w-4 h-4" />
                          <span>{subscriber.email}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Phone className="w-4 h-4" />
                          <span>{subscriber.phone}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      subscriber.status === 'active'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    {subscriber.status === 'active' ? 'Actif' : 'Inactif'}
                  </span>
                </div>

                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div className="flex items-center gap-2 text-gray-700">
                    <Calendar className="w-4 h-4 text-gray-500" />
                    <div>
                      <p className="text-xs text-gray-500">Inscrit</p>
                      <p className="text-sm font-medium">
                        {format(new Date(subscriber.created_at), 'dd MMM yyyy', { locale: fr })}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-gray-700">
                    <FileText className="w-4 h-4 text-gray-500" />
                    <div>
                      <p className="text-xs text-gray-500">CVs téléchargés</p>
                      <p className="text-sm font-bold text-primary-600">{subscriber.cvs_count}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-gray-700">
                    <Calendar className="w-4 h-4 text-gray-500" />
                    <div>
                      <p className="text-xs text-gray-500">Dernier CV</p>
                      <p className="text-sm font-medium">
                        {formatDistanceToNow(new Date(subscriber.last_cv_date), {
                          addSuffix: true,
                          locale: fr,
                        })}
                      </p>
                    </div>
                  </div>
                </div>

                {subscriber.job_preferences && (
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-sm font-semibold text-gray-700 mb-2">Préférences:</p>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {(subscriber.job_preferences as any).keywords?.map(
                        (keyword: string, idx: number) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium"
                          >
                            {keyword}
                          </span>
                        )
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span>
                        {(subscriber.job_preferences as any).locations?.join(', ')}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

