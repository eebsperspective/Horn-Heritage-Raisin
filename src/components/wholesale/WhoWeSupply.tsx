import { wholesaleBuyerTypes } from "@/content/site";

export function WhoWeSupply() {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {wholesaleBuyerTypes.map((type) => (
        <span
          key={type.label}
          className="tracked flex items-center gap-2 border border-sand-300 bg-white px-4 py-2 text-xs font-medium uppercase text-brown-800"
        >
          <span aria-hidden className="text-terracotta-500">
            ✔
          </span>
          {type.label}
        </span>
      ))}
    </div>
  );
}
