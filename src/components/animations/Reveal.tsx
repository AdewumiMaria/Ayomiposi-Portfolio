"use client";

import { motion as Motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** Seconds to wait before this element animates — use to stagger siblings. */
  delay?: number;
  /** Travel distance in px. Negative values slide down instead of up. */
  offsetY?: number;
};

// NOTE: This is the only client boundary most sections need. Children are passed
// in as props, so server components stay server-rendered inside it.
const Reveal = ({ children, className, delay = 0, offsetY = 24 }: RevealProps) => {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <Motion.div
      // NOTE: framer-motion renders `initial` as an inline opacity:0 during SSR, so
      // without this hook for the <noscript> stylesheet in layout.tsx the whole page
      // below the fold stays invisible when JavaScript does not run.
      data-reveal
      className={cn(className)}
      initial={{ opacity: 0, y: offsetY }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Motion.div>
  );
};

export default Reveal;
