import { OurMission } from "@/components/pages/about/our-mission";
import { CoreValues } from "@/components/pages/about/core-values";
import { TherapeuticApproach } from "@/components/pages/about/therapeutic-approach";
import { OurStory } from "@/components/pages/about/our-story";
import { AboutCta } from "@/components/pages/about/about-cta";
import { CtaBlock } from "@/components/shared/cta-block";
import { AboutHero } from "@/components/pages/about/hero";
import { Metadata } from "next";
import { SitWithPD } from "@/components/pages/about/sit-wit-pd";
import { CoreValuesNew } from "@/components/pages/about/core-values-new";
import { ReusableCta } from "@/components/shared/reusable-cta";

export const metadata: Metadata = {
  title: "About Sit With PD — Our Story, Mission & Values",
  description:
    "Learn the story behind Sit With PD — a transformational platform born from personal experience, dedicated to helping individuals discover Purpose, Direction, and Personal Discovery. Meet our mission, values, and approach.",
  openGraph: {
    title: "About Sit With PD — Our Story, Mission & Values",
    description:
      "Born from a founder's personal journey of loss and rediscovery, Sit With PD exists to help individuals reconnect with themselves and move forward with greater clarity, resilience, and purpose.",
    url: "https://sitwithpd.com/about",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "About Sit With PD",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Sit With PD — Our Story, Mission & Values",
    description:
      "Discover the story, mission, and values behind Sit With PD — a platform built on Purpose, Direction, and Personal Discovery.",
    images: ["/images/og-image.png"],
  },
};

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: "About Sit With PD — Our Story, Mission & Values",
            url: "https://sitwithpd.com/about",
            description:
              "Sit With PD is a transformational platform born from a founder's personal journey of loss and rediscovery. Our mission is to help individuals gain clarity, build resilience, and live with greater purpose through guided programmes, therapeutic experiences, and meaningful community.",
            publisher: {
              "@type": "Organization",
              name: "Sit With PD",
              url: "https://sitwithpd.com",
              logo: {
                "@type": "ImageObject",
                url: "https://sitwithpd.com/images/primary-logo.png",
              },
            },
          }),
        }}
      />
      <AboutHero />
      <SitWithPD />
      <div className="w-11/12 k mx-auto">
        <OurMission />
      </div>
      {/* <CoreValues /> */}
      <CoreValuesNew />
      <TherapeuticApproach />
      <OurStory />

      <ReusableCta
        subtitle=""
        title="Ready to Reconnect With Yourself?"
        description="Whether you're facing uncertainty, seeking clarity, or ready for deeper transformation  your journey begins with a single step."
        buttons={[
          {
            text: "Explore Programs",
            href: "/programs",
          },
          {
            text: "Book a Consultation",
            href: "/consultation#consultation-services",
          },
        ]}
      />
    </div>
  );
}
