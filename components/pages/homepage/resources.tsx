import { Button } from "@/components/ui/button";
import { Pill } from "@/components/ui/pill";
import { ChevronRight } from "lucide-react";
import React from "react";

export default function Resources({ showBtn = true }: { showBtn?: boolean }) {
  return (
    <section className="container mx-auto   pt-15  flex flex-col items-center">
      {/* Badge */}
      {/* <Pill text="How we can help" /> */}

      {/* Heading */}
      <h2 className=" text-center font-medium text-[1.625rem] sm:text-[1.5rem] lg:text-[1.8rem]  leading-snug lg:leading-9.5 text-[#131313] max-w-6xl ">
        Access our Purpose Starter Pack and Company Brochure to learn more about our approach, programmes, and how Sit-With-PD supports purposeful personal growth.

      </h2>

      <div className="flex flex-col lg:flex-row rounded-[10px] lg:mt-10 mt-5 overflow-hidden w-full ">
        <div className="bg-[#664101] lg:flex-1 p-5">
          <span className="text-[#DD900D] ">Free Resource</span>
          <h3 className="font-medium text-2xl lg:text-3xl text-[#F7D394] mt-8">
            The Sit With PD Starter Pack™
          </h3>
          <p className="text-[#F7D394] text-base lg:text-lg my-3 ">
            A free transformational toolkit designed to help you gain clarity,
            reconnect with yourself, and take your next step with confidence.
          </p>
          <div className="space-y-1 mt-7 mb-5">
            {[
              "📖 Purpose Journal™",
              "🧭 Direction Workbook™",
              "🌱 Personal Discovery Toolkit™",
            ].map((item, index) => (
              <p className="text-[#F7D394] text-base" key={index}>
                {item}
              </p>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-2">
            <Button className="bg-[#F7D394] text-[#AD6F07] " asChild>
              <a
                href="/files/Starter Pack Toolkits.pdf"
                download="Starter Pack Toolkits.pdf"
              >
                Download starter pack{" "}
                <ChevronRight className="w-4 h-4 ml-1" />{" "}
              </a>
            </Button>
            {showBtn && (
              <Button
                className="bg-transparent border border-[#F7D394] text-[#F7D394]"
                asChild
              >
                <a
                  href="/files/Sit with PD Brochure.pdf"
                  download="Sit with PD Brochure.pdf"
                >
                  Download Brochure <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </Button>
            )}
          </div>
        </div>
        <div className="bg-[#865503] lg:flex-1 text-[#F7C164] text-base py-10 lg:py-0  flex flex-col gap-4 items-center justify-center">
          <p>Download Today And Learn How To:</p>
          <div className="text-center w-[60%] mx-auto">
          <p className="">
            Gain clarity about your future
          </p>
          <p className="">
            Discover what truly matters
          </p>
          <p className="">
            Strengthen your resilience
          </p>
          <p className="">
            Create a more intentional life
          </p>

          </div>
        </div>
      </div>
    </section>
  );
}
