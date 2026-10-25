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
  // Har option ke hisaab se sahi state check karo:

  return (
    <fieldset>
      <legend className="mb-4 text-sm font-medium text-slate-200">
        Include characters
      </legend>
      <div className="grid gap-3 sm:grid-cols-2">
        {options.map((option) => (
          <label
            key={option.id}
            htmlFor={option.id}
            className="flex cursor-pointer items-center gap-3 rounded-xl border border-white/8 bg-white/[0.025] p-3.5 transition hover:border-violet-300/25 hover:bg-white/[0.045]"
          >
            <input
              id={option.id}
              name={option.id}
              type="checkbox"
              checked={
                option.id === "uppercase"
                  ? upperCase
                  : option.id === "lowercase"
                    ? lowerCase
                    : option.id === "numbers"
                      ? number
                      : symbol
              }
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
              className="h-4 w-4 cursor-pointer rounded border-slate-600 bg-slate-900 accent-violet-500"
            />
            <span className="min-w-0 flex-1">
              <span className="block text-sm font-medium text-slate-200">
                {option.title}
              </span>
              <span className="mt-0.5 block font-mono text-xs text-slate-500">
                {option.example}
              </span>
            </span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}
