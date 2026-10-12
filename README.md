# Dolatom Computer Resources (DCR) — Website

Marketing website for **Dolatom Computer Resources**, a Nigerian computer services company offering:

1. Computer training for students
2. NIN registration support
3. Laptop sales

Built with **Vite + React + TypeScript** and **React Router**. No backend is required for v1 — the registration and contact forms validate on the client and show an inline confirmation.

## Getting started

```bash
npm install        # install dependencies
npm run dev        # start the dev server (http://localhost:5173)
npm run build      # type-check and build for production into dist/
npm run preview    # serve the production build locally
npm run lint       # run oxlint
```

## Routes

| Route               | Page                                                   |
| ------------------- | ------------------------------------------------------ |
| `/`                 | Home — hero, service cards, highlights, CTA            |
| `/about`            | About — mission, audience, why DCR                     |
| `/training`         | Training programs, durations, outcomes                 |
| `/nin-registration` | NIN service description, requirements, how to proceed  |
| `/laptops`          | Laptop product grid (placeholder products)             |
| `/register`         | Student registration form                              |
| `/contact`          | Contact details + simple message form                  |
| `*`                 | 404 page                                               |

## Project structure

```
src/
├── App.tsx                 # Route definitions
├── main.tsx                # Entry point (BrowserRouter + global styles)
├── components/
│   ├── Layout.tsx          # Shared shell: skip link, Header, <main>, Footer
│   ├── Header.tsx          # Sticky blue header with text logo + mobile toggle
│   ├── Nav.tsx             # Primary navigation (collapsible on mobile)
│   ├── Footer.tsx          # Dark blue footer with links and contact details
│   ├── Button.tsx          # Renders <Link>, <a> or <button>; blue theme variants
│   ├── PageHero.tsx        # Page title banner with breadcrumb
│   ├── Section.tsx         # Standard section wrapper (eyebrow/title/lead)
│   ├── ServiceCard.tsx     # Card used on the Home services grid
│   ├── FormField.tsx       # Accessible labelled input/select/textarea
│   ├── Icon.tsx            # Inline SVG icon set
│   └── ScrollToTop.tsx     # Resets scroll position on route change
├── pages/                  # One component per route
├── data/                   # Static content: company info, services, programs, laptops
├── hooks/
│   └── usePageMeta.ts      # Sets <title> and meta description per route
└── styles/
    ├── theme.css           # CSS custom properties (blue palette), reset, utilities
    ├── layout.css          # Header, nav, footer
    ├── components.css      # Buttons, cards, forms, sections, CTA banner
    └── pages.css           # Page-specific layout (home hero, products, contact…)
public/
└── favicon.svg
```

## Theming

All colours, spacing and typography are defined as CSS custom properties in `src/styles/theme.css`. The primary brand colour is blue (`--color-primary-*`), with a yellow accent (`--color-accent`) reserved for high-contrast CTAs on blue backgrounds.

## Editing content

- Company name, phone, email, address and hours: `src/data/company.ts`
- Service cards: `src/data/services.ts`
- Training programs and the duration options used by the registration form: `src/data/training.ts`
- Laptop catalogue (set `price: null` for "Contact for price"): `src/data/laptops.ts`

## Hooking up a backend to the registration form

The registration form lives in `src/pages/Register.tsx`. It exposes a `RegistrationData` type and a single `submitRegistration(data)` function that currently simulates a request. Replace its body with a `fetch`/`axios` call to your API — the form state, validation, loading and success/error UI do not need to change.

```ts
async function submitRegistration(data: RegistrationData): Promise<void> {
  const res = await fetch('/api/registrations', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  if (!res.ok) throw new Error('Request failed')
}
```

## Deployment note

This is a single-page app using client-side routing. When deploying, configure your host to serve `index.html` for all routes (e.g. Netlify `_redirects`, Vercel rewrites, or an nginx `try_files` fallback) so deep links like `/register` work on refresh.
