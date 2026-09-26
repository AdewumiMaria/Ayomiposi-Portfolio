import Reveal from "@/components/animations/Reveal";
import { cn } from "@/lib/cn";

type PageHeaderProps = {
  /** Small mono label above the title, e.g. "CORE COMPETENCIES". */
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
};

// Shared masthead for every inner route, sitting on the blueprint grid.
const PageHeader = ({ eyebrow, title, description, className }: PageHeaderProps) => {
  return (
    <section className={cn("theme-fade relative overflow-hidden bg-canvas", className)}>
      <div className="pointer-events-none absolute inset-0 blueprint" />
      <div className="pointer-events-none absolute inset-0 royal-glow" />

      <div className="relative mx-auto w-[92%] max-w-6xl py-16 md:py-24">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-royal">
            {eyebrow}
          </p>
          <h1 className="mt-4 max-w-3xl text-balance text-3xl font-bold tracking-tight text-ink md:text-5xl">
            {title}
          </h1>
          {description ? (
            <p className="mt-5 max-w-2xl text-sm leading-7 text-ink-muted md:text-base">
              {description}
            </p>
          ) : null}
        </Reveal>
      </div>
    </section>
  );
};

export default PageHeader;
