// ─── Single source of truth for identity, navigation and outbound links ───────

export const SITE_CONFIG = {
  name: "Adewumi Ayomiposi Maria",
  shortName: "MARIA.DEV",
  role: "Frontend Engineer",
  tagline: "Responsive, accessible interfaces built to production standard",
  location: "Lagos, Nigeria",
  email: "ayomiposiadewumi@gmail.com",
  // NOTE: Stored in international format (+234 replaces the leading 0 of
  // 08087134796) so the tel: link dials correctly from outside Nigeria too.
  phone: "+2348087134796",
  githubHandle: "AdewumiMaria",
  githubUrl: "https://github.com/AdewumiMaria",
  availability: "Available — immediate start",
  description:
    "Frontend engineer building responsive, accessible and high-performance web applications with React, Next.js and TypeScript — from pixel-accurate UI to API-integrated dashboards.",
} as const;

export const NAV_LINKS = [
  { id: "/", name: "Home", href: "/" },
  { id: "/about", name: "About", href: "/about" },
  { id: "/projects", name: "Projects", href: "/projects" },
  { id: "/experience", name: "Experience", href: "/experience" },
  { id: "/tech-stack", name: "Tech Stack", href: "/tech-stack" },
  { id: "/lab", name: "Lab", href: "/lab" },
  { id: "/contact", name: "Contact", href: "/contact" },
] as const;

// NOTE: No LinkedIn profile on the CV, so it was dropped rather than left pointing
// at someone else's account. Add it back here and every page picks it up.
export const SOCIAL_LINKS = [
  { id: "github", name: "GitHub", href: SITE_CONFIG.githubUrl },
  { id: "email", name: "Email", href: `mailto:${SITE_CONFIG.email}` },
] as const;
