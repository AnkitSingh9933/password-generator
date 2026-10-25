import PasswordDisplay from "./PasswordDisplay.jsx";
import PasswordLength from "./PasswordLength.jsx";
import CharacterOptions from "./CharacterOptions.jsx";
import GenerateButton from "./GenerateButton.jsx";
import { useState } from "react";

export default function PasswordCard() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [upperCase, setUpperCase] = useState(true);
  const [lowerCase, setLowerCase] = useState(true);
  const [number, setNumber] = useState(true);
  const [symbol, setSymbol] = useState(false);

  const passwordGenerate = () => {
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

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  };

  return (
    <section className="relative rounded-3xl border border-white/[0.1] bg-slate-900/50 p-6 shadow-2xl shadow-black/40 backdrop-blur-2xl ring-1 ring-white/[0.06] sm:p-8">
      {/* Subtle top edge glow highlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-8 -top-px h-px bg-gradient-to-r from-transparent via-violet-400/40 to-transparent"
      />

      <div className="mb-7 flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-violet-400">
            Password generator
          </p>
          <h2 className="mt-1.5 text-xl font-bold tracking-tight text-white sm:text-2xl">
            Build your password
          </h2>
          <p className="mt-1.5 text-sm text-slate-400">
            Choose your settings, then generate.
          </p>
        </div>
        <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-violet-400/20 bg-gradient-to-br from-violet-500/15 via-indigo-500/10 to-transparent text-violet-300 shadow-inner shadow-violet-500/10">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="h-6 w-6"
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
      <div className="space-y-6 sm:space-y-7">
        <PasswordDisplay password={password} />
        <PasswordLength length={length} setLength={setLength} />
        <div className="h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
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
      <div className="mt-7 flex items-center justify-center gap-2 border-t border-white/[0.07] pt-5 text-xs font-medium text-slate-400">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="h-4 w-4 text-emerald-400"
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
        Passwords are generated locally in your browser
      </div>
    </section>
  );
}
