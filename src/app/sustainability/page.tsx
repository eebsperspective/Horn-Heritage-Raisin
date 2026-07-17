import type { Metadata } from "next";
import { Container } from "@/components/shared/Container";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { SectionHeading } from "@/components/shared/SectionHeading";
import Image from "next/image";
import { PlaceholderImage } from "@/components/shared/PlaceholderImage";
import { Button } from "@/components/shared/Button";
import { breadcrumbJsonLd, jsonLdScriptProps } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Sustainability & Sourcing",
  description:
    "How Horn Heritage sustains tapping practices, partners directly with harvesting families, and tracks every batch back to its region in Puntland.",
  alternates: { canonical: "/sustainability" },
};

const crumbs = [{ label: "Home", href: "/" }, { label: "Sustainability & Sourcing" }];

const pillars: { title: string; body: string; imageCaption: string; imageSrc?: string }[] = [
  {
    title: "Sustainable tapping practices",
    body: "Harvesters rotate between trees across the season rather than repeatedly tapping the same one, giving each tree rest between harvests. Over-tapping reduces both a tree's long-term yield and its health — protecting the tree protects next season's harvest too.",
    imageCaption: "A Boswellia trunk showing a healed tapping wound and a freshly collected resin tear.",
    imageSrc: "/images/boswellia-tapping.jpg",
  },
  {
    title: "Family partnerships across Puntland",
    body: "We buy directly from harvesting families rather than through anonymous brokers or aggregators. That direct relationship means fairer, more consistent pay for harvesters, and it means we know exactly which region — and often which family — each batch came from.",
    imageCaption: "A Horn Heritage buyer meeting with a partner family in the highlands.",
  },
  {
    title: "Environmental stewardship",
    body: "Beyond tapping rotation, we prioritize working with families who harvest within established regional practices rather than expanding into new, untapped stands. We're building out more formal environmental commitments as our sourcing program matures — we'd rather state plainly what we do today than promise more than we can verify.",
    imageCaption: "A Boswellia tree in the rocky highlands, representative of the terrain across Puntland.",
    imageSrc: "/images/puntland-tree-landscape.png",
  },
];

export default function SustainabilityPage() {
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
            Sustainability &amp; Sourcing
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-brown-700">
            The practices behind every batch — how we tap, who we partner with, and how we track
            resin back to its region.
          </p>
        </Container>
      </section>

      {pillars.map((pillar, index) => (
        <section key={pillar.title} className="py-16 odd:bg-white even:bg-sand-50">
          <Container
            className={`grid items-center gap-10 lg:grid-cols-2 ${
              index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
            }`}
          >
            {pillar.imageSrc ? (
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image src={pillar.imageSrc} alt={pillar.imageCaption} fill className="object-cover" />
              </div>
            ) : (
              <PlaceholderImage caption={pillar.imageCaption} kind="process" aspect="aspect-[4/3]" />
            )}
            <div>
              <h2 className="font-display text-3xl text-brown-900">{pillar.title}</h2>
              <p className="mt-4 text-brown-700">{pillar.body}</p>
            </div>
          </Container>
        </section>
      ))}

      <section className="bg-sand-100 py-16">
        <Container className="max-w-3xl text-center">
          <SectionHeading eyebrow="Traceability" title="Batch-to-region tracking" align="center" />
          <p className="mt-4 text-brown-700">
            Every batch we sell is tagged at the point of sorting with its harvest region.
            That tag follows the batch through packaging and export documentation, so wholesale
            partners can trace any shipment back to where it was harvested. We&apos;re extending this
            system toward per-batch lab documentation (see our Wholesale &amp; Export page for
            current certification status) as that program comes online.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/wholesale">Wholesale &amp; Export</Button>
            <Button href="/about" variant="ghost">
              Read Our Story
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
