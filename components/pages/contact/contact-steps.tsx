"use client";

import { motion } from "motion/react";
import { fadeInUp, staggerContainerSlow } from "@/lib/motion-variants";
import { Pill } from "@/components/ui/pill";

const steps = [
  {
    number: "1",
    title: "We Receive Your Message",
    description:
      "As soon as you submit your message, our team is notified and your details are securely logged in our system.",
    isHighlighted: false,
  },
  {
    number: "2",
    title: "We Reach Out to You",
    description:
      "Within 24 hours, a member of our team will contact you to confirm your enquiry and schedule the right session.",
    isHighlighted: true,
  },
  {
    number: "3",
    title: "Begin Your Journey",
    description:
      "You'll be matched with the right professional, and your transformative experience begins in a safe, supportive environment.",
    isHighlighted: false,
  },
];

export function ContactSteps() {
  return (
    <section className="w-full  pb-16 lg:pb-24 bg-white">
      <div className="w-11/12 max-w-6xl mx-auto flex flex-col items-center">
        {/* Header */}
        <motion.div
          variants={staggerContainerSlow}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col items-center text-center mb-12"
        >
          <motion.div variants={fadeInUp}>
            <Pill text="What Happens Next" />
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="heading-2 text-[#131313] max-w-lg"
          >
            Three simple steps to begin your journey
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-[#475467] text-base mt-3 max-w-md"
          >
            We&apos;ve made getting started as easy and stress-free as possible.
          </motion.p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 w-full">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={
                step.isHighlighted
                  ? { scale: 1.02, filter: "brightness(1.07)" }
                  : {
                      y: -6,
                      boxShadow: "0px 16px 32px -8px rgba(96,147,93,0.18)",
                    }
              }
              transition={{
                delay: i * 0.15,
                duration: 0.55,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="flex flex-col p-7 rounded-[20px] cursor-default"
              style={{
                backgroundColor: step.isHighlighted ? "#1F4842" : "#F5F7F5",
              }}
            >
              {/* Step Number Badge */}
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-base mb-6 shrink-0"
                style={{
                  backgroundColor: step.isHighlighted ? "#A8D675" : "#1F4842",
                }}
              >
                {step.number}
              </div>
              <h3
                className="text-lg font-semibold mb-3"
                style={{
                  color: step.isHighlighted ? "#ffffff" : "#131313",
                }}
              >
                {step.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{
                  color: step.isHighlighted ? "#FFFFFFB2" : "#000",
                }}
              >
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
