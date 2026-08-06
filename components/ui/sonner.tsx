"use client";

import { useTheme } from "next-themes";
import { Toaster as Sonner, type ToasterProps } from "sonner";
import {
  CheckCircle2,
  AlertCircle,
  Info,
  AlertTriangle,
  Loader2,
} from "lucide-react";

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      // theme={theme as ToasterProps["theme"]}
      className="toaster group"
      position="top-center"
      toastOptions={{
        classNames: {
          toast: [
            "group toast flex items-center gap-3 w-full p-4 rounded-xl shadow-lg border transition-all",
            "bg-white text-[#181D27] border-[#EAECF0]",
            // "dark:bg-[#1C1C1C] dark:text-[#F3F4F6] dark:border-[#2E372E]",
          ].join(" "),
          title: "text-sm font-semibold leading-snug pl-4",
          description: "text-xs text-[#667085] dark:text-[#98A2B3]",
          actionButton:
            "bg-[#60935D] text-white rounded-lg text-xs px-3 py-1.5 font-medium",
          cancelButton:
            "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 rounded-lg text-xs px-3 py-1.5 font-medium",
          closeButton:
            "border-none bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-400 hover:text-gray-600",
        },
      }}
      icons={{
        success: (
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#60935D]/15 text-[#60935D] shrink-0">
            <CheckCircle2 className="w-5 h-5 text-[#60935D]" />
          </div>
        ),
        error: (
          <div className="flex items-center justify-center w-8 h-8 rounded-full  dark:bg-[#450A0A] text-[#D92D20] shrink-0">
            <AlertCircle className="w-5 h-5 text-[#D92D20]" />
          </div>
        ),
        warning: (
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#FEF3C7] dark:bg-[#78350F] text-[#D97706] shrink-0">
            <AlertTriangle className="w-5 h-5 text-[#D97706]" />
          </div>
        ),
        info: (
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#EFF6FF] dark:bg-[#1E3A8A] text-[#2563EB] shrink-0">
            <Info className="w-5 h-5 text-[#2563EB]" />
          </div>
        ),
        loading: (
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 text-[#60935D] shrink-0 animate-spin">
            <Loader2 className="w-5 h-5 text-[#60935D]" />
          </div>
        ),
      }}
      {...props}
    />
  );
};

export { Toaster };
