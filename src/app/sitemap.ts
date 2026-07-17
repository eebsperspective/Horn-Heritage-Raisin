import type { MetadataRoute } from "next";
import { products } from "@/content/products";
import { journalPosts } from "@/content/journal";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.hornheritage.com";

const staticRoutes = [
  "",
  "/shop",
  "/wholesale",
  "/why-our-resin",
  "/about",
  "/sustainability",
  "/faq",
  "/contact",
  "/learn",
  "/shipping-returns",
  "/privacy-policy",
  "/terms-of-service",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries = staticRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: now,
  }));

  const productEntries = products.map((p) => ({
    url: `${siteUrl}/shop/${p.slug}`,
    lastModified: now,
  }));

  const journalEntries = journalPosts.map((p) => ({
    url: `${siteUrl}/learn/${p.slug}`,
    lastModified: new Date(p.date),
  }));

  return [...staticEntries, ...productEntries, ...journalEntries];
}
