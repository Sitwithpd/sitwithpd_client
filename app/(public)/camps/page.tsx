import { RetreatBenefits } from "@/components/pages/camps/retreat-benefits";
import { GlimpseGallery } from "@/components/pages/camps/glimpse";
import { Testimonials } from "@/components/pages/homepage/testimonials";
import { CampHero } from "@/components/pages/camps/hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Therapeutic Camps — Pause, Reflect & Reconnect With Yourself",
  description:
    "Join Sit With PD's immersive 3-day therapeutic retreat in Lagos, Nigeria. A small-group experience in nature designed for clarity, genuine connection, and lasting personal growth. Apply now.",
  openGraph: {
    title: "Therapeutic Camps — Pause, Reflect & Reconnect | Sit With PD",
    description:
      "Three days away from the noise. In nature, with people on the same journey, guided by those who have walked it too. Small-group therapeutic retreat held in Lagos, Nigeria.",
    url: "https://sitwithpd.com/camps",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sit With PD Therapeutic Camp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Therapeutic Camps — Pause, Reflect & Reconnect",
    description:
      "An immersive 3-day therapeutic retreat for clarity, growth, and genuine connection. Held in Lagos, Nigeria at Gardenia Tropicana.",
    images: ["/images/og-image.png"],
  },
};
import CampServices from "@/components/pages/camps/camp-services";
import { Suspense } from "react";
import CardSkeletons from "@/components/skeletons/card-skeletons";
import { WhatTheCampIs } from "@/components/pages/camps/what-the camp-is";
import CampJourney from "@/components/pages/camps/camp-journey";
import { CampCACta } from "@/components/pages/camps/camp-ca";
import { CampDifference } from "@/components/pages/camps/camp-difference";
import { CampHighlights } from "@/components/pages/camps/camp-highlights";
import { CampsJourney } from "@/components/pages/camps/camps-journey";
import { CampExperience } from "@/components/pages/camps/camp-experience";
import { ReusableCta } from "@/components/shared/reusable-cta";
import { ConsultationTestimonials } from "@/components/pages/consultation/consultation-testimonials";
import { CampWho } from "@/components/pages/camps/camp-who";
import { CampTransform } from "@/components/pages/camps/camp-transform";

export default function CampsPage() {
  return (
    <div className="flex flex-col items-center  w-full overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Event",
            name: "Sit With PD Therapeutic Camp",
            description:
              "A small-group, 3-day immersive therapeutic retreat designed to help individuals pause, reflect, and reconnect with themselves. Guided experiences focused on clarity, connection, and growth.",
            url: "https://sitwithpd.com/camps",
            location: {
              "@type": "Place",
              name: "Gardenia Tropicana",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Lagos",
                addressCountry: "NG",
              },
            },
            organizer: {
              "@type": "Organization",
              name: "Sit With PD",
              url: "https://sitwithpd.com",
            },
            eventAttendanceMode:
              "https://schema.org/OfflineEventAttendanceMode",
            eventStatus: "https://schema.org/EventScheduled",
          }),
        }}
      />
      <CampHero />
      <div className="w-11/12 mx-auto">
        <CampDifference />
        {/* <WhatTheCampIs />
        <CampJourney /> */}
      </div>
      <CampHighlights />
      <CampsJourney />
      <CampExperience />
      <CampWho />
      <CampTransform />
      {/* <GlimpseGallery /> */}
      {/* <Suspense fallback={<CardSkeletons />}>
        <div className="w-11/12 mx-auto">
          <CampServices />
        </div>
      </Suspense> */}
   
     
      <ConsultationTestimonials />
      <ReusableCta
        subtitle="Begin Your Camp Journey"
        title="Your space is waiting. Just show up."
        description="You don't need to have it all figured out. Discover the camp that's right for you and take the next step toward becoming all you were created to be.."
        buttons={[
          {
            text: "Apply Now",
            href: "/contact",
          },
          {
            text: "View Community",
            href: "/community",
          },
        ]}
      />
      {/* Shared CTA Block with custom props */}
    </div>
  );
}
