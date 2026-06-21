# Vishal — Developer Portfolio

A single-page, dark-themed developer portfolio built with React (Vite), Tailwind CSS v4, and Framer Motion.

## Stack

- React 19 + Vite
- Tailwind CSS v4
- Framer Motion (all animation — entrance, scroll reveals, tilt, typewriter, ripple)
- react-icons (tech + social icons)

## Run it

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build -> dist/
npm run preview   # preview the production build
```

## Structure

```
src/
  components/
    Header.jsx          fixed glass navbar, scrollspy active state, mobile menu
    Hero.jsx             home section, terminal-style typewriter, floating icons
    About.jsx            bio + animated skill cards with progress bars / counters
    Projects.jsx          project grid
    ProjectCard.jsx        tilt-on-hover card, GitHub + live demo links
    Contact.jsx           form with ripple submit, social/contact panel
    Footer.jsx
    Loader.jsx            intro loading screen
    CustomCursor.jsx       dot + lagging ring cursor (desktop only)
    ScrollProgress.jsx     top progress bar
    ScrollToTop.jsx        floating back-to-top button
    ParticlesBackground.jsx canvas particle field behind the hero
  data/
    skills.js             skill list + floating tech icons
    projects.js            project content — replace with your real projects
  hooks/
    useActiveSection.js    IntersectionObserver-based scrollspy
  index.css               design tokens (@theme), fonts, all custom CSS
```

## Make it yours

1. **Projects** — edit `src/data/projects.js`. Swap the Unsplash placeholders for real screenshots and point `github` / `demo` at your repos.
2. **Resume** — replace `public/resume.pdf` with your actual resume (same filename, so the Download Resume button keeps working).
3. **Contact info** — update the `SOCIALS` array in `src/components/Contact.jsx` (email, LinkedIn, GitHub, location). The form currently shows a success state locally; wire `handleSubmit` in that file to an API route, Formspree, or EmailJS to actually deliver messages.
4. **Photo** — `About.jsx` has a placeholder avatar block. Drop an `<img>` in where the `FaUser` icon sits once you have a headshot.
5. **Colors / fonts** — all design tokens live at the top of `src/index.css` under `@theme`. The pixel font (`Press Start 2P`) is scoped to the logo only via the `.pixel-font` class, per spec.

## Notes

- Respects `prefers-reduced-motion` (disables decorative motion + smooth scroll for users who request it).
- Custom cursor and particle canvas auto-disable on touch devices.
- All sections use semantic landmarks and visible focus states for keyboard navigation.
