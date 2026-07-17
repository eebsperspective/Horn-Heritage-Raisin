import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/shared/Container";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { PlaceholderImage } from "@/components/shared/PlaceholderImage";
import { journalPosts } from "@/content/journal";
import { breadcrumbJsonLd, jsonLdScriptProps } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Learn — Resin Education & Puntland Stories",
  description:
    "Frankincense grades, Boswellia species compared, harvest updates, and stories from Puntland — Horn Heritage's journal.",
  alternates: { canonical: "/learn" },
};

const crumbs = [{ label: "Home", href: "/" }, { label: "Learn" }];

export default function LearnIndexPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScriptProps(breadcrumbJsonLd(crumbs))}
      />

      <section className="bg-sand-100 py-14">
        <Container>
          <Breadcrumbs items={crumbs} />
          <h1 className="mt-4 font-display text-4xl text-brown-900 sm:text-5xl">Learn</h1>
          <p className="mt-4 max-w-2xl text-lg text-brown-700">
            Resin education, Puntland stories, and harvest updates — most useful before your
            first order, worth returning to after.
          </p>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {journalPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/learn/${post.slug}`}
                className="focus-ring block overflow-hidden border border-sand-300 bg-white transition-shadow hover:shadow-md"
              >
                {post.image ? (
                  <div className="relative aspect-[16/9] w-full overflow-hidden">
                    <Image src={post.image} alt={post.title} fill className="object-cover" />
                  </div>
                ) : (
                  <PlaceholderImage
                    caption={post.title}
                    kind="landscape"
                    aspect="aspect-[16/9]"
                    showCaption={false}
                  />
                )}
                <div className="p-5">
                  <span className="tracked text-xs font-semibold uppercase text-brown-900">
                    {post.category}
                  </span>
                  <h2 className="mt-1 font-display text-lg text-brown-900">{post.title}</h2>
                  <p className="mt-2 text-sm text-brown-700">{post.excerpt}</p>
                  <time dateTime={post.date} className="mt-3 block text-xs text-brown-500">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
