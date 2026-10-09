import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-x grid place-items-center py-28 text-center">
      <p className="eyebrow">Error 404</p>
      <h1 className="mt-3 text-5xl font-semibold text-heading">This page isn&apos;t on the plans</h1>
      <p className="mt-4 max-w-md text-muted">The page you&apos;re looking for may have moved or no longer exists. Try one of these instead.</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href="/" className="btn btn-navy">Home</Link>
        <Link href="/services" className="btn btn-navy">Services</Link>
        <Link href="/contact" className="btn btn-accent">Contact us</Link>
      </div>
    </section>
  );
}
