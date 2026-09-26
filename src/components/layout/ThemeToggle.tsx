"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import { cn } from "@/lib/cn";

type ThemeToggleProps = {
  className?: string;
};

const ThemeToggle = ({ className }: ThemeToggleProps) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      aria-pressed={isDark}
      className={cn(
        "theme-fade relative grid size-9 shrink-0 place-items-center overflow-hidden border border-line bg-surface text-ink-muted transition-colors hover:border-royal hover:text-royal",
        className,
      )}
    >
      {/* NOTE: Both icons are always rendered and swapped with `dark:` variants
          rather than by JS state. The `dark` class is already on <html> before
          hydration, so the correct icon is right on the very first paint — a
          state-driven swap would briefly show the wrong one to dark-mode visitors. */}
      <Sun
        aria-hidden="true"
        className="size-4 rotate-0 scale-100 transition-transform duration-300 dark:-rotate-90 dark:scale-0"
      />
      <Moon
        aria-hidden="true"
        className="absolute size-4 rotate-90 scale-0 transition-transform duration-300 dark:rotate-0 dark:scale-100"
      />
    </button>
  );
};

export default ThemeToggle;
