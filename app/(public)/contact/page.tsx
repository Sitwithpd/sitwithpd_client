import { Metadata } from "next";
import Image from "next/image";
import { ContactBody } from "@/components/pages/contact/contact-body";

export const metadata: Metadata = {
  title: "Contact Us — Get in Touch With Sit With PD",
  description:
    "Have a question about our programmes, camps, or consultations? We'd love to hear from you. Reach out to the Sit With PD team and take your next step toward clarity, growth, and purposeful living.",
  openGraph: {
    title: "Contact Sit With PD — We're Here to Help",
    description:
      "Reach out to the Sit With PD team for enquiries about our guided programmes, therapeutic camps, or one-on-one consultations. We're ready when you are.",
    url: "https://sitwithpd.com/contact",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Contact Sit With PD",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Sit With PD",
    description:
      "Questions about our programmes, camps, or consultations? Get in touch with the Sit With PD team today.",
    images: ["/images/og-image.png"],
  },
};

export default function ContactPage() {
  return (
    <div className="w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contact Sit With PD",
            url: "https://sitwithpd.com/contact",
            description:
              "Reach out to the Sit With PD team for enquiries about our guided programmes, therapeutic camps, or one-on-one consultations.",
            publisher: {
              "@type": "Organization",
              name: "Sit With PD",
              url: "https://sitwithpd.com",
              logo: {
                "@type": "ImageObject",
                url: "https://sitwithpd.com/images/primary-logo.png",
              },
              contactPoint: {
                "@type": "ContactPoint",
                email: "info@sitwithpd.com",
                contactType: "customer support",
                availableLanguage: "English",
              },
            },
          }),
        }}
      />
      {/* Hero section */}
      <div className="relative w-full min-h-[40svh] lg:min-h-[50dvh] flex items-center justify-center">
        <Image
          src={"/images/blog-hero.png"}
          alt={"Contact page background image"}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/25" />
        <div className="w-full  flex relative items-center justify-center">
          <h1 className="text-[#F9FDF9] font-semibold  text-[3.125rem] lg:text-[4rem] xl:text-[5rem] leading-[1.05] lg:text-center">
            Contact Us
          </h1>
        </div>
      </div>

      {/* Main content section */}
      <ContactBody />
    </div>
  );
}
