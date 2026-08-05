"use client";

import { useGetProgramById } from "@/lib/api/hooks/programs/programs.hooks";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import CardSkeletons from "@/components/skeletons/card-skeletons";
import { Suspense, useEffect, useState } from "react";
import { formatCurrency } from "@/lib/utils";
import {
  Calendar,
  Check,
  Clock10Icon,
} from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { PaymentSecurityBadge } from "@/components/payment-security-badge";
import LocationIcon from "@/pd-icons/location-icon";
import { showErrorToast } from "@/lib/toast-helpers";
import { useAuthStore } from "@/store/use-auth-store";

import { useCreatePayment } from "@/lib/api/hooks/payments/payments.hooks";
import { useModalStore } from "@/components/store/use-modal-store";
import { Spinner } from "@/components/spinner";
import {
  SignInRequiredModal,
  SIGN_IN_MODAL_ID,
} from "@/components/sign-in-required-modal";
import { useGetDashboardData } from "@/lib/api/hooks/dashboard/dashboard.hooks";
import { Purchase } from "@/lib/api/services/dashboard/dashboard.services";
import { CreatePaymentPayload } from "@/lib/api/services/payments/payments.services";
import { notFound } from "next/navigation";
import { openCheckout } from "@/lib/checkout";

function ProgramDetailsWrapper({ id }: { id: string }) {
  const [agreedPolicies, setAgreedPolicies] = useState(false);
  const [agreedConsent, setAgreedConsent] = useState(false);
  const allChecked = agreedPolicies && agreedConsent;

  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const {
    data: programData,
    isLoading,
    isError
  } = useGetProgramById(id);
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

  const labelText = "font-medium text-lg text-[#606060]";

  // adge color
  let typeVariant;
  function variantAssigner(type: "LEADERS" | "PROFESSIONALS" | "STUDENTS") {
    switch (type) {
      case "LEADERS":
        return (typeVariant = "warning");
      case "PROFESSIONALS":
        return (typeVariant = "hibiscus");
      case "STUDENTS":
        return (typeVariant = "success");
      default:
        return (typeVariant = "default");
    }
  }

  // program api response
  const program = programData?.data;
  const {
    title,
    description,
    thumbnail,
    category,
    price,
    durationWeeks,
    hoursPerWeek,
  } = program ?? {};

  // submit enrollment
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
        // Clear pending enrollment if payment init fails
        localStorage.removeItem("pending_enrollment");
      },
    });
  };

  // enrol user and start payment
  const enrolNow = () => {
    if (!id) {
      showErrorToast("Program ID is invalid or cannot be found.");
      return;
    }

    if (!isAuthenticated) {
      openModal(
        SIGN_IN_MODAL_ID,
        <SignInRequiredModal
          message="You need to be signed in to enrol in a programme. Sign in to your account so you can get started on your learning journey."
          callbackUrl={`/programs/${id}`}
        />,
      );
      return;
    }

    if (existingProgram) {
      showErrorToast("You are already enrolled in this program.");
      return;
    }

    // Save pending enrollment so the dashboard can show the congrats modal after payment
    localStorage.setItem(
      "pending_enrollment",
      JSON.stringify({
        programId: id,
        programTitle: title ?? "your programme",
      }),
    );

    startPayment();
  };

  // Render different buttons depending on if the user has registered for a course before
  const getButtonByState = () => {
    if (dashboardDataLoading) {
      return (
        <Button disabled variant="regular" className="w-full">
          <Spinner />
        </Button>
      );
    }

    if (existingProgram) {
      return (
        <Link
          href={`/dashboard/program/${existingProgram.programId}`}
          className="w-full mt-auto"
        >
          <Button variant="regular" className="rounded-[8px]! w-full">
            Continue Program
          </Button>
        </Link>
      );
    }

    return (
      <div className="flex flex-col gap-4 mt-auto">
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
        <p className="text-[11px] text-[#606060] leading-relaxed font-medium mt-1">
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
          className="rounded-[8px]! w-full"
        >
          Enrol now
        </Button>
      </div>
    );
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

  if (isLoading)
    return (
      <div className="min-h-screen flex justify-center items-center">
        <CardSkeletons />{" "}
      </div>
    );
  if (isError) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <p className="text-primary-text text-lg tex-center font-medium ">
          {notFound()}
        </p>
      </div>
    );
  }

  return (
    <section>
      <div className="w-10/12 sm:w-8/12 lg:w-10/12 max-w-6xl mx-auto my-30">
        <header>
          <h2 className="heading-2 text-center mb-7">Course Details </h2>
        </header>
        <div className="flex flex-col lg:flex-row    gap-10">
          <div className="flex-1">
            <div className="flex flex-col w-full lg:w-[70%] max-w-[506px] h-full bg-[#F2F2F1] p-4 transition-shadow">
              {/* Image Placeholder */}
              <div className="w-full object-top lg:object-center  aspect-3/2 mb-3 overflow-hidden relative">
                <Image
                  src={thumbnail ?? "/images/glimpse-2.png"}
                  alt={title || "Program"}
                  fill
                  className="object-cover"
                />

                {category && (
                  <Badge
                    variant={variantAssigner(category)}
                    className="absolute top-2 left-2 "
                  >
                    {category}
                  </Badge>
                )}
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-[#627B3A] mb-2">
                {title}
              </h3>
              <p className="text-sm text-[#263016] leading-relaxed whitespace-pre-wrap ">
                {description}
              </p>
            </div>
          </div>

          {/* product checkout  */}
          <div className="flex-1">
            <div className="max-w-[500px] shadow-[0px_4px_4px_#141A1A1F] w-full lg:w-[80%] flex flex-col gap-4 lg:ml-auto rounded-[10px] p-4 bg-[#FFFAFA]  sticky top-0">
              <div className="w-10/12 mx-auto flex flex-col gap-3 py-4">
                <h4 className="text-[#3A3E3F] text-[25px] font-semibold">
                  {formatCurrency(price, program.currency)}{" "}
                </h4>
                <p className="text-lg text-[#627B3A] font-semibold">{title}</p>
                <p className="flex items-center gap-3">
                  <Clock10Icon className="text-[#606060]" />{" "}
                  <span className={labelText}>{durationWeeks} weeks </span>
                </p>
                <p className="flex items-center gap-3">
                  <Calendar className="text-[#606060]" />{" "}
                  <span className={labelText}>
                    {hoursPerWeek} {hoursPerWeek === 1 ? "hour" : "hours"} per
                    week{" "}
                  </span>
                </p>
                <p className="flex items-center gap-3">
                  <LocationIcon className="text-[#606060]" />{" "}
                  <span className={labelText}>Online </span>
                </p>
              </div>
              {/* button here  */}
              {getButtonByState()}
            </div>
          </div>
        </div>

        {program.learningOutcomes && program.learningOutcomes.length > 0 && (
          <div className="bg-[#F9FAFB] dark:bg-[#1A1A1A] border border-[#EAECF0] mt-10 dark:border-[#333] rounded-[12px] p-6">
            <h3 className="text-base font-semibold text-secondary-text mb-4">
              Learning Outcomes
            </h3>
            <ul className="flex flex-col gap-3">
              {program.learningOutcomes.map((obj: string, i: number) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm text-primary-text leading-relaxed"
                >
                  <Check
                    className="text-regular-button shrink-0 mt-0.5"
                    size={18}
                  />
                  <span>{obj}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        {/* what you will gain  */}
        <section className="mt-10 lg:mt-20 relative">
          <div className="w-full lg:w-[80%] mx-auto">
            <header className="text-[#242424] font-semibold text-center  text-lg py-2 lg:py-0 border border-[#DDE4EA] w-full rounded-[8px]">
              What Participants Will Gain:
            </header>
            <div className=" lg:w-[60%] text-center mx-auto relative">
              <p className="text-sm text-[#606060] mt-2 border border-[#E8E8E8] p-2 rounded-[8px] ">
                Participants will receive tailored support for their growth
                journey; students will gain mentorship for career and personal
                development, professionals will gain improved productivity and
                workplace effectiveness, while leaders will learn strengthened
                decision-making, people management, and leadership capacity.
              </p>
            </div>
          </div>

          <div className="absolute top-1/2 left-20 -translate-y-1/2 hidden lg:block">
            <Image
              src={"/images/green-arrow-right.png"}
              alt=""
              width={80}
              height={80}
              className="object-contain"
            />
          </div>
        </section>

        <section className="lg:mt-20 mt-10 lg:w-[60%] text-center mx-auto relative">
          <header className="text-[#242424] font-semibold text-center  text-lg py-2 lg:py-0 border border-[#DDE4EA] w-full rounded-[8px]">
            About Our Programme
          </header>
          <p className="text-sm text-[#606060] mt-2 border border-[#E8E8E8] p-2 rounded-[8px] ">
            Our programmes are intentionally designed to provide personalised
            solutions for different categories of individuals, recognising that
            growth, leadership, and development are not one-size-fits-all. Each
            programme is carefully structured to address specific gaps, goals,
            and aspirations based on the participant’s chosen path.
          </p>
        </section>
      </div>
    </section>
  );
}

export default function ProgramDetailsClient({ id }: { id: string }) {
  return (
    <Suspense
      fallback={
        <p className="text-center min-h-dvh text-lg text-primary-text">
          Loading program...
        </p>
      }
    >
      <ProgramDetailsWrapper id={id} />
    </Suspense>
  );
}
