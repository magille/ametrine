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

1. **Contact form backend.** The form in `src/pages/Contact.jsx` currently only shows a confirmation message locally — it does not send an email yet. Wire it up to something like [Formspree](https://formspree.io), [EmailJS](https://www.emailjs.com), or your own API endpoint (search for the `handleSubmit` function and the `NOTE:` comment above it).
2. **Photography.** The duotone images on the Home, About and Impact pages (`src/assets/photos/`) are abstract placeholders, not real photos. Swap them for your own photography — drop a new image into that folder and update the `import` at the top of the matching page file.
3. **Domain & hosting.** This is a static site — it can be deployed to Netlify, Vercel, Cloudflare Pages, or any static host by running `npm run build` and uploading the `dist/` folder. Point `ametrine.tz` at whichever host you choose.
4. **Careers & Insights content.** The Careers page and Insights article list currently show placeholder states ("Check back", "Open to expressions of interest", article titles with no full articles yet) — update `src/data/content.js` as real openings, consultants and articles become available.

## Editing content

Nearly all of the site's text lives in one file: `src/data/content.js`. Section by section, it holds the home page copy, about page copy, all 6 services, sectors, impact stats, insights articles, FAQ, careers tracks and contact details — edit the text there and it updates everywhere it's used.

## Project structure

```
src/
  data/content.js       All site copy in one place
  components/           Reusable UI: Navbar, Footer, Button, BlueprintCard, SpecSheet, DuotoneImage, CtaBand
  pages/                One file per page/route
  assets/                Logo files and placeholder photography
```
