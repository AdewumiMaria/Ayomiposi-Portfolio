# Adewumi Ayomiposi Maria — Portfolio

A personal portfolio website built with Next.js for the GoMyCode checkpoint task. It showcases Adewumi Ayomiposi Maria's profile, skills, projects, professional experience, resume information, and contact details.

## Checkpoint Coverage

This project satisfies the required portfolio features:

- Built with Next.js using the App Router structure in `src/app`.
- Uses file-based routing for separate portfolio pages.
- Includes styled React components with Tailwind CSS utility classes.
- Displays local images from the `public/images` folder using Next.js image support.
- Includes profile, skills, projects, resume/about, experience, lab, and contact sections.
- Supports server-rendered/static pages and can be deployed to Vercel or another Next.js hosting platform.

## Pages

The app uses Next.js file-based routing:

- `/` - Home page with hero, narrative, stack, experience, featured work, mindset, and contact sections.
- `/about` - About page with resume-style profile details and profile picture.
- `/projects` - Project showcase page.
- `/experience` - Professional experience page.
- `/tech-stack` - Technical stack page.
- `/lab` - Demo and practice builds.
- `/resume` - Resume page using the CV-derived summary content.
- `/contact` - Contact page with email, phone, GitHub, and location.

## Featured Information

The portfolio includes CV-based details such as:

- Name: Adewumi Ayomiposi Maria
- Role: Frontend Engineer
- Location: Lagos, Nigeria
- Email: `ayomiposiadewumi@gmail.com`
- GitHub: `https://github.com/AdewumiMaria`

## Project Highlights

Some projects shown in the portfolio include:

- ShanksTix: enterprise event management and ticketing platform — public site and seven-module admin dashboard.
- ShanksLink: internal communication and team chat platform with real-time messaging over Socket.IO.
- Shanks Media — Software Landing Page: responsive company landing page.
- AlChefMate_Demo and Positivus_Demo: responsive landing page demos (shown on `/lab`).

## Theming

The site ships a light and a dark theme with a toggle in the navbar.

- Colours are CSS custom properties in `src/app/globals.css`, exposed to Tailwind
  through `@theme inline` (`bg-canvas`, `text-ink`, `border-line`, `text-royal`).
  Components use those tokens rather than hex values, so both themes come from one
  set of classes.
- Light is `#f4f4f4` with royal blue `#4169e1`; dark is near-black `#050507` with a
  lifted royal `#6b8dfb` that stays readable against it.
- The active theme is a `dark` class on `<html>`. A small inline script in
  `src/app/layout.tsx` applies it before first paint, so returning dark-mode
  visitors never see a white flash. It falls back to the OS setting until the
  visitor picks a theme explicitly.

## Tech Stack

- Next.js 16 (App Router, Turbopack)
- React 19
- TypeScript
- Tailwind CSS v4
- Framer Motion (scroll reveals, nav and menu transitions)
- Lucide icons
- Next.js Image component

## Project Structure

```text
src/
  app/
    (website)/        # route group sharing the navbar + footer layout
      about/ contact/ experience/ lab/ projects/ resume/ tech-stack/
    layout.tsx        # <html>, fonts, metadata, theme script
    globals.css       # theme tokens + Tailwind
    fonts.ts
    not-found.tsx
  components/
    animations/       # Reveal, HoverLift (the client boundaries)
    layout/           # Navbar, Footer, ThemeToggle
    ui/               # Section, Card, Tag, ButtonLink, ...
    home/ about/ projects/ experience/ tech-stack/ lab/ contact/
  constants/          # site.ts, theme.ts
  context/            # ThemeProvider
  data/               # page content: stack, experience, projects, labs
  hooks/              # useTheme
  lib/                # cn()
public/
  images/
```

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

### If the dev server will not start

Next refuses to run two dev servers against the same folder. If a previous run was
closed without shutting down cleanly, the old process keeps port 3000 and the new
one exits with "Another next dev server is already running" — which looks like the
server restarting on its own. Free the port first:

```powershell
Get-NetTCPConnection -LocalPort 3000 -State Listen |
  ForEach-Object { Stop-Process -Id $_.OwningProcess -Force }
```

Or use the PID that Next prints: `taskkill /PID <pid> /F`.

## Available Scripts

```bash
npm run dev
```

Starts the local development server.

```bash
npm run build
```

Creates an optimized production build.

```bash
npm run start
```

Starts the production server after building.

```bash
npm run lint
```

Runs ESLint checks.

## Deployment

This project is deployable to Vercel:

1. Push the project to GitHub.
2. Import the repository on Vercel.
3. Keep the default Next.js build settings.
4. Deploy.

Build command:

```bash
npm run build
```

Output is handled automatically by Next.js and Vercel.
