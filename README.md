# Ametrine Consulting — ametrine.tz

A React + Vite website for Ametrine Consulting, built from the "ametrine.tz Website Contents" brief and the Industry-based design draft, retthemed in Ametrine's purple/teal brand.

## Getting started

```bash
npm install
npm run dev       # start the local dev server (usually http://localhost:5173)
npm run build     # production build, output in dist/
npm run preview   # preview the production build locally
```

Requires Node.js 18+.

## What's included

- **8 pages**: Home, About, Services (with 6 individual service detail pages at `/services/:slug`), Sectors, Impact, Insights (with FAQ), Careers, Contact.
- All copy is taken verbatim from `ametrine.tz Website Contents.docx`.
- Brand colours (`#4A1B9E` purple, `#4ECDC4` teal), your logo (cropped to a transparent PNG in both light and dark versions), Barlow / Barlow Condensed fonts, and a "blueprint" visual style (square corners, hairline borders, "+" corner marks) carried over from the design draft.
- A working contact form with client-side validation and a confirmation screen.

## Things to finish before launch

1. **Contact form backend.** The form in `src/pages/Contact.jsx` supports an optional `VITE_CONTACT_FORM_ENDPOINT` environment variable for a real backend or form-service submission (for example Formspree or a custom API endpoint). When no endpoint is configured, it gracefully falls back to the local confirmation flow and shows a clear error if the request cannot be sent.
2. **Photography.** The duotone images on the Home, About and Impact pages live in `src/assets/photos/`. Swap in different image files there if you want a different editorial look while keeping the same import paths.
3. **Domain & hosting.** This is a static site — it can be deployed to Netlify, Vercel, Cloudflare Pages, or any static host by running `npm run build` and uploading the `dist/` folder. Point `ametrine.tz` at whichever host you choose.
4. **Careers & Insights content.** The Careers page and Insights article list currently show placeholder states ("Check back", "Open to expressions of interest", article titles with no full articles yet) — update `src/data/content.js` as real openings, consultants and articles become available.

## Editing content

Nearly all of the site's text lives in one file: `src/data/content.js`. Section by section, it holds the home page copy, about page copy, all 6 services, sectors, impact stats, insights articles, FAQ, careers tracks and contact details — edit the text there and it updates everywhere it's used.

The site also exposes that content through `public/content.json`, which is loaded at runtime. This creates a CMS-ready content boundary: a future admin panel or hosted CMS can replace that JSON feed without changing the page components. After editing the source model, run `npm run content:sync` to regenerate the feed. The app falls back to the bundled content if the runtime feed is unavailable.

### Managing images without code

The `/admin` page provides a Cloudinary-backed image manager for the Home hero, About page and Impact page images. The current Cloudinary configuration uses cloud name `bu4btdoe` and the unsigned upload preset `ametrine-images`; create that preset in Cloudinary before deploying. Set `AMETRINE_ADMIN_TOKEN` as a server environment variable for the PHP endpoint. After deployment, open `/admin`, upload an image for a slot, enter the server token, and publish. The site stores the resulting Cloudinary URLs in `content.json` and loads them dynamically.

The admin token must never be added to a `VITE_*` variable or committed to the repository. The cPanel deployment copies the `/api` endpoint alongside the built site.

## Project structure

```
src/
  data/content.js       All site copy in one place
  components/           Reusable UI: Navbar, Footer, Button, BlueprintCard, SpecSheet, DuotoneImage, CtaBand
  pages/                One file per page/route
  assets/                Logo files and placeholder photography
```
