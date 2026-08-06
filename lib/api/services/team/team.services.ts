import { api } from "@/lib/axios";
import { buildQueryString, getApiError } from "@/lib/utils";

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  /** Long-form copy; newlines are paragraph breaks. Null when never set. */
  bio: string | null;
  isPublished: boolean;
  order: number;
  photoUrl: string;
  createdAt: string;
  updatedAt: string;
}

export interface TeamMembersResponse {
  data: TeamMember[];
  meta: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
  message: string;
}

export const get_published_team = async () => {
  try {
    const res = await api.get("/team");
    return res.data;
  } catch (error) {
    throw new Error(getApiError(error));
  }
};

export const get_all_admin_team = async (params = {}) => {
  const queryString = buildQueryString(params);
  const url = queryString ? `?${queryString}` : "";
  try {
    const res = await api.get(`/team/admin/all${url}`);
    return res.data;
  } catch (error) {
    throw new Error(getApiError(error));
  }
};

export const get_team_member_by_id = async (id: string) => {
  try {
    const res = await api.get(`/team/${id}`);
    return res.data;
  } catch (error) {
    throw new Error(getApiError(error));
  }
};

export const create_team_member = async (payload: FormData) => {
  try {
    const res = await api.post("/team", payload, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return res.data;
  } catch (error) {
    throw new Error(getApiError(error));
  }
};

export const update_team_member = async (id: string, payload: FormData) => {
  try {
    const res = await api.patch(`/team/${id}`, payload, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return res.data;
  } catch (error) {
    throw new Error(getApiError(error));
  }
};

export const delete_team_member = async (id: string) => {
  try {
    const res = await api.delete(`/team/${id}`);
    return res.data;
  } catch (error) {
    throw new Error(getApiError(error));
  }
};
