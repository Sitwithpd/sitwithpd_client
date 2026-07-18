import { Metadata } from "next";
import ProgramsListingOverview from "@/components/pages/programs/programs-listing-overview";

export const metadata: Metadata = {
  title: "Browse All Programmes \u2014 Sit With PD",
  description:
    "Explore all available guided programmes from Sit With PD. Structured learning journeys designed to help you build emotional awareness, self-understanding, and resilience. Find the programme that's right for you and enrol today.",
  openGraph: {
    title: "Browse Sit With PD Programmes",
    description:
      "Structured guided programmes for personal growth, emotional wellness, and purposeful living. Find your programme and take the next step in your transformation journey.",
    url: "https://sitwithpd.com/programs/programs-listing",
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
    title: "Browse All Sit With PD Programmes",
    description:
      "Find your guided programme for emotional wellness, resilience, and purposeful living.",
    images: ["/images/og-image.png"],
  },
};

export default function ProgramsListing() {
  return (
    <section>
      <ProgramsListingOverview />
    </section>
  );
}
