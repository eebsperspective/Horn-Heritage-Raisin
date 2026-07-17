import { brand, contact } from "@/content/site";
import type { Product } from "@/content/products";
import type { FaqItem } from "@/content/faqs";
import type { Crumb } from "@/components/shared/Breadcrumbs";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.hornheritage.com";

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: brand.name,
    url: siteUrl,
    description: brand.descriptionShort,
    email: contact.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bosaso",
      addressRegion: "Puntland",
      addressCountry: "SO",
    },
  };
}

export function productJsonLd(product: Product) {
  const prices = product.variants.map((v) => v.price);
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    brand: { "@type": "Brand", name: brand.name },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      lowPrice: Math.min(...prices),
      highPrice: Math.max(...prices),
      offerCount: product.variants.length,
      availability: "https://schema.org/InStock",
    },
  };
}

export function faqJsonLd(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function breadcrumbJsonLd(items: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      ...(item.href ? { item: `${siteUrl}${item.href}` } : {}),
    })),
  };
}

export function jsonLdScriptProps(data: unknown) {
  return { __html: JSON.stringify(data) };
}
