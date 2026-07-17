export type JournalCategory =
  | "Resin Education"
  | "Puntland Stories"
  | "Harvest Updates"
  | "Uses & Wellness";

export type JournalMeta = {
  slug: string;
  title: string;
  excerpt: string;
  category: JournalCategory;
  date: string; // ISO
  /** Real photo path (public/images/...); falls back to an abstract placeholder when omitted. */
  image?: string;
};

export const journalPosts: JournalMeta[] = [
  {
    slug: "frankincense-grades-explained",
    title: "Frankincense Grades Explained: What Makes Resin Premium",
    excerpt:
      "Tear size, color, clarity, and oil content — how we grade every batch of frankincense, and why it matters for burning, perfumery, and wellness use.",
    category: "Resin Education",
    date: "2026-02-10",
    image: "/images/resin-bowl-premium.png",
  },
  {
    slug: "boswellia-carterii-vs-frereana",
    title: "Boswellia Carterii vs. Frereana: What's the Difference?",
    excerpt:
      "Two of the Horn of Africa's most important frankincense species, compared — aroma, appearance, traditional use, and how to choose between them.",
    category: "Resin Education",
    date: "2026-01-22",
    image: "/images/frankincense-resin-lumps.jpg",
  },
  {
    slug: "inside-the-harvest-puntland",
    title: "Inside the Harvest: A Season in Puntland",
    excerpt:
      "From the first incision of the tapping season to the final sort — a look at how a harvest actually unfolds across the highlands of Puntland.",
    category: "Puntland Stories",
    date: "2025-12-05",
    image: "/images/puntland-tree-landscape.png",
  },
];

export function getJournalPostBySlug(slug: string) {
  return journalPosts.find((p) => p.slug === slug);
}
