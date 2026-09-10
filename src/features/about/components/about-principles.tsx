export function AboutPrinciples() {
  const principles = [
    {
      code: "۰۱",
      title: "اصالت غیرقابل مصالحه قطعات ایمنی",
      desc: "هیچ قطعه کارگاهی یا بدون شناسنامه وارد چرخه نصب ما نمی‌شود. کلیه قطعات از موتور تا پاراشوت تنها با پارت‌نامبر رسمی کارخانه و تاییدیه آزمایشگاهی EN 81 تامین می‌گردند.",
    },
    {
      code: "۰۲",
      title: "پایش بر مبنای چک‌لیست ۴۲ گانه استاندارد",
      desc: "پایان سرویس‌های چشمی و سنتی؛ در هر نوبت بازرسی ماهانه، تکنسین موظف به کنترل و ثبت کتبی ۴۲ نقطه حساس چاهک، موتورخانه و کابین در حضور مدیر ساختمان است.",
    },
    {
      code: "۰۳",
      title: "تعهد حقوقی و پوشش کامل بیمه حوادث",
      desc: "آسانسور با جان انسان‌ها پیوند دارد. تمام قراردادهای سرویس و پروژه‌های نوسازی لیفتالند دارای الحاقیه معتبر بیمه مسئولیت مدنی با سقف دیه کامل هستند.",
    },
    {
      code: "۰۴",
      title: "واکنش سریع شبکه گشت فوریت‌ها (۲۴/۷)",
      desc: "شبکه تکنسین‌های شیفت منطقه‌ای ما با تعهد زمانی مکتوب، در کمتر از ۴۰ دقیقه هنگام توقف بحرانی یا حبس مسافر در هر نقطه از شهر در محل حاضر می‌شوند.",
    },
  ];

  return (
    <div className="space-y-4">
      <div className="border-b border-slate-200 dark:border-industrial-800 pb-3">
        <h2 className="text-base sm:text-xl font-extrabold text-slate-900 dark:text-white">
          اصول چهارگانه عملیاتی در سازمان مهندسی لیفتالند
        </h2>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
          معیارهای کیفی که تحت هیچ شرایطی از آن‌ها عقب‌نشینی نمی‌کنیم:
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
        {principles.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col justify-between rounded-2xl border border-slate-200 dark:border-industrial-800 bg-white dark:bg-industrial-900 p-5 sm:p-6 shadow-2xs"
          >
            <div>
              <span className="text-xl sm:text-2xl font-black text-safety-600 dark:text-safety-400 font-mono block mb-2">
                {item.code}
              </span>
              <h3 className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white mb-2 leading-snug">
                {item.title}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}