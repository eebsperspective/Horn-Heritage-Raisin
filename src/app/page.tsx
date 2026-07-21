import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { TrustBulletStrip } from "@/components/shared/TrustBadgeStrip";
import { WhyTeaserCards } from "@/components/home/WhyTeaserCards";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { TraceabilityStrip } from "@/components/home/TraceabilityStrip";
import { WholesaleBanner } from "@/components/home/WholesaleBanner";
import { StoryTeaser } from "@/components/home/StoryTeaser";
import { SocialProofSection } from "@/components/home/SocialProofSection";

export const metadata: Metadata = {
  title: "Premium Myrrh from Puntland, Somalia",
  description:
    "Hand-sorted, premium-grade myrrh, sourced directly from harvesting families in Puntland, Somalia. Wholesale and retail, shipped worldwide.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBulletStrip />
      <WhyTeaserCards />
      <FeaturedProducts />
      <TraceabilityStrip />
      <WholesaleBanner />
      <StoryTeaser />
      <SocialProofSection />
    </>
  );
}
