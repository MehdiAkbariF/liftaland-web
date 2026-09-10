import Link from "next/link";

export function AboutProjectsCTA() {
  const highlights = [
    { metric: "۵۵٪", label: "کاهش مصرف برق", context: "پروژه نوسازی برج روما با موتور ساسی Leo" },
    { metric: "۲۴ بند", label: "رفع کامل اخطار استاندارد", context: "مرکز درمانی بهاران و اخذ تاییدیه کشوری" },
    { metric: "۹۹.۴٪", label: "پایداری عملکرد (Uptime)", context: "قرارداد پایش دوره‌ای مجتمع تجاری اطلس" },
  ];

  return (
    <div className="rounded-2xl border-2 border-slate-200 dark:border-industrial-800 bg-slate-50/80 dark:bg-industrial-900 p-6 sm:p-8 shadow-sm space-y-6">
      
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-industrial-800">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2.5 h-2.5 rounded-full bg-safety-500" />
            <span className="text-[11px] font-bold text-safety-600 dark:text-safety-400 font-mono tracking-wider">
              REAL PROJECT EVIDENCE
            </span>
          </div>
          <h3 className="text-base sm:text-xl font-extrabold text-slate-900 dark:text-white">
            صحت تعهدات ما در پروژه‌های اجراشده سنجیده می‌شود
          </h3>
          <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 max-w-xl leading-relaxed">
            به جای ادعا، مستندات قبل و بعد، ویدیوهای آزمون شتاب ترمز، قطعات نصب‌شده با پارت‌نامبر و تاییدیه‌های بازرسی پروژه‌ها را بررسی کنید.
          </p>
        </div>

        <Link
          href="/projects"
          className="inline-flex items-center justify-center h-11 px-5 rounded-lg bg-industrial-900 hover:bg-industrial-800 text-white dark:bg-white dark:text-industrial-950 dark:hover:bg-slate-200 text-xs font-bold transition-colors whitespace-nowrap shrink-0 shadow-2xs gap-2"
        >
          <span>مشاهده مستندات نمونه‌کارها</span>
          <span>←</span>
        </Link>
      </div>

      {/* سه شاخص مستند از پروژه‌ها */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-xs">
        {highlights.map((h, idx) => (
          <div
            key={idx}
            className="p-4 rounded-xl border border-slate-200 dark:border-industrial-800 bg-white dark:bg-industrial-950 space-y-1"
          >
            <span className="text-xl sm:text-2xl font-black text-safety-600 dark:text-safety-400 font-sans block">
              {h.metric}
            </span>
            <span className="font-bold text-slate-900 dark:text-white block text-xs">
              {h.label}
            </span>
            <span className="text-[11px] text-slate-500 dark:text-slate-400 block pt-1 leading-normal">
              {h.context}
            </span>
          </div>
        ))}
      </div>

    </div>
  );
}