import { useState } from "react";

const options = [
  {
    id: "uppercase",
    title: "Uppercase letters",
    example: "A–Z",
    checked: true,
    preview: "A",
  },
  {
    id: "lowercase",
    title: "Lowercase letters",
    example: "a–z",
    checked: true,
    preview: "a",
  },
  { id: "numbers",  title: "Numbers",           example: "0–9",   checked: true,  preview: "9" },
  { id: "symbols",  title: "Symbols",           example: "!@#$%", checked: false, preview: "#" },
];

export default function CharacterOptions({
  upperCase,
  setUpperCase,
  lowerCase,
  setLowerCase,
  number,
  setNumber,
  symbol,
  setSymbol,
}) {
  return (
    <fieldset>
      <legend className="mb-4 flex items-center gap-1.5 text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-400">
        <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_5px_#22d3ee]" />
        CHARACTER_POOLS // SETS
      </legend>

      <div className="grid gap-2.5 sm:grid-cols-2">
        {options.map((option) => {
          const isChecked =
            option.id === "uppercase"
              ? upperCase
              : option.id === "lowercase"
                ? lowerCase
                : option.id === "numbers"
                  ? number
                  : symbol;

          return (
            <label
              key={option.id}
              htmlFor={option.id}
              className={`group relative flex cursor-pointer items-center gap-3.5 overflow-hidden rounded-2xl border p-3.5 transition-all duration-200 select-none ${
                isChecked
                  ? "border-cyan-400/38 bg-[#051220]/80 shadow-[0_0_20px_rgba(6,182,212,0.14),inset_3px_0_0_rgba(34,211,238,0.7)] ring-1 ring-cyan-400/22"
                  : "border-slate-800/60 bg-[#060a14]/70 hover:border-slate-700/70 hover:bg-[#0a0f22]/75"
              }`}
            >
              {/* Large character-preview box */}
              <div
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl font-mono text-2xl font-black transition-all duration-200 ${
                  isChecked
                    ? "bg-cyan-500/14 text-cyan-300 shadow-[0_0_14px_rgba(34,211,238,0.3)]"
                    : "bg-slate-900/50 text-slate-700 group-hover:text-slate-500"
                }`}
              >
                {option.preview}
              </div>

              {/* Visually-hidden checkbox (accessible, label handles click) */}
              <input
                id={option.id}
                name={option.id}
                type="checkbox"
                checked={isChecked}
                onChange={(e) => {
                  const checked = e.target.checked;
                  option.id === "lowercase"
                    ? setLowerCase(checked)
                    : option.id === "uppercase"
                      ? setUpperCase(checked)
                      : option.id === "numbers"
                        ? setNumber(checked)
                        : setSymbol(checked);
                }}
                className="sr-only"
              />

              {/* Text */}
              <span className="min-w-0 flex-1">
                <span
                  className={`block text-sm font-semibold tracking-wide transition-colors ${isChecked ? "text-slate-100" : "text-slate-400"}`}
                >
                  {option.title}
                </span>
                <span className="mt-1 inline-block rounded border border-cyan-500/18 bg-black/40 px-1.5 py-0.5 font-mono text-[10px] font-semibold text-cyan-400/65">
                  {option.example}
                </span>
              </span>

              {/* Active indicator pip */}
              <div
                className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 transition-all duration-200 ${
                  isChecked
                    ? "border-cyan-400 bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.6)]"
                    : "border-slate-700 bg-transparent"
                }`}
              >
                {isChecked && (
                  <svg viewBox="0 0 10 10" fill="none" className="h-3 w-3" aria-hidden="true">
                    <path d="M1.5 5l2.5 2.5 4.5-4.5" stroke="#020408" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </div>
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}
