import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { PlaceholderImage, type PlaceholderKind } from "@/components/shared/PlaceholderImage";
import { GradeComparisonChart } from "@/components/shop/GradeComparisonChart";
import { Button } from "@/components/shared/Button";
import { breadcrumbJsonLd, jsonLdScriptProps } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Why Our Resin Is Better",
  description:
    "Hand-sorted grading, higher oil content, traditional harvesting, and direct sourcing from Puntland — what actually makes our frankincense and myrrh premium.",
  alternates: { canonical: "/why-our-resin" },
};

const crumbs = [{ label: "Home", href: "/" }, { label: "Why Our Resin" }];

const features: {
  title: string;
  body: string;
  imageCaption: string;
  imageKind: PlaceholderKind;
  imageSrc?: string;
  reverse?: boolean;
}[] = [
  {
    title: "Hand-sorted grading",
    body: "Every batch we sell is sorted by hand, tear by tear, over a sorting tray — not run through a mechanical sieve. Our sorters separate resin by tear size, color, and clarity, in as many as three passes for our top grade. It's slower than machine sorting. It's also the only way to consistently catch the difference between a good tear and a great one.",
    imageCaption: "Hand-sorted premium resin tears, graded for size, color, and clarity.",
    imageKind: "process",
    imageSrc: "/images/resin-bowl-premium.png",
  },
  {
    title: "Premium grades, clearly defined",
    body: "We grade on three things you can see: tear size, color, and clarity. Larger, paler, more translucent tears generally indicate a cleaner tap and slower, more careful drying. Here's how our four grades compare.",
    imageCaption: "",
    imageKind: "macro",
    reverse: true,
  },
  {
    title: "Higher oil content",
    body: "Boswellia and Commiphora trees growing in Puntland's arid, high-altitude climate produce resin with notably high aromatic oil content — the compounds responsible for aroma strength and burn quality. We're working toward publishing lab-verified oil content data per batch; for now, our grading reflects harvester and buyer experience matching tear appearance to burn quality, refined over years of sourcing from the same trees and families.",
    imageCaption: "Frankincense resin oil alongside raw resin tears.",
    imageKind: "macro",
    imageSrc: "/images/resin-oil.png",
  },
  {
    title: "Traditional harvesting",
    body: "Tapping is done by hand, using techniques passed down through generations of the same harvesting families — a shallow incision, careful timing, and rotation between trees to avoid over-tapping. This isn't nostalgia; it's what protects both resin quality and the long-term health of the trees themselves.",
    imageCaption: "A harvester using traditional tapping tools passed down through his family.",
    imageKind: "portrait",
    reverse: true,
  },
  {
    title: "Cleaner resin",
    body: "Bark fragments and dust are the two most common contaminants in commodity-grade resin. Our multi-pass hand-sorting removes both before packaging, so what you receive is resin — not resin mixed with debris.",
    imageCaption: "Sorted frankincense tears, free of bark and dust, ready for packaging.",
    imageKind: "packaging",
  },
  {
    title: "Direct sourcing",
    body: "We buy directly from harvesting families across Puntland — no brokers, no anonymous middlemen marking up an already-thin margin. That means fairer pay for harvesters and full traceability for you: we know which region, and often which family, every batch came from.",
    imageCaption: "Horn Heritage buyer meeting with a harvesting family partner in the field.",
    imageKind: "landscape",
    reverse: true,
  },
];

export default function WhyOurResinPage() {
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
            Why our resin is better
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-brown-700">
            Six reasons, told specifically — not &ldquo;high quality,&rdquo; but exactly what makes each
            batch of Horn Heritage resin different.
          </p>
        </Container>
      </section>

      {features.map((feature) => (
        <section key={feature.title} className="py-16 odd:bg-white even:bg-sand-50">
          <Container
            className={`grid items-center gap-10 lg:grid-cols-2 ${
              feature.reverse ? "lg:[&>*:first-child]:order-2" : ""
            }`}
          >
            {feature.imageSrc ? (
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={feature.imageSrc}
                  alt={feature.imageCaption || feature.title}
                  fill
                  className="object-cover"
                />
              </div>
            ) : (
              <PlaceholderImage
                caption={feature.imageCaption || feature.title}
                kind={feature.imageKind}
                aspect="aspect-[4/3]"
              />
            )}
            <div>
              <h2 className="font-display text-3xl text-brown-900">{feature.title}</h2>
              <p className="mt-4 text-brown-700">{feature.body}</p>
              {feature.title === "Premium grades, clearly defined" && (
                <div className="mt-6">
                  <GradeComparisonChart />
                </div>
              )}
            </div>
          </Container>
        </section>
      ))}

      <section className="bg-brown-900 py-16">
        <Container className="flex flex-col items-center gap-6 text-center">
          <SectionHeading
            title="See the difference for yourself"
            align="center"
            className="text-sand-50 [&_h2]:text-sand-50"
          />
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/shop">Shop Retail</Button>
            <Button
              href="/wholesale"
              variant="ghost"
              className="border-sand-100 text-sand-50 hover:bg-sand-50 hover:text-brown-900"
            >
              Request Wholesale Pricing
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
