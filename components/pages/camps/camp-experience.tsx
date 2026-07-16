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

interface CampCard {
  category: string;
  title: string;
  description: string;
  bullets: string[];
  image: string;
  href: string;
}

const camps: CampCard[] = [
  {
    category: "Stillness Retreat",
    title: "Emerald Haven & Reserve",
    description:
      "Emerald Haven & Reserve is more than a destination; it is a sanctuary where nature, comfort, and renewal come together in perfect harmony. Nestled amidst lush greenery, pristine waters, and breathtaking landscapes, it offers an escape from the demands of everyday life and an invitation to reconnect with what truly matters.",
    bullets: [
      "3 days · Nature setting · Small groups",
      "Gardenia Tropicana, Lagos",
    ],
    image: "/images/Image.webp",
    href: "/camps",
  },
  {
    category: "Leadership Camp",
    title: "Cedar Valley Escape",
    description:
      "Cedar Valley Escape is a peaceful retreat nestled among rolling hills, cedar forests, and breathtaking open skies. Designed for those seeking rest, adventure, reflection, or meaningful connection, it offers a welcoming sanctuary where the distractions of everyday life give way to nature's calming embrace. Surrounded by birdsong and fresh air",
    bullets: [
      "3 days · Cohort format · Executives & founders",
      "Gardenia Tropicana, Lagos",
    ],
    image: "/images/therapeutic-camps.webp",
    href: "/camps",
  },
  {
    category: "Youth Camp",
    title: "Bloomfield Sanctuary",
    description:
      "Bloomfield Sanctuary is a premium retreat experience thoughtfully designed for rest, reflection, wellness, and personal renewal. Created for solo travelers, couples, families, groups, creatives, professionals, and wellness seekers, it offers a peaceful environment where guests can reconnect with nature, loved ones, and themselves.",
    bullets: [
      "3 days · Ages 16-30 · Youth format",
      "Gardenia Tropicana, Lagos",
    ],
    image: "/images/join-us.webp",
    href: "/camps",
  },
];

export function CampExperience() {
  return (
    <section className="w-full bg-[#0F2318] py-16 lg:py-24">
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
            className="text-[#A8D675] bg-[#1F4842] rounded-full px-2.5 py-1 font-semibold text-sm tracking-[1.5px] uppercase"
          >
            Choose Your Experience
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="heading-2 text-white font-bold mt-5 mb-4"
          >
            Three camps. One mission.
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-[#FFFFFF80]">
            Each camp is crafted around a different season of life. Find the one
            that speaks to where you are right now.
          </motion.p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={staggerContainerDelayed}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-6xl mx-auto"
        >
          {camps.map((camp) => (
            <motion.div
              key={camp.title}
              variants={fadeInUp}
              className="flex flex-col rounded-[16px] overflow-hidden bg-[#1A3D36]"
            >
              {/* Card image */}
              <div className="relative w-full aspect-video shrink-0">
                <Image
                  src={camp.image}
                  alt={camp.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Card body */}
              <div className="flex flex-col flex-1 p-7 gap-3">
                {/* Category badge */}
                <span className="inline-flex w-fit items-center rounded-full bg-[#A8D67520]  text-[#A8D675] text-xs font-semibold tracking-[1px] uppercase px-2.5 py-1">
                  {camp.category}
                </span>

                {/* Title */}
                <h3 className="text-white font-bold text-xl lg:text-2xl leading-tight">
                  {camp.title}
                </h3>

                {/* Description */}
                <p className="text-[#FFFFFFB2] text-sm lg:text-base leading-relaxed flex-1">
                  {camp.description}
                </p>

                {/* Bullet points */}
                <ul className="space-y-1.5 mt-1">
                  {camp.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-center gap-2 text-[#FFFFFFB2] text-sm"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#A8D675] shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Link href={camp.href} className="mt-4">
                  <Button variant="regular" className="w-full">
                    Apply for This Camp
                    <span>→</span>
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
