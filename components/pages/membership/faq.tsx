"use client";

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

const faqs = [
  {
    question: "Can I change my membership tier?",
    answer:
      "Yes! You can upgrade or downgrade your membership at any time. Changes take effect at the start of your next billing cycle.",
  },
  {
    question: "Is there a long-term commitment required?",
    answer:
      "No, all our memberships are billed month-to-month and you can cancel anytime without any hidden penalty fees.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards including Visa, Mastercard, American Express, and Discover.",
  },
  {
    question: "Do you offer annual discounts?",
    answer:
      "Yes, members who choose to be billed annually receive a 15% discount equivalent to almost 2 months free.",
  },
  {
    question: "What if I want to cancel my membership?",
    answer:
      "You can easily cancel your membership through your account settings or by contacting our support team.",
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
