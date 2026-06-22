import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@/lib/api/product";

export const useProducts = (
  categoryId: string | undefined,
  params: URLSearchParams,
) => {
  const queryObj = Object.fromEntries(params.entries());

  return useQuery({
    queryKey: ["products", categoryId, queryObj],
    queryFn: () => getProducts({ category: categoryId!, ...queryObj }),
    enabled: !!categoryId,
  });
};
