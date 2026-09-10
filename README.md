# Mohammad Sadab — Portfolio

A responsive, animated portfolio built with React + Vite + Tailwind CSS, generated from your resume data.

## Stack
- React 18 + Vite
- Tailwind CSS (custom design tokens — see `tailwind.config.js`)
- Framer Motion (page/scroll animations)
- lucide-react (icons)

## File structure
```
src/
  components/
    layout/      Navbar, Footer
    sections/    Hero, About, Experience, Projects, Skills, Contact
    ui/          Reusable primitives: StatusPill, SectionHeading, ProjectCard, MetricCard, Timeline
  data/
    portfolioData.js   <- ALL your content lives here (edit this file to update the site)
  App.jsx
  main.jsx
  index.css
```

## Before you deploy
Open `src/data/portfolioData.js` and replace the placeholders marked `TODO`:
- `profile.email`
- `profile.linkedin`
- `profile.github`

Everything else (experience, projects, skills, education) is already filled in from your resume — edit freely as your work changes.

## Run it locally
```bash
npm install
npm run dev       # http://localhost:5173
```

## Build for production
```bash
npm run build      # outputs to dist/
npm run preview    # preview the production build locally
```

## Deploy
`dist/` is a static site — deploy it for free on:
- **Vercel**: `vercel` (auto-detects Vite)
- **Netlify**: drag-and-drop the `dist/` folder, or `netlify deploy`
- **GitHub Pages**: push `dist/` to a `gh-pages` branch

## Design notes
The visual language borrows from your own work: the status pills (green/amber/grey)
echo the live doctor-status tracking you built in Doctora, reused here as the site's
recurring motif — live roles and shipped projects get the same "system status" treatment
your dashboards give a doctor's availability.
