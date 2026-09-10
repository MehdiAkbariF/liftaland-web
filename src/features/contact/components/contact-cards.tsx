export function ContactCards() {
  const channels = [
    {
      code: "EMERGENCY",
      title: "اورژانس خرابی و توقف آسانسور",
      tagline: "اعزام سریع کارشناس کشیک در موارد حبس مسافر یا از کار افتادن سیستم",
      phone: "۰۲۱ - ۸۸۸۸ ۰۰۰۱",
      tel: "tel:02188880001",
      hours: "۲۴ ساعته / ۷ روز هفته (بدون تعطیلی)",
      sla: "اعزام کمتر از ۴۰ دقیقه در سطح شهر",
      badge: "فوریت‌های شبانه‌روزی",
      isPrimary: true,
    },
    {
      code: "PARTS-SALES",
      title: "مهندسی فروش و استعلام قطعات",
      tagline: "استعلام پارت‌نامبر، صدور پیش‌فاکتور رسمی و تطابق دیتاشیت قطعات",
      phone: "۰۲۱ - ۸۸۸۸ ۰۰۰۰",
      tel: "tel:02188880000",
      hours: "شنبه تا چهارشنبه ۸ الی ۱۸ | پنج‌شنبه‌ها تا ۱۴",
      sla: "صدور پیش‌فاکتور رسمی ظرف ۲ ساعت",
      badge: "بازرگانی قطعات",
      isPrimary: false,
    },
    {
      code: "CONTRACTS",
      title: "امور قراردادها و استاندارد ادواری",
      tagline: "ثبت اشتراک سرویس ماهانه، الحاق بیمه حوادث و ممیزی سامانه استاندارد",
      phone: "۰۲۱ - ۸۸۸۸ ۰۰۰۲",
      tel: "tel:02188880002",
      hours: "شنبه تا چهارشنبه ۸:۳۰ الی ۱۷",
      sla: "هماهنگی کارشناسی حضوری ظرف ۲۴ ساعت",
      badge: "دبیرخانه خدمات",
      isPrimary: false,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
      {channels.map((ch, idx) => (
        <div
          key={idx}
          className={`flex flex-col justify-between rounded-2xl border p-5 sm:p-6 transition-all ${
            ch.isPrimary
              ? "border-safety-500 bg-white dark:bg-industrial-900 shadow-xs ring-1 ring-safety-500/20"
              : "border-slate-200 dark:border-industrial-800 bg-white dark:bg-industrial-900 shadow-2xs"
          }`}
        >
          <div>
            <div className="flex items-center justify-between gap-2 mb-3">
              <span
                className={`text-[10px] font-bold px-2.5 py-0.5 rounded-md font-mono ${
                  ch.isPrimary
                    ? "bg-safety-500 text-industrial-950"
                    : "bg-slate-100 dark:bg-industrial-800 text-slate-700 dark:text-slate-300"
                }`}
              >
                {ch.badge}
              </span>
              <span className="text-[10px] text-slate-400 font-mono">{ch.code}</span>
            </div>

            <h3 className="text-base font-extrabold text-slate-900 dark:text-white mb-2">
              {ch.title}
            </h3>

            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4 min-h-[36px]">
              {ch.tagline}
            </p>

            <div className="space-y-2 py-3 border-t border-slate-100 dark:border-industrial-800 text-[11px]">
              <div className="flex items-center justify-between text-slate-500 dark:text-slate-400">
                <span>ساعات پاسخگویی:</span>
                <span className="font-medium text-slate-800 dark:text-slate-200">{ch.hours}</span>
              </div>
              <div className="flex items-center justify-between text-slate-500 dark:text-slate-400">
                <span>تعهد زمان اقدام:</span>
                <span className="font-bold text-safety-600 dark:text-safety-400">{ch.sla}</span>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 dark:border-industrial-800">
            <a
              href={ch.tel}
              className={`w-full inline-flex items-center justify-center h-10 px-4 rounded-lg text-xs font-bold transition-colors gap-2 ${
                ch.isPrimary
                  ? "bg-safety-500 hover:bg-safety-600 text-industrial-950 shadow-2xs"
                  : "bg-industrial-900 hover:bg-industrial-800 text-white dark:bg-white dark:text-industrial-950 dark:hover:bg-slate-200"
              }`}
            >
              <span>تماس مستقیم:</span>
              <span className="dir-ltr font-bold font-sans">{ch.phone}</span>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}