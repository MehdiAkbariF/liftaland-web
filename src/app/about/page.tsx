import type { Metadata } from "next";
import Link from "next/link";
import { AboutHero } from "@/features/about/components/about-hero";
import { AboutPrinciples } from "@/features/about/components/about-principles";
import { AboutGovernance } from "@/features/about/components/about-governance";
import { AboutProjectsCTA } from "@/features/about/components/about-projects-cta";

export const metadata: Metadata = {
  title: "درباره لیفتالند | اصالت قطعات، استانداردهای مهندسی و تعهدات ایمنی",
  description:
    "آشنایی با مانیفست مهندسی لیفتالند، مراجع استاندارد ملی ISIRI 6303 و اروپایی EN 81، پروانه‌های اشتغال و زنجیره تامین قطعات آسانسور بدون واسطه.",
};

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 space-y-7 pb-20">
      
      {/* ۱. هیرو و بیانیه ماموریت */}
      <AboutHero />

      {/* ۲. اصول چهارگانه عملیاتی لیفتالند */}
      <AboutPrinciples />

      {/* ۳. ماژول هدایت مستقیم به پروژه‌ها و نمونه‌کارها */}
      <AboutProjectsCTA />

      {/* ۴. مراجع استاندارد و صلاحیت‌های قانونی */}
      <AboutGovernance />

      {/* ۵. بنر دعوت به بازدید حضوری از دفتر و انبار */}
      <section className="rounded-2xl border-2 border-safety-500 bg-industrial-900 text-white dark:bg-industrial-900 p-6 sm:p-8 text-center shadow-md">
        <div className="max-w-2xl mx-auto space-y-4">
          <h3 className="text-base sm:text-xl font-extrabold leading-snug">
            مشتاق میزبانی از مدیران ساختمان‌ها و همکاران آسانسوری هستیم
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            جهت مشاوره مهندسی حضوری در دفتر مرکزی یا رویت قطعات در انبار لجستیک آهن‌مکان، با واحد هماهنگی جلسات در ارتباط باشید.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center h-11 px-6 rounded-lg bg-safety-500 hover:bg-safety-600 text-industrial-950 font-extrabold text-xs sm:text-sm transition-colors shadow-2xs"
            >
              اطلاعات تماس و هماهنگی جلسه حضوری
            </Link>
            <a
              href="tel:02188880000"
              className="w-full sm:w-auto inline-flex items-center justify-center h-11 px-5 rounded-lg border border-slate-400 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm transition-colors gap-2"
            >
              <span>تماس با خط مستقیم:</span>
              <span className="dir-ltr font-sans">۰۲۱ - ۸۸۸۸ ۰۰۰۰</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}