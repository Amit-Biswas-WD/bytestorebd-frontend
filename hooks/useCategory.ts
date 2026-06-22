// hooks/useCategory.ts
import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/api";

export const useCategory = (slug: string) => {
  return useQuery({
    queryKey: ["category", slug],
    queryFn: async () => {
      const { data } = await api.get(`/categories/slug/${slug}`); // ★ slug/ আগে লাগবে
      return data.data;
    },
    staleTime: 5 * 60 * 1000,
  });
};
