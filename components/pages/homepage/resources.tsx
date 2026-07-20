"use client";

import { Button } from "@/components/ui/button";
import { Pill } from "@/components/ui/pill";
import {
  fadeInRight,
  fadeInUpSlower,
  staggerContainer,
  staggerContainerDelayed,
  staggerContainerSlow,
} from "@/lib/motion-variants";
import CaretRight from "@/pd-icons/caret-right";
import { ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import React from "react";

export default function Resources({ showBtn = true }: { showBtn?: boolean }) {
  return (
    <section className="container mx-auto   pt-15  flex flex-col items-center">
      {/* Badge */}
      {/* <Pill text="How we can help" /> */}

      {/* Heading */}
      <motion.h2
        initial="hidden"
        whileInView="visible"
        variants={fadeInUpSlower}
        viewport={{ once: true, amount: 0.5 }}
        className=" text-center font-medium text-[1.625rem] sm:text-[1.5rem] lg:text-[1.8rem]  leading-snug lg:leading-9.5 text-[#131313] max-w-6xl "
      >
        Access our Purpose Starter Pack and Company Brochure to learn more about
        our approach, programmes, and how Sit-With-PD supports purposeful
        personal growth.
      </motion.h2>

      <div className="flex flex-col lg:flex-row rounded-[10px] lg:mt-10 mt-5 overflow-hidden w-full ">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="bg-[#664101] lg:flex-1 p-5"
        >
          <motion.span variants={fadeInUpSlower} className="text-[#DD900D] ">
            Free Resource
          </motion.span>
          <motion.h3
            variants={fadeInUpSlower}
            className="font-medium text-2xl lg:text-3xl text-[#F7D394] mt-8"
          >
            The Sit With PD Starter Pack™
          </motion.h3>
          <motion.p
            variants={fadeInUpSlower}
            className="text-[#F7D394] text-base lg:text-lg my-3 "
          >
            A free transformational toolkit designed to help you gain clarity,
            reconnect with yourself, and take your next step with confidence.
          </motion.p>
          <motion.div
            variants={staggerContainerSlow}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="space-y-1 mt-7 mb-5"
          >
            {[
              "📖 Purpose Journal™",
              "🧭 Direction Workbook™",
              "🌱 Personal Discovery Toolkit™",
            ].map((item, index) => (
              <motion.p
                variants={fadeInRight}
                viewport={{ once: true, amount: 0.4 }}
                className="text-[#F7D394] text-base"
                key={index}
              >
                {item}
              </motion.p>
            ))}
          </motion.div>

          <motion.div
            variants={staggerContainerDelayed}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.div variants={fadeInRight}>
              <Button className="bg-[#F7D394] text-[#AD6F07] " asChild>
                <a
                  href="/files/Starter Pack Toolkits.pdf"
                  download="Starter Pack Toolkits.pdf"
                >
                  Download starter pack{" "}
                  <ChevronRight className="w-4 h-4 ml-1" />{" "}
                </a>
              </Button>
            </motion.div>
            {showBtn && (
              <motion.div variants={fadeInRight}>
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
              </motion.div>
            )}
          </motion.div>
        </motion.div>
        <motion.div
          variants={staggerContainerDelayed}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="bg-[#865503] lg:flex-1 text-[#F7C164] text-base py-10 lg:py-0  flex flex-col gap-4 items-center justify-center"
        >
          <motion.p variants={fadeInUpSlower}>
            Download Today And Learn How To:
          </motion.p>
          <div className="text-center lg:w-[60%] mx-auto">
            <motion.p
              variants={fadeInUpSlower}
              className="flex items-center gap-2 justify-center "
            >
              <CaretRight color="#F7D394" className="w-4 h-  " /> Gain clarity
              about your future
            </motion.p>
            <motion.p
              variants={fadeInUpSlower}
              className="flex items-center gap-2 justify-center"
            >
              <CaretRight color="#F7D394" className="w-4 h-4 " /> Discover what
              truly matters
            </motion.p>
            <motion.p
              variants={fadeInUpSlower}
              className="flex items-center gap-2 justify-center"
            >
              <CaretRight color="#F7D394" className="w-4 h-4 " /> Strengthen
              your resilience
            </motion.p>
            <motion.p
              variants={fadeInUpSlower}
              className="flex items-center gap-2 justify-center"
            >
              <CaretRight color="#F7D394" className="w-4 h-4 " /> Create a more
              intentional life
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
