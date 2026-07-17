"use client";

import { useState } from "react";
import Link from "next/link";
import { mainNav } from "@/content/site";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((o) => !o)}
        className="focus-ring flex h-10 w-10 items-center justify-center text-brown-900"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
          {open ? (
            <path
              d="M6 6l12 12M18 6L6 18"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          ) : (
            <path
              d="M4 7h16M4 12h16M4 17h16"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          )}
        </svg>
      </button>
      {open && (
        <div
          id="mobile-nav-panel"
          className="absolute inset-x-0 top-full border-t border-sand-300 bg-sand-50 px-4 py-4 shadow-lg"
        >
          <nav aria-label="Mobile">
            <ul className="flex flex-col gap-1">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="tracked focus-ring block px-3 py-2.5 text-sm font-medium uppercase text-brown-900 hover:bg-sand-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  href="/wholesale"
                  onClick={() => setOpen(false)}
                  className="tracked focus-ring block border border-brown-900 bg-brown-900 px-4 py-2.5 text-center text-xs font-medium uppercase text-white hover:bg-sand-50 hover:text-brown-900"
                >
                  Request Wholesale Pricing
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
}
