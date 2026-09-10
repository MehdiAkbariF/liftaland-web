"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const SUGGESTED_TAGS = [
  { label: "موتور گیرلس سیسیور", query: "sicor" },
  { label: "تابلو فرمان آریان", query: "arian" },
  { label: "ترمز ایمنی (پاراشوت)", query: "safety" },
  { label: "گاورنر دوجهته", query: "governor" },
  { label: "درب سلکوم و یاران", query: "doors" },
];

export function QuickSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;
    router.push(`/products?q=${encodeURIComponent(searchTerm.trim())}`);
  };

  const handleTagClick = (query: string) => {
    router.push(`/products?q=${encodeURIComponent(query)}`);
  };

  return (
    <div className="w-full">
      {/* فرم جستجو با پدینگ‌های صریح و بدون تداخل دکمه در RTL */}
      <form onSubmit={handleSearch} className="flex flex-col sm:flex-row items-stretch gap-2">
        <div className="relative flex-1">
          <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-slate-400">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="جستجوی پارت‌نامبر، مدل، قطعه (مثال: Sicor MR12، تابلو آریان، پاراشوت...)"
            className="w-full h-12 pr-11 pl-4 text-xs sm:text-sm rounded-lg border border-slate-300 dark:border-industrial-700 bg-white dark:bg-industrial-950 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-safety-500 focus:border-transparent transition-all shadow-sm"
          />
        </div>
        <button
          type="submit"
          className="h-12 px-6 rounded-lg bg-industrial-900 hover:bg-industrial-800 text-white dark:bg-white dark:text-industrial-950 dark:hover:bg-slate-200 text-xs sm:text-sm font-semibold transition-colors shrink-0 select-none shadow-sm"
        >
          جستجوی قطعه
        </button>
      </form>

      {/* میانبرهای سریع تکنسین‌ها */}
      <div className="mt-3 flex flex-wrap items-center gap-1.5 sm:gap-2">
        <span className="text-[11px] text-slate-400 dark:text-slate-500 font-medium">
          دسترسی سریع به کاتالوگ:
        </span>
        {SUGGESTED_TAGS.map((tag, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => handleTagClick(tag.query)}
            className="text-[11px] px-2.5 py-1 rounded-md border border-slate-200 dark:border-industrial-800 bg-slate-100/80 dark:bg-industrial-900/80 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-industrial-700 hover:text-techBlue-600 dark:hover:text-blue-400 transition-colors"
          >
            {tag.label}
          </button>
        ))}
      </div>
    </div>
  );
}