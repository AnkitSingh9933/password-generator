import Header from "./components/Header.jsx";
import PasswordCard from "./components/PasswordCard.jsx";
import SecurityTips from "./components/SecurityTips.jsx";

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#020408] text-slate-100">

      {/* ── Animated scan-line ── */}
      <div
        aria-hidden="true"
        className="anim-scan pointer-events-none fixed left-0 right-0 z-50 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"
        style={{ top: "-2px" }}
      />

      {/* ── Animated ambient orbs ── */}
      <div
        aria-hidden="true"
        className="anim-float-orb pointer-events-none fixed -left-72 -top-20 h-[800px] w-[800px] rounded-full bg-violet-600/12 blur-[200px]"
      />
      <div
        aria-hidden="true"
        className="anim-float-orb-alt pointer-events-none fixed -right-56 top-40 h-[700px] w-[700px] rounded-full bg-cyan-500/10 blur-[190px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none fixed bottom-0 left-1/3 h-[500px] w-[600px] rounded-full bg-indigo-700/8 blur-[180px]"
      />

      {/* ── Top horizon line ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-x-0 top-0 z-40 h-px bg-gradient-to-r from-transparent via-cyan-500/45 to-transparent"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Header />

        <main>
          {/* ════════ HERO ════════ */}
          <section className="anim-slide-up pb-10 pt-10 sm:pt-14 lg:pt-16">

            {/* System-boot status line */}
            <div className="mb-7 flex items-center gap-4">
              <div className="inline-flex items-center gap-2.5 rounded-full border border-cyan-500/25 bg-cyan-950/20 px-4 py-1.5 text-[11px] font-mono font-semibold tracking-[0.2em] text-cyan-300 ring-1 ring-cyan-400/15">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_6px_#22d3ee]" />
                </span>
                SYS.SEC // ZERO-KNOWLEDGE CLIENT CORE
              </div>
              <div className="hidden h-px flex-1 bg-gradient-to-r from-cyan-500/25 to-transparent sm:block" />
            </div>

            {/* Oversized editorial headline */}
            <h1 className="anim-slide-up delay-100 max-w-5xl">
              <span className="block text-[clamp(2.8rem,9vw,6.5rem)] font-black leading-[0.88] tracking-[-0.03em] text-white">
                Strong
              </span>
              <span className="block text-[clamp(2.8rem,9vw,6.5rem)] font-black leading-[0.88] tracking-[-0.03em] bg-gradient-to-r from-cyan-300 via-violet-300 to-fuchsia-400 bg-clip-text text-transparent drop-shadow-[0_0_60px_rgba(139,92,246,0.25)]">
                passwords.
              </span>
              <span className="mt-3 block text-[clamp(1.5rem,4.5vw,3rem)] font-extrabold leading-tight tracking-[-0.02em] text-slate-400">
                Zero guesswork.
              </span>
            </h1>

            <p className="anim-slide-up delay-200 mt-5 max-w-md text-sm leading-relaxed text-slate-500 sm:text-base">
              Create a unique password in seconds and take one more step toward a safer digital life.
            </p>
          </section>

          {/* ════════ GENERATOR ════════ */}
          <section className="anim-slide-up delay-300">
            <div
              id="generator"
              className="grid items-start gap-6 lg:grid-cols-[minmax(0,1.6fr)_minmax(300px,0.82fr)]"
            >
              <PasswordCard />
              <SecurityTips />
            </div>
          </section>

          {/* ════════ FOOTER ════════ */}
          <footer className="mt-14 border-t border-white/[0.05] py-7">
            <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
              <div className="flex items-center gap-2 text-[11px] font-mono tracking-widest text-slate-600">
                <span className="anim-pulse-glow h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_#22d3ee]" />
                MIL-SPEC ENTROPY // LOCAL CLIENT COMPUTATION
              </div>
              <p className="text-[11px] font-sans text-slate-700">
                Designed for privacy. Your passwords should stay yours.
              </p>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}