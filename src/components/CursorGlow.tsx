"use client";

import { useEffect, type RefObject } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";

/**
 * A soft light that trails the cursor within `containerRef`, so the glass
 * surfaces read as catching light rather than sitting flat on a photo.
 * Pointer position lives entirely in motion values (never React state) so it
 * never re-renders the tree on move, and it collapses to nothing under
 * prefers-reduced-motion. The listener attaches to the real content
 * container (not a pointer-events overlay), so clicks/links underneath are
 * never intercepted.
 */
export function CursorGlow({ containerRef }: { containerRef: RefObject<HTMLElement | null> }) {
  const reduce = useReducedMotion();
  const x = useMotionValue(-9999);
  const y = useMotionValue(-9999);
  const springX = useSpring(x, { stiffness: 120, damping: 25, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 120, damping: 25, mass: 0.4 });

  useEffect(() => {
    if (reduce) return;
    const el = containerRef.current;
    if (!el) return;

    const handleMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      x.set(e.clientX - rect.left);
      y.set(e.clientY - rect.top);
    };
    el.addEventListener("pointermove", handleMove);
    return () => el.removeEventListener("pointermove", handleMove);
  }, [containerRef, reduce, x, y]);

  if (reduce) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none absolute h-[560px] w-[560px] rounded-full opacity-70 mix-blend-screen"
      style={{
        left: springX,
        top: springY,
        translateX: "-50%",
        translateY: "-50%",
        background:
          "radial-gradient(circle, rgba(110,231,160,0.16) 0%, rgba(110,231,160,0.06) 40%, transparent 70%)",
      }}
    />
  );
}
