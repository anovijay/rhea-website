import type { Metadata } from 'next'
import '@fontsource/bebas-neue'
import '@fontsource-variable/dm-sans'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://reckon.rheaapps.com'),
  title: 'Reckon — Daily Accountability, Just You',
  description:
    'Define the questions you need to answer every day. No AI. No magic. No excuses. Just you and your commitments.',
  openGraph: {
    title: 'Reckon — Daily Accountability, Just You',
    description:
      'Define the questions you need to answer every day. No AI. No magic. No excuses. Just you and your commitments.',
    url: 'https://reckon.rheaapps.com',
    siteName: 'Reckon',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased bg-[#0f0f0f] text-white">{children}</body>
    </html>
  )
}
