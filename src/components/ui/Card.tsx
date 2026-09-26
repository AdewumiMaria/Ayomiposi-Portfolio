import { cn } from "@/lib/cn";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  /** Adds the royal hover border used by interactive grids. */
  interactive?: boolean;
};

const Card = ({ children, className, interactive = false }: CardProps) => {
  return (
    <div
      className={cn(
        "theme-fade h-full border border-line bg-surface p-6",
        interactive && "transition-colors hover:border-royal",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Card;
