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
  { label: "سیم‌بکسل، تراول‌کابل و قطعات معلق", href: "/products?category=suspension" },
];

const SERVICE_LINKS = [
  { label: "سرویس و بازرسی دوره‌ای ماهانه", href: "/services/preventive-maintenance" },
  { label: "نوسازی و بازسازی آسانسور (Modernization)", href: "/services/modernization" },
  { label: "اخذ تاییدیه استاندارد ادواری و اولیه", href: "/services/standard-certification" },
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
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
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
                منوی ناوبری لیفتالند
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

          {/* محتوای منو */}
          <div className="p-4 space-y-6">
            {/* معرفی و کاتالوگ قطعات */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-slate-900 dark:text-white">
                  معرفی و فروش قطعات
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

            {/* معرفی خدمات تخصصی */}
            <div className="pt-4 border-t border-slate-100 dark:border-industrial-800">
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
          </div>
        </div>

        {/* پایین منو: اطلاعات تماس و پشتیبانی */}
        <div className="p-4 border-t border-slate-200 dark:border-industrial-800 bg-slate-50 dark:bg-industrial-900/60">
          <div className="text-[11px] text-slate-500 dark:text-slate-400 space-y-1.5 mb-3">
            <p className="flex items-center justify-between">
              <span>پشتیبانی مهندسی:</span>
              <span className="font-bold text-slate-800 dark:text-slate-200">۰۲۱-۸۸۸۸۰۰۰۰</span>
            </p>
            <p className="flex items-center justify-between">
              <span>اورژانس خرابی:</span>
              <span className="font-bold text-safety-600 dark:text-safety-400">۰۲۱-۸۸۸۸۰۰۰۱</span>
            </p>
          </div>
          <Link
            href="/contact"
            onClick={onClose}
            className="w-full h-10 flex items-center justify-center rounded-lg bg-industrial-900 hover:bg-industrial-800 text-white dark:bg-white dark:text-industrial-950 text-xs font-bold transition-colors"
          >
            ثبت درخواست مشاوره فنی
          </Link>
        </div>
      </div>
    </div>
  );
}