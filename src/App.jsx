import Header from "./components/Header.jsx";
import PasswordCard from "./components/PasswordCard.jsx";
import SecurityTips from "./components/SecurityTips.jsx";

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#070913] text-slate-100 selection:bg-violet-500/30 selection:text-white">
      {/* Ambient background lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-48 top-16 h-[500px] w-[500px] rounded-full bg-violet-600/10 blur-[130px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-60 h-[480px] w-[480px] rounded-full bg-cyan-500/10 blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/3 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-indigo-600/5 blur-[150px]"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20">
        <Header />

        <main className="pt-12 sm:pt-16 lg:pt-20">
          <div className="mx-auto mb-12 sm:mb-16 max-w-3xl text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/[0.08] px-4 py-1.5 text-xs font-semibold tracking-wider text-violet-300 backdrop-blur-md shadow-sm shadow-violet-950/20">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
              </span>
              YOUR SECURITY, SIMPLIFIED
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-6xl">
              Strong passwords.
              <span className="mt-2 block bg-gradient-to-r from-violet-200 via-purple-200 to-cyan-200 bg-clip-text text-transparent">
                Zero guesswork.
              </span>
            </h1>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-slate-400 sm:text-base">
              Create a unique password in seconds and take one more step toward a safer digital life.
            </p>
          </div>

          <div
            id="generator"
            className="mx-auto grid max-w-5xl items-start gap-6 lg:grid-cols-[minmax(0,1.55fr)_minmax(300px,0.85fr)]"
          >
            <PasswordCard />
            <SecurityTips />
          </div>

          <footer className="mt-16 text-center text-xs font-medium text-slate-600 tracking-wide">
            Designed for privacy. Your passwords should stay yours.
          </footer>
        </main>
      </div>
    </div>
  );
}