export interface FilterOption {
  label: string;
  value: string;
}

export interface FilterConfig {
  label: string;
  field: string;
  type: "range" | "checkbox";
  options?: FilterOption[];
  searchable?: boolean;
}

export interface Category {
  _id: string;
  name: string;
  slug: string;
  filterConfig: FilterConfig[];
}

export interface Product {
  _id: string;
  name: string;
  slug: string;
  brand: string;
  images: string[];
  variants: {
    price: number;
    originalPrice?: number;
    storage: string;
    color: string;
  }[];
  specs: Record<string, string>;
}
