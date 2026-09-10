"use client";

import { useState } from "react";

interface ProjectSidebarProps {
  projectTitle: string;
}

export function ProjectSidebar({ projectTitle }: ProjectSidebarProps) {
  const [submitted, setSubmitted] = useState(false);
  const [phone, setPhone] = useState("");
  const [stops, setStops] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone) return;
    setSubmitted(true);
  };

  return (
    <div className="rounded-2xl border-2 border-slate-200 dark:border-industrial-800 bg-white dark:bg-industrial-900 p-5 sm:p-6 shadow-sm sticky top-20 space-y-5">
      
      <div>
        <span className="text-[10px] font-bold text-safety-600 dark:text-safety-400 tracking-wider block mb-1">
          SIMILAR PROJECT INQUIRY
        </span>
        <h3 className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white">
          ساختمانی با شرایط فنی مشابه دارید؟
        </h3>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
          کارشناسان ارشد لیفتالند آماده بازدید حضوری و عارضه‌یابی رایگان آسانسور ساختمان شما بر اساس متد اجرا شده در این پروژه هستند.
        </p>
      </div>

      {submitted ? (
        <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/40 text-center space-y-2">
          <span className="w-8 h-8 rounded-full bg-emerald-500 text-white inline-flex items-center justify-center font-bold text-sm">
            ✓
          </span>
          <h4 className="text-xs font-bold text-emerald-800 dark:text-emerald-300">
            درخواست کارشناسی شما ثبت شد
          </h4>
          <p className="text-[11px] text-emerald-700 dark:text-emerald-400">
            سرپرست مهندسی نوسازی جهت تعیین زمان بازدید با شماره {phone} تماس خواهد گرفت.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3 text-xs">
          <div>
            <label className="block text-slate-700 dark:text-slate-300 font-semibold mb-1">
              شماره تلفن همراه مدیر / کارفرما: *
            </label>
            <input
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="۰۹۱۲۳۴۵۶۷۸۹"
              className="w-full h-10 px-3 rounded-lg border border-slate-300 dark:border-industrial-700 bg-white dark:bg-industrial-950 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-safety-500 font-sans"
            />
          </div>

          <div>
            <label className="block text-slate-700 dark:text-slate-300 font-semibold mb-1">
              تعداد طبقات یا چالش اصلی:
            </label>
            <input
              type="text"
              value={stops}
              onChange={(e) => setStops(e.target.value)}
              placeholder="مثال: ۱۰ توقف، لرزش شدید کابین..."
              className="w-full h-10 px-3 rounded-lg border border-slate-300 dark:border-industrial-700 bg-white dark:bg-industrial-950 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-safety-500"
            />
          </div>

          <button
            type="submit"
            className="w-full h-11 rounded-lg bg-safety-500 hover:bg-safety-600 text-industrial-950 font-extrabold text-xs transition-colors shadow-xs"
          >
            درخواست اعزام کارشناس حضوری پروژه
          </button>
        </form>
      )}

      {/* ارتباط فوری تلفنی */}
      <div className="pt-3 border-t border-slate-100 dark:border-industrial-800 text-center">
        <span className="text-[11px] text-slate-400 block mb-1">
          مشاوره مستقیم با سرپرست مهندسی پروژه‌ها:
        </span>
        <a
          href="tel:02188880000"
          className="text-xs font-bold text-safety-600 dark:text-safety-400 hover:underline inline-flex items-center gap-1.5"
        >
          <span className="dir-ltr font-bold">۰۲۱ - ۸۸۸۸ ۰۰۰۰</span>
        </a>
      </div>

    </div>
  );
}