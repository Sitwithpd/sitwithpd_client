import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  get_published_team,
  get_all_admin_team,
  get_team_member_by_id,
  create_team_member,
  update_team_member,
  delete_team_member,
} from "@/lib/api/services/team/team.services";
import { toast } from "sonner";

export const useGetPublishedTeam = () => {
  return useQuery({
    queryKey: ["team", "published"],
    queryFn: get_published_team,
  });
};

export const useGetAllAdminTeam = (params = {}) => {
  return useQuery({
    queryKey: ["team", "admin", params],
    queryFn: () => get_all_admin_team(params),
  });
};

export const useGetTeamMemberById = (id: string) => {
  return useQuery({
    queryKey: ["team", id],
    queryFn: () => get_team_member_by_id(id),
    enabled: !!id,
  });
};

export const useCreateTeamMember = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: create_team_member,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["team"] });
      toast.success(data?.message || "Team member created successfully");
    },
    onError: (error: any) => {
      toast.error(error.message || "Failed to create team member");
    },
  });
};

export const useUpdateTeamMember = (id: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (payload: FormData) => update_team_member(id, payload),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["team"] });
      toast.success(data?.message || "Team member updated successfully");
    },
    onError: (error: any) => {
      toast.error(error.message || "Failed to update team member");
    },
  });
};

export const useDeleteTeamMember = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: delete_team_member,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["team"] });
      toast.success(data?.message || "Team member deleted successfully");
    },
    onError: (error: any) => {
      toast.error(error.message || "Failed to delete team member");
    },
  });
};
