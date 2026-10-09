"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

const slides = [
  {
    image: "/images/hero-modern-home.jpg",
    alt: "Modern Australian home surrounded by gum trees at dusk",
    label: "Residential building & renovation",
    caption: "Roofing, tiling, plumbing, painting and carpentry for homes across Perth and WA.",
  },
  {
    image: "/images/pool-residence.jpg",
    alt: "Contemporary white residence with a pool under a blue sky",
    label: "Remodelling & redesign",
    caption: "Kitchens, bathrooms, outdoor living and full redesigns that change how your space works.",
  },
  {
    image: "/images/commercial-cranes.jpg",
    alt: "Cranes over a large commercial construction project",
    label: "Commercial & restoration",
    caption: "Offices, shopping centres and apartments: renovated, refitted and restored to a high standard.",
  },
];

const INTERVAL = 6500;

export function HeroSlider() {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [hover, setHover] = useState(false);

  const go = useCallback((i: number) => setIndex((i + slides.length) % slides.length), []);

  useEffect(() => {
    if (!playing || hover || reduce) return;
    const t = setTimeout(() => go(index + 1), INTERVAL);
    return () => clearTimeout(t);
  }, [index, playing, hover, reduce, go]);

  const slide = slides[index];

  return (
    <section
      className="relative isolate overflow-hidden bg-navy-deep text-white"
      aria-roledescription="carousel"
      aria-label="Featured services"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onFocus={() => setHover(true)}
      onBlur={() => setHover(false)}
    >
      {/* Slides: all stay mounted so images are preloaded; only the active one is visible */}
      {slides.map((s, i) => (
        <motion.div
          key={s.image}
          aria-hidden={i !== index}
          className="absolute inset-0 -z-20"
          initial={false}
          animate={{ opacity: i === index ? 1 : 0 }}
          transition={{ duration: reduce ? 0 : 1.2, ease: "easeInOut" }}
        >
          <motion.div
            className="absolute inset-0"
            initial={false}
            animate={reduce ? { scale: 1 } : i === index ? { scale: 1.12 } : { scale: 1 }}
            transition={i === index ? { duration: (INTERVAL + 1200) / 1000, ease: "linear" } : { duration: 0 }}
          >
            <Image src={s.image} alt={s.alt} fill priority={i === 0} sizes="100vw" className="object-cover" />
          </motion.div>
        </motion.div>
      ))}
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-deep via-navy-deep/80 to-navy-deep/20" />

      <div className="container-x relative py-24 sm:py-32 lg:py-40">
        <p className="eyebrow">Suncon West PTY LTD &middot; Perth, WA</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-[1.05] sm:text-6xl">
          Construction &amp; renovation, <span className="text-accent">done properly</span> across Western Australia.
        </h1>

        <div className="mt-6 min-h-[7.5rem] max-w-xl sm:min-h-[6.5rem]" aria-live={playing ? "off" : "polite"}>
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={reduce ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: -12 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${slides.length}`}
            >
              <p className="inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-accent backdrop-blur">
                {slide.label}
              </p>
              <p className="mt-3 text-lg text-white/85">{slide.caption}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link href="/get-quote" className="btn btn-accent">Get a Free Quote <ArrowRight size={18} aria-hidden /></Link>
          <Link href="/services" className="btn btn-outline">Explore Services</Link>
        </div>

        {/* Controls */}
        <div className="mt-10 flex items-center gap-4">
          <button type="button" onClick={() => go(index - 1)} aria-label="Previous slide" className="grid h-10 w-10 place-items-center rounded-full border border-white/40 hover:bg-white hover:text-navy">
            <ChevronLeft size={20} aria-hidden />
          </button>
          <button type="button" onClick={() => go(index + 1)} aria-label="Next slide" className="grid h-10 w-10 place-items-center rounded-full border border-white/40 hover:bg-white hover:text-navy">
            <ChevronRight size={20} aria-hidden />
          </button>
          <div className="flex items-center gap-2" role="tablist" aria-label="Choose slide">
            {slides.map((s, i) => (
              <button
                key={s.image}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Show slide ${i + 1}: ${s.label}`}
                onClick={() => go(i)}
                className="relative h-1.5 w-12 overflow-hidden rounded-full bg-white/30"
              >
                {i === index && (
                  <motion.span
                    key={`${index}-${playing && !hover}`}
                    className="absolute inset-y-0 left-0 bg-accent"
                    initial={{ width: reduce || !playing || hover ? "100%" : "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: reduce || !playing || hover ? 0 : INTERVAL / 1000, ease: "linear" }}
                  />
                )}
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={() => setPlaying((p) => !p)}
            aria-label={playing ? "Pause slideshow" : "Play slideshow"}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/40 hover:bg-white hover:text-navy"
          >
            {playing ? <Pause size={16} aria-hidden /> : <Play size={16} aria-hidden />}
          </button>
        </div>
      </div>
    </section>
  );
}
