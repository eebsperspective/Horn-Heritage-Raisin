import Link from "next/link";
import { brand, mainNav } from "@/content/site";
import { CartIndicator } from "@/components/layout/CartIndicator";
import { MobileNav } from "@/components/layout/MobileNav";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-sand-300 bg-sand-50/95 backdrop-blur">
      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-[auto_1fr_auto] items-center gap-4 px-4 py-5 sm:px-6 lg:px-8">
        <div className="md:hidden">
          <MobileNav />
        </div>
        <div className="hidden md:block" />

        <Link
          href="/"
          className="font-display justify-self-center text-center text-2xl tracking-wide text-brown-900 sm:text-3xl"
        >
          {`${brand.name} Resins`.toUpperCase().split(" ").join(" · ")}
        </Link>

        <div className="flex items-center justify-end gap-4">
          <CartIndicator />
        </div>
      </div>

      <nav aria-label="Main" className="hidden border-t border-sand-300 md:block">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-center gap-7 px-4 py-3 sm:px-6 lg:px-8">
          <ul className="tracked flex items-center gap-7 text-[11px] font-medium uppercase text-brown-800">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="focus-ring hover:text-terracotta-500">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/wholesale"
            className="tracked focus-ring border border-brown-900 bg-brown-900 px-4 py-1.5 text-[11px] font-medium uppercase text-sand-50 transition-colors hover:bg-sand-50 hover:text-brown-900"
          >
            Request Wholesale Pricing
          </Link>
        </div>
      </nav>
    </header>
  );
}
