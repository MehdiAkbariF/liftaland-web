import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16">
      <div className="max-w-md w-full text-center space-y-6 rounded-2xl border border-slate-200 dark:border-industrial-800 bg-white dark:bg-industrial-900 p-8 shadow-sm">
        
        {/* نشانگر طبقه ۴۰۴ آسانسور */}
        <div className="inline-flex flex-col items-center justify-center w-24 h-24 rounded-2xl bg-industrial-900 dark:bg-white text-white dark:text-industrial-950 font-black font-mono shadow-md">
          <span className="text-3xl leading-none">404</span>
          <span className="text-[10px] tracking-widest text-safety-500 dark:text-safety-600 mt-1">
            OUT OF RANGE
          </span>
        </div>

        <div className="space-y-2">
          <h1 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
            طبقه یا بخش مورد نظر یافت نشد
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            مسیر وارد شده در شفت آسانسور لیفتالند تعریف نشده است؛ ممکن است آدرس تغییر کرده یا صفحه به بخش دیگری منتقل شده باشد.
          </p>
        </div>

        {/* دکمه‌های اقدام سریع */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center h-10 px-5 rounded-xl bg-industrial-900 hover:bg-industrial-800 text-white dark:bg-white dark:text-industrial-950 dark:hover:bg-slate-200 text-xs font-bold transition-colors shadow-2xs"
          >
            بازشگت
          </Link>
          <Link
            href="/products"
            className="w-full sm:w-auto inline-flex items-center justify-center h-10 px-5 rounded-xl border border-slate-300 dark:border-industrial-700 hover:bg-slate-100 dark:hover:bg-industrial-800 text-slate-800 dark:text-slate-200 text-xs font-bold transition-colors"
          >
            کاتالوگ قطعات
          </Link>
        </div>

        <div className="pt-4 border-t border-slate-100 dark:border-industrial-800 text-[11px] text-slate-400">
          نیاز به راهنمایی فوری دارید؟ تماس با پشتیبانی:{" "}
          <a href="tel:02188880000" className="font-bold text-safety-600 dark:text-safety-400 dir-ltr inline-block">
            ۰۲۱ - ۸۸۸۸ ۰۰۰۰
          </a>
        </div>

      </div>
    </div>
  );
}