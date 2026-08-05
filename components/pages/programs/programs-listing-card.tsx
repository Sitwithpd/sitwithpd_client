"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Spinner } from "@/components/spinner";
import { PaymentSecurityBadge } from "@/components/payment-security-badge";
import { useModalStore } from "@/components/store/use-modal-store";
import { useAuthStore } from "@/store/use-auth-store";
import { useCreatePayment } from "@/lib/api/hooks/payments/payments.hooks";
import { useGetDashboardData } from "@/lib/api/hooks/dashboard/dashboard.hooks";
import { Purchase } from "@/lib/api/services/dashboard/dashboard.services";
import { CreatePaymentPayload } from "@/lib/api/services/payments/payments.services";
import {
  SignInRequiredModal,
  SIGN_IN_MODAL_ID,
} from "@/components/sign-in-required-modal";
import { showErrorToast } from "@/lib/toast-helpers";
import { formatCurrency } from "@/lib/utils";
import { Program } from "@/types/programs.types";
import { VideoHighlights } from "@/components/shared/video-highlights";
import type { VideoItem } from "@/components/shared/video-highlights";
import { openCheckout } from "@/lib/checkout";

// Badge colour config keyed by category
const CATEGORY_BADGE: Record<
  Program["category"],
  { bg: string; text: string; label: string }
> = {
  STUDENTS: {
    bg: "bg-regular-button",
    text: "text-white",
    label: "For Students",
  },
  PROFESSIONALS: {
    bg: "bg-[#FA9874]",
    text: "text-white",
    label: "For Professionals",
  },
  LEADERS: {
    bg: "bg-[#3D89DF]",
    text: "text-white",
    label: "For Leaders",
  },
};

export default function ProgramsListingCard({ program }: { program: Program }) {
  // Destructure with safe defaults — guards against missing/null fields at runtime
  const {
    id = "",
    title = "",
    description = "",
    category = "STUDENTS" as Program["category"],
    price,
    currency = "NGN",
    thumbnail,
    durationWeeks,
    hoursPerWeek = 0,
    learningOutcomes = [],
    startDate,
    facilitatorName,
    _count = { purchases: 0, weeks: 0 },
    // tags & audience may arrive as objects {id, name, slug, type} from the API
    // so we coerce each entry to a string to prevent "Objects are not valid as
    // a React child" runtime errors.
    tags: rawTags = [],
    audience: rawAudience = [],
    videoLinks = [],
  } = program ?? {};

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const toLabel = (item: any): string =>
    typeof item === "string" ? item : (item?.name ?? "");

  const tags = (Array.isArray(rawTags) ? rawTags : [])
    .map(toLabel)
    .filter(Boolean);
  const audience = (Array.isArray(rawAudience) ? rawAudience : [])
    .map(toLabel)
    .filter(Boolean);

  const [agreedPolicies, setAgreedPolicies] = useState(false);
  const [agreedConsent, setAgreedConsent] = useState(false);
  const allChecked = agreedPolicies && agreedConsent;

  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const { mutate: createPayment, isPending: isCreatingPayment } =
    useCreatePayment();
  const { data, isLoading: dashboardDataLoading } = useGetDashboardData({
    enabled: isAuthenticated,
  });

  const openModal = useModalStore((state) => state.openModal);
  const closeModal = useModalStore((state) => state.closeModal);

  const existingProgram = data?.data?.purchases?.find(
    (p: Purchase) => p.programId === id,
  );

  const badge = CATEGORY_BADGE[category] ?? {
    bg: "bg-gray-400",
    text: "text-white",
    label: category,
  };

  // ---- Payment ----
  const startPayment = () => {
    const payload: CreatePaymentPayload = {
      itemId: id,
      type: "PROGRAM",
    };

    createPayment(payload, {
      onSuccess: (data) => {
        closeModal("loading");
        openCheckout(data?.data?.authorizationUrl);
      },
      onError: () => {
        closeModal("loading");
        localStorage.removeItem("pending_enrollment");
      },
    });
  };

  const enrolNow = () => {
    if (!id) {
      showErrorToast("Program ID is invalid or cannot be found.");
      return;
    }

    if (!isAuthenticated) {
      openModal(
        SIGN_IN_MODAL_ID,
        <SignInRequiredModal
          message={`You need to be signed in to enrol in ${title ? `"${title}"` : "a programme"}. Sign in to your account so you can get started on your learning journey.`}
          callbackUrl={`/programs/programs-listing#${id}`}
        />,
      );
      return;
    }

    if (existingProgram) {
      showErrorToast("You are already enrolled in this program.");
      return;
    }

    localStorage.setItem(
      "pending_enrollment",
      JSON.stringify({
        programId: id,
        programTitle: title || "your programme",
      }),
    );

    startPayment();
  };

  useEffect(() => {
    if (isCreatingPayment) {
      openModal(
        "loading",
        <div className="flex flex-col items-center justify-center gap-4 bg-white p-10 rounded-lg min-w-50">
          <Spinner size={40} />
        </div>,
        { isMutation: true },
      );
    }
  }, [isCreatingPayment, openModal]);

  // ---- Button state ----
  const getButtonByState = () => {
    if (dashboardDataLoading) {
      return (
        <Button disabled variant="regular">
          <Spinner />
        </Button>
      );
    }

    if (existingProgram) {
      return (
        <Link href={`/dashboard/program/${existingProgram.programId}`}>
          <Button variant="regular" className="rounded-[8px]!">
            Continue Program
          </Button>
        </Link>
      );
    }

    return (
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-3 p-4 bg-brand-green/10 rounded-lg border border-brand-green/20">
          <label className="flex items-start gap-3 cursor-pointer group">
            <Checkbox
              checked={agreedPolicies}
              onCheckedChange={(checked) => setAgreedPolicies(checked === true)}
              className="mt-0.5 shrink-0 border-2 border-brand-green/20"
            />
            <span className="text-xs text-[#606060] leading-relaxed">
              I have read and agree to the{" "}
              <Link
                href="/terms"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-green font-semibold hover:underline"
              >
                Terms &amp; Conditions
              </Link>
              ,{" "}
              <Link
                href="/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-green font-semibold hover:underline"
              >
                Privacy Policy
              </Link>
              ,{" "}
              <Link
                href="/refund-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-green font-semibold hover:underline"
              >
                Refund &amp; Cancellation Policy
              </Link>
              , and{" "}
              <Link
                href="/medical-disclaimer"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-green font-semibold hover:underline"
              >
                Medical Disclaimer
              </Link>
              . I understand that Sit-With-PD&apos;s services do not replace
              professional medical or emergency healthcare services.
            </span>
          </label>
          <label className="flex items-start gap-3 cursor-pointer group">
            <Checkbox
              checked={agreedConsent}
              onCheckedChange={(checked) => setAgreedConsent(checked === true)}
              className="mt-0.5 shrink-0 border-2 border-brand-green/20"
            />
            <span className="text-xs text-[#606060] leading-relaxed">
              I consent to the collection and processing of my personal
              information in accordance with the{" "}
              <Link
                href="/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-green font-semibold hover:underline"
              >
                Privacy Policy
              </Link>{" "}
              and applicable data protection laws, including the Nigeria Data
              Protection Regulation (NDPR) and the UK General Data Protection
              Regulation (UK GDPR).
            </span>
          </label>
        </div>
        <p className="text-[11px] text-[#606060] leading-relaxed font-medium">
          <span className="font-semibold text-[#181D27]">Important:</span> By
          proceeding with payment, you acknowledge that Sit-With-PD Global
          Therapeutic Network provides wellbeing, educational, advocacy, and
          support services only. Our services do not constitute medical advice,
          diagnosis, treatment, pharmaceutical services, or emergency
          healthcare.
        </p>
        <PaymentSecurityBadge />
        <Button
          onClick={enrolNow}
          variant="regular"
          disabled={!allChecked}
          className="rounded-[8px]!"
        >
          Enrol now
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="ml-2 transition-transform group-hover:translate-x-1"
          >
            <path
              d="M7.4 1.4L13.1 7.1L7.4 12.8M1.1 7.1H13.1"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Button>
      </div>
    );
  };

  return (
    <div className="flex flex-col w-full even:bg-[#F5F7F5] ">
      <section
        key={id}
        className="w-full flex flex-col pt-16 lg:pt-24 lg:pb-10  "
      >
        <div className="w-11/12 mx-auto max-w-7xl">
          {/* Header Area */}
          <div className="lg:mb-8  py-4 lg:py-0  sticky top-32 lg:static  z-10 bg-white ">
            <div className="flex items-center gap-3 mb-4">
              <span
                className={`px-3 py-1.5 rounded-full text-xs font-medium tracking-wide ${badge.bg} ${badge.text}`}
              >
                {badge.label}
              </span>
              {durationWeeks && (
                <span className="text-[#606060] text-sm ">
                  {durationWeeks}-week programme
                </span>
              )}
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold lg:leading-[1.1] mb-2 lg:mb-4 text-[#131313] tracking-tight">
              {title}
            </h2>
            {facilitatorName && (
              <p className="text-regular-button italic text-sm lg:text-base ">
                Facilitated by {facilitatorName}
              </p>
            )}
          </div>

          {/* Content Area */}
          <div className="flex flex-col gap-5 lg:gap-10 items-start lg:flex-row">
            {/* Image */}
            <div className="w-full lg:w-[40%] shrink-0 relative overflow-hidden rounded-[16px] aspect-4/3 ">
              <Image
                src={thumbnail || "/images/Image.webp"}
                alt={title}
                fill
                className="object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0  bg-linear-to-t from-[#0F2318B2] to-[#00000000] flex flex-col justify-end p-4">
                {tags.length > 0 && (
                  <div className="flex flex-wrap gap-2.5">
                    {tags.slice(0, 3).map((tag, i) => (
                      <div key={tag + i} className="flex items-center gap-2">
                        <p
                          key={`${tag}-${i}`}
                          className="text-[#A8D675] tracking-[2px] text-xs  "
                        >
                          {tag}
                        </p>
                        <span
                          className={`bg-[#A8D675] w-0.5 h-0.5 rounded-full  ${i === tags.length - 1 ? "hidden" : ""} `}
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Text / Details */}
            <div className="w-full lg:flex-1 flex flex-col pt-2 ">
              <p className="text-[#606060] bg-[#F5F7F5] py-5 pl-4 text-base leading-relaxed mb-5 whitespace-pre-wrap lg:max-h-75 lg:overflow-y-auto lg:pr-2 custom-scrollbar">
                {description}
              </p>

              {learningOutcomes.length > 0 && (
                <>
                  <h3 className="text-[13px] font-semibold text-[#1F4842] tracking-[1.5px] uppercase mb-4">
                    What You&apos;ll Cover
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 text-[#475467]">
                    {learningOutcomes.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2.5 text-[#344054] text-sm leading-snug lg:w-10/12"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-regular-button mt-1.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}

              <hr className="w-full border-t border-gray-100 mt-8" />

              <div className=" flex flex-col lg:grid grid-cols-2 sm:grid-cols-3 gap-y-4 gap-x-4 w-full mb-10">
                {durationWeeks && (
                  <div>
                    <h4 className="text-[10px] sm:text-[11px]  text-[#606060] uppercase tracking-[1px] mb-2">
                      DURATION
                    </h4>
                    <p className="text-base font-medium text-[#131313] leading-snug pr-4">
                      {durationWeeks} weeks · {hoursPerWeek}{" "}
                      {hoursPerWeek === 1 ? "hr" : "hrs"}/week
                    </p>
                  </div>
                )}
                {price != null && (
                  <div>
                    <h4 className="text-[10px] sm:text-[11px] text-[#606060] uppercase tracking-[1px] mb-2">
                      INVESTMENT
                    </h4>
                    <p className="text-base font-medium text-[#131313] leading-snug pr-4">
                      {formatCurrency(price, currency)} per participant
                    </p>
                  </div>
                )}
                {startDate && (
                  <div className="col-span-2 sm:col-span-1">
                    <h4 className="text-[10px] sm:text-[11px]  text-[#606060] uppercase tracking-[1px] mb-2">
                      NEXT COHORT
                    </h4>
                    <p className="text-base font-semibold text-regular-button leading-snug pr-4">
                      {new Date(startDate).toLocaleDateString("en-GB", {
                        month: "long",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                )}
              </div>

              <div>{getButtonByState()}</div>
            </div>
          </div>
        </div>

        {/* Who This Is For / Enrolment count bottom bar */}
        {audience.length > 0 && (
          <div className="w-full bg-[#F5F7F5] border-[0.67px] border-[#E8E8E8] mt-10 py-6">
            <div className=" flex flex-col md:flex-row md:items-center gap-6 md:gap-12 lg:gap-24 w-11/12 mx-auto lg:pr-20">
              <div className="shrink-0">
                <h3 className="text-[11px] font-bold text-[#1F4842] tracking-[1.5px] uppercase ">
                  who is this for
                </h3>
              </div>
              <ul className="flex flex-row flex-wrap gap-x-8 gap-y-4   w-full">
                {audience.map((aud, i) => (
                  <li
                    key={`aud-${i}`}
                    className="flex items-center gap-2.5 text-[14px] text-[#344054]  w-auto "
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#A8D675]  shrink-0" />
                    <span>{aud}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </section>

      {/* ── Video highlights ── */}
      {videoLinks.length > 0 &&
        (() => {
          const programVideoItems: VideoItem[] = videoLinks.map((url) => ({
            url,
            sourceName: title,
            sourceSubtitle: facilitatorName
              ? `Facilitated by ${facilitatorName}`
              : undefined,
          }));
          return (
            <div className="w-full bg-[#F5F7F5] border-t border-[#E8E8E8] py-8">
              <div className="w-11/12 mx-auto max-w-7xl">
                <p className="text-[11px] font-bold text-[#1F4842] tracking-[1.5px] uppercase mb-4">
                  Programme Videos
                </p>
                <VideoHighlights items={programVideoItems} />
              </div>
            </div>
          );
        })()}
    </div>
  );
}
