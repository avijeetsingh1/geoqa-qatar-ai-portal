import { useMemo } from "react";

// geo.qa — Qatar's AI Portal by Vortx.ai
// Minimal, space‑themed, monologue‑style landing page
// TailwindCSS utility classes are used for styling.

export default function GeoQALanding() {
  // generate a tiny starfield once per mount
  const stars = useMemo(() =>
    Array.from({ length: 120 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      r: Math.random() * 0.9 + 0.2,
      o: Math.random() * 0.6 + 0.3,
    })), []);

  return (
    <main className="min-h-screen bg-black text-zinc-200 antialiased">
      {/* Soft cosmic gradient */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_80%_-10%,rgba(40,120,255,0.18),transparent),radial-gradient(800px_400px_at_10%_-10%,rgba(200,60,255,0.12),transparent),radial-gradient(900px_600px_at_50%_120%,rgba(0,180,160,0.12),transparent)]" />
        {/* starfield */}
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          {stars.map(s => (
            <circle key={s.id} cx={s.x} cy={s.y} r={s.r} fill="white" opacity={s.o} />
          ))}
        </svg>
        {/* subtle geometric motif (Qatar-inspired) */}
        <svg
          className="absolute right-0 top-0 h-64 w-64 opacity-[0.08] md:h-80 md:w-80"
          viewBox="0 0 100 100"
          aria-hidden="true"
        >
          <defs>
            <pattern id="geo-motif" width="8" height="8" patternUnits="userSpaceOnUse">
              <path d="M0 4h8M4 0v8" stroke="#8A1538" strokeWidth="0.4" opacity="0.9" />
            </pattern>
            <linearGradient id="geo-fade" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#8A1538" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#8A1538" stopOpacity="0" />
            </linearGradient>
          </defs>
          <rect x="0" y="0" width="100" height="100" fill="url(#geo-motif)" />
          <rect x="0" y="0" width="100" height="100" fill="url(#geo-fade)" />
        </svg>
      </div>

      {/* Header */}
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6 md:py-8">
        <div className="flex items-center gap-3">
          <div className="h-2.5 w-2.5 rounded-full bg-sky-400 shadow-[0_0_24px_6px_rgba(56,189,248,0.6)]" />
          <span className="text-lg font-semibold tracking-tight text-white">geo.qa</span>
          <span className="text-xs text-zinc-400">by Vortx.ai</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-400">
          <a href="#enter" className="hover:text-zinc-200">Enter</a>
          <a href="#capabilities" className="hover:text-zinc-200">Capabilities</a>
          <a href="#contact" className="hover:text-zinc-200">Contact</a>
        </nav>
      </header>

      {/* Hero Monologue */}
      <section className="mx-auto w-full max-w-4xl px-6 pt-10 md:pt-16">
        <h1 className="text-4xl leading-tight tracking-tight text-white md:text-6xl md:leading-[1.07]">
          I am Qatar’s <span className="text-zinc-400">living map</span> —
          your quiet portal into space‑level intelligence.
        </h1>
        {/* Arabic subtitle — subtle bilingual cue */}
        <p className="mt-3 text-base text-zinc-400 md:text-lg" dir="rtl" lang="ar">
          بوابتك الهادئة إلى ذكاء على مستوى الفضاء
        </p>
        <div className="mt-6 max-w-3xl text-lg leading-relaxed text-zinc-300 md:text-xl">
          <p>
            I watch the shoreline breathe, the desert shift, the city glow. I hold
            fresh satellite scenes and ground truth in a single memory. Ask me about
            land, water, buildings, roads, ships — I answer with evidence.
          </p>
          <p className="mt-4">
            I don’t shout. I don’t decorate. I resolve. For planners and founders, for
            responders and researchers — I turn coordinates into clarity.
          </p>
          <p className="mt-4">
            Built by <span className="text-white">Vortx.ai</span>, I serve one
            promise: <span className="text-white">trustworthy AI for Qatar</span> —
            grounded in orbit, delivered in seconds.
          </p>
        </div>

        {/* CTAs */}
        <div id="enter" className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="#capabilities"
            className="inline-flex items-center justify-center rounded-xl border border-zinc-700 bg-white/5 px-5 py-3 text-sm font-medium text-zinc-100 backdrop-blur transition hover:bg-white/10"
          >
            Enter the Portal
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-xl border border-zinc-700 px-5 py-3 text-sm font-medium text-zinc-300 hover:text-white"
          >
            Talk to Vortx.ai
          </a>
        </div>
      </section>

      {/* Capabilities — kept minimal & readable */}
      <section id="capabilities" className="mx-auto w-full max-w-5xl px-6 py-16 md:py-20">
        <div className="grid gap-6 md:grid-cols-3">
          <CapabilityCard title="Space‑grade context">
            Sentinel‑1/2 radar & optical streams fused with local data. One
            consistent record for Doha, Lusail, Wakrah, Ruwais — nationwide.
          </CapabilityCard>
          <CapabilityCard title="Ask, don’t integrate">
            Natural‑language queries for maps, counts, proximity, change and risk.
            Answers come with files, layers, and citations.
          </CapabilityCard>
          <CapabilityCard title="Arabic‑first delivery">
            Bilingual UI, API responses ready for municipal workflows and reports.
          </CapabilityCard>
          <CapabilityCard title="Operational trust">
            Flood, construction, traffic, coastline — decisions backed by pixels,
            not guesswork.
          </CapabilityCard>
          <CapabilityCard title="Private by design">
            Your questions stay yours. Data rooms for ministries, enterprises,
            and researchers.
          </CapabilityCard>
          <CapabilityCard title="Simple pricing">
            Start free. Pay per answer or project. No surprises.
          </CapabilityCard>
        </div>
      </section>

      {/* Minimal footer */}
      <footer id="contact" className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-4 px-6 py-8 md:flex-row md:items-center">
          <div className="text-sm text-zinc-400">
            © {new Date().getFullYear()} geo.qa — Qatar’s AI Portal • Built by Vortx.ai
          </div>
          <div className="text-sm text-zinc-400">
            Contact: <a className="hover:text-zinc-200" href="mailto:hello@vortx.ai">hello@vortx.ai</a>
          </div>
        </div>
        {/* Qatar skyline — subtle, fixed at bottom */}
        <div className="pointer-events-none relative">
          <svg
            aria-hidden="true"
            className="absolute inset-x-0 -bottom-0 h-24 w-full opacity-25 md:h-32"
            viewBox="0 0 1200 200"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="qatar-maroon" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#8A1538" stopOpacity="0.55" />
                <stop offset="100%" stopColor="#8A1538" stopOpacity="0.2" />
              </linearGradient>
              <linearGradient id="edge-fade" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#000" stopOpacity="0" />
                <stop offset="15%" stopColor="#000" stopOpacity="1" />
                <stop offset="85%" stopColor="#000" stopOpacity="1" />
                <stop offset="100%" stopColor="#000" stopOpacity="0" />
              </linearGradient>
            </defs>
            {/* base sand line */}
            <path d="M0 170 L1200 150 L1200 200 L0 200 Z" fill="url(#qatar-maroon)" />
            {/* stylized skyline silhouettes: MIA, NMoQ, Tornado, Doha Tower, Torch */}
            {/* Museum of Islamic Art */}
            <path d="M120 150 h60 v-20 h-20 v-20 h-20 v20 h-20 z" fill="#8A1538" opacity="0.35" />
            {/* National Museum of Qatar (desert rose shards) */}
            <g fill="#8A1538" opacity="0.35">
              <ellipse cx="250" cy="150" rx="28" ry="6" />
              <ellipse cx="250" cy="144" rx="20" ry="5" />
              <ellipse cx="250" cy="139" rx="14" ry="4" />
            </g>
            {/* Tornado Tower */}
            <path d="M360 150 v-70 c10 -10 20 -10 30 0 v70 z" fill="#8A1538" opacity="0.35" />
            <path d="M360 110 c10 6 20 6 30 0" stroke="#8A1538" strokeWidth="2" opacity="0.35" fill="none" />
            {/* Doha Tower (cylindrical) */}
            <rect x="420" y="80" width="28" height="70" fill="#8A1538" opacity="0.35" rx="12" />
            {/* Torch Doha */}
            <path d="M500 150 v-90 c6 8 12 24 12 40 s-6 32 -12 50 z" fill="#8A1538" opacity="0.35" />
            {/* Lusail arch hint */}
            <path d="M600 150 v-60 a30 28 0 1 1 30 0 v60 z" fill="#8A1538" opacity="0.35" />
            {/* low-rise blocks */}
            <rect x="680" y="120" width="20" height="30" fill="#8A1538" opacity="0.35" />
            <rect x="710" y="110" width="22" height="40" fill="#8A1538" opacity="0.35" />
            <rect x="740" y="100" width="18" height="50" fill="#8A1538" opacity="0.35" />
            {/* tapering fade mask at edges */}
            <rect x="0" y="0" width="1200" height="200" fill="url(#edge-fade)" style={{ mixBlendMode: 'multiply' }} />
          </svg>
        </div>
      </footer>
    </main>
  );
}

function CapabilityCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur">
      <h3 className="text-base font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-zinc-300">{children}</p>
    </div>
  );
}
