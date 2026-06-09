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

  const [agreedTerms, setAgreedTerms] = useState(false);
  const [agreedPrivacy, setAgreedPrivacy] = useState(false);
  const [agreedRefund, setAgreedRefund] = useState(false);

  const allChecked = agreedTerms && agreedPrivacy && agreedRefund;

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
        <label className="flex items-center gap-3 cursor-pointer group">
          <Checkbox
            checked={agreedTerms}
            onCheckedChange={(checked) => setAgreedTerms(checked === true)}
            className="mt-1 shrink-0 border-2 border-brand-green/20"
          />
          <span className="text-sm text-primary-text leading-tight pt-0.5">
            I have read and agree to the{" "}
            <Link
              href="/terms"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-green font-medium hover:underline"
            >
              Terms of Service
            </Link>
          </span>
        </label>

        <label className="flex items-center gap-3 cursor-pointer group">
          <Checkbox
            checked={agreedPrivacy}
            onCheckedChange={(checked) => setAgreedPrivacy(checked === true)}
            className="mt-1 shrink-0 border-2 border-brand-green/20"
          />
          <span className="text-sm text-primary-text leading-tight pt-0.5">
            I have read and agree to the{" "}
            <Link
              href="/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-green font-medium hover:underline"
            >
              Privacy Policy
            </Link>
          </span>
        </label>

        <label className="flex items-center gap-3 cursor-pointer group">
          <Checkbox
            checked={agreedRefund}
            onCheckedChange={(checked) => setAgreedRefund(checked === true)}
            className="mt-1 shrink-0 border-2 border-brand-green/20"
          />
          <span className="text-sm text-primary-text leading-tight pt-0.5">
            I have read and agree to the{" "}
            <Link
              href="/refund-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-green font-medium hover:underline"
            >
              Refund Policy
            </Link>
          </span>
        </label>
      </div>

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
