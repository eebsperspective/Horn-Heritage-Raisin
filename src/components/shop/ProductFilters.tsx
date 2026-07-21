"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";

const typeOptions = [
  { value: "", label: "All types" },
  { value: "frankincense", label: "Frankincense" },
  { value: "myrrh", label: "Myrrh" },
];

const gradeOptions = [
  { value: "", label: "All grades" },
  { value: "Royal Grade", label: "Royal Grade" },
  { value: "Super Grade", label: "Super Grade" },
  { value: "Premium Grade", label: "Premium Grade" },
  { value: "Standard Grade", label: "Standard Grade" },
];

const useOptions = [
  { value: "", label: "All uses" },
  { value: "burning", label: "Burning" },
  { value: "perfumery", label: "Perfumery" },
  { value: "wellness", label: "Wellness" },
];

export function ProductFilters() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  function setParam(key: string, value: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (value) params.set(key, value);
    else params.delete(key);
    router.push(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="flex flex-wrap gap-3">
      <FilterSelect
        label="Type"
        options={typeOptions}
        value={searchParams.get("type") ?? ""}
        onChange={(v) => setParam("type", v)}
      />
      <FilterSelect
        label="Grade"
        options={gradeOptions}
        value={searchParams.get("grade") ?? ""}
        onChange={(v) => setParam("grade", v)}
      />
      <FilterSelect
        label="Use"
        options={useOptions}
        value={searchParams.get("use") ?? ""}
        onChange={(v) => setParam("use", v)}
      />
    </div>
  );
}

function FilterSelect({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: { value: string; label: string }[];
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <label className="tracked flex items-center gap-2 text-xs uppercase text-brown-800">
      <span className="sr-only">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="focus-ring tracked border border-sand-300 bg-white px-4 py-2.5 text-xs uppercase"
        aria-label={label}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </label>
  );
}
