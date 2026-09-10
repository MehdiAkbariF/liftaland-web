"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const BRANDS = [
  { id: "all", label: "همه برندها" },
  { id: "sicor", label: "سیسیور (Sicor)" },
  { id: "sassi", label: "آلبرتو ساسی (Alberto Sassi)" },
  { id: "arian", label: "آریان آسانسور" },
  { id: "dynatech", label: "دیناتک (Dynatech)" },
  { id: "yaskawa", label: "یاسکاوا (Yaskawa)" },
  { id: "wittur", label: "ویتور (Wittur)" },
];

const SORTS = [
  { id: "default", label: "پیش‌فرض" },
  { id: "price-asc", label: "ارزان‌ترین" },
  { id: "price-desc", label: "گران‌ترین" },
];

export function ProductFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentBrand = searchParams.get("brand") || "all";
  const currentSort = searchParams.get("sort") || "default";

  const [mobileOpen, setMobileOpen] = useState(false);

  const updateParam = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value === "all" || value === "default") {
      params.delete(key);
    } else {
      params.set(key, value);
    }
    router.push(`/products?${params.toString()}`);
  };

  const clearAllFilters = () => {
    router.push("/products");
    setMobileOpen(false);
  };

  const FilterContent = (
    <div className="space-y-6 text-xs">
      {/* ترتیب نمایش */}
      <div>
        <label className="block font-bold text-slate-900 dark:text-white mb-2">
          مرتب‌سازی بر اساس:
        </label>
        <div className="space-y-1.5">
          {SORTS.map((s) => (
            <button
              key={s.id}
              onClick={() => updateParam("sort", s.id)}
              className={`w-full text-right px-3 py-2 rounded-md font-medium transition-colors ${
                currentSort === s.id
                  ? "bg-safety-50 dark:bg-industrial-600 dark:text-white text-safety-700 dark:text-safety-400 font-bold"
                  : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-industrial-800"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>

      {/* فیلتر برند سازنده */}
      <div className="pt-4 border-t border-slate-200 dark:border-industrial-800">
        <label className="block font-bold text-slate-900 dark:text-white mb-2">
          برند و کشور سازنده:
        </label>
        <div className="space-y-1.5">
          {BRANDS.map((b) => (
            <button
              key={b.id}
              onClick={() => updateParam("brand", b.id)}
              className={`w-full text-right px-3 py-2 rounded-md font-medium transition-colors ${
                currentBrand === b.id
                  ? "bg-safety-50 dark:bg-industrial-600 dark:text-white text-safety-700 dark:text-safety-400 font-bold"
                  : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-industrial-800"
              }`}
            >
              {b.label}
            </button>
          ))}
        </div>
      </div>

      {/* دکمه پاک‌کردن فیلترها */}
      <button
        onClick={clearAllFilters}
        className="w-full h-9 rounded-lg border border-slate-300 dark:border-industrial-700 text-slate-600 dark:text-slate-400 font-bold hover:bg-slate-100 dark:hover:bg-industrial-800 transition-colors"
      >
        حذف همه فیلترها
      </button>
    </div>
  );

  return (
    <>
      {/* دکمه فیلتر در موبایل */}
      <div className="lg:hidden mb-4">
        <button
          onClick={() => setMobileOpen(true)}
          className="w-full h-10 px-4 rounded-lg border border-slate-300 dark:border-industrial-700 bg-white dark:bg-industrial-900 text-slate-900 dark:text-white text-xs font-bold flex items-center justify-between shadow-2xs"
        >
          <span>فیلتر و مرتب‌سازی قطعات</span>
          <span>⚙</span>
        </button>
      </div>

      {/* سایدبار دسکتاپ */}
      <aside className="hidden lg:block w-64 shrink-0 rounded-2xl border border-slate-200 dark:border-industrial-800 bg-white dark:bg-industrial-900 p-5 shadow-xs sticky top-20 self-start">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-industrial-800 mb-4">
          <span className="text-xs font-extrabold text-slate-900 dark:text-white">
            فیلترهای فنی
          </span>
          <span className="text-[11px] text-slate-400 font-mono">SPEC FILTERS</span>
        </div>
        {FilterContent}
      </aside>

      {/* مدال دراور موبایل */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            onClick={() => setMobileOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-xs"
          />
          <div className="fixed inset-y-0 right-0 w-[80%] max-w-xs bg-white dark:bg-industrial-950 p-5 shadow-xl flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-industrial-800 mb-4">
                <span className="text-sm font-bold text-slate-900 dark:text-white">
                  فیلترهای کاتالوگ
                </span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="w-7 h-7 rounded border flex items-center justify-center text-xs"
                >
                  ✕
                </button>
              </div>
              {FilterContent}
            </div>
            <button
              onClick={() => setMobileOpen(false)}
              className="w-full h-10 rounded-lg bg-safety-500 text-industrial-950 font-bold text-xs mt-6"
            >
              مشاهده نتایج
            </button>
          </div>
        </div>
      )}
    </>
  );
}