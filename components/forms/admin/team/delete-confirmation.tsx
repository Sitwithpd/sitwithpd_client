"use client";

import { Button } from "@/components/ui/button";
import { useModalStore } from "@/components/store/use-modal-store";
import { AlertCircle } from "lucide-react";

interface DeleteConfirmationModalProps {
  onConfirm: () => void;
  title: string;
  message: string;
}

export default function DeleteConfirmationModal({
  onConfirm,
  title,
  message,
}: DeleteConfirmationModalProps) {
  const closeModal = useModalStore((state) => state.closeModal);

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4 text-brand-red">
        <div className="bg-red-50 p-3 rounded-full">
          <AlertCircle size={24} />
        </div>
        <h2 className="text-xl font-semibold">{title}</h2>
      </div>

      <p className="text-secondary-text">{message}</p>

      <div className="flex gap-3 justify-end pt-4 border-t mt-6">
        <Button
          variant="outline"
          onClick={() => closeModal("delete-confirmation")}
          className="px-6"
        >
          Cancel
        </Button>
        <Button
          variant="regular"
          onClick={() => {
            onConfirm();
            closeModal("delete-confirmation");
          }}
          className="bg-brand-red hover:bg-red-700 px-6"
        >
          Delete
        </Button>
      </div>
    </div>
  );
}
