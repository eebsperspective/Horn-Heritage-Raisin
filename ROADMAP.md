# Future Phase Roadmap

These are called out explicitly (per the original project brief) so nothing
gets silently dropped. None of these are required for launch.

## Payments & orders
- **Activate Stripe Checkout**: set `STRIPE_SECRET_KEY` (and `STRIPE_WEBHOOK_SECRET`
  once you register the webhook endpoint at `/api/stripe/webhook`) in `.env.local`.
  The cart, checkout form, and API route (`src/app/api/checkout/route.ts`) are
  already wired — until keys are set, orders fall back to capturing the order
  for manual invoicing via `data/submissions/pending-order.jsonl`.
- **Sample kit as a purchasable/orderable product**: currently sample kits are
  requested via a form (`src/components/wholesale/SampleRequestForm.tsx`); add
  a real SKU in `src/content/products.ts` once you want it purchasable directly.

## Content & CMS
- **Headless CMS migration**: content currently lives in
  `src/content/{site,products,faqs,badges,journal}.ts` and `src/content/journal/*.mdx`.
  These are structured so swapping the data source for a CMS (e.g. Sanity) is a
  matter of replacing the exported functions (`getProductBySlug`, etc.) with
  fetch calls — no page/component changes required.
- **Multi-language support** (Arabic, French): add locale routing once content
  volume justifies translation investment.

## Trust & documentation
- **Laboratory testing results / Certificates of Analysis**: flagged as
  "coming soon" in `src/content/site.ts` (`wholesaleFacts.documentation`).
  Flip the status to `"available"` and link the actual PDFs once testing exists.
- **Export licenses displayed/verifiable**: same pattern — currently listed as
  available in text; add scanned/verifiable documents when ready to publish them.
- **Expanded sustainability reporting**: `src/app/sustainability/page.tsx` is
  intentionally conservative — expand only with verifiable practices.

## Social proof
- **Customer reviews (retail + wholesale testimonials)**: the component
  (`src/components/home/SocialProofSection.tsx`) already renders a reviews
  grid — it activates automatically once `testimonials` in
  `src/content/badges.ts` has real, attributable entries.
- **Stats bar** ("500+ happy customers", "serving retailers in N countries"):
  wired in `src/components/shared/TrustBadgeStrip.tsx` (`StatsBar`), off by
  default. Set `statsBar.enabled = true` and fill in real numbers in
  `src/content/badges.ts` — never before the numbers are true.
- **"Trusted by retailers" badge**: flip `enabled: true` for that badge id in
  `src/content/badges.ts` once genuinely true.

## Catalogue
- **Wholesale catalogue PDF auto-delivery**: the email-gated form
  (`src/components/wholesale/CatalogueDownloadForm.tsx` and
  `src/app/api/forms/catalogue-download/route.ts`) is fully wired to capture
  name/email/company. Once a PDF exists, attach or link it from the
  confirmation email in that API route.

## Photography
- Every image slot on the site now uses a real photo — none render
  `src/components/shared/PlaceholderImage.tsx` anymore. It stays in the
  codebase as the fallback for any new content added without a photo lined
  up yet.
- A set of real photos from the brand's own `Images/` asset folder (see
  `PHOTO_CREDITS.md`) is wired in: the Home hero, journal thumbnails, the
  myrrh product photos, the About "heritage" section, and the
  favicon/footer mark. Provenance of these images isn't independently
  verified — confirm they're genuinely representative (or replace with
  verified on-location Puntland photography) before leaning on them as
  proof of authenticity in marketing claims.
- A second set of real myrrh/harvest photos, sourced from Wikimedia Commons
  under CC licenses (see `public/images/CREDITS.md` for author/license
  detail per file), fills the remaining product-gallery, traceability, and
  founder/harvester slots. These require visible attribution before
  production launch — add a credits line (footer or a dedicated "Image
  credits" page), or replace with photos you have clear rights to.
- Several assets in `Images/` were deliberately left unused because they
  show a different, conflicting "Horn Heritage Resins" label/logo design, or
  don't match their intended subject — see `PHOTO_CREDITS.md` for the list.
