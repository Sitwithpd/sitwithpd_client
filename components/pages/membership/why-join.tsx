"use client";

import { motion } from "motion/react";
import {
  fadeInUp,
  staggerContainerDelayed,
  staggerContainerSlow,
} from "@/lib/motion-variants";
import { Pill } from "@/components/ui/pill";
import {
  Users,
  BookOpen,
  HeartHandshake,
  Tag,
  TrendingUp,
  CalendarCheck,
} from "lucide-react";

const blocks = [
  {
    icon: Users,
    title: "Community Connection",
    desc: "Join a global network of individuals committed to presence-based healing and personal growth.",
  },
  {
    icon: BookOpen,
    title: "Program Access",
    desc: "Unlock exclusive programs, workshops, and retreats designed for members only.",
  },
  {
    icon: HeartHandshake,
    title: "Continuous Support",
    desc: "Receive ongoing guidance and support from our team of experienced facilitators.",
  },
  {
    icon: Tag,
    title: "Special Discounts",
    desc: "Enjoy exclusive discounts on programs, camps, and consultation services.",
  },
  {
    icon: TrendingUp,
    title: "Personal Development",
    desc: "Track your growth with our advancement dashboard and personalized guidance tools.",
  },
  {
    icon: CalendarCheck,
    title: "Flexible Commitment",
    desc: "Cancel anytime with no penalties. Choose the plan that works for you.",
  },
];

export function WhyJoin() {
  return (
    <section className="w-full py-16 lg:py-24">
      <div className="w-11/12 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          variants={staggerContainerSlow}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="flex flex-col items-center text-center mb-12 lg:mb-16"
        >
          <motion.div variants={fadeInUp}>
           <span className="bg-[#E8F0E6] text-[#1F4842] font-semibold text-sm mb-4 flex justify-center items-center py-2 px-4 rounded-full">
            MEMBER BENEFITS
           </span>
          </motion.div>
          <motion.h2 variants={fadeInUp} className="heading-2 text-center mb-4">
            Why Become a Member?
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-[#606060] text-sm md:text-base max-w-md leading-relaxed"
          >
            Join a global community dedicated to your wellbeing, growth, and
            transformation.
          </motion.p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={staggerContainerDelayed}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full"
        >
          {blocks.map((block, idx) => {
            const Icon = block.icon;
            return (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="bg-white rounded-[16px] p-6 sm:p-7 border border-[#DEDEDE] flex flex-col gap-4 hover:shadow-md transition-shadow duration-300"
              >
                {/* Icon container */}
                <div className="w-10 h-10 rounded-[10px] bg-[#649351]/10 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-[#649351]" strokeWidth={1.75} />
                </div>

                <div>
                  <h3 className="font-semibold text-lg text-[#131313] mb-2">
                    {block.title}
                  </h3>
                  <p className="text-sm text-[#606060] leading-relaxed">
                    {block.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
