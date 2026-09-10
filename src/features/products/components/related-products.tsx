import { Product } from "../types";
import { ProductCard } from "./product-card";

interface RelatedProductsProps {
  products: Product[];
}

export function RelatedProducts({ products }: RelatedProductsProps) {
  if (products.length === 0) return null;

  return (
    <section className="pt-8 border-t border-slate-200 dark:border-industrial-800 space-y-4">
      <div>
        <h3 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white">
          قطعات مرتبط و تجهیزات مکمل این رده
        </h3>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
          تجهیزاتی که عموماً به همراه این قطعه در پکیج‌های نصب و نوسازی مورد استفاده قرار می‌گیرند:
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}