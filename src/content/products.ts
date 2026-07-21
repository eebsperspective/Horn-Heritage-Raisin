export type ResinType = "frankincense" | "myrrh";
export type UseTag = "burning" | "perfumery" | "wellness";

export type ProductVariant = {
  weightGrams: number;
  label: string;
  price: number;
};

export type ProductImage = {
  caption: string;
  kind: "macro" | "scale" | "packaging";
  /** Real photo path (public/images/...); falls back to an abstract placeholder when omitted. */
  src?: string;
};

export type Product = {
  slug: string;
  name: string;
  resinType: ResinType;
  botanicalName: string;
  region: string;
  grade: "Royal Hojari" | "Royal Grade" | "Super Grade" | "Premium Grade" | "Standard Grade";
  gradeNote: string;
  useTags: UseTag[];
  aromaProfile: string;
  suggestedUses: string[];
  description: string;
  variants: ProductVariant[];
  images: ProductImage[];
  featured: boolean;
};

export const products: Product[] = [
  {
    slug: "royal-hojari-frankincense",
    name: "Royal Hojari Frankincense",
    resinType: "frankincense",
    botanicalName: "Boswellia carterii",
    region: "Karkaar mountains, Puntland",
    grade: "Royal Hojari",
    gradeNote:
      "Our top grade — large, pale green-gold tears with minimal bark or dust, hand-sorted in three passes.",
    useTags: ["burning", "perfumery", "wellness"],
    aromaProfile: "Bright, resinous, and citrus-sweet with a clean pine top note.",
    suggestedUses: ["Charcoal burning", "Perfumery tincture base", "Meditation & prayer spaces"],
    description:
      "Royal Hojari is the rarest grade we offer, harvested from mature Boswellia carterii trees in the Karkaar highlands. Tears are hand-selected for size, pale color, and clarity before a second and third sort removes any bark or dust.",
    variants: [
      { weightGrams: 50, label: "50g", price: 24 },
      { weightGrams: 100, label: "100g", price: 42 },
      { weightGrams: 250, label: "250g", price: 95 },
      { weightGrams: 1000, label: "1kg", price: 320 },
    ],
    images: [
      { kind: "macro", caption: "Royal Hojari tears in a brass tray, showing pale gold translucency.", src: "/images/resin-bowl-premium.png" },
      { kind: "scale", caption: "Royal Hojari resin tears in-hand for scale reference." },
      { kind: "packaging", caption: "Royal Hojari packed in a resealable food-grade pouch." },
    ],
    featured: true,
  },
  {
    slug: "super-grade-frankincense",
    name: "Super Grade Frankincense",
    resinType: "frankincense",
    botanicalName: "Boswellia carterii",
    region: "Cal Miskaad range, Puntland",
    grade: "Super Grade",
    gradeNote: "Large amber tears, hand-sorted twice for color consistency and purity.",
    useTags: ["burning", "wellness"],
    aromaProfile: "Warm, balsamic, with a soft woody-sweet finish.",
    suggestedUses: ["Charcoal burning", "Home fragrance", "Aromatherapy diffusion"],
    description:
      "Our most popular grade, balancing exceptional quality with everyday value. Sourced from the Cal Miskaad range and sorted twice by hand for tear size and color.",
    variants: [
      { weightGrams: 50, label: "50g", price: 16 },
      { weightGrams: 100, label: "100g", price: 28 },
      { weightGrams: 250, label: "250g", price: 62 },
      { weightGrams: 1000, label: "1kg", price: 210 },
    ],
    images: [
      { kind: "macro", caption: "Super Grade frankincense tears showing amber color and clarity.", src: "/images/frankincense-resin-display.jpg" },
      { kind: "scale", caption: "A handful of Super Grade tears for scale." },
      { kind: "packaging", caption: "Super Grade frankincense in branded Horn Heritage packaging." },
    ],
    featured: true,
  },
  {
    slug: "boswellia-frereana-maydi",
    name: "Boswellia Frereana (Maydi)",
    resinType: "frankincense",
    botanicalName: "Boswellia frereana",
    region: "Sanaag border region, Puntland",
    grade: "Premium Grade",
    gradeNote: "Distinctive brittle, citrus-scented tears, hand-picked for uniform size.",
    useTags: ["burning", "perfumery"],
    aromaProfile: "Sharp citrus and pine, brighter and less sweet than Boswellia carterii.",
    suggestedUses: ["Chewing (traditional use)", "Charcoal burning", "Perfumery top notes"],
    description:
      "Known locally as Maydi, Boswellia frereana produces a lighter, citrus-forward resin prized both for burning and for traditional chewing. Harvested from the Sanaag border region under family-held tapping rights passed through generations.",
    variants: [
      { weightGrams: 50, label: "50g", price: 18 },
      { weightGrams: 100, label: "100g", price: 32 },
      { weightGrams: 250, label: "250g", price: 70 },
      { weightGrams: 1000, label: "1kg", price: 235 },
    ],
    images: [
      { kind: "macro", caption: "Boswellia frereana tears, showing their characteristic pale, brittle texture.", src: "/images/frankincense-resin-bowl.jpg" },
      { kind: "scale", caption: "Maydi resin tears held for scale." },
      { kind: "packaging", caption: "Maydi frankincense packed and sealed for export." },
    ],
    featured: true,
  },
  {
    slug: "standard-grade-frankincense",
    name: "Standard Grade Frankincense",
    resinType: "frankincense",
    botanicalName: "Boswellia carterii",
    region: "Multiple Puntland regions",
    grade: "Standard Grade",
    gradeNote: "Mixed tear sizes, single hand-sort pass — reliable everyday quality at an accessible price.",
    useTags: ["burning"],
    aromaProfile: "Classic warm, resinous frankincense scent.",
    suggestedUses: ["Everyday burning", "Bulk incense blending"],
    description:
      "A dependable, everyday-quality frankincense for burning and blending, sorted once by hand to remove bark and major impurities.",
    variants: [
      { weightGrams: 100, label: "100g", price: 14 },
      { weightGrams: 250, label: "250g", price: 30 },
      { weightGrams: 1000, label: "1kg", price: 95 },
    ],
    images: [
      { kind: "macro", caption: "Standard Grade frankincense, mixed tear sizes.", src: "/images/frankincense-resin-lumps.jpg" },
      { kind: "scale", caption: "Standard Grade tears shown at scale in hand." },
      { kind: "packaging", caption: "Standard Grade frankincense in a resealable bag." },
    ],
    featured: false,
  },
  {
    slug: "royal-myrrh",
    name: "Royal Myrrh",
    resinType: "myrrh",
    botanicalName: "Commiphora myrrha",
    region: "Bari region, Puntland",
    grade: "Royal Grade",
    gradeNote: "Dark reddish-brown tears with high oil content, sorted for purity and minimal dust.",
    useTags: ["burning", "perfumery", "wellness"],
    aromaProfile: "Deep, smoky, and slightly medicinal with a bittersweet undertone.",
    suggestedUses: ["Charcoal burning", "Tincture & perfumery", "Topical wellness blends"],
    description:
      "Our finest myrrh grade, hand-harvested in the Bari region from mature Commiphora myrrha trees and sorted in three passes for tear size, color depth, and purity.",
    variants: [
      { weightGrams: 50, label: "50g", price: 22 },
      { weightGrams: 100, label: "100g", price: 38 },
      { weightGrams: 250, label: "250g", price: 85 },
      { weightGrams: 1000, label: "1kg", price: 290 },
    ],
    images: [
      { kind: "macro", caption: "Royal Myrrh tears, showing deep reddish-brown color.", src: "/images/myrrh-resin.png" },
      { kind: "scale", caption: "Royal Myrrh tears held for scale reference." },
      { kind: "packaging", caption: "Royal Myrrh sealed in food-grade packaging." },
    ],
    featured: true,
  },
  {
    slug: "premium-myrrh",
    name: "Premium Myrrh",
    resinType: "myrrh",
    botanicalName: "Commiphora myrrha",
    region: "Bari region, Puntland",
    grade: "Premium Grade",
    gradeNote: "Rich amber-brown tears, hand-sorted twice for consistency.",
    useTags: ["burning", "wellness"],
    aromaProfile: "Warm, earthy, and balsamic with a soft smoky finish.",
    suggestedUses: ["Charcoal burning", "Aromatherapy diffusion", "Skin-care formulation"],
    description:
      "A rich, everyday-premium myrrh, hand-sorted twice for tear consistency and cleaned of bark and dust.",
    variants: [
      { weightGrams: 50, label: "50g", price: 15 },
      { weightGrams: 100, label: "100g", price: 26 },
      { weightGrams: 250, label: "250g", price: 58 },
      { weightGrams: 1000, label: "1kg", price: 195 },
    ],
    images: [
      { kind: "macro", caption: "Premium Myrrh tears, amber-brown and glossy.", src: "/images/myrrh-resin.png" },
      { kind: "scale", caption: "Premium Myrrh shown in-hand for scale." },
      { kind: "packaging", caption: "Premium Myrrh packed for shipment." },
    ],
    featured: true,
  },
  {
    slug: "frankincense-myrrh-blend",
    name: "Frankincense & Myrrh Blend",
    resinType: "frankincense",
    botanicalName: "Boswellia carterii & Commiphora myrrha",
    region: "Puntland (blended)",
    grade: "Premium Grade",
    gradeNote: "An equal-parts blend of our Super Grade frankincense and Premium myrrh.",
    useTags: ["burning", "wellness"],
    aromaProfile: "Balanced resinous sweetness from the frankincense with deep smoky warmth from the myrrh.",
    suggestedUses: ["Ceremonial & spiritual burning", "Home fragrance"],
    description:
      "A traditional pairing, blended in-house from our Super Grade frankincense and Premium myrrh for a balanced, layered burn.",
    variants: [
      { weightGrams: 100, label: "100g", price: 27 },
      { weightGrams: 250, label: "250g", price: 60 },
      { weightGrams: 1000, label: "1kg", price: 205 },
    ],
    images: [
      { kind: "macro", caption: "Frankincense and myrrh tears mixed together.", src: "/images/blend-resin.png" },
      { kind: "scale", caption: "Frankincense and myrrh side by side, the two resins that make up the blend.", src: "/images/frankincense-myrrh-market.jpg" },
      { kind: "packaging", caption: "The blend packed in a resealable pouch." },
    ],
    featured: false,
  },
  {
    slug: "standard-myrrh",
    name: "Standard Myrrh",
    resinType: "myrrh",
    botanicalName: "Commiphora myrrha",
    region: "Multiple Puntland regions",
    grade: "Standard Grade",
    gradeNote: "Mixed tear sizes, single hand-sort pass.",
    useTags: ["burning"],
    aromaProfile: "Classic earthy, smoky myrrh scent.",
    suggestedUses: ["Everyday burning", "Bulk incense blending"],
    description:
      "A dependable, everyday myrrh for burning and blending, sorted once by hand to remove bark and major impurities.",
    variants: [
      { weightGrams: 100, label: "100g", price: 13 },
      { weightGrams: 250, label: "250g", price: 28 },
      { weightGrams: 1000, label: "1kg", price: 88 },
    ],
    images: [
      { kind: "macro", caption: "Standard Myrrh, mixed tear sizes.", src: "/images/myrrh-resin.png" },
      { kind: "scale", caption: "Standard Myrrh shown in-hand for scale." },
      { kind: "packaging", caption: "Standard Myrrh in a resealable bag." },
    ],
    featured: false,
  },
];

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getFeaturedProducts() {
  return products.filter((p) => p.featured);
}

export function getRelatedProducts(product: Product, limit = 4) {
  return products
    .filter((p) => p.slug !== product.slug && p.resinType === product.resinType)
    .slice(0, limit);
}
