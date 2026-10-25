
import passwordStrength from "./passwordStrength";
import useCopyPassword from "../hooks/useCopyPassword";

const bars = [1, 2, 3, 4];

export default function PasswordDisplay({ password }) {
  const { copy, handleCopy } = useCopyPassword();
  const { strength, point } = passwordStrength(password);

  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <label
          htmlFor="password-output"
          className="text-sm font-medium text-slate-300"
        >
          Your password
        </label>
        <span className="text-xs text-slate-500">Preview</span>
      </div>
      <div className="flex min-h-[76px] items-center gap-3 rounded-2xl border border-violet-400/20 bg-[#0a0d1a] p-4">
        <div className="min-w-0 flex-1 overflow-hidden">
          <p
            id="password-output"
            className="break-all font-mono text-base tracking-wide text-slate-200 sm:text-lg"
          >
            {password === "" ? "YourPasswordHere" : password}
          </p>
        </div>

        <button
          type="button"
          aria-label="Copy password "
          className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition hover:border-violet-300/40 hover:bg-violet-400/10 hover:text-white"
          onClick={() => handleCopy(password)}
        >
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
              strokeWidth="1.7"
            />
            <path
              d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3"
              stroke="currentColor"
              strokeWidth="1.7"
            />
          </svg>
        </button>
      </div>
      <div className="mt-4">
        {copy && <div className="text-green-300">{copy}</div>}
        <div className="mb-2 flex items-center justify-between text-xs">
          <span className="text-slate-500">Password strength</span>

          <span className={`font-medium ${strength==="strong"?"text-green-400":strength==="medium"?"text-amber-300":strength==="weak"?"text-red-400":""}`}>
            {strength === "" ? "Not tested" : strength}
          </span>
        </div>
        <div className="grid grid-cols-4 gap-1.5">
          {bars.map((val) =>
            val <= point ? (
              <span
                className={`h-1 rounded-full ${strength === "weak" ? "bg-red-400" : strength === "medium" ? "bg-amber-400" : strength === "strong" ? "bg-green-400" : ""}`}
                key={val}
              />
            ) : (
              <span className="h-1 rounded-full bg-white/15" key={val} />
            ),
          )}
        </div>
      </div>
    </div>
  );
}
