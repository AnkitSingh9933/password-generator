const tips = [
  { number: "01", title: "Go longer",    description: "Longer passwords are generally harder to guess. Aim for 14–16 characters or more.", icon: "length" },
  { number: "02", title: "Mix it up",    description: "Combine different character types when the service supports them.",                icon: "mix"    },
  { number: "03", title: "Never reuse",  description: "Use a unique password for every account to limit the impact of a breach.",          icon: "unique" },
];

function TipIcon({ type }) {
  if (type === "length") return <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true"><path d="M4 8V5h3M17 5h3v3M20 16v3h-3M7 19H4v-3M8 12h8M12 8v8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>;
  if (type === "mix")    return <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true"><path d="M4 7h3c5 0 5 10 10 10h3M17 14l3 3-3 3M4 17h3c2 0 3.2-1.6 4.3-3.5M15 7h5M17 4l3 3-3 3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>;
  return <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true"><rect x="5" y="10" width="14" height="11" rx="2" stroke="currentColor" strokeWidth="1.7" /><path d="M8 10V7a4 4 0 0 1 8 0v3M9.5 15l1.7 1.7 3.5-3.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

export default function SecurityTips() {
  return (
    <aside id="tips" className="space-y-3">
      {/* ── Section header ── */}
      <div className="mb-6">
        <p className="flex items-center gap-2 text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-cyan-400">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_5px_#22d3ee]" />
          DEFENSE_PROTOCOLS // INTEL
        </p>
        <h2 className="mt-2 text-xl font-bold tracking-tight text-white">
          A little security goes a long way.
        </h2>
        <p className="mt-1.5 text-sm leading-relaxed text-slate-500">
          Small habits can make a meaningful difference to your online safety.
        </p>
      </div>

      {/* ── Tip articles ── */}
      {tips.map((tip) => (
        <article
          key={tip.number}
          className="group relative flex overflow-hidden rounded-2xl border border-cyan-500/14 bg-[#060a14]/85 ring-1 ring-white/[0.04] transition-all duration-200 hover:border-cyan-400/35 hover:bg-[#09111e]/90 hover:shadow-[0_0_24px_rgba(6,182,212,0.14)]"
        >
          {/* Left hover accent bar */}
          <div className="w-0 shrink-0 bg-gradient-to-b from-cyan-400 to-violet-400 transition-all duration-300 group-hover:w-0.5 group-hover:shadow-[0_0_10px_rgba(34,211,238,0.6)]" />

          {/* Number gutter */}
          <div className="flex w-11 shrink-0 flex-col items-center justify-start border-r border-cyan-500/10 bg-black/20 pt-4 pb-4">
            <span className="font-mono text-xs font-extrabold text-cyan-600/80">
              {tip.number}
            </span>
            <span className="mt-1 h-px w-3 bg-cyan-500/30" />
          </div>

          {/* Content */}
          <div className="flex flex-1 gap-3.5 p-4">
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-cyan-400/25 bg-cyan-950/30 text-cyan-300 transition-transform duration-200 group-hover:scale-105 shadow-[inset_0_0_10px_rgba(34,211,238,0.18)]">
              <TipIcon type={tip.icon} />
            </div>

            <div>
              <h3 className="text-sm font-bold tracking-wide text-slate-100">
                {tip.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-500">
                {tip.description}
              </p>
            </div>
          </div>
        </article>
      ))}

      {/* ── Privacy / About box ── */}
      <div
        id="about"
        className="relative mt-1 overflow-hidden rounded-2xl border border-cyan-500/22 bg-gradient-to-br from-cyan-500/8 via-indigo-950/15 to-transparent p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.04)] backdrop-blur-xl"
      >
        {/* Top laser line */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent"
        />

        <div className="flex items-center gap-2 text-sm font-mono font-bold text-cyan-200">
          <span className="text-cyan-400">✦</span>
          Privacy first
        </div>
        <p className="mt-2 text-sm leading-relaxed text-slate-500">
          This is a starter UI. Add password-generation and copy logic yourself; keep generated passwords out of logs and analytics.
        </p>
      </div>
    </aside>
  );
}
