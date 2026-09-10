export interface TechnicalSpec {
  key: string;
  value: string;
}

export interface TechnicalDoc {
  title: string;
  size: string;
  type: string;
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
  fullDescription?: string;
  price: number;
  image: string;
  isAvailable: boolean;
  standard: string;
  origin?: string;
  warranty?: string;
  specs: TechnicalSpec[];
  compatibility: string[];
  docs?: TechnicalDoc[];
}