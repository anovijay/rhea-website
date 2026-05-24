const steps = [
  {
    number: '01',
    title: 'Discover',
    subtitle: 'Understand Your Business',
    description:
      'We begin with deep immersion: interviews with your team, process mapping, and gap analysis. We identify exactly where AI can have the greatest measurable impact — no guesswork, no generic playbooks.',
    color: 'bg-blue-800',
    border: 'border-blue-100',
    bg: 'bg-blue-50',
    details: ['Process mapping', 'Stakeholder interviews', 'ROI opportunity analysis', 'Technology audit'],
  },
  {
    number: '02',
    title: 'Design',
    subtitle: 'Architect Your Solution',
    description:
      'We architect a custom solution — not a template. Every agent is purpose-built for your workflows, your data sources, and your goals. You see exactly what we\'re building before a single line of code is written.',
    color: 'bg-teal-700',
    border: 'border-teal-100',
    bg: 'bg-teal-50',
    details: ['Solution architecture', 'Data flow design', 'Integration planning', 'Prototype & review'],
  },
  {
    number: '03',
    title: 'Deploy',
    subtitle: 'Go Live with Confidence',
    description:
      'We implement, test rigorously, and hand over fully operational AI systems. Your team receives thorough training and documentation. We stay close during go-live and beyond — a partner, not just a vendor.',
    color: 'bg-blue-800',
    border: 'border-blue-100',
    bg: 'bg-blue-50',
    details: ['Implementation & testing', 'Team training', 'Documentation', 'Ongoing support'],
  },
]

export default function HowItWorks() {
  return (
    <section id="process" className="py-24 lg:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="section-label">Our Process</span>
          <h2 className="section-heading mb-5">
            From First Conversation to{' '}
            <span className="text-blue-800">Live AI Agent</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            A transparent, structured process that keeps you informed and in control — from the first
            discovery session to your team using AI in production.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-[calc(16.667%+2rem)] right-[calc(16.667%+2rem)] h-0.5 bg-gradient-to-r from-blue-200 via-teal-200 to-blue-200" />

          <div className="grid lg:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <div key={i} className="relative flex flex-col">
                {/* Step number circle */}
                <div className="relative flex justify-center lg:justify-start mb-8">
                  <div
                    className={`relative z-10 w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center shadow-lg`}
                  >
                    <span className="font-display text-2xl font-bold text-white">{step.number}</span>
                  </div>
                </div>

                {/* Card */}
                <div
                  className={`flex-1 bg-white border ${step.border} rounded-2xl p-7 card-hover`}
                >
                  <div className={`inline-block text-xs font-bold uppercase tracking-widest ${step.bg} px-2.5 py-1 rounded-md text-slate-600 mb-3`}>
                    {step.subtitle}
                  </div>
                  <h3 className="font-display text-2xl font-bold text-slate-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-6">{step.description}</p>

                  <ul className="space-y-2.5">
                    {step.details.map((detail, j) => (
                      <li key={j} className="flex items-center gap-2.5 text-sm text-slate-600">
                        <div className={`w-1.5 h-1.5 rounded-full ${step.color} flex-shrink-0`} />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-800 text-white font-semibold rounded-xl hover:bg-blue-900 transition-all hover:shadow-xl hover:shadow-blue-900/25 hover:-translate-y-0.5"
          >
            Start the Discovery Process
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
