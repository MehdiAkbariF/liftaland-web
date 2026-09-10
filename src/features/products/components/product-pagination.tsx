"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { formatNumber } from "@/lib/utils";

interface ProductPaginationProps {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  limit: number;
}

export function ProductPagination({
  currentPage,
  totalPages,
  totalItems,
  limit,
}: ProductPaginationProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const changePage = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages || newPage === currentPage) return;
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", newPage.toString());
    router.push(`/products?${params.toString()}`);
  };

  const changeLimit = (newLimit: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("limit", newLimit.toString());
    params.set("page", "1"); // ریست به صفحه اول
    router.push(`/products?${params.toString()}`);
  };

  if (totalItems === 0) return null;

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-200 dark:border-industrial-800 text-xs">
      
      {/* انتخاب تعداد در صفحه */}
      <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
        <span>تعداد در صفحه:</span>
        <div className="flex items-center gap-1">
          {[6, 12, 24].map((size) => (
            <button
              key={size}
              onClick={() => changeLimit(size)}
              className={`px-2 py-1 rounded border transition-colors ${
                limit === size
                  ? "border-industrial-900 bg-industrial-900 text-white dark:border-white dark:bg-white dark:text-industrial-950 font-bold"
                  : "border-slate-200 dark:border-industrial-800 bg-white dark:bg-industrial-900 hover:bg-slate-100 dark:hover:bg-industrial-800 text-slate-700 dark:text-slate-300"
              }`}
            >
              {formatNumber(size)}
            </button>
          ))}
        </div>
        <span className="text-[11px] text-slate-400 mr-2">
          (از مجموع {formatNumber(totalItems)} قطعه)
        </span>
      </div>

      {/* دکمه‌های ناوبری صفحات */}
      <div className="flex items-center gap-1.5">
        <button
          onClick={() => changePage(currentPage - 1)}
          disabled={currentPage <= 1}
          className="h-9 px-3 rounded-lg border border-slate-200 dark:border-industrial-800 bg-white dark:bg-industrial-900 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-industrial-800 disabled:opacity-40 disabled:pointer-events-none transition-colors font-medium"
        >
          صفحه قبلی
        </button>

        <div className="flex items-center gap-1 px-2 font-bold text-slate-800 dark:text-slate-200">
          <span>صفحه</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-industrial-800 text-safety-600 dark:text-safety-400">
            {formatNumber(currentPage)}
          </span>
          <span>از</span>
          <span>{formatNumber(totalPages)}</span>
        </div>

        <button
          onClick={() => changePage(currentPage + 1)}
          disabled={currentPage >= totalPages}
          className="h-9 px-3 rounded-lg border border-slate-200 dark:border-industrial-800 bg-white dark:bg-industrial-900 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-industrial-800 disabled:opacity-40 disabled:pointer-events-none transition-colors font-medium"
        >
          صفحه بعدی
        </button>
      </div>

    </div>
  );
}