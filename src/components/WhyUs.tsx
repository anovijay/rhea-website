const companies = [
  {
    initials: 'EK',
    name: 'Emirates Airlines',
    detail: 'Dubai, UAE',
    color: 'bg-red-700',
  },
  {
    initials: 'QR',
    name: 'Qatar Airways',
    detail: 'Doha, Qatar',
    color: 'bg-[#5c0632]',
  },
  {
    initials: 'ES',
    name: 'Essity',
    detail: 'Stockholm, Sweden',
    color: 'bg-blue-900',
  },
]

const pillars = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    title: 'Global enterprise experience',
    body: 'We have operated inside some of the world\'s most demanding organisations — handling complexity at scale, across continents and cultures.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'European values, GDPR-first',
    body: 'Based in Munich, we build AI solutions with data privacy, transparency, and compliance at their core — not as an afterthought.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Built for SME realities',
    body: 'We know the difference between what works inside a multinational and what works for a 30-person company. We translate enterprise best practice into SME-scale solutions.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Pragmatic, not theoretical',
    body: 'We have no interest in complex AI strategies that gather dust. Our goal is working systems in your hands as quickly and reliably as possible.',
  },
]

export default function WhyUs() {
  return (
    <section id="why-us" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-label">Why Rhea Apps</span>
          <h2 className="section-heading mb-5">
            Built by People Who&apos;ve Seen What{' '}
            <span className="text-blue-800">Technology Can Do</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Our founders spent over two decades driving digital transformation at some of the
            world&apos;s most operationally complex organisations. That depth of experience is
            now fully focused on helping SMEs benefit from AI.
          </p>
        </div>

        {/* Experience bar */}
        <div className="mb-16 bg-gradient-to-r from-blue-800 to-blue-900 rounded-2xl p-8 lg:p-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-white">
            <div className="text-center sm:border-r border-white/20">
              <div className="font-display text-5xl font-bold mb-1">20+</div>
              <div className="text-blue-200 font-medium text-sm uppercase tracking-widest">
                Years of Experience
              </div>
            </div>
            <div className="text-center sm:border-r border-white/20">
              <div className="font-display text-5xl font-bold mb-1">3</div>
              <div className="text-blue-200 font-medium text-sm uppercase tracking-widest">
                Global Organisations
              </div>
            </div>
            <div className="text-center">
              <div className="font-display text-5xl font-bold mb-1">1</div>
              <div className="text-blue-200 font-medium text-sm uppercase tracking-widest">
                Singular Focus: Your Growth
              </div>
            </div>
          </div>
        </div>

        {/* Company badges */}
        <div className="mb-16">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-slate-400 mb-8">
            Senior leadership experience at
          </p>
          <div className="flex flex-wrap justify-center gap-5">
            {companies.map((co, i) => (
              <div
                key={i}
                className="flex items-center gap-4 px-6 py-4 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
              >
                <div className={`w-10 h-10 ${co.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <span className="text-white font-bold text-sm">{co.initials}</span>
                </div>
                <div>
                  <div className="font-semibold text-slate-900">{co.name}</div>
                  <div className="text-xs text-slate-500">{co.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pillars */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p, i) => (
            <div
              key={i}
              className="p-6 bg-slate-50 border border-slate-200 rounded-2xl hover:bg-white hover:shadow-lg hover:shadow-slate-200/60 transition-all"
            >
              <div className="w-10 h-10 bg-blue-50 text-blue-700 rounded-xl flex items-center justify-center mb-4">
                {p.icon}
              </div>
              <h4 className="font-semibold text-slate-900 mb-2">{p.title}</h4>
              <p className="text-slate-600 text-sm leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
