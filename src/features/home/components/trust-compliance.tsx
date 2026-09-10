export function TrustCompliance() {
  const pillars = [
    {
      title: "پوشش بیمه مسئولیت مدنی معتبر",
      desc: "کلیه قراردادهای سرویس و نگهداری دوره‌ای لیفتالند دارای الحاقیه بیمه حوادث سرنشینان با پوشش کامل دیه و هزینه‌های پزشکی است.",
      icon: "🛡️",
    },
    {
      title: "انطباق با استاندارد ملی ISIRI 6303",
      desc: "ممیزی دوره‌ای آسانسورها عینا بر اساس چک‌لیست سازمان ملی استاندارد ایران و آیین‌نامه‌های بین‌المللی EN 81 انجام می‌شود.",
      icon: "📋",
    },
    {
      title: "تکنسین‌های مجاز و احراز هویت شده",
      desc: "تمامی متخصصین اعزامی دارای مدرک معتبر مهندسی آسانسور، سوءپیشینه پاک و کارت شناسایی هولوگرام‌دار لیفتالند هستند.",
      icon: "👷",
    },
    {
      title: "گزارش شفاف و فاکتور رسمی",
      desc: "هیچ هزینه‌ پنهانی وجود ندارد؛ صورتحساب و گزارش چک‌لیست ماهانه به صورت چاپی و فایل دیجیتال به کارفرما تحویل می‌گردد.",
      icon: "⚖️",
    },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="rounded-2xl border border-slate-200 dark:border-industrial-800 bg-white dark:bg-industrial-900 p-6 sm:p-10 shadow-sm">
        <div className="max-w-2xl mb-8">
          <span className="text-xs font-bold text-safety-600 dark:text-safety-400 tracking-wider">
            SAFETY & GOVERNANCE
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white mt-1 mb-2">
            تضمین‌های حقوقی، ایمنی و استانداردهای بازرسی
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            آسانسور مستقیماً با جان و امنیت ساکنین مرتبط است؛ بنابراین استانداردهای ما غیرقابل مصالحه هستند:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item, i) => (
            <div
              key={i}
              className="p-5 rounded-xl border border-slate-100 dark:border-industrial-800 bg-slate-50/70 dark:bg-industrial-950/50"
            >
              <div className="text-2xl mb-3">{item.icon}</div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                {item.title}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}