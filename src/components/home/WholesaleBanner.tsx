import { Container } from "@/components/shared/Container";
import { Button } from "@/components/shared/Button";

export function WholesaleBanner() {
  return (
    <section className="bg-brown-900 py-16 text-sand-100">
      <Container className="flex flex-col items-center gap-6 text-center">
        <h2 className="font-display text-3xl text-sand-50 sm:text-4xl">
          Supplying spas, perfumers, and retailers worldwide
        </h2>
        <div className="tracked flex flex-wrap justify-center gap-x-10 gap-y-2 text-xs uppercase text-sand-300">
          <span>MOQ from 5 kg per SKU</span>
          <span>Dispatch in 3–7 business days</span>
          <span>Air &amp; sea freight worldwide</span>
        </div>
        <Button href="/wholesale" variant="secondary">
          Request Wholesale Pricing
        </Button>
      </Container>
    </section>
  );
}
