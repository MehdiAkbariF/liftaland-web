"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useTransition } from "react";

const CATEGORIES = [
  { id: "all", label: "همه قطعات" },
  { id: "traction", label: "موتورهای گیرلس و گیربکس" },
  { id: "controller", label: "تابلو فرمان و درایو" },
  { id: "safety", label: "ترمز ایمنی و پاراشوت" },
  { id: "doors", label: "درب‌های اتوماتیک" },
];

export function ProductsHeader() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get("category") || "all";
  const currentQuery = searchParams.get("q") || "";

  const [searchTerm, setSearchTerm] = useState(currentQuery);
  const [, startTransition] = useTransition();

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams.toString());
    if (searchTerm.trim()) {
      params.set("q", searchTerm.trim());
    } else {
      params.delete("q");
    }
    startTransition(() => {
      router.push(`/products?${params.toString()}`);
    });
  };

  const handleCategorySelect = (catId: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (catId === "all") {
      params.delete("category");
    } else {
      params.set("category", catId);
    }
    startTransition(() => {
      router.push(`/products?${params.toString()}`);
    });
  };

  return (
    <div className="w-full pt-0.5 pb-3 sm:pb-4 border-b border-slate-200 dark:border-industrial-800 space-y-2.5 sm:space-y-3">
      
      {/* مسیر ناوبری فشرده */}
      <nav className="flex items-center gap-1.5 text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium overflow-x-auto whitespace-nowrap scrollbar-none">
        <Link href="/" className="hover:text-slate-900 dark:hover:text-white transition-colors">
          صفحه اصلی
        </Link>
        <span className="text-slate-300 dark:text-slate-600">/</span>
        <span className="text-slate-900 dark:text-slate-100 font-bold">
          کاتالوگ قطعات فنی
        </span>
      </nav>

      {/* تیتر و فرم جستجو در یک چیدمان فشرده و متوازن */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2.5 sm:gap-4">
        <div>
          <h1 className="text-base sm:text-xl lg:text-2xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
            کاتالوگ قطعات و تجهیزات استاندارد آسانسور
          </h1>
          <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 mt-0.5 hidden sm:block">
            استعلام مشخصات فنی بر اساس کد کارخانه، برند و برگه آزمون‌های ایمنی EN 81.
          </p>
        </div>

        {/* فرم جستجو بر اساس پارت‌نامبر */}
        <form onSubmit={handleSearchSubmit} className="flex items-center gap-1.5 w-full md:w-72 shrink-0">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="جستجوی پارت‌نامبر یا مدل..."
            className="flex-1 h-9 px-3 text-xs rounded-lg border border-slate-300 dark:border-industrial-700 bg-white dark:bg-industrial-900 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-safety-500"
          />
          <button
            type="submit"
            className="h-9 px-3.5 rounded-lg bg-industrial-900 hover:bg-industrial-800 text-white dark:bg-white dark:text-industrial-950 text-xs font-bold shrink-0 transition-colors"
          >
            بیاب
          </button>
        </form>
      </div>

      {/* چیپ‌های دسته‌بندی سریع و باریک افقی */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none pt-0.5">
        {CATEGORIES.map((cat) => {
          const isActive = currentCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => handleCategorySelect(cat.id)}
              className={`px-3 py-1 rounded-md text-[11px] sm:text-xs font-bold whitespace-nowrap transition-all ${
                isActive
                  ? "bg-industrial-900 text-white dark:bg-white dark:text-industrial-950 shadow-2xs"
                  : "bg-slate-100 dark:bg-industrial-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-industrial-700"
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

    </div>
  );
}