import Image from "next/image";
import { PlaceholderImage, type PlaceholderKind } from "@/components/shared/PlaceholderImage";
import type { ProductImage } from "@/content/products";

const KIND_MAP: Record<ProductImage["kind"], PlaceholderKind> = {
  macro: "macro",
  scale: "scale",
  packaging: "packaging",
};

export function ProductGallery({ images }: { images: ProductImage[] }) {
  return (
    <div className="grid grid-cols-3 gap-3">
      {images.map((image, index) => (
        <div
          key={image.caption}
          className={`relative aspect-square w-full overflow-hidden ${index === 0 ? "col-span-3" : ""}`}
        >
          {image.src ? (
            <Image src={image.src} alt={image.caption} fill className="object-cover" />
          ) : (
            <PlaceholderImage
              caption={image.caption}
              kind={KIND_MAP[image.kind]}
              aspect="aspect-square"
              showCaption={false}
              className="h-full"
            />
          )}
        </div>
      ))}
    </div>
  );
}
