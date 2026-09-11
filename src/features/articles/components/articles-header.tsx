"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

const TOPICS = [
  { id: "all", label: "تمام مقالات" },
  { id: "troubleshooting", label: "عیب‌یابی مکانیک و ارتعاشات" },
  { id: "standard", label: "تحلیل الزامات استاندارد ISIRI" },
  { id: "procurement", label: "راهنمای انتخاب قطعات" },
];

export function ArticlesHeader() {
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
    router.push(`/articles?${params.toString()}`);
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
          دانشنامه و ژورنال مهندسی
        </span>
      </nav>

      {/* سربرگ تحریریه فشرده */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 sm:gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded bg-slate-900 text-white dark:bg-white dark:text-industrial-950 font-mono">
              LIFTALAND JOURNAL
            </span>
            <span className="text-[10px] text-slate-400 font-mono">ISSN 2981-421X</span>
          </div>

          <h1 className="text-base sm:text-xl lg:text-2xl font-black text-slate-900 dark:text-white tracking-tight leading-snug">
            نشریه فنی، پژوهش‌های میدانی و تحلیل استانداردهای آسانسور
          </h1>
          <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 mt-0.5 hidden sm:block">
            دستورالعمل‌های عیب‌یابی ارتعاشات چاهک و راهنماهای بازرسی استاندارد ملی ISIRI 6303.
          </p>
        </div>

        <div className="text-left hidden md:block shrink-0">
          <span className="text-[10px] text-slate-400 block font-mono">PEER-REVIEWED</span>
          <span className="text-[11px] font-bold text-slate-700 dark:text-slate-300">
            ممیزی شده توسط ناظران رسمی
          </span>
        </div>
      </div>

      {/* نوار دسته‌بندی موضوعی باریک */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none pt-0.5">
        {TOPICS.map((topic) => {
          const isActive = currentCategory === topic.id;
          return (
            <button
              key={topic.id}
              onClick={() => handleSelect(topic.id)}
              className={`px-3 py-1 rounded-md text-[11px] sm:text-xs font-bold whitespace-nowrap transition-all ${
                isActive
                  ? "bg-industrial-900 text-white dark:bg-white dark:text-industrial-950 shadow-2xs"
                  : "bg-slate-100 dark:bg-industrial-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-industrial-700"
              }`}
            >
              {topic.label}
            </button>
          );
        })}
      </div>

    </div>
  );
}