"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Field, FieldLabel } from "@/components/ui/field";
import { Switch } from "@/components/ui/switch";
import { BulletListInput } from "@/components/shared/bullet-list-input";
import { useModalStore } from "@/components/store/use-modal-store";
import {
  useCreateMembershipPlan,
  useUpdateMembershipPlan,
} from "@/lib/api/hooks/memberships/memberships.hooks";
import type { MembershipPlan } from "@/lib/api/services/memberships/memberships.services";

export const MEMBERSHIP_PLAN_MODAL = "membership-plan-modal";

interface Props {
  plan?: MembershipPlan;
}

/** Prices are entered and stored in GBP; members are billed in their own currency. */
export default function MembershipPlanForm({ plan }: Props) {
  const isEdit = !!plan;
  const closeModal = useModalStore((state) => state.closeModal);
  const create = useCreateMembershipPlan();
  const update = useUpdateMembershipPlan();

  const [name, setName] = useState(plan?.name ?? "");
  const [tagline, setTagline] = useState(plan?.tagline ?? "");
  const [monthlyPrice, setMonthlyPrice] = useState(
    plan ? String((plan.baseMonthlyPriceMinor ?? plan.monthlyPriceMinor) / 100) : "",
  );
  const [annualPrice, setAnnualPrice] = useState(
    plan ? String((plan.baseAnnualPriceMinor ?? plan.annualPriceMinor) / 100) : "",
  );
  const [benefits, setBenefits] = useState<string[]>(plan?.benefits ?? []);
  const [isActive, setIsActive] = useState(plan?.isActive ?? true);
  const [isFeatured, setIsFeatured] = useState(plan?.isFeatured ?? false);
  const [order, setOrder] = useState(String(plan?.order ?? 0));
  const [error, setError] = useState<string | null>(null);

  const isPending = create.isPending || update.isPending;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!name.trim()) return setError("Name is required.");
    if (!monthlyPrice.trim() || Number(monthlyPrice) < 0) {
      return setError("Monthly price is required.");
    }
    if (!annualPrice.trim() || Number(annualPrice) < 0) {
      return setError("Annual price is required.");
    }

    const payload = {
      name: name.trim(),
      tagline: tagline.trim(),
      monthlyPrice,
      annualPrice,
      benefits: benefits.map((b) => b.trim()).filter(Boolean),
      isActive,
      isFeatured,
      order: Number(order) || 0,
    };

    const onDone = { onSuccess: () => closeModal(MEMBERSHIP_PLAN_MODAL) };
    if (isEdit) update.mutate({ id: plan!.id, payload }, onDone);
    else create.mutate(payload, onDone);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Field>
        <FieldLabel htmlFor="plan-name">Plan Name *</FieldLabel>
        <Input
          id="plan-name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g. Blue"
          className="bg-white h-11"
        />
      </Field>

      <Field>
        <FieldLabel htmlFor="plan-tagline">Tagline</FieldLabel>
        <Input
          id="plan-tagline"
          value={tagline}
          onChange={(e) => setTagline(e.target.value)}
          placeholder="e.g. For committed members ready to grow deeply"
          className="bg-white h-11"
        />
      </Field>

      <div className="grid grid-cols-2 gap-4">
        <Field>
          <FieldLabel htmlFor="plan-monthly">Monthly Price (GBP) *</FieldLabel>
          <Input
            id="plan-monthly"
            value={monthlyPrice}
            inputMode="decimal"
            onChange={(e) => setMonthlyPrice(e.target.value.replace(/[^\d.]/g, ""))}
            placeholder="250"
            className="bg-white h-11"
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="plan-annual">Annual Price (GBP) *</FieldLabel>
          <Input
            id="plan-annual"
            value={annualPrice}
            inputMode="decimal"
            onChange={(e) => setAnnualPrice(e.target.value.replace(/[^\d.]/g, ""))}
            placeholder="2500"
            className="bg-white h-11"
          />
        </Field>
      </div>

      <Field>
        <FieldLabel>Benefits</FieldLabel>
        <BulletListInput
          value={benefits}
          onChange={setBenefits}
          placeholder="e.g. Unlimited program access"
          addLabel="Add benefit"
        />
      </Field>

      <Field>
        <FieldLabel htmlFor="plan-order">Display Order</FieldLabel>
        <Input
          id="plan-order"
          value={order}
          inputMode="numeric"
          onChange={(e) => setOrder(e.target.value.replace(/\D/g, ""))}
          className="bg-white h-11"
        />
      </Field>

      <div className="flex items-center justify-between p-4 rounded-lg border border-border">
        <div>
          <p className="text-sm font-medium text-primary-text">Active</p>
          <p className="text-xs text-secondary-text">
            Inactive plans disappear from the pricing page. Existing members keep billing.
          </p>
        </div>
        <Switch checked={isActive} onCheckedChange={setIsActive} />
      </div>

      <div className="flex items-center justify-between p-4 rounded-lg border border-border">
        <div>
          <p className="text-sm font-medium text-primary-text">Most popular</p>
          <p className="text-xs text-secondary-text">
            Highlights this plan on the public pricing grid.
          </p>
        </div>
        <Switch checked={isFeatured} onCheckedChange={setIsFeatured} />
      </div>

      {error && <p className="text-xs text-brand-red">{error}</p>}

      {isEdit && (
        <p className="text-xs text-secondary-text">
          Repricing only affects new subscribers — existing members keep the price they
          signed up at until they change plan.
        </p>
      )}

      <div className="flex gap-3 justify-end pt-2 border-t border-border">
        <Button
          type="button"
          variant="outline"
          onClick={() => closeModal(MEMBERSHIP_PLAN_MODAL)}
          disabled={isPending}
        >
          Cancel
        </Button>
        <Button type="submit" variant="regular" disabled={isPending}>
          {isPending ? "Saving..." : isEdit ? "Save Changes" : "Create Plan"}
        </Button>
      </div>
    </form>
  );
}
