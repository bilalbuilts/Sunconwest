"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { nav, site } from "@/lib/site";
import { services } from "@/content/services";
import { Logo } from "./Logo";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export function Header() {
  const [open, setOpen] = useState(false);
  const [mega, setMega] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => {
    setOpen(false);
    setMega(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all ${
        scrolled ? "border-line bg-surface/95 shadow-sm backdrop-blur" : "border-transparent bg-surface"
      }`}
    >
      <div className="bg-navy-deep text-[0.72rem] text-white/85">
        <div className="container-x flex items-center justify-between py-2">
          <span className="hidden sm:inline">Perth, Western Australia &middot; {site.hours}</span>
          <div className="flex w-full items-center justify-between gap-4 sm:w-auto sm:justify-end">
            <a href={`mailto:${site.email}`} className="hover:text-accent">
              {site.email}
            </a>
            <a href={site.phoneHref} className="flex items-center gap-1.5 font-medium hover:text-accent">
              <Phone size={13} aria-hidden /> {site.phone}
            </a>
          </div>
        </div>
      </div>

      <div className="container-x flex h-[4.5rem] items-center justify-between">
        <Link href="/" onClick={close} aria-label={`${site.name} home`}>
          <Logo />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {nav.map((item) =>
            item.href === "/services" ? (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => setMega(true)}
                onMouseLeave={() => setMega(false)}
              >
                <Link
                  href="/services"
                  aria-haspopup="true"
                  aria-expanded={mega}
                  className="flex items-center gap-1 rounded-lg px-3 py-2 text-[0.78rem] font-semibold uppercase tracking-[0.06em] text-heading hover:text-accent"
                  onFocus={() => setMega(true)}
                >
                  Services <ChevronDown size={15} aria-hidden />
                </Link>
                {mega && (
                  <div className="absolute left-1/2 top-full w-[44rem] -translate-x-1/2 pt-3">
                    <div className="grid grid-cols-[1fr_15rem] overflow-hidden rounded-2xl border border-line bg-surface shadow-2xl">
                      <ul className="grid grid-cols-2 gap-1 p-4">
                        {services.map((s) => (
                          <li key={s.slug}>
                            <Link
                              href={`/services/${s.slug}`}
                              onClick={close}
                              className="block rounded-lg px-3 py-2.5 hover:bg-sand"
                            >
                              <span className="block text-[0.8rem] font-semibold uppercase tracking-[0.05em] text-heading">{s.name}</span>
                              <span className="line-clamp-1 text-[0.72rem] text-muted">{s.short}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-col justify-between bg-navy p-5 text-white">
                        <div>
                          <p className="text-lg font-semibold leading-snug">Ready to start your project?</p>
                          <p className="mt-2 text-sm text-white/75">Free, no-obligation written quotes across WA.</p>
                        </div>
                        <Link href="/get-quote" onClick={close} className="btn btn-accent mt-5 text-sm">
                          Get a Quote
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                aria-current={pathname === item.href ? "page" : undefined}
                className={`rounded-lg px-3 py-2 text-[0.78rem] font-semibold uppercase tracking-[0.06em] hover:text-accent ${
                  pathname === item.href ? "text-accent" : "text-heading"
                }`}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link href="/get-quote" className="btn btn-accent hidden px-5 py-2 text-[0.78rem] font-semibold uppercase tracking-[0.06em] sm:inline-flex">
            Get a Quote
          </Link>
          <button
            type="button"
            className="rounded-lg p-2 text-heading lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-x-0 bottom-0 top-[6.6rem] z-40 overflow-y-auto bg-surface lg:hidden">
          <nav aria-label="Mobile" className="container-x flex flex-col gap-1 py-6">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={close}
                className="rounded-lg px-3 py-3 text-[0.9rem] font-semibold uppercase tracking-[0.06em] text-heading hover:bg-sand"
              >
                {item.label}
              </Link>
            ))}
            <p className="eyebrow mt-4 px-3">Our services</p>
            <ul className="grid grid-cols-2 gap-1">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    onClick={close}
                    className="block rounded-lg px-3 py-2.5 text-[0.85rem] font-medium text-ink hover:bg-sand"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/get-quote" onClick={close} className="btn btn-accent mt-6">
              Get a Free Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
