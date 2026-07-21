import type { Metadata } from "next";
import { Suspense } from "react";
import { Container } from "@/components/shared/Container";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { ProductCard } from "@/components/shop/ProductCard";
import { ProductFilters } from "@/components/shop/ProductFilters";
import { products, type UseTag } from "@/content/products";
import { breadcrumbJsonLd, jsonLdScriptProps } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Shop Myrrh Resin",
  description:
    "Browse hand-sorted, premium-grade myrrh resin from Puntland, Somalia — filter by grade, size, and use.",
  alternates: { canonical: "/shop" },
};

const crumbs = [{ label: "Home", href: "/" }, { label: "Shop" }];

export default async function ShopPage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string; grade?: string; use?: string }>;
}) {
  const params = await searchParams;

  const filtered = products.filter((p) => {
    if (params.type && p.resinType !== params.type) return false;
    if (params.grade && p.grade !== params.grade) return false;
    if (params.use && !p.useTags.includes(params.use as UseTag)) return false;
    return true;
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScriptProps(breadcrumbJsonLd(crumbs))}
      />

      <section className="bg-sand-100 py-14">
        <Container>
          <Breadcrumbs items={crumbs} />
          <h1 className="mt-4 font-display text-4xl text-brown-900 sm:text-5xl">Shop Resin</h1>
          <p className="mt-4 max-w-2xl text-lg text-brown-700">
            Hand-sorted myrrh, graded by tear size, color, and clarity.
          </p>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <Suspense>
            <ProductFilters />
          </Suspense>
          {filtered.length === 0 ? (
            <p className="mt-10 text-brown-600">No products match those filters.</p>
          ) : (
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filtered.map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
