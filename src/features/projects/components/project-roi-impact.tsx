export function ProjectRoiImpact() {
  const stats = [
    { value: "۱۸,۴۰۰", unit: "کیلووات ساعت در سال", label: "کاهش مصرف برق کل موتورخانه", sub: "۵۵٪ صرفه‌جویی در هزینه قبوض مشاعات" },
    { value: "۱۰۰٪", unit: "حذف روغن هیدرولیک و گیربکس", label: "سازگاری کامل با محیط زیست", sub: "عدم نیاز به تعویض و دورریز سالیانه ۲۰ لیتر روغن" },
    { value: "۱۴", unit: "ماه تا بازگشت سرمایه (ROI)", label: "سرعت استهلاک سرمایه‌گذاری", sub: "از محل صرفه‌جویی برق و حذف هزینه‌های تعمیرات هفتگی" },
  ];

  return (
    <div className="rounded-2xl border border-slate-200 dark:border-industrial-800 bg-slate-50/70 dark:bg-industrial-900/60 p-5 sm:p-7 shadow-xs space-y-4">
      <div className="border-b border-slate-200 dark:border-industrial-800 pb-3">
        <h3 className="text-xs sm:text-sm font-black text-slate-900 dark:text-white">
          تحلیل اقتصادی و اثرات زیست‌محیطی پروژه برای مجتمع مسکونی
        </h3>
        <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
          سنجش ارزش افزوده سرمایه‌گذاری مالکین پس از ارتقای سیستم به موتور گیرلس هوشمند:
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
        {stats.map((s, i) => (
          <div
            key={i}
            className="p-4 rounded-xl border border-slate-200 dark:border-industrial-800 bg-white dark:bg-industrial-950 space-y-1.5"
          >
            <div className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white font-sans">
              {s.value} <span className="text-[11px] font-normal text-slate-400">{s.unit}</span>
            </div>
            <span className="font-bold text-slate-900 dark:text-slate-200 block text-xs">
              {s.label}
            </span>
            <span className="text-[11px] text-emerald-600 dark:text-emerald-400 block font-medium">
              {s.sub}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}