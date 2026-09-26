"use client";

import Image from "next/image";
import { motion as Motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Code2 } from "lucide-react";
import ButtonLink from "@/components/ui/ButtonLink";
import { SITE_CONFIG } from "@/constants/site";

// Children animate in sequence once, on load — this is the only above-the-fold
// animation, so it does not wait for a scroll trigger.
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const Hero = () => {
  const prefersReducedMotion = useReducedMotion();
  const motionState = prefersReducedMotion ? "visible" : "hidden";

  return (
    <section className="theme-fade relative overflow-hidden bg-canvas">
      <div className="pointer-events-none absolute inset-0 blueprint" />
      <div className="pointer-events-none absolute inset-0 royal-glow" />

      <div className="relative mx-auto grid w-[92%] max-w-6xl items-center gap-12 py-16 md:py-24 lg:grid-cols-2 lg:gap-16">
        <Motion.div
          data-reveal
          variants={containerVariants}
          initial={motionState}
          animate="visible"
        >
          <Motion.div
            data-reveal
            variants={itemVariants}
            className="inline-flex items-center gap-2 border border-line bg-surface px-3 py-1.5"
          >
            <span className="relative flex size-2">
              {!prefersReducedMotion ? (
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-signal opacity-60" />
              ) : null}
              <span className="relative inline-flex size-2 rounded-full bg-signal" />
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-muted">
              {SITE_CONFIG.availability}
            </span>
          </Motion.div>

          <Motion.h1
            data-reveal
            variants={itemVariants}
            className="mt-6 text-balance text-4xl font-bold leading-[1.08] tracking-tight text-ink md:text-6xl"
          >
            Crafting responsive, <span className="text-royal">accessible</span>{" "}
            interfaces that ship production-ready.
          </Motion.h1>

          <Motion.p
            data-reveal
            variants={itemVariants}
            className="mt-6 max-w-xl text-sm leading-7 text-ink-muted md:text-base"
          >
            {SITE_CONFIG.description}
          </Motion.p>

          <Motion.div
            data-reveal
            variants={itemVariants}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <ButtonLink href="/projects">
              View projects
              <ArrowUpRight className="size-4" />
            </ButtonLink>
            <ButtonLink
              external
              href={SITE_CONFIG.githubUrl}
              variant="outline"
            >
              <Code2 className="size-4" />
              GitHub
            </ButtonLink>
          </Motion.div>

          <Motion.dl
            data-reveal
            variants={itemVariants}
            className="mt-12 grid max-w-md grid-cols-3 gap-4 border-t border-line pt-6"
          >
            {[
              { label: "Based in", value: "Lagos, NG" },
              { label: "Focus", value: "Frontend" },
              { label: "Stack", value: "TS / Next.js" },
            ].map((stat) => (
              <div key={stat.label}>
                <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-subtle">
                  {stat.label}
                </dt>
                <dd className="mt-1 font-mono text-sm text-ink">{stat.value}</dd>
              </div>
            ))}
          </Motion.dl>
        </Motion.div>

        {/* ─── Portrait ───────────────────────────────────────────────────── */}
        <Motion.div
          data-reveal
          initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="absolute -inset-3 border border-line" aria-hidden />

          <div className="relative border border-line bg-surface p-3">
            <div className="relative aspect-[4/5] overflow-hidden bg-surface-muted">
              <Image
                src="/images/passport.jpeg"
                alt={`Portrait of ${SITE_CONFIG.name}`}
                fill
                // NOTE: `fill` + `sizes` replaces the old fixed width/height, which
                // Next warned about on every render because CSS resized only one axis.
                sizes="(max-width: 1024px) 90vw, 480px"
                className="object-cover object-top"
                priority
              />
            </div>

            <div className="flex items-center justify-between border-t border-line px-1 pt-3">
              <p className="font-mono text-xs text-ink">{SITE_CONFIG.name}</p>
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-royal">
                {SITE_CONFIG.role}
              </p>
            </div>
          </div>
        </Motion.div>
      </div>
    </section>
  );
};

export default Hero;
