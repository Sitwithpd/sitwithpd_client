"use client";

import {
  fadeInUp,
  fadeInUpSlower,
  staggerContainerDelayed,
  staggerContainerSlow,
} from "@/lib/motion-variants";
import { motion } from "motion/react";

interface ConsultationHighlight {
  number: string;
  title: string;
  description: string;
}

export function ConsultationHighlights() {
  const highlights: ConsultationHighlight[] = [
    {
      number: "01",
      title: "Personal Development",
      description:
        "Build confidence, clarify your goals, strengthen your mindset, and create a practical roadmap for personal growth.",
    },
    {
      number: "02",
      title: "Leadership & Executive Development",
      description:
        "Enhance your leadership effectiveness, communication, strategic thinking, emotional intelligence, and organisational influence.",
    },
    {
      number: "03",
      title: "Business & Entrepreneurship",
      description:
        "Whether you're launching a new venture or scaling an existing one, receive practical guidance on leadership, strategy, growth, customer experience, and sustainable success.",
    },
    {
      number: "04",
      title: "Career & Professional Growth",
      description:
        "Navigate career transitions, prepare for leadership opportunities, improve workplace performance, and position yourself for long-term success.",
    },
    {
      number: "05",
      title: "Organisational & Team Development",
      description:
        "Support your organisation with guidance on leadership, culture, collaboration, employee development, change management, and performance improvement.",
    },
    {
      number: "06",
      title: "Purpose & Life Direction",
      description:
        "Discover greater clarity about your vision, values, priorities, and next steps so you can make decisions with confidence and intention.",
    },
  ];

  return (
    <section className="w-full bg-[#F5F7F5] py-15 lg:pt-20 ">
      <div className="w-11/12 mx-auto max-w-7xl">
        {/* Header Section */}
        <motion.div
          variants={staggerContainerSlow}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="mb-8"
        >
          <motion.span
            variants={fadeInUp}
            className="text-regular-button font-semibold text-sm tracking-[2.5px] uppercase block mb-3"
          >
            Our Signature Highlights
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl  font-bold text-[#131313] leading-tight w-full  lg:pr-20"
          >
            Whatever you're navigating, there's a path forward.
          </motion.h2>
        </motion.div>

        {/* Highlight Items */}
        <motion.div
          // variants={staggerContainerDelayed}
          // initial="hidden"
          // whileInView="visible"
          // viewport={{ once: true }}
          className="divide-y divide-dashed divide-[#C8D8C8]"
        >
          {highlights.map((item) => (
            <motion.div
              key={item.number}
              initial="hidden"
              whileInView="visible"
              variants={fadeInUpSlower}
              viewport={{ once: true, amount: 0.5 }}
                whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-8 lg:gap-12 items-start py-8 lg:py-10"
            >
              {/* Number */}
              <span className="text-4xl lg:text-5xl font-bold text-[#C8D8C8] leading-none select-none shrink-0">
                {item.number}
              </span>

              {/* Title & Description */}
              <div className="flex flex-col gap-2">
                <h3 className="text-lg lg:text-xl font-semibold text-[#131313]">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base text-[#606060] leading-relaxed max-w-2xl">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
