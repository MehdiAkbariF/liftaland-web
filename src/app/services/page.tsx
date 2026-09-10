import type { Metadata } from "next";
import { getAllServices } from "@/features/services/api";
import { ServiceHero } from "@/features/services/components/service-hero";
import { ServiceCategoryCard } from "@/features/services/components/service-category-card";
import { ServicePlansTable } from "@/features/services/components/service-plans-table";
import Link from "next/link";

export const metadata: Metadata = {
  title: "خدمات تخصصی آسانسور | سرویس ماهانه، استاندارد و نوسازی | لیفتالند",
  description:
    "ارائه خدمات مهندسی آسانسور شامل سرویس و نگهداری دوره‌ای با چک‌لیست ۴۲ گانه، اخذ تاییدیه استاندارد ملی، بازسازی و رفع خرابی شبانه‌روزی ۲۴/۷ با بیمه کامل.",
};

export default async function ServicesPage() {
  const services = await getAllServices();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 space-y-5 sm:space-y-6 pb-16">
      
      {/* ۱. هیرو عملیاتی با وضعیت زنده شیفت و دسترسی سریع */}
      <ServiceHero />

      {/* ۲. برگه‌های مشخصات فنی ۴ حوزه خدمات */}
      <section className="space-y-4">
        <div className="border-b border-slate-200 dark:border-industrial-800 pb-3 flex items-center justify-between">
          <div>
            <h2 className="text-base sm:text-xl font-extrabold text-slate-900 dark:text-white">
              برگه‌های مشخصات و پروتکل‌های اجرایی خدمات
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              جهت بررسی اقدامات میدانی، مدارک لازم و فرم استعلام، خدمت مورد نظر را انتخاب نمایید:
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {services.map((service, index) => (
            <ServiceCategoryCard
              key={service.id}
              service={service}
              index={index}
            />
          ))}
        </div>
      </section>

      {/* ۳. ماتریس مقایسه پکیج‌های نگهداری (SLA) بدون هاله در دارک‌مود */}
      <ServicePlansTable />

      {/* ۴. بنر اقدام سریع کارشناسی حضوری */}
      <section className="rounded-2xl border-2 border-safety-500 bg-industrial-900 text-white dark:bg-industrial-900 p-6 sm:p-8 text-center shadow-md">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-base sm:text-xl font-extrabold mb-2">
            هنوز مطمئن نیستید آسانسور ساختمان شما به چه پکیجی نیاز دارد؟
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
            کارشناسان ارشد لیفتالند آماده‌اند با بازدید حضوری اولیه، وضعیت ایمنی، موتورخانه و عدم‌انطباق‌های استاندارد آسانسور شما را به رایگان ممیزی نمایند.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="tel:02188880000"
              className="w-full sm:w-auto inline-flex items-center justify-center h-11 px-6 rounded-lg bg-safety-500 hover:bg-safety-600 text-industrial-950 font-extrabold text-xs sm:text-sm transition-colors shadow-sm gap-2"
            >
              <span>مشاوره تلفنی با مهندس شیفت:</span>
              <span className="dir-ltr font-sans">۰۲۱ - ۸۸۸۸ ۰۰۰۰</span>
            </a>
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center h-11 px-5 rounded-lg border border-slate-400 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm transition-colors"
            >
              درخواست بازدید کارشناسی حضوری
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}