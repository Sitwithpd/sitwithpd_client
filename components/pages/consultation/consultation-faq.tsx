"use client";

import { fadeInUp, staggerContainerSlow } from "@/lib/motion-variants";
import { motion } from "motion/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FaqItem {
  question: string;
  answer: string;
}

const faqItems: FaqItem[] = [
  {
    question: "Is my consultation confidential?",
    answer:
      "Yes, absolutely. Every consultation is held in strict confidence. What you share stays between you and your consultant, creating a safe space for honest and meaningful conversations.",
  },
  {
    question: "How long does a consultation last?",
    answer:
      "A standard consultation session typically lasts between 45 minutes to one hour. Depending on the nature of your needs, follow-up sessions can be arranged to provide continued support.",
  },
  {
    question: "Do I need to prepare anything?",
    answer:
      "There's no specific preparation required. However, it can be helpful to think about the key areas you'd like to discuss or any questions you'd like answered during the session.",
  },
  {
    question: "Can organisations book consultations?",
    answer:
      "Yes! We work with organisations of all sizes. Whether you need leadership development, team coaching, or organisational strategy, we can tailor our consultations to meet your organisation's needs.",
  },
  {
    question: "What happens after my session?",
    answer:
      "After your session, you'll receive a summary of key takeaways and action steps discussed. We also offer follow-up sessions and ongoing support to help you stay on track with your goals.",
  },
];

export function ConsultationFaq() {
  return (
    <section className="w-full bg-[#F5F7F5] py-16 lg:py-20">
      <div className="w-11/12 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20">
          {/* Left Column — Heading */}
          <motion.div
            variants={staggerContainerSlow}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="lg:col-span-5 flex flex-col gap-3 lg:pr-20"
          >
            <motion.span
              variants={fadeInUp}
              className="text-regular-button font-semibold text-sm tracking-[2.5px] uppercase block "
            >
              Frequently Asked Questions
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="heading-2"
            >
              Have a question?
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-sm md:text-base text-[#606060] leading-relaxed max-w-md"
            >
              If you don&apos;t see your question here, reach out to our team. We&apos;re happy to help you understand what&apos;s involved before you book.
            </motion.p>
          </motion.div>

          {/* Right Column — Accordion */}
          <motion.div
            variants={staggerContainerSlow}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-7"
          >
            <motion.div variants={fadeInUp}>
              <Accordion type="single" collapsible className="w-full space-y-3">
                {faqItems.map((item, index) => (
                  <AccordionItem
                    key={index}
                    value={`faq-${index}`}
                    className="border-[0.67px] border-[##EEF2F6] rounded-[10px] px-3 py-1"
                  >
                    <AccordionTrigger className="text-base  font-medium text-[#131313] hover:no-underline py-5 cursor-pointer">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-[#606060] leading-relaxed pb-5">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
