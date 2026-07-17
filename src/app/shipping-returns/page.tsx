import type { Metadata } from "next";
import { Container } from "@/components/shared/Container";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { breadcrumbJsonLd, jsonLdScriptProps } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Shipping & Returns",
  description: "Shipping times, costs, and our returns policy for retail and wholesale orders.",
  alternates: { canonical: "/shipping-returns" },
};

const crumbs = [{ label: "Home", href: "/" }, { label: "Shipping & Returns" }];

export default function ShippingReturnsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScriptProps(breadcrumbJsonLd(crumbs))}
      />
      <Container className="max-w-3xl py-14">
        <Breadcrumbs items={crumbs} />
        <h1 className="mt-4 font-display text-4xl text-brown-900">Shipping & Returns</h1>

        <div className="prose prose-neutral mt-8 max-w-none prose-headings:font-display">
          <h2>Retail shipping</h2>
          <p>
            Retail orders are dispatched within 1–3 business days of purchase. Delivery
            typically takes 5–10 business days depending on your country. We ship worldwide.
          </p>

          <h2>Wholesale shipping</h2>
          <p>
            Wholesale orders are confirmed and dispatched within 3–7 business days. Air freight
            transit runs 3–7 days to most markets; sea freight runs 3–6 weeks depending on
            destination. Full details, including packaging and Incoterms, are on our{" "}
            <a href="/wholesale">Wholesale &amp; Export</a> page.
          </p>

          <h2>Customs & import duties</h2>
          <p>
            International orders may be subject to customs duties or import taxes levied by the
            destination country. These are the responsibility of the recipient and are not
            included in our shipping charges.
          </p>

          <h2>Returns</h2>
          <p>
            Because resin is a consumable natural product, we cannot accept returns once a
            package has shipped. If your order arrives damaged, incorrect, or otherwise not as
            described, contact us within 7 days of delivery at{" "}
            <a href="mailto:hello@hornheritage.com">hello@hornheritage.com</a> and we will make it
            right — replacement or refund, our choice, at no cost to you.
          </p>

          <h2>Wholesale claims</h2>
          <p>
            Wholesale partners should report any shipment discrepancies (quantity, grade, or
            damage) within 5 business days of delivery, referencing the order and shipment
            documentation, so we can resolve it quickly.
          </p>
        </div>
      </Container>
    </>
  );
}
