import Link from "next/link";
import { QuickSearch } from "./quick-search";
import { Badge } from "@/components/ui/badge";

export function HeroSection() {
  return (
    <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2">
      <div className="rounded-2xl border border-slate-200 dark:border-industrial-800 bg-white dark:bg-industrial-900/90 p-5 sm:p-8 lg:p-10 shadow-sm">
        
        {/* نشان و معرفی اجمالی هویت پلتفرم */}
        <div className="max-w-3xl mb-6">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <Badge variant="warning">مرجع تخصصی صنعت آسانسور ایران</Badge>
            <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
              LIFTALAND PLATFORM
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-[38px] font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.3] mb-3">
            معرفی خدمات تخصصی مهندسی و مرجع معرفی قطعات و تجهیزات آسانسور
          </h1>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
            لیفتالند نقطه اتصال مهندسان، شرکت‌های آسانسور و مدیران ساختمان است؛ با تمرکز بر دو محور اصلی: **معرفی و انتخاب قطعات استاندارد با پارت‌نامبر سازنده** و **آشنایی با خدمات مهندسی بازرسی، نگهداری و استانداردسازی.**
          </p>
        </div>

        {/* دو درگاه اصلی هدایت کاربر (Main Gateways) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-6">
          
          {/* درگاه ۱: معرفی و کاتالوگ قطعات و تجهیزات */}
          <div className="flex flex-col justify-between rounded-xl border-2 border-slate-200 dark:border-industrial-800 bg-slate-50/60 dark:bg-industrial-950/40 p-5 sm:p-6 hover:border-industrial-900 dark:hover:border-slate-400 transition-all">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="w-9 h-9 rounded-lg bg-industrial-900 text-white dark:bg-white dark:text-industrial-950 flex items-center justify-center font-bold text-sm">
                  ⚙
                </span>
                <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 font-mono">
                  PARTS & HARDWARE
                </span>
              </div>

              <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
                معرفی و فروش قطعات و تجهیزات
              </h2>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                بررسی پارت‌نامبرها، دیتاشیت‌های فنی، مشخصات موتورهای گیرلس و گیربکس، تابلوهای فرمان، ترمز ایمنی (پاراشوت) و سیستم‌های درب از برندهای معتبر.
              </p>
            </div>

            <Link
              href="/products"
              className="inline-flex items-center justify-center h-10 px-4 rounded-lg bg-industrial-900 hover:bg-industrial-800 text-white dark:bg-white dark:text-industrial-950 dark:hover:bg-slate-200 text-xs sm:text-sm font-bold transition-colors shadow-sm gap-2"
            >
              <span>ورود به کاتالوگ و مشخصات قطعات</span>
              <span className="text-xs">←</span>
            </Link>
          </div>

          {/* درگاه ۲: معرفی خدمات تخصصی آسانسور */}
          <div className="flex flex-col justify-between rounded-xl border-2 border-slate-200 dark:border-industrial-800 bg-slate-50/60 dark:bg-industrial-950/40 p-5 sm:p-6 hover:border-safety-500 dark:hover:border-safety-500 transition-all">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="w-9 h-9 rounded-lg bg-safety-500 text-industrial-950 flex items-center justify-center font-bold text-sm">
                  🏢
                </span>
                <span className="text-[11px] font-semibold text-safety-700 dark:text-safety-400 font-mono">
                  ENGINEERING SERVICES
                </span>
              </div>

              <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
                معرفی خدمات تخصصی مهندسی
              </h2>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                آشنایی با چک‌لیست سرویس ماهانه، مراحل استانداردسازی ادواری و اولیه، طرح‌های نوسازی (Modernization) و بازرسی عیب‌یابی ارتعاشات کابین.
              </p>
            </div>

            <Link
              href="/services"
              className="inline-flex items-center justify-center h-10 px-4 rounded-lg bg-safety-500 hover:bg-safety-600 text-industrial-950 text-xs sm:text-sm font-bold transition-colors shadow-sm gap-2"
            >
              <span>مشاهده و معرفی خدمات مهندسی</span>
              <span className="text-xs">←</span>
            </Link>
          </div>

        </div>

        {/* بخش جستجوی قطعه */}
        <div className="pt-4 border-t border-slate-100 dark:border-industrial-800">
          <div className="max-w-3xl">
            <h3 className="text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
              یا قطعه و تجهیز مورد نظر خود را مستقیماً جستجو کنید:
            </h3>
            <QuickSearch />
          </div>
        </div>

      </div>
    </section>
  );
}