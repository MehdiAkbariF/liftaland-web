import type { Metadata } from "next";
import Link from "next/link";
import { ContactCards } from "@/features/contact/components/contact-cards";
import { ContactForm } from "@/features/contact/components/contact-form";
import { LocationsInfo } from "@/features/contact/components/locations-info";

export const metadata: Metadata = {
  title: "تماس با لیفتالند | مرکز فوریت‌های آسانسور، اعزام کارشناس و استعلام قطعات",
  description:
    "خطوط مستقیم کشیک ۲۴ ساعته آسانسور، اعزام اضطراری کمتر از ۴۰ دقیقه، استعلام قیمت قطعات یدکی با پارت‌نامبر و آدرس دفتر مرکزی و انبار لجستیک لیفتالند.",
};

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-5 space-y-4 sm:space-y-6 pb-20">
      
      {/* سربرگ فشرده و بهینه‌شده تماس */}
      <div className="w-full pb-3 sm:pb-4 border-b border-slate-200 dark:border-industrial-800 space-y-2">
        <nav className="flex items-center gap-1.5 text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium overflow-x-auto whitespace-nowrap scrollbar-none">
          <Link href="/" className="hover:text-slate-900 dark:hover:text-white transition-colors">
            صفحه اصلی
          </Link>
          <span className="text-slate-300 dark:text-slate-600">/</span>
          <span className="text-slate-900 dark:text-slate-100 font-bold">
            تماس و ارتباط با دپارتمان‌های فنی
          </span>
        </nav>

        <h1 className="text-base sm:text-2xl lg:text-3xl font-black text-slate-900 dark:text-white tracking-tight leading-snug">
          مرکز ارتباطات، فوریت‌های فنی و مهندسی فروش لیفتالند
        </h1>
        <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 leading-relaxed max-w-2xl hidden sm:block">
          جهت رفع خرابی بحرانی، هماهنگی کارشناسی حضوری استاندارد یا استعلام پارت‌نامبر قطعات، از کانال‌های مستقیم زیر با مهندسان ما در ارتباط باشید.
        </p>
      </div>

      {/* ۱. کارت‌های ارتباطی سه‌گانه تفکیک‌شده */}
      <ContactCards />

      {/* ۲. بنر هدایت مهندسی به پرونده نمونه‌کارها و پروژه‌ها */}
      <div className="rounded-2xl border-2 border-slate-200 dark:border-industrial-800 bg-slate-50/80 dark:bg-industrial-900 p-4 sm:p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 sm:gap-4 shadow-xs">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-techBlue-500" />
            <span className="text-[10px] sm:text-[11px] font-bold text-techBlue-600 dark:text-blue-400 tracking-wider font-mono">
              ENGINEERING CASE STUDIES
            </span>
          </div>
          <h2 className="text-xs sm:text-base font-extrabold text-slate-900 dark:text-white">
            پیش از تماس، مستندات پروژه‌های اجرایی لیفتالند را بررسی کنید
          </h2>
          <p className="text-[11px] text-slate-500 dark:text-slate-400 max-w-2xl leading-relaxed">
            گزارش‌های قبل و بعد نوسازی موتورخانه، رفع عدم‌انطباق‌های بازرسی استاندارد و قراردادهای نگهداری برج‌ها در بخش نمونه‌کارها.
          </p>
        </div>

        <Link
          href="/projects"
          className="inline-flex items-center justify-center h-9 sm:h-10 px-4 sm:px-5 rounded-lg bg-industrial-900 hover:bg-industrial-800 text-white dark:bg-white dark:text-industrial-950 dark:hover:bg-slate-200 text-xs font-bold transition-colors whitespace-nowrap shrink-0 shadow-2xs gap-1.5 self-stretch sm:self-auto"
        >
          <span>مشاهده پروژه‌ها</span>
          <span>←</span>
        </Link>
      </div>

      {/* ۳. چیدمان فرم استعلام مهندسی + نشانی مراکز فیزیکی */}
      <div className="space-y-5 sm:space-y-6">
        <ContactForm />
        <LocationsInfo />
      </div>

    </div>
  );
}