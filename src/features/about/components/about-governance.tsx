export function AboutGovernance() {
  const standards = [
    { title: "استاندارد ملی ایران ISIRI 6303-1", desc: "آیین‌نامه اجباری ایمنی و ساخت آسانسورهای الکتریکی" },
    { title: "استاندارد بین‌المللی EN 81-20 / EN 81-50", desc: "دستورالعمل طراحی، آزمون قطعات و ترمزهای ایمنی پاراشوت" },
    { title: "مبحث ۱۵ مقررات ملی ساختمان", desc: "ضوابط طراحی آسانسورها، محاسبات ترافیک و فضاهای موتورخانه" },
    { title: "پروانه عضویت سندیکای صنایع آسانسور", desc: "مجوز رسمی فعالیت خدمات و بازرگانی قطعات در کشور" },
  ];

  return (
    <div className="rounded-2xl border border-slate-200 dark:border-industrial-800 bg-white dark:bg-industrial-900 p-6 sm:p-8 shadow-xs space-y-6">
      <div className="border-b border-slate-100 dark:border-industrial-800 pb-3">
        <h3 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white">
          صلاحیت‌های فنی و چارچوب‌های قانونی بازرسی
        </h3>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
          لیفتالند تمامی فعالیت‌های اجرایی خود را با مراجع رسمی کشور تطبیق می‌دهد:
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
        {standards.map((st, idx) => (
          <div
            key={idx}
            className="p-4 rounded-xl border border-slate-100 dark:border-industrial-800 bg-slate-50/70 dark:bg-industrial-950/60 flex items-start gap-3"
          >
            <span className="w-2 h-2 rounded-full bg-safety-500 shrink-0 mt-1.5" />
            <div>
              <h4 className="font-bold text-slate-900 dark:text-white mb-1">
                {st.title}
              </h4>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-[11px]">
                {st.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 rounded-xl border border-slate-200 dark:border-industrial-800 bg-slate-50 dark:bg-industrial-950 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
        <div>
          <span className="font-bold text-slate-900 dark:text-white block mb-0.5">
            زنجیره تامین مستقیم بدون واسطه:
          </span>
          <span className="text-slate-500 dark:text-slate-400 text-[11px]">
            انبار مرکزی لجستیک آهن‌مکان با مساحت ۱,۲۰۰ مترمربع به عنوان پشتوانه تامین قطعات روتین و سنگین.
          </span>
        </div>
        <span className="px-3 py-1 rounded bg-industrial-900 text-white dark:bg-white dark:text-industrial-950 text-xs font-bold whitespace-nowrap shrink-0">
          تضمین موجودی انبار
        </span>
      </div>
    </div>
  );
}