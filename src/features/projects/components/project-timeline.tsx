export function ProjectTimeline() {
  const phases = [
    {
      phase: "فاز اول • روز ۱ الی ۳",
      title: "تثبیت ایمن چاهک و دمونتاژ تجهیزات فرسوده",
      desc: "مهار کابین و وزنه تعادل با تیفورهای تناژ بالا، قطع ایمن تغذیه و خروج موتور گیربکس سنگین قدیمی از موتورخانه بدون آسیب به سقف پنت‌هاوس.",
    },
    {
      phase: "فاز دوم • روز ۴ الی ۶",
      title: "استقرار شاسی و تراز لیزری موتور گیرلس",
      desc: "نصب شاسی ارتعاش‌گیر بتنی، استقرار موتور سنکرون آلبرتو ساسی، هم‌راستاسازی با ابزار لیزری با دقت ۰.۱ میلی‌متر و نصب سیم‌بکسل‌های آلمانی.",
    },
    {
      phase: "فاز سوم • روز ۷ الی ۱۰",
      title: "سربندی تابلو آرکد و مدارهای میکروپروسسوری",
      desc: "سیم‌کشی تراول‌کابل‌های ضدحریق، اتصال انکودر سینوسی-کسینوسی و پروگرام پارامترهای منحنی شتاب (S-Curve) جهت توقف هم‌سطح میلی‌متری.",
    },
    {
      phase: "فاز چهارم • روز ۱۱ الی ۱۲",
      title: "آزمون‌های دینامیک و تحویل رسمی با تاییدیه استاندارد",
      desc: "تست ترمز اضطراری (پاراشوت) با ۱۲۵٪ بار نامی، آزمون قطع برق اضطراری UPS و تحویل گزارش نهایی چک‌لیست به مدیر مجتمع.",
    },
  ];

  return (
    <div className="rounded-2xl border border-slate-200 dark:border-industrial-800 bg-white dark:bg-industrial-900 p-5 sm:p-7 shadow-xs space-y-5">
      <div className="border-b border-slate-100 dark:border-industrial-800 pb-3">
        <h3 className="text-xs sm:text-sm font-black text-slate-900 dark:text-white">
          فرآیند فازبندی‌شده اجرای مهندسی و بازسازی در محل پروژه
        </h3>
        <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
          مدیریت زمان‌بندی با حداقل اختلال در تردد ساکنین ساختمان (طول مدت کل پروژه: ۱۲ روز کاری):
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
        {phases.map((item, idx) => (
          <div
            key={idx}
            className="p-4 rounded-xl border border-slate-100 dark:border-industrial-800 bg-slate-50/70 dark:bg-industrial-950/60 flex flex-col justify-between space-y-2"
          >
            <div>
              <span className="text-[10px] font-bold text-safety-600 dark:text-safety-400 font-mono block mb-1">
                {item.phase}
              </span>
              <h4 className="font-extrabold text-slate-900 dark:text-white leading-snug mb-1.5">
                {item.title}
              </h4>
              <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed text-justify">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}