export function ProjectCommissioningTests() {
  const testProtocols = [
    {
      test: "آزمون ترمز اضطراری (پاراشوت)",
      standardRef: "EN 81-50 بند ۵.۳",
      condition: "تست سقوط آزاد با ۱۲۵٪ بار نامی (۱۲۵۰ کیلوگرم)",
      result: "درگیری همزمان فک‌ها در سرعت ۱.۳ m/s بدون سرخوردگی",
      status: "PASS",
    },
    {
      test: "آزمون مقاومت عایقی سیم‌پیچ و ارت چاه",
      standardRef: "مبحث ۱۵ مقررات ملی",
      condition: "تست میگر با ولتاژ ۵۰۰ ولت DC",
      result: "مقاومت عایقی ۱۲۰ مگااهم و ارت چاه ۱.۴ اهم (زیر ۲ اهم مجاز)",
      status: "PASS",
    },
    {
      test: "آزمون قطع ناگهانی برق شبکه (Blackout)",
      standardRef: "پروتکل ایمنی UPS",
      condition: "قطع فیوز اصلی در حین حرکت در طبقه ۸",
      result: "فعال‌سازی آنی نجات اضطراری و باز شدن درب در نزدیک‌ترین طبقه ظرف ۱۸ ثانیه",
      status: "PASS",
    },
    {
      test: "آزمون اضافه بار (Overload Protection)",
      standardRef: "استاندارد ملی ISIRI",
      condition: "بارگذاری ۱۱۰٪ ظرفیت نامی کابین",
      result: "فعال شدن بازر صوتی، توقف فرمان حرکت و باز ماندن درب‌ها",
      status: "PASS",
    },
  ];

  return (
    <div className="rounded-2xl border border-slate-200 dark:border-industrial-800 bg-white dark:bg-industrial-900 overflow-hidden shadow-xs">
      <div className="p-4 sm:p-5 border-b border-slate-100 dark:border-industrial-800 bg-slate-50/70 dark:bg-industrial-950/60 flex items-center justify-between">
        <div>
          <h3 className="text-xs sm:text-sm font-black text-slate-900 dark:text-white">
            کارنامه آزمون‌های تحویل رسمی و استاندارد کشوری (Commissioning Test Ledger)
          </h3>
          <span className="text-[11px] text-slate-400">انجام‌شده در حضور ناظر رسمی استاندارد و مهندس مشاور پروژه</span>
        </div>
        <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/40 px-2 py-0.5 rounded font-bold">
          ALL TESTS PASSED
        </span>
      </div>

      <div className="divide-y divide-slate-100 dark:divide-industrial-800 text-xs">
        {testProtocols.map((item, idx) => (
          <div
            key={idx}
            className="p-4 grid grid-cols-1 md:grid-cols-12 gap-2 items-center hover:bg-slate-50/50 dark:hover:bg-industrial-950/40 transition-colors"
          >
            <div className="md:col-span-3">
              <span className="font-bold text-slate-900 dark:text-white block">{item.test}</span>
              <span className="text-[10px] text-slate-400 font-mono">{item.standardRef}</span>
            </div>

            <div className="md:col-span-4 text-slate-500 dark:text-slate-400 text-[11px]">
              {item.condition}
            </div>

            <div className="md:col-span-4 text-slate-700 dark:text-slate-300 font-medium text-[11px]">
              {item.result}
            </div>

            <div className="md:col-span-1 text-left">
              <span className="px-2 py-0.5 rounded bg-emerald-500 text-white font-black text-[10px] font-mono">
                {item.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}