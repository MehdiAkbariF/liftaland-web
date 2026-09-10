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
      {/* فرم جستجو با استایل شیشه‌ای مات تیره و کنتراست عالی روی عکس */}
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
            className="w-full h-12 pr-11 pl-4 text-xs sm:text-sm rounded-xl border border-white/20 bg-slate-900/80 backdrop-blur-md text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-safety-500 focus:border-transparent transition-all shadow-inner"
          />
        </div>
        <button
          type="submit"
          className="h-12 px-6 rounded-xl bg-safety-500 hover:bg-safety-600 text-industrial-950 text-xs sm:text-sm font-extrabold transition-colors shrink-0 select-none shadow-md"
        >
          جستجوی قطعه
        </button>
      </form>

      {/* میانبرهای دسترسی سریع روی پس‌زمینه شیشه‌ای */}
      <div className="mt-3 flex flex-wrap items-center gap-1.5 sm:gap-2">
        <span className="text-[11px] text-slate-400 font-medium">
          دسترسی سریع به کاتالوگ:
        </span>
        {SUGGESTED_TAGS.map((tag, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => handleTagClick(tag.query)}
            className="text-[11px] px-2.5 py-1 rounded-md border border-white/10 bg-white/5 hover:bg-white/15 text-slate-200 hover:text-white transition-all backdrop-blur-xs"
          >
            {tag.label}
          </button>
        ))}
      </div>
    </div>
  );
}