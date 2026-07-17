import Image from "next/image";
import { Container } from "@/components/shared/Container";
import { Button } from "@/components/shared/Button";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-brown-900">
      <div className="absolute inset-0">
        <Image
          src="/images/puntland-tree-landscape.png"
          alt="A Boswellia tree in a rocky, arid highland landscape — representative of the terrain across Puntland's harvesting regions."
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-brown-900/50" />
      <Container className="relative py-28 sm:py-36">
        <div className="max-w-2xl">
          <p className="tracked mb-5 text-xs font-medium uppercase text-sand-100">
            Direct from Puntland, Somalia
          </p>
          <h1 className="text-sand-50">
            <span className="font-display block text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
              Premium Frankincense &amp; Myrrh.
            </span>
            <span className="font-sans mt-4 block text-xl font-medium leading-snug text-sand-200 sm:text-2xl lg:text-3xl">
              Harvested in Puntland. Shipped Worldwide.
            </span>
          </h1>
          <p className="mt-7 max-w-md text-base text-sand-200">
            Hand-sorted, premium grades, sourced directly from harvesting families across
            Puntland — no middlemen, no anonymous supply chains.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Button href="/shop" variant="secondary">
              Shop Resin
            </Button>
            <Button
              href="/wholesale"
              variant="ghost"
              className="border-sand-100 text-sand-50 hover:bg-sand-50 hover:text-brown-900"
            >
              Wholesale Inquiries
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
