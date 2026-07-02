"use client";

import { useModalStore } from "./store/use-modal-store";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import Link from "next/link";
import { useState } from "react";
import { PaymentSecurityBadge } from "@/components/payment-security-badge";

export const POLICY_AGREEMENT_MODAL_ID = "policy-agreement-modal";

interface PolicyAgreementModalProps {
  onConfirm: () => void;
  title?: string;
  description?: string;
}

export function PolicyAgreementModal({
  onConfirm,
  title = "Agreement Required",
  description = "Please review and accept our policies before proceeding.",
}: PolicyAgreementModalProps) {
  const closeModal = useModalStore((state) => state.closeModal);

  const [agreedPolicies, setAgreedPolicies] = useState(false);
  const [agreedConsent, setAgreedConsent] = useState(false);

  const allChecked = agreedPolicies && agreedConsent;

  const handleConfirm = () => {
    if (allChecked) {
      onConfirm();
      closeModal(POLICY_AGREEMENT_MODAL_ID);
    }
  };

  return (
    <div className="flex flex-col p-2 lg:p-4 w-full">
      <div className="mb-6">
        <h2 className="text-primary-text text-xl font-semibold mb-2">
          {title}
        </h2>
        <p className="text-secondary-text text-sm leading-relaxed">
          {description}
        </p>
      </div>

      <div className="flex flex-col gap-4 mb-8">
        <label className="flex items-start gap-3 cursor-pointer group">
          <Checkbox
            checked={agreedPolicies}
            onCheckedChange={(checked) => setAgreedPolicies(checked === true)}
            className="mt-1 shrink-0 border-2 border-brand-green/20"
          />
          <span className="text-sm text-primary-text leading-relaxed pt-0.5">
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
            className="mt-1 shrink-0 border-2 border-brand-green/20"
          />
          <span className="text-sm text-primary-text leading-relaxed pt-0.5">
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

      <p className="text-xs text-[#606060] leading-relaxed mb-6 font-medium">
        <span className="font-semibold text-[#181D27]">Important:</span> By
        proceeding with payment, you acknowledge that Sit-With-PD Global
        Therapeutic Network provides wellbeing, educational, advocacy, and
        support services only. Our services do not constitute medical advice,
        diagnosis, treatment, pharmaceutical services, or emergency healthcare.
      </p>

      <div className="mb-6">
        <PaymentSecurityBadge />
      </div>

      <div className="flex gap-3 w-full mt-auto">
        <Button
          onClick={() => closeModal(POLICY_AGREEMENT_MODAL_ID)}
          variant="outline"
          className="flex-1"
        >
          Cancel
        </Button>
        <Button
          onClick={handleConfirm}
          variant="regular"
          className="flex-1"
          disabled={!allChecked}
        >
          Confirm
        </Button>
      </div>
    </div>
  );
}
