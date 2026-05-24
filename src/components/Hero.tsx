export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/40">
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: 'radial-gradient(circle, #94a3b8 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      {/* Top fade */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white to-transparent" />
      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 lg:pt-32 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-50 border border-blue-100 rounded-full">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500" />
              </span>
              <span className="text-xs font-semibold text-blue-700 tracking-widest uppercase">
                Munich, Germany
              </span>
            </div>

            <h1 className="font-display text-5xl lg:text-6xl xl:text-[4.25rem] font-bold text-slate-900 leading-[1.06]">
              Your Team&apos;s Productivity,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-teal-600">
                Multiplied by AI
              </span>
            </h1>

            <p className="text-lg lg:text-xl text-slate-600 leading-relaxed max-w-xl">
              Rhea Apps builds custom AI agents that automate complex workflows and give small and
              medium businesses the competitive edge once reserved for large enterprises.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-blue-800 text-white font-semibold rounded-xl hover:bg-blue-900 transition-all hover:shadow-xl hover:shadow-blue-900/25 hover:-translate-y-0.5"
              >
                Start Your AI Journey
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-slate-200 text-slate-700 font-semibold rounded-xl hover:border-blue-800 hover:text-blue-800 transition-all"
              >
                Explore Services
              </a>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-2 pt-2 text-sm text-slate-500">
              {['20+ years experience', 'GDPR-compliant', 'Enterprise-grade expertise'].map((item) => (
                <span key={item} className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-teal-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Illustration */}
          <div className="hidden lg:flex items-center justify-center">
            <NetworkIllustration />
          </div>
        </div>
      </div>
    </section>
  )
}

function NetworkIllustration() {
  const nodes = [
    { x: 250, y: 120, r: 14, color: '#1e40af', delay: '0s' },
    { x: 390, y: 195, r: 10, color: '#0d9488', delay: '0.4s' },
    { x: 360, y: 340, r: 12, color: '#1e40af', delay: '0.8s' },
    { x: 250, y: 400, r: 9, color: '#0d9488', delay: '1.2s' },
    { x: 140, y: 340, r: 12, color: '#1e40af', delay: '0.6s' },
    { x: 110, y: 195, r: 10, color: '#0d9488', delay: '1s' },
    { x: 250, y: 260, r: 20, color: '#1e3a8a', delay: '0.2s' },
  ]

  const edges = [
    [0, 6], [1, 6], [2, 6], [3, 6], [4, 6], [5, 6],
    [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 0],
  ]

  return (
    <div className="relative w-[480px] h-[480px]">
      {/* Outer glow ring */}
      <div className="absolute inset-8 rounded-full bg-gradient-to-br from-blue-100/60 to-teal-50/40 blur-3xl" />

      <svg
        viewBox="0 0 500 520"
        className="relative w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Faint concentric rings */}
        <circle cx="250" cy="260" r="160" fill="none" stroke="#dbeafe" strokeWidth="1" />
        <circle cx="250" cy="260" r="220" fill="none" stroke="#eff6ff" strokeWidth="1" />

        {/* Edges */}
        {edges.map(([a, b], i) => (
          <line
            key={i}
            x1={nodes[a].x}
            y1={nodes[a].y}
            x2={nodes[b].x}
            y2={nodes[b].y}
            stroke="#bfdbfe"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        ))}

        {/* Nodes */}
        {nodes.map((node, i) => (
          <g key={i}>
            {/* Glow */}
            <circle
              cx={node.x}
              cy={node.y}
              r={node.r + 6}
              fill={node.color}
              opacity="0.12"
            />
            {/* Main dot */}
            <circle
              cx={node.x}
              cy={node.y}
              r={node.r}
              fill={node.color}
              style={{
                animation: `pulse 3s ease-in-out ${node.delay} infinite`,
              }}
            />
            {/* Inner highlight */}
            <circle
              cx={node.x - node.r * 0.25}
              cy={node.y - node.r * 0.25}
              r={node.r * 0.3}
              fill="white"
              opacity="0.35"
            />
          </g>
        ))}

        {/* Center label */}
        <text
          x="250"
          y="265"
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="8"
          fontWeight="700"
          fill="white"
          letterSpacing="1"
        >
          AI
        </text>

        {/* Floating labels */}
        {[
          { x: 250, y: 93, text: 'Strategy' },
          { x: 420, y: 190, text: 'Agents' },
          { x: 395, y: 360, text: 'Automation' },
          { x: 250, y: 428, text: 'Governance' },
          { x: 106, y: 360, text: 'Architecture' },
          { x: 75, y: 190, text: 'Consulting' },
        ].map((label, i) => (
          <text
            key={i}
            x={label.x}
            y={label.y}
            textAnchor="middle"
            fontSize="9.5"
            fontWeight="600"
            fill="#475569"
            letterSpacing="0.5"
          >
            {label.text}
          </text>
        ))}
      </svg>
    </div>
  )
}
