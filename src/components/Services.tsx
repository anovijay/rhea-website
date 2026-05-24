const services = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.75}
          d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18"
        />
      </svg>
    ),
    label: 'Core offering',
    title: 'AI Agents & Automation',
    description:
      'Deploy intelligent agents that handle customer interactions, data processing, and complex workflows around the clock. Your operations, running at full capacity — always.',
    accent: 'border-blue-600',
    pill: 'bg-blue-50 text-blue-700',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.75}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
    label: 'Advisory',
    title: 'AI Strategy Consulting',
    description:
      'Navigate the AI landscape with confidence. We help you identify the highest-impact opportunities, build a pragmatic roadmap, and ensure every AI investment delivers measurable returns.',
    accent: 'border-teal-600',
    pill: 'bg-teal-50 text-teal-700',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.75}
          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
        />
      </svg>
    ),
    label: 'Architecture',
    title: 'Enterprise Architecture',
    description:
      'Design scalable, future-ready IT architectures that grow with your business. We translate complexity into clarity — systems that are both technically sound and strategically aligned.',
    accent: 'border-blue-600',
    pill: 'bg-blue-50 text-blue-700',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.75}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
    label: 'Governance',
    title: 'IT Governance & Compliance',
    description:
      'Operate with confidence in a regulated world. We ensure your AI systems meet GDPR, EU AI Act requirements, and internal governance standards — from design through deployment.',
    accent: 'border-teal-600',
    pill: 'bg-teal-50 text-teal-700',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <span className="section-label">What We Do</span>
          <h2 className="section-heading mb-5">
            Everything You Need to{' '}
            <span className="text-blue-800">Lead With AI</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            From strategy to deployed agents, we cover every step of your AI journey — with the
            depth that comes from two decades at the cutting edge of enterprise technology.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className={`group relative bg-white border border-slate-200 rounded-2xl p-8 card-hover border-l-4 ${service.accent}`}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className={`flex-shrink-0 p-2.5 rounded-xl ${service.pill}`}>
                  {service.icon}
                </div>
                <span className={`text-xs font-bold uppercase tracking-widest ${service.pill} px-2.5 py-1 rounded-lg`}>
                  {service.label}
                </span>
              </div>
              <h3 className="font-display text-xl font-bold text-slate-900 mb-3">
                {service.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">{service.description}</p>
              <div className="mt-6 flex items-center gap-1.5 text-sm font-semibold text-blue-700 group-hover:gap-2.5 transition-all">
                Learn more
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
