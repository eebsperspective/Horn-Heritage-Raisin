import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { PlaceholderImage } from "@/components/shared/PlaceholderImage";

export function StoryTeaser() {
  return (
    <section className="py-20">
      <Container className="grid items-center gap-10 lg:grid-cols-2">
        <PlaceholderImage
          caption="Horn Heritage founder with a harvesting family partner, Puntland highlands."
          kind="portrait"
          aspect="aspect-[4/3]"
        />
        <div>
          <p className="tracked mb-3 text-xs font-semibold uppercase text-brown-900">
            Our story
          </p>
          <h2 className="font-display text-3xl text-brown-900 sm:text-4xl">
            Ancient traditions, brought <em className="italic">directly</em> to you
          </h2>
          <p className="mt-4 text-brown-700">
            Horn Heritage began with one goal — to connect the ancient resin traditions of
            Puntland with customers around the world, without losing what makes this resin
            different: the families, the land, and generations of harvesting knowledge behind
            every tear.
          </p>
          <Link
            href="/about"
            className="tracked mt-5 inline-block text-xs font-semibold uppercase text-brown-900 hover:text-terracotta-500"
          >
            Read our story →
          </Link>
        </div>
      </Container>
    </section>
  );
}
