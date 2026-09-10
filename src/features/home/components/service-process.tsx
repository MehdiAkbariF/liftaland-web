export function ServiceProcess() {
  const steps = [
    {
      num: "۰۱",
      title: "ثبت درخواست و عارضه‌یابی اولیه",
      desc: "دریافت تلفنی یا آنلاین مشخصات آسانسور (تعداد توقف، ظرفیت، مدل موتور و تابلو) و شرح نوع نیاز یا صدای غیرعادی.",
    },
    {
      num: "۰۲",
      title: "بازدید و کارشناسی میدانی",
      desc: "حضور کارشناس در موتورخانه و چاهک، اندازه‌گیری لقی‌ها، سلامت ترمز و ثبت گزارش فنی شفاف با چک‌لیست مکتوب.",
    },
    {
      num: "۰۳",
      title: "ارائه طرح و تامین قطعات استاندارد",
      desc: "اعلام شفاف هزینه بر اساس تعرفه مصوب اتحادیه؛ در صورت نیاز به تعویض قطعه، قطعه اورجینال با پارت‌نامبر سازنده تامین می‌شود.",
    },
    {
      num: "۰۴",
      title: "تحویل عملیاتی، صدور بیمه و گارانتی",
      desc: "اجرای تنظیمات، انجام تست بار دینامیک، صدور بیمه‌نامه رسمی مسئولیت مدنی آسانسور و ثبت شناسنامه در سامانه خدمات.",
    },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="rounded-2xl border border-slate-200 dark:border-industrial-800 bg-slate-50/70 dark:bg-industrial-900/40 p-6 sm:p-10">
        <div className="max-w-2xl mb-8">
          <span className="text-xs font-bold text-safety-600 dark:text-safety-400 tracking-wider">
            TRANSPARENT WORKFLOW
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white mt-1 mb-3">
            فرآیند گام‌به‌گام ارائه خدمات مهندسی در لیفتالند
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            هیچ ابهامی در هزینه‌ها و اقدامات وجود ندارد؛ کارفرما در تمام مراحل از طریق گزارش فنی مکتوب در جریان وضعیت سامانه خود قرار می‌گیرد.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="relative flex flex-col justify-between rounded-xl border border-slate-200 dark:border-industrial-800 bg-white dark:bg-industrial-900 p-5 shadow-xs"
            >
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-safety-500 mb-3">
                  {item.num}
                </div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-2 leading-snug">
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
    </section>
  );
}