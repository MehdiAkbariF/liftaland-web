import Link from "next/link";
import { Product } from "../types";
import { ProductCard } from "./product-card";
import { ProductPagination } from "./product-pagination";

interface ProductGridProps {
  products: Product[];
  total: number;
  totalPages: number;
  currentPage: number;
  limit: number;
}

export function ProductGrid({
  products,
  total,
  totalPages,
  currentPage,
  limit,
}: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="w-full rounded-2xl border border-dashed border-slate-300 dark:border-industrial-800 bg-white dark:bg-industrial-900 p-8 sm:p-12 text-center">
        <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-industrial-800 text-slate-400 flex items-center justify-center mx-auto mb-4 text-xl">
          🔍
        </div>
        <h3 className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white mb-2">
          هیچ قطعه‌ای مطابق با مشخصات جستجوشده یافت نشد
        </h3>
        <p className="text-xs text-slate-500 dark:text-slate-400 max-w-md mx-auto leading-relaxed mb-6">
          ممکن است پارت‌نامبر یا مدل واردشده دارای اشتباه تایپی باشد، یا قطعه مورد نظر شما در انبار فنی موجود باشد اما هنوز در کاتالوگ آنلاین ثبت نشده باشد.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/products"
            className="inline-flex items-center justify-center h-10 px-4 rounded-lg bg-industrial-900 hover:bg-industrial-800 text-white dark:bg-white dark:text-industrial-950 text-xs font-bold transition-colors"
          >
            پاک کردن فیلترها و مشاهده همه قطعات
          </Link>
          <a
            href="tel:02188880000"
            className="inline-flex items-center justify-center h-10 px-4 rounded-lg border border-slate-300 dark:border-industrial-700 text-slate-800 dark:text-slate-200 text-xs font-bold transition-colors"
          >
            استعلام تلفنی موجودی پارت‌نامبر
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* اتصال کامپوننت صفحه‌بندی */}
      <ProductPagination
        currentPage={currentPage}
        totalPages={totalPages}
        totalItems={total}
        limit={limit}
      />
    </div>
  );
}