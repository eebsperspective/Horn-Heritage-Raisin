import { wholesaleBuyerTypes } from "@/content/site";

export function WhoWeSupply() {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {wholesaleBuyerTypes.map((type) => (
        <span
          key={type.label}
          className="tracked border border-sand-300 bg-white px-4 py-2 text-xs font-medium uppercase text-brown-800"
        >
          {type.label}
        </span>
      ))}
    </div>
  );
}
