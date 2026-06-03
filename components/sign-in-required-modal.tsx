"use client";

import { useModalStore } from "./store/use-modal-store";
import { Button } from "./ui/button";
import { LogIn } from "lucide-react";
import { useRouter } from "next/navigation";

const MODAL_ID = "sign-in-required";

interface SignInRequiredModalProps {
  message: string;
  callbackUrl: string;
}

export function SignInRequiredModal({
  message,
  callbackUrl,
}: SignInRequiredModalProps) {
  const closeModal = useModalStore((state) => state.closeModal);
  const router = useRouter();

  const handleSignIn = () => {
    closeModal(MODAL_ID);
    router.push(`/login?callbackUrl=${encodeURIComponent(callbackUrl)}`);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-5 p-4 rounded-lg min-w-50">
      <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center">
        <LogIn className="w-8 h-8 text-brand-green" />
      </div>
      <h2 className="text-primary-text text-lg font-semibold text-center">
        Sign In Required
      </h2>
      <p className="text-secondary-text text-sm text-center max-w-sm leading-relaxed">
        {message}
      </p>
      <div className="flex gap-3 mt-2 w-full">
        <Button
          onClick={() => closeModal(MODAL_ID)}
          variant="outline"
          className="flex-1 border border-regular-button text-regular-button"
        >
          Not Now
        </Button>
        <Button onClick={handleSignIn} variant="regular" className="flex-1">
          <LogIn className="w-4 h-4 mr-2" />
          Sign In
        </Button>
      </div>
    </div>
  );
}

export const SIGN_IN_MODAL_ID = MODAL_ID;
