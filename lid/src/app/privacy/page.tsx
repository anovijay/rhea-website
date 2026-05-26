import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy — LiD',
  description: 'LiD collects no personal data. Everything stays on your device.',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white font-sans">
      <div className="max-w-2xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="mb-12 pb-8 border-b border-white/8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-yellow-500 mb-4">
            LiD · Rhea Apps
          </p>
          <h1 className="text-3xl font-bold text-white mb-2">Privacy Policy</h1>
          <p className="text-white/40 text-sm">
            Last updated: May 25, 2026 · Effective immediately
          </p>
        </div>

        {/* Summary callout */}
        <div className="mb-10 p-5 bg-yellow-500/10 border border-yellow-500/20 rounded-xl text-white/80 leading-relaxed">
          <strong className="text-white">The short version:</strong> LiD does not collect,
          store, or share any personal data. Everything stays on your device. Always.
        </div>

        {/* Sections */}
        <div className="space-y-10 text-white/70 leading-relaxed">

          <Section title="1. Who We Are">
            LiD is an iOS application developed and published by Rhea Apps, a company based in
            Munich, Germany. If you have any questions about this policy, contact us at{' '}
            <a href="mailto:hello@rheaapps.com" className="text-yellow-400 hover:text-yellow-300 transition-colors">
              hello@rheaapps.com
            </a>.
          </Section>

          <Section title="2. Data We Collect">
            <strong className="text-white">None.</strong> LiD does not collect any personal
            information. The app has no user accounts, no sign-in, and no backend server.
            <br /><br />
            All data you generate in LiD — your practice history, scores, and bookmarked
            questions — is stored locally on your device using Apple&apos;s built-in storage.
            It never leaves your device and is never transmitted to Rhea Apps or any third party.
          </Section>

          <Section title="3. Analytics & Tracking">
            LiD contains no analytics SDKs, no crash reporting tools, no advertising networks,
            and no third-party tracking of any kind. We do not know which questions you
            practised, how you scored, or how often you use the app. That information belongs
            to you alone.
          </Section>

          <Section title="4. Third-Party Services">
            LiD does not integrate with any third-party services. There are no social logins,
            no cloud sync services, and no external APIs.
            <br /><br />
            The App Store distribution is handled by Apple. Apple&apos;s own privacy practices
            apply to your use of the App Store and are governed by{' '}
            <a
              href="https://www.apple.com/privacy/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-400 hover:text-yellow-300 transition-colors"
            >
              Apple&apos;s Privacy Policy
            </a>.
          </Section>

          <Section title="5. Data Storage & Security">
            Your data is stored exclusively on your device in Apple&apos;s secure local storage.
            It is protected by your device&apos;s own security mechanisms (passcode, Face ID,
            Touch ID). If you delete the app, all data is permanently removed from your device.
          </Section>

          <Section title="6. Children's Privacy">
            LiD is suitable for all ages. Since we collect no personal data whatsoever, there
            are no special considerations regarding children&apos;s privacy.
          </Section>

          <Section title="7. Your Rights (GDPR)">
            As a company based in Germany, we operate under the EU General Data Protection
            Regulation (GDPR). Since LiD collects no personal data, there is no data for us
            to provide, correct, or delete. You already hold complete control over your data —
            it lives on your device and nowhere else.
          </Section>

          <Section title="8. Changes to This Policy">
            If we ever update this privacy policy, we will update the &quot;Last updated&quot; date at
            the top of this page and notify users via an app update. We will never introduce
            data collection without being transparent about it.
          </Section>

          <Section title="9. Contact">
            Questions about this privacy policy? We&apos;re happy to answer.
            <br /><br />
            <strong className="text-white">Rhea Apps</strong><br />
            Munich, Bavaria, Germany<br />
            <a href="mailto:hello@rheaapps.com" className="text-yellow-400 hover:text-yellow-300 transition-colors">
              hello@rheaapps.com
            </a>
          </Section>

        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-white/8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-white/25 text-xs">
          <span>© 2026 Rhea Apps · Munich, Germany</span>
          <Link href="/" className="hover:text-white/50 transition-colors">
            ← Back to LiD
          </Link>
        </div>
      </div>
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-xs font-bold uppercase tracking-[0.15em] text-yellow-500 mb-3">
        {title}
      </h2>
      <p>{children}</p>
    </section>
  )
}
