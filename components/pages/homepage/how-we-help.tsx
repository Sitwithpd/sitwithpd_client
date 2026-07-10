"use client";

import Link from "next/link";
import { Pill } from "@/components/ui/pill";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { fadeInUp } from "@/lib/motion-variants";

export function HowWeHelp() {
  const cards = [
    {
      category: "CONSULTATIONS",
      title: "When Life Feels Unclear, Find Your Way Forward.",
      quote:
        '"The breakthrough you\'re searching for begins with sitting with yourself long enough to hear the answers."',
      link: "/consultation",
      linkText: "Book your consultation",
      image: "/images/hch1.webp",
      buttonColor: "text-[#A8D675]",
      borderColor: "border-[#A8D675]",
    },
    {
      category: "THERAPEUTIC CAMPS",
      title: "Sometimes You Need to Step Away To Find Yourself Again.",
      quote:
        '"Being in a calm environment with others on a similar journey helped me open up and reflect in ways I hadn\'t before."',
      link: "/camps",
      linkText: "Explore therapeutic camps",
      image: "/images/hch2.webp",
      buttonColor: "text-[#F7C164]",
      borderColor: "border-[#F7C164]",
    },
    {
      category: "GUIDED PROGRAMMES",
      title: "Don't Just Change Your Life. Understand It.",
      quote:
        '"Structured growth begins with honest self-reflection and the courage to sit with what you find."',
      link: "/programs",
      linkText: "Explore programmes",
      image: "/images/hch3.webp",
      buttonColor: "text-[#A8D675]",
      borderColor: "border-[#A8D675]",
    },
    {
      category: "COMMUNITY",
      title: "You Were Never Meant To Do Life Alone.",
      quote:
        '"The journey becomes lighter when it\'s shared with fellow travellers."',
      link: "/community",
      linkText: "Join our community",
      image: "/images/hch4.webp",
      buttonColor: "text-[#F7C164]",
      borderColor: "border-[#F7C164]",
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
    <section className="container mx-auto py-15 flex flex-col items-center">
      {/* Badge */}
      <Pill text="What We Offer" />

      {/* Heading */}
      <h2 className="text-center heading-2">
        Find the support you need without feeling overwhelmed
      </h2>

      {/* Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-5 xl:gap-5 w-full sm:w-8/12 md:w-full sm:mx-auto mt-10 max-w-[1270px]"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {cards.map((card, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            className="relative rounded-[10px] overflow-hidden h-85 lg:h-auto lg:aspect-video group"
          >
            <Image
              src={card.image}
              alt={card.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />

            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to bottom, #0000004D, #00000066, #000000BF",
              }}
            />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-5">
              <div className="lg:w-10/12">
                <span
                  className={`inline-flex w-fit items-center text-[10px]  tracking-[2px] bg-[#0000004D]  rounded-full px-2 py-1 border-[0.67px]  ${card.borderColor} ${card.buttonColor} `}
                >
                  {card.category}
                </span>

                <h3 className="text-white font-semibold text-lg lg:text-xl leading-snug my-3">
                  {card.title}
                </h3>

                <p className="text-[#FFFFFFB2] text-sm leading-relaxed ">
                  {card.quote}
                </p>

                <Link
                  href={card.link}
                  className={`inline-flex items-center gap-2 text-[#1A1A1A] text-sm font-semibold    w-fit transition-opacity hover:opacity-90 mt-6 ${card.buttonColor}`}
                >
                  {card.linkText} <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
