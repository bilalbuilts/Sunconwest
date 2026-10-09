// Placeholder wordmark. Swap for <Image src="/logo.svg" .../> once the real logo is supplied.
export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <span
        aria-hidden
        className="grid h-10 w-10 place-items-center rounded-lg bg-accent text-xl font-black text-white"
      >
        S
      </span>
      <span className={`font-[family-name:var(--font-heading)] leading-none ${light ? "text-white" : "text-navy"}`}>
        <span className="block text-xl font-extrabold tracking-tight">SUNCON WEST</span>
        <span className="block text-[0.62rem] font-bold uppercase tracking-[0.3em] text-accent">
          Construction · Perth WA
        </span>
      </span>
    </span>
  );
}
