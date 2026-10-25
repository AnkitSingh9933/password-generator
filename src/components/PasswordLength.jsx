export default function PasswordLength({ length, setLength }) {
  return (
    <div>
      {/* ── Header row: label + large LED readout ── */}
      <div className="mb-4 flex items-end justify-between gap-4">
        <div>
          <label
            htmlFor="password-length"
            className="flex items-center gap-1.5 text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-400"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_5px_#22d3ee]" />
            KEY_LENGTH // ENTROPY
          </label>
          <span className="mt-0.5 block text-[11px] font-mono text-slate-600">
            REC_THRESHOLD: 14+ CHARACTERS
          </span>
        </div>

        {/* Large digital counter */}
        <div className="text-right leading-none">
          <div className="font-mono text-4xl font-black tabular-nums text-cyan-300 drop-shadow-[0_0_24px_rgba(34,211,238,0.5)] sm:text-5xl">
            {String(length).padStart(2, "0")}
          </div>
          <div className="mt-1 text-[10px] font-mono font-semibold tracking-[0.25em] text-cyan-500/55">
            CHARS
          </div>
        </div>
      </div>

      {/* ── Slider ── */}
      <input
        id="password-length"
        aria-label="Password length"
        type="range"
        min="6"
        max="32"
        value={length}
        className="h-4 w-full cursor-pointer appearance-none rounded-lg accent-cyan-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
        onChange={(e) => setLength(Number(e.target.value))}
      />

      {/* ── Min / max labels ── */}
      <div className="mt-3 flex justify-between text-[11px] font-mono font-medium text-slate-600">
        <span className="flex items-center gap-1.5">
          <span className="h-1 w-1 rounded-full bg-cyan-500/50" />
          06 MIN
        </span>
        <span className="hidden text-slate-700 sm:inline-block">
          ─── OPTIMAL RANGE [16 – 24] ───
        </span>
        <span className="flex items-center gap-1.5">
          32 MAX
          <span className="h-1 w-1 rounded-full bg-cyan-500/50" />
        </span>
      </div>
    </div>
  );
}
