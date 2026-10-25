export default function Header() {
  return (
    <header className="flex items-center justify-between border-b border-white/8 py-5">
      <a href="#generator" className="flex items-center gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 shadow-lg shadow-violet-950/40">
          <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-white" aria-hidden="true">
            <path d="M7.5 10V7.5a4.5 4.5 0 0 1 9 0V10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            <rect x="4.5" y="10" width="15" height="10.5" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
            <circle cx="12" cy="15" r="1.2" fill="currentColor" />
          </svg>
        </span>
        <span><span className="block text-base font-semibold tracking-wide text-white">KEYFORGE</span><span className="block text-[10px] tracking-[0.2em] text-slate-500">PASSWORD STUDIO</span></span>
      </a>
      <nav className="hidden items-center gap-7 text-sm text-slate-400 sm:flex">
        <a href="#generator" className="transition hover:text-white">Generator</a>
        <a href="#tips" className="transition hover:text-white">Security tips</a>
        <a href="#about" className="transition hover:text-white">About</a>
      </nav>
      <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/15 bg-emerald-400/5 px-3 py-1.5 text-xs text-emerald-300"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />Local & private</span>
    </header>
  );
}