"use client";

import { useState } from "react";

export function ProductReviews() {
  const [reviews] = useState([
    {
      id: "r1",
      author: "مهندس علیرضا کیانی",
      role: "سرپرست نصب - شرکت آرمان آسانبر",
      project: "پروژه برج مسکونی پردیس (۱۰ توقف)",
      date: "۱۴۰۳/۰۴/۱۸",
      rating: 5,
      comment:
        "موتور سیسیور روی این پروژه با درایو یاسکاوا بسته شد. بالانس استاتیکی و دینامیکی فلکه کشش فوق‌العاده بود و لرزش زیر ۵ میلی‌متر بر ثانیه ثبت شد. پلاک مبدا و تاییدیه انطباق هم کامل بود.",
      pros: "لرزش نزدیک به صفر، بی‌صدا بودن بوبین ترمز",
    },
    {
      id: "r2",
      author: "محسن فراهانی",
      role: "تکنسین ارشد تعمیرات و نوسازی",
      project: "بازسازی ساختمان اداری وزرا",
      date: "۱۴۰۳/۰۳/۲۲",
      rating: 5,
      comment:
        "در پروژه تعویض موتور، ابعاد پایه دقیقاً با نقشه شاسی تطابق داشت و نیازی به برشکاری اضافه نبود. بعد از ۲ ماه کارکرد مداوم، دمای پوسته در بار کامل نرمال است.",
      pros: "راندمان حرارتی مناسب، روغن باکیفیت کارخانه",
    },
  ]);

  const [commentText, setCommentText] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentText.trim()) return;
    setSubmitted(true);
    setCommentText("");
  };

  return (
    <section className="rounded-2xl border border-slate-200 dark:border-industrial-800 bg-white dark:bg-industrial-900 p-5 sm:p-7 shadow-2xs space-y-6">
      
      {/* سربرگ نظرات و میانگین رضایت فنی */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 dark:border-industrial-800 gap-4">
        <div>
          <h3 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white">
            تجربیات نصب و ارزیابی فنی تکنسین‌ها
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            نظرات ثبت‌شده توسط کارشناسان و نصابان پس از بهره‌برداری در پروژه‌ها
          </p>
        </div>

        {/* پلاک شاخص رضایت مهندسی */}
        <div className="flex items-center gap-3 px-3 py-1.5 rounded-xl bg-slate-50 dark:bg-industrial-950 border border-slate-200 dark:border-industrial-800">
          <div className="text-left">
            <span className="text-xs font-bold text-slate-900 dark:text-white block">
              ۴.۹ از ۵
            </span>
            <span className="text-[10px] text-slate-400">بر اساس آزمون‌های میدانی</span>
          </div>
          <span className="text-safety-500 text-lg">★★★★★</span>
        </div>
      </div>

      {/* فهرست نظرات کارشناسان */}
      <div className="space-y-4">
        {reviews.map((rev) => (
          <div
            key={rev.id}
            className="p-4 rounded-xl border border-slate-100 dark:border-industrial-800 bg-slate-50/60 dark:bg-industrial-950/60 space-y-2.5"
          >
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
              <div>
                <span className="font-bold text-slate-900 dark:text-slate-100">{rev.author}</span>
                <span className="text-slate-400 text-[11px] mr-2">• {rev.role}</span>
              </div>
              <span className="text-[11px] text-slate-400">{rev.date}</span>
            </div>

            <div className="text-[11px] text-slate-500 dark:text-slate-400">
              پروژه اجرا شده: <strong className="text-slate-700 dark:text-slate-300">{rev.project}</strong>
            </div>

            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              {rev.comment}
            </p>

            {rev.pros && (
              <div className="flex items-center gap-1.5 text-[11px] text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30 px-2 py-1 rounded w-fit">
                <span className="font-bold">نقطه قوت فنی:</span>
                <span>{rev.pros}</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* فرم ثبت تجربه میدانی تکنسین */}
      <div className="pt-4 border-t border-slate-100 dark:border-industrial-800">
        <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white mb-2">
          شما هم تجربه نصب یا استفاده از این قطعه را دارید؟
        </h4>
        
        {submitted ? (
          <div className="p-3 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 text-xs">
            سپاس از شما؛ دیدگاه فنی شما پس از بررسی همکاران جهت راهنمایی سایر مهندسان منتشر خواهد شد.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            <textarea
              rows={3}
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              placeholder="نکات مربوط به تنظیمات، راندمان، کیفیت کارکرد یا نحوه رگلاژ این قطعه در پروژه را بنویسید..."
              className="w-full p-3 rounded-lg border border-slate-300 dark:border-industrial-700 bg-white dark:bg-industrial-950 text-slate-900 dark:text-white text-xs focus:outline-none focus:ring-2 focus:ring-safety-500 resize-none"
            />
            <button
              type="submit"
              className="px-5 h-9 rounded-lg bg-industrial-900 hover:bg-industrial-800 text-white dark:bg-white dark:text-industrial-950 dark:hover:bg-slate-200 text-xs font-bold transition-colors"
            >
              ثبت ارزیابی فنی
            </button>
          </form>
        )}
      </div>

    </section>
  );
}