import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";

const cards = [
  {
    title: "Hand-sorted grading",
    description: "Every batch passes through human hands, sorted by tear size, color, and clarity.",
  },
  {
    title: "Higher oil content",
    description: "Puntland's climate and native Boswellia species produce resin rich in aromatic oils.",
  },
  {
    title: "Traditional harvesting",
    description: "Centuries-old tapping techniques, passed through generations of the same families.",
  },
  {
    title: "Direct from Puntland",
    description: "Full traceability — we buy directly from the families who harvest each tree.",
  },
];

export function WhyTeaserCards() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeading
          eyebrow="Why our resin"
          title="Quality competitors can't easily copy"
          align="center"
          className="mb-12"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => (
            <Link
              key={card.title}
              href="/why-our-resin"
              className="focus-ring block border border-sand-300 bg-sand-50 p-7 transition-colors hover:border-brown-900"
            >
              <h3 className="font-display text-lg text-brown-900">{card.title}</h3>
              <p className="mt-3 text-sm text-brown-700">{card.description}</p>
              <span className="tracked mt-5 inline-block text-[11px] font-semibold uppercase text-brown-900">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
