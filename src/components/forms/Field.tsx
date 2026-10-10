import type { ReactNode } from "react";

/*
 * Focus style: no hard outline. The border warms to the accent colour, a soft glow fades in,
 * the label and icon pick up the accent, and a thin underline sweeps in from the left.
 * (The global :focus-visible outline is switched off for form controls in globals.css.)
 */
const focusCls =
  "outline-none transition-[border-color,box-shadow,background-color] duration-200 " +
  "focus:border-accent focus:bg-surface focus:shadow-[0_0_0_4px_color-mix(in_srgb,var(--accent)_16%,transparent)] " +
  "placeholder:transition-opacity focus:placeholder:opacity-40";

export const inputCls =
  `w-full rounded-xl border border-line bg-sand/60 px-4 py-3.5 text-ink placeholder:text-muted/60 hover:border-accent/50 ${focusCls}`;

/** Roomier input used with a leading icon (see `icon` on Field). */
export const iconInputCls =
  `w-full rounded-xl border border-line bg-sand/60 py-3.5 pl-11 pr-4 text-ink placeholder:text-muted/60 hover:border-accent/50 ${focusCls}`;

export function Field({
  label,
  error,
  children,
  htmlFor,
  icon,
  className = "",
  iconTop = false,
}: {
  label: string;
  error?: string;
  children: ReactNode;
  htmlFor: string;
  icon?: ReactNode;
  className?: string;
  /** Pin the icon to the top-left (for textareas). */
  iconTop?: boolean;
}) {
  return (
    <div className={`group ${className}`}>
      <label
        htmlFor={htmlFor}
        className="mb-1.5 block text-sm font-medium text-heading transition-colors duration-200 group-focus-within:text-accent"
      >
        {label}
      </label>
      <div className="relative flex-1">
        {icon && (
          <span
            aria-hidden
            className={`pointer-events-none absolute left-4 z-10 text-muted transition-colors duration-200 group-focus-within:text-accent ${
              iconTop ? "top-4" : "top-1/2 -translate-y-1/2"
            }`}
          >
            {icon}
          </span>
        )}
        {children}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-x-3 bottom-0 h-0.5 origin-left scale-x-0 rounded-full bg-accent transition-transform duration-300 ease-out group-focus-within:scale-x-100"
        />
      </div>
      {error && <p role="alert" className="mt-1 text-sm font-semibold text-red-600 dark:text-red-400">{error}</p>}
    </div>
  );
}
