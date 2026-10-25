import { useState } from "react";

const options = [
  {
    id: "uppercase",
    title: "Uppercase letters",
    example: "A–Z",
    checked: true,
  },
  {
    id: "lowercase",
    title: "Lowercase letters",
    example: "a–z",
    checked: true,
  },
  { id: "numbers", title: "Numbers", example: "0–9", checked: true },
  { id: "symbols", title: "Symbols", example: "!@#$%", checked: false },
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
      <legend className="mb-3.5 text-xs font-semibold uppercase tracking-wider text-slate-300">
        Include characters
      </legend>
      <div className="grid gap-3 sm:grid-cols-2">
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
              className={`group flex cursor-pointer items-center gap-3.5 rounded-2xl border p-3.5 transition-all duration-200 select-none ${
                isChecked
                  ? "border-violet-400/35 bg-violet-500/[0.08] shadow-sm shadow-violet-950/30 ring-1 ring-violet-400/20"
                  : "border-white/[0.07] bg-white/[0.02] hover:border-white/[0.14] hover:bg-white/[0.04]"
              }`}
            >
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
                className="h-4 w-4 cursor-pointer rounded border-slate-600 bg-slate-900 accent-violet-500 transition-transform group-hover:scale-105 focus:ring-2 focus:ring-violet-400 focus:ring-offset-1 focus:ring-offset-slate-900"
              />
              <span className="min-w-0 flex-1">
                <span className="block text-sm font-semibold tracking-wide text-slate-200">
                  {option.title}
                </span>
                <span className="mt-1 inline-block rounded-md border border-white/[0.08] bg-black/30 px-2 py-0.5 font-mono text-[11px] font-medium text-slate-400">
                  {option.example}
                </span>
              </span>
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}
