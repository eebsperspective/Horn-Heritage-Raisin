import clsx from "clsx";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <p className="tracked mb-3 text-xs font-semibold uppercase text-brown-900">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl text-brown-900 sm:text-4xl">{title}</h2>
      {description && (
        <p className="mt-3 text-base text-brown-700">{description}</p>
      )}
    </div>
  );
}
