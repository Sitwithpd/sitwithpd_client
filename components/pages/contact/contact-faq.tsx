"use client";

import { motion } from "motion/react";
import { fadeInUp, staggerContainerSlow } from "@/lib/motion-variants";
import { Pill } from "@/components/ui/pill";

const faqs = [
  {
    question: "How much does a consultation session cost?",
    answer:
      "Our one-on-one consultation sessions are priced at $99 per 60-minute session. We also offer package options and membership discounts for ongoing support.",
    isHighlighted: false,
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "We ask for at least 24 hours' notice to reschedule or cancel a session. Cancellations made with less than 24 hours' notice may incur a cancellation fee.",
    isHighlighted: false,
  },
  {
    question: "Are sessions available online?",
    answer:
      "Yes. We offer both in-person and secure video sessions to accommodate your schedule and location. All online sessions are conducted on our confidential platform.",
    isHighlighted: false,
  },
  {
    question: "Is everything I share kept confidential?",
    answer:
      "Absolutely. All sessions are strictly confidential. We adhere to professional ethical standards and your privacy is our highest priority. Details are only shared with your explicit consent.",
    isHighlighted: false,
  },
  {
    question: "What can I expect in my first session?",
    answer:
      "Your first session is an initial assessment — a safe, welcoming conversation to understand your situation, concerns, and goals. There's no pressure to share more than you're comfortable with.",
    isHighlighted: false,
  },
  {
    question: "How do I know which service is right for me?",
    answer:
      "Not sure where to start? Simply reach out via the contact form or email us. Our team will guide you to the programme, camp, or consultation that best suits your needs and goals.",
    isHighlighted: true,
  },
];

export function ContactFaq() {
  return (
    <section className="w-full py-16 lg:py-24 bg-white">
      <div className="w-[90%] max-w-5xl mx-auto flex flex-col items-center">
        {/* Header */}
        <motion.div
          variants={staggerContainerSlow}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col items-center text-center mb-12"
        >
          <motion.div variants={fadeInUp}>
            <Pill text="Frequently Asked Questions" />
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="heading-2 text-[#101828] max-w-xl"
          >
            Everything you need to know
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-[#475467] text-base mt-3"
          >
            Have more questions? Reach out and we&apos;ll be happy to help.
          </motion.p>
        </motion.div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                delay: i * 0.1,
                duration: 0.5,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="flex flex-col p-7 rounded-[16px]"
              style={{
                backgroundColor: faq.isHighlighted ? "#1F4842" : "#FFF",
                border: faq.isHighlighted ? "none" : "1px solid #E8E8E8",
              }}
            >
              <h3
                className="font-semibold text-base mb-3 leading-snug"
                style={{
                  color: faq.isHighlighted ? "#A8D675" : "#131313",
                }}
              >
                {faq.question}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{
                  color: faq.isHighlighted ? "#FFFFFFB2" : "#606060",
                }}
              >
                {faq.answer}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
