import { TestimonialsHero } from "@/components/pages/testimonials/testimonials-hero";
import { TestimonialsList } from "@/components/pages/testimonials/testimonials-list";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testimonials & Stories | Sit-With-PD",
  description:
    "Read stories of growth, emotional healing, and mindful transformation from participants who have joined our therapeutic retreats and consultations.",
};

export default function TestimonialsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center w-full">
      <TestimonialsHero />
      <TestimonialsList />
    </main>
  );
}
