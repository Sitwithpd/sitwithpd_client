import { Hero } from "@/components/pages/consultation/hero";
import { ConsultationServices } from "@/components/pages/consultation/consultation-services";
import { AreasOfSupport } from "@/components/pages/consultation/areas-of-support";
import { ProcessCards } from "@/components/shared/process-cards";
import { ConsultationCta } from "@/components/pages/consultation/consultation-cta";
import { Metadata } from "next";
import Resources from "@/components/pages/homepage/resources";
import { ConsultationHighlights } from "@/components/pages/consultation/consultation-highlights";
import { ConsultationFaq } from "@/components/pages/consultation/consultation-faq";
import { ConsultationApproach } from "@/components/pages/consultation/consultation-approach";
import { WhoCanBook } from "@/components/pages/consultation/who-can-book";
import { WhatToExpect } from "@/components/pages/consultation/what-to-expect";
import { ConsultationTestimonials } from "@/components/pages/consultation/consultation-testimonials";
import { WhyBookConsultation } from "@/components/pages/consultation/why-book-consultation";

export const metadata: Metadata = {
  title: "Professional Consultation — Confidential, Practical & Personalised",
  description:
    "Book a one-on-one consultation with Sit With PD and gain clarity, develop practical strategies, and move forward with confidence. Available for individuals, executives, teams, and organisations — online and in-person.",
  keywords: [
    "professional consultation",
    "one-on-one consultation",
    "executive consultation",
    "business strategy session",
    "personal development consultation",
    "leadership coaching Nigeria",
    "online consultation",
    "organisational consultation",
    "Sit With PD consultation",
    "confidential consultation",
    "life coaching session",
  ],
  openGraph: {
    title: "Professional Consultation | Sit With PD",
    description:
      "A confidential, solution-focused space to explore challenges, uncover opportunities, and develop practical strategies. Available for individuals, entrepreneurs, executives, teams, and organisations.",
    url: "https://sitwithpd.com/consultation",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sit With PD Professional Consultation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Consultation | Sit With PD",
    description:
      "Confidential, practical consultations for individuals, executives, and organisations. Gain clarity and move forward with purpose.",
    images: ["/images/og-image.png"],
  },
};

export default function ConsultationPage() {
  return (
    <main className="flex min-h-screen flex-col items-center  w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Professional Consultation — Sit With PD",
            url: "https://sitwithpd.com/consultation",
            provider: {
              "@type": "Organization",
              name: "Sit With PD",
              url: "https://sitwithpd.com",
            },
            description:
              "Confidential, solution-focused consultations for individuals, executives, entrepreneurs, teams, and organisations. Areas include personal development, leadership, business strategy, career growth, purpose and life direction, and organisational development.",
            areaServed: "Global",
            serviceType: "Professional Consultation",
            availableChannel: {
              "@type": "ServiceChannel",
              serviceType: "Online and In-Person",
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Consultation Service Areas",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Personal Development",
                    description:
                      "Build confidence, clarify goals, and strengthen your mindset.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Leadership & Executive Development",
                    description:
                      "Enhance leadership effectiveness, communication, and strategic thinking.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Business & Entrepreneurship",
                    description:
                      "Practical guidance on strategy, growth, and sustainable success.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Career & Professional Growth",
                    description:
                      "Navigate career transitions and position yourself for long-term success.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Organisational & Team Development",
                    description:
                      "Support for leadership, culture, collaboration, and performance.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Purpose & Life Direction",
                    description:
                      "Gain clarity about vision, values, and priorities.",
                  },
                },
              ],
            },
          }),
        }}
      />
      <Hero />
      <WhyBookConsultation />

      {/* <div className="w-11/12 mx-auto">
        <AreasOfSupport />
        <ProcessCards />
        <Resources />
        </div> */}
      <ConsultationHighlights />
      <ConsultationApproach />
      <WhatToExpect />
      <WhoCanBook />
      <ConsultationServices />
      <ConsultationTestimonials />
      <ConsultationFaq />
      <ConsultationCta />
    </main>
  );
}
