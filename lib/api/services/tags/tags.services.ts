import { api } from "@/lib/axios";
import { buildQueryString, getApiError } from "@/lib/utils";

export type TagType = "TOPIC" | "FORMAT";

export interface Tag {
  id: string;
  name: string;
  slug: string;
  type: TagType;
}

/**
 * Shared tag vocabulary. Used to populate the autocomplete in the admin
 * create/edit forms — typing a name that isn't listed is fine, the API adds it.
 */
export const get_tags = async (params: { type?: TagType; search?: string } = {}) => {
  const queryString = buildQueryString(params);
  const url = queryString ? `?${queryString}` : "";
  try {
    const res = await api.get(`/tags${url}`);
    return res.data;
  } catch (error) {
    throw new Error(getApiError(error));
  }
};
