"use client";

import { Pill } from "@/components/ui/pill";
import { motion } from "motion/react";

export function ProgramOverview() {
  const cards = [
    {
      title: "Core Programs",
      value: "3",
    },
    {
      title: "Per Program",
      value: "3-5",
    },
    {
      title: "Self Spaced",
      value: "100%",
    },
    {
      title: " Participants Guided",
      value: "3,400+",
    },
  ];

  const offerings = [
    {
      title: "Pause",
      description:
        "Step back from life's noise and create space for deeper self-awareness.",
    },
    {
      title: "Discover",
      description: "",
    },
    {
      title: "Transform",
      description:
        "Turn insight into intentional action  build resilience, confidence, and purpose.",
    },
  ];

  return (
    <section className="container  mx-auto py-10 lg:pt-24 lg:pb-0 flex flex-col xl:flex-row items-center justify-between gap-10 xl:gap-20 max-w-6xl">
      {/* Left Content */}
      <div className="flex-1 ">
        <div className="flex justify-center lg:text-start xl:justify-start">
          <Pill text="What We Offer" />
        </div>
        <h2 className=" text-[1.5rem]  lg:text-[1.8rem] xl:text-[2rem] lg:leading-9.5 text-[#131313] xl:leading-11 font-medium text-center xl:text-start ">
          Each programme is thoughtfully structured to help you understand
          yourself better.
        </h2>
        <div className="space-y-4 my-3">
          <p className="text-base text-[#606060] ">
            Build emotional awareness and grow with clarity at your own pace. No
            overwhelm just steady, guided progress designed to create
            meaningful, lasting transformation in your personal and professional
            life.
          </p>
          <p className="text-base text-[#606060] ">
            Through a blend of guided learning, practical tools, reflective
            exercises, and ongoing support, participants gain the knowledge,
            mindset, and confidence needed to move forward.
          </p>
        </div>
        <div className="space-y-5 py-3">
          {offerings.map((offering, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex items-center gap-5 bg-white   "
            >
              <div className="w-10 h-10 rounded-full shrink-0 text-[#30430E] text-lg font-medium bg-[#A8D675] flex items-center justify-center">
                {index + 1}
              </div>
              <div>
                <h2 className="font-medium text-base mb-1 text-black]">
                  {offering.title}
                </h2>
                <p className="text-base  text-black">{offering.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Right Content - Grid */}
      <div className="flex-1  w-full max-w-2xl">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col gap-1  "
        >
          <div className="bg-[#1F4842] rounded-[20px] p-7 text-white">
            <h2 className="lg:leading-[54px] text-[1.5rem] font-medium lg:text-[2rem]  text-white">
              Each programme is thoughtfully structured to help you understand
              yourself better.
            </h2>
            <p className="text-base  text-white mt-4 mb-5 ">
              Our guided programmes provide structured pathways for personal
              growth, helping individuals develop greater self-awareness,
              emotional resilience, clarity, and purpose. Because when you
              understand yourself better, you live better.
            </p>
            <div className="flex gap-2 justify-between">
              <div>
                <h3 className="text-[#A8D675] text-lg font-semibold">Purpose</h3>
                <p className="text-sm my-2 ">Find what matters.</p>
              </div>
              <div>
                <h3 className="text-[#A8D675] text-lg font-semibold">Direction</h3>
                <p className="text-sm my-2 ">Chart your path
</p>
              </div>
              <div>
                <h3 className="text-[#A8D675] text-lg font-semibold">Discovery</h3>
                <p className="text-sm my-2 ">Know yourself
</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
