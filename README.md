# Portfolio Site

A responsive personal portfolio website built with React, TypeScript, and Tailwind CSS. Features multi-page routing, typed components, and a contact form with validation.

**Live Demo:** [portfolio-nkulal-projects.vercel.app](https://portfolio-nkulal-projects.vercel.app)

## Features

- **Multi-page SPA** — Home, About, Projects, Project Detail, Contact, and 404 pages with client-side routing
- **Typed Components** — Every component uses TypeScript interfaces for props, state, and data
- **Responsive Design** — Mobile-first layout using Tailwind's breakpoint system (mobile → tablet → desktop)
- **Contact Form** — Controlled inputs with real-time validation and disabled state management
- **Active Nav Highlighting** — Current page highlighted in the navigation using `useLocation` hook
- **Dynamic Project Data** — Projects stored as typed data, rendered on both list and detail pages
- **Auto-growing Portfolio** — New projects are added to a data file and appear across the site automatically

## Pages

- **Home** — Hero section, tech stack overview, and recent projects preview
- **About** — Bio, skills grid organized by category, currently learning section
- **Projects** — Responsive grid of project cards with tech tags
- **Project Detail** — Full write-up with description, tech stack, key learnings, and links
- **Contact** — Validated form with controlled inputs and success state
- **404** — Catch-all route for unknown URLs

## Architecture

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.tsx          → Nav with active link highlighting
│   │   └── Footer.tsx          → Social links and copyright
│   └── projects/
│       ├── ProjectCard.tsx     → Card for project list view
│       └── ProjectList.tsx     → Responsive grid of cards
│
├── pages/
│   ├── HomePage.tsx            → Hero + tech bar + recent projects
│   ├── AboutPage.tsx           → Bio + skills grid + currently learning
│   ├── ProjectsPage.tsx        → All projects grid
│   ├── ProjectDetailPage.tsx   → Full project write-up
│   ├── ContactPage.tsx         → Validated contact form
│   └── NotFoundPage.tsx        → 404 catch-all
│
├── data/
│   └── projects.ts             → Typed project data (grows with roadmap)
│
├── types/
│   └── index.ts                → TypeScript interfaces
│
└── App.tsx                     → BrowserRouter + Layout + Routes
```

## Design Decisions

**Why TypeScript over JavaScript?**
TypeScript catches errors at compile time. The `Project` interface ensures every project entry has all required fields — if I forget `techStack` or pass a number for `title`, the editor shows an error before the code runs. This same contract flows through props, meaning components can't receive mistyped data.

**Why React Router with a Layout pattern?**
The Layout component wraps all routes with a shared Header and Footer using `<Outlet>`. This avoids repeating the layout in every page component. Adding a new page means adding one `<Route>` — the layout is automatic.

**Why controlled form inputs?**
React owns the form state, not the DOM. This gives full control over validation on every keystroke, enabling the disabled submit button pattern. In an uncontrolled form, you'd only validate on submit — controlled forms validate continuously.

**Why data-driven project rendering?**
Projects are stored in a typed array in `data/projects.ts`. The Home page, Projects page, and Project Detail page all read from the same source. Adding a new project means adding one object to the array — it appears everywhere automatically.

## What I Learned

- **TypeScript with React** — Interfaces for props, state, and data. Generic hooks (`useState<ContactForm>`). Union types for restricted values. `import type` for type-only imports.
- **React Router** — BrowserRouter, Layout with Outlet, Link vs anchor tags, useParams for dynamic routes, useLocation for active nav, catch-all 404 route.
- **Component architecture** — Separating pages from reusable components, data from presentation. Progressive disclosure (card summary → detail page).
- **Controlled forms** — useState for form state, single handleChange with computed property names, real-time validation, conditional rendering for success state.
- **Responsive design** — Tailwind's mobile-first breakpoints (sm/md/lg), CSS Grid for adaptive layouts, flexbox for alignment.
- **YAGNI principle** — Don't create abstractions before you need them. Built a Button component prematurely and ended up deleting it.

## Tech Stack

- **Framework:** React 19
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Build Tool:** Vite
- **Routing:** React Router v7
- **Deployment:** Vercel

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18 or later

### Installation

```bash
git clone https://github.com/nishmithakulaldev/portfolio.git
cd portfolio
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

### Build for Production

```bash
npm run build
```
