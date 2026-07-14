"use client";

import { fadeInUp, staggerContainerDelayed, staggerContainerSlow } from "@/lib/motion-variants";
import { motion } from "motion/react";

interface ProgramHighlight {
  number: string;
  title: string;
  tag: string;
  description: string;
  skills: string[];
}

export function SignatureHighlights() {
  const highlights: ProgramHighlight[] = [
    {
      number: "01",
      title: "Personal Growth & Self-Discovery",
      tag: "For Individuals",
      description:
        "Discover who you are, clarify your purpose, build confidence, and develop the mindset needed to thrive in every area of life. Ideal for anyone seeking direction, personal fulfillment, or a fresh start.",
      skills: ["Self-awareness", "Confidence", "Purpose"],
    },
    {
      number: "02",
      title: "Leadership Development",
      tag: "For Leaders",
      description:
        "Great leadership begins with leading yourself. Develop the mindset, communication skills, emotional intelligence, and decision-making abilities required to influence others with integrity and excellence.",
      skills: ["Communication", "Emotional intelligence", "Influence"],
    },
    {
      number: "03",
      title: "Emotional Healing & Resilience",
      tag: "For Everyone",
      description:
        "Healing is not about forgetting the past; it's about moving forward with strength. Practical tools to process life's challenges, cultivate emotional resilience, embrace forgiveness, and build healthier relationships.",
      skills: ["Resilience", "Forgiveness", "Healing"],
    },
    {
      number: "04",
      title: "Purpose & Life Direction",
      tag: "For Seekers",
      description:
        "Gain clarity on your vision, values, and calling. Learn how to align your daily decisions with the future you want to create and begin living with greater confidence and intentionality.",
      skills: ["Vision", "Values", "Clarity"],
    },
    {
      number: "05",
      title: "Business & Entrepreneurship",
      tag: "For Entrepreneurs",
      description:
        "Build more than a business — build a lasting legacy. Strategic thinking, leadership, innovation, customer experience, sustainable growth, and long-term impact for entrepreneurs and aspiring founders.",
      skills: ["Strategy", "Innovation", "Legacy"],
    },
    {
      number: "06",
      title: "Workplace & Professional Excellence",
      tag: "For Professionals",
      description:
        "Success requires more than technical skills. Develop professionalism, effective communication, teamwork, leadership presence, problem-solving, adaptability, and a growth mindset to excel.",
      skills: ["Professionalism", "Teamwork", "Growth mindset"],
    },
    {
      number: "07",
      title: "Family & Relationship Enrichment",
      tag: "For Families",
      description:
        "Healthy relationships are built intentionally. Strengthen communication, deepen trust, resolve conflict constructively, and cultivate lasting connections within families, friendships, and professional relationships.",
      skills: ["Trust", "Communication", "Connection"],
    },
    {
      number: "08",
      title: "Youth & Emerging Leaders",
      tag: "For Youth",
      description:
        "Equip the next generation with the confidence, values, leadership skills, and resilience needed to navigate life's opportunities and challenges with purpose.",
      skills: ["Confidence", "Values", "Leadership"],
    },
  ];

  return (
    <section className="w-full bg-[#F5F7F5] py-16 ">
      <div className="w-11/12 mx-auto max-w-7xl">
        {/* Header Section */}
        <motion.div
        variants={staggerContainerSlow}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        className="mb-8">
          <motion.span
          variants={fadeInUp}
          className="text-regular-button font-semibold text-sm tracking-[2.5px] uppercase block mb-3">
            Our Signature Highlights
          </motion.span>
          <motion.h2
          variants={fadeInUp}
          className="text-3xl  font-bold text-[#131313] leading-tight max-w-2xl">
            8 programs. Every season <br className="hidden lg:block" /> of life.
          </motion.h2>
        </motion.div>

        {/* Highlight Items */}
        <motion.div
          variants={staggerContainerDelayed}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className=""
        >
          {highlights.map((item) => (
            <motion.div
              key={item.number}
              variants={fadeInUp}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start  py-8 lg:py-10 last:border-b-0"
            >
              {/* Number */}
              <div className="col-span-1 lg:col-span-1">
                <span className="text-4xl lg:text-5xl font-bold text-[#C8D8C8] leading-none select-none block">
                  {item.number}
                </span>
              </div>

              {/* Title & Description */}
              <div className="col-span-1 lg:col-span-8 flex flex-col gap-3">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-lg lg:text-xl font-semibold text-[#131313]">
                    {item.title}
                  </h3>
                  <span className="text-[11px] font-medium text-regular-button border-[0.67px] border-[#60935D] px-2.5 py-0.5 rounded-full">
                    {item.tag}
                  </span>
                </div>
                <p className="text-sm md:text-base text-[#606060] leading-relaxed max-w-3xl">
                  {item.description}
                </p>
              </div>

              {/* Skills/Tags List */}
              <div className="col-span-1 lg:col-span-3 flex flex-wrap lg:flex-col lg:items-end justify-start gap-2 pt-1 lg:pt-0">
                {item.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-[11px] font-semibold text-[#865503] bg-[#FEF6E7] px-2.5 py-1 rounded-[4px] select-none"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
