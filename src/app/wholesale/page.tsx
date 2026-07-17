import type { Metadata } from "next";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { TrustBulletStrip } from "@/components/shared/TrustBadgeStrip";
import { QuickAnswersGrid } from "@/components/wholesale/QuickAnswersGrid";
import { WhoWeSupply } from "@/components/wholesale/WhoWeSupply";
import { SampleRequestForm } from "@/components/wholesale/SampleRequestForm";
import { CatalogueDownloadForm } from "@/components/wholesale/CatalogueDownloadForm";
import { WholesaleForm } from "@/components/wholesale/WholesaleForm";
import { breadcrumbJsonLd, jsonLdScriptProps } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Wholesale & Export — Frankincense & Myrrh Supplier",
  description:
    "MOQ, shipping, lead times, packaging, and export documentation for wholesale frankincense and myrrh from Puntland, Somalia. Request pricing or a sample kit.",
  alternates: { canonical: "/wholesale" },
};

const crumbs = [{ label: "Home", href: "/" }, { label: "Wholesale & Export" }];

export default function WholesalePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScriptProps(breadcrumbJsonLd(crumbs))}
      />

      <section className="bg-sand-100 py-14">
        <Container>
          <Breadcrumbs items={crumbs} />
          <h1 className="mt-4 font-display text-4xl text-brown-900 sm:text-5xl">
            Wholesale &amp; Export
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-brown-700">
            Everything a spa owner, perfumer, or importer needs to know before reaching out —
            MOQ, shipping, lead times, packaging, and documentation, answered up front.
          </p>
        </Container>
      </section>

      <TrustBulletStrip />

      <section className="py-16">
        <Container>
          <QuickAnswersGrid />
        </Container>
      </section>

      <section className="bg-sand-100 py-16">
        <Container>
          <SectionHeading eyebrow="Who we supply" title="Built for these businesses" align="center" />
          <div className="mt-8">
            <WhoWeSupply />
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div className="border border-sand-300 bg-white p-8">
            <h2 className="font-display text-2xl text-brown-900">
              Try before you commit — request a sample kit
            </h2>
            <p className="mt-2 text-brown-700">
              Evaluate grade, aroma, and quality firsthand before placing a bulk order.
            </p>
            <div className="mt-6">
              <SampleRequestForm />
            </div>
          </div>

          <div className="border border-sand-300 bg-sand-50 p-8">
            <h2 className="font-display text-2xl text-brown-900">
              Download our wholesale catalogue
            </h2>
            <p className="mt-2 text-brown-700">
              Full product list, grades, and indicative pricing — sent straight to your inbox.
            </p>
            <div className="mt-6">
              <CatalogueDownloadForm />
            </div>
          </div>
        </Container>
      </section>

      <section id="inquiry" className="bg-sand-100 py-16">
        <Container>
          <SectionHeading
            eyebrow="Get in touch"
            title="Wholesale inquiry"
            description="Tell us about your business — we reply within 24–48 hours."
            align="center"
            className="mb-10"
          />
          <div className="mx-auto max-w-2xl border border-sand-300 bg-white p-8">
            <WholesaleForm />
          </div>
        </Container>
      </section>
    </>
  );
}
