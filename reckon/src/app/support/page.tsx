import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Support — Reckon',
  description: 'Get help with Reckon. Contact us, report bugs, or share feature requests.',
}

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white font-sans">
      <div className="max-w-2xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="mb-12 pb-8 border-b border-white/8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-500 mb-4">
            Reckon · Rhea Apps
          </p>
          <h1 className="text-3xl font-bold text-white mb-2">Support</h1>
          <p className="text-white/40 text-sm">We're here to help.</p>
        </div>

        {/* Sections */}
        <div className="space-y-10 text-white/70 leading-relaxed">

          <Section title="1. Get in Touch">
            The best way to reach us is by email. Whether you have a question, ran into a
            problem, or just want to say hello — we read every message.
            <br /><br />
            <a
              href="mailto:hello@rheaapps.com"
              className="text-amber-400 hover:text-amber-300 transition-colors"
            >
              hello@rheaapps.com
            </a>
          </Section>

          <Section title="2. Report a Bug">
            If something isn't working as expected, we want to know. When writing to us, it
            helps to include:
            <br /><br />
            <ul className="list-none space-y-2 pl-0 not-prose">
              <li className="flex gap-2"><span className="text-amber-500">—</span> Your iPhone model and iOS version</li>
              <li className="flex gap-2"><span className="text-amber-500">—</span> What you were doing when the issue occurred</li>
              <li className="flex gap-2"><span className="text-amber-500">—</span> What happened vs. what you expected to happen</li>
              <li className="flex gap-2"><span className="text-amber-500">—</span> Whether the issue is reproducible</li>
            </ul>
            <br />
            Send bug reports to{' '}
            <a
              href="mailto:hello@rheaapps.com"
              className="text-amber-400 hover:text-amber-300 transition-colors"
            >
              hello@rheaapps.com
            </a>.
          </Section>

          <Section title="3. Feature Requests">
            Have an idea that would make Reckon better for you? We'd love to hear it. Feature
            requests are genuinely considered — the app exists to serve people who take their
            commitments seriously.
            <br /><br />
            Send your ideas to{' '}
            <a
              href="mailto:hello@rheaapps.com"
              className="text-amber-400 hover:text-amber-300 transition-colors"
            >
              hello@rheaapps.com
            </a>.
          </Section>

          <Section title="4. Response Time">
            We aim to respond to all support emails within 2 business days. We're a small
            team, but we take every message seriously.
          </Section>

          <Section title="5. About Reckon">
            Reckon is an iOS app built by Rhea Apps for daily self-accountability. Define the
            questions you need to answer every day — and answer them. No accounts, no cloud
            sync, no AI. Everything stays on your device, always under your control.
            <br /><br />
            <strong className="text-white">Rhea Apps</strong><br />
            Munich, Bavaria, Germany
          </Section>

        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-white/8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-white/25 text-xs">
          <span>© 2026 Rhea Apps · Munich, Germany</span>
          <Link href="/" className="hover:text-white/50 transition-colors">
            ← Back to Reckon
          </Link>
        </div>
      </div>
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-xs font-bold uppercase tracking-[0.15em] text-amber-500 mb-3">
        {title}
      </h2>
      <p>{children}</p>
    </section>
  )
}
