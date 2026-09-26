import Link from "next/link";
import { SITE_CONFIG } from "@/constants/site";

// NOTE: This lives at the app root, not inside (website), so it also catches URLs
// that never matched the route group — it therefore renders its own chrome.
const NotFound = () => {
  return (
    <div className="theme-fade relative flex min-h-screen items-center overflow-hidden bg-canvas">
      <div className="pointer-events-none absolute inset-0 blueprint" />
      <div className="pointer-events-none absolute inset-0 royal-glow" />

      <div className="relative mx-auto w-[92%] max-w-2xl py-20 text-center">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-royal">
          Error 404
        </p>
        <h1 className="mt-4 text-5xl font-bold tracking-tight text-ink md:text-7xl">
          Route not found
        </h1>
        <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-ink-muted">
          That page is not part of this build. The link may be stale, or the page may
          have moved somewhere more sensible.
        </p>

        <Link
          href="/"
          className="mt-9 inline-flex items-center justify-center border border-royal bg-royal px-6 py-3 font-mono text-xs uppercase tracking-[0.12em] text-on-royal transition-colors hover:bg-royal-hover"
        >
          Back to {SITE_CONFIG.shortName}
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
