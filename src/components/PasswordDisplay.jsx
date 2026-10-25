
import passwordStrength from "./passwordStrength";
import useCopyPassword from "../hooks/useCopyPassword";

const bars = [1, 2, 3, 4];

export default function PasswordDisplay({ password }) {
  const { copy, handleCopy } = useCopyPassword();
  const { strength, point } = passwordStrength(password);

  return (
    <div>
      <div className="mb-2.5 flex items-center justify-between">
        <label
          htmlFor="password-output"
          className="text-xs font-semibold uppercase tracking-wider text-slate-300"
        >
          Generated password
        </label>
        <span className="text-[11px] font-medium tracking-wide text-slate-500">
          Live preview
        </span>
      </div>

      <div className="group relative flex min-h-[76px] items-center gap-3 rounded-2xl border border-violet-500/25 bg-[#050711] p-4 shadow-inner shadow-black/60 ring-1 ring-white/[0.04] transition-all hover:border-violet-500/40">
        <div className="min-w-0 flex-1 overflow-hidden">
          <p
            id="password-output"
            className={`break-all font-mono text-base tracking-wide transition-colors sm:text-lg ${
              password === ""
                ? "text-slate-500 italic select-none"
                : "font-semibold text-emerald-300 drop-shadow-[0_0_12px_rgba(52,211,153,0.3)]"
            }`}
          >
            {password === "" ? "YourPasswordHere" : password}
          </p>
        </div>

        <button
          type="button"
          aria-label="Copy password"
          title="Copy to clipboard"
          className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl border transition-all duration-150 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 ${
            copy
              ? "border-emerald-400/40 bg-emerald-500/20 text-emerald-300 shadow-md shadow-emerald-950/40"
              : "border-white/10 bg-white/[0.04] text-slate-300 hover:border-violet-400/40 hover:bg-violet-500/15 hover:text-white"
          }`}
          onClick={() => handleCopy(password)}
        >
          {copy ? (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-4 w-4"
              aria-hidden="true"
            >
              <path
                d="m5 13 4 4L19 7"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-4 w-4"
              aria-hidden="true"
            >
              <rect
                x="8"
                y="8"
                width="11"
                height="12"
                rx="2"
                stroke="currentColor"
                strokeWidth="1.8"
              />
              <path
                d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3"
                stroke="currentColor"
                strokeWidth="1.8"
              />
            </svg>
          )}
        </button>
      </div>

      <div className="mt-4">
        {copy && (
          <div className="mb-3.5 flex items-center gap-2 rounded-xl border border-emerald-500/25 bg-emerald-500/10 px-3.5 py-2 text-xs font-semibold text-emerald-300 shadow-sm shadow-emerald-950/20 animate-in fade-in duration-200">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-4 w-4 shrink-0 text-emerald-400"
              aria-hidden="true"
            >
              <path
                d="m5 13 4 4L19 7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>{copy}</span>
          </div>
        )}

        <div className="mb-2 flex items-center justify-between text-xs">
          <span className="font-medium text-slate-400">Password strength</span>

          <span
            className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider ${
              strength === "strong"
                ? "border border-emerald-400/25 bg-emerald-500/10 text-emerald-300"
                : strength === "medium"
                  ? "border border-amber-400/25 bg-amber-500/10 text-amber-300"
                  : strength === "weak"
                    ? "border border-rose-400/25 bg-rose-500/10 text-rose-300"
                    : "border border-white/10 bg-white/5 text-slate-400"
            }`}
          >
            <span
              className={`h-1.5 w-1.5 rounded-full ${
                strength === "strong"
                  ? "bg-emerald-400 shadow-sm shadow-emerald-400"
                  : strength === "medium"
                    ? "bg-amber-400 shadow-sm shadow-amber-400"
                    : strength === "weak"
                      ? "bg-rose-400 shadow-sm shadow-rose-400"
                      : "bg-slate-500"
              }`}
            />
            {strength === "" ? "Not tested" : strength}
          </span>
        </div>

        <div className="grid grid-cols-4 gap-2">
          {bars.map((val) =>
            val <= point ? (
              <span
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  strength === "weak"
                    ? "bg-rose-400 shadow-sm shadow-rose-500/40"
                    : strength === "medium"
                      ? "bg-amber-400 shadow-sm shadow-amber-400/40"
                      : strength === "strong"
                        ? "bg-emerald-400 shadow-sm shadow-emerald-400/40"
                        : "bg-slate-500"
                }`}
                key={val}
              />
            ) : (
              <span className="h-1.5 rounded-full bg-white/10 transition-colors" key={val} />
            ),
          )}
        </div>
      </div>
    </div>
  );
}
