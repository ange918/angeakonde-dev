# BigSixteen Portfolio Site

## Overview
A French-language developer portfolio site for "BigSixteen" built with Next.js 15 and React 19.

## Tech Stack
- **Framework**: Next.js 15.3.x (App Router)
- **UI Library**: React 19
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: React Icons, Heroicons
- **UI Components**: Headless UI

## Project Structure
- `src/app/` — Next.js app router pages and layouts
- `src/components/` — Reusable React components
  - `Navbar.tsx`, `Hero.tsx`, `Footer.tsx` — layout components
  - `About.tsx`, `Skills.tsx`, `Projects.tsx` — section components
  - `Contact.tsx`, `ContactCard.tsx`, `Address.tsx` — contact sections
  - `FAQ.tsx`, `Testimonials.tsx`, `ProcessSteps.tsx` — info sections
  - `TechGrid.tsx`, `TrustedStrip.tsx`, `ProjectsGrid.tsx` — grid components
  - `Section.tsx`, `Container.tsx` — layout utilities
- `public/` — Static assets (images, SVGs)
- `attached_assets/` — Uploaded images

## Running the App
```bash
npm run dev    # Development server on port 5000
npm run build  # Production build
npm run start  # Production server on port 5000
```

## Replit Configuration
- Runs on port 5000 (bound to 0.0.0.0)
- Workflow: "Start application" → `npm run dev`
- Node.js 20 runtime
