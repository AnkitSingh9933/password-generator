import PasswordDisplay from "./PasswordDisplay.jsx";
import PasswordLength from "./PasswordLength.jsx";
import CharacterOptions from "./CharacterOptions.jsx";
import GenerateButton from "./GenerateButton.jsx";
import { useCallback, useEffect, useState } from "react";

export default function PasswordCard() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [upperCase, setUpperCase] = useState(true);
  const [lowerCase, setLowerCase] = useState(true);
  const [number, setNumber] = useState(true);
  const [symbol, setSymbol] = useState(false);
  const [error,setError] = useState("")
  const passwordGenerate = useCallback(() => {
    let str = "";
    let pass = "";
    

 
    if (upperCase) {
      str += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (lowerCase) {
      str += "abcdefghijklmnopqrstuvwxyz";
    }
    if (number) {
      str += "0123456789";
    }
    if (symbol) {
      str += "!@#$%^&*()_+=-/.,<>~`";
    }
        if (str.length === 0) {
      setPassword("");
      setError("Please select at least one character option.");
      return;
    }
       setError("");
   
    

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  },[length, upperCase, lowerCase, number, symbol]);
  useEffect(
    () => passwordGenerate(),
    [passwordGenerate],
  );
  return (
    <section className="relative overflow-hidden rounded-3xl bg-[#040a14]/95 shadow-[0_0_0_1px_rgba(34,211,238,0.18),0_0_0_1px_rgba(255,255,255,0.06),0_32px_80px_rgba(0,0,0,0.8)] backdrop-blur-2xl">
      {/* ── Laser top edge ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent"
      />

      {/* ── Corner bracket ticks (animated pulse) ── */}
      <span
        aria-hidden="true"
        className="anim-border-pulse pointer-events-none absolute left-3 top-3 h-3.5 w-3.5 border-l-2 border-t-2 border-cyan-400/60"
      />
      <span
        aria-hidden="true"
        className="anim-border-pulse pointer-events-none absolute right-3 top-3 h-3.5 w-3.5 border-r-2 border-t-2 border-cyan-400/60"
      />
      <span
        aria-hidden="true"
        className="anim-border-pulse pointer-events-none absolute bottom-3 left-3 h-3.5 w-3.5 border-b-2 border-l-2 border-cyan-400/60"
      />
      <span
        aria-hidden="true"
        className="anim-border-pulse pointer-events-none absolute bottom-3 right-3 h-3.5 w-3.5 border-b-2 border-r-2 border-cyan-400/60"
      />

      {/* ── Console toolbar ── */}
      <div className="flex items-center justify-between border-b border-cyan-500/12 bg-[#020710]/60 px-6 py-3.5 sm:px-8">
        <div className="flex items-center gap-2.5">
          <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
          <span className="font-mono text-[11px] font-bold uppercase tracking-[0.22em] text-cyan-400">
            KEY_GENERATOR // CONSOLE
          </span>
        </div>
        <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-cyan-400/25 bg-gradient-to-br from-cyan-500/12 via-indigo-500/8 to-violet-500/12 text-cyan-300 shadow-[inset_0_0_14px_rgba(34,211,238,0.18)]">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="h-5 w-5"
            aria-hidden="true"
          >
            <path
              d="M12 3 19 6v5c0 4.7-3 7.7-7 10-4-2.3-7-5.3-7-10V6l7-3Z"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinejoin="round"
            />
            <path
              d="m9 12 2 2 4-4"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* ── Card intro ── */}
      <div className="px-6 pb-0 pt-6 sm:px-8">
        <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
          Build your password
        </h2>
        <p className="mt-1 text-sm text-slate-500">
          Choose your settings, then generate.
        </p>
      </div>

      {/* ── Controls ── */}
      <div className="space-y-6 px-6 pb-6 pt-6 sm:space-y-7 sm:px-8 sm:pb-8">
        <PasswordDisplay password={password} error={error}/>
        <PasswordLength length={length} setLength={setLength} />
        <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/18 to-transparent" />
        <CharacterOptions
          upperCase={upperCase}
          lowerCase={lowerCase}
          setUpperCase={setUpperCase}
          setLowerCase={setLowerCase}
          number={number}
          setNumber={setNumber}
          symbol={symbol}
          setSymbol={setSymbol}
        />
        <GenerateButton passwordGenerate={passwordGenerate} />
      </div>

      {/* ── Card footer ── */}
      <div className="flex items-center justify-center gap-2 border-t border-cyan-500/10 bg-[#020710]/40 px-6 py-3.5 text-xs font-mono tracking-wide text-slate-500 sm:px-8">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="h-3.5 w-3.5 text-emerald-400"
          aria-hidden="true"
        >
          <rect
            x="5"
            y="10"
            width="14"
            height="11"
            rx="2"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <path
            d="M8 10V7a4 4 0 0 1 8 0v3"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
        <span>Passwords are generated locally in your browser</span>
      </div>
    </section>
  );
}
