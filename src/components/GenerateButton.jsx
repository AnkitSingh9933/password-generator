export default function GenerateButton({passwordGenerate}) {
  return (
    <button type="button" className="group flex w-full items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 px-5 py-4 text-sm font-semibold text-white shadow-lg shadow-violet-950/40 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-violet-950/50 active:translate-y-0"
    onClick={()=>{passwordGenerate()}}
    >
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 transition group-hover:rotate-12" aria-hidden="true"><path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" /><path d="m19 16 .9 2.1L22 19l-2.1.9L19 22l-.9-2.1L16 19l2.1-.9L19 16Z" fill="currentColor" /></svg>
      Generate password
    </button>
  );
}