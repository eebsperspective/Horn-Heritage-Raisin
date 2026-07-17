import clsx from "clsx";

export type PlaceholderKind =
  | "macro"
  | "scale"
  | "packaging"
  | "process"
  | "portrait"
  | "landscape";

const GRADIENTS: Record<PlaceholderKind, string> = {
  macro: "from-gold-400 via-gold-500 to-brown-700",
  scale: "from-sand-300 via-gold-400 to-brown-600",
  packaging: "from-sand-200 via-sand-300 to-gold-400",
  process: "from-brown-700 via-brown-800 to-brown-900",
  portrait: "from-terracotta-500 via-brown-700 to-brown-900",
  landscape: "from-gold-300 via-sand-300 to-brown-700",
};

export function PlaceholderImage({
  caption,
  kind = "macro",
  aspect = "aspect-[4/3]",
  showCaption = true,
  rounded = false,
  className,
}: {
  caption: string;
  kind?: PlaceholderKind;
  aspect?: string;
  showCaption?: boolean;
  rounded?: boolean;
  className?: string;
}) {
  return (
    <figure className={clsx("flex flex-col gap-2", className)}>
      <div
        role="img"
        aria-label={caption}
        className={clsx(
          "relative w-full overflow-hidden bg-gradient-to-br",
          rounded && "rounded-sm",
          GRADIENTS[kind],
          aspect,
        )}
      >
        <svg
          className="absolute inset-0 h-full w-full opacity-10"
          xmlns="http://www.w3.org/2000/svg"
        >
          <pattern
            id={`grain-${kind}`}
            width="18"
            height="18"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="2" cy="2" r="1.2" fill="white" />
          </pattern>
          <rect width="100%" height="100%" fill={`url(#grain-${kind})`} />
        </svg>
        <span className="tracked absolute bottom-2 right-2 bg-brown-900/40 px-2 py-0.5 text-[10px] uppercase text-sand-100 backdrop-blur-sm">
          Photo placeholder
        </span>
      </div>
      {showCaption && (
        <figcaption className="text-xs text-brown-600">{caption}</figcaption>
      )}
    </figure>
  );
}
