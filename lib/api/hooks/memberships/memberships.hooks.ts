import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  getMembershipPlans,
  getMySubscription,
  subscribeToPlan,
  changeMyPlan,
  cancelScheduledChange,
  cancelMySubscription,
  resumeMySubscription,
  getAdminMembershipPlans,
  createMembershipPlan,
  updateMembershipPlan,
  deleteMembershipPlan,
  getMembershipSubscribers,
  getMembershipStats,
  CreatePlanPayload,
} from "@/lib/api/services/memberships/memberships.services";
import { showSuccessToast, showErrorToast } from "@/lib/toast-helpers";

export const MEMBERSHIP_KEYS = {
  plans: ["membership-plans"] as const,
  adminPlans: ["membership-plans", "admin"] as const,
  me: ["membership-subscription", "me"] as const,
  subscribers: ["membership-subscribers"] as const,
  stats: ["membership-stats"] as const,
};

export const useMembershipPlans = () =>
  useQuery({ queryKey: MEMBERSHIP_KEYS.plans, queryFn: getMembershipPlans, retry: false });

export const useMySubscription = (enabled = true) =>
  useQuery({
    queryKey: MEMBERSHIP_KEYS.me,
    queryFn: getMySubscription,
    enabled,
    retry: false,
  });

/** Anything that mutates the member's own subscription refreshes the same views. */
function useSubscriptionMutation<TArgs, TResult>(
  mutationFn: (args: TArgs) => Promise<TResult>,
) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn,
    onSuccess: (data: any) => {
      if (data?.message) showSuccessToast(data.message);
      queryClient.invalidateQueries({ queryKey: MEMBERSHIP_KEYS.me });
      queryClient.invalidateQueries({ queryKey: MEMBERSHIP_KEYS.subscribers });
      queryClient.invalidateQueries({ queryKey: MEMBERSHIP_KEYS.stats });
    },
    onError: (error: Error) => showErrorToast(error.message),
  });
}

export const useSubscribeToPlan = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: subscribeToPlan,
    // No toast: the caller redirects to checkout on success.
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: MEMBERSHIP_KEYS.me });
    },
    onError: (error: Error) => showErrorToast(error.message),
  });
};

export const useChangeMyPlan = () => useSubscriptionMutation(changeMyPlan);
export const useCancelScheduledChange = () =>
  useSubscriptionMutation(() => cancelScheduledChange());
export const useCancelMySubscription = () =>
  useSubscriptionMutation(() => cancelMySubscription());
export const useResumeMySubscription = () =>
  useSubscriptionMutation(() => resumeMySubscription());

// ── Admin ────────────────────────────────────────────────────────────────────

export const useAdminMembershipPlans = () =>
  useQuery({
    queryKey: MEMBERSHIP_KEYS.adminPlans,
    queryFn: getAdminMembershipPlans,
    retry: false,
  });

export const useMembershipSubscribers = (params: {
  page?: number;
  limit?: number;
  status?: string;
  planId?: string;
} = {}) =>
  useQuery({
    queryKey: [...MEMBERSHIP_KEYS.subscribers, params],
    queryFn: () => getMembershipSubscribers(params),
    retry: false,
  });

export const useMembershipStats = () =>
  useQuery({ queryKey: MEMBERSHIP_KEYS.stats, queryFn: getMembershipStats, retry: false });

function useAdminPlanMutation<TArgs, TResult>(mutationFn: (args: TArgs) => Promise<TResult>) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn,
    onSuccess: (data: any) => {
      if (data?.message) showSuccessToast(data.message);
      queryClient.invalidateQueries({ queryKey: MEMBERSHIP_KEYS.plans });
      queryClient.invalidateQueries({ queryKey: MEMBERSHIP_KEYS.stats });
    },
    onError: (error: Error) => showErrorToast(error.message),
  });
}

export const useCreateMembershipPlan = () => useAdminPlanMutation(createMembershipPlan);
export const useUpdateMembershipPlan = () =>
  useAdminPlanMutation(({ id, payload }: { id: string; payload: Partial<CreatePlanPayload> }) =>
    updateMembershipPlan(id, payload),
  );
export const useDeleteMembershipPlan = () =>
  useAdminPlanMutation((id: string) => deleteMembershipPlan(id));
