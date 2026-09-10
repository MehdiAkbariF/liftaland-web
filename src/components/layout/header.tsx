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
                  معرفی خدمات و قطعات آسانسور
                </span>
              </div>
            </Link>

            {/* ناوبری دسکتاپ */}
            <nav className="hidden lg:flex items-center gap-6 text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-300 pr-4">
              <Link
                href="/products"
                className="hover:text-slate-950 dark:hover:text-white transition-colors"
              >
                کاتالوگ و معرفی قطعات
              </Link>
              <Link
                href="/services"
                className="hover:text-slate-950 dark:hover:text-white transition-colors"
              >
                معرفی خدمات مهندسی
              </Link>
              <Link
                href="/about"
                className="hover:text-slate-950 dark:hover:text-white transition-colors"
              >
                درباره لیفتالند
              </Link>
              <Link
                href="/contact"
                className="hover:text-slate-950 dark:hover:text-white transition-colors"
              >
                تماس و استعلام
              </Link>
            </nav>
          </div>

          {/* سمت چپ: تغییر تم، تماس اضطراری و دکمه مشاوره */}
          <div className="flex items-center gap-2.5">
            <div className="hidden sm:flex flex-col text-left pl-3 border-l border-slate-200 dark:border-industrial-800 text-[11px]">
              <span className="text-slate-400">مرکز مشاوره فنی:</span>
              <span className="font-bold text-slate-800 dark:text-slate-200 dir-ltr">
                ۰۲۱ - ۸۸۸۸۰۰۰۰
              </span>
            </div>

            <ThemeToggle />

            <Link
              href="/services/preventive-maintenance"
              className="hidden md:inline-flex items-center justify-center text-xs font-bold px-4 h-9 rounded-md bg-safety-500 hover:bg-safety-600 text-industrial-950 transition-colors shadow-sm"
            >
              درخواست کارشناسی
            </Link>
          </div>

        </div>
      </header>

      {/* کامپوننت Drawer موبایل */}
      <MobileDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
}