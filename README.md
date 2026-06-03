# Abdullahi Jimba Portfolio

A personal portfolio website built with Next.js for the GoMyCode checkpoint task. It showcases Abdullahi Olakunle Jimba's profile, skills, projects, professional experience, resume information, and contact details.

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

- `/` - Home page with hero, narrative, stack, experience, featured work, mindset, and media sections.
- `/about` - About page with resume-style profile details and profile picture.
- `/projects` - Project showcase page.
- `/experience` - Professional experience page.
- `/tech-stack` - Technical stack page.
- `/lab` - Engineering lab and experiment page.
- `/resume` - Resume page using the CV-derived summary content.
- `/contact` - Contact page with email, phone, GitHub, LinkedIn, and location.

## Featured Information

The portfolio includes CV-based details such as:

- Name: Abdullahi Olakunle Jimba
- Role: Software Engineer / Full-Stack Engineer
- Location: Lagos, Nigeria
- Email: `jimbaabdullahi9@gmail.com`
- GitHub: `https://github.com/Phenomenal5`
- LinkedIn: `https://www.linkedin.com/in/jimbaabdullahio`

## Project Highlights

Some projects shown in the portfolio include:

- Ticketing Platform: scalable ticketing system with admin dashboard ownership.
- Shanks Media & Software Company Website: company website built from planning to deployment.
- E-Commerce Platform: full-stack commerce app with admin/user systems.
- YouTube React Clone: React-based UI clone with component architecture.
- Developer Utility Tools: lightweight utilities built with vanilla JavaScript.

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- React Icons
- Next.js Image component

## Project Structure

```text
src/
  app/
    about/
    contact/
    experience/
    lab/
    projects/
    resume/
    tech-stack/
    components/
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
