import { cn } from "@/lib/cn";

export type StatusTone = "live" | "progress" | "planned";

const TONE_STYLES: Record<StatusTone, string> = {
  live: "border-signal/40 bg-signal/10 text-signal",
  progress: "border-warn/40 bg-warn/10 text-warn",
  planned: "border-line bg-surface-muted text-ink-subtle",
};

type StatusPillProps = {
  tone: StatusTone;
  children: React.ReactNode;
  className?: string;
};

const StatusPill = ({ tone, children, className }: StatusPillProps) => {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center gap-1.5 border px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em]",
        TONE_STYLES[tone],
        className,
      )}
    >
      <span className="size-1.5 rounded-full bg-current" />
      {children}
    </span>
  );
};

export default StatusPill;
