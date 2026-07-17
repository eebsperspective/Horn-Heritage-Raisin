import Image from "next/image";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { PlaceholderImage } from "@/components/shared/PlaceholderImage";
import { traceabilitySteps } from "@/content/site";

export function TraceabilityStrip() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeading
          eyebrow="Traceability"
          title="From tree to shipment"
          align="center"
          className="mb-12"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {traceabilitySteps.map((step, index) => (
            <div key={step.step} className="text-center">
              {step.image ? (
                <div className="relative aspect-square w-full overflow-hidden">
                  <Image src={step.image} alt={step.caption} fill className="object-cover" />
                </div>
              ) : (
                <PlaceholderImage
                  caption={step.caption}
                  kind="process"
                  aspect="aspect-square"
                  showCaption={false}
                />
              )}
              <p className="tracked mt-3 text-xs font-semibold uppercase text-terracotta-500">
                Step {index + 1}
              </p>
              <p className="font-display text-lg text-brown-900">{step.step}</p>
              <p className="mt-1 text-xs text-brown-600">{step.caption}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
