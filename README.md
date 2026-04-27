# Flying Pigeons

[![Deployed on Cloudflare Pages](https://img.shields.io/badge/Deployed%20on-Cloudflare%20Pages-orange?logo=cloudflare)](https://pages.cloudflare.com)

Flying Pigeons band website — Texas punk, feathered and fearless.

## Stack

- [Astro](https://astro.build)
- [Tailwind CSS v3](https://tailwindcss.com)
- [React](https://react.dev) (Astro integration)
- Deployed on [Cloudflare Pages](https://pages.cloudflare.com)

## Development

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # production build → dist/
npm run preview  # preview production build
```

## Styling

Global styles and complex component CSS live in `src/styles/global.css`.
Tailwind utility classes are used for layout and typography throughout `src/pages/index.astro`.
Custom Tailwind config is in `tailwind.config.js`.
