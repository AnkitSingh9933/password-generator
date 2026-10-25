export default function PasswordLength({length,setLength}) {
  return (
    <div>
      <div className="mb-4 flex items-center justify-between gap-3">
        <label htmlFor="password-length" className="text-sm font-medium text-slate-200">Password length</label>
        <span className="inline-flex min-w-12 items-center justify-center rounded-lg border border-violet-300/20 bg-violet-400/10 px-3 py-1.5 font-mono text-sm font-semibold text-violet-200">{length}</span>
      </div>
      <input id="password-length" aria-label="Password length" type="range" min="6" max="32" value={length} className="h-2 w-full cursor-pointer accent-violet-500" onChange={(e)=>setLength(Number(e.target.value))}/>
      <div className="mt-2 flex justify-between text-xs text-slate-500"><span>6 characters</span><span>32 characters</span></div>
    </div>
  );
}