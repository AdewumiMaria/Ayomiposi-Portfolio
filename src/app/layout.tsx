import type { Metadata, Viewport } from "next";
import ThemeProvider from "@/context/ThemeProvider";
import { THEME_STORAGE_KEY } from "@/constants/theme";
import { SITE_CONFIG } from "@/constants/site";
import { geistSans, jetBrainsMono } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `${SITE_CONFIG.name} — ${SITE_CONFIG.role}`,
    template: `%s — ${SITE_CONFIG.shortName}`,
  },
  description: SITE_CONFIG.description,
  authors: [{ name: SITE_CONFIG.name }],
  openGraph: {
    title: `${SITE_CONFIG.name} — ${SITE_CONFIG.role}`,
    description: SITE_CONFIG.description,
    type: "website",
  },
};

export const viewport: Viewport = {
  // Paints the browser chrome to match whichever theme is active.
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f4f4" },
    { media: "(prefers-color-scheme: dark)", color: "#050507" },
  ],
};

// ─── Pre-hydration theme script ───────────────────────────────────────────────
// Runs while the HTML is still parsing, before anything paints, so a returning
// dark-mode visitor never sees a white flash. It has to be inline and blocking —
// a <Script> component would run too late, and React only hydrates afterwards.
const themeScript = `
(function () {
  try {
    var stored = localStorage.getItem("${THEME_STORAGE_KEY}");
    var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    var theme = stored === "light" || stored === "dark" ? stored : (prefersDark ? "dark" : "light");
    if (theme === "dark") document.documentElement.classList.add("dark");
    document.documentElement.style.colorScheme = theme;
  } catch (error) {
    // Blocked site data — fall through to the light default.
  }
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // NOTE: suppressHydrationWarning is required twice over — the script above
    // mutates <html> before React hydrates, and extensions like Grammarly inject
    // their own attributes onto <html>/<body> (this was flooding the dev log with
    // ~164 hydration errors per session).
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${jetBrainsMono.variable} h-full`}
    >
      <body suppressHydrationWarning className="min-h-full">
        {/* NOTE: framer-motion serialises its `initial` state as inline opacity:0,
            which leaves every scroll-revealed section invisible if JavaScript never
            runs. The text is in the HTML for crawlers either way; this makes it
            visible to people too. !important is required to beat the inline style. */}
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
