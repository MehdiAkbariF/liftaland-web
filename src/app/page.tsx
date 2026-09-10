import { HeroSection } from "@/features/home/components/hero-section";
import { ServicesShowcase } from "@/features/home/components/services-showcase";
import { ServiceProcess } from "@/features/home/components/service-process";
import { ServiceEstimator } from "@/features/home/components/service-estimator";
import { PartsSynergy } from "@/features/home/components/parts-synergy";
import { ArticlesSection } from "@/features/home/components/articles-section";
import { SocialCommunity } from "@/features/home/components/social-community";
import { TrustCompliance } from "@/features/home/components/trust-compliance";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-5 sm:gap-5 pb-16">
      {/* ۱. هیرو سکشن مهندسی */}
      <HeroSection />

      {/* ۲. چهار ستون خدمات تخصصی مهندسی */}
      <ServicesShowcase />

      {/* ۳. فرآیند شفاف ۴ مرحله‌ای انجام کار */}
      <ServiceProcess />

      {/* ۴. محاسبه‌گر و مشاور هوشمند نیاز آسانسور */}
      <ServiceEstimator />

      {/* ۵. پشتوانه قطعات اورجینال در خدمات */}
      <PartsSynergy />

      {/* ۶. دانشنامه و مقالات فنی */}
      <ArticlesSection />

      {/* ۷. اینستاگرام و جامعه فنی */}
      <SocialCommunity />

      {/* ۸. استانداردهای ایمنی و تضامین حقوقی و بیمه */}
      <TrustCompliance />

      {/* ۹. بخش اقدام پایانی (Final CTA با اصلاح فونت و چیدمان موبایل) */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border-2 border-safety-500 bg-industrial-900 text-white dark:bg-industrial-900 p-6 sm:p-10 text-center relative overflow-hidden shadow-lg">
          <div className="max-w-2xl mx-auto relative z-10">
            <span className="text-xs font-bold text-safety-400 tracking-wider block mb-2">
              EMERGENCY & INQUIRY HOTLINE
            </span>
            <h2 className="text-lg sm:text-2xl font-extrabold tracking-tight mb-3 leading-snug">
              نیاز به کارشناسی حضوری آسانسور یا رفع فوری خرابی دارید؟
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
              مهندسان شیفت لیفتالند آماده اعزام کارشناس جهت ممیزی رایگان وضعیت استاندارد و بررسی ارتعاشات کابین ساختمان شما هستند.
            </p>
            
            {/* دکمه‌های اقدام با تفکیک دو سطری در موبایل و فونت استاندارد */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
              <a
                href="tel:02188880000"
                className="flex flex-col sm:flex-row items-center justify-center h-auto sm:h-12 py-2.5 sm:py-0 px-5 rounded-lg bg-safety-500 hover:bg-safety-600 text-industrial-950 font-extrabold text-xs sm:text-sm transition-colors shadow-md gap-1 sm:gap-2 select-none"
              >
                <span>تماس فوری با مهندس کشیک:</span>
                <span className="dir-ltr text-sm sm:text-base font-bold">۰۲۱ - ۸۸۸۸ ۰۰۰۰</span>
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center h-11 sm:h-12 px-5 rounded-lg border border-slate-400 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm transition-colors"
              >
                ثبت آنلاین درخواست اعزام کارشناس
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}