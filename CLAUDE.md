# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Restaurant landing page built with Next.js 15.5.4, React 19.1.0, and Tailwind CSS v4.

## Development Commands

**Development server**:
```bash
npm run dev
```
Runs Next.js with Turbopack at http://localhost:3000

**Production build**:
```bash
npm run build
```
Creates optimized production build with Turbopack

**Production server**:
```bash
npm start
```
Starts production server (requires `npm run build` first)

**Linting**:
```bash
npm run lint
```
Runs ESLint with next/core-web-vitals config

## Tech Stack & Architecture

**Framework**: Next.js 15 with App Router architecture
- All routes in `app/` directory
- `app/layout.js` is root layout with Geist fonts
- `app/page.js` is homepage (default route `/`)
- Server Components by default

**Styling**: Tailwind CSS v4
- Uses new `@tailwindcss/postcss` plugin (v4 architecture)
- Config via `@theme inline` in `globals.css` (not separate config file)
- CSS custom properties: `--background`, `--foreground`, `--font-geist-sans`, `--font-geist-mono`
- Automatic dark mode via `prefers-color-scheme`

**Fonts**: Next.js font optimization
- Geist Sans and Geist Mono from `next/font/google`
- Loaded in `app/layout.js` as CSS variables

**Images**: Next.js Image component
- All images in `public/` directory (currently contains SVG assets)
- Use `next/image` for automatic optimization

## Project Structure

```
app/
├── layout.js         # Root layout (fonts, metadata, HTML wrapper)
├── page.js           # Homepage
├── globals.css       # Tailwind imports & theme
└── favicon.ico       # Site icon

public/               # Static assets (SVGs, images)
```

## Key Patterns

**Tailwind v4 Theming**: Use `@theme inline` in CSS files, not `tailwind.config.js`

**Font Usage**: Fonts available as Tailwind classes via CSS variables:
- `font-sans` → Geist Sans
- `font-mono` → Geist Mono

**Dark Mode**: Automatic via CSS media query `prefers-color-scheme: dark`

**New Pages**: Create `app/[route]/page.js` for new routes

**Metadata**: Export `metadata` object from `layout.js` or `page.js` for SEO
