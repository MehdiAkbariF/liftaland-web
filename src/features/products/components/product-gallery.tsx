import Image from "next/image";
import { Product } from "../types";

interface ProductGalleryProps {
  product: Product;
}

export function ProductGallery({ product }: ProductGalleryProps) {
  return (
    <div className="space-y-4">
      {/* قاب عکس اصلی قطعه با نسبت 4:3 و زاویه دید صنعتی */}
      <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-slate-200 dark:border-industrial-800 bg-white dark:bg-industrial-900 shadow-xs">
        <Image
          src={product.image}
          alt={product.name}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
        />

        {/* بج شناور موجودی و اصالت */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 pointer-events-none">
          {product.isAvailable && (
            <span className="text-xs font-bold px-3 py-1 rounded-md bg-emerald-500/95 text-white backdrop-blur-xs shadow-xs flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              موجود در انبار مرکزی تهران
            </span>
          )}
          {product.origin && (
            <span className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-industrial-900/90 dark:bg-white/90 text-white dark:text-industrial-950 backdrop-blur-xs shadow-xs">
              ساخت: {product.origin}
            </span>
          )}
        </div>
      </div>

      {/* نوار سه شاخص اصالت و تاییدیه زیر عکس */}
      <div className="grid grid-cols-3 gap-2 p-3 rounded-xl border border-slate-200 dark:border-industrial-800 bg-slate-50/70 dark:bg-industrial-950/60 text-center text-xs">
        <div>
          <span className="text-[10px] text-slate-400 block mb-0.5">اصالت کالا:</span>
          <span className="font-bold text-slate-800 dark:text-slate-200">پارت‌نامبر اصلی</span>
        </div>
        <div className="border-r border-slate-200 dark:border-industrial-800 pr-2">
          <span className="text-[10px] text-slate-400 block mb-0.5">گارانتی:</span>
          <span className="font-bold text-slate-800 dark:text-slate-200">{product.warranty || "تضمین سلامت"}</span>
        </div>
        <div className="border-r border-slate-200 dark:border-industrial-800 pr-2">
          <span className="text-[10px] text-slate-400 block mb-0.5">تحویل:</span>
          <span className="font-bold text-slate-800 dark:text-slate-200">ارسال همان‌روز</span>
        </div>
      </div>
    </div>
  );
}