import passwordStrength from "./passwordStrength";
import useCopyPassword from "../hooks/useCopyPassword";

const bars = [1, 2, 3, 4];

export default function PasswordDisplay({ password, error }) {
  const { copy, handleCopy } = useCopyPassword();
  const { strength, point } = passwordStrength(password);

  return (
    <div>
      {/* ── Field label ── */}
      <div className="mb-2.5 flex items-center justify-between">
        <label
          htmlFor="password-output"
          className="flex items-center gap-1.5 text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-400"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_5px_#22d3ee]" />
          KEY_OUTPUT // PREVIEW
        </label>
        <span className="text-[10px] font-mono tracking-widest text-cyan-500/50">
          CLIENT_SECURE
        </span>
      </div>

      {/* ── Terminal window ── */}
      <div className="overflow-hidden rounded-2xl shadow-[0_0_0_1px_rgba(34,211,238,0.18),0_16px_40px_rgba(0,0,0,0.7)]">
        {/* Faux terminal titlebar */}
        <div className="flex items-center justify-between border-b border-cyan-500/12 bg-[#020610] px-4 py-2.5">
          {/* Traffic-light dots */}
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-500/50 ring-1 ring-rose-500/30" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-500/50 ring-1 ring-amber-500/30" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/50 ring-1 ring-emerald-500/30" />
          </div>

          {/* Window title */}
          <span className="text-[10px] font-mono tracking-[0.18em] text-slate-700">
            KEYFORGE_VAULT_OS — SESSION_SECURE
          </span>

          {/* Copy button (moved to titlebar) */}
          <button
            type="button"
            disabled={!password}
            aria-label="Copy password"
            title="Copy password to clipboard"
            className={`grid h-8 w-8 shrink-0 place-items-center rounded-lg border transition-all duration-150 active:scale-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
              password===""
                ? "cursor-not-allowed border-slate-700/40 bg-slate-900/30 text-slate-700 opacity-40"
                : copy
                  ? "border-emerald-400/50 bg-emerald-500/20 text-emerald-300 shadow-[0_0_12px_rgba(16,185,129,0.35)]"
                  : "border-cyan-500/20 bg-cyan-950/20 text-slate-500 hover:border-cyan-400/50 hover:bg-cyan-500/15 hover:text-cyan-200 hover:shadow-[0_0_12px_rgba(6,182,212,0.2)]"
            }`}
            onClick={() => handleCopy(password)}
          >
            {copy ? (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-3.5 w-3.5"
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
                className="h-3.5 w-3.5"
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

        {/* Terminal output area */}
        <div className="min-h-[80px] bg-[#020508] p-4 sm:p-5">
          <p
            id="password-output"
            className={`break-all font-mono text-base tracking-wider transition-all duration-200 sm:text-lg ${
              password === ""
                ? "terminal-empty select-none italic text-slate-700"
                : "font-bold text-cyan-300 drop-shadow-[0_0_14px_rgba(34,211,238,0.55)]"
            }`}
          >
            {password === "" ? "YourPasswordHere" : password}
          </p>
        </div>
      </div>
      {error && (
        <p className="text-red-400 text-sm " role="alert">
          {error}
        </p>
      )}
      {/* ── Feedback & strength ── */}
      <div className="mt-4">
        {copy && (
          <div className="mb-3.5 flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-950/25 px-3.5 py-2 text-xs font-mono font-semibold text-emerald-300 shadow-[0_0_16px_rgba(16,185,129,0.18)] ring-1 ring-emerald-400/20">
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

        {/* Strength label row */}
        <div className="mb-2.5 flex items-center justify-between text-xs">
          <span className="font-mono font-medium text-slate-500">
            Password strength
          </span>

          <span
            className={`inline-flex items-center gap-1.5 rounded-full px-3 py-0.5 text-[11px] font-mono font-bold uppercase tracking-wider transition-all duration-300 ${
              strength === "strong"
                ? "border border-emerald-400/35 bg-emerald-950/30 text-emerald-300 shadow-[0_0_14px_rgba(16,185,129,0.25)]"
                : strength === "medium"
                  ? "border border-amber-400/35 bg-amber-950/30 text-amber-300 shadow-[0_0_14px_rgba(245,158,11,0.25)]"
                  : strength === "weak"
                    ? "border border-rose-400/35 bg-rose-950/30 text-rose-300 shadow-[0_0_14px_rgba(244,63,94,0.25)]"
                    : "border border-white/8 bg-white/4 text-slate-500"
            }`}
          >
            <span
              className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${
                strength === "strong"
                  ? "bg-emerald-400 shadow-[0_0_6px_#34d399]"
                  : strength === "medium"
                    ? "bg-amber-400 shadow-[0_0_6px_#fbbf24]"
                    : strength === "weak"
                      ? "bg-rose-400 shadow-[0_0_6px_#f43f5e]"
                      : "bg-slate-600"
              }`}
            />
            {strength === "" ? "Not tested" : strength}
          </span>
        </div>

        {/* Strength bars — taller, gradient, glowing */}
        <div className="grid grid-cols-4 gap-2">
          {bars.map((val) =>
            val <= point ? (
              <span
                className={`h-3 rounded-full transition-all duration-400 ${
                  strength === "weak"
                    ? "bg-gradient-to-r from-rose-600 to-rose-400 shadow-[0_0_12px_rgba(244,63,94,0.55)]"
                    : strength === "medium"
                      ? "bg-gradient-to-r from-amber-600 to-amber-400 shadow-[0_0_12px_rgba(245,158,11,0.55)]"
                      : strength === "strong"
                        ? "bg-gradient-to-r from-emerald-600 via-teal-400 to-cyan-400 shadow-[0_0_12px_rgba(52,211,153,0.55)]"
                        : "bg-slate-600"
                }`}
                key={val}
              />
            ) : (
              <span
                className="h-3 rounded-full bg-slate-800/70 ring-1 ring-white/4 transition-colors duration-300"
                key={val}
              />
            ),
          )}
        </div>
      </div>
    </div>
  );
}
