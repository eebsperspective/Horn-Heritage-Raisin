import type { Metadata } from "next";
import { Container } from "@/components/shared/Container";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { contact } from "@/content/site";
import { breadcrumbJsonLd, jsonLdScriptProps } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms governing use of the Horn Heritage website and orders placed with us.",
  alternates: { canonical: "/terms-of-service" },
};

const crumbs = [{ label: "Home", href: "/" }, { label: "Terms of Service" }];

export default function TermsOfServicePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScriptProps(breadcrumbJsonLd(crumbs))}
      />
      <Container className="max-w-3xl py-14">
        <Breadcrumbs items={crumbs} />
        <h1 className="mt-4 font-display text-4xl text-brown-900">Terms of Service</h1>
        <p className="mt-2 text-sm text-brown-500">Last updated: February 2026</p>

        <div className="prose prose-neutral mt-8 max-w-none prose-headings:font-display">
          <h2>Orders</h2>
          <p>
            By placing a retail or wholesale order, you agree to pay the listed price plus
            applicable shipping and any customs duties. Wholesale orders are subject to the
            minimum order quantities, lead times, and payment terms described on our{" "}
            <a href="/wholesale">Wholesale &amp; Export</a> page.
          </p>

          <h2>Product descriptions</h2>
          <p>
            We describe grades, aroma profiles, and origins to the best of our knowledge based on
            direct sourcing relationships. As a natural product, resin varies slightly batch to
            batch in color and tear size.
          </p>

          <h2>Payment</h2>
          <p>
            Retail payments are processed securely via Stripe. Wholesale payment terms (deposit,
            balance, net terms) are agreed per order as described on the Wholesale page.
          </p>

          <h2>Shipping & returns</h2>
          <p>
            See our <a href="/shipping-returns">Shipping &amp; Returns</a> page for full details.
          </p>

          <h2>Limitation of liability</h2>
          <p>
            Horn Heritage is not liable for indirect or consequential damages arising from the
            use of our products. Our resin is sold for burning, fragrance, and traditional use;
            it is not sold as a medical product, and no medical claims are made.
          </p>

          <h2>Governing law</h2>
          <p>These terms are governed by the laws applicable in our place of business.</p>

          <h2>Contact</h2>
          <p>
            Questions about these terms can be sent to{" "}
            <a href={`mailto:${contact.email}`}>{contact.email}</a>.
          </p>
        </div>
      </Container>
    </>
  );
}
