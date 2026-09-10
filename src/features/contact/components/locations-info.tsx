export function LocationsInfo() {
  const locations = [
    {
      type: "دفتر مرکزی و ممیزی مهندسی",
      address: "تهران، خیابان سهروردی شمالی، تقاطع خیابان هویزه، پلاک ۱۱۸، طبقه ۴، واحد فنی",
      postalCode: "۱۵۳۳۶-۸۴۹۱۳",
      tel: "۰۲۱ - ۸۸۸۸ ۰۰۰۰",
      note: "جلسات ممیزی قراردادها، امور اداری استاندارد و مشاوره فنی حضوری",
    },
    {
      type: "مرکز لجستیک، انبار قطعات و بارانداز",
      address: "تهران، بزرگراه آزادگان، شهرک صنعتی آهن‌مکان، فاز سوم مرکزی، انبار تخصصی لیفتالند",
      postalCode: "۱۸۸۳۱-۵۴۳۲۱",
      tel: "۰۲۱ - ۸۸۸۸ ۰۰۰۳",
      note: "رویت حضوری قطعات، تست سلامت شاسی و بارگیری مستقیم به مقصد پروژه‌ها",
    },
  ];

  return (
    <div className="rounded-2xl border border-slate-200 dark:border-industrial-800 bg-white dark:bg-industrial-900 p-6 sm:p-8 shadow-xs space-y-6">
      <div className="border-b border-slate-100 dark:border-industrial-800 pb-3">
        <h3 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white">
          مراکز فیزیکی، دفتر مهندسی و انبار لجستیک
        </h3>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
          آدرس‌های رسمی ثبت‌شده در سندیکای صنایع آسانسور و پله‌برقی ایران:
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-xs">
        {locations.map((loc, idx) => (
          <div
            key={idx}
            className="p-5 rounded-xl border border-slate-100 dark:border-industrial-800 bg-slate-50/70 dark:bg-industrial-950 space-y-2.5"
          >
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-safety-500" />
              <h4 className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm">
                {loc.type}
              </h4>
            </div>

            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              {loc.address}
            </p>

            <div className="pt-2 border-t border-slate-200/80 dark:border-industrial-800/80 space-y-1 text-slate-500 dark:text-slate-400">
              <p className="flex items-center justify-between">
                <span>کد پستی:</span>
                <span className="font-mono text-slate-800 dark:text-slate-200">{loc.postalCode}</span>
              </p>
              <p className="flex items-center justify-between">
                <span>تلفن مستقیم واحد:</span>
                <span className="font-sans font-bold text-slate-800 dark:text-slate-200">{loc.tel}</span>
              </p>
            </div>

            <p className="text-[11px] text-safety-700 dark:text-safety-400 pt-1 font-medium">
              کاربری: {loc.note}
            </p>
          </div>
        ))}
      </div>

      {/* محدوده تحت پوشش فوریت‌ها */}
      <div className="p-4 rounded-xl border border-slate-200 dark:border-industrial-800 bg-slate-50 dark:bg-industrial-950/60 text-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div>
          <span className="font-bold text-slate-900 dark:text-white block mb-0.5">
            محدوده پوشش خدمات اعزام اضطراری:
          </span>
          <span className="text-slate-500 dark:text-slate-400 text-[11px]">
            کلیه مناطق ۲۲ گانه شهر تهران، شمیرانات، شهرری، پردیس و کرج با پایگاه‌های گشت منطقه‌ای.
          </span>
        </div>
        <span className="px-2.5 py-1 rounded bg-industrial-900 text-white dark:bg-white dark:text-industrial-950 text-[10px] font-bold whitespace-nowrap shrink-0">
          پوشش اعزام ۲۴/۷
        </span>
      </div>
    </div>
  );
}