"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useTransition } from "react";

const CATEGORIES = [
  { id: "all", label: "همه قطعات" },
  { id: "traction", label: "موتورهای گیرلس و گیربکس" },
  { id: "controller", label: "تابلو فرمان و درایو" },
  { id: "safety", label: "سیستم‌های ترمز و پاراشوت" },
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
    <div className="w-full pt-1 pb-5 border-b border-slate-200 dark:border-industrial-800 space-y-4">
      {/* مسیر ناوبری */}
      <nav className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-medium">
        <Link href="/" className="hover:text-slate-900 dark:hover:text-white transition-colors">
          صفحه اصلی
        </Link>
        <span className="text-slate-300 dark:text-slate-600">/</span>
        <span className="text-slate-900 dark:text-slate-100 font-bold">
          کاتالوگ و مشخصات قطعات فنی
        </span>
      </nav>

      {/* عنوان و سرچ‌باکس با پارت‌نامبر */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
            کاتالوگ قطعات و تجهیزات استاندارد آسانسور
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
            استعلام مشخصات فنی بر اساس کد کارخانه، برند و برگه آزمون‌های ایمنی EN 81.
          </p>
        </div>

        {/* فرم جستجو بر اساس پارت‌نامبر */}
        <form onSubmit={handleSearchSubmit} className="flex items-center gap-2 w-full md:w-80">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="جستجوی پارت‌نامبر یا مدل..."
            className="w-full h-10 px-3.5 text-xs rounded-lg border border-slate-300 dark:border-industrial-700 bg-white dark:bg-industrial-900 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-safety-500"
          />
          <button
            type="submit"
            className="h-10 px-4 rounded-lg bg-industrial-900 hover:bg-industrial-800 text-white dark:bg-white dark:text-industrial-950 text-xs font-bold shrink-0 transition-colors"
          >
            بیاب
          </button>
        </form>
      </div>

      {/* چیپ‌های دسته‌بندی سریع افقی */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none pt-1">
        {CATEGORIES.map((cat) => {
          const isActive = currentCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => handleCategorySelect(cat.id)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${
                isActive
                  ? "bg-industrial-900 text-white dark:bg-white dark:text-industrial-950 shadow-xs"
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