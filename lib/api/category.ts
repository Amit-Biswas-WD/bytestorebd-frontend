// lib/api/category.ts
import { api } from "@/lib/api";

export const getCategoryBySlug = async (slug: string) => {
  const { data } = await api.get(`/categories/slug/${slug}`); // ★
  return data.data;
};
