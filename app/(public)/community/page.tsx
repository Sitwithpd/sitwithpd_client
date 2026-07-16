import { Metadata } from "next";
import CommunityHero from "@/components/pages/community/community-hero";
import WhoWeWelcome from "@/components/pages/community/ho-we-welcome";
import DiscoverCommunity from "@/components/pages/community/discover-community";
import { CommunityCta } from "@/components/pages/community/community-cta";

export const metadata: Metadata = {
  title: "Join the Sit With PD Community",
  description:
    "Connect with a diverse, purpose-driven community of individuals on the journey to greater clarity, resilience, and purposeful living. Join our vibrant WhatsApp communities tailored to your interests, passions, and professional goals.",
  openGraph: {
    title: "Join the Sit With PD Community",
    description:
      "A purpose-driven community for people seeking growth, connection, and meaningful impact. Join vibrant WhatsApp groups built around shared interests, personal development, and purposeful living.",
    url: "https://sitwithpd.com/community",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sit With PD Community",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Join the Sit With PD Community",
    description:
      "Connect with like-minded individuals in a purpose-driven community focused on growth, clarity, and meaningful living.",
    images: ["/images/og-image.png"],
  },
};

export default function CommunityPage() {
  return (
    <main className="flex min-h-screen flex-col items-center  w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Sit With PD Community",
            url: "https://sitwithpd.com/community",
            description:
              "A diverse and purpose-driven community for individuals seeking growth, connection, and meaningful impact. Join our vibrant WhatsApp groups built around shared interests, personal development, and purposeful living.",
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
      <CommunityHero />
      <WhoWeWelcome />
      <DiscoverCommunity />
      <CommunityCta />
    </main>
  );
}
