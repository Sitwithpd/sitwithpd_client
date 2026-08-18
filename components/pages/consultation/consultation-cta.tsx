"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function ConsultationCta() {
  const handleScrollToServices = () => {
    document
      .getElementById("consultation-services")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative w-full bg-footer-bg py-24 overflow-hidden flex flex-col items-center justify-center text-center">
      <div className="relative z-10 lg:max-w-4xl mx-auto px-4 flex flex-col w-11/12 lg:w-6/12 items-center ">
        <span className="text-[#A8D675] font-semibold text-xs tracking-[2.4px] uppercase">
          BEGIN YOUR GROWTH JOURNEY
        </span>

        <h2 className="text-white text-3xl lg:text-4xl font-bold leading-tight mt-6 mb-3 ">
          Every breakthrough begins with a willingness to seek clarity.
        </h2>

        <p className="text-[#FFFFFFA6] text-base leading-relaxed">
          Whether you&apos;re facing an important decision, leading through
          change, building a vision, or simply looking for trusted guidance,
          your next step starts with one conversation.
        </p>

        {/* Buttons layout */}
        <div className="flex flex-col sm:flex-row gap-4 lg:gap-2.5 items-center justify-center mt-6 w-full sm:w-auto">
          <Button
            className={cn("w-full sm:w-auto px-5 shadow-none")}
            variant={"regular"}
            onClick={handleScrollToServices}
          >
            Book a Consultation
          </Button>
          <Link href="/contact" className="w-full lg:w-auto">
            <Button
              className={cn(
                "w-full sm:w-auto shadow-none px-5 text-white bg-transparent border-[0.67px] border-[#FFFFFF4D]",
              )}
              variant={"regular"}
            >
              Contact Our Team
            </Button>
          </Link>
        </div>
      </div>
      <div className="absolute -top-20 right-0 lg:right-20 bg-[#A8D6750D] lg:h-100 lg:w-100 h-70 w-70 z-1 rounded-full" />
      <div className="absolute -bottom-20 -left-15 bg-[#A8D6750D] h-70 w-70 z-1 rounded-full" />
    </section>
  );
}
