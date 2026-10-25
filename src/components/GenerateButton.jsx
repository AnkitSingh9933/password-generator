export default function GenerateButton({ passwordGenerate }) {
  return (
    <button
      type="button"
      className="group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-2xl border border-violet-500/25 bg-gradient-to-r from-violet-700 via-indigo-600 to-cyan-500 px-6 py-5 text-sm font-mono font-extrabold uppercase tracking-[0.2em] text-white shadow-[0_0_32px_rgba(139,92,246,0.4),0_0_0_1px_rgba(139,92,246,0.2)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_50px_rgba(34,211,238,0.5),0_0_0_1px_rgba(34,211,238,0.3)] active:translate-y-0.5 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#020408]"
      onClick={() => {
        passwordGenerate();
      }}
    >
      {/* Laser-sweep shine overlay — slides left-to-right on hover */}
      <div
        aria-hidden="true"
        className="-translate-x-full pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full"
      />

      {/* Top edge highlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"
      />

      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-6 w-6 transition-transform duration-500 group-hover:rotate-90 drop-shadow-[0_0_8px_rgba(255,255,255,0.9)]"
        aria-hidden="true"
      >
        <path
          d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="m19 16 .9 2.1L22 19l-2.1.9L19 22l-.9-2.1L16 19l2.1-.9L19 16Z"
          fill="currentColor"
        />
      </svg>

      Generate password
    </button>
  );
}
