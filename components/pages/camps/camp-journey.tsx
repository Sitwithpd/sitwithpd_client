"use client";

import { Pill } from "@/components/ui/pill";
import { motion } from "motion/react";

const steps = [
  {
    number: 1,
    title: "Arrive & Unwind",
    description:
      "Settle In, Breathe, And Release The Weight You Carried Here. Gentle Icebreakers, A Welcome Circle, And Your First Quiet Evening To Just Be.",
  },
  {
    number: 2,
    title: "Explore & Reflect",
    description:
      "The Heart Of The Camp. Guided Sessions, Journaling, And Honest Group Conversations That Help You See Yourself More Clearly.",
  },
  {
    number: 3,
    title: "Connect & Reset",
    description:
      "Personal Breakthroughs, A Closing Ritual, And The Quiet Confidence Of Knowing What You're Walking Back Into The World With.",
  },
];

export default function CampJourney() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
      },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  } as const;

  return (
    <section className="py-10  lg:pb-20">
      <div className="container mx-auto flex flex-col items-center text-center">
        <Pill text="The camp journey" className="mb-4" />
        <h2 className="heading-2 max-w-2xl">Three days. One story.</h2>
        <p className="paragraph mt-2 max-w-2xl text-[#4A5565]">
          Each day is a chapter moving gently from arrival to transformation.
        </p>

        <motion.div
          className="relative w-full max-w-3xl mx-auto mt-16 text-left"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Vertical Timeline Line */}
          <div className="absolute left-5 sm:left-6 top-5 sm:top-6 bottom-0 w-[1.5px] bg-[#C5C9C7]" />

          <div className="space-y-12">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="relative flex gap-6 sm:gap-8 items-start group"
              >
                {/* Step Circle */}
                <div className="relative z-10 shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#EBF4F0] border border-[#D0E2D9] flex items-center justify-center text-[#1A4D3B] font-medium text-base sm:text-lg transition-transform duration-300 group-hover:scale-105">
                  {step.number}
                </div>

                {/* Step Content */}
                <div className="flex-1 pt-1.5 sm:pt-2.5">
                  <h3 className="text-[#101828] font-medium text-lg sm:text-xl mb-1.5 transition-colors duration-300 group-hover:text-[#445b1c]">
                    {step.title}
                  </h3>
                  <p className="text-[#4A5565] text-sm sm:text-base leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
