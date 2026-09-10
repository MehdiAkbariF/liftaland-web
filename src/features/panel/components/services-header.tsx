"use client";

import { useRouter, useSearchParams } from "next/navigation";

const TABS = [
  { id: "all", label: "تمام سوابق خدمات" },
  { id: "monthly", label: "چک‌لیست‌های ماهانه" },
  { id: "standard", label: "گواهی‌های استاندارد و بیمه" },
];

export function ServicesHeader({ totalLogs }: { totalLogs: number }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentTab = searchParams.get("type") || "all";

  const handleTabChange = (type: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (type === "all") {
      params.delete("type");
    } else {
      params.set("type", type);
    }
    router.push(`/panel/services?${params.toString()}`);
  };

  return (
    <div className="space-y-4 pb-4 border-b border-slate-200 dark:border-industrial-800">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-base sm:text-xl font-black text-slate-900 dark:text-white">
            پرونده خدمات، بازرسی‌های ماهانه و استاندارد آسانسور
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            گزارش‌های مکتوب تکنسین‌های دارای پروانه لیفتالند و سوابق چک‌لیست ۴۲ گانه ساختمان
          </p>
        </div>

        <span className="text-xs font-bold text-slate-700 dark:text-slate-300 self-start sm:self-auto bg-slate-100 dark:bg-industrial-800 px-3 py-1 rounded-lg">
          سوابق ثبت‌شده: {totalLogs} مورد
        </span>
      </div>

      {/* تب‌های فیلتر */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none pt-1">
        {TABS.map((tab) => {
          const isActive = currentTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${
                isActive
                  ? "bg-industrial-900 text-white dark:bg-white dark:text-industrial-950 shadow-xs"
                  : "bg-slate-100 dark:bg-industrial-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-industrial-700"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}