<<<<<<< HEAD
# Furqan Ansari — Portfolio

A React + Vite portfolio built as a "systems dashboard" — animated terminal boot sequence,
live-counting stats, and sections styled like a git log and deployed services list.

## Structure

```
src/
  data.js               # all content (experience, projects, skills, certs, contact info)
  hooks.js              # useCountUp, useInView
  index.css             # global stylesheet (design tokens + all component styles)
  App.jsx               # composes all sections
  main.jsx              # React entry point
  components/
    Nav.jsx
    Hero.jsx
    About.jsx
    Experience.jsx
    Projects.jsx
    Achievements.jsx
    OtherBuilds.jsx
    Contact.jsx
    Footer.jsx
    StatCard.jsx
    SectionLabel.jsx
    Reveal.jsx
```

## Setup

```bash
npm install
npm run dev       # local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build
```

## Before deploying

- Replace the `href="#"` placeholders in `Hero.jsx` and `Contact.jsx` with your real
  resume link, GitHub profile, and LinkedIn profile URLs.
- Update `CONTACT` in `src/data.js` if your email/phone change.
- Swap in your actual LeetCode profile link in `Achievements.jsx`.
- Deploy easily to Vercel or Netlify — just point either at this repo, framework preset "Vite".
=======
# portfolio
A personal developer portfolio website built with React.js showcasing my projects, professional experience, certifications, and achievements in a responsive layout.
>>>>>>> 2ff272a6ae329bb69daac3c6b01e3d1730f7b5fe
