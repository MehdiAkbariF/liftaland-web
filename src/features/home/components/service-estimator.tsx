"use client";

import { useState } from "react";
import Link from "next/link";

export function ServiceEstimator() {
  const [buildingType, setBuildingType] = useState<"residential" | "commercial" | "industrial">("residential");
  const [stops, setStops] = useState<string>("5-8");
  const [problemType, setProblemType] = useState<"maintenance" | "standard" | "modernization" | "emergency">("maintenance");

  const recommendations = {
    maintenance: {
      title: "قرارداد سرویس و نگهداری دوره‌ای ماهانه",
      desc: "برای جلوگیری از خرابی مکرر و حفظ ایمنی، آسانسور شما نیازمند چک‌لیست ماهانه ۴۲ گانه به همراه پوشش بیمه رسمی است.",
      actionLabel: "ثبت مشخصات برای پیش‌نویس قرارداد سرویس",
      link: "/services/preventive-maintenance",
    },
    standard: {
      title: "پکیج آماده‌سازی و اخذ استاندارد ادواری/اولیه",
      desc: "بررسی الزامات EN 81 شامل میکروسوییچ‌ها، بافرها و فلکه هرزگرد جهت قبولی در بازرسی رسمی استاندارد.",
      actionLabel: "درخواست ممیزی پیش از بازرسی استاندارد",
      link: "/services/standard-certification",
    },
    modernization: {
      title: "طرح بازسازی تابلو فرمان و تزئینات کابین",
      desc: "تبدیل سیستم به درایو کنترل هوشمند VVVF جهت حذف تکان‌های توقف و کاهش ۵۰ درصدی مصرف برق.",
      actionLabel: "درخواست کارشناسی نوسازی موتورخانه",
      link: "/services/modernization",
    },
    emergency: {
      title: "اعزام فوری کارشناس عیب‌یابی اضطراری",
      desc: "رفع خطای تابلو فرمان و عیوب سری استپ با پشتیبانی شیفت کشیک ۲۴ ساعته در سریع‌ترین زمان ممکن.",
      actionLabel: "تماس تلفنی با کارشناس کشیک (۲۴/۷)",
      link: "/contact",
    },
  };

  const currentRec = recommendations[problemType];

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="rounded-2xl border border-slate-200 dark:border-industrial-800 bg-white dark:bg-industrial-900 p-5 sm:p-8 shadow-sm">
        <div className="max-w-3xl mb-6">
          <span className="text-[11px] font-bold text-safety-600 dark:text-safety-400 tracking-wider">
            SMART SERVICE ADVISOR
          </span>
          <h2 className="text-lg sm:text-2xl font-extrabold text-slate-900 dark:text-white mt-1 mb-1.5">
            راهنمای انتخاب خدمت مناسب ساختمان شما
          </h2>
          <p className="text-xs text-slate-600 dark:text-slate-400">
            با انتخاب وضعیت فعلی ساختمان، مسیر فنی و اقدام پیشنهادی مناسب را به صورت شفاف مشاهده کنید:
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          <div className="lg:col-span-2 space-y-5">
            {/* ۱. نوع کاربری */}
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                ۱. نوع کاربری ملک:
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: "residential", label: "مسکونی" },
                  { id: "commercial", label: "اداری / تجاری" },
                  { id: "industrial", label: "پزشکی / هتل" },
                ].map((type) => (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => setBuildingType(type.id as any)}
                    className={`h-10 text-xs font-semibold rounded-lg border transition-all ${
                      buildingType === type.id
                        ? "border-industrial-900 bg-industrial-900 text-white dark:border-industrial-700 dark:bg-industrial-800 dark:text-safety-400 shadow-xs"
                        : "border-slate-200 dark:border-industrial-800 bg-slate-50 dark:bg-industrial-950/60 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-industrial-700"
                    }`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>

            {/* ۲. تعداد توقف */}
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                ۲. تعداد توقف (طبقات):
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: "1-4", label: "تا ۴ توقف" },
                  { id: "5-8", label: "۵ الی ۸ توقف" },
                  { id: "9+", label: "۹ توقف به بالا" },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setStops(item.id)}
                    className={`h-10 text-xs font-semibold rounded-lg border transition-all ${
                      stops === item.id
                        ? "border-industrial-900 bg-industrial-900 text-white dark:border-industrial-700 dark:bg-industrial-800 dark:text-safety-400 shadow-xs"
                        : "border-slate-200 dark:border-industrial-800 bg-slate-50 dark:bg-industrial-950/60 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-industrial-700"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* ۳. نوع نیاز */}
            <div>
              <label className="block text-xs font-bold text-slate-700
               dark:text-slate-300 mb-2">
                ۳. نیاز و اولویت اصلی شما در حال حاضر:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  { id: "maintenance", label: "سرویس ماهیانه منظم + بیمه" },
                  { id: "standard", label: "اخذ تاییدیه استاندارد ادواری" },
                  { id: "modernization", label: "نوسازی، لرزش و سر و صدای آسانسور" },
                  { id: "emergency", label: "خرابی ناگهانی و توقف اضطراری" },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setProblemType(item.id as any)}
                    className={`p-3 text-right text-xs font-semibold rounded-lg 
                        border transition-all leading-normal ${
                      problemType === item.id
                        ? "border-safety-500  dark:bg-safety-950/40 text-slate-900 dark:text-white shadow-xs"
                        : "border-slate-200 dark:border-industrial-800 bg-slate-50 dark:bg-industrial-950/60 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-industrial-700"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* کارت خروجی پیشنهاد مهندسی */}
          <div className="rounded-xl border border-slate-200 dark:border-industrial-800 bg-slate-50/80 dark:bg-industrial-950 p-5 flex flex-col justify-between h-full">
            <div>
              <span className="text-[11px] font-bold text-safety-600 dark:text-safety-400 block mb-1.5">
                اقدام پیشنهادی واحد مهندسی:
              </span>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mb-2">
                {currentRec.title}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
                {currentRec.desc}
              </p>
            </div>

            <Link
              href={currentRec.link}
              className="w-full inline-flex items-center justify-center h-10 px-4 rounded-lg bg-safety-500 hover:bg-safety-600 text-industrial-950 text-xs font-bold transition-colors shadow-sm text-center"
            >
              {currentRec.actionLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}