import { Metadata } from "next";
import Image from "next/image";
import { ContactBody } from "@/components/pages/contact/contact-body";
import { ContactSteps } from "@/components/pages/contact/contact-steps";
import { ContactFaq } from "@/components/pages/contact/contact-faq";
import { ReusableCta } from "@/components/shared/reusable-cta";

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
      <div className="relative w-full min-h-[70svh] lg:min-h-[70dvh] flex items-center justify-center">
        <Image
          src={"/images/contact-hero-bg.webp"}
          alt={"Contact page background image"}
          fill
          className="object-cover"
          priority
        />
        <div className="w-full  flex flex-col relative items-center justify-center max-w-2xl">
          <span className="text-[#A8D675] font-medium text-xs border boder-[#FFFFFF33] bg-[#FFFFFF1A] px-4 py-2 rounded-full flex items-center justify-center ">
            Get In Touch
          </span>
          <h1 className="heading-1 text-white text-center leading-[100%] mt-4 mb-5">
            We'd Love to Hear From You
          </h1>
          <p className="text-[#F7FBF6] text-base text-center">
            Reach out and we'll connect you with the right support for your
            journey.
          </p>
        </div>
      </div>

      {/* Main content section */}
      <ContactBody />

      <ContactSteps />
      <ContactFaq />
      <div className="w-11/12 mx-auto rounded-[20px] lg:rounded-[30px] overflow-hidden">
        <ReusableCta
          subtitle="Take the First Step"
          title="Your transformation starts with a single message."
          description="Don't let uncertainty hold you back. Reach out today and let us guide you toward a more intentional, healed, and purposeful life."
          buttons={[
            {
              text: "Book a Consultation",
              action: "book-consultation",
            },
            {
              text: "Explore Programs",
              href: "/programs/programs-listing",
            },
          ]}
        />
      </div>
    </div>
  );
}
