import Link from "next/link";
import clsx from "clsx";

type ButtonVariant = "primary" | "secondary" | "ghost";

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary:
    "bg-brown-900 text-sand-50 border border-brown-900 hover:bg-sand-50 hover:text-brown-900 focus-visible:outline-brown-900",
  secondary:
    "bg-sand-50 text-brown-900 border border-brown-900 hover:bg-brown-900 hover:text-sand-50 focus-visible:outline-brown-900",
  ghost:
    "border border-brown-900 text-brown-900 hover:bg-brown-900 hover:text-sand-50 focus-visible:outline-brown-900",
};

const baseClasses =
  "tracked inline-flex items-center justify-center gap-2 px-7 py-3 text-xs font-medium uppercase transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

export function Button({
  href,
  children,
  variant = "primary",
  className,
}: {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={clsx(baseClasses, VARIANT_CLASSES[variant], className)}
    >
      {children}
    </Link>
  );
}
