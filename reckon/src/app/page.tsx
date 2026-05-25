import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Reckon — Daily Accountability, Just You',
}

const notList = [
  'AI-powered',
  'Gamified',
  'Social',
  'Motivational',
  'A coaching app',
  'A magic formula',
]

const steps = [
  {
    number: '01',
    title: 'Write Your Questions',
    body: 'Define the commitments that matter to you. "Did you exercise today?" "Did you eat well?" Your questions, your rules.',
  },
  {
    number: '02',
    title: 'Answer Every Day',
    body: 'At a time you choose, Reckon asks. You answer. Honestly. No one is watching — except you.',
  },
  {
    number: '03',
    title: 'Own Your Pattern',
    body: 'See your consistency laid bare. No hiding from streaks broken. No pretending. Just the truth of how you lived.',
  },
]

export default function Page() {
  return (
    <>
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 lg:px-12 h-16 border-b border-white/5 bg-[#0f0f0f]/90 backdrop-blur-md">
        <span className="font-display text-2xl tracking-widest text-white">RECKON</span>
        <a
          href="#download"
          className="text-xs font-semibold uppercase tracking-widest text-amber-400 hover:text-amber-300 transition-colors"
        >
          Download
        </a>
      </nav>

      <main>
        {/* ── HERO ── */}
        <section className="relative min-h-screen flex items-center overflow-hidden px-6 lg:px-12 pt-16">
          {/* Background grid */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          />
          {/* Amber glow */}
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="relative max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center py-24">
            {/* Text */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-500 mb-6">
                A Rhea Apps product
              </p>
              <h1 className="font-display text-[clamp(5rem,14vw,10rem)] leading-[0.92] text-white mb-8">
                RECKON
                <br />
                <span className="text-amber-400 text-amber-glow">WITH</span>
                <br />
                YOURSELF.
              </h1>
              <p className="text-lg lg:text-xl text-white/60 leading-relaxed max-w-md mb-10">
                Define the questions that matter. Answer them every day.
                Watch what you&apos;re made of.
              </p>
              <div className="flex flex-wrap gap-4 items-center" id="download">
                <AppStoreBadge />
                <p className="text-xs text-white/30 uppercase tracking-widest">
                  iOS · Free
                </p>
              </div>
            </div>

            {/* Phone mockup */}
            <div className="hidden lg:flex justify-center">
              <PhoneMockup />
            </div>
          </div>

          {/* Scroll hint */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/20">
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <svg className="w-4 h-4 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </section>

        {/* ── PHILOSOPHY ── */}
        <section className="py-32 px-6 lg:px-12 border-t border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-500 mb-8">
                The Philosophy
              </p>
              <blockquote className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-[1.05] text-white mb-12">
                YOU AND ONLY YOU HOLD THE KEY TO CHANGE YOUR LIFE.
              </blockquote>
              <div className="grid sm:grid-cols-2 gap-8 text-white/50 text-base leading-relaxed max-w-3xl">
                <p>
                  No algorithm will fix your discipline. No motivational quote will make you show up.
                  No coach can want it for you. The only force powerful enough to change your life
                  is the daily choice you make — and the honesty with which you face it.
                </p>
                <p>
                  Reckon is built on a simple idea: when you write down a commitment and answer for
                  it every single day, something shifts. You stop lying to yourself. You start
                  becoming the person you said you wanted to be.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ── */}
        <section className="py-32 px-6 lg:px-12 bg-white/[0.02] border-t border-white/5">
          <div className="max-w-7xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-500 mb-16">
              How It Works
            </p>
            <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
              {steps.map((step) => (
                <div key={step.number}>
                  <div className="font-display text-7xl text-amber-500/20 mb-4 leading-none">
                    {step.number}
                  </div>
                  <h3 className="font-display text-3xl text-white mb-4 tracking-wide">
                    {step.title.toUpperCase()}
                  </h3>
                  <p className="text-white/50 leading-relaxed">{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHAT IT'S NOT ── */}
        <section className="py-32 px-6 lg:px-12 border-t border-white/5">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-500 mb-8">
                No Gimmicks
              </p>
              <h2 className="font-display text-[clamp(3rem,7vw,6rem)] leading-[0.95] text-white mb-6">
                WHAT RECKON IS NOT.
              </h2>
              <p className="text-white/40 leading-relaxed max-w-sm">
                The world is full of apps that promise to change you. Reckon makes no such promise.
                It only asks the question.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {notList.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 p-4 border border-white/10 rounded-xl bg-white/[0.02]"
                >
                  <span className="text-red-500/70 font-bold text-lg leading-none flex-shrink-0">✕</span>
                  <span className="text-white/50 text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── EXAMPLE QUESTIONS ── */}
        <section className="py-32 px-6 lg:px-12 bg-amber-500/5 border-t border-amber-500/10">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-500 mb-8">
              Your Questions. Your Rules.
            </p>
            <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] text-white mb-16 leading-tight">
              WHAT WILL YOU ASK YOURSELF?
            </h2>
            <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
              {[
                'Did you exercise today?',
                'Did you sleep 8 hours?',
                'Did you read today?',
                'Did you eat well?',
                'Did you call someone you love?',
                'Did you drink enough water?',
                'Did you work on your goals?',
                'Were you present today?',
              ].map((q) => (
                <div
                  key={q}
                  className="px-5 py-3 border border-white/10 rounded-full text-white/60 text-sm hover:border-amber-500/40 hover:text-white/80 transition-all"
                >
                  {q}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section className="py-40 px-6 lg:px-12 border-t border-white/5 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-[clamp(3.5rem,9vw,7rem)] leading-[0.92] text-white mb-8">
              ARE YOU
              <br />
              <span className="text-amber-400 text-amber-glow">READY</span>
              <br />
              TO RECKON?
            </h2>
            <p className="text-white/40 mb-12 text-lg">
              No coach. No AI. No magic. Just the daily choice to be honest with yourself.
            </p>
            <AppStoreBadge large />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 px-6 lg:px-12 py-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-white/20 text-xs">
          <span className="font-display tracking-widest text-sm">RECKON</span>
          <span>A product by <a href="https://www.rheaapps.com" className="hover:text-white/50 transition-colors">Rhea Apps</a> · Munich, Germany</span>
          <a href="https://privacy.reckon.rheaapps.com" className="hover:text-white/50 transition-colors">
            Privacy Policy
          </a>
        </div>
      </footer>
    </>
  )
}

function AppStoreBadge({ large = false }: { large?: boolean }) {
  return (
    <a
      href="#"
      className={`inline-flex items-center gap-3 bg-white text-black font-semibold rounded-xl hover:bg-amber-400 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-amber-500/20 ${
        large ? 'px-8 py-4 text-base' : 'px-6 py-3 text-sm'
      }`}
    >
      <svg
        className={large ? 'w-7 h-7' : 'w-5 h-5'}
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
      </svg>
      Download on App Store
    </a>
  )
}

function PhoneMockup() {
  const questions = [
    { text: 'Did you exercise today?', answer: true },
    { text: 'Did you sleep 8 hours?', answer: false },
    { text: 'Did you read today?', answer: true },
    { text: 'Did you eat well today?', answer: true },
  ]

  return (
    <div className="relative w-72">
      {/* Glow */}
      <div className="absolute inset-0 bg-amber-500/10 blur-3xl rounded-full scale-110" />

      {/* Phone shell */}
      <div className="relative bg-[#1a1a1a] border border-white/10 rounded-[2.5rem] p-3 shadow-2xl">
        {/* Screen */}
        <div className="bg-[#111] rounded-[2rem] overflow-hidden">
          {/* Status bar */}
          <div className="flex items-center justify-between px-6 pt-4 pb-2">
            <span className="text-white/40 text-xs">9:41</span>
            <div className="w-20 h-5 bg-black rounded-full" />
            <div className="flex gap-1">
              <div className="w-3 h-3 rounded-sm bg-white/20" />
              <div className="w-3 h-3 rounded-sm bg-white/20" />
            </div>
          </div>

          {/* App content */}
          <div className="px-5 pb-8 pt-2">
            <p className="font-display text-2xl text-white tracking-wider mb-1">RECKON</p>
            <p className="text-white/30 text-xs mb-6">Sunday, May 25</p>

            <p className="text-white/50 text-xs uppercase tracking-widest mb-4">
              Today&apos;s Check-in
            </p>

            <div className="space-y-3">
              {questions.map((q, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between bg-white/5 rounded-xl px-4 py-3"
                >
                  <span className="text-white/70 text-xs leading-tight max-w-[160px]">
                    {q.text}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 ml-2 ${
                      q.answer ? 'bg-amber-500' : 'bg-white/10'
                    }`}
                  >
                    {q.answer ? (
                      <svg className="w-3.5 h-3.5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <svg className="w-3.5 h-3.5 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Streak */}
            <div className="mt-6 bg-amber-500/10 border border-amber-500/20 rounded-xl px-4 py-3 flex items-center justify-between">
              <div>
                <p className="text-amber-400 font-display text-2xl tracking-wide">12</p>
                <p className="text-white/30 text-xs">day streak</p>
              </div>
              <div className="text-2xl">🔥</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
