# Maison Coffee

Marketing + shop site for Maison Coffee, a specialty Arabica roastery in Mai Sơn, Sơn La, Vietnam. Next.js (App Router) + TypeScript + Tailwind CSS v4.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

Copy `.env.example` to `.env.local` and fill in:

| Variable | Required for | Notes |
| --- | --- | --- |
| `RESEND_API_KEY` | `/api/wholesale` route | Sends the wholesale sample-kit request email via [Resend](https://resend.com). Without it the form returns a real error state (the failure path is intentional, not a bug). |
| `NEXT_PUBLIC_SITE_URL` | SEO metadata, sitemap, JSON-LD | Falls back to `https://maisoncoffeevn.com`, the production domain. |

## Structure

- `app/(en)/*` — English routes (`/`, `/shop`, `/shop/[slug]`, `/cart`)
- `app/vi/*` — Vietnamese routes (`/vi`, `/vi/shop`, `/vi/shop/[slug]`, `/vi/cart`)
- `lib/i18n.ts` — the EN/VI copy dictionary consumed by both route groups (**the Vietnamese copy should be reviewed by a native speaker before launch**)
- `lib/products.ts` — typed product catalog (single source of truth for both locales)
- `lib/cart-store.ts` — Zustand cart store, persisted to `localStorage`
- `app/api/wholesale/route.ts` — Zod-validated wholesale form handler, sends via Resend

## Checkout integration seam

There is no payment provider wired up yet (out of scope for this build). The integration point is `beginCheckout()` in `lib/cart-store.ts`, and the "Checkout" button in `components/cart/CartView.tsx` — swap that button's handler to call a real checkout provider (Stripe, VNPay, MoMo, ...) once one is chosen. Nothing else in the cart layer needs to change.

## Placeholder assets

`public/assets/*` (farm photography, product renders) and the favicon are procedurally generated brand-colored placeholders (see `scripts/gen-assets.mjs`), standing in until real photography and product renders are supplied. Swap the files in `public/assets/` and re-run `next build` — no code changes needed.

## Scripts

- `npm run dev` / `npm run build` / `npm run start` / `npm run lint`
- `node scripts/gen-assets.mjs` — regenerates the placeholder imagery
- `node scripts/smoke-test.mjs` — Playwright smoke test of the golden paths (add to cart, cart drawer, quantity stepper, VI locale, mobile menu); requires `npm install --no-save playwright` first, not part of the build

## Deploying

Deployed on Vercel. See the project's deployment notes for the exact DNS records and environment variable setup for the production domain.
