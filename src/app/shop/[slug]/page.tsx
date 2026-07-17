import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { ProductGallery } from "@/components/shop/ProductGallery";
import { ProductCard } from "@/components/shop/ProductCard";
import { VariantPicker } from "@/components/shop/VariantPicker";
import { products, getProductBySlug, getRelatedProducts } from "@/content/products";
import { productJsonLd, breadcrumbJsonLd, jsonLdScriptProps } from "@/lib/seo";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return {
    title: `${product.name} — ${product.botanicalName}`,
    description: product.description,
    alternates: { canonical: `/shop/${product.slug}` },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const related = getRelatedProducts(product);
  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/shop" },
    { label: product.name },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScriptProps(productJsonLd(product))}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScriptProps(breadcrumbJsonLd(crumbs))}
      />

      <Container className="py-10">
        <Breadcrumbs items={crumbs} />

        <div className="mt-6 grid gap-10 lg:grid-cols-2">
          <ProductGallery images={product.images} />

          <div>
            <span className="tracked text-xs font-semibold uppercase text-brown-900">
              {product.grade}
            </span>
            <h1 className="mt-1 font-display text-3xl text-brown-900 sm:text-4xl">
              {product.name}
            </h1>
            <p className="mt-1 italic text-brown-500">
              {product.botanicalName} · {product.region}
            </p>

            <p className="mt-4 text-brown-700">{product.description}</p>

            <dl className="mt-6 space-y-3 border border-sand-300 bg-sand-50 p-5 text-sm">
              <div>
                <dt className="tracked text-xs font-semibold uppercase text-brown-900">What makes this grade premium</dt>
                <dd className="mt-1 text-brown-700">{product.gradeNote}</dd>
              </div>
              <div>
                <dt className="tracked text-xs font-semibold uppercase text-brown-900">Aroma profile</dt>
                <dd className="mt-1 text-brown-700">{product.aromaProfile}</dd>
              </div>
              <div>
                <dt className="tracked text-xs font-semibold uppercase text-brown-900">Suggested uses</dt>
                <dd className="mt-1 text-brown-700">{product.suggestedUses.join(" · ")}</dd>
              </div>
            </dl>

            <div className="mt-8">
              <VariantPicker product={product} />
            </div>

            <div className="mt-6 border border-sand-300 bg-sand-50 p-4 text-sm text-brown-800">
              <span className="font-semibold text-brown-900">Need bulk quantities? </span>
              <Link href="/wholesale" className="font-semibold text-terracotta-500 hover:underline">
                Visit our Wholesale &amp; Export page →
              </Link>
            </div>

            <p className="tracked mt-4 text-xs uppercase text-brown-600">
              Ships worldwide · Dispatched within 1–3 business days
            </p>
          </div>
        </div>

        {related.length > 0 && (
          <div className="mt-16">
            <h2 className="font-display text-2xl text-brown-900">You may also like</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </div>
        )}
      </Container>
    </>
  );
}
