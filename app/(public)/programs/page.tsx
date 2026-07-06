import { ProgramHero } from "@/components/pages/programs/hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guided Programmes — Heal. Grow. Transform.",
  description:
    "Explore Sit With PD's structured therapeutic programmes designed to build emotional awareness, self-understanding, and resilience at your own pace. Guided by experienced facilitators. Enrol today.",
  openGraph: {
    title: "Guided Programmes — Heal. Grow. Transform. | Sit With PD",
    description:
      "Structured programmes and self-paced courses to help you understand your emotions, build resilience, and find stability through change. Guided by Sit With PD's experienced facilitators.",
    url: "https://sitwithpd.com/programs",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sit With PD Programmes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Guided Programmes — Heal. Grow. Transform.",
    description:
      "Self-paced structured programmes to help you gain clarity, build resilience, and transform through purpose-led personal growth.",
    images: ["/images/og-image.png"],
  },
};
import { ProgramOverview } from "@/components/pages/programs/program-overview";
import { Testimonials } from "@/components/pages/homepage/testimonials";
import { CtaBlock } from "@/components/shared/cta-block";
import ProgramGrowth from "@/components/pages/programs/program-growth";
import { ProgramCta } from "@/components/pages/programs/program-cta";
import Resources from "@/components/pages/homepage/resources";
import PowerOfPresence from "@/components/pages/programs/power-of-presence";

export default function ProgramsPage() {
  return (
    <main className="flex flex-col items-center w-full overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Sit With PD Guided Programmes",
            description:
              "Structured therapeutic programmes to help individuals build emotional awareness, self-understanding, and resilience. Purpose, Direction, and Personal Discovery at your own pace.",
            url: "https://sitwithpd.com/programs",
            provider: {
              "@type": "Organization",
              name: "Sit With PD",
              url: "https://sitwithpd.com",
            },
            numberOfItems: 3,
          }),
        }}
      />
      <ProgramHero />
      <div className="w-11/12 mx-auto">
        <ProgramOverview />
        <ProgramGrowth />
        <PowerOfPresence />
      </div>
      <ProgramCta />

      <div className="w-full bg-white">
        <Testimonials />
      </div>
      <div className="w-11/12 mx-auto mb-10">
        <Resources showBtn={false} />
      </div>
    </main>
  );
}
