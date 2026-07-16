"use client";

import { motion } from "motion/react";
import {
  fadeInUp,
  staggerContainerDelayed,
  staggerContainerSlow,
} from "@/lib/motion-variants";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import CaretRight from "@/pd-icons/caret-right";

interface CampCard {
  title: string;
  description: string;
  image: string;
}

const camps: CampCard[] = [
  {
    title: "Inner Calm",
    description:
      "A deep sense of stillness and peace you can return to, no matter what's happening around you.",

    image: "🧘",
  },
  {
    title: "Meaningful Community`",
    description:
      "New friendships formed in vulnerability and truth - people who will continue to walk with you after camp.",

    image: "🤝",
  },
  {
    title: "Deeper Self-Awareness",
    description:
      "Greater understanding of your patterns, triggers, and strengths - and how to channel them intentionally.",

    image: "🔍",
  },
  {
    title: "Renewed Purpose",
    description:
      "Clarity on what matters most and a renewed sense of direction for the next chapter of your life.",

    image: "🎯",
  },
  {
    title: "Better Relationships",
    description:
      "Tools for better communication, deeper trust, and more intentional connection in every relationship.",

    image: "💬",
  },
  {
    title: "Breakthrough Moments",
    description:
      "Those pivotal realisations that shift how you see yourself and what's possible - the kind that stay with you.",

    image: "⚡",
  },
  {
    title: "Emotional Resilience",
    description:
      "Practical tools for healing, moving forward, and building the emotional strength to face life's challenges.",

    image: "💪",
  },
  {
    title: "A Personal Action Plan",
    description:
      "Leave with a personalised plan that keeps the momentum going long after you return home.",

    image: "✍️",
  },
  {
    title: "Alumni Network Access",
    description:
      "Join the Sit With PD alumni community - a network of growth-minded people continuing their journey together.",

    image: "🌐",
  },
];

const lastCamp = camps.length - 1

export function CampTransform() {
  return (
    <section className="w-full bg-[#0F2318] py-16 lg:py-24">
      <div className="w-11/12 mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          variants={staggerContainerSlow}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="lg:text-start text-center mb-10  max-w-2xl mx-auto lg:mx-0 lg:w-1/2 w-full"
        >
          <motion.span
            variants={fadeInUp}
            className="text-[#A8D675] rounded-full font-semibold text-sm tracking-[1.5px] uppercase"
          >
            What You Can Expect
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="heading-2 text-white font-bold mt-5 mb-4"
          >
            Transformation that extends far beyond the weekend.
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-[#FFFFFFCC]">
            Every element of camp is designed to deliver profound, lasting change. Participants report feeling lighter, clearer, and more intentional long after the retreat ends.
          </motion.p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-0 max-w-6xl mx-auto overflow-hidden">
          {camps.map((camp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                delay: i * 0.2,
                duration: 0.55,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className={`flex flex-col  p-7 overflow-hidden  ${i % 2 === 0 ? "bg-[#1A3D36]" : "bg-[#163329]"}`}
              style={ i === lastCamp ? {
                backgroundColor:  "#A8D675" 
              } : {}}
            >
              {/* Card image */}
              <div className="relative w-full mb-3 shrink-0">
                {camp.image}
              </div>

              {/* Card body */}
              <div className="flex flex-col flex-1 gap-2">
                {/* Title */}
                <h3 className={` font-semibold text-base leading-tight ${i === lastCamp ? "text-[#1F4842]" : "text-[#FFFFFF]"}`}>
                  {camp.title} 
                </h3>

                {/* Description */}
                <p className={` text-sm  l flex-1 ${i === lastCamp ? "text-[#1F484280]" : "text-[#FFFFFFB2]"}`}>
                  {camp.description}
                </p>
              </div>

            
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
