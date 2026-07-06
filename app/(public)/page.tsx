import { Hero } from "@/components/pages/homepage/hero";
import { HowWeHelp } from "@/components/pages/homepage/how-we-help";
import { OurTeam } from "@/components/pages/homepage/our-team";
import { Testimonials } from "@/components/pages/homepage/testimonials";
import { Metadata } from "next";
import WhoWeAre from "@/components/pages/homepage/who-we-are";
import WhySitWithPd from "@/components/pages/homepage/why-sit-with-pd";
import Philosphy from "@/components/pages/homepage/philosphy";
import Methodology from "@/components/pages/homepage/methodology";
import Resources from "@/components/pages/homepage/resources";
import { CtaBanner } from "@/components/pages/homepage/cta-banner";
import HomeBlogs from "@/components/pages/homepage/home-blogs";

export const metadata: Metadata = {
  title: "Sit With PD — Purpose. Direction. Personal Discovery.",
  description:
    "Sit With PD Global Therapeutic Network helps individuals gain clarity, build resilience, and live with greater purpose through reflective conversations, guided programmes, immersive camps, and meaningful community. Start your journey today.",
  openGraph: {
    title: "Sit With PD — Purpose. Direction. Personal Discovery.",
    description:
      "A global therapeutic network helping you gain clarity, build resilience, and live with greater purpose. Discover guided programmes, camps, consultations, and community.",
    url: "https://sitwithpd.com",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sit With PD",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sit With PD — Purpose. Direction. Personal Discovery.",
    description:
      "Gain clarity, build resilience, and live with greater purpose. Guided programmes, camps, and one-on-one consultations.",
    images: ["/images/og-image.png"],
  },
};

export default function Home() {
  return (
    <div className="flex flex-col ">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Sit With PD",
            alternateName: "Sit With PD Global Therapeutic Network",
            url: "https://sitwithpd.com",
            logo: "https://sitwithpd.com/images/primary-logo.png",
            description:
              "Sit With PD Global Therapeutic Network is a transformational platform dedicated to helping individuals gain clarity, build resilience, and live with greater purpose through reflective conversations, therapeutic experiences, guided programmes, and meaningful community.",
            foundingDate: "2020",
            founder: {
              "@type": "Person",
              name: "Oluwatosin SAM-ABEREOLA",
              jobTitle: "Founder & Chief Purpose Officer",
            },
            areaServed: "Global",
            sameAs: [
              "https://www.youtube.com/@sitwithpd",
              "https://www.tiktok.com/@sitwithpd?_r=1&_t=ZN-95g0zMOaKzW",
              "https://www.instagram.com/sitwithpd?igsh=OHo1eHRqNTRmd2ps&utm_source=qr",
              "https://www.facebook.com/share/1DUtSP7cdu/?mibextid=wwXIfr",
            ],
          }),
        }}
      />
      <Hero />
      <div className="w-11/12 mx-auto">
        <WhoWeAre />
        <WhySitWithPd />
        <Philosphy />
        <Methodology />
        <HowWeHelp />
        <Resources />

        <OurTeam />
        <Testimonials />
        <HomeBlogs />
        <CtaBanner />
        <div className="pb-10" />
      </div>
    </div>
  );
}
