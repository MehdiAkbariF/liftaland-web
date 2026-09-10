import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export function AboutHero() {
  return (
    <div className="w-full pb-6 border-b border-slate-200 dark:border-industrial-800 space-y-4">
      {/* مسیر ناوبری */}
      <nav className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-medium">
        <Link href="/" className="hover:text-slate-900 dark:hover:text-white transition-colors">
          صفحه اصلی
        </Link>
        <span className="text-slate-300 dark:text-slate-600">/</span>
        <span className="text-slate-900 dark:text-slate-100 font-bold">
          درباره لیفتالند
        </span>
      </nav>

      <div className="flex flex-wrap items-center gap-2">
        <Badge variant="tech">ENGINEERING MANIFESTO</Badge>
        <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
          ESTABLISHED TO ELEVATE SAFETY
        </span>
      </div>

      <div className="max-w-4xl space-y-3">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
          لیفتالند؛ مهندسی ایمنی، شفافیت در قطعات و استانداردسازی تردد عمودی
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          لیفتالند پاسخی مهندسی به دو چالش تاریخی در صنعت آسانسور ایران است: **ورود قطعات کارگاهی بدون اصالت به بازار** و **خدمات سرویس سنتی فاقد چک‌لیست بازرسی استاندارد**. ما با تلفیق نظارت کارشناسان دارای پروانه و زنجیره مستقیم تامین قطعات اورجینال، بستری ایمن و قابل استناد برای کارفرمایان و تکنسین‌ها ساخته‌ایم.
        </p>
      </div>
    </div>
  );
}