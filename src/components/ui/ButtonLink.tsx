import Link from "next/link";
import { cn } from "@/lib/cn";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline";
  className?: string;
  /** Set for mailto:, tel: and off-site URLs, which must not use next/link. */
  external?: boolean;
};

const VARIANT_STYLES = {
  primary:
    "border-royal bg-royal text-on-royal hover:border-royal-hover hover:bg-royal-hover",
  outline:
    "border-line-strong bg-transparent text-ink hover:border-royal hover:text-royal",
} as const;

const ButtonLink = ({
  href,
  children,
  variant = "primary",
  className,
  external = false,
}: ButtonLinkProps) => {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 border px-6 py-3 font-mono text-xs uppercase tracking-[0.12em] transition-colors",
    VARIANT_STYLES[variant],
    className,
  );

  if (external) {
    // NOTE: mailto:/tel: must open in place — target="_blank" on them leaves an
    // orphaned blank tab behind once the mail or dialler app takes over.
    const opensNewTab = /^https?:/.test(href);

    return (
      <a
        className={classes}
        href={href}
        rel={opensNewTab ? "noopener noreferrer" : undefined}
        target={opensNewTab ? "_blank" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <Link className={classes} href={href}>
      {children}
    </Link>
  );
};

export default ButtonLink;
