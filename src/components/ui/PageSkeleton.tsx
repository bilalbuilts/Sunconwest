/** Lightweight placeholder shown while a dynamic route's URL data resolves (keeps navigations instant). */
export function PageSkeleton() {
  return (
    <div aria-busy="true" aria-live="polite">
      <div className="bg-navy-deep py-16 sm:py-24">
        <div className="container-x animate-pulse">
          <div className="h-4 w-40 rounded bg-white/15" />
          <div className="mt-6 h-10 w-3/4 max-w-xl rounded bg-white/15" />
          <div className="mt-4 h-5 w-2/3 max-w-lg rounded bg-white/10" />
        </div>
      </div>
      <div className="container-x animate-pulse space-y-4 py-14">
        <div className="h-6 w-1/2 rounded bg-sand" />
        <div className="h-4 w-full rounded bg-sand" />
        <div className="h-4 w-11/12 rounded bg-sand" />
        <div className="h-4 w-4/5 rounded bg-sand" />
      </div>
      <span className="sr-only">Loading</span>
    </div>
  );
}
