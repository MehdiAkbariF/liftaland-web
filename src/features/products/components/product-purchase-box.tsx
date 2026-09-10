"use client";

import { useState } from "react";
import { Product } from "../types";
import { formatPrice } from "@/lib/utils";

interface ProductPurchaseBoxProps {
  product: Product;
}

export function ProductPurchaseBox({ product }: ProductPurchaseBoxProps) {
  const [quantity, setQuantity] = useState(1);
  const [inquired, setInquired] = useState(false);

  const handleInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    setInquired(true);
  };

  const trustGuarantees = [
    {
      title: "تحویل فوری",
      desc: "ارسال همان‌روز در تهران",
      icon: (
        <svg className="w-5 h-5 text-safety-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: "ارسال به سراسر ایران",
      desc: "بسته‌بندی صنعتی با باربری معتبر",
      icon: (
        <svg className="w-5 h-5 text-safety-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 17a2 2 0 100 4 2 2 0 000-4zm10 0a2 2 0 100 4 2 2 0 000-4zM3 4h2l2.4 10.8A2 2 0 009.4 16h8.2a2 2 0 002-1.6l1.4-7.4H6" />
        </svg>
      ),
    },
    {
      title: "۷ روز ضمانت بازگشت",
      desc: "امکان عودت در صورت عدم انطباق فنی",
      icon: (
        <svg className="w-5 h-5 text-safety-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
    },
    {
      title: "ضمانت اصل بودن کالا",
      desc: "پارت‌نامبر و پلاک فلزی رسمی کارخانه",
      icon: (
        <svg className="w-5 h-5 text-safety-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="rounded-2xl border-2 border-slate-200 dark:border-industrial-800 bg-white dark:bg-industrial-900 p-5 sm:p-6 shadow-sm space-y-5">
      
      {/* قیمت و استعلام موجودی */}
      <div>
        <span className="text-[11px] text-slate-400 dark:text-slate-500 block mb-1">
          قیمت کارشناسی فروش واحد:
        </span>
        <div className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white font-sans">
          {formatPrice(product.price)}
        </div>
        <p className="text-[10px] text-slate-400 mt-1">
          امکان صدور پیش‌فاکتور رسمی برای شرکت‌های آسانسوری و سازندگان
        </p>
      </div>

      {/* فرم استعلام و انتخاب تعداد */}
      {inquired ? (
        <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/40 text-center space-y-2">
          <span className="w-8 h-8 rounded-full bg-emerald-500 text-white inline-flex items-center justify-center font-bold text-sm">
            ✓
          </span>
          <h4 className="text-xs font-bold text-emerald-800 dark:text-emerald-300">
            درخواست استعلام پارت‌نامبر ثبت شد
          </h4>
          <p className="text-[11px] text-emerald-700 dark:text-emerald-400 leading-relaxed">
            کارشناس مهندسی فروش تا ۱۵ دقیقه آینده جهت تایید نهایی حواله خروج از انبار با شما تماس خواهد گرفت.
          </p>
          <button
            type="button"
            onClick={() => setInquired(false)}
            className="text-[11px] text-emerald-800 dark:text-emerald-300 underline font-semibold mt-1 block mx-auto"
          >
            استعلام مجدد یا تعداد بیشتر
          </button>
        </div>
      ) : (
        <form onSubmit={handleInquiry} className="space-y-3">
          <div className="flex items-center justify-between p-2 rounded-lg border border-slate-200 dark:border-industrial-800 bg-slate-50 dark:bg-industrial-950 text-xs">
            <span className="font-semibold text-slate-700 dark:text-slate-300">
              تعداد مورد نیاز:
            </span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-7 h-7 rounded border border-slate-300 dark:border-industrial-700 flex items-center justify-center text-sm font-bold hover:bg-slate-200 dark:hover:bg-industrial-800"
              >
                -
              </button>
              <span className="font-bold w-6 text-center text-sm">{quantity}</span>
              <button
                type="button"
                onClick={() => setQuantity(quantity + 1)}
                className="w-7 h-7 rounded border border-slate-300 dark:border-industrial-700 flex items-center justify-center text-sm font-bold hover:bg-slate-200 dark:hover:bg-industrial-800"
              >
                +
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full h-11 rounded-lg bg-industrial-900 hover:bg-industrial-800 text-white dark:bg-white dark:text-industrial-950 dark:hover:bg-slate-200 text-xs font-bold transition-colors shadow-xs"
          >
            استعلام فوری موجودی و صدور پیش‌فاکتور
          </button>
        </form>
      )}

      {/* خط تماس مستقیم پشتیبانی فنی */}
      <div className="pt-3 border-t border-slate-100 dark:border-industrial-800 text-center">
        <span className="text-[11px] text-slate-400 block mb-1">
          نیاز به مشاوره تطابق شاسی یا انکودر دارید؟
        </span>
        <a
          href="tel:02188880000"
          className="text-xs font-bold text-safety-600 dark:text-safety-400 hover:underline inline-flex items-center gap-1.5"
        >
          <span>تماس با کارشناس قطعات:</span>
          <span className="dir-ltr font-bold">۰۲۱ - ۸۸۸۸ ۰۰۰۰</span>
        </a>
      </div>

      {/* بخش چهارگانه تضمین‌ها و خدمات تحویل با آیکون‌های اختصاصی */}
      <div className="pt-4 border-t border-slate-100 dark:border-industrial-800 space-y-3">
        {trustGuarantees.map((item, idx) => (
          <div key={idx} className="flex items-start gap-3">
            <div className="p-1.5 rounded-lg bg-slate-100 dark:bg-industrial-800 shrink-0 mt-0.5">
              {item.icon}
            </div>
            <div>
              <span className="text-xs font-bold text-slate-900 dark:text-slate-100 block leading-tight">
                {item.title}
              </span>
              <span className="text-[11px] text-slate-500 dark:text-slate-400 leading-normal">
                {item.desc}
              </span>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}