import { cn } from "@/lib/cn";

type TagProps = {
  children: React.ReactNode;
  className?: string;
};

// NOTE: These were <button> elements in the old markup even though nothing was
// clickable — screen readers announced dozens of fake buttons per page.
const Tag = ({ children, className }: TagProps) => {
  return (
    <span
      className={cn(
        "theme-fade inline-flex items-center border border-line bg-surface-muted px-2.5 py-1 font-mono text-[11px] tracking-tight text-ink-muted",
        className,
      )}
    >
      {children}
    </span>
  );
};

export default Tag;
