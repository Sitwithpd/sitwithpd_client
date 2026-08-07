"use client";

import { Button } from "@/components/ui/button";
import { Pill } from "@/components/ui/pill";
import { formatCurrency } from "@/lib/utils";
import { motion } from "motion/react";
import {
  fadeInUp,
  staggerContainerDelayed,
  staggerContainerSlow,
} from "@/lib/motion-variants";
import { Check } from "lucide-react";

const pricingPlans = [
  {
    name: "Standard",
    price: formatCurrency(100),
    period: "/mo",
    description: "Perfect for those beginning their wellness journey",
    highlight: false,
    features: [
      "Access to all community forums",
      "Program discounts (10%)",
      "Email support",
      "Access to downloadable resources",
    ],
    buttonText: "Get Standard Plan",
  },
  {
    name: "Blue",
    price: formatCurrency(250),
    period: "/mo",
    description: "For committed members ready to grow deeply",
    highlight: true,
    features: [
      "All Standard benefits",
      "Unlimited program access",
      "Priority email support",
      "Exclusive member webinars",
      "Member discounts on camps & retreats (15%)",
    ],
    buttonText: "Get Blue Plan",
  },
  {
    name: "Green",
    price: formatCurrency(500),
    period: "/mo",
    description: "For those seeking the ultimate transformation",
    highlight: false,
    features: [
      "All Blue benefits",
      "Dedicated personal facilitator",
      "Weekly 1-on-1 sessions",
      "Customized learning plans",
      "Priority access to new programs",
      "Exclusive retreats and camps access (25% off)",
    ],
    buttonText: "Get Green Plan",
  },
];

export function MembershipPricing() {
  return (
    <section id="pricing" className="py-20 bg-[#F4F7F3] flex flex-col items-center">
      {/* Header */}
      <motion.div
        variants={staggerContainerSlow}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        className="flex flex-col items-center text-center mb-14"
      >
        <motion.div variants={fadeInUp}>
          <span className="bg-[#1F4842] text-[#A8D675] font-semibold text-sm mb-4 flex justify-center items-center py-2 px-4 rounded-full">
            PRICING
          </span>
        </motion.div>
        <motion.h2 variants={fadeInUp} className="heading-2 text-center mb-4">
          Choose a Plan That Supports Your Growth
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          className="text-center text-[#697586] max-w-lg leading-6 text-sm md:text-base"
        >
          Flexible membership options designed to support your wellbeing. Access
          guidance, resources, and meaningful conversations at your pace.
        </motion.p>
      </motion.div>

      {/* Cards */}
      <motion.div
        variants={staggerContainerDelayed}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-col lg:flex-row gap-6 xl:max-w-6xl w-11/12  mx-auto "
      >
        {pricingPlans.map((plan, idx) => (
          <motion.div
            key={idx}
            variants={fadeInUp}
            className={`flex flex-col rounded-[20px] shadow-[0px_16px_48px_0px_#1F484255] p-8 transition-all duration-300 relative
              ${
                plan.highlight
                  ? "bg-[#1F4842] text-white z-10 xl:scale-[1.06] xl:shadow-2xl"
                  : "bg-white border border-[#E8E8E8] shadow-sm"
              }
            `}
          >
            {/* Badge */}
            <div className="mb-5">
              <span
                className={`inline-block px-3 py-1 rounded-full text-[11px] font-semibold tracking-widest uppercase
                  ${plan.highlight ? "bg-[#FFFFFF1A] text-[#A8D675]" : "bg-[#F0F5EF] text-[#60935D]"}
                `}
              >
                {plan.name}
              </span>
            </div>

            {/* Price */}
            <div className="flex items-end gap-1 mb-3">
              <span
                className={`text-[3.25rem] font-bold leading-none ${plan.highlight ? "text-white" : "text-[#131313]"}`}
              >
                {plan.price}
              </span>
              <span
                className={`text-base mb-2 font-medium ${plan.highlight ? "text-[#A8D675]" : "text-[#606060]"}`}
              >
                {plan.period}
              </span>
            </div>

            {/* Description */}
            <p
              className={`text-sm mb-6 leading-relaxed ${plan.highlight ? "text-white/70" : "text-[#606060]"}`}
            >
              {plan.description}
            </p>

            {/* Divider */}
            <div
              className={`w-full h-px mb-6 ${plan.highlight ? "bg-white/20" : "bg-[#EAEAEA]"}`}
            />

            {/* Features */}
            <ul className="space-y-3 mb-8 flex-1">
              {plan.features.map((feature, fIdx) => (
                <li key={fIdx} className="flex items-start gap-3">
                  <span
                    className={`mt-0.5 w-4.5 h-4.5 rounded-full flex items-center justify-center shrink-0
                      ${plan.highlight ? "bg-[#649351]" : "bg-[#649351]/15"}
                    `}
                  >
                    <Check
                      className={`w-3 h-3 ${plan.highlight ? "text-white" : "text-[#649351]"}`}
                      strokeWidth={2.5}
                    />
                  </span>
                  <span
                    className={`text-sm leading-relaxed ${plan.highlight ? "text-white/90" : "text-[#242424]"}`}
                  >
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            {/* Button */}
            <Button
              variant={plan.highlight ? "regular" : "outline"}
              className={`w-full h-12 text-sm font-medium rounded-[12px]
                ${
                  plan.highlight
                    ? "bg-[#60935D] hover:bg-[#4E7D4C] text-white border-none"
                    : "bg-[#F4F7F3] border border-[#D0DFD0] text-[#1F4842] hover:bg-[#F5F5F5]"
                }
              `}
            >
              {plan.buttonText}
            </Button>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
