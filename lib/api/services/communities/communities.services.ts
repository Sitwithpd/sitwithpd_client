import { api } from "@/lib/axios";
import { buildQueryString, getApiError } from "@/lib/utils";
import type { Tag } from "@/lib/api/services/tags/tags.services";

/**
 * Public community shape. `whatsappLink` is deliberately absent — the server
 * strips it from every public response and emails it to applicants instead.
 */
export interface Community {
  id: string;
  title: string;
  slug: string;
  subtitle: string;
  description: string;
  gains: string[];
  iconKey: string | null;
  isPublished: boolean;
  order: number;
  tags: Tag[];
  createdAt: string;
  updatedAt: string;
  _count?: { joinRequests: number };
}

/** Admin reads additionally carry the group link. */
export interface AdminCommunity extends Community {
  whatsappLink: string;
}

export interface CommunityJoinRequest {
  id: string;
  communityId: string;
  fullName: string;
  email: string;
  phone: string | null;
  reason: string | null;
  agreedToPolicy: boolean;
  linkEmailedAt: string | null;
  emailError: string | null;
  source: string;
  createdAt: string;
  community?: { id: string; title: string; slug: string };
}

export interface CommunityPayload {
  title: string;
  subtitle: string;
  description: string;
  gains: string[];
  iconKey?: string | null;
  whatsappLink: string;
  isPublished?: boolean;
  order?: number;
  tags?: string[];
}

export interface JoinCommunityPayload {
  fullName: string;
  email: string;
  phone?: string;
  reason?: string;
  agreedToPolicy: boolean;
  /** Hidden honeypot field — real users never fill this. */
  website?: string;
}

// ── Public ────────────────────────────────────────────────────────────────────

export const get_communities = async () => {
  try {
    const res = await api.get("/communities");
    return res.data;
  } catch (error) {
    throw new Error(getApiError(error));
  }
};

export const get_community_by_slug = async (slug: string) => {
  try {
    const res = await api.get(`/communities/${slug}`);
    return res.data;
  } catch (error) {
    throw new Error(getApiError(error));
  }
};

export const join_community = async (
  idOrSlug: string,
  payload: JoinCommunityPayload,
) => {
  try {
    const res = await api.post(`/communities/${idOrSlug}/join`, payload);
    return res.data;
  } catch (error) {
    throw new Error(getApiError(error));
  }
};

// ── Admin ─────────────────────────────────────────────────────────────────────

export const get_all_admin_communities = async (params = {}) => {
  const queryString = buildQueryString(params);
  const url = queryString ? `?${queryString}` : "";
  try {
    const res = await api.get(`/communities/admin/all${url}`);
    return res.data;
  } catch (error) {
    throw new Error(getApiError(error));
  }
};

export const get_admin_community_by_id = async (id: string) => {
  try {
    const res = await api.get(`/communities/admin/${id}`);
    return res.data;
  } catch (error) {
    throw new Error(getApiError(error));
  }
};

export const create_community = async (payload: CommunityPayload) => {
  try {
    const res = await api.post("/communities", payload);
    return res.data;
  } catch (error) {
    throw new Error(getApiError(error));
  }
};

export const update_community = async (
  id: string,
  payload: Partial<CommunityPayload>,
) => {
  try {
    const res = await api.patch(`/communities/${id}`, payload);
    return res.data;
  } catch (error) {
    throw new Error(getApiError(error));
  }
};

export const delete_community = async (id: string) => {
  try {
    const res = await api.delete(`/communities/${id}`);
    return res.data;
  } catch (error) {
    throw new Error(getApiError(error));
  }
};

export const get_community_join_requests = async (params = {}) => {
  const queryString = buildQueryString(params);
  const url = queryString ? `?${queryString}` : "";
  try {
    const res = await api.get(`/communities/admin/join-requests${url}`);
    return res.data;
  } catch (error) {
    throw new Error(getApiError(error));
  }
};

export const resend_community_invite = async (requestId: string) => {
  try {
    const res = await api.post(
      `/communities/admin/join-requests/${requestId}/resend`,
    );
    return res.data;
  } catch (error) {
    throw new Error(getApiError(error));
  }
};
