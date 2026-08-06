"use client";

import React from "react";
import { motion } from "motion/react";
import {
  fadeInUp,
  staggerContainerDelayed,
  staggerContainerSlow,
} from "@/lib/motion-variants";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Pill } from "@/components/ui/pill";

const faqs: { question: string; answer: React.ReactNode }[] = [
  {
    question: "What is a Sit With PD Membership?",
    answer:
      "A Sit With PD Membership is your gateway into a transformational community dedicated to Purpose, Direction, and Personal Discovery. Members gain access to exclusive resources, guided growth experiences, therapeutic programmes, meaningful relationships, and opportunities designed to help them thrive personally, professionally, and purposefully.",
  },
  {
    question: "What benefits do members receive?",
    answer:
      "Membership benefits vary by plan but may include access to exclusive events, therapeutic camps, live masterclasses, digital resources, mentorship opportunities, networking with like-minded individuals, member-only community groups, discounts on programmes, and priority access to new initiatives and experiences.",
  },
  {
    question: "Can I upgrade or change my membership plan?",
    answer:
      "Yes. You can upgrade your membership at any time to enjoy additional benefits and opportunities. If you wish to change your plan, simply log into your account or contact our support team for assistance.",
  },
  {
    question: "Is the membership available internationally?",
    answer:
      "Absolutely. Sit With PD welcomes members from around the world. Whether you join from Africa, Europe, North America, Asia, or anywhere else, you'll be part of a global community committed to growth, healing, purpose, and impact.",
  },
  {
    question: "How long does my membership last?",
    answer:
      "Your membership remains active for the duration of your chosen subscription plan. To continue enjoying uninterrupted access to member benefits, simply renew your membership before it expires.",
  },
  {
    question: "Who should become a Sit With PD member?",
    answer:
      "Sit With PD Membership is for anyone seeking greater clarity, purpose, personal growth, emotional wellness, meaningful relationships, and lasting transformation. Whether you're a student, entrepreneur, professional, leader, or someone navigating life's next chapter, there's a place for you in our community.",
  },
  {
    question: "What payment methods are accepted?",
    answer: (
      <span>
        We offer flexible and secure payment options to make your membership
        experience seamless. Accepted payment methods include:
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Credit and debit cards (Visa, Mastercard, American Express)</li>
          <li>Bank transfers (local and international, where applicable)</li>
          <li>Mobile money payments (available in select regions)</li>
          <li>
            Online payment gateways (such as PayPal and other secure processors)
          </li>
          <li>Instalment payment options for selected membership plans</li>
        </ul>
        <span className="block mt-2">
          All payments are processed through secure, encrypted systems to ensure
          your financial information remains safe and protected at all times.
        </span>
      </span>
    ),
  },
];

export function MembershipFaq() {
  return (
    <section className="py-20 flex flex-col items-center">
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
            FAQ
          </span>
        </motion.div>
        <motion.h2 variants={fadeInUp} className="heading-2 text-center mb-3">
          Membership FAQ
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          className="text-[#697586] text-sm md:text-base max-w-sm leading-relaxed"
        >
          Everything you need to know about your membership
        </motion.p>
      </motion.div>

      {/* Accordion */}
      <motion.div
        variants={staggerContainerDelayed}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="w-full max-w-3xl px-4"
      >
        <motion.div variants={fadeInUp}>
          <Accordion
            type="single"
            collapsible
            defaultValue="faq-0"
            className="w-full space-y-3"
          >
            {faqs.map((faq, idx) => (
              <AccordionItem
                key={idx}
                value={`faq-${idx}`}
                className="border border-[#EAEAEA] rounded-[12px] px-5 py-1 shadow-sm bg-white"
              >
                <AccordionTrigger className="text-base font-semibold text-[#131313] hover:no-underline py-5 cursor-pointer">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-[#606060] leading-relaxed pb-5 pr-10">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </motion.div>
    </section>
  );
}
