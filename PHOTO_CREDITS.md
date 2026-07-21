# Photo Credits

Real photography used across the site, sourced from the brand's own earlier
`Images/` asset folder (carried over from the previous prototype at this
same project location, repo `eebsperspective/Horn-Heritage-Raisin`).
Provenance/authorship of the original shoot is not separately documented;
treat these as representative brand imagery rather than verified
on-location Puntland photographs until confirmed otherwise.

| File | Used for | Original asset |
| --- | --- | --- |
| `public/images/puntland-tree-landscape.png` | Home hero background; journal "Inside the Harvest" thumbnail | `Images/PUNT LAND - HISTORY@2x.png` |
| `public/images/resin-bowl-premium.png` | Royal Frankincense product photo; journal "Frankincense Grades Explained" thumbnail; Why Our Resin "Hand-sorted grading" | `Images/LIFESTYLE PHOTO - HARVESTER COLLECTING RESIN@2x.png` |
| `public/images/burning-ritual-smoke.png` | About "The heritage"; FAQ retail intro | `Images/LIFESTYLE PHOTO - 01@2x.png` |
| `public/images/blend-resin.png` | Frankincense & Myrrh Blend product photo | `Images/BLENDS@2x.png` |
| `public/images/myrrh-resin.png` | Myrrh product photos | `Images/MYRRH@2x.png` |
| `public/images/resin-oil.png` | Why Our Resin "Higher oil content" | `Images/RESIN OILS@2x.png` |
| `public/images/favicon-source.png` (as `src/app/icon.png`) | Site favicon; also reused as the small footer icon mark | `Images/Fav Icon.png` |
| `public/images/frankincense-burning-tongs.png` | Royal Frankincense product gallery "scale" photo | `Images/PRODUCT PHOTO - HOJARI FRANKINCENSE@2x.png` |
| `public/images/frankincense-tears-bowl.png` | Traceability strip "Natural drying" step | `Images/RISING SMOKE@2x.png` |

## Deliberately not used

A few assets in `Images/` were skipped:
- `Footer - Logo.svg` — the icon's main shape is filled solid white (`.cls-1 { fill: #fff }`),
  clearly designed to sit on a dark background. Our footer is light cream, so this
  would render as a mostly-invisible icon. Used `Fav Icon.png` (visible navy/orange
  on white) for the footer mark instead.
- `WHOLESALES@2x.png`, `JOURNAL PHOTO - RITUAL@2x.png`, `GIFT SETS@2x.png` —
  these show mocked-up jars/packaging with a different "Horn Heritage
  Resins" label design (teal accent, script logo) that doesn't match the
  site's current wordmark — using them would read as a branding
  inconsistency.
- `JOURNAL PHOTO - GUIDE@2x.png` — depicts what appears to be dried fruit,
  not resin; doesn't match any article's actual content.
- `header-logo.png` — full illustrated wordmark in a different type style
  than the site's current Bodoni Moda logo; not used to avoid a second,
  conflicting logo treatment in the header.
- `BURNING ESSENTIALS@2x.png` — a burner/resin-tears still life that doesn't
  cleanly match the literal caption of any remaining placeholder slot (no
  hand for scale, no packaging shown); left as a placeholder rather than
  attach a caption the photo doesn't actually support.

## Still placeholders (deliberately)

A handful of image slots remain `PlaceholderImage` on purpose because no
real photo we have actually depicts the specific thing captioned:
- About "Built on real partnerships" and Home `StoryTeaser` — both caption a
  specific founder/family portrait we don't have.
- Sustainability "Family partnerships across Puntland" and Why Our Resin
  "Direct sourcing" — both caption a specific buyer/family meeting photo.
- Traceability strip "Packaging" step — captions branded packaging we don't
  have a photo of.
- Several per-product gallery "scale" and "packaging" shots in
  `src/content/products.ts` — captions describe hand-for-scale or
  branded-pouch photos specific to that grade/resin that we don't have.
