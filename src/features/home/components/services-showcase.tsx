import Link from "next/link";
import { getAllServices } from "@/features/services/api";

export async function ServicesShowcase() {
  const services = await getAllServices();

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* تیتر و ضرورت خدمات */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-5 pb-3 border-b border-slate-200 dark:border-industrial-800 gap-2">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-safety-500" />
            <span className="text-[11px] font-bold text-safety-600 dark:text-safety-400 tracking-wider">
              CORE ENGINEERING SERVICES
            </span>
          </div>
          <h2 className="text-lg sm:text-2xl font-extrabold text-slate-900 dark:text-white">
            چهار ستون خدمات مهندسی و ایمنی آسانسور
          </h2>
        </div>
        <p className="text-xs text-slate-600 dark:text-slate-400 max-w-md leading-relaxed">
          تمام خدمات مهندسی لیفتالند تحت نظارت کارشناسان دارای پروانه رسمی و با استفاده از قطعات استاندارد با برگه آزمایش تحویل داده می‌شوند.
        </p>
      </div>

      {/* گرید ۴ تایی خدمات تخصصی */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
        {services.map((service, index) => (
          <div
            key={service.id}
            className="flex flex-col justify-between rounded-xl border border-slate-200 dark:border-industrial-800 bg-white dark:bg-industrial-900/90 p-5 sm:p-6 hover:border-slate-300 dark:hover:border-industrial-700 transition-all shadow-sm"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-[11px] font-bold text-safety-600 dark:text-safety-400 bg-safety-50 dark:bg-safety-950/40 border border-safety-200 dark:border-safety-800/40 px-2 py-0.5 rounded">
                  سرویس کد ۰{index + 1}
                </span>
                <span className="text-[11px] text-slate-500 dark:text-slate-400">
                  مناسب: {service.targetAudience}
                </span>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-1.5">
                {service.title}
              </h3>
              
              <p className="text-xs text-safety-700 dark:text-safety-400 font-medium mb-3 leading-normal">
                {service.tagline}
              </p>

              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                {service.problemSolved}
              </p>

              <div className="space-y-1.5 p-3 rounded-lg bg-slate-50 dark:bg-industrial-950/60 border border-slate-100 dark:border-industrial-800/60 mb-5">
                <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 block mb-1">
                  اقدامات اجرایی اصلی:
                </span>
                {service.steps.map((step, sIdx) => (
                  <div key={sIdx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                    <span className="text-safety-500 font-bold shrink-0">✓</span>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* بخش انتهای کارت با جلوگیری قاطع از wrap شدن دکمه */}
            <div className="pt-3 border-t border-slate-100 dark:border-industrial-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <span className="block text-[11px] text-slate-400">تعهد زمانی:</span>
                <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                  {service.timeline}
                </span>
              </div>

              <Link
                href={`/services/${service.slug}`}
                className="w-full sm:w-auto inline-flex items-center justify-center px-4 h-10 rounded-md bg-industrial-900 hover:bg-industrial-800 text-white dark:bg-white dark:text-industrial-950 dark:hover:bg-slate-200 text-xs font-bold transition-colors gap-1.5 whitespace-nowrap shrink-0"
              >
                <span>مشاهده شرح و شرایط خدمات</span>
                <span>←</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}