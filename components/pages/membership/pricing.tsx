"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/lib/utils";
import { motion } from "motion/react";
import {
  fadeInUp,
  staggerContainerDelayed,
  staggerContainerSlow,
} from "@/lib/motion-variants";
import { Check } from "lucide-react";
import { useMembershipPlans, useMySubscription } from "@/lib/api/hooks/memberships/memberships.hooks";
import type { BillingInterval, MembershipPlan } from "@/lib/api/services/memberships/memberships.services";
import { useAuthStore } from "@/store/use-auth-store";
import { useModalStore } from "@/components/store/use-modal-store";
import {
  SignInRequiredModal,
  SIGN_IN_MODAL_ID,
} from "@/components/sign-in-required-modal";
import { Skeleton } from "@/components/ui/skeleton";

function PlanSkeleton() {
  return (
    <div className="flex-1 rounded-[20px] bg-white border border-[#E8E8E8] p-8 space-y-4">
      <Skeleton className="h-6 w-24 rounded-full" />
      <Skeleton className="h-14 w-40" />
      <Skeleton className="h-4 w-full" />
      <div className="space-y-3 pt-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <Skeleton key={i} className="h-4 w-5/6" />
        ))}
      </div>
      <Skeleton className="h-12 w-full rounded-[12px]" />
    </div>
  );
}

export function MembershipPricing() {
  const [interval, setInterval] = useState<BillingInterval>("MONTHLY");
  const router = useRouter();
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const openModal = useModalStore((state) => state.openModal);

  const { data, isLoading, isError } = useMembershipPlans();
  const { data: subRes } = useMySubscription(isAuthenticated);

  const plans = data?.data ?? [];
  const current = subRes?.data ?? null;
  const isAnnual = interval === "ANNUAL";

  const priceFor = (plan: MembershipPlan) =>
    isAnnual ? plan.annualPrice : plan.monthlyPrice;

  const handleChoose = (plan: MembershipPlan) => {
    if (!isAuthenticated) {
      openModal(
        SIGN_IN_MODAL_ID,
        <SignInRequiredModal
          message="You need to be signed in to start a membership. Sign in to choose your plan."
          callbackUrl="/membership"
        />,
      );
      return;
    }
    // Checkout lives in the dashboard, where the member can see what they are
    // moving from before anything is charged.
    router.push(`/dashboard/membership?plan=${plan.id}&interval=${interval}`);
  };

  const labelFor = (plan: MembershipPlan) => {
    if (!current || !current.isEntitled) return `Get ${plan.name} Plan`;
    if (current.plan.id === plan.id && current.interval === interval) {
      return "Your current plan";
    }
    return "Switch to this plan";
  };

  const isCurrent = (plan: MembershipPlan) =>
    !!current?.isEntitled &&
    current.plan.id === plan.id &&
    current.interval === interval;

  return (
    <section className="py-20 bg-[#F4F7F3] flex flex-col items-center">
      <motion.div
        variants={staggerContainerSlow}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        className="flex flex-col items-center text-center mb-10"
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

      {/* Billing cadence — pointless while there are no plans to apply it to. */}
      {(isLoading || plans.length > 0) && (
      <div className="mb-12 inline-flex items-center gap-1 rounded-full bg-white border border-[#D0DFD0] p-1">
        {(["MONTHLY", "ANNUAL"] as const).map((value) => (
          <button
            key={value}
            type="button"
            onClick={() => setInterval(value)}
            aria-pressed={interval === value}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer ${
              interval === value
                ? "bg-[#1F4842] text-white"
                : "text-[#1F4842] hover:bg-[#F4F7F3]"
            }`}
          >
            {value === "MONTHLY" ? "Monthly" : "Annual"}
            {value === "ANNUAL" && (
              <span className="ml-2 text-[11px] text-[#60935D] font-semibold">
                Save more
              </span>
            )}
          </button>
        ))}
      </div>
      )}

      {isError || (!isLoading && plans.length === 0) ? (
        <div className="w-11/12 xl:max-w-3xl mx-auto text-center py-20 bg-white rounded-[16px] border border-dashed border-slate-200">
          <p className="text-lg text-[#667085] max-w-xl mx-auto">
            {isError
              ? "We couldn't load our membership plans just now. Please refresh the page or try again shortly."
              : "Membership plans are being finalised. Please check back soon."}
          </p>
        </div>
      ) : (
        <motion.div
          variants={staggerContainerDelayed}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col lg:flex-row gap-6 xl:max-w-6xl w-11/12 mx-auto"
        >
          {isLoading
            ? Array.from({ length: 3 }).map((_, i) => <PlanSkeleton key={i} />)
            : plans.map((plan) => {
                const highlight = plan.isFeatured;
                return (
                  <motion.div
                    key={plan.id}
                    variants={fadeInUp}
                    className={`flex flex-col flex-1 rounded-[20px] shadow-[0px_16px_48px_0px_#1F484255] p-8 transition-all duration-300 relative
                      ${
                        highlight
                          ? "bg-[#1F4842] text-white z-10 xl:scale-[1.06] xl:shadow-2xl"
                          : "bg-white border border-[#E8E8E8] shadow-sm"
                      }
                    `}
                  >
                    <div className="mb-5">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-[11px] font-semibold tracking-widest uppercase
                          ${highlight ? "bg-[#FFFFFF1A] text-[#A8D675]" : "bg-[#F0F5EF] text-[#60935D]"}
                        `}
                      >
                        {plan.name}
                      </span>
                    </div>

                    <div className="flex items-end gap-1 mb-1">
                      <span
                        className={`text-[3.25rem] font-bold leading-none ${highlight ? "text-white" : "text-[#131313]"}`}
                      >
                        {formatCurrency(priceFor(plan), plan.currency)}
                      </span>
                      <span
                        className={`text-base mb-2 font-medium ${highlight ? "text-[#A8D675]" : "text-[#606060]"}`}
                      >
                        {isAnnual ? "/yr" : "/mo"}
                      </span>
                    </div>

                    <p
                      className={`text-xs mb-4 h-4 ${highlight ? "text-white/60" : "text-[#8A8A8A]"}`}
                    >
                      {isAnnual
                        ? `${formatCurrency(plan.annualPricePerMonth, plan.currency)}/mo, billed annually`
                        : ""}
                    </p>

                    {plan.tagline && (
                      <p
                        className={`text-sm mb-6 leading-relaxed ${highlight ? "text-white/70" : "text-[#606060]"}`}
                      >
                        {plan.tagline}
                      </p>
                    )}

                    <div
                      className={`w-full h-px mb-6 ${highlight ? "bg-white/20" : "bg-[#EAEAEA]"}`}
                    />

                    <ul className="space-y-3 mb-8 flex-1">
                      {plan.benefits.map((benefit, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-3">
                          <span
                            className={`mt-0.5 w-4.5 h-4.5 rounded-full flex items-center justify-center shrink-0
                              ${highlight ? "bg-[#649351]" : "bg-[#649351]/15"}
                            `}
                          >
                            <Check
                              className={`w-3 h-3 ${highlight ? "text-white" : "text-[#649351]"}`}
                              strokeWidth={2.5}
                            />
                          </span>
                          <span
                            className={`text-sm leading-relaxed ${highlight ? "text-white/90" : "text-[#242424]"}`}
                          >
                            {benefit}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      variant={highlight ? "regular" : "outline"}
                      disabled={isCurrent(plan)}
                      onClick={() => handleChoose(plan)}
                      className={`w-full h-12 text-sm font-medium rounded-[12px]
                        ${
                          highlight
                            ? "bg-[#60935D] hover:bg-[#4E7D4C] text-white border-none"
                            : "bg-[#F4F7F3] border border-[#D0DFD0] text-[#1F4842] hover:bg-[#F5F5F5]"
                        }
                      `}
                    >
                      {labelFor(plan)}
                    </Button>
                  </motion.div>
                );
              })}
        </motion.div>
      )}
    </section>
  );
}
