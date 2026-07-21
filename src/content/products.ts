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
  grade: "Royal Grade" | "Super Grade" | "Premium Grade" | "Standard Grade";
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
      { kind: "scale", caption: "Royal Myrrh tears shown for scale reference.", src: "/images/myrrh-resin-scale.jpg" },
      { kind: "packaging", caption: "Royal Myrrh tears sorted and cleaned, ready for packaging.", src: "/images/myrrh-resin-bowl.jpg" },
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
      { kind: "macro", caption: "Myrrh resin forming on a freshly tapped tree trunk.", src: "/images/myrrh-bark-tapped.jpg" },
      { kind: "scale", caption: "A myrrh tear resin drop, showing natural color and texture.", src: "/images/myrrh-bark-drip.jpg" },
      { kind: "packaging", caption: "Myrrh tears in a stone bowl, sorted and ready for packaging.", src: "/images/myrrh-stone-bowl.jpg" },
    ],
    featured: true,
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
      { kind: "macro", caption: "Myrrh resin tears on tree bark, mixed sizes.", src: "/images/myrrh-bark-tears.jpg" },
      { kind: "scale", caption: "Myrrh resin forming on bark, shown at scale.", src: "/images/myrrh-bark-amber.jpg" },
      { kind: "packaging", caption: "Myrrh packed in bundles, ready for export.", src: "/images/export-crates.jpg" },
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
