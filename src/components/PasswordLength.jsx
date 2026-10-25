export default function PasswordLength({ length, setLength }) {
  return (
    <div>
      <div className="mb-3.5 flex items-center justify-between gap-3">
        <div>
          <label
            htmlFor="password-length"
            className="text-xs font-semibold uppercase tracking-wider text-slate-300"
          >
            Password length
          </label>
          <span className="block text-[11px] text-slate-500">
            Recommended: 14+ characters
          </span>
        </div>
        <span className="inline-flex min-w-14 items-center justify-center rounded-xl border border-violet-400/30 bg-violet-500/15 px-3 py-1 font-mono text-base font-bold text-violet-300 shadow-sm shadow-violet-950/30">
          {length}
        </span>
      </div>

      <input
        id="password-length"
        aria-label="Password length"
        type="range"
        min="6"
        max="32"
        value={length}
        className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-slate-800/90 accent-violet-500 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
        onChange={(e) => setLength(Number(e.target.value))}
      />

      <div className="mt-2.5 flex justify-between text-[11px] font-medium text-slate-500">
        <span className="flex items-center gap-1.5">
          <span className="h-1 w-1 rounded-full bg-slate-600" /> 6 min
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-1 w-1 rounded-full bg-slate-600" /> 32 max
        </span>
      </div>
    </div>
  );
}