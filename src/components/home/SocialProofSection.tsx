import { Container } from "@/components/shared/Container";
import { TrustBadgeStrip, StatsBar } from "@/components/shared/TrustBadgeStrip";
import { reviewsSectionEnabled, testimonials } from "@/content/badges";

export function SocialProofSection() {
  return (
    <section className="bg-sand-100 py-16">
      <Container className="space-y-8 text-center">
        <TrustBadgeStrip />
        <StatsBar />
        {reviewsSectionEnabled && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <blockquote key={t.name} className="border border-sand-300 bg-white p-6 text-left">
                <p className="text-brown-800">&ldquo;{t.quote}&rdquo;</p>
                <footer className="mt-3 text-sm font-semibold text-brown-900">
                  {t.name}
                  <span className="font-normal text-brown-600">
                    {" "}
                    — {t.role}
                    {t.company ? `, ${t.company}` : ""}
                  </span>
                </footer>
              </blockquote>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
