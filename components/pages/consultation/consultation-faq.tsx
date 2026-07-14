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
      "Yes. Your privacy is respected, and every consultation is conducted with professionalism and discretion. What you share in our sessions stays in our sessions.",
  },
  {
    question: "How long does a consultation last?",
    answer:
      "Session lengths vary depending on the type of consultation  from focused one-hour sessions to half-day or full-day engagements. Exact details will be confirmed when you book.",
  },
  {
    question: "Do I need to prepare anything?",
    answer:
      "Simply complete the booking form and come ready to discuss your goals, questions, or challenges openly. We'll take care of the structure  you just bring yourself.",
  },
  {
    question: "Can organisations book consultations?",
    answer:
      "Absolutely. We work with businesses, educational institutions, churches, charities, government bodies, and community organisations to provide tailored advisory and development support.",
  },
  {
    question: "What happens after my session?",
    answer:
      "You'll leave with greater clarity, actionable recommendations, and concrete next steps. Where appropriate, we may also suggest ongoing coaching, training, or programme support to help you continue growing..",
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
