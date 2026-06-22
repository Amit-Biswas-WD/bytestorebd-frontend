// hooks/useNavCategories.ts
import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/api";

export const useNavCategories = () => {
  return useQuery({
    queryKey: ["categories", "tree"],
    queryFn: async () => {
      const { data } = await api.get("/categories/tree");
      return data.data;
    },
    staleTime: 10 * 60 * 1000, // 10 min cache
  });
};
