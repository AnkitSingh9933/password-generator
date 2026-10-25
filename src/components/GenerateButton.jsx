export default function GenerateButton({ passwordGenerate }) {
  return (
    <button
      type="button"
      className="group relative flex w-full items-center justify-center gap-2.5 overflow-hidden rounded-2xl border-t border-white/20 bg-gradient-to-r from-violet-600 via-indigo-600 to-violet-700 px-6 py-4 text-sm font-bold tracking-wide text-white shadow-xl shadow-violet-950/60 ring-1 ring-white/10 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-violet-600/30 hover:brightness-105 active:translate-y-0 active:scale-[0.99] focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070913]"
      onClick={() => {
        passwordGenerate();
      }}
    >

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />

      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-5 w-5 transition-transform duration-300 group-hover:rotate-45"
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