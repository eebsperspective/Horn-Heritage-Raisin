const markers = [
  { label: "Sanaag border region", sub: "Boswellia frereana (Maydi)", x: 60, y: 60 },
  { label: "Karkaar mountains", sub: "Boswellia carterii", x: 150, y: 90 },
  { label: "Cal Miskaad range", sub: "Boswellia carterii", x: 230, y: 70 },
  { label: "Bari region", sub: "Commiphora myrrha", x: 320, y: 110 },
  { label: "Bosaso", sub: "Port — export dispatch", x: 260, y: 40 },
];

export function PuntlandMap() {
  return (
    <figure className="border border-sand-300 bg-sand-50 p-6">
      <svg viewBox="0 0 400 220" className="w-full" role="img" aria-label="Illustrative map of Horn Heritage harvest regions across Puntland">
        <path
          d="M20 130 C 60 60, 160 40, 240 30 C 300 25, 360 60, 380 100 C 360 150, 300 180, 220 190 C 140 200, 60 190, 20 130 Z"
          fill="var(--color-sand-200)"
          stroke="var(--color-gold-500)"
          strokeWidth="1.5"
        />
        {markers.map((m) => (
          <g key={m.label}>
            <circle cx={m.x} cy={m.y} r="5" fill="var(--color-terracotta-500)" />
            <circle cx={m.x} cy={m.y} r="9" fill="none" stroke="var(--color-terracotta-500)" strokeWidth="1" opacity="0.5" />
          </g>
        ))}
      </svg>
      <ul className="mt-4 grid grid-cols-1 gap-2 text-sm sm:grid-cols-2">
        {markers.map((m) => (
          <li key={m.label} className="flex items-start gap-2">
            <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-terracotta-500" />
            <span>
              <span className="font-medium text-brown-900">{m.label}</span>{" "}
              <span className="text-brown-600">— {m.sub}</span>
            </span>
          </li>
        ))}
      </ul>
      <figcaption className="mt-3 text-xs text-brown-500">
        Illustrative map of our harvest regions across Puntland — not to scale.
      </figcaption>
    </figure>
  );
}
