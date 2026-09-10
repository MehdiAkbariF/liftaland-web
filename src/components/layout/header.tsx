import Link from "next/link";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 dark:border-industrial-800 bg-white/90 dark:bg-industrial-950/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* لوگو و تعریف هویت */}
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-industrial-900 dark:bg-white flex items-center justify-center text-white dark:text-industrial-950 font-black text-sm tracking-tighter">
              L
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base tracking-tight text-slate-900 dark:text-white leading-none">
                LIFTALAND
              </span>
              <span className="text-[10px] text-safety-600 dark:text-safety-400 font-medium tracking-wide">
                سامانه تخصصی تجهیزات و خدمات آسانسور
              </span>
            </div>
          </Link>

          {/* منوی اصلی Desktop */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300">
            <Link
              href="/products"
              className="hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              کاتالوگ قطعات
            </Link>
            <Link
              href="/services"
              className="hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              خدمات مهندسی و نگهداری
            </Link>
            <Link
              href="/standards"
              className="hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              استانداردها و چک‌لیست‌ها
            </Link>
          </nav>
        </div>

        {/* بخش ابزارها: سرچ، تم و تماس */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center justify-center text-xs font-semibold px-4 h-9 rounded bg-industrial-900 hover:bg-industrial-800 text-white dark:bg-white dark:text-industrial-950 dark:hover:bg-slate-200 transition-colors"
          >
            مشاوره و پشتیبانی فنی
          </Link>
        </div>
      </div>
    </header>
  );
}