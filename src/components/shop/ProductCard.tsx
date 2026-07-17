import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/content/products";
import { PlaceholderImage } from "@/components/shared/PlaceholderImage";

export function ProductCard({ product }: { product: Product }) {
  const startingPrice = Math.min(...product.variants.map((v) => v.price));
  const primaryImage = product.images[0];

  return (
    <Link href={`/shop/${product.slug}`} className="focus-ring group block text-center">
      {primaryImage?.src ? (
        <div className="relative aspect-square w-full overflow-hidden">
          <Image
            src={primaryImage.src}
            alt={primaryImage.caption}
            fill
            className="object-cover"
          />
        </div>
      ) : (
        <PlaceholderImage
          caption={primaryImage?.caption ?? product.name}
          kind="macro"
          aspect="aspect-square"
          showCaption={false}
        />
      )}
      <div className="mt-4">
        <span className="tracked block text-xs font-semibold uppercase text-brown-900">
          {product.grade}
        </span>
        <h3 className="tracked mt-1 text-xs uppercase text-brown-700 group-hover:text-terracotta-500">
          {product.name}
        </h3>
        <p className="mt-2 text-sm text-brown-900">From ${startingPrice}</p>
      </div>
    </Link>
  );
}
