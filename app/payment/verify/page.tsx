"use client";

import { Spinner } from "@/components/spinner";
import { useVerifyPaystackPayment } from "@/lib/api/hooks/payments/payments.hooks";
import { CheckCircle, XCircle, AlertCircle, ArrowRight, Undo2 } from "lucide-react";
import { useSearchParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/lib/utils";
import Link from "next/link";

/** Where to send the user back to when a payment did not go through. */
const RETRY_DESTINATION: Record<string, { href: string; label: string }> = {
  PROGRAM: { href: "/programs", label: "Back to Programmes" },
  CAMP: { href: "/camps", label: "Back to Camps" },
  CONSULTATION: { href: "/consultation", label: "Back to Consultation" },
};

export function VerifyPayment({
  reference,
  redirectStatus,
}: {
  reference: string;
  redirectStatus: string;
}) {
  const router = useRouter();
  const [countdown, setCountdown] = useState(2);
  const { data, isLoading, isError, error } =
    useVerifyPaystackPayment(reference);

  const payment = data?.data;

  // Success is only ever asserted by the API. The provider's redirect params
  // are attacker-controlled, so they may downgrade the outcome but never
  // upgrade it.
  const isSuccess = payment?.status === "SUCCESS";
  const isCancelled = !isSuccess && redirectStatus === "cancelled";
  const isFailed =
    !isSuccess &&
    !isCancelled &&
    (payment?.status === "FAILED" || redirectStatus === "failed");
  // An abandoned checkout leaves the row PENDING until the expiry sweeper runs,
  // so PENDING alone does not mean "still processing".
  const isPending = !isSuccess && !isCancelled && !isFailed;

  const retry = RETRY_DESTINATION[payment?.type ?? ""] ?? {
    href: "/programs",
    label: "Back to Programmes",
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (
      isSuccess &&
      (payment?.type === "PROGRAM" || payment?.type === "CAMP")
    ) {
      timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            router.replace("/dashboard");
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isSuccess, payment?.type, router]);

  if (!reference) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-6 p-6">
        <div className="bg-red-50 p-4 rounded-full">
          <AlertCircle className="w-12 h-12 text-brand-red" />
        </div>
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-semibold text-primary-text">
            Invalid Reference
          </h2>
          <p className="text-secondary-text max-w-md">
            We couldn&apos;t find a valid payment reference. If you believe this is
            an error, please contact support.
          </p>
        </div>
        <Link href="/">
          <Button variant="outline">Return Home</Button>
        </Link>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-6">
        <Spinner size={48} />
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-semibold text-primary-text animate-pulse">
            Verifying Payment
          </h2>
          <p className="text-secondary-text">
            Please wait while we confirm your transaction...
          </p>
        </div>
      </div>
    );
  }

  // A cancelled checkout is a known outcome, so report it as such even when the
  // lookup fails — a "Verification Error" would imply something went wrong.
  if (isError && !isCancelled) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-6 p-6">
        <div className="bg-red-50 p-4 rounded-full">
          <XCircle className="w-12 h-12 text-brand-red" />
        </div>
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-semibold text-primary-text">
            Verification Error
          </h2>
          <p className="text-secondary-text max-w-md">
            {error?.message ||
              "An unexpected error occurred while verifying your payment."}
          </p>
        </div>
        <div className="flex gap-4">
          <Button onClick={() => window.location.reload()}>Try Again</Button>
          <Link href="/dashboard">
            <Button
              variant="outline"
              className="text-regular-button border-regular-button"
            >
              Go to Dashboard
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] p-6">
      <div className="bg-white dark:bg-neutral-900 shadow-xl rounded-2xl p-8 max-w-md w-full border border-neutral-100 dark:border-neutral-800 text-center space-y-8 transform transition-all animate-in fade-in zoom-in duration-500">
        {isSuccess ? (
          <>
            <div className="flex justify-center">
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-full animate-bounce">
                <CheckCircle className="w-16 h-16 text-regular-button" />
              </div>
            </div>
            <div className="space-y-3">
              <h2 className="text-3xl font-bold text-primary-text">
                Payment Success!
              </h2>
              <p className="text-secondary-text text-lg">
                Your payment of{" "}
                <span className="font-semibold text-primary-text">
                  {formatCurrency(payment?.amount ?? 0, payment?.currency)}
                </span>{" "}
                has been verified.
              </p>
              <div className="bg-green-50 py-2 px-4 rounded-lg inline-block">
                <p className="text-regular-button  text-sm font-medium">
                  Redirecting to dashboard in {countdown}s...
                </p>
              </div>
            </div>
            <Button
              variant={"regular"}
              onClick={() => router.replace("/dashboard")}
            >
              Continue to Dashboard
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </>
        ) : isCancelled ? (
          <>
            <div className="flex justify-center">
              <div className="bg-neutral-100 dark:bg-neutral-800 p-4 rounded-full">
                <Undo2 className="w-16 h-16 text-neutral-500" />
              </div>
            </div>
            <div className="space-y-3">
              <h2 className="text-3xl font-bold text-primary-text">
                Payment Cancelled
              </h2>
              <p className="text-secondary-text">
                You cancelled the payment before it was completed, so you have
                not been charged. Your place is not reserved until payment goes
                through.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Link href={retry.href}>
                <Button variant={"regular"} className="w-full">
                  {retry.label}
                </Button>
              </Link>
              <Link href="/dashboard">
                <Button
                  variant="outline"
                  className="w-full text-regular-button border-regular-button"
                >
                  Go to Dashboard
                </Button>
              </Link>
            </div>
          </>
        ) : isPending ? (
          <>
            <div className="flex justify-center">
              <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-full">
                <AlertCircle className="w-16 h-16 text-amber-500" />
              </div>
            </div>
            <div className="space-y-3">
              <h2 className="text-3xl font-bold text-primary-text">
                Payment Pending
              </h2>
              <p className="text-secondary-text">
                Your payment is still being processed. This can happen while
                your bank confirms the transaction.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Button
                variant="outline"
                className="text-regular-button border-regular-button"
                onClick={() => window.location.reload()}
              >
                Refresh Status
              </Button>
              <Button variant={"regular"} onClick={() => router.replace("/")}>
                Continue to Home
              </Button>
            </div>
          </>
        ) : (
          <>
            <div className="flex justify-center">
              <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-full">
                <XCircle className="w-16 h-16 text-brand-red" />
              </div>
            </div>
            <div className="space-y-3">
              <h2 className="text-3xl font-bold text-primary-text">
                Payment Failed
              </h2>
              <p className="text-secondary-text">
                Unfortunately, your transaction could not be completed. Please
                check your bank and try again.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Link href={retry.href}>
                <Button className="w-full">{retry.label}</Button>
              </Link>
              <Button
                variant="outline"
                className="text-regular-button border-regular-button"
                onClick={() => window.location.reload()}
              >
                Try Verification Again
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default function VerifyPaymentWrapper() {
  return (
    <React.Suspense
      fallback={
        <div className="flex flex-col items-center justify-center min-h-screen">
          <Spinner size={48} />
        </div>
      }
    >
      <VerifyPaymentContent />
    </React.Suspense>
  );
}

function VerifyPaymentContent() {
  const searchParams = useSearchParams();
  const reference =
    searchParams.get("reference") || searchParams.get("trxref") || searchParams.get("tx_ref") || "";
  // Flutterwave redirects with status=successful|cancelled|failed.
  const redirectStatus = (searchParams.get("status") || "").toLowerCase();

  return (
    <main className="min-h-screen bg-[#F9FAFB] dark:bg-black flex items-center justify-center font-inter w-full">
      <VerifyPayment reference={reference} redirectStatus={redirectStatus} />
    </main>
  );
}
