import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import {
  create_community,
  delete_community,
  get_admin_community_by_id,
  get_all_admin_communities,
  get_communities,
  get_community_by_slug,
  get_community_join_requests,
  join_community,
  resend_community_invite,
  update_community,
  type CommunityPayload,
  type JoinCommunityPayload,
} from "@/lib/api/services/communities/communities.services";

export const useGetCommunities = () => {
  return useQuery({
    queryKey: ["communities", "published"],
    queryFn: get_communities,
  });
};

export const useGetCommunityBySlug = (slug: string) => {
  return useQuery({
    queryKey: ["communities", slug],
    queryFn: () => get_community_by_slug(slug),
    enabled: !!slug,
  });
};

export const useGetAllAdminCommunities = (params = {}) => {
  return useQuery({
    queryKey: ["communities", "admin", params],
    queryFn: () => get_all_admin_communities(params),
  });
};

export const useGetAdminCommunityById = (id: string) => {
  return useQuery({
    queryKey: ["communities", "admin", id],
    queryFn: () => get_admin_community_by_id(id),
    enabled: !!id,
  });
};

export const useCreateCommunity = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (payload: CommunityPayload) => create_community(payload),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["communities"] });
      toast.success(data?.message || "Community created successfully");
    },
    onError: (error: any) => {
      toast.error(error.message || "Failed to create community");
    },
  });
};

export const useUpdateCommunity = (id: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (payload: Partial<CommunityPayload>) =>
      update_community(id, payload),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["communities"] });
      toast.success(data?.message || "Community updated successfully");
    },
    onError: (error: any) => {
      toast.error(error.message || "Failed to update community");
    },
  });
};

export const useDeleteCommunity = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: delete_community,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["communities"] });
      toast.success(data?.message || "Community deleted successfully");
    },
    onError: (error: any) => {
      toast.error(error.message || "Failed to delete community");
    },
  });
};

/**
 * Public join. The API always succeeds when the application is saved; the
 * `emailed` flag says whether the invite actually went out, so the copy can be
 * honest rather than promising an inbox that may not receive anything.
 */
export const useJoinCommunity = (idOrSlug: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (payload: JoinCommunityPayload) =>
      join_community(idOrSlug, payload),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["community-join-requests"] });
      return data;
    },
    onError: (error: any) => {
      toast.error(error.message || "Failed to submit your application");
    },
  });
};

export const useGetCommunityJoinRequests = (params = {}) => {
  return useQuery({
    queryKey: ["community-join-requests", params],
    queryFn: () => get_community_join_requests(params),
  });
};

export const useResendCommunityInvite = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: resend_community_invite,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["community-join-requests"] });
      toast.success(data?.message || "Invite resent");
    },
    onError: (error: any) => {
      toast.error(error.message || "Failed to resend the invite");
    },
  });
};
