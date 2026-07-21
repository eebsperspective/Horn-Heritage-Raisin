# Photo Credits

Real photography used across the site, sourced from the brand's own earlier
`Images/` asset folder (carried over from the previous prototype at this
same project location, repo `eebsperspective/Horn-Heritage-Raisin`).
Provenance/authorship of the original shoot is not separately documented;
treat these as representative brand imagery rather than verified
on-location Puntland photographs until confirmed otherwise.

| File | Used for | Original asset |
| --- | --- | --- |
| `public/images/puntland-tree-landscape.png` | About "trade centuries" landscape; journal "Inside the Harvest" thumbnail | `Images/PUNT LAND - HISTORY@2x.png` |
| `public/images/resin-bowl-premium.png` | Journal "Frankincense Grades Explained" thumbnail | `Images/LIFESTYLE PHOTO - HARVESTER COLLECTING RESIN@2x.png` |
| `public/images/burning-ritual-smoke.png` | About "The heritage"; FAQ retail intro | `Images/LIFESTYLE PHOTO - 01@2x.png` |
| `public/images/myrrh-resin.png` | Royal Myrrh macro photo; Why Our Resin "Cleaner resin" | `Images/MYRRH@2x.png` |
| `public/images/favicon-source.png` (as `src/app/icon.png`) | Site favicon; also reused as the small footer icon mark | `Images/Fav Icon.png` |

## 2026-07-21 — frankincense product line dropped

The site went myrrh-only on this date (see `git log`). Product photos and
business copy that existed only to support frankincense products were
removed along with those products; the two frankincense journal/education
articles stayed (historical/educational content), so their thumbnails
(`frankincense-resin-lumps.jpg`, `resin-bowl-premium.png`) stayed too.
Deleted as orphaned: `blend-resin.png`, `resin-oil.png`,
`frankincense-burning-tongs.png`, `frankincense-tears-bowl.png`,
`boswellia-tapping.jpg`, `frankincense-myrrh-market.jpg`,
`frankincense-resin-bowl.jpg`, `frankincense-resin-display.jpg`.

Four new real myrrh/harvest photos were sourced from Wikimedia Commons to
fill the gaps this left (product "scale"/"packaging" shots, traceability
steps, and the founder/harvester portrait slots that had never had a real
photo): `myrrh-resin-bowl.jpg`, `myrrh-resin-scale.jpg`,
`myrrh-tapping-harvester.jpg`, and `myrrh-essential-oil.png`. At this point
one photo (`myrrh-tapping-harvester.jpg`) was reused across 7 different
captions site-wide — a stopgap, not a real fix.

## 2026-07-21 (later the same day) — reuse cleanup, 14 more distinct photos

The single-photo-reused-7x approach above was replaced with 14 additional
distinct, high-resolution photos (mostly Pexels, a few more Wikimedia),
bringing every image slot on the site down to at most 2 uses. `myrrh-tapping-
harvester.jpg` was deleted (fully superseded, 0 remaining references).
Full sourcing, author, and license detail for the new set — including notes
on why each was picked and the honesty tradeoffs involved in using
non-Somalia-specific stock photography for a Somalia-specific brand — is in
`public/images/CREDITS.md`.

New files: `myrrh-bark-tapped.jpg`, `myrrh-bark-drip.jpg`,
`myrrh-bark-tears.jpg`, `myrrh-bark-amber.jpg`, `myrrh-stone-bowl.jpg`,
`puntland-camel-caravan.jpg`, `puntland-camel-herding.jpg`,
`puntland-market-scene.jpg`, `puntland-portrait.jpg`,
`puntland-acacia-plain.jpg`, `puntland-acacia-mountains.jpg`,
`puntland-acacia-sunrise.jpg`, `tree-bark-texture.jpg`, `export-crates.jpg`.

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

## Placeholders

As of 2026-07-21, every image slot across the site has a real photo — the
`PlaceholderImage` component still exists as a fallback for future content
additions, but nothing currently renders it. Slots that previously had no
real photo (About "Built on real partnerships", Home `StoryTeaser`,
Sustainability "Family partnerships across Puntland", Why Our Resin "Direct
sourcing", Traceability strip "Packaging", and the per-product "scale" /
"packaging" shots in `src/content/products.ts`) were filled with the new
myrrh photos described above — some captions were reworded to match what
the sourced photo actually shows (e.g. "harvester tapping a tree" rather
than a specific branded-packaging or named-founder shot we don't have).
