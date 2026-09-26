// ─── Project showcase ─────────────────────────────────────────────────────────
// NOTE: `image` must point at a file that exists in /public/images. The previous
// build referenced "/images/feature1.png", which was never committed — it 404'd on
// every home-page render and filled the dev log with warnings.

export type Project = {
  id: string;
  title: string;
  summary: string;
  image: string;
  imageAlt: string;
  tags: readonly string[];
  isFeatured: boolean;
};

export const PROJECTS: readonly Project[] = [
  {
    id: "shankstix",
    title: "ShanksTix",
    summary:
      "Enterprise event management and ticketing platform. Built the public site, event discovery with debounced filtering, and a seven-module admin dashboard covering finance, KYC review, marketing and event moderation.",
    image: "/images/shankstix.png",
    imageAlt: "ShanksTix admin dashboard showing platform statistics",
    tags: ["TypeScript", "Next.js", "Tailwind CSS", "Axios"],
    isFeatured: true,
  },
  {
    id: "shankslink",
    title: "ShanksLink",
    summary:
      "Internal communication and team chat platform. Built the Staff Dashboard, real-time direct and group messaging over Socket.IO, presence, announcements and a live notification centre.",
    // NOTE: Stock dashboard image until a real ShanksLink screenshot is added.
    image: "/images/dashboard-placeholder.png",
    imageAlt: "Laptop displaying a team dashboard interface",
    tags: ["Next.js", "TypeScript", "Socket.IO", "REST APIs"],
    isFeatured: true,
  },
  {
    id: "shanks-media-landing",
    title: "Shanks Media — Software Landing Page",
    summary:
      "Company software landing page built with reusable components and structured content sections, with polished responsive styling across desktop and mobile.",
    image: "/images/smsc.png",
    imageAlt: "Shanks Media and Software company landing page",
    tags: ["React", "Tailwind CSS", "JavaScript"],
    isFeatured: true,
  },
];

export const FEATURED_PROJECTS = PROJECTS.filter((project) => project.isFeatured);
