"use client";

import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { Pill } from "@/components/ui/pill";
import Image from "next/image";
import { motion } from "motion/react";

export function HowWeHelp() {
  const cards = [
    {
      title: "Consultations",
      description: (
        <p className="text-base leading-6">
          <span className="text-[#60935D] ">
            {" "}
            When Life Feels Unclear, Find Your Way Forward. <br />
          </span>
          Personalised one-to-one conversations to help you navigate challenges
          and move forward with clarity and confidence.
        </p>
      ),
      link: "/consultation",
      linkText: "Book a Consultation",
      image: "/images/consultations.png",
    },
    {
      title: "Therapeutic Camps",
      description: (
        <p className="text-base leading-6">
          <span className="text-[#60935D] ">
            {" "}
            Sometimes You Need To Step Away To Find Yourself Again. <br />
          </span>
          Immersive transformational experiences designed to help you reconnect
          with yourself through guided reflection and restorative experiences.
        </p>
      ),
      link: "/camps",
      linkText: "Explore therapeutic camps",
      image: "/images/therpeutic-camps.png",
    },
    {
      title: "Guided Programmes",
      description: (
        <p className="text-base leading-6">
          <span className="text-[#60935D] ">
            {" "}
            Don't Just Change Your Life. Understand It. <br />
          </span>
          Structured pathways for personal growth, helping individuals develop
          greater self-awareness, emotional resilience, clarity, and purpose.
        </p>
      ),
      link: "/programs",
      linkText: "Explore Programs",
      image: "/images/program-mini.png",
    },
    {
      title: "Community",
      description: (
        <p className="text-base leading-6">
          <span className="text-[#60935D] ">
            {" "}
            You Were Never Meant To Do Life Alone. <br />
          </span>
          A safe and supportive space where individuals connect, grow, and
          thrive together built on shared experiences and meaningful
          relationships.
        </p>
      ),
      link: "/community",
      linkText: "Join our community",
      image: "/images/community.png",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.05,
      },
    },
  } as const;

  const cardVariants = {
    hidden: { opacity: 0, y: 24, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  } as const;

  return (
    <section className="container mx-auto   py-15  flex flex-col items-center">
      {/* Badge */}
      <Pill text="How we can help" />

      {/* Heading */}
      <h2 className=" text-center heading-2 ">
        Find the support you need without feeling overwhelmed.{" "}
        <br className="sm:hidden md:block" /> Take simple steps toward a
        healthier, more balanced life
      </h2>

      {/* Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 l gap-5 lg:gap-5 xl:gap-8 w-full sm:w-8/12 md:w-full sm:mx-auto mt-10 max-w-6xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {cards.map((card, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="flex flex-col rounded-2xl border border-[#DEDEDE] bg-white p-4 lg:p-5 hover:shadow-[0px_2px_20px_rgba(0,0,0,0.08)] transition-shadow"
          >
            {/* Image Placeholder */}
            <div className="w-full aspect-video bg-gray-200 rounded-xl mb-6 overflow-hidden relative">
              <Image src={card.image} alt={card.title} fill className="object-cover" />
            </div>

            {/* Content */}
            <h3 className="text-xl font-medium text-[#242424] mb-2">
              {card.title}
            </h3>
            <p className="text-[16px] text-black leading-relaxed mb-6 ">
              {card.description}
            </p>

            {/* Link */}
            <Link
              href={card.link}
              className="flex items-center text-brand-green font-bold text-sm hover:underline mt-auto"
            >
              {card.linkText} <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
