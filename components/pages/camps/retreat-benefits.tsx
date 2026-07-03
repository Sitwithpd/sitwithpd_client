"use client";

import { Pill } from "@/components/ui/pill";
import useMobile from "@/hooks/use-mobile-breakpoint";
import { CheckCircle2 } from "lucide-react";

export function RetreatBenefits() {
  const benefits = [
    "You're feeling stuck, overwhelmed, or disconnected from yourself",
    "You're seeking clarity about the next chapter of your life",
    "You want deeper self-understanding, not just productivity hacks",
    "You're craving an intentional pause from the pace of everyday life"
  ];

  const { isMobile } = useMobile();

  return (
    <section className="py-10  w-full">
      <div className="container mx-auto  flex flex-col items-center text-center">
        <div className="mb-8 lg:mb-16">
        <Pill text="Who this is for" />
        <h2 className="heading-2  max-w-6xl">
          If any of this sounds familiar

        </h2>
        <p className="text-base text-black mt-2">
          You don't need to have it figured out. You just need to be willing to pause.

        </p>

        </div>

        <div className="flex  justify-center gap-4 w-full bg-[#E9EDF0] py-8 rounded-[24px]  max-w-4xl items-center">
          <div className="w-11/12 md:w-10/12 mx-auto flex flex-col gap-5">
            {benefits.map((benefit, idx) => {
              return (
                <div
                  key={idx}
                  className="flex items-center justify-between gap-4 bg-white shadow-[0px_4px_24px_rgba(221,228,234,0.5)] rounded-[16px] p-4  md:px-10 py-5 transition-transform hover:-translate-y-1"
                  style={
                    isMobile
                      ? {}
                      : {
                          marginLeft: `${idx * 20}px`,
                          width: "calc(100% - 60px)",
                        }
                  }
                >
                  <div className="flex items-center gap-2 md:gap-4">
                    <CheckCircle2 className="w-7 h-7 text-white fill-[#1AAB7A]" />
                    <span className="text-black text-start   text-base ">
                      {benefit}
                    </span>
                  </div>

                  {/* Decorative faint lines matching the design */}
                  <div className="hidden md:flex flex-col gap-1.5">
                    <div className="w-8 h-1.5 bg-[#E9EDF0] rounded-full"></div>
                    <div className="w-5 h-1.5 bg-[#E9EDF0] rounded-full"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
