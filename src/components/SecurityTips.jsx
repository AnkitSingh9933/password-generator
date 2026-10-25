const tips = [
  { number: "01", title: "Go longer", description: "Longer passwords are generally harder to guess. Aim for 14–16 characters or more.", icon: "length" },
  { number: "02", title: "Mix it up", description: "Combine different character types when the service supports them.", icon: "mix" },
  { number: "03", title: "Never reuse", description: "Use a unique password for every account to limit the impact of a breach.", icon: "unique" },
];

function TipIcon({ type }) {
  if (type === "length") return <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true"><path d="M4 8V5h3M17 5h3v3M20 16v3h-3M7 19H4v-3M8 12h8M12 8v8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>;
  if (type === "mix") return <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true"><path d="M4 7h3c5 0 5 10 10 10h3M17 14l3 3-3 3M4 17h3c2 0 3.2-1.6 4.3-3.5M15 7h5M17 4l3 3-3 3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>;
  return <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true"><rect x="5" y="10" width="14" height="11" rx="2" stroke="currentColor" strokeWidth="1.7" /><path d="M8 10V7a4 4 0 0 1 8 0v3M9.5 15l1.7 1.7 3.5-3.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

export default function SecurityTips() {
  return (
    <aside id="tips" className="space-y-4">
      <div className="mb-6">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
          Stay protected
        </p>
        <h2 className="mt-1.5 text-xl font-bold tracking-tight text-white">
          A little security goes a long way.
        </h2>
        <p className="mt-1.5 text-sm leading-relaxed text-slate-400">
          Small habits can make a meaningful difference to your online safety.
        </p>
      </div>

      {tips.map((tip) => (
        <article
          key={tip.number}
          className="group flex gap-4 rounded-2xl border border-white/[0.08] bg-slate-900/40 p-4.5 backdrop-blur-md transition-all duration-200 hover:border-cyan-400/30 hover:bg-slate-900/60 hover:shadow-lg hover:shadow-cyan-950/20"
        >
          <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-cyan-400/20 bg-cyan-400/[0.08] text-cyan-300 shadow-inner shadow-cyan-500/10 transition-transform duration-200 group-hover:scale-105">
            <TipIcon type={tip.icon} />
          </div>
          <div>
            <div className="flex items-center gap-2.5">
              <h3 className="text-sm font-bold tracking-wide text-slate-100">
                {tip.title}
              </h3>
              <span className="rounded-md border border-white/[0.06] bg-black/30 px-2 py-0.5 font-mono text-[10px] font-semibold tracking-wider text-slate-400">
                {tip.number}
              </span>
            </div>
            <p className="mt-1.5 text-sm leading-relaxed text-slate-400">
              {tip.description}
            </p>
          </div>
        </article>
      ))}

      <div
        id="about"
        className="relative overflow-hidden rounded-2xl border border-violet-400/20 bg-gradient-to-br from-violet-500/10 via-indigo-500/5 to-transparent p-5 backdrop-blur-md shadow-md shadow-violet-950/20"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-violet-400/30 to-transparent"
        />
        <div className="flex items-center gap-2 text-sm font-bold text-violet-200">
          <span className="text-violet-400">✦</span> Privacy first
        </div>
        <p className="mt-2 text-sm leading-relaxed text-slate-400">
          This is a starter UI. Add password-generation and copy logic yourself; keep generated passwords out of logs and analytics.
        </p>
      </div>
    </aside>
  );
}