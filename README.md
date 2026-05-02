# Klinik Pergigian Dr Pakaruddin — Vite SPA

Clean Vite + React 19 + Tailwind CSS v4 single-page app.

## Run locally
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```
Output is generated in `dist/`.

## Deploy on Vercel
1. Push to GitHub.
2. Import into Vercel — defaults are auto-detected (framework: Vite).
3. `vercel.json` already includes the SPA rewrite to prevent 404 on refresh.

## Stack
- React 19 + React Router DOM 7
- Vite 7
- Tailwind CSS v4 (via @tailwindcss/vite)
- shadcn/ui components, framer-motion, lucide-react
