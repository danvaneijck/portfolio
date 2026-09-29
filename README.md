# danvan.xyz

Personal site. Vite + React 18 + TypeScript + Tailwind v4, prerendered to static HTML and served by nginx.

```bash
yarn dev      # dev server (client-rendered)
yarn lint
yarn build    # tsc → client build → SSR build → scripts/prerender.mjs
```

`yarn build` writes one HTML file per route into `dist/` (`/`, `/work/<slug>`, `404.html`) plus `sitemap.xml`,
then the client bundle hydrates it. Routes and their titles/descriptions come from `src/content/meta.ts`.

## Content

- `src/content/site.ts`: everything on the home page (products, figures, toolbox, experience).
- `src/content/caseStudies.ts`: case-study metadata; the page bodies live in `src/pages/work/`.
- `public/Daniel_Van_Eijck_CV.pdf`: the downloadable CV (web copy, no phone number).
- `public/og.png`: 1200×630 share image.

## Deploy

Pushing to `main` runs `.github/workflows/deploy.yml`: build the Docker image (`Dockerfile`, nginx config in
`deploy/nginx.conf`), push to GHCR, bump the tag in `portfolio_deploy`, then `docker compose pull && up -d` on the
server behind Traefik.
