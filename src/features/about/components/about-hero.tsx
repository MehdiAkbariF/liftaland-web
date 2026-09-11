import Link from "next/link";

export function AboutHero() {
  return (
    <div className="w-full pt-0.5 pb-3 sm:pb-4 border-b border-slate-200 dark:border-industrial-800 space-y-2 sm:space-y-2.5">
      
      {/* مسیر ناوبری فشرده */}
      <nav className="flex items-center gap-1.5 text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium overflow-x-auto whitespace-nowrap scrollbar-none">
        <Link href="/" className="hover:text-slate-900 dark:hover:text-white transition-colors">
          صفحه اصلی
        </Link>
        <span className="text-slate-300 dark:text-slate-600">/</span>
        <span className="text-slate-900 dark:text-slate-100 font-bold">
          درباره لیفتالند
        </span>
      </nav>

      {/* تیتر تمام‌عرض و مقتدر با سایز ارگونومیک در موبایل */}
      <div className="w-full space-y-1.5 sm:space-y-2">
        <h1 className="text-base sm:text-2xl lg:text-3xl font-black text-slate-900 dark:text-white tracking-tight leading-snug">
          لیفتالند؛ مهندسی ایمنی، شفافیت در قطعات و استانداردسازی تردد عمودی
        </h1>

        <p className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-300 leading-relaxed text-justify sm:text-right max-w-4xl">
          لیفتالند پاسخی مهندسی به دو چالش تاریخی در صنعت آسانسور ایران است: **ورود قطعات کارگاهی بدون اصالت به بازار** و **خدمات سرویس سنتی فاقد چک‌لیست بازرسی استاندارد**. ما با تلفیق نظارت کارشناسان دارای پروانه و زنجیره مستقیم تامین قطعات اورجینال، بستری ایمن و قابل استناد برای کارفرمایان و تکنسین‌ها ساخته‌ایم.
        </p>
      </div>

    </div>
  );
}