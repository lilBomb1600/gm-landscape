"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { serviceCategories } from "@/data/business";
import { CursorGlow } from "./CursorGlow";
import { TiltCard } from "./TiltCard";

export function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section ref={sectionRef} id="services" className="relative overflow-hidden bg-ink py-24 sm:py-32">
      <CursorGlow containerRef={sectionRef} />

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
          <h2 className="font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight text-cream sm:text-5xl">
            Every part of the yard, done in-house.
          </h2>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {serviceCategories.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ type: "spring", stiffness: 160, damping: 18, delay: (i % 3) * 0.08 }}
            >
              <TiltCard maxTilt={8} className="group relative block aspect-[4/5] overflow-hidden rounded-3xl">
                <a href="#contact" className="absolute inset-0 block">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={s.image}
                    alt={s.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />

                  <div className="glass absolute inset-x-3 bottom-3 flex items-center justify-between rounded-2xl px-4 py-3.5">
                    <span className="font-[family-name:var(--font-display)] text-base font-semibold text-cream">
                      {s.title}
                    </span>
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-green-500/90 text-ink transition-transform group-hover:rotate-45">
                      <ArrowUpRight size={16} />
                    </span>
                  </div>
                </a>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
