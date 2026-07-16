"use client";

import {
  fadeInUp,
  fadeInUpSlower,
  staggerContainerSlow,
} from "@/lib/motion-variants";
import { motion } from "motion/react";

interface CampHighlight {
  number: string;
  numberColor: string;
  title: string;
  description: string;
  tags: string[];
}

export function CampHighlights() {
  const highlights: CampHighlight[] = [
    {
      number: "01",
      numberColor: "#738C59",
      title: "Clarity & Self-Discovery",
      description:
        "Understand where you truly are in life — without noise, distraction, or pressure. Guided sessions help you strip back the layers and reconnect with your core values, needs, and purpose.",
      tags: ["Self-awareness", "Reflection", "Purpose"],
    },
    {
      number: "02",
      numberColor: "#738C59",
      title: "Deep Connection & Community",
      description:
        "Share space with people who truly understand. Unhurried, honest conversations that go beneath the surface — forming bonds and perspectives that extend well beyond the three days.",
      tags: ["Community", "Connection", "Trust"],
    },
    {
      number: "03",
      numberColor: "#738C59",
      title: "Guided Growth & Healing",
      description:
        "Expert facilitators guide you through practical tools, journaling, and breakthrough moments — creating a safe container for real emotional growth that actually stays with you.",
      tags: ["Resilience", "Forgiveness", "Healing"],
    },
    {
      number: "04",
      numberColor: "#C8D8C8",
      title: "Nature & Mindful Environment",
      description:
        "Set in the serene grounds of Gardenia Tropicana, the environment itself becomes part of the healing. Nature walks, open skies, and peaceful surroundings accelerate the inner work.",
      tags: ["Nature", "Mindfulness", "Stillness"],
    },
    {
      number: "05",
      numberColor: "#C8D8C8",
      title: "Expert Facilitation & Support",
      description:
        "Our facilitators have walked this path themselves. They create a safe, non-judgmental space — skilled at holding space for deep conversations, breakthroughs, and vulnerable moments.",
      tags: ["Safety", "Expertise", "Wisdom"],
    },
    {
      number: "06",
      numberColor: "#C8D8C8",
      title: "Integration & Closing Ritual",
      description:
        "The final day is about carrying your insights forward. A meaningful closing ritual helps you consolidate breakthroughs, set intentions, and step back into your life with clear direction.",
      tags: ["Intention", "Closure", "Forward"],
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
            Camp Experience Highlights
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl  font-bold text-[#131313] leading-tight w-full  lg:pr-20"
          >
            3 days. 3 pillars. One transformation.
          </motion.h2>
        </motion.div>

        {/* Highlight Items */}
        <motion.div

          className="divide-y divide-dashed overflow-hidden divide-[#C8D8C8]"
        >
          {highlights.map((item, index) => (
            <motion.div
              key={item.number}
              initial="hidden"
              whileInView="visible"
              variants={fadeInUpSlower}
              viewport={{ once: true, amount: 0.5 }}
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="flex flex-col gap-3 py-8 lg:py-10 cursor-default"
            >
              {/* Number + Title row */}
              <div className="flex items-baseline gap-3">
                <span
                  className="text-3xl lg:text-4xl  font-bold leading-none select-none shrink-0"
                  style={{ color: item.numberColor }}
                >
                  {item.number}
                </span>
                <h3 className="text-lg lg:text-xl font-semibold text-[#131313] leading-snug">
                  {item.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-sm md:text-base text-[#606060] leading-relaxed">
                {item.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-1">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full  text-xs font-medium t"
                    style={{
                      backgroundColor: index > 2 ? "#A8D67520" : "#FEF6E7",
                      color: index > 2 ? "#A8D675" : "#865503",
                    }}
                  >
                    {tag}
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
