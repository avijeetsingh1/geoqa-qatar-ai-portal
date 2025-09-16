// Plain React (no JSX) to avoid Babel in-browser
(function () {
  const h = React.createElement;

  function CapabilityCard(props) {
    return h(
      'div',
      { className: 'group rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur transition-all duration-300 hover:bg-white/[0.08] hover:border-white/20 hover:scale-[1.02] hover:shadow-lg hover:shadow-sky-500/10' },
      h('div', { className: 'flex items-start gap-3' },
        h('div', { className: 'w-2 h-2 rounded-full bg-[#8A1538] mt-2 transition-all duration-300 group-hover:scale-125 group-hover:shadow-[0_0_8px_rgba(138,21,56,0.6)]' }),
        h('div', { className: 'flex-1' },
          h('h3', { className: 'text-base font-semibold text-white transition-colors duration-200 group-hover:text-zinc-100' }, props.title),
          h('p', { className: 'mt-2 text-sm leading-relaxed text-zinc-300 group-hover:text-zinc-200 transition-colors duration-200' }, props.children)
        )
      )
    );
  }

  function Starfield() {
    const stars = React.useMemo(() =>
      Array.from({ length: 120 }).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        r: Math.random() * 0.9 + 0.2,
        o: Math.random() * 0.6 + 0.3,
        delay: Math.random() * 3,
      })), []);

    return h(
      'svg',
      { className: 'absolute inset-0 h-full w-full', viewBox: '0 0 100 100', preserveAspectRatio: 'none' },
      stars.map((s) => h('circle', { 
        key: s.id, 
        cx: s.x, 
        cy: s.y, 
        r: s.r, 
        fill: 'white', 
        opacity: s.o,
        className: 'animate-pulse',
        style: { 
          animationDuration: '3s',
          animationDelay: s.delay + 's',
          animationIterationCount: 'infinite'
        }
      }))
    );
  }

  function GeoQALanding() {
    return h(
      'main',
      { className: 'min-h-screen bg-black text-zinc-200 antialiased' },
      // backdrop and starfield
      h('div', { className: 'pointer-events-none fixed inset-0 -z-10' },
        // Qatar skyline pattern background
        h('div', { className: 'absolute inset-0' },
          h('svg', { className: 'absolute inset-0 w-full h-full opacity-[0.15]', viewBox: '0 0 1200 800', preserveAspectRatio: 'xMidYEnd slice' },
            h('defs', null,
              h('pattern', { id: 'qatar-skyline-pattern', x: '0', y: '0', width: '1200', height: '200', patternUnits: 'userSpaceOnUse' },
                // Repeated Qatar skyline silhouettes across the background
                h('g', { fill: '#1a1a1a', opacity: '1' },
                  // MIA
                  h('path', { d: 'M50 180 h40 v-15 h-15 v-15 h-15 v15 h-10 z' }),
                  // NMoQ (desert rose)
                  h('ellipse', { cx: '150', cy: '180', rx: '20', ry: '4' }),
                  h('ellipse', { cx: '150', cy: '176', rx: '14', ry: '3' }),
                  h('ellipse', { cx: '150', cy: '173', rx: '10', ry: '2' }),
                  // Tornado Tower
                  h('path', { d: 'M220 180 v-50 c7 -7 14 -7 21 0 v50 z' }),
                  h('path', { d: 'M220 150 c7 4 14 4 21 0', stroke: '#1a1a1a', strokeWidth: '1', fill: 'none' }),
                  // Doha Tower
                  h('rect', { x: '280', y: '130', width: '18', height: '50', rx: '8' }),
                  // Torch Tower
                  h('path', { d: 'M340 180 v-60 c4 5 8 16 8 28 s-4 22 -8 32 z' }),
                  // Lusail arch
                  h('path', { d: 'M400 180 v-40 a20 18 0 1 1 20 0 v40 z' }),
                  // Mixed buildings
                  h('rect', { x: '460', y: '160', width: '12', height: '20' }),
                  h('rect', { x: '480', y: '150', width: '14', height: '30' }),
                  h('rect', { x: '500', y: '140', width: '10', height: '40' }),
                  h('rect', { x: '520', y: '155', width: '16', height: '25' }),
                  // More skyline elements
                  h('path', { d: 'M580 180 h30 v-12 h-12 v-12 h-12 v12 h-6 z' }),
                  h('rect', { x: '640', y: '165', width: '8', height: '15' }),
                  h('rect', { x: '655', y: '155', width: '10', height: '25' }),
                  h('rect', { x: '670', y: '145', width: '12', height: '35' }),
                  h('ellipse', { cx: '720', cy: '180', rx: '15', ry: '3' }),
                  h('ellipse', { cx: '720', cy: '177', rx: '10', ry: '2' }),
                  // Far buildings
                  h('rect', { x: '760', y: '170', width: '6', height: '10' }),
                  h('rect', { x: '770', y: '165', width: '8', height: '15' }),
                  h('rect', { x: '785', y: '160', width: '10', height: '20' }),
                  h('rect', { x: '800', y: '155', width: '12', height: '25' }),
                  // Additional iconic buildings
                  h('path', { d: 'M850 180 v-35 c5 -5 10 -5 15 0 v35 z' }),
                  h('rect', { x: '890', y: '165', width: '8', height: '15' }),
                  h('rect', { x: '905', y: '170', width: '6', height: '10' }),
                  h('rect', { x: '920', y: '160', width: '10', height: '20' }),
                  // Pearl Qatar inspired
                  h('circle', { cx: '960', cy: '170', r: '8' }),
                  h('path', { d: 'M952 178 h16 v2 h-16 z' }),
                  // More towers
                  h('rect', { x: '990', y: '150', width: '8', height: '30' }),
                  h('rect', { x: '1005', y: '155', width: '10', height: '25' }),
                  h('rect', { x: '1020', y: '165', width: '12', height: '15' }),
                  // West Bay towers
                  h('rect', { x: '1050', y: '140', width: '14', height: '40' }),
                  h('rect', { x: '1070', y: '145', width: '16', height: '35' }),
                  h('rect', { x: '1090', y: '150', width: '12', height: '30' }),
                  h('rect', { x: '1110', y: '160', width: '10', height: '20' }),
                  h('rect', { x: '1125', y: '165', width: '8', height: '15' }),
                  h('rect', { x: '1140', y: '170', width: '6', height: '10' }),
                  // Ground line
                  h('rect', { x: '0', y: '180', width: '1200', height: '20' })
                )
              )
            ),
            h('rect', { x: '0', y: '0', width: '100%', height: '100%', fill: 'url(#qatar-skyline-pattern)' })
          )
        ),
        h('div', { className: 'absolute inset-0 bg-[radial-gradient(1200px_600px_at_80%_-10%,rgba(40,120,255,0.18),transparent),radial-gradient(800px_400px_at_10%_-10%,rgba(200,60,255,0.12),transparent),radial-gradient(900px_600px_at_50%_120%,rgba(0,180,160,0.12),transparent)]' }),
        h(Starfield, null),
        // subtle geometric motif with animation
        h('svg', { className: 'absolute right-0 top-0 h-64 w-64 opacity-[0.08] md:h-80 md:w-80 animate-float', viewBox: '0 0 100 100', 'aria-hidden': 'true' },
          h('defs', null,
            h('pattern', { id: 'geo-motif', width: '8', height: '8', patternUnits: 'userSpaceOnUse' },
              h('path', { 
                d: 'M0 4h8M4 0v8', 
                stroke: '#8A1538', 
                strokeWidth: '0.4', 
                opacity: '0.9',
                className: 'animate-pulse',
                style: { animationDuration: '4s' }
              })
            ),
            h('linearGradient', { id: 'geo-fade', x1: '0', y1: '0', x2: '0', y2: '1' },
              h('stop', { offset: '0%', stopColor: '#8A1538', stopOpacity: '0.4' }),
              h('stop', { offset: '100%', stopColor: '#8A1538', stopOpacity: '0' })
            ),
            h('radialGradient', { id: 'glow-center', cx: '50%', cy: '50%', r: '50%' },
              h('stop', { offset: '0%', stopColor: '#8A1538', stopOpacity: '0.2' }),
              h('stop', { offset: '100%', stopColor: '#8A1538', stopOpacity: '0' })
            )
          ),
          h('rect', { x: '0', y: '0', width: '100', height: '100', fill: 'url(#geo-motif)' }),
          h('circle', { cx: '50', cy: '50', r: '30', fill: 'url(#glow-center)', className: 'animate-pulse', style: { animationDuration: '6s' } }),
          h('rect', { x: '0', y: '0', width: '100', height: '100', fill: 'url(#geo-fade)' })
        )
      ),

      // header
      h('header', { className: 'mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6 md:py-8' },
        h('div', { className: 'flex items-center gap-3' },
          h('div', { className: 'h-2.5 w-2.5 rounded-full bg-sky-400 shadow-[0_0_24px_6px_rgba(56,189,248,0.6)] animate-pulse' }),
          h('span', { className: 'text-lg font-semibold tracking-tight text-white' }, 'geo.qa'),
          h('span', { className: 'text-xs text-zinc-400' }, 'by Vortx.ai')
        ),
        h('nav', { className: 'hidden md:flex items-center gap-6 text-sm text-zinc-400' },
          h('a', { href: '#enter', className: 'hover:text-zinc-200 transition-colors duration-200 hover:scale-105 transition-transform' }, 'Enter'),
          h('a', { href: '#capabilities', className: 'hover:text-zinc-200 transition-colors duration-200 hover:scale-105 transition-transform' }, 'Capabilities'),
          h('a', { href: '#contact', className: 'hover:text-zinc-200 transition-colors duration-200 hover:scale-105 transition-transform' }, 'Contact')
        ),
        // Mobile menu indicator
        h('div', { className: 'md:hidden flex items-center gap-1 text-xs text-zinc-500' },
          h('div', { className: 'w-1 h-1 bg-zinc-500 rounded-full animate-pulse' }),
          h('div', { className: 'w-1 h-1 bg-zinc-500 rounded-full animate-pulse', style: { animationDelay: '0.5s' } }),
          h('div', { className: 'w-1 h-1 bg-zinc-500 rounded-full animate-pulse', style: { animationDelay: '1s' } })
        )
      ),

      // hero
      h('section', { className: 'mx-auto w-full max-w-4xl px-6 pt-10 md:pt-16' },
        h('h1', { className: 'text-4xl leading-tight tracking-tight text-white md:text-6xl md:leading-[1.07] animate-fade-in' },
          'I am Qatar\'s ', h('span', { className: 'text-zinc-400 hover:text-[#8A1538] transition-colors duration-300' }, 'living map'), ' — your quiet portal into space‑level intelligence.'
        ),
        h('p', { className: 'mt-3 text-base text-zinc-400 md:text-lg', dir: 'rtl', lang: 'ar' },
          'بوابتك الهادئة إلى ذكاء على مستوى الفضاء'
        ),
        h('div', { className: 'mt-6 max-w-3xl text-lg leading-relaxed text-zinc-300 md:text-xl' },
          h('p', null, 'I watch the shoreline breathe, the desert shift, the city glow. I hold fresh satellite scenes and ground truth in a single memory. Ask me about land, water, buildings, roads, ships — I answer with evidence.'),
          h('p', { className: 'mt-4' }, 'I don’t shout. I don’t decorate. I resolve. For planners and founders, for responders and researchers — I turn coordinates into clarity.'),
          h('p', { className: 'mt-4' }, 'Built by ', h('span', { className: 'text-white' }, 'Vortx.ai'), ', I serve one promise: ', h('span', { className: 'text-white' }, 'trustworthy AI for Qatar'), ' — grounded in orbit, delivered in seconds.')
        ),
        h('div', { id: 'enter', className: 'mt-8 flex flex-col gap-3 sm:flex-row' },
          h('a', { href: '#capabilities', className: 'group inline-flex items-center justify-center rounded-xl border border-zinc-700 bg-white/5 px-5 py-3 text-sm font-medium text-zinc-100 backdrop-blur transition-all duration-300 hover:bg-white/10 hover:border-sky-400/50 hover:shadow-lg hover:shadow-sky-500/20 hover:scale-[1.02]' }, 
            'Enter the Portal ',
            h('span', { className: 'ml-2 transition-transform duration-200 group-hover:translate-x-1' }, '→')
          ),
          h('a', { href: '#contact', className: 'inline-flex items-center justify-center rounded-xl border border-zinc-700 px-5 py-3 text-sm font-medium text-zinc-300 hover:text-white transition-all duration-300 hover:border-zinc-500 hover:scale-[1.02]' }, 'Talk to Vortx.ai')
        )
      ),

      // capabilities
      h('section', { id: 'capabilities', className: 'mx-auto w-full max-w-5xl px-6 py-16 md:py-20' },
        h('div', { className: 'grid gap-6 md:grid-cols-3' },
          h(CapabilityCard, { title: 'Synthetic Threat Shield' }, 'Detects deepfakes, AI-generated content, and synthetic attacks before they breach your defenses. Real intelligence, verified authenticity.'),
          h(CapabilityCard, { title: 'Explainable Reasoning' }, 'No black box mysteries. Every conclusion traces back to evidence, showing how and why decisions emerge from data.'),
          h(CapabilityCard, { title: 'Security from Above' }, 'Satellite-powered vulnerability assessment reveals what ground-level audits miss. See your entire operational footprint.'),
          h(CapabilityCard, { title: 'Intelligence in Minutes' }, 'Complex geospatial analysis distilled into executive-ready insights. Evidence, conclusions, recommendations — delivered at decision speed.'),
          h(CapabilityCard, { title: 'Qatar-Sovereign Processing' }, 'Your data remains within Qatar borders. Zero external exposure, complete audit trails, enterprise-grade compliance.'),
          h(CapabilityCard, { title: 'Transparent by Design' }, 'See the reasoning, challenge the logic, verify the sources. Intelligence you can trust because you understand it.')
        )
      ),

      // footer with skyline
      h('footer', { id: 'contact', className: 'border-t border-white/10' },
        h('div', { className: 'mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-4 px-6 py-8 md:flex-row md:items-center' },
          h('div', { className: 'text-sm text-zinc-400' }, `© ${new Date().getFullYear()} geo.qa — Qatar’s AI Portal • Built by Vortx.ai`),
          h('div', { className: 'text-sm text-zinc-400' }, 'Contact: ', h('a', { className: 'hover:text-zinc-200 transition-colors duration-200 hover:underline decoration-sky-400', href: 'mailto:hello@vortx.ai' }, 'hello@vortx.ai'))
        ),
        h('div', { className: 'pointer-events-none relative' },
          h('svg', { 'aria-hidden': 'true', className: 'absolute inset-x-0 -bottom-0 h-24 w-full opacity-25 md:h-32', viewBox: '0 0 1200 200', preserveAspectRatio: 'none' },
            h('defs', null,
              h('linearGradient', { id: 'qatar-maroon', x1: '0', y1: '0', x2: '0', y2: '1' },
                h('stop', { offset: '0%', stopColor: '#8A1538', stopOpacity: '0.55' }),
                h('stop', { offset: '100%', stopColor: '#8A1538', stopOpacity: '0.2' })
              ),
              h('linearGradient', { id: 'edge-fade', x1: '0', y1: '0', x2: '1', y2: '0' },
                h('stop', { offset: '0%', stopColor: '#000', stopOpacity: '0' }),
                h('stop', { offset: '15%', stopColor: '#000', stopOpacity: '1' }),
                h('stop', { offset: '85%', stopColor: '#000', stopOpacity: '1' }),
                h('stop', { offset: '100%', stopColor: '#000', stopOpacity: '0' })
              )
            ),
            h('path', { d: 'M0 170 L1200 150 L1200 200 L0 200 Z', fill: 'url(#qatar-maroon)' }),
            h('path', { 
              d: 'M120 150 h60 v-20 h-20 v-20 h-20 v20 h-20 z', 
              fill: '#8A1538', 
              opacity: '0.35',
              className: 'animate-pulse',
              style: { animationDuration: '8s', animationDelay: '0s' }
            }),
            h('g', { fill: '#8A1538', opacity: '0.35' },
              h('ellipse', { cx: '250', cy: '150', rx: '28', ry: '6', className: 'animate-pulse', style: { animationDuration: '6s', animationDelay: '1s' } }),
              h('ellipse', { cx: '250', cy: '144', rx: '20', ry: '5', className: 'animate-pulse', style: { animationDuration: '7s', animationDelay: '2s' } }),
              h('ellipse', { cx: '250', cy: '139', rx: '14', ry: '4', className: 'animate-pulse', style: { animationDuration: '8s', animationDelay: '3s' } })
            ),
            h('path', { d: 'M360 150 v-70 c10 -10 20 -10 30 0 v70 z', fill: '#8A1538', opacity: '0.35', className: 'animate-pulse', style: { animationDuration: '9s', animationDelay: '2s' } }),
            h('path', { d: 'M360 110 c10 6 20 6 30 0', stroke: '#8A1538', strokeWidth: '2', opacity: '0.35', fill: 'none', className: 'animate-pulse', style: { animationDuration: '9s', animationDelay: '2s' } }),
            h('rect', { x: '420', y: '80', width: '28', height: '70', fill: '#8A1538', opacity: '0.35', rx: '12', className: 'animate-pulse', style: { animationDuration: '5s', animationDelay: '1s' } }),
            h('path', { d: 'M500 150 v-90 c6 8 12 24 12 40 s-6 32 -12 50 z', fill: '#8A1538', opacity: '0.35', className: 'animate-pulse', style: { animationDuration: '4s', animationDelay: '0.5s' } }),
            h('path', { d: 'M600 150 v-60 a30 28 0 1 1 30 0 v60 z', fill: '#8A1538', opacity: '0.35', className: 'animate-pulse', style: { animationDuration: '7s', animationDelay: '3s' } }),
            h('rect', { x: '680', y: '120', width: '20', height: '30', fill: '#8A1538', opacity: '0.35', className: 'animate-pulse', style: { animationDuration: '6s', animationDelay: '4s' } }),
            h('rect', { x: '710', y: '110', width: '22', height: '40', fill: '#8A1538', opacity: '0.35', className: 'animate-pulse', style: { animationDuration: '8s', animationDelay: '5s' } }),
            h('rect', { x: '740', y: '100', width: '18', height: '50', fill: '#8A1538', opacity: '0.35', className: 'animate-pulse', style: { animationDuration: '7s', animationDelay: '6s' } }),
            h('rect', { x: '0', y: '0', width: '1200', height: '200', fill: 'url(#edge-fade)' })
          )
        )
      )
    );
  }

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(h(GeoQALanding));
})();

