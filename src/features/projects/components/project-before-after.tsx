"use client";

import { useState } from "react";
import Image from "next/image";

interface ProjectBeforeAfterProps {
  beforeImage: string;
  afterImage: string;
  title: string;
}

export function ProjectBeforeAfter({
  beforeImage,
  afterImage,
  title,
}: ProjectBeforeAfterProps) {
  const [sliderPos, setSliderPos] = useState(50);

  return (
    <div className="rounded-2xl border border-slate-200 dark:border-industrial-800 bg-white dark:bg-industrial-900 p-5 sm:p-7 shadow-xs space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-100 dark:border-industrial-800 gap-2">
        <div>
          <h3 className="text-xs sm:text-sm font-black text-slate-900 dark:text-white">
            مقایسه بصری و تعاملی: قبل و بعد از اجرای عملیات مهندسی
          </h3>
          <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
            دستگیره وسط را به چپ یا راست بکشید تا تغییرات ساختار موتورخانه را مشاهده فرمایید:
          </p>
        </div>
        <span className="text-[10px] font-mono text-slate-400 bg-slate-100 dark:bg-industrial-800 px-2.5 py-1 rounded-md self-start sm:self-auto">
          SLIDE TO REVEAL
        </span>
      </div>

      {/* بستر اسلایدر با نسبت ابعاد عریض */}
      <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden border border-slate-200 dark:border-industrial-800 select-none bg-slate-950">
        
        {/* تصویر بعد از اجرا (لایه زیرین) */}
        <Image
          src={afterImage}
          alt={`وضعیت بعد از نوسازی ${title}`}
          fill
          sizes="(max-width: 1024px) 100vw, 800px"
          className="object-cover"
        />
        <span className="absolute bottom-3 left-3 z-10 px-2.5 py-1 rounded bg-emerald-600/90 text-white text-[10px] font-bold backdrop-blur-xs">
          ✓ پس از تحویل مهندسی (سیستم گیرلس مدرن)
        </span>

        {/* تصویر قبل از اجرا (لایه روکش برش‌خورده) */}
        <div
          className="absolute inset-y-0 right-0 overflow-hidden"
          style={{ width: `${100 - sliderPos}%` }}
        >
          <div className="relative w-full h-full" style={{ width: "100%", minWidth: "100%" }}>
            <Image
              src={beforeImage}
              alt={`وضعیت قبل از نوسازی ${title}`}
              fill
              sizes="(max-width: 1024px) 100vw, 800px"
              className="object-cover object-right"
            />
            <span className="absolute bottom-3 right-3 z-10 px-2.5 py-1 rounded bg-rose-600/90 text-white text-[10px] font-bold backdrop-blur-xs">
              ✕ وضعیت اولیه (فرسوده و پرسرصدا)
            </span>
          </div>
        </div>

        {/* خط جداکننده و دستگیره درگ */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white shadow-2xl z-20"
          style={{ right: `${100 - sliderPos}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white text-industrial-950 flex items-center justify-center font-bold text-xs shadow-xl border-2 border-industrial-900 cursor-ew-resize">
            ↔
          </div>
        </div>

        {/* اینپوت رنج مخفی برای پشتیبانی از لمس و ماوس */}
        <input
          type="range"
          min="0"
          max="100"
          value={sliderPos}
          onChange={(e) => setSliderPos(Number(e.target.value))}
          className="absolute inset-0 opacity-0 cursor-ew-resize z-30 w-full h-full"
          aria-label="اسلایدر مقایسه قبل و بعد"
        />
      </div>
    </div>
  );
}