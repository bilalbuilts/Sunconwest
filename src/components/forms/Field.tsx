import type { ReactNode } from "react";

export const inputCls =
  "w-full rounded-xl border border-line bg-surface px-4 py-3 text-ink placeholder:text-muted/60 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30";

export function Field({ label, error, children, htmlFor }: { label: string; error?: string; children: ReactNode; htmlFor: string }) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-medium text-heading">{label}</label>
      {children}
      {error && <p role="alert" className="mt-1 text-sm font-semibold text-red-600">{error}</p>}
    </div>
  );
}
