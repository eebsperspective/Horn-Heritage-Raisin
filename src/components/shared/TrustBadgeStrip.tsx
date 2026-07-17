import { trustBullets } from "@/content/site";
import { trustBadges, statsBar } from "@/content/badges";
import clsx from "clsx";

export function TrustBulletStrip({ className }: { className?: string }) {
  return (
    <div
      className={clsx(
        "border-y border-sand-300 bg-sand-100/60",
        className,
      )}
    >
      <div className="tracked mx-auto flex w-full max-w-6xl flex-wrap justify-center gap-x-10 gap-y-3 px-4 py-4 text-xs font-medium uppercase text-brown-800 sm:px-6 lg:px-8">
        {trustBullets.map((item) => (
          <span key={item.label} className="flex items-center gap-2">
            <span aria-hidden className="text-terracotta-500">
              ✔
            </span>
            {item.label}
          </span>
        ))}
      </div>
    </div>
  );
}

export function TrustBadgeStrip({ className }: { className?: string }) {
  const active = trustBadges.filter((b) => b.enabled);
  if (active.length === 0) return null;

  return (
    <div className={clsx("flex flex-wrap justify-center gap-3", className)}>
      {active.map((badge) => (
        <span
          key={badge.id}
          className="tracked border border-sand-300 bg-sand-50 px-4 py-1.5 text-xs font-semibold uppercase text-brown-700"
        >
          {badge.label}
        </span>
      ))}
    </div>
  );
}

export function StatsBar({ className }: { className?: string }) {
  // Renders nothing until statsBar.enabled is flipped true with real
  // numbers — see src/content/badges.ts. Never fill these with placeholders.
  if (!statsBar.enabled) return null;

  const stats = [
    statsBar.happyCustomers != null && {
      value: `${statsBar.happyCustomers}+`,
      label: "Happy customers",
    },
    statsBar.countriesServed != null && {
      value: `${statsBar.countriesServed}`,
      label: "Countries served",
    },
  ].filter(Boolean) as { value: string; label: string }[];

  if (stats.length === 0) return null;

  return (
    <div className={clsx("flex flex-wrap justify-center gap-8", className)}>
      {stats.map((stat) => (
        <div key={stat.label} className="text-center">
          <div className="font-display text-3xl text-brown-900">{stat.value}</div>
          <div className="text-sm text-brown-600">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
