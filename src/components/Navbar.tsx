'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { FileText, Briefcase, LogOut, User } from 'lucide-react'
import { createClient } from '@/lib/supabase/client'
import { useEffect, useState } from 'react'

export default function Navbar() {
  const pathname = usePathname()
  const router = useRouter()
  const [user, setUser] = useState<any>(null)
  const supabase = createClient()

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      setUser(user)
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
    })

    return () => subscription.unsubscribe()
  }, [])

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' })
    router.push('/')
    router.refresh()
  }

  const isActive = (path: string) => pathname === path

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2">
            <FileText className="w-8 h-8 text-primary-600" />
            <span className="text-xl font-bold text-gray-900">CV Enhancer</span>
          </Link>

          <div className="flex items-center gap-4">
            {/* Admin Links - Always visible for demo */}
            <Link
              href="/admin"
              className={`flex items-center gap-2 px-3 py-2 rounded-md transition-colors ${
                pathname?.startsWith('/admin')
                  ? 'text-primary-600 bg-primary-50'
                  : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
              }`}
            >
              <User className="w-5 h-5" />
              <span className="font-medium">Admin</span>
            </Link>

            {user ? (
              <>
                <Link
                  href="/dashboard"
                  className={`flex items-center gap-2 px-3 py-2 rounded-md transition-colors ${
                    isActive('/dashboard')
                      ? 'text-primary-600 bg-primary-50'
                      : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                  }`}
                >
                  <FileText className="w-5 h-5" />
                  <span className="font-medium">Mes CVs</span>
                </Link>

                <Link
                  href="/jobs"
                  className={`flex items-center gap-2 px-3 py-2 rounded-md transition-colors ${
                    isActive('/jobs')
                      ? 'text-primary-600 bg-primary-50'
                      : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                  }`}
                >
                  <Briefcase className="w-5 h-5" />
                  <span className="font-medium">Offres d'emploi</span>
                </Link>

                <div className="flex items-center gap-2 text-gray-700">
                  <User className="w-5 h-5" />
                  <span className="text-sm">{user.email}</span>
                </div>

                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 rounded-md transition-colors font-medium"
                >
                  <LogOut className="w-5 h-5" />
                  Déconnexion
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="px-4 py-2 text-gray-700 hover:text-primary-600 font-medium"
                >
                  Connexion
                </Link>
                <Link
                  href="/signup"
                  className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 font-medium"
                >
                  S&apos;inscrire
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

