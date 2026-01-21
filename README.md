# Portfolio Website

A premium personal portfolio website built with React, TypeScript, and Framer Motion.

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- React Router
- cmdk (Command Palette)
- Lucide React
- React Helmet Async

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open your browser and navigate to the URL shown in the terminal (typically http://localhost:5173)

### Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run preview` - Preview the production build
- `npm run typecheck` - Run TypeScript type checking

## Project Structure

```
/
├── public/
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── app/
│   │   ├── App.tsx
│   │   ├── RouteWrapper.tsx
│   │   └── routes.tsx
│   ├── components/
│   │   ├── layout/
│   │   │   ├── CommandPalette.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Header.tsx
│   │   │   ├── ScrollProgress.tsx
│   │   │   └── ThemeToggle.tsx
│   │   ├── motion/
│   │   │   ├── MagneticButton.tsx
│   │   │   ├── PageTransition.tsx
│   │   │   ├── Parallax.tsx
│   │   │   └── ScrollReveal.tsx
│   │   └── ui/
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       └── Section.tsx
│   ├── content/
│   │   └── siteData.ts
│   ├── lib/
│   │   ├── theme.ts
│   │   └── utils.ts
│   ├── pages/
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Experience.tsx
│   │   ├── Home.tsx
│   │   ├── ProjectDetail.tsx
│   │   ├── ProjectDetailWrapper.tsx
│   │   └── Projects.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Features

- Clean, modern design with dark/light mode
- Smooth animations with Framer Motion
- Command palette (Cmd/Ctrl + K) for quick navigation
- Responsive design
- SEO optimized with React Helmet Async
- Accessibility considerations (prefers-reduced-motion support)
- TypeScript strict mode

## Content Management

All content is managed through `src/content/siteData.ts`. Update this file to modify any text, experiences, projects, or other site content.

## Command Palette

Press `Cmd+K` (Mac) or `Ctrl+K` (Windows/Linux) to open the command palette for quick navigation throughout the site.

## Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.
