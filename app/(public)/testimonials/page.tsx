import { TestimonialsHero } from "@/components/pages/testimonials/testimonials-hero";
import { TestimonialsList } from "@/components/pages/testimonials/testimonials-list";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Real Stories of Transformation — Testimonials | Sit With PD",
  description:
    "Read genuine stories of growth, clarity, and transformation from individuals who have experienced Sit With PD's guided programmes, therapeutic camps, and one-on-one consultations. Real people. Real change.",
  openGraph: {
    title: "Transformation Stories — Sit With PD Testimonials",
    description:
      "Hear from real people who have experienced Sit With PD's programmes, therapeutic camps, and consultations. Stories of purpose discovered, resilience built, and lives transformed.",
    url: "https://sitwithpd.com/testimonials",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sit With PD Testimonials",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Real Stories of Transformation | Sit With PD",
    description:
      "Hear from people who have discovered purpose, built resilience, and transformed their lives through Sit With PD's programmes, camps, and consultations.",
    images: ["/images/og-image.png"],
  },
};

export default function TestimonialsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center w-full">
      <TestimonialsHero />
      <TestimonialsList />
    </main>
  );
}
