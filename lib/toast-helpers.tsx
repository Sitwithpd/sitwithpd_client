import { BadgeCheck, OctagonAlert } from "lucide-react";
import { toast } from "sonner";

export const showSuccessToast = (message: string) => {
  toast.success(message, {
    className:
      "group grid grid-cols-[auto_1fr] items-center gap-4 p-4 rounded-xl border border-[#EAECF0] dark:border-[#262626] bg-white dark:bg-[#1A1A1A] shadow-xl",
    duration: 5000,
    icon: (
      <div className="flex shrink-0 bg-[#ECFDF3] dark:bg-[#052E16] p-2 rounded-full">
        <BadgeCheck className="w-5 h-5 text-regular-button" />
      </div>
    ),
    classNames: {
      content: "flex flex-col min-w-0 pr-4",
      title:
        "text-[#344054] dark:text-[#E5E5E5] font-semibold text-[15px] leading-tight",
      icon: "flex items-center justify-center",
    },
  });
};

export const showErrorToast = (message: string) => {
  toast.error(message, {
    className:
      "group grid grid-cols-[auto_1fr] items-center gap-4 p-4 rounded-xl border border-[#FEE4E2] dark:border-[#450A0A] bg-white dark:bg-[#1A1A1A] shadow-xl",
    duration: 5000,
    icon: (
      <div className="flex shrink-0 bg-[#FEF3F2] dark:bg-[#450A0A] p-2 rounded-full">
        <OctagonAlert className="w-5 h-5 text-brand-red" />
      </div>
    ),
    classNames: {
      content: "flex flex-col min-w-0 pr-4",
      title:
        "text-[#344054] dark:text-[#E5E5E5] font-semibold text-[15px] leading-tight",
      icon: "flex items-center justify-center",
    },
  });
};
