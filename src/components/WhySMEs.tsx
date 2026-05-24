const stats = [
  {
    value: '10×',
    label: 'Productivity Multiplier',
    description: 'Typical output gain when AI agents handle repetitive, rule-based workflows',
    color: 'text-blue-800',
    bg: 'bg-blue-50 border-blue-100',
  },
  {
    value: 'Weeks',
    label: 'Time to Deploy',
    description: 'From initial discovery to a live, operating AI agent in your business',
    color: 'text-teal-700',
    bg: 'bg-teal-50 border-teal-100',
  },
  {
    value: '80%',
    label: 'Cost Reduction',
    description: 'Average reduction in operational costs for automated workflows vs. manual effort',
    color: 'text-blue-800',
    bg: 'bg-blue-50 border-blue-100',
  },
  {
    value: '24/7',
    label: 'Always On',
    description: 'AI agents work around the clock — no overtime, no sick days, no bottlenecks',
    color: 'text-teal-700',
    bg: 'bg-teal-50 border-teal-100',
  },
]

export default function WhySMEs() {
  return (
    <section id="why-smes" className="py-24 lg:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text side */}
          <div className="space-y-7">
            <div>
              <span className="section-label">The SME Advantage</span>
              <h2 className="section-heading">
                The Agentic Revolution{' '}
                <span className="text-blue-800">Favors the Agile</span>
              </h2>
            </div>

            <p className="text-lg text-slate-600 leading-relaxed">
              Small and medium businesses have always had the edge in speed and focus. AI agents
              amplify this dramatically. While large enterprises spend years on AI transformation
              programmes, a well-run SME can deploy targeted agents in weeks — and start competing
              on a genuinely level playing field.
            </p>

            <div className="space-y-5">
              {[
                {
                  icon: '⚡',
                  title: 'Move faster than the competition',
                  body: 'Without layers of corporate bureaucracy, SMEs can adopt and iterate on AI faster than any large organisation ever could.',
                },
                {
                  icon: '💡',
                  title: 'Access enterprise-grade capability',
                  body: "The same AI technology that costs Fortune 500 companies millions is now accessible to a 20-person team — if you know how to deploy it right.",
                },
                {
                  icon: '🎯',
                  title: 'Focus where it matters most',
                  body: "Unlike large companies with sprawling deployments, SMEs can target AI precisely at their highest-value workflows and see returns immediately.",
                },
              ].map((point, i) => (
                <div key={i} className="flex gap-4 p-5 bg-white border border-slate-200 rounded-xl">
                  <div className="text-2xl flex-shrink-0 mt-0.5">{point.icon}</div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">{point.title}</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">{point.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-5">
            {stats.map((stat, i) => (
              <div
                key={i}
                className={`p-7 rounded-2xl border card-hover ${stat.bg}`}
              >
                <div className={`font-display text-5xl font-bold mb-2 ${stat.color}`}>
                  {stat.value}
                </div>
                <div className="font-semibold text-slate-900 mb-2 text-sm uppercase tracking-wide">
                  {stat.label}
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
