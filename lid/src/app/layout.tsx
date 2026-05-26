import type { Metadata } from 'next'
import '@fontsource-variable/fraunces'
import '@fontsource-variable/outfit'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://lid.rheaapps.com'),
  title: 'LiD — Leben in Deutschland Exam Prep',
  description:
    'Practice for the Leben in Deutschland exam. 310 official questions, track your progress, pass with confidence.',
  openGraph: {
    title: 'LiD — Leben in Deutschland Exam Prep',
    description:
      'Practice for the Leben in Deutschland exam. 310 official questions, track your progress, pass with confidence.',
    url: 'https://lid.rheaapps.com',
    siteName: 'LiD',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased bg-white text-slate-700">{children}</body>
    </html>
  )
}
