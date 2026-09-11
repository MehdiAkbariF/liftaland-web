"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ThemeToggle } from "@/components/ui/theme-toggle";

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const PRODUCT_CATEGORIES = [
  { label: "موتورهای گیربکس و گیرلس", href: "/products?category=traction" },
  { label: "تابلوهای فرمان و درایو VVVF", href: "/products?category=controller" },
  { label: "سیستم‌های ایمنی، ترمز و پاراشوت", href: "/products?category=safety" },
  { label: "درب‌های اتوماتیک و نیمه‌اتوماتیک", href: "/products?category=doors" },
];

const SERVICE_LINKS = [
  { label: "سرویس و بازرسی دوره‌ای ماهانه", href: "/services/preventive-maintenance" },
  { label: "رفع خرابی اضطراری ۲۴ ساعته", href: "/services/emergency-repair" },
  { label: "اخذ تاییدیه استاندارد ادواری و اولیه", href: "/services/standard-certification" },
  { label: "نوسازی و بازسازی آسانسور (Modernization)", href: "/services/modernization" },
];

export function MobileDrawer({ isOpen, onClose }: MobileDrawerProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Overlay پس‌زمینه */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
      />

      {/* منوی کشویی راست‌چین */}
      <div className="fixed inset-y-0 right-0 w-[85%] max-w-sm bg-white dark:bg-industrial-950 border-l border-slate-200 dark:border-industrial-800 shadow-2xl flex flex-col justify-between overflow-y-auto">
        <div>
          {/* هدر کشو */}
          <div className="p-4 border-b border-slate-200 dark:border-industrial-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded bg-industrial-900 dark:bg-white flex items-center justify-center text-white dark:text-industrial-950 font-black text-xs">
                L
              </div>
              <span className="font-extrabold text-sm text-slate-900 dark:text-white">
                منوی لیفتالند
              </span>
            </div>
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <button
                onClick={onClose}
                aria-label="بستن منو"
                className="w-8 h-8 flex items-center justify-center rounded-md border border-slate-200 dark:border-industrial-800 text-slate-500 hover:text-slate-900 dark:hover:text-white"
              >
                ✕
              </button>
            </div>
          </div>

          {/* بنر اختصاصی ورود به پنل در بالای منوی کشویی */}
          <div className="p-4 pb-0">
            <Link
              href="/login"
              onClick={onClose}
              className="flex items-center justify-between p-3 rounded-xl border border-safety-500/40 bg-safety-50/40 dark:bg-safety-950/20 text-slate-900 dark:text-white"
            >
              <div className="flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-lg bg-safety-500 text-industrial-950 flex items-center justify-center font-bold text-xs">
                  👤
                </span>
                <div>
                  <span className="text-xs font-bold block">ورود به پنل کاربری</span>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400">پیگیری سفارش و سوابق سرویس</span>
                </div>
              </div>
              <span className="text-xs font-bold text-safety-600 dark:text-safety-400">←</span>
            </Link>
          </div>

          {/* محتوای منو */}
          <div className="p-4 space-y-5">
            {/* قطعات */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-slate-900 dark:text-white">
                  معرفی و خرید قطعات
                </span>
                <Link
                  href="/products"
                  onClick={onClose}
                  className="text-[11px] text-techBlue-600 dark:text-blue-400 font-medium"
                >
                  همه قطعات ←
                </Link>
              </div>
              <ul className="space-y-1">
                {PRODUCT_CATEGORIES.map((cat, i) => (
                  <li key={i}>
                    <Link
                      href={cat.href}
                      onClick={onClose}
                      className="block text-xs py-2 px-3 rounded text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-industrial-900 transition-colors"
                    >
                      {cat.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* خدمات */}
            <div className="pt-3 border-t border-slate-100 dark:border-industrial-800">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-slate-900 dark:text-white">
                  خدمات مهندسی و بازرسی
                </span>
                <Link
                  href="/services"
                  onClick={onClose}
                  className="text-[11px] text-safety-600 dark:text-safety-400 font-medium"
                >
                  همه خدمات ←
                </Link>
              </div>
              <ul className="space-y-1">
                {SERVICE_LINKS.map((serv, i) => (
                  <li key={i}>
                    <Link
                      href={serv.href}
                      onClick={onClose}
                      className="block text-xs py-2 px-3 rounded text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-industrial-900 transition-colors"
                    >
                      {serv.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* لینک‌های راهنما */}
            <div className="pt-3 border-t border-slate-100 dark:border-industrial-800 space-y-1 text-xs font-medium">
              <Link
                href="/projects"
                onClick={onClose}
                className="block py-2 px-3 rounded text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-industrial-900"
              >
                پرونده پروژه‌ها و نمونه‌کارها
              </Link>
              <Link
                href="/articles"
                onClick={onClose}
                className="block py-2 px-3 rounded text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-industrial-900"
              >
                دانشنامه و مقالات مهندسی
              </Link>
              <Link
                href="/about"
                onClick={onClose}
                className="block py-2 px-3 rounded text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-industrial-900"
              >
                درباره لیفتالند
              </Link>
              <Link
                href="/contact"
                onClick={onClose}
                className="block py-2 px-3 rounded text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-industrial-900"
              >
                تماس و فوریت‌ها
              </Link>
            </div>
          </div>
        </div>

        {/* پایین منو: تماس اضطراری */}
        <div className="p-4 border-t border-slate-200 dark:border-industrial-800 bg-slate-50 dark:bg-industrial-900/60">
          <div className="text-[11px] text-slate-500 dark:text-slate-400 space-y-1 mb-2">
            <p className="flex items-center justify-between">
              <span>اورژانس توقف آسانسور:</span>
              <span className="font-bold text-safety-600 dark:text-safety-400">۰۲۱-۸۸۸۸۰۰۰۱</span>
            </p>
          </div>
          <Link
            href="/contact"
            onClick={onClose}
            className="w-full h-9 flex items-center justify-center rounded-lg bg-industrial-900 hover:bg-industrial-800 text-white dark:bg-white dark:text-industrial-950 text-xs font-bold transition-colors"
          >
            تماس با کشیک فنی
          </Link>
        </div>
      </div>
    </div>
  );
}