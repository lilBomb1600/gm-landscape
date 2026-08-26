"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Phone, MapPin } from "lucide-react";
import { business } from "@/data/business";
import { CursorGlow } from "./CursorGlow";

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section ref={sectionRef} id="contact" className="relative overflow-hidden bg-surface py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[400px] bg-gradient-to-t from-green-500/10 to-transparent" />
      <CursorGlow containerRef={sectionRef} />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", stiffness: 130, damping: 18 }}
          className="glass rounded-[2.5rem] px-8 py-14 sm:px-16 sm:py-20"
        >
          <h2 className="font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight text-cream text-glow sm:text-5xl">
            Let&apos;s build your yard.
          </h2>
          <p className="mx-auto mt-4 max-w-md font-[family-name:var(--font-body)] text-mist">
            Free estimates. No middlemen, you talk directly to Gilberto and Manuel,
            start to finish.
          </p>

          <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href={`tel:${business.phone.replace(/[^0-9]/g, "")}`}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-green-500 px-7 py-3.5 font-[family-name:var(--font-display)] text-base font-semibold text-ink shadow-[0_0_50px_-10px_rgba(52,211,153,0.8)] transition-transform hover:scale-[1.03] sm:w-auto"
            >
              <Phone size={18} />
              {business.phone}
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center gap-2 font-[family-name:var(--font-data)] text-sm text-mist">
            <MapPin size={14} className="text-green-400" />
            {business.serviceArea}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
