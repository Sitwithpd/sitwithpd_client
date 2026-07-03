"use client";
import { Button } from "@/components/ui/button";
import CaretRight from "@/pd-icons/caret-right";
import Image from "next/image";

export function TestimonialsHero() {
  return (
    <section className="w-full">
      <div className="relative w-full min-h-[60vh] lg:min-h-[70vh] flex items-center justify-center py-20 lg:py-32">
        <Image
          src="/images/about-bg.webp"
          alt="Testimonials background image"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative h-full w-[90%] lg:w-[80%] mx-auto flex flex-col gap-6 justify-center items-center max-w-6xl text-center">
          <div className="space-y-4">
            <h1 className="text-[#F9FDF9] font-semibold text-[2.75rem] lg:text-[4rem] xl:text-[5rem] leading-[1.1]">
              Stories of Healing & Connection
            </h1>
            <p className="text-[#F9FDF9] text-base lg:text-xl max-w-2xl mx-auto font-medium opacity-90">
              Read the real journeys and personal transformations of those who
              have sat with us, paused, and reconnected with themselves.
            </p>
          </div>
          <div className="flex justify-center w-full mt-4">
            <Button
              onClick={() =>
                document
                  .getElementById("testimonials-list")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              variant="regular"
            >
              Read Stories <CaretRight />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
