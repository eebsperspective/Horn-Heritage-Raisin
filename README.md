# Horn Heritage

Multi-page e-commerce and wholesale site for Horn Heritage — premium myrrh
resin sourced directly from harvesting families in Puntland, Somalia.

Built with Next.js (App Router), TypeScript, and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

Copy `.env.example` to `.env.local`. Every variable is optional — the site is fully functional
with none of them set:

| Variable | Effect when unset | Effect when set |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Defaults to `https://www.hornheritage.com` for metadata/sitemap URLs | Used as the canonical site URL |
| `STRIPE_SECRET_KEY` / `STRIPE_WEBHOOK_SECRET` | Checkout captures the order and shows a "we'll email you an invoice" message | Real Stripe Checkout sessions are created and charged |
| `RESEND_API_KEY` / `RESEND_FROM_EMAIL` | Form/order notifications are logged to the console only | Notification emails are sent via [Resend](https://resend.com) |

All form and order submissions are also always saved to `data/submissions/*.jsonl`
(git-ignored) as a durable local fallback, regardless of email configuration.

## Project structure

- `src/app/` — pages and API routes (Next.js App Router)
- `src/components/` — UI components, grouped by area (`layout`, `home`, `shop`, `wholesale`,
  `forms`, `cart`, `shared`)
- `src/content/` — the content layer: products, site copy, FAQs, journal articles, and
  feature-flagged social proof (`badges.ts`). See `ROADMAP.md` for the planned CMS migration path.
- `src/lib/` — cart context, validation schemas, email/submission helpers, Stripe client, SEO/JSON-LD helpers

## Content editing (no CMS yet)

Until a headless CMS is wired up (see `ROADMAP.md`), edit content directly:

- Products: `src/content/products.ts`
- Site-wide facts (MOQ, shipping, lead times, contact info, nav): `src/content/site.ts`
- FAQs: `src/content/faqs.ts`
- Journal articles: `src/content/journal.ts` (metadata) + `src/content/journal/*.mdx` (body)
- Social proof badges/stats/testimonials (all off until genuinely true): `src/content/badges.ts`

## Photography

Every image slot on the site currently uses a real photo — see `PHOTO_CREDITS.md` and
`public/images/CREDITS.md` for sourcing and license/attribution details.
`src/components/shared/PlaceholderImage` still exists as a fallback for any content added
later without a photo lined up yet.

## Roadmap

See `ROADMAP.md` for future-phase items (lab testing/COAs, reviews, catalogue PDF, multi-language, etc.)
called out explicitly so they aren't silently dropped.

## Deploying

This project deploys cleanly to [Vercel](https://vercel.com/new). Set the environment variables
above in your Vercel project settings before enabling real payments/emails.
