import { Lock } from "lucide-react";

export function PaymentSecurityBadge() {
  return (
    <div className="flex items-start gap-3 bg-brand-green/10 p-3 rounded-lg border border-brand-green/20">
      <Lock className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
      <span className="text-xs text-brand-green leading-relaxed font-medium">
        Your payment is securely processed by Flutterwave under PCI DSS
        standards.
      </span>
    </div>
  );
}
