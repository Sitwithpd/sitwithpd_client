import { useQuery } from "@tanstack/react-query";
import { get_tags, type TagType } from "@/lib/api/services/tags/tags.services";

/**
 * Tag vocabulary for the admin autocomplete inputs. Cached for a while since
 * it changes only when someone coins a new tag.
 */
export const useGetTags = (type?: TagType, search?: string) => {
  return useQuery({
    queryKey: ["tags", type ?? "ALL", search ?? ""],
    queryFn: () => get_tags({ ...(type ? { type } : {}), ...(search ? { search } : {}) }),
    staleTime: 1000 * 60 * 5,
  });
};
