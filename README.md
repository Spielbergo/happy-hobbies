# Happy Hobbies — Next.js App

Personal hobby directory and resource site built with Next.js (App Router). This repository powers a static-exportable site used as a portfolio project and demo of component-driven Next.js patterns.

Live demo: (not deployed)

---

## About this Project

This project is a small collection of hobby resources and community links built with the Next.js 16 App Router. The site is designed to be statically exported (`next build` + static assembly) so it can be hosted on simple static hosts or deployed to Vercel for zero-config hosting.

Key goals:
- Component-first layout and re-usable UI primitives
- Fast static output with minimal runtime JavaScript
- Simple build/export workflow for shared/limited hosts

---

## Key Sections

- **Home:** Landing content and hero
- **About:** Project description and credits
- **Community:** Community links and discussion resources
- **Hobbies:** Category listing of hobby resources
- **Resources:** Curated links and downloads

---

## Tech Stack

- **Next.js 16** — App Router with server + client components
- **React 19**
- **TypeScript** — project typed with TS
- **Vite** — build tool for faster development and optimized production builds
- **Tailwind** — utility-first CSS for styling

---

## Notable Implementation Details

- Uses Next.js App Router under `app/` with modular components in `app/components/` and `app/ui/`.
- Static-export-friendly build (production `next build` output is assembled into `out/` for static hosting).
- Small helper scripts added:
  - `npm run serve:out` — serve the `out` folder locally
  - `npm run zip:out` — create `out.zip` for upload to shared hosts

---

## Project Structure (important folders)

```
src/
├─ app/                # Next.js App Router source (pages, components)
├─ styles/             # Global styles and tokens
├─ public/             # Static public assets
├─ .next/              # Build output (local)
├─ out/                # Assembled static export (generated)
└─ package.json        # Scripts and dependencies
```

---

## Local Development

Install dependencies and start dev server:

```bash
npm install
npm run dev
# open http://localhost:3000
```

Production build and static assembly (what I used to share the site):

```bash
npm run build
# assemble static files (this repo includes a small assembly step that copies .next/server/app output into `out`)
npm run serve:out   # serve the assembled `out` locally
```

To create a zip suitable for upload to a shared host:

```bash
npm run zip:out
# uploads/out.zip contains the static bundle
```

---

## Deployment

The easiest option is Vercel (connect this repo and deploy). For quick sharing you can upload `out.zip` contents to any static host, or use simple Apache/nginx hosting configured to serve the `out` folder as the site root.

If you plan to use Vercel, no special config is required — just push to GitHub and import the repository in Vercel.

---

## Contributing & Notes

- Environment variables (if present) should never be committed; use `.env.local` which is ignored.
- The repo aims for a minimal dependency surface so it can be exported as static HTML where needed.

---

## Author

Built and maintained by the site owner — added to a personal portfolio.