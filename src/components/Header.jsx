export default function Header() {
  return (
    <header className="flex items-center justify-between border-b border-white/[0.08] py-5">
      <a
        href="#generator"
        className="group flex items-center gap-3.5 transition-opacity hover:opacity-95"
      >
        <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-violet-500 via-indigo-600 to-indigo-700 shadow-lg shadow-violet-950/50 ring-1 ring-white/20 transition-transform group-hover:scale-105">
          <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-white" aria-hidden="true">
            <path d="M7.5 10V7.5a4.5 4.5 0 0 1 9 0V10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            <rect x="4.5" y="10" width="15" height="10.5" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
            <circle cx="12" cy="15" r="1.2" fill="currentColor" />
          </svg>
        </span>
        <span>
          <span className="block text-base font-bold tracking-wider text-white">KEYFORGE</span>
          <span className="block text-[10px] font-semibold tracking-[0.24em] text-slate-400">
            PASSWORD STUDIO
          </span>
        </span>
      </a>

      <nav className="hidden items-center gap-2 text-sm text-slate-400 sm:flex">
        <a
          href="#generator"
          className="rounded-lg px-3.5 py-1.5 transition-colors hover:bg-white/[0.06] hover:text-white"
        >
          Generator
        </a>
        <a
          href="#tips"
          className="rounded-lg px-3.5 py-1.5 transition-colors hover:bg-white/[0.06] hover:text-white"
        >
          Security tips
        </a>
        <a
          href="#about"
          className="rounded-lg px-3.5 py-1.5 transition-colors hover:bg-white/[0.06] hover:text-white"
        >
          About
        </a>
      </nav>

      <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.07] px-3.5 py-1.5 text-xs font-medium text-emerald-300 shadow-sm shadow-emerald-950/30">
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
        </span>
        Local & private
      </span>
    </header>
  );
}