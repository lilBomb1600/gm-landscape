"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { business, reviews } from "@/data/business";
import { CursorGlow } from "./CursorGlow";

export function Reviews() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section ref={sectionRef} id="reviews" className="relative overflow-hidden bg-ink py-24 sm:py-32">
      <CursorGlow containerRef={sectionRef} />

      <div className="relative mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <p className="font-[family-name:var(--font-body)] text-lg leading-relaxed text-mist">
            {business.about}
          </p>
          <p className="mt-3 font-[family-name:var(--font-display)] text-sm font-semibold text-cream">
            Gilberto &amp; Manuel, owners
          </p>
        </motion.div>

        {reviews.quotes.map((q) => (
          <motion.div
            key={q.author}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 120, damping: 18 }}
            className="glass relative mt-14 rounded-3xl p-8 sm:p-10"
          >
            <Quote size={36} className="text-green-400/60" />
            <p className="mt-4 font-[family-name:var(--font-body)] text-lg leading-relaxed text-cream sm:text-xl">
              {q.text}
            </p>
            <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
              <div>
                <p className="font-[family-name:var(--font-display)] text-sm font-semibold text-cream">{q.author}</p>
                <p className="font-[family-name:var(--font-data)] text-xs text-mist">{q.location} · {q.date}</p>
              </div>
              <div className="flex text-gold-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
