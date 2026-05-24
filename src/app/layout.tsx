import type { Metadata } from 'next'
import { Fraunces, Outfit } from 'next/font/google'
import './globals.css'

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
})

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.rheaapps.com'),
  title: 'Rhea Apps — AI Agents for Growing Businesses',
  description:
    'Munich-based AI consultancy specializing in custom AI agents and intelligent automation for small and medium-scale companies. Enterprise expertise, SME-focused delivery.',
  keywords:
    'AI agents, AI consulting, SME automation, enterprise architecture, IT governance, Munich, Germany',
  openGraph: {
    title: 'Rhea Apps — AI Agents for Growing Businesses',
    description:
      'Custom AI agents and automation solutions built by experts with 20+ years at Emirates Airlines, Qatar Airways, and Essity.',
    url: 'https://www.rheaapps.com',
    siteName: 'Rhea Apps',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${outfit.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
