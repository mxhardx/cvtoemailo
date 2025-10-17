import Link from 'next/link'
import { Upload, Sparkles, Mail, TrendingUp, CheckCircle } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="bg-gradient-to-b from-primary-50 to-white">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-8">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
            Transformez votre CV avec
            <span className="text-primary-600"> l&apos;Intelligence Artificielle</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Téléchargez votre CV, obtenez une analyse professionnelle et recevez une version
            améliorée par email. Profitez aussi d&apos;offres d&apos;emploi personnalisées chaque jour.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/signup"
              className="px-8 py-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
            >
              Commencer gratuitement
            </Link>
            <Link
              href="/login"
              className="px-8 py-4 bg-white text-primary-600 border-2 border-primary-600 rounded-lg hover:bg-primary-50 font-semibold text-lg transition-all"
            >
              Se connecter
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Comment ça fonctionne ?
        </h2>
        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto">
              <Upload className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">1. Téléchargez</h3>
            <p className="text-gray-600">
              Uploadez votre CV en format PDF, DOCX ou TXT en quelques secondes
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto">
              <Sparkles className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">2. Analyse IA</h3>
            <p className="text-gray-600">
              Notre IA analyse votre CV et identifie les points à améliorer
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto">
              <TrendingUp className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">3. Amélioration</h3>
            <p className="text-gray-600">
              Recevez un CV optimisé avec des suggestions professionnelles
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto">
              <Mail className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">4. Recevez par email</h3>
            <p className="text-gray-600">
              Votre CV amélioré vous est envoyé directement par email
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Pourquoi choisir CV Enhancer ?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Analyse professionnelle',
                description:
                  'Notre IA analyse chaque section de votre CV et fournit des recommandations détaillées',
              },
              {
                title: 'Format ATS-friendly',
                description:
                  'Assurez-vous que votre CV passe les systèmes de tri automatique des entreprises',
              },
              {
                title: 'Offres d\'emploi quotidiennes',
                description:
                  'Recevez chaque jour des offres d\'emploi correspondant à votre profil',
              },
              {
                title: 'Gratuit et rapide',
                description:
                  'Créez un compte gratuitement et obtenez votre CV amélioré en quelques minutes',
              },
              {
                title: 'Confidentialité garantie',
                description:
                  'Vos données sont sécurisées et ne seront jamais partagées avec des tiers',
              },
              {
                title: 'Support multilingue',
                description:
                  'Améliorez votre CV en français, anglais ou arabe selon vos besoins',
              },
            ].map((benefit, idx) => (
              <div key={idx} className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Prêt à améliorer votre CV ?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Rejoignez des centaines d'utilisateurs qui ont déjà amélioré leur CV
          </p>
          <Link
            href="/signup"
            className="inline-block px-8 py-4 bg-white text-primary-600 rounded-lg hover:bg-gray-100 font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
          >
            Commencer maintenant
          </Link>
        </div>
      </section>
    </div>
  )
}

