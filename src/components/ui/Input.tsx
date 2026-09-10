import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
}

export function Input({ label, error, icon, ...props }: InputProps) {
  return (
    <div>
      {label && (
        <label
          htmlFor={props.id}
          className="block text-h6 font-bold text-muted uppercase tracking-label mb-1.5"
        >
          {label}
        </label>
      )}
      <div className="relative">
        <input
          className={`w-full px-4 py-3.5 rounded-lg border border-border border-solid border-[1.5px] focus:outline-none focus:ring-1 focus:ring-ink bg-paper text-body text-ink placeholder:text-muted 
        ${error ? "border-danger focus:ring-danger" : "focus:border-ink focus:ring-ink"}
        ${icon ? "pr-11" : "pr-4"}
          `}
          {...props}
        />
        {icon && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-muted w-[18px] h-5">
            {icon}
          </span>
        )}
      </div>
      {error && <p className="text-danger text-h6 mt-1">{error}</p>}
    </div>
  );
}
