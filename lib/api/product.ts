import { api } from "@/lib/api";

export const getProducts = async (params: Record<string, string>) => {
  const { data } = await api.get("/products", { params });
  return data;
};
