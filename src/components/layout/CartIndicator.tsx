"use client";

import Link from "next/link";
import { useCart } from "@/lib/cart";

export function CartIndicator() {
  const { count } = useCart();
  return (
    <Link
      href="/cart"
      aria-label={`View cart, ${count} item${count === 1 ? "" : "s"}`}
      className="focus-ring relative flex items-center text-brown-900 hover:text-terracotta-600"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M6 6h15l-1.5 9h-12L6 6Zm0 0L5 3H2"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="9" cy="20" r="1.4" fill="currentColor" />
        <circle cx="18" cy="20" r="1.4" fill="currentColor" />
      </svg>
      {count > 0 && (
        <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-terracotta-500 px-1 text-[11px] font-semibold text-white">
          {count}
        </span>
      )}
    </Link>
  );
}
