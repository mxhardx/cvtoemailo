import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import CVUpload from '@/components/CVUpload'
import { FileText, Clock, CheckCircle, XCircle } from 'lucide-react'
import { formatDistanceToNow } from 'date-fns'
import { fr } from 'date-fns/locale'

export default async function DashboardPage() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single()

  const { data: cvs } = await supabase
    .from('cvs')
    .select('*')
    .eq('user_id', user.id)
    .order('created_at', { ascending: false })

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-5 h-5 text-green-500" />
      case 'processing':
      case 'pending':
        return <Clock className="w-5 h-5 text-yellow-500 animate-spin" />
      case 'failed':
        return <XCircle className="w-5 h-5 text-red-500" />
      default:
        return null
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed':
        return 'Terminé'
      case 'processing':
        return 'En cours'
      case 'pending':
        return 'En attente'
      case 'failed':
        return 'Échoué'
      default:
        return status
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Bienvenue, {profile?.full_name || 'Utilisateur'}!
          </h1>
          <p className="text-gray-600">
            Téléchargez votre CV pour obtenir une analyse et une version améliorée
          </p>
        </div>

        {/* Upload Section */}
        <section className="mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Télécharger un nouveau CV</h2>
            <CVUpload />
          </div>
        </section>

        {/* CVs History */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Mes CVs</h2>
          {cvs && cvs.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {cvs.map((cv) => (
                <div
                  key={cv.id}
                  className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-200"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary-100 rounded-lg">
                        <FileText className="w-6 h-6 text-primary-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-gray-900 truncate">
                          {cv.original_filename}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {formatDistanceToNow(new Date(cv.created_at), {
                            addSuffix: true,
                            locale: fr,
                          })}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-4">
                    {getStatusIcon(cv.status)}
                    <span className="text-sm font-medium text-gray-700">
                      {getStatusText(cv.status)}
                    </span>
                  </div>

                  {cv.analysis && (
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Score de qualité</span>
                        <span className="text-lg font-bold text-primary-600">
                          {cv.analysis.score}/100
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-primary-600 h-2 rounded-full transition-all"
                          style={{ width: `${cv.analysis.score}%` }}
                        />
                      </div>
                    </div>
                  )}

                  {cv.status === 'completed' && cv.enhanced_content && (
                    <button
                      onClick={() => {
                        const blob = new Blob([cv.enhanced_content], { type: 'text/html' })
                        const url = URL.createObjectURL(blob)
                        const a = document.createElement('a')
                        a.href = url
                        a.download = `CV_ameliore_${Date.now()}.html`
                        a.click()
                        URL.revokeObjectURL(url)
                      }}
                      className="w-full px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium"
                    >
                      Télécharger CV amélioré
                    </button>
                  )}

                  {cv.status === 'failed' && (
                    <p className="text-sm text-red-600">
                      Une erreur est survenue lors du traitement
                    </p>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-md p-12 text-center">
              <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                Aucun CV téléchargé
              </h3>
              <p className="text-gray-500">
                Commencez par télécharger votre premier CV ci-dessus
              </p>
            </div>
          )}
        </section>
      </div>
    </div>
  )
}

