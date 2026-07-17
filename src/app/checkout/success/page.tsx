import { Container } from "@/components/shared/Container";
import { Button } from "@/components/shared/Button";

export default function CheckoutSuccessPage() {
  return (
    <Container className="py-20 text-center">
      <p className="font-display text-3xl text-brown-900">Thank you for your order.</p>
      <p className="mx-auto mt-4 max-w-md text-brown-700">
        A confirmation email is on its way. We&apos;ll notify you as soon as your resin ships.
      </p>
      <Button href="/shop" className="mt-8">
        Continue shopping
      </Button>
    </Container>
  );
}
