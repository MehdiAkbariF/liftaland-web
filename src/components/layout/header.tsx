"use client";

import { useState } from "react";
import Link from "next/link";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { MobileDrawer } from "./mobile-drawer";

export function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-slate-200 dark:border-industrial-800 bg-white/90 dark:bg-industrial-950/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          
          {/* سمت راست: دکمه همبرگری موبایل + لوگو */}
          <div className="flex items-center gap-3 sm:gap-6">
            <button
              type="button"
              onClick={() => setDrawerOpen(true)}
              className="lg:hidden w-9 h-9 flex items-center justify-center rounded-md border border-slate-200 dark:border-industrial-800 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-industrial-900"
              aria-label="باز کردن منوی موبایل"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded bg-industrial-900 dark:bg-white flex items-center justify-center text-white dark:text-industrial-950 font-black text-sm">
                L
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-base tracking-tight text-slate-900 dark:text-white leading-none">
                  LIFTALAND
                </span>
                <span className="text-[10px] text-safety-600 dark:text-safety-400 font-semibold tracking-wide">
                  سامانه خدمات و قطعات آسانسور
                </span>
              </div>
            </Link>

            {/* ناوبری دسکتاپ */}
            <nav className="hidden lg:flex items-center gap-6 text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-300 pr-4">
              <Link href="/products" className="hover:text-slate-950 dark:hover:text-white transition-colors">
                کاتالوگ قطعات
              </Link>
              <Link href="/services" className="hover:text-slate-950 dark:hover:text-white transition-colors">
                خدمات مهندسی
              </Link>
              <Link href="/projects" className="hover:text-slate-950 dark:hover:text-white transition-colors">
                نمونه‌کارها
              </Link>
              <Link href="/articles" className="hover:text-slate-950 dark:hover:text-white transition-colors">
                دانشنامه
              </Link>
              <Link href="/about" className="hover:text-slate-950 dark:hover:text-white transition-colors">
                درباره ما
              </Link>
              <Link href="/contact" className="hover:text-slate-950 dark:hover:text-white transition-colors">
                تماس با ما
              </Link>
            </nav>
          </div>

          {/* سمت چپ: تغییر تم، دکمه ورود/پنل و تماس */}
          <div className="flex items-center gap-2.5">
            <ThemeToggle />

            {/* دکمه ورود / پنل کاربری */}
            <Link
              href="/login"
              className="inline-flex items-center gap-1.5 h-9 px-3.5 rounded-lg border border-slate-200 dark:border-industrial-800 bg-white dark:bg-industrial-900 hover:bg-slate-100 dark:hover:bg-industrial-800 text-slate-800 dark:text-slate-200 text-xs font-bold transition-colors shadow-2xs"
            >
              <svg className="w-4 h-4 text-safety-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span className="hidden sm:inline">ورود / پنل</span>
            </Link>

            <Link
              href="/services/preventive-maintenance"
              className="hidden md:inline-flex items-center justify-center text-xs font-bold px-4 h-9 rounded-lg bg-safety-500 hover:bg-safety-600 text-industrial-950 transition-colors shadow-2xs"
            >
              درخواست کارشناسی
            </Link>
          </div>

        </div>
      </header>

      {/* کامپوننت کشویی موبایل */}
      <MobileDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
}