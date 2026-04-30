# Flying Pigeons

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-blue?logo=cloudflare)](https://theflyingpigeons.com)
[![Deployed on Cloudflare Pages](https://img.shields.io/badge/Deployed%20on-Cloudflare%20Pages-orange?logo=cloudflare)](https://pages.cloudflare.com)

Flying Pigeons band website — Texas punk, feathered and fearless.

**🎸 Live Site:** https://theflyingpigeons.com

## Stack

- [Astro](https://astro.build) v5.18.1
- [Tailwind CSS v3](https://tailwindcss.com)
- [React](https://react.dev) (Astro integration)
- [TypeScript](https://www.typescriptlang.org/)
- Deployed on [Cloudflare Pages](https://pages.cloudflare.com)

## Development

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # production build → dist/
npm run preview  # preview production build
```

## Styling

Global styles and complex component CSS live in `src/styles/global.css`. Tailwind utility classes are used for layout and typography throughout `src/pages/index.astro`. Custom Tailwind config is in `tailwind.config.js`.

## Architecture

- `src/pages/index.astro` — main landing page
- `src/assets/images/` — source images optimized at build time via Astro `<Image>`
- `functions/api/subscribe.ts` — Cloudflare Pages Function for email subscriptions
- `wrangler.toml` — Cloudflare bindings configuration

## Features

- Single-page landing site with responsive design
- Featured video integration
- Shows/Tour dates section
- Band member lineup
- Email subscription via Cloudflare Pages Function + KV
- Social media integration

## Get Involved

### Fans
- Visit the live site and subscribe to email updates
- Follow on social media for latest show announcements
- Share with fellow punk rock enthusiasts

### Press & Bookings
- Contact the band through social media links on the website
- Visit the live site for band information and upcoming shows
