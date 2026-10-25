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
      <div className="mb-5">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">Stay protected</p>
        <h2 className="mt-2 text-xl font-semibold text-white">A little security goes a long way.</h2>
        <p className="mt-2 text-sm leading-6 text-slate-400">Small habits can make a meaningful difference to your online safety.</p>
      </div>
      {tips.map((tip) => (
        <article key={tip.number} className="flex gap-4 rounded-2xl border border-white/8 bg-white/[0.035] p-4 transition hover:border-white/15 hover:bg-white/[0.055]">
          <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-cyan-300/15 bg-cyan-300/[0.07] text-cyan-200"><TipIcon type={tip.icon} /></div>
          <div><div className="flex items-center gap-2"><h3 className="text-sm font-semibold text-slate-100">{tip.title}</h3><span className="text-[10px] font-medium tracking-wider text-slate-600">{tip.number}</span></div><p className="mt-1.5 text-sm leading-6 text-slate-400">{tip.description}</p></div>
        </article>
      ))}
      <div id="about" className="rounded-2xl border border-violet-300/15 bg-gradient-to-br from-violet-500/10 to-indigo-500/5 p-4">
        <div className="flex items-center gap-2 text-sm font-semibold text-violet-100"><span className="text-violet-300">✦</span>Privacy first</div>
        <p className="mt-2 text-sm leading-6 text-slate-400">This is a starter UI. Add password-generation and copy logic yourself; keep generated passwords out of logs and analytics.</p>
      </div>
    </aside>
  );
}