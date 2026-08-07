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
    title: "The Overwhelmed Professional",
    description:
      "You're feeling stuck, burnt out, or disconnected from your purpose. You need space to breathe and reconnect.",

    image: "/images/camp1.png",
  },
  {
    title: "The Emerging Leader`",
    description:
      "Students and young adults stepping into their next chapter, seeking clarity, values alignment, and direction.",

    image: "/images/camp2.png",
  },
  {
    title: "The Entrepreneur in Transition",
    description:
      "Founders navigating growth, pivots, or burnout who need to rediscover what they're building and why.",

    image: "/images/camp3.png",
  },
  {
    title: "The Seeker of Healing",
    description:
      "Anyone ready to process past experiences, cultivate emotional resilience, and move forward with renewed strength.",

    image: "/images/camp4.png",
  },
  {
    title: "Couples & Families",
    description:
      "Pairs and families wanting to deepen trust, improve communication, and strengthen the bonds that matter most.",

    image: "/images/camp5.png",
  },
  {
    title: "Anyone Committed to Growth",
    description:
      "If you're ready to invest in yourself and show up fully - you belong at camp. The only requirement is willingness.",

    image: "/images/camp6.png",
  },
];

const lastCamp = camps.length - 1
export function CampWho() {
  return (
    <section className="w-full bg-white py-16 lg:py-24">
      <div className="w-11/12 mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          variants={staggerContainerSlow}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="text-center mb-10  max-w-2xl mx-auto"
        >
          <motion.span
            variants={fadeInUp}
            className="text-[#60935D] rounded-full px-2.5 py-1 font-semibold text-sm tracking-[1.5px] uppercase"
          >
            Who This Is For
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="heading-2 text-[#131313] font-bold mt-5 mb-4"
          >
            Designed for people who are ready to pause.
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-[#606060]">
            You don't need to have it all figured out. You just need to be
            willing to slow down and do the inner work. If that's you - you
            belong here.
          </motion.p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {camps.map((camp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                delay: i * 0.2,
                duration: 0.55,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className={`flex flex-col rounded-[16px] p-7 overflow-hidden  ${i === lastCamp ? "bg-[#60935D]" : "bg-[#F5F7F5]"}`}
            >
              {/* Card image */}
              <div className="relative w-full mb-3 shrink-0">
                <Image
                  src={camp.image}
                  alt={camp.title}
                  width={30}
                  height={30}
                  className=""
                />
              </div>

              {/* Card body */}
              <div className="flex flex-col flex-1 gap-2">
                {/* Title */}
                <h3 className={` font-semibold text-base leading-tight ${i === lastCamp ? "text-white" : "text-[#131313]"}`}>
                  {camp.title} 
                </h3>

                {/* Description */}
                <p className={` text-sm  l flex-1 ${i === lastCamp ? "text-[#FFFFFFCC]" : "text-[#606060]"}`}>
                  {camp.description}
                </p>
              </div>

              {
                i === lastCamp && (
                  <Button
                    className="mt-4 bg-[#A8D675] text-[#1F4842] w-full"
                    onClick={() =>
                      document
                        .getElementById("camp-services")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    Apply Now <CaretRight color="#1F4842" />
                  </Button>
                )
              }
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
