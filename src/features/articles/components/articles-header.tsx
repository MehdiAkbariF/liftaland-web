"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

const TOPICS = [
  { id: "all", label: "تمام مقالات و یادداشت‌ها" },
  { id: "troubleshooting", label: "عیب‌یابی مکانیک و ارتعاشات" },
  { id: "standard", label: "تحلیل الزامات استاندارد ISIRI" },
  { id: "procurement", label: "راهنمای انتخاب و پارت‌نامبرها" },
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
    <div className="w-full pt-1 pb-6 border-b border-slate-200 dark:border-industrial-800 space-y-4">
      {/* مسیر ناوبری */}
      <nav className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-medium">
        <Link href="/" className="hover:text-slate-900 dark:hover:text-white transition-colors">
          صفحه اصلی
        </Link>
        <span className="text-slate-300 dark:text-slate-600">/</span>
        <span className="text-slate-900 dark:text-slate-100 font-bold">
          ژورنال مهندسی و دانشنامه تخصصی
        </span>
      </nav>

      {/* سربرگ تحریریه و مانیفست بلاگ */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-900 text-white dark:bg-white dark:text-industrial-950 font-mono">
              LIFTALAND ENGINEERING JOURNAL
            </span>
            <span className="text-xs text-slate-400 font-mono">ISSN 2981-421X</span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-tight mb-2">
            نشریه فنی، پژوهش‌های میدانی و تحلیل استانداردهای آسانسور
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
            مرجع مستندات فنی، متدولوژی عیب‌یابی ارتعاشات چاهک، تفسیر آیین‌نامه‌های سازمان ملی استاندارد (ISIRI 6303) و راهنماهای کاربردی برای مهندسان و مدیران مجتمع‌ها.
          </p>
        </div>

        <div className="text-left hidden md:block">
          <span className="text-[11px] text-slate-400 block font-mono">PEER-REVIEWED CONTENT</span>
          <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
            ممیزی شده توسط ناظران رسمی
          </span>
        </div>
      </div>

      {/* نوار دسته‌بندی موضوعی با طراحی تمیز و مدرن */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none pt-2 border-t border-slate-100 dark:border-industrial-800">
        {TOPICS.map((topic) => {
          const isActive = currentCategory === topic.id;
          return (
            <button
              key={topic.id}
              onClick={() => handleSelect(topic.id)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${
                isActive
                  ? "bg-industrial-900 text-white dark:bg-white dark:text-industrial-950 shadow-xs"
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