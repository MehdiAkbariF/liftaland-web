import Link from "next/link";

export function ServiceHero() {
  const serviceShortcuts = [
    { code: "۰۱", title: "سرویس ماهانه", target: "#preventive-maintenance" },
    { code: "۰۲", title: "اورژانس و رفع خرابی", target: "#emergency-repair" },
    { code: "۰۳", title: "اخذ استاندارد ادواری", target: "#standard-certification" },
    { code: "۰۴", title: "نوسازی و بازسازی", target: "#modernization" },
    { code: "SLA", title: "جدول تعهدات قراردادها", target: "#service-plans" },
  ];

  return (
    <div className="w-full pt-1 pb-6 border-b border-slate-200 dark:border-industrial-800">
      
      {/* مسیر ناوبری (Breadcrumbs) تمیز و بدون المان اضافه */}
      <nav className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 mb-4 font-medium">
        <Link href="/" className="hover:text-slate-900 dark:hover:text-white transition-colors">
          صفحه اصلی
        </Link>
        <span className="text-slate-300 dark:text-slate-600">/</span>
        <span className="text-slate-900 dark:text-slate-100 font-bold">
          خدمات تخصصی مهندسی
        </span>
      </nav>

      {/* بخش تیتر و معرفی: تمام‌عرض و مقتدر در دسکتاپ */}
      <div className="w-full mb-6">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-tight mb-3">
          خدمات مهندسی، بازرسی و نگهداری تخصصی آسانسور
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-4xl">
          اجرای دقیق آیین‌نامه استاندارد ملی ایران (ISIRI 6303) و استاندارد اروپایی EN 81؛ از پایش ۴۲ نقطه‌ای ماهانه تا رفع خطاهای اضطراری و نوسازی کامل موتورخانه با تضمین مکتوب و بدون واسطه.
        </p>
      </div>

      {/* نوار مترییک‌های سه‌گانه تمام‌عرض (Full Width) هماهنگ با لبه‌های صفحه */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6 mb-6 p-4 sm:p-5 rounded-xl border border-slate-200 dark:border-industrial-800 bg-slate-50/70 dark:bg-industrial-950/60">
        <div>
          <span className="block text-[11px] text-slate-400 dark:text-slate-500 mb-1">
            زمان اعزام اضطراری فوریت‌ها
          </span>
          <span className="text-sm sm:text-lg font-extrabold text-safety-600 dark:text-safety-400">
            کمتر از ۴۰ دقیقه در سراسر شهر
          </span>
        </div>

        <div className="border-t sm:border-t-0 sm:border-r border-slate-200 dark:border-industrial-800 pt-3 sm:pt-0 sm:pr-6">
          <span className="block text-[11px] text-slate-400 dark:text-slate-500 mb-1">
            ممیزی چک‌لیست بازرسی
          </span>
          <span className="text-sm sm:text-lg font-extrabold text-slate-900 dark:text-white">
            ۴۲ نقطه کنترلی طبق استاندارد ملی
          </span>
        </div>

        <div className="border-t sm:border-t-0 sm:border-r border-slate-200 dark:border-industrial-800 pt-3 sm:pt-0 sm:pr-6">
          <span className="block text-[11px] text-slate-400 dark:text-slate-500 mb-1">
            تضمین حقوقی قراردادها
          </span>
          <span className="text-sm sm:text-lg font-extrabold text-slate-900 dark:text-white">
            پوشش کامل بیمه مسئولیت مدنی حوادث
          </span>
        </div>
      </div>

      {/* نوار سگمنت‌ها با چیدمان کامل و اسکرول لمسی در موبایل */}
      <div className="w-full">
        <div className="text-[11px] font-bold text-slate-400 dark:text-slate-500 mb-2">
          دسترسی مستقیم به بخش‌های این صفحه:
        </div>
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {serviceShortcuts.map((item, idx) => (
            <a
              key={idx}
              href={item.target}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg border border-slate-200 dark:border-industrial-800 bg-white dark:bg-industrial-900 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-industrial-700 hover:text-slate-950 dark:hover:text-white text-xs font-semibold whitespace-nowrap shrink-0 transition-all shadow-2xs"
            >
              <span className="font-mono text-[11px] text-safety-600 dark:text-safety-400 font-bold">
                {item.code}
              </span>
              <span>{item.title}</span>
            </a>
          ))}
        </div>
      </div>

    </div>
  );
}