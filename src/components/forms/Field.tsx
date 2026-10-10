import type { ReactNode } from "react";

export const inputCls =
  "w-full rounded-xl border border-line bg-surface px-4 py-3 text-ink placeholder:text-muted/60 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30";

/** Roomier input used with a leading icon (see `icon` on Field). */
export const iconInputCls =
  "w-full rounded-xl border border-line bg-sand/60 py-3.5 pl-11 pr-4 text-ink placeholder:text-muted/60 transition-colors hover:border-accent/50 focus:border-accent focus:bg-surface focus:outline-none focus:ring-2 focus:ring-accent/30";

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
    <div className={className}>
      <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-medium text-heading">{label}</label>
      {icon ? (
        <div className="relative flex-1">
          <span
            aria-hidden
            className={`pointer-events-none absolute left-4 text-muted ${iconTop ? "top-4" : "top-1/2 -translate-y-1/2"}`}
          >
            {icon}
          </span>
          {children}
        </div>
      ) : (
        children
      )}
      {error && <p role="alert" className="mt-1 text-sm font-semibold text-red-600 dark:text-red-400">{error}</p>}
    </div>
  );
}
