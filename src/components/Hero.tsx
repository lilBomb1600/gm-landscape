"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { business } from "@/data/business";
import { FloatingParticles } from "./FloatingParticles";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgScale = useTransform(scrollYProgress, [0, 1], reduce ? [1.1, 1.1] : [1.1, 1.28]);
  const bgY = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : ["0%", "18%"]);
  const fade = useTransform(scrollYProgress, [0, 0.8], reduce ? [1, 1] : [1, 0]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative flex min-h-[100dvh] w-full flex-col justify-end overflow-hidden bg-ink"
    >
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/images/hero-checkerboard-fountain.jpg)", scale: bgScale, y: bgY }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/10" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-transparent to-transparent" />

      <FloatingParticles count={16} />

      <motion.div style={{ opacity: fade }} className="relative z-10 px-6 pb-24 sm:pb-28">
        <div className="mx-auto w-full max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5"
          >
            <div className="flex text-gold-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={12} fill="currentColor" strokeWidth={0} />
              ))}
            </div>
            <span className="whitespace-nowrap font-[family-name:var(--font-data)] text-[11px] text-mist sm:text-xs">
              {business.rating.toFixed(1)} on Yelp · 30 years
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl font-[family-name:var(--font-display)] text-5xl font-bold leading-[0.98] tracking-tight text-cream text-glow sm:text-7xl"
          >
            Your dream yard, built by the people who own it.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="mt-5 max-w-xl font-[family-name:var(--font-body)] text-lg text-mist"
          >
            No middlemen. Gilberto and Manuel handle every project themselves, from
            the first quote to the last paver.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#contact"
              className="group flex items-center gap-2 rounded-full bg-green-500 px-6 py-3 font-[family-name:var(--font-display)] text-sm font-semibold text-ink shadow-[0_0_40px_-8px_rgba(52,211,153,0.7)] transition-transform hover:scale-[1.03]"
            >
              Get a Free Estimate
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#gallery" className="glass glass-pill px-6 py-3 font-[family-name:var(--font-display)] text-sm font-semibold text-cream transition-transform hover:scale-[1.03]">
              See Our Work
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
