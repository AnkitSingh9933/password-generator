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
    //  if(!password){
    //   return;
    //  }
    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  };

  return (
    <section className="rounded-3xl border border-white/10 bg-white/[0.045] p-5 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-7">
      <div className="mb-7 flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-violet-300">
            Password generator
          </p>
          <h2 className="mt-2 text-xl font-semibold text-white sm:text-2xl">
            Build your password
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            Choose your settings, then generate.
          </p>
        </div>
        <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-white/10 bg-white/5 text-violet-200">
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
      <div className="space-y-7">
        <PasswordDisplay password={password} />
        <PasswordLength length={length} setLength={setLength} />
        <div className="h-px bg-white/8" />
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
      <div className="mt-6 flex items-center justify-center gap-2 border-t border-white/8 pt-5 text-xs text-slate-500">
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
