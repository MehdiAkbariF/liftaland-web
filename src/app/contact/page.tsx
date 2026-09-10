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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 space-y-6 pb-20">
      
      {/* سربرگ صفحه تماس */}
      <div className="w-full pb-4 border-b border-slate-200 dark:border-industrial-800 space-y-3">
        <nav className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-medium">
          <Link href="/" className="hover:text-slate-900 dark:hover:text-white transition-colors">
            صفحه اصلی
          </Link>
          <span className="text-slate-300 dark:text-slate-600">/</span>
          <span className="text-slate-900 dark:text-slate-100 font-bold">
            تماس و ارتباط با دپارتمان‌های فنی
          </span>
        </nav>

        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
          مرکز ارتباطات، فوریت‌های فنی و مهندسی فروش لیفتالند
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
          جهت رفع خرابی بحرانی، هماهنگی کارشناسی حضوری استاندارد یا استعلام پارت‌نامبر قطعات، از کانال‌های مستقیم زیر با مهندسان ما در ارتباط باشید.
        </p>
      </div>

      {/* ۱. کارت‌های ارتباطی سه‌گانه تفکیک‌شده */}
      <ContactCards />

      {/* ۲. بنر هدایت مهندسی به پرونده نمونه‌کارها و پروژه‌ها */}
      <div className="rounded-2xl border-2 border-slate-200 dark:border-industrial-800 bg-slate-50/80 dark:bg-industrial-900 p-6 sm:p-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-xs">
        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-techBlue-500" />
            <span className="text-[11px] font-bold text-techBlue-600 dark:text-blue-400 tracking-wider font-mono">
              ENGINEERING CASE STUDIES
            </span>
          </div>
          <h3 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white">
            پیش از تماس، مستندات پروژه‌های اجرایی لیفتالند را بررسی کنید
          </h3>
          <p className="text-xs text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
            گزارش‌های قبل و بعد نوسازی موتورخانه، رفع عدم‌انطباق‌های بازرسی استاندارد ادواری و قراردادهای نگهداری برج‌های مسکونی و تجاری را در بخش نمونه‌کارها مشاهده فرمایید.
          </p>
        </div>

        <Link
          href="/projects"
          className="inline-flex items-center justify-center h-10 px-5 rounded-lg bg-industrial-900 hover:bg-industrial-800 text-white dark:bg-white dark:text-industrial-950 dark:hover:bg-slate-200 text-xs font-bold transition-colors whitespace-nowrap shrink-0 shadow-2xs gap-2"
        >
          <span>مشاهده پروژه‌ها و نمونه‌کارها</span>
          <span>←</span>
        </Link>
      </div>

      {/* ۳. چیدمان فرم استعلام مهندسی + نشانی مراکز فیزیکی */}
      <div className="space-y-6">
        <ContactForm />
        <LocationsInfo />
      </div>

    </div>
  );
}