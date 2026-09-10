import Link from "next/link";

export function ServicePlansTable() {
  const plans = [
    {
      name: "پکیج مسکونی استاندارد",
      tagline: "مناسب آپارتمان‌های تا ۶ توقف و ترافیک نرمال",
      frequency: "۱ بار در ماه (بازرسی ۴۲ نقطه‌ای)",
      emergencyResponse: "کمتر از ۶۰ دقیقه (۲۴/۷)",
      insurance: "بیمه حوادث و دیه کامل سرنشینان",
      report: "فرم چاپی و چک‌لیست ماهانه مکتوب",
      partsDiscount: "۵٪ تخفیف تامین قطعات یدکی",
      popular: false,
    },
    {
      name: "پکیج مجتمع مسکونی و برج",
      tagline: "مناسب ساختمان‌های ۷ توقف به بالا و چند واحدی",
      frequency: "۱ الی ۲ بار در ماه (سرویس مکانیکال سنگین)",
      emergencyResponse: "کمتر از ۴۰ دقیقه (کشیک اولویت‌دار)",
      insurance: "بیمه جامع با سقف خسارت و نقص عضو بالا",
      report: "گزارش دیجیتال + پرونده سوابق آنلاین سامانه",
      partsDiscount: "۱۰٪ تخفیف قطعات با اصالت پارت‌نامبر",
      popular: true,
    },
    {
      name: "پکیج اداری، تجاری و هتل‌ها",
      tagline: "مناسب مجتمع‌های پرتردد با ترافیک پیوسته",
      frequency: "۲ الی ۴ بار در ماه (تیم مهندسی اختصاصی)",
      emergencyResponse: "کمتر از ۳۰ دقیقه (کد بحرانی توقف)",
      insurance: "بیمه مسئولیت مدنی تجاری کامل",
      report: "گزارش آنالیز ارتعاشات و منحنی استهلاک",
      partsDiscount: "۱۵٪ تخفیف تامین مستقیم قطعات",
      popular: false,
    },
  ];

  return (
    <div id="service-plans" className="rounded-2xl border border-slate-200 dark:border-industrial-800 bg-white dark:bg-industrial-900 p-6 sm:p-8 shadow-xs">
      <div className="max-w-2xl mb-6">
        <div className="flex items-center gap-2 mb-1.5">
          <span className="w-2 h-2 rounded-full bg-safety-500" />
          <span className="text-[11px] font-bold text-safety-600 dark:text-safety-400 tracking-wider font-mono">
            SERVICE LEVEL AGREEMENT (SLA)
          </span>
        </div>
        <h2 className="text-lg sm:text-2xl font-extrabold text-slate-900 dark:text-white">
          مقایسه پکیج‌های قرارداد سرویس و نگهداری دوره‌ای
        </h2>
        <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
          تعهدات مکتوب و زمان اعزام تکنسین بر اساس نوع کاربری و ترافیک آسانسور ساختمان شما:
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className={`relative flex flex-col justify-between rounded-xl border p-5 transition-all ${
              plan.popular
                ? "border-safety-500 bg-white dark:bg-industrial-900 ring-1 ring-safety-500/30 shadow-sm"
                : "border-slate-200 dark:border-industrial-800 bg-slate-50/70 dark:bg-industrial-950/60"
            }`}
          >
            {plan.popular && (
              <span className="absolute -top-3 right-4 px-2.5 py-0.5 rounded-md bg-safety-500 text-industrial-950 text-[10px] font-bold shadow-xs">
                انتخاب پرتکرار مدیران ساختمان
              </span>
            )}

            <div>
              <h3 className="text-base font-extrabold text-slate-900 dark:text-white mb-1">
                {plan.name}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 min-h-[32px]">
                {plan.tagline}
              </p>

              <div className="space-y-3 text-xs border-t border-slate-200/80 dark:border-industrial-800/80 pt-4 mb-6">
                <div>
                  <span className="text-[11px] text-slate-400 block mb-0.5">دوره بازدید منظم:</span>
                  <span className="font-bold text-slate-900 dark:text-slate-100">{plan.frequency}</span>
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 block mb-0.5">حداکثر زمان اعزام اضطراری:</span>
                  <span className="font-bold text-safety-600 dark:text-safety-400">{plan.emergencyResponse}</span>
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 block mb-0.5">پوشش بیمه حوادث:</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">{plan.insurance}</span>
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 block mb-0.5">نحوه ارائه گزارش:</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">{plan.report}</span>
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 block mb-0.5">تخفیف قطعات یدکی:</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">{plan.partsDiscount}</span>
                </div>
              </div>
            </div>

            <Link
              href="/services/preventive-maintenance"
              className={`w-full inline-flex items-center justify-center h-10 px-4 rounded-lg text-xs font-bold transition-colors text-center ${
                plan.popular
                  ? "bg-safety-500 hover:bg-safety-600 text-industrial-950 shadow-xs"
                  : "bg-industrial-900 hover:bg-industrial-800 text-white dark:bg-industrial-800 dark:text-slate-100 dark:hover:bg-industrial-700"
              }`}
            >
              استعلام و ثبت درخواست این پکیج
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}