// ─── Career history ───────────────────────────────────────────────────────────
// NOTE: The old build kept three different versions of this history — the résumé
// card, the home timeline and the experience page each hardcoded their own, and
// they contradicted each other on both dates and job titles. This file is now the
// only copy; every page reads from it.
//
// The SHANKS Africa role is split into one entry per product (ShanksTix and
// ShanksLink) — they were separate codebases with separate scopes, and folding
// them into one card lost most of the detail.

export const EXPERIENCES = [
  {
    id: "shanks-africa-shankstix",
    role: "Frontend Engineer — ShanksTix",
    company: "SHANKS Africa · Lagos, Nigeria",
    period: "Oct 2025 — Present",
    isCurrent: true,
    summary:
      "Co-architected and built the frontend of an enterprise event management and ticketing platform serving 100+ active users — every public-facing page, most of the backend API integration, and the full admin dashboard.",
    highlights: [
      "Built the public site: landing, event detail, account pages, Work With Us, About, Privacy Policy and Features.",
      "Implemented event filtering and sorting (location, category, price, date) with debounced search and optimistic loading states.",
      "Delivered the admin dashboard — Overview, Finance, Co-host, Marketing, Attendee, Organizer and Events modules.",
      "Built the Finance module's KYC review interface for verifying organizer NIN submissions and bank account resolution.",
      "Integrated REST APIs across auth, events, payments, KYC and notifications, with client-side caching that complements the backend's Redis layer.",
      "Added error states and retry logic for async operations such as email/SMS queuing and payment webhooks.",
    ],
    tags: ["TypeScript", "Next.js", "Context API", "Tailwind CSS", "Axios"],
  },
  {
    id: "shanks-africa-shankslink",
    role: "Frontend Engineer — ShanksLink",
    company: "SHANKS Africa · Lagos, Nigeria",
    period: "Oct 2025 — Present",
    isCurrent: true,
    summary:
      "Built the frontend and Staff Dashboard for an internal communication and team chat platform, wiring responsive, reusable interfaces to the backend's REST APIs and Socket.IO services.",
    highlights: [
      "Developed direct and group messaging — conversation lists, chat view, composer and real-time message updates.",
      "Integrated Socket.IO for live messages, online/offline presence and in-app notifications.",
      "Supported text, image/file attachments, voice notes, emojis and message actions in chat.",
      "Built the staff directory with search, filtering and profile viewing, plus an editable profile with validated forms and uploads.",
      "Delivered announcements (normal and urgent, with acknowledgement) and a read/unread notification centre.",
      "Handled loading, empty, error and success states consistently across every API-driven view.",
    ],
    tags: ["TypeScript", "Next.js", "React", "Socket.IO", "Tailwind CSS"],
  },
  {
    id: "shanks-media-intern",
    role: "Frontend Developer Intern",
    company: "Shanks Media & Software Company Limited",
    period: "Jan 2026 — Mar 2026",
    isCurrent: false,
    summary:
      "Developed and maintained the company landing page and product interfaces, translating UI designs into responsive, reusable and accessible components.",
    highlights: [
      "Built responsive product interfaces across desktop, tablet and mobile with reusable components.",
      "Integrated REST APIs, handling async data, loading states, errors and dynamic content.",
      "Implemented navigation, forms, modals and interactive sections across the landing page and product.",
      "Debugged UI, responsiveness and cross-browser issues; shipped through feature branches and code review.",
    ],
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Bootstrap"],
  },
  {
    // NOTE: The CV lists this as "April 2025 – September 2026", but the
    // Arestechub certificate is dated September 2025 and the SHANKS role starts
    // October 2025 — so the end date is taken to be Sep 2025.
    id: "arestechub-trainee",
    role: "Frontend Developer Trainee",
    company: "Arestechub (Bootcamp) · Lagos, Nigeria",
    period: "Apr 2025 — Sep 2025",
    isCurrent: false,
    summary:
      "Designed and built two responsive landing pages from initial requirements through to implementation in an Agile team.",
    highlights: [
      "Built reusable, well-structured UI components with HTML, CSS, JavaScript and React.",
      "Implemented mobile-first layouts with Flexbox and CSS Grid.",
      "Tested across screen sizes and browsers to find and fix responsiveness issues.",
      "Took part in peer code reviews and Git-based collaboration.",
    ],
    tags: ["HTML5", "CSS3", "JavaScript", "React"],
  },
] as const;

export const EDUCATION = [
  {
    id: "arestechub-certificate",
    qualification: "Frontend Web Development Certificate",
    institution: "Arestechub, Lagos",
    period: "Sep 2025",
  },
  {
    id: "lasu",
    qualification: "B.Sc. Microbiology",
    institution: "Lagos State University",
    period: "Jun 2023",
  },
] as const;

export const ADDITIONAL_INFO = [
  { id: "languages", label: "Languages", value: "English (Fluent) · Yoruba (Native)" },
  { id: "availability", label: "Availability", value: "Immediate start" },
  { id: "authorization", label: "Work authorization", value: "Nigerian citizen" },
  { id: "relocation", label: "Relocation", value: "Open to discussion" },
  { id: "references", label: "References", value: "Available on request" },
] as const;

export const IMPACT_STATS = [
  {
    id: "platforms",
    label: "Delivery",
    value: "2",
    detail: "Production platforms shipped at SHANKS Africa — ShanksTix and ShanksLink.",
  },
  {
    id: "users",
    label: "Reach",
    value: "100+",
    detail: "Active users on the live ticketing ecosystem whose frontend I co-architected.",
  },
  {
    id: "modules",
    label: "Dashboard",
    value: "7",
    detail: "Admin modules built end to end, from Overview and Finance to Events moderation.",
  },
] as const;
