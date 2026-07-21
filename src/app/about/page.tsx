import type { Metadata } from "next";
import { Container } from "@/components/shared/Container";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { SectionHeading } from "@/components/shared/SectionHeading";
import Image from "next/image";
import { PuntlandMap } from "@/components/shared/PuntlandMap";
import { Button } from "@/components/shared/Button";
import { breadcrumbJsonLd, jsonLdScriptProps } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "How Horn Heritage began — connecting the ancient resin traditions of Puntland with customers around the world, one family partnership at a time.",
  alternates: { canonical: "/about" },
};

const crumbs = [{ label: "Home", href: "/" }, { label: "Our Story" }];

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScriptProps(breadcrumbJsonLd(crumbs))}
      />

      <section className="bg-sand-100 py-14">
        <Container>
          <Breadcrumbs items={crumbs} />
          <h1 className="mt-4 font-display text-4xl text-brown-900 sm:text-5xl">Our Story</h1>
        </Container>
      </section>

      <section className="py-16">
        <Container className="max-w-3xl">
          <p className="font-display text-2xl leading-relaxed text-brown-900">
            Horn Heritage began with one goal — to connect the ancient resin traditions of
            Puntland with customers around the world, without losing what makes this resin
            different in the process.
          </p>
          <p className="mt-6 text-brown-700">
            It started with a simple frustration: resin leaving Puntland, passing through three
            or four hands before it reached a buyer, with each middleman taking a cut and adding
            distance between the harvester and the customer. The families doing the harvesting —
            the people who actually knew the trees, the seasons, the difference between a good
            tear and a great one — were the ones least connected to where their resin ended up,
            and least rewarded for its quality.
          </p>
          <p className="mt-4 text-brown-700">
            Horn Heritage was founded to close that gap: buying directly from harvesting families
            across Puntland, grading transparently, and shipping straight to the businesses and
            individuals who value knowing exactly where their myrrh came from.
            Our first shipment left Bosaso with a handful of partner families and a few dozen
            kilograms of resin. Every shipment since has built on those same relationships.
          </p>
        </Container>
      </section>

      <section className="bg-sand-50 py-16">
        <Container className="grid items-center gap-10 lg:grid-cols-2">
          <div className="relative aspect-[4/3] w-full overflow-hidden">
            <Image
              src="/images/puntland-camel-herding.jpg"
              alt="Camel herding in the Puntland desert, the working landscape behind every harvest."
              fill
              className="object-cover"
            />
          </div>
          <div>
            <SectionHeading eyebrow="The people" title="Built on real partnerships" />
            <p className="mt-4 text-brown-700">
              Every batch we sell can be traced back to a specific harvesting region and, in most
              cases, a specific partner family — many of whom have tapped the same trees for
              generations. We&apos;re gradually building out a fuller directory of our partner
              families here, with names and regions shared with their permission.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <SectionHeading eyebrow="The place" title="Puntland" align="center" className="mb-10" />
          <PuntlandMap />
        </Container>
      </section>

      <section className="bg-sand-50 py-16">
        <Container className="grid items-center gap-10 lg:grid-cols-2">
          <div className="lg:order-2">
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src="/images/puntland-tree-landscape.png"
                alt="A rocky highland landscape, representative of the terrain across Puntland."
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="lg:order-1">
            <SectionHeading eyebrow="The heritage" title="A trade centuries in the making" />
            <p className="mt-4 text-brown-700">
              Frankincense and myrrh have moved out of the Horn of Africa for thousands of years —
              along ancient overland routes and Red Sea trade lanes connecting Puntland to Egypt,
              Arabia, and beyond. The harvesting techniques used today were refined over that same
              span: which trees to tap, when in the season to tap them, and how long to let resin
              cure before it&apos;s ready to sort. It&apos;s this inherited knowledge, more than any single
              process, that we&apos;re trying to carry forward.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container className="max-w-3xl text-center">
          <SectionHeading eyebrow="The mission" title="Fair partnerships, real quality" align="center" />
          <p className="mt-4 text-brown-700">
            Our mission is straightforward: pay harvesting families fairly for the quality of
            their work, grade honestly, and bring Puntland&apos;s resin to the world under its own
            name — not as an anonymous ingredient, but as a traceable product buyers can stand
            behind.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/wholesale">Request Wholesale Pricing</Button>
            <Button href="/shop" variant="ghost">
              Shop Resin
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
