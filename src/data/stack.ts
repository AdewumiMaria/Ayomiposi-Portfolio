// ─── Technical competencies, rendered by the home and tech-stack pages ────────

export const STACK_GROUPS = [
  {
    id: "languages",
    index: "01",
    title: "Languages",
    description: "The foundations every interface is built on.",
    items: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript"],
  },
  {
    id: "frameworks",
    index: "02",
    title: "Frameworks & Styling",
    description: "Component-driven UI that stays consistent as it grows.",
    items: ["React.js", "Next.js", "Tailwind CSS", "Flexbox", "CSS Grid", "Animations"],
  },
  {
    id: "data",
    index: "03",
    title: "State & Data",
    description: "Getting server data onto the screen, and keeping it fresh.",
    items: ["React Hooks", "Context API", "REST APIs", "Axios", "Fetch API", "WebSockets"],
  },
  {
    id: "ui-ux",
    index: "04",
    title: "UI / UX",
    description: "Designs translated faithfully, for every screen and every user.",
    items: [
      "Figma-to-Code",
      "Design Systems",
      "Reusable Components",
      "Accessibility",
      "Mobile-First Design",
    ],
  },
  {
    id: "auth-integrations",
    index: "05",
    title: "Auth & Integrations",
    description: "Secure flows and the third-party services products depend on.",
    items: [
      "JWT",
      "OAuth 2.0",
      "Cookie Sessions",
      "RBAC",
      "Form Validation",
      "Cloudinary",
      "Google APIs",
      "Maps APIs",
    ],
  },
  {
    id: "tooling",
    index: "06",
    title: "Testing, Tools & Deployment",
    description: "The workflow from first commit to live URL.",
    items: [
      "Jest",
      "React Testing Library",
      "Git / GitHub",
      "npm",
      "Chrome DevTools",
      "Vercel",
      "Netlify",
    ],
  },
] as const;

export const ARCHITECTURE_PILLARS = [
  {
    id: "component-systems",
    title: "Component Systems",
    detail: "Build the button once, well — then every screen inherits the polish.",
  },
  {
    id: "every-state",
    title: "Every State Designed",
    detail: "Loading, empty, error and success are part of the feature, not an afterthought.",
  },
  {
    id: "performance",
    title: "Performance as UX",
    detail: "Lazy loading, code splitting and optimised images make the product feel instant.",
  },
] as const;

export const SYSTEM_LAYERS = [
  {
    id: "architecture",
    title: "Component Architecture & Design Systems",
    description:
      "Modular, component-based frontends where designs translate into reusable, consistent UI that the whole team can build on.",
    items: [
      "Component-Based Architecture",
      "Modular Architecture",
      "Reusable UI Systems",
      "Design Systems",
      "Figma-to-Code",
      "Clean Code",
    ],
    featured: true,
  },
  {
    id: "data",
    title: "State & Real-Time Data",
    description: "API-driven views with caching and live updates.",
    items: ["React Hooks / Context", "REST APIs (Axios)", "Socket.IO", "Client-side caching"],
    featured: false,
  },
  {
    id: "auth",
    title: "Authentication",
    description: "Secure flows with clear feedback at every step.",
    items: ["JWT", "OAuth 2.0", "Cookie-based sessions", "RBAC", "Form validation"],
    featured: false,
  },
  {
    id: "performance",
    title: "Performance & SEO",
    description: "Fast first paint, findable pages.",
    items: ["SEO", "Lazy loading", "Code splitting", "Image optimisation", "Web performance"],
    featured: false,
  },
] as const;

export const PHILOSOPHIES = [
  {
    id: "clean-code",
    title: "Clean Code",
    detail: "Maintainable structure and consistent naming, so the next change is easy.",
  },
  {
    id: "mobile-first",
    title: "Mobile First",
    detail: "Start from the smallest screen and scale up — never squeeze down.",
  },
  {
    id: "accessible",
    title: "Accessible by Default",
    detail: "Semantic markup, keyboard support and contrast built in from the start.",
  },
  {
    id: "production-ready",
    title: "Production Ready",
    detail: "Polished, cross-browser and tested before it ships — not after.",
  },
] as const;
