import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  /** Two-digit section marker, e.g. "01". */
  index?: string;
  title: string;
  subtitle?: string;
  className?: string;
};

// Keeps the "01 // Narrative" motif consistent across every section.
const SectionHeading = ({ index, title, subtitle, className }: SectionHeadingProps) => {
  return (
    <div className={cn("mb-10", className)}>
      <h2 className="flex flex-wrap items-baseline gap-2 font-mono text-xl font-semibold tracking-tight text-ink md:text-2xl">
        {index ? (
          <>
            <span className="text-royal">{index}</span>
            {/* Braced so JSX reads it as text, not as the start of a comment. */}
            <span className="text-ink-subtle">{"//"}</span>
          </>
        ) : null}
        <span>{title}</span>
      </h2>

      {subtitle ? (
        <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-subtle">
          {subtitle}
        </p>
      ) : null}

      <div className="mt-5 h-px w-full bg-line" />
    </div>
  );
};

export default SectionHeading;
