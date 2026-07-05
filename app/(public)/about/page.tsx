import { OurMission } from "@/components/pages/about/our-mission";
import { CoreValues } from "@/components/pages/about/core-values";
import { TherapeuticApproach } from "@/components/pages/about/therapeutic-approach";
import { OurStory } from "@/components/pages/about/our-story";
import { AboutCta } from "@/components/pages/about/about-cta";
import { CtaBlock } from "@/components/shared/cta-block";
import { AboutHero } from "@/components/pages/about/hero";
import { Metadata } from "next";
import { SitWithPD } from "@/components/pages/about/sit-wit-pd";

export const metadata: Metadata = {
  title: "About Our Therapeutic Vision",
  description:
    "Learn about Sit-With-PD's mission, our presence-based therapeutic approach, and our story of building a global network for emotional transformation.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <AboutHero />
      <div className="w-11/12 k mx-auto">
      <SitWithPD/>
        <OurMission />
      </div>
      <CoreValues />
      <div className="w-11/12 mx-auto">
        <TherapeuticApproach />
        <OurStory />
      </div>
      <CtaBlock
        title="Ready to Reconnect With Yourself?"
        subtext="Whether you're facing uncertainty, seeking clarity, or ready for deeper transformation  your journey begins with a single step."
        firstLink={{ text: "Explore programs" ,href:"/programs" }}
        secondLink={{ text: "Book a Consultation", href:"/consultation#consultation-cta" }}
      />
    </div>
  );
}
