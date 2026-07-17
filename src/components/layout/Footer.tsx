import Link from "next/link";
import Image from "next/image";
import { brand, contact, footerSitemap, social } from "@/content/site";
import { NewsletterForm } from "@/components/forms/NewsletterForm";

export function Footer() {
  return (
    <footer className="border-t border-sand-300 bg-sand-100 text-brown-700">
      <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-6">
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2">
              <Image
                src="/images/favicon-source.png"
                alt=""
                width={28}
                height={28}
                className="rounded-sm"
              />
              <p className="font-display text-xl text-brown-900">{brand.name}</p>
            </div>
            <p className="mt-3 max-w-xs text-sm text-brown-600">{brand.tagline}</p>
            <div className="mt-5 flex gap-4 text-brown-700">
              <a href={social.instagram} aria-label="Instagram" className="focus-ring hover:text-brown-900">
                <IconInstagram />
              </a>
              <a href={social.facebook} aria-label="Facebook" className="focus-ring hover:text-brown-900">
                <IconFacebook />
              </a>
              <a href={social.linkedin} aria-label="LinkedIn" className="focus-ring hover:text-brown-900">
                <IconLinkedIn />
              </a>
            </div>
          </div>

          {footerSitemap.map((col) => (
            <div key={col.heading}>
              <p className="tracked text-xs font-semibold uppercase text-brown-900">
                {col.heading}
              </p>
              <ul className="mt-3 space-y-2 text-sm">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="focus-ring hover:text-brown-900">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <p className="tracked text-xs font-semibold uppercase text-brown-900">Contact</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a href={`mailto:${contact.email}`} className="focus-ring hover:text-brown-900">
                  {contact.email}
                </a>
              </li>
              <li>
                <a href={`tel:${contact.phoneHref}`} className="focus-ring hover:text-brown-900">
                  {contact.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={contact.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring hover:text-brown-900"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-sand-300 pt-8">
          <NewsletterForm className="max-w-sm" />
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-sand-300 pt-6 text-xs text-brown-600">
          <p>
            © {new Date().getFullYear()} {brand.name}. All rights reserved.
          </p>
          <div className="tracked flex flex-wrap items-center gap-3 uppercase">
            <span>Ships worldwide</span>
            <span aria-hidden>·</span>
            <span>Visa</span>
            <span>Mastercard</span>
            <span>Amex</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function IconInstagram() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
    </svg>
  );
}
function IconFacebook() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M14 9h2.5V6H14c-2 0-3.5 1.5-3.5 3.5V11H8v3h2.5v6h3v-6H16l.5-3h-3V9.8c0-.5.2-.8.8-.8Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function IconLinkedIn() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.6" />
      <path d="M7.5 10v6M7.5 7.5v.01M11.5 16v-3.5c0-1.4 1-2.2 2.2-2.2 1.2 0 1.8.8 1.8 2.2V16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
