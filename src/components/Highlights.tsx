"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Users, Award, Languages, Wallet, Sprout } from "lucide-react";
import { business } from "@/data/business";

const icons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  "30 years in business": Award,
  "Family-owned & operated": Users,
  "Locally owned & operated": Sprout,
  "Certified professionals": ShieldCheck,
  "Verified license": ShieldCheck,
  "Free estimates": Wallet,
  "Se habla español": Languages,
};

export function Highlights() {
  return (
    <section className="relative border-y border-white/10 bg-surface py-10">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          className="flex flex-wrap justify-center gap-3"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ show: { transition: { staggerChildren: 0.06 } } }}
        >
          {business.highlights.map((h) => {
            const Icon = icons[h] ?? Award;
            return (
              <motion.div
                key={h}
                variants={{
                  hidden: { opacity: 0, y: 16, scale: 0.9 },
                  show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 220, damping: 20 } },
                }}
                className="glass glass-pill flex items-center gap-2 px-4 py-2"
              >
                <Icon size={16} className="text-green-400" />
                <span className="font-[family-name:var(--font-body)] text-sm text-cream">{h}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
