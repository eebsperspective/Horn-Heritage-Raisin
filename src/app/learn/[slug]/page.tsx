import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/shared/Container";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { journalPosts, getJournalPostBySlug } from "@/content/journal";
import { breadcrumbJsonLd, jsonLdScriptProps } from "@/lib/seo";

const articleComponents = {
  "frankincense-grades-explained": () =>
    import("@/content/journal/frankincense-grades-explained.mdx"),
  "boswellia-carterii-vs-frereana": () =>
    import("@/content/journal/boswellia-carterii-vs-frereana.mdx"),
  "inside-the-harvest-puntland": () =>
    import("@/content/journal/inside-the-harvest-puntland.mdx"),
} as const;

export function generateStaticParams() {
  return journalPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getJournalPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/learn/${post.slug}` },
  };
}

export default async function JournalArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getJournalPostBySlug(slug);
  const loader = articleComponents[slug as keyof typeof articleComponents];
  if (!post || !loader) notFound();

  const { default: Article } = await loader();
  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Learn", href: "/learn" },
    { label: post.title },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScriptProps(breadcrumbJsonLd(crumbs))}
      />
      <Container className="max-w-3xl py-14">
        <Breadcrumbs items={crumbs} />
        <span className="mt-4 block tracked text-xs font-semibold uppercase text-brown-900">
          {post.category}
        </span>
        <h1 className="mt-1 font-display text-3xl text-brown-900 sm:text-4xl">{post.title}</h1>
        <time dateTime={post.date} className="mt-2 block text-sm text-brown-500">
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
        <div className="prose prose-neutral mt-8 max-w-none prose-headings:font-display prose-a:text-terracotta-500">
          <Article />
        </div>
      </Container>
    </>
  );
}
