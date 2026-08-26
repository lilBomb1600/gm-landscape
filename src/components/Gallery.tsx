"use client";

import { motion } from "framer-motion";
import { gallery } from "@/data/business";

const spans = [
  "sm:col-span-2 sm:row-span-2",
  "sm:col-span-1 sm:row-span-1",
  "sm:col-span-1 sm:row-span-1",
  "sm:col-span-1 sm:row-span-2",
  "sm:col-span-1 sm:row-span-1",
  "sm:col-span-1 sm:row-span-1",
  "sm:col-span-2 sm:row-span-1",
];

export function Gallery() {
  return (
    <section id="gallery" className="relative bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight text-cream sm:text-5xl">
            Real yards. Real photos.
          </h2>
        </motion.div>

        <div className="mt-14 grid grid-cols-2 auto-rows-[160px] gap-4 sm:auto-rows-[180px] sm:gap-5">
          {gallery.map((g, i) => (
            <motion.div
              key={g.src}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ type: "spring", stiffness: 150, damping: 18, delay: (i % 4) * 0.06 }}
              whileHover={{ scale: 1.02 }}
              className={`group relative overflow-hidden rounded-2xl ${spans[i % spans.length]}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={g.src}
                alt={g.alt}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
