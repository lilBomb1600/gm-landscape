import { Leaf } from "lucide-react";
import { business } from "@/data/business";

export function Footer() {
  return (
    <footer className="bg-ink py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 border-t border-white/10 px-6 pt-8 text-center sm:flex-row sm:justify-between sm:text-left">
        <div className="flex items-center gap-2 text-cream">
          <Leaf size={16} className="text-green-400" />
          <span className="font-[family-name:var(--font-display)] text-sm font-semibold">
            G&amp;M Landscape Services
          </span>
        </div>
        <p className="font-[family-name:var(--font-data)] text-xs text-mist">
          {business.phone} · {business.serviceArea}
        </p>
        <p className="font-[family-name:var(--font-data)] text-xs text-mist">
          © {new Date().getFullYear()} G&amp;M Landscape Services
        </p>
      </div>
    </footer>
  );
}
