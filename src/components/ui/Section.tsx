import { cn } from "@/lib/cn";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  /** Alternate band colour — used to separate neighbouring sections. */
  muted?: boolean;
  id?: string;
};

// Every band on the site shares this width and rhythm.
const Section = ({ children, className, muted = false, id }: SectionProps) => {
  return (
    <section
      id={id}
      className={cn(
        "theme-fade w-full",
        muted ? "bg-surface-muted" : "bg-canvas",
        className,
      )}
    >
      <div className="mx-auto w-[92%] max-w-6xl py-16 md:py-20">{children}</div>
    </section>
  );
};

export default Section;
