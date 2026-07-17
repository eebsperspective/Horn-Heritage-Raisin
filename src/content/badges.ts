/**
 * Social-proof feature flags. Hard rule: never display a claim, badge, or
 * number here until it is verifiably true. Flip `enabled`/set real values
 * when the underlying fact exists — components read these flags and render
 * nothing when off, rather than placeholder or fake data.
 */

export type Badge = {
  id: string;
  label: string;
  enabled: boolean;
};

export const trustBadges: Badge[] = [
  { id: "exporting-from-puntland", label: "Exporting from Puntland", enabled: true },
  { id: "sustainably-harvested", label: "Sustainably harvested", enabled: true },
  { id: "family-partnerships", label: "Family partnerships across Puntland", enabled: true },
  { id: "trusted-by-retailers", label: "Trusted by retailers", enabled: false },
];

export const statsBar = {
  enabled: false,
  happyCustomers: null as number | null,
  countriesServed: null as number | null,
};

export type Testimonial = {
  name: string;
  role: string;
  company?: string;
  quote: string;
};

// Empty until real, attributable testimonials exist. Do not seed with
// placeholder quotes — the ReviewsSection component renders nothing when
// this array is empty.
export const testimonials: Testimonial[] = [];

export const reviewsSectionEnabled = testimonials.length > 0;
