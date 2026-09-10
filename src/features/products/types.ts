export interface TechnicalSpec {
  key: string;
  value: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  partNumber: string;
  brand: string;
  category: "traction" | "safety" | "controller" | "doors" | "suspension";
  categoryLabel: string;
  shortDescription: string;
  price: number;
  isAvailable: boolean;
  standard: string;
  specs: TechnicalSpec[];
  compatibility: string[];
}