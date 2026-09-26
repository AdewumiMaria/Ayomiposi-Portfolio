"use client";

import { motion as Motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";

type HoverLiftProps = {
  children: React.ReactNode;
  className?: string;
};

// Shared hover behaviour for cards so every grid on the site reacts identically.
const HoverLift = ({ children, className }: HoverLiftProps) => {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <Motion.div
      className={cn("h-full", className)}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 320, damping: 26 }}
    >
      {children}
    </Motion.div>
  );
};

export default HoverLift;
