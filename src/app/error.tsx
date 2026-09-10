"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // لاگ خطا در محیط پروداکشن
    console.error("Liftaland System Error:", error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16">
      <div className="max-w-md w-full text-center space-y-6 rounded-2xl border-2 border-rose-500/40 bg-white dark:bg-industrial-900 p-8 shadow-lg">
        
        {/* نشانگر استپ ایمنی آسانسور */}
        <div className="w-16 h-16 rounded-2xl bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/30 flex items-center justify-center text-3xl mx-auto shadow-inner">
          ⚠️
        </div>

        <div className="space-y-2">
          <h2 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white">
            مدار ایمنی سیستم فعال شد (خطای پردازش)
          </h2>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            در دریافت یا پردازش اطلاعات فنی ارتباط با سرور دچار اختلال موقت شد. مهندسان ما در حال بررسی لاگ‌های سیستم هستند.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <button
            type="button"
            onClick={() => reset()}
            className="w-full sm:w-auto inline-flex items-center justify-center h-10 px-6 rounded-xl bg-safety-500 hover:bg-safety-600 text-industrial-950 font-extrabold text-xs transition-colors shadow-xs"
          >
            تلاش مجدد و راه‌اندازی دوباره
          </button>
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center h-10 px-4 rounded-xl border border-slate-300 dark:border-industrial-700 text-slate-700 dark:text-slate-300 text-xs font-bold hover:bg-slate-100 dark:hover:bg-industrial-800 transition-colors"
          >
            صفحه اصلی
          </Link>
        </div>

      </div>
    </div>
  );
}