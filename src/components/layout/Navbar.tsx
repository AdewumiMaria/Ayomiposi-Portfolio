"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion as Motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "@/components/layout/ThemeToggle";
import { NAV_LINKS, SITE_CONFIG } from "@/constants/site";
import { cn } from "@/lib/cn";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Close the mobile sheet on navigation, otherwise it stays open over the new page.
  // NOTE: Adjusted during render rather than in an effect — React re-runs this pass
  // before committing, so the sheet never paints open on the new route. Doing it in
  // an effect would flash the old menu and trip react-hooks/set-state-in-effect.
  const [menuPathname, setMenuPathname] = useState(pathname);

  if (menuPathname !== pathname) {
    setMenuPathname(pathname);
    setIsMenuOpen(false);
  }

  // Swap to the solid/blurred bar once the hero has scrolled away.
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Stop the page scrolling behind the open mobile sheet.
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header
      className={cn(
        "theme-fade sticky top-0 z-50 w-full border-b transition-colors",
        isScrolled
          ? "border-line bg-canvas/85 backdrop-blur-md"
          : "border-transparent bg-canvas",
      )}
    >
      <nav className="mx-auto flex w-[92%] max-w-6xl items-center justify-between py-4">
        <Link
          href="/"
          className="font-mono text-sm font-bold tracking-[0.12em] text-ink transition-colors hover:text-royal"
        >
          {SITE_CONFIG.shortName}
        </Link>

        {/* ─── Desktop navigation ─────────────────────────────────────────── */}
        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.id;

            return (
              <li key={link.id}>
                <Link
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "relative block px-3 py-2 font-mono text-xs tracking-tight transition-colors",
                    isActive ? "text-royal" : "text-ink-muted hover:text-ink",
                  )}
                >
                  {link.name}
                  {isActive ? (
                    // layoutId lets the underline slide between links instead of
                    // blinking out and back in on every navigation.
                    <Motion.span
                      layoutId="nav-active-underline"
                      className="absolute inset-x-2 -bottom-px h-0.5 bg-royal"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  ) : null}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />

          <Link
            href="/resume"
            className="hidden border border-line-strong px-4 py-2 font-mono text-xs uppercase tracking-[0.12em] text-ink transition-colors hover:border-royal hover:bg-royal hover:text-on-royal lg:block"
          >
            Resume
          </Link>

          <button
            type="button"
            onClick={() => setIsMenuOpen((wasOpen) => !wasOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            className="grid size-9 place-items-center border border-line bg-surface text-ink-muted transition-colors hover:border-royal hover:text-royal lg:hidden"
          >
            {isMenuOpen ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </nav>

      {/* ─── Mobile sheet ──────────────────────────────────────────────────── */}
      <AnimatePresence>
        {isMenuOpen ? (
          <Motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-line bg-canvas lg:hidden"
          >
            <ul className="mx-auto w-[92%] max-w-6xl py-2">
              {NAV_LINKS.map((link, linkIndex) => {
                const isActive = pathname === link.id;

                return (
                  <Motion.li
                    key={link.id}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * linkIndex, duration: 0.25 }}
                  >
                    <Link
                      href={link.href}
                      aria-current={isActive ? "page" : undefined}
                      className={cn(
                        "flex items-center justify-between border-b border-line py-3 font-mono text-sm transition-colors",
                        isActive ? "text-royal" : "text-ink-muted hover:text-ink",
                      )}
                    >
                      {link.name}
                      <span className="text-[10px] text-ink-subtle">
                        {String(linkIndex + 1).padStart(2, "0")}
                      </span>
                    </Link>
                  </Motion.li>
                );
              })}

              <li className="py-4">
                <Link
                  href="/resume"
                  className="block border border-royal bg-royal px-4 py-3 text-center font-mono text-xs uppercase tracking-[0.12em] text-on-royal"
                >
                  Resume
                </Link>
              </li>
            </ul>
          </Motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
