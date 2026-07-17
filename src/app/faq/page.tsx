import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/shared/Container";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Accordion } from "@/components/shared/Accordion";
import { retailFaqs, wholesaleFaqs } from "@/content/faqs";
import { faqJsonLd, breadcrumbJsonLd, jsonLdScriptProps } from "@/lib/seo";

export const metadata: Metadata = {
  title: "FAQ — Retail & Wholesale",
  description:
    "Answers to common questions about burning resin, shipping and returns, and wholesale MOQ, samples, lead times, and export documentation.",
  alternates: { canonical: "/faq" },
};

const crumbs = [{ label: "Home", href: "/" }, { label: "FAQ" }];

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScriptProps(breadcrumbJsonLd(crumbs))}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScriptProps(faqJsonLd([...retailFaqs, ...wholesaleFaqs]))}
      />

      <section className="bg-sand-100 py-14">
        <Container>
          <Breadcrumbs items={crumbs} />
          <h1 className="mt-4 font-display text-4xl text-brown-900 sm:text-5xl">
            Frequently Asked Questions
          </h1>
        </Container>
      </section>

      <section className="py-16">
        <Container className="max-w-3xl space-y-16">
          <div>
            <div className="relative mb-8 aspect-[16/7] w-full overflow-hidden">
              <Image
                src="/images/burning-ritual-smoke.png"
                alt="Resin being placed on a lit charcoal disc in a traditional burner, with smoke rising."
                fill
                className="object-cover"
              />
            </div>
            <SectionHeading eyebrow="Retail" title="Buying & using resin" className="mb-8" />
            <Accordion items={retailFaqs} />
          </div>
          <div>
            <SectionHeading eyebrow="Wholesale" title="Ordering in bulk" className="mb-8" />
            <Accordion items={wholesaleFaqs} />
          </div>
        </Container>
      </section>
    </>
  );
}
