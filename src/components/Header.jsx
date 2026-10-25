export default function Header() {
  return (
    <header className="sticky top-0 z-30 flex items-center justify-between border-b border-white/[0.055] bg-[#020408]/80 py-4 backdrop-blur-xl">
      {/* Subtle bottom-border glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"
      />

      {/* ── Brand ── */}
      <a
        href="#generator"
        className="group flex items-center gap-3.5 transition-opacity hover:opacity-90"
      >
        <span className="relative grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-cyan-500 via-indigo-600 to-violet-700 shadow-[0_0_20px_rgba(6,182,212,0.35)] ring-1 ring-cyan-400/30 transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_28px_rgba(6,182,212,0.55)]">
          <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-white" aria-hidden="true">
            <path d="M7.5 10V7.5a4.5 4.5 0 0 1 9 0V10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            <rect x="4.5" y="10" width="15" height="10.5" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
            <circle cx="12" cy="15" r="1.2" fill="currentColor" />
          </svg>
          <span className="anim-pulse-glow absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_6px_#22d3ee] ring-2 ring-[#020408]" />
        </span>
        <span>
          <span className="block text-base font-extrabold tracking-[0.28em] text-white transition-colors group-hover:text-cyan-100">
            KEYFORGE
          </span>
          <span className="block text-[10px] font-mono font-semibold tracking-[0.32em] text-cyan-400/75">
            PASSWORD STUDIO
          </span>
        </span>
      </a>

      {/* ── Nav ── */}
      <nav className="hidden items-center gap-1 sm:flex" aria-label="Main navigation">
        {[
          { href: "#generator", label: "Generator" },
          { href: "#tips",      label: "Security tips" },
          { href: "#about",     label: "About" },
        ].map(({ href, label }) => (
          <a
            key={href}
            href={href}
            className="group relative rounded-lg px-3.5 py-1.5 text-xs font-mono font-medium tracking-wider text-slate-500 transition-all duration-200 hover:text-cyan-200"
          >
            <span className="absolute inset-x-3 bottom-0.5 h-px scale-x-0 bg-gradient-to-r from-cyan-400 to-violet-400 transition-transform duration-200 group-hover:scale-x-100" />
            {label}
          </a>
        ))}
      </nav>

      {/* ── Status badge ── */}
      <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/20 px-3.5 py-1.5 text-xs font-mono text-emerald-300 ring-1 ring-emerald-400/15 shadow-[0_0_18px_rgba(16,185,129,0.18)]">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_6px_#34d399]" />
        </span>
        Local & private
      </span>
    </header>
  );
}
