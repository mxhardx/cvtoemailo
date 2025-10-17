import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CV Enhancer - Améliorez votre CV avec l\'IA',
  description:
    'Téléchargez votre CV, obtenez une analyse détaillée et une version améliorée par IA. Recevez des offres d\'emploi quotidiennes adaptées à votre profil.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  )
}

