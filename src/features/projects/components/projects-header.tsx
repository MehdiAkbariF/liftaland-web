"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

const CATEGORIES = [
  { id: "all", label: "همه پروژه‌ها" },
  { id: "modernization", label: "نوسازی و بازسازی VVVF" },
  { id: "standard", label: "اخذ گواهی استاندارد" },
  { id: "maintenance", label: "سرویس و پایش دوره‌ای" },
];

export function ProjectsHeader() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get("category") || "all";

  const handleSelect = (catId: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (catId === "all") {
      params.delete("category");
    } else {
      params.set("category", catId);
    }
    router.push(`/projects?${params.toString()}`);
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
          پرونده پروژه‌ها و نمونه‌کارها
        </span>
      </nav>

      <div className="max-w-3xl">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-tight mb-2">
          مستندات مهندسی پروژه‌ها و نمونه‌کارهای اجرایی لیفتالند
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          بررسی سوابق واقعی اجرای عملیات مکانیکال و الکتریکال در برج‌های مسکونی، مراکز درمانی و مجتمع‌های تجاری همراه با شرح قطعات نصب‌شده و دستاوردهای فنی.
        </p>
      </div>

      {/* چیپ‌های فیلتر دسته‌بندی با استایل سازگار با دارک‌مود */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none pt-2">
        {CATEGORIES.map((cat) => {
          const isActive = currentCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => handleSelect(cat.id)}
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