import { Hero } from "@/components/pages/consultation/hero";
import { ConsultationServices } from "@/components/pages/consultation/consultation-services";
import { AreasOfSupport } from "@/components/pages/consultation/areas-of-support";
import { ProcessCards } from "@/components/shared/process-cards";
import { Testimonials } from "@/components/pages/homepage/testimonials";
import { ConsultationCta } from "@/components/pages/consultation/consultation-cta";
import { Metadata } from "next";
import Resources from "@/components/pages/homepage/resources";
import { ConsultationHighlights } from "@/components/pages/consultation/consultation-highlights";
import { ConsultationFaq } from "@/components/pages/consultation/consultation-faq";

export const metadata: Metadata = {
  title: "One-on-One Professional Consultation",
  description:
    "Book a confidential one-on-one therapeutic consultation with experienced professionals at Sit With PD. Receive personalised guidance on emotional healing, personal development, life transitions, and purposeful living.",
  openGraph: {
    title: "One-on-One Professional Consultation | Sit With PD",
    description:
      "Get personalised guidance from experienced professionals in a confidential and supportive environment. Areas include emotional healing, personal development, life transitions, and relationship guidance.",
    url: "https://sitwithpd.com/consultation",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sit With PD Consultation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "One-on-One Professional Consultation | Sit With PD",
    description:
      "Personalised therapeutic consultations covering emotional healing, life transitions, personal development, and relationship guidance.",
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
            name: "One-on-One Professional Consultation",
            url: "https://sitwithpd.com/consultation",
            provider: {
              "@type": "Organization",
              name: "Sit With PD",
              url: "https://sitwithpd.com",
            },
            description:
              "Personalised one-on-one therapeutic consultations in a confidential and supportive environment, covering emotional healing, personal development, life transitions, relationship guidance, and ongoing support.",
            areaServed: "Global",
            serviceType: "Therapeutic Consultation",
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Consultation Areas",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Initial Assessment",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Emotional Healing",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Personal Development",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: { "@type": "Service", name: "Life Transitions" },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Relationship Guidance",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: { "@type": "Service", name: "Ongoing Support" },
                },
              ],
            },
          }),
        }}
      />
      <Hero />
      {/* <div className="w-11/12 mx-auto">
        <AreasOfSupport />
        <ProcessCards />
        <Resources />
        <ConsultationServices />
      </div> */}
      <ConsultationHighlights />
      <ConsultationFaq />

      {/* Testimonials section */}
      <div className="w-full ">
        <Testimonials />
      </div>

      {/* <ConsultationCta /> */}
    </main>
  );
}
