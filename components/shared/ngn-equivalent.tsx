"use client";

import { useGbpToNgn } from "@/lib/api/hooks/useExchangeRate";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

interface NgnEquivalentProps {
  gbpAmount: number;
  className?: string;
}

export function NgnEquivalent({ gbpAmount, className }: NgnEquivalentProps) {
  const { data: rate, isLoading, isError } = useGbpToNgn();

  if (isLoading) {
    return (
      <div className={cn("inline-flex items-center gap-1", className)}>
        <span className="text-xs text-slate-400">≈ ₦</span>
        <Skeleton className="h-3 w-12 bg-slate-200" />
      </div>
    );
  }

  if (isError || !rate) {
    // If there's an error, we don't want to break the UI, so we just hide it
    // or we could use the fallback rate (which is already handled in the hook)
    // but just in case rate is undefined
    return null;
  }

  const ngnAmount = Math.round(gbpAmount * rate);
  const formattedNgn = ngnAmount.toLocaleString("en-NG");

  return (
    <span className={cn("text-xs text-slate-400 font-medium", className)}>
      ≈ ₦{formattedNgn}
    </span>
  );
}
