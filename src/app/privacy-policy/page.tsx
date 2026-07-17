import type { Metadata } from "next";
import { Container } from "@/components/shared/Container";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { contact } from "@/content/site";
import { breadcrumbJsonLd, jsonLdScriptProps } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Horn Heritage collects, uses, and protects your personal data.",
  alternates: { canonical: "/privacy-policy" },
};

const crumbs = [{ label: "Home", href: "/" }, { label: "Privacy Policy" }];

export default function PrivacyPolicyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScriptProps(breadcrumbJsonLd(crumbs))}
      />
      <Container className="max-w-3xl py-14">
        <Breadcrumbs items={crumbs} />
        <h1 className="mt-4 font-display text-4xl text-brown-900">Privacy Policy</h1>
        <p className="mt-2 text-sm text-brown-500">Last updated: February 2026</p>

        <div className="prose prose-neutral mt-8 max-w-none prose-headings:font-display">
          <h2>What we collect</h2>
          <p>
            We collect information you provide directly: your name, email, phone/WhatsApp
            number, company details, shipping address, and any message content, when you submit
            a form (contact, wholesale inquiry, sample request, catalogue download, newsletter
            signup) or place an order.
          </p>

          <h2>How we use it</h2>
          <ul>
            <li>To respond to inquiries and fulfill orders.</li>
            <li>To send order confirmations, shipping updates, and requested downloads.</li>
            <li>To send newsletter updates, only if you opted in.</li>
            <li>To maintain internal records of wholesale relationships.</li>
          </ul>

          <h2>How we store it</h2>
          <p>
            Form submissions are stored securely and are accessible only to Horn Heritage staff
            who need them to respond to your inquiry or fulfill your order. We do not sell your
            personal data to third parties.
          </p>

          <h2>Payment information</h2>
          <p>
            Card payments are processed by Stripe; we do not store your full card details on our
            servers.
          </p>

          <h2>Your rights (EU/UK/GDPR)</h2>
          <p>
            If you are located in the EU or UK, you have the right to access, correct, or delete
            your personal data, and to withdraw consent to marketing emails at any time by
            using the unsubscribe link or contacting us directly.
          </p>

          <h2>Cookies</h2>
          <p>
            We use minimal, functional cookies (e.g., to remember your cart) and analytics
            cookies to understand site usage. You can control cookies through your browser
            settings.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about this policy or your data can be sent to{" "}
            <a href={`mailto:${contact.email}`}>{contact.email}</a>.
          </p>
        </div>
      </Container>
    </>
  );
}
