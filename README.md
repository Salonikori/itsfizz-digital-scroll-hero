# Fizz on Scroll: Scroll-Driven Hero Animation

A scroll-driven hero section built for **itsfizz digital**. The headline and stats animate in on load,
then the hero pins to the screen and a soda can spins, grows and glides across the page, driven
entirely by scroll position.

**Live demo:** https://salonikori.github.io/itsfizz-digital-scroll-hero/

**Repository:** https://github.com/Salonikori/itsfizz-digital-scroll-hero

## Features

- **Full-screen hero** with a letter-spaced headline, "W E L C O M E  I T Z  F I Z Z", and impact stats below it.
- **Intro animation:** headline letters stagger in with a fade and slight lift, then the stats appear one by one while their numbers count up.
- **Scroll-linked motion:** the hero is pinned and the can's rotation, scale and position follow scroll progress, with smoothing so the movement feels fluid instead of jumpy.
- **Supporting effects:** the headline letters drift away, the stats fade out, a progress bar fills, and a closing line appears.
- **Reveal section** below the hero that animates in as it enters the viewport.
- **Responsive:** tuned layouts for desktop and phone-width screens.
- **Accessible:** respects `prefers-reduced-motion`, includes a proper `h1` label, and has a no-JavaScript fallback.

## Tech stack

| Area | Tools |
| --- | --- |
| Framework | Next.js 14 (static export), React 18 |
| Styling | Tailwind CSS, plus plain CSS for the hero effects |
| Animation | GSAP, ScrollTrigger, `@gsap/react` |
| Language | JavaScript (JSX) |
| Hosting | GitHub Pages via GitHub Actions |

## How the animation works

The animation code lives in `app/hooks/useFizzAnimations.js` and is split into three parts:

1. **`playIntro`:** a single GSAP timeline reveals the kicker, headline letters, can, copy and stats in sequence. Counters are scheduled on the same timeline so each number starts counting as its card appears.
2. **`setupHeroScroll`:** a ScrollTrigger pins the hero for about 2.2 screens of scrolling. One timeline controls the can, headline, stats and progress bar, and `scrub: 1` ties it to the scrollbar with a second of smoothing.
3. **`setupStoryReveals`:** the section below the hero fades and slides in when it scrolls into view.

### Performance

- Only `transform` and `opacity` are animated, so scrolling doesn't trigger layout work.
- There are no manual scroll listeners. ScrollTrigger batches updates with GSAP's ticker.
- `will-change` is set only on elements that animate continuously (the can and the headline letters).
- Elements that animate on load start hidden in CSS, which avoids a flash of unstyled content.

## Project structure

```
app/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx             # headline, can, stats
│   ├── FizzCan.jsx          # hand-drawn SVG can, no image files
│   ├── StorySection.jsx
│   └── Footer.jsx
├── data/content.js          # headline words and stats
├── hooks/useFizzAnimations.js
├── globals.css              # base styles and hero styles
├── layout.jsx               # html shell and metadata
└── page.jsx                 # page composition
.github/workflows/deploy.yml # GitHub Pages deployment
next.config.mjs              # static export and base path
tailwind.config.js           # brand colours
```

## Getting started

Requires Node.js 18 or newer.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

To create the production build:

```bash
npm run build
```

The static site is written to `out/`.

## Deploying to GitHub Pages

1. Create a public repository and push this project to the `main` branch.
2. In the repository, open **Settings → Pages** and set **Source** to **GitHub Actions**.
3. Push to `main`. The workflow in `.github/workflows/deploy.yml` builds the site and publishes it at
   `https://<username>.github.io/<repo-name>/`.

`next.config.mjs` reads the repository name during the GitHub build and sets the base path automatically.
If you name the repository `<username>.github.io`, remove the base path settings there.

## Customising

- **Text and numbers:** edit `app/data/content.js`.
- **Colours:** edit `lime` and `ink` in `tailwind.config.js` and the CSS variables at the top of `globals.css`.
- **Scroll length and feel:** in `useFizzAnimations.js`, change `end: "+=220%"` for how long the hero stays pinned, `scrub` for smoothing, and `CAN_SHIFT` for how far the can slides.
- **Product visual:** replace `FizzCan.jsx` with your own SVG or an image.

## Notes

- The stats (98%, 0%, 100%) are placeholder copy, not real product claims.
- The can is an original SVG made for this project.
