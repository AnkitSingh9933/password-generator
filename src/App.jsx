import Header from "./components/Header.jsx";
import PasswordCard from "./components/PasswordCard.jsx";
import SecurityTips from "./components/SecurityTips.jsx";

export default function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#080b16] text-slate-100">
      <div aria-hidden="true" className="pointer-events-none absolute -left-40 top-24 h-96 w-96 rounded-full bg-violet-600/15 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-32 top-72 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-5 pb-16 sm:px-8">
        <Header />
        <main className="pt-14 sm:pt-20">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/10 px-3.5 py-1.5 text-xs font-medium tracking-wide text-violet-200">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" /> YOUR SECURITY, SIMPLIFIED
            </div>
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-6xl">
              Strong passwords.
              <span className="mt-2 block bg-gradient-to-r from-violet-300 via-fuchsia-300 to-cyan-200 bg-clip-text text-transparent">Zero guesswork.</span>
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
              Create a unique password in seconds and take one more step toward a safer digital life.
            </p>
          </div>
          <div id="generator" className="mx-auto grid max-w-5xl items-start gap-6 lg:grid-cols-[minmax(0,1.5fr)_minmax(280px,0.8fr)]">
            <PasswordCard />
            <SecurityTips />
          </div>
          <footer className="mt-14 text-center text-xs text-slate-600">Designed for privacy. Your passwords should stay yours.</footer>
        </main>
      </div>
    </div>
  );
}