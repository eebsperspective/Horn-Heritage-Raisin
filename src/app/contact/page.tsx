import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { ContactForm } from "@/components/forms/ContactForm";
import { contact } from "@/content/site";
import { breadcrumbJsonLd, jsonLdScriptProps } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Horn Heritage — email, phone, WhatsApp, or our contact form. Wholesale buyers, use our dedicated wholesale inquiry form.",
  alternates: { canonical: "/contact" },
};

const crumbs = [{ label: "Home", href: "/" }, { label: "Contact" }];

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScriptProps(breadcrumbJsonLd(crumbs))}
      />

      <section className="bg-sand-100 py-14">
        <Container>
          <Breadcrumbs items={crumbs} />
          <h1 className="mt-4 font-display text-4xl text-brown-900 sm:text-5xl">Contact</h1>
        </Container>
      </section>

      <section className="py-16">
        <Container className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <ContactForm />
          </div>

          <div className="space-y-6">
            <div className="border border-sand-300 bg-sand-50 p-6">
              <h2 className="font-display text-lg text-brown-900">Reach us directly</h2>
              <ul className="mt-4 space-y-3 text-sm text-brown-700">
                <li>
                  <span className="block font-medium text-brown-900">Email</span>
                  <a href={`mailto:${contact.email}`} className="hover:underline">
                    {contact.email}
                  </a>
                </li>
                <li>
                  <span className="block font-medium text-brown-900">Phone</span>
                  <a href={`tel:${contact.phoneHref}`} className="hover:underline">
                    {contact.phoneDisplay}
                  </a>
                </li>
                <li>
                  <span className="block font-medium text-brown-900">WhatsApp</span>
                  <a
                    href={contact.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-terracotta-500 hover:underline"
                  >
                    Chat with us →
                  </a>
                </li>
                <li>
                  <span className="block font-medium text-brown-900">Hours</span>
                  {contact.hoursLine}
                </li>
                <li>
                  <span className="block font-medium text-brown-900">Location</span>
                  {contact.locationLine}
                </li>
              </ul>
            </div>

            <div className="border border-sand-300 bg-white p-6">
              <p className="text-sm text-brown-800">
                <span className="font-semibold text-brown-900">Wholesale inquiry?</span> Use our
                dedicated form for faster routing to our wholesale team.
              </p>
              <Link
                href="/wholesale#inquiry"
                className="mt-2 inline-block text-sm font-semibold text-terracotta-500 hover:underline"
              >
                Go to Wholesale form →
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
