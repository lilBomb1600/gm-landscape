"use client";

import { motion } from "framer-motion";
import { Phone, Leaf } from "lucide-react";
import { business } from "@/data/business";

const links = [
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-4 z-50 flex justify-center px-4"
    >
      <div className="glass glass-pill flex w-full max-w-3xl items-center justify-between gap-4 px-4 py-2.5 sm:px-6">
        <a href="#top" className="flex items-center gap-2 text-cream">
          <Leaf size={18} className="text-green-400" />
          <span className="font-[family-name:var(--font-display)] text-sm font-semibold tracking-tight">
            G&amp;M Landscape
          </span>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-[family-name:var(--font-body)] text-sm text-mist transition-colors hover:text-cream"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href={`tel:${business.phone.replace(/[^0-9]/g, "")}`}
          className="glass glass-pill flex items-center gap-2 px-3.5 py-1.5 text-sm font-medium text-cream transition-transform hover:scale-[1.04]"
        >
          <Phone size={14} className="text-green-400" />
          <span className="hidden sm:inline">Call Now</span>
        </a>
      </div>
    </motion.header>
  );
}
