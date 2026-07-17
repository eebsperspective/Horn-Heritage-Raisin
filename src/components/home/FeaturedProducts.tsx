import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/shared/Button";
import { ProductCard } from "@/components/shop/ProductCard";
import { getFeaturedProducts } from "@/content/products";

export function FeaturedProducts() {
  const products = getFeaturedProducts();

  return (
    <section className="bg-sand-100 py-20">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="Shop" title="Featured resin" className="mb-0" />
          <Button href="/shop" variant="ghost">
            View all resin
          </Button>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.slice(0, 4).map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
}
