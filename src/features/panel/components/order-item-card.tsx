import Link from "next/link";
import { PanelOrder } from "../types";
import { formatPrice } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface OrderItemCardProps {
  order: PanelOrder;
}

export function OrderItemCard({ order }: OrderItemCardProps) {
  const statusBadgeVariant = {
    shipped: "warning",
    delivered: "success",
    processing: "tech",
    proforma: "default",
  }[order.status] as "warning" | "success" | "tech" | "default";

  return (
    <div className="rounded-2xl border border-slate-200 dark:border-industrial-800 bg-white dark:bg-industrial-900 p-5 sm:p-6 shadow-xs space-y-4">
      
      {/* سربرگ کارت: شناسه سفارش، تاریخ و وضعیت */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-100 dark:border-industrial-800 text-xs">
        <div className="flex items-center gap-2.5">
          <span className="font-extrabold text-slate-900 dark:text-white text-sm font-mono">
            {order.orderNumber}
          </span>
          <span className="text-slate-300 dark:text-slate-700">|</span>
          <span className="text-slate-500 dark:text-slate-400">تاریخ ثبت: {order.date}</span>
        </div>

        <Badge variant={statusBadgeVariant}>
          {order.statusLabel}
        </Badge>
      </div>

      {/* اقلام قطعات داخل سفارش */}
      <div className="space-y-3">
        {order.items.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col sm:flex-row sm:items-center justify-between p-3.5 rounded-xl border border-slate-100 dark:border-industrial-800/80 bg-slate-50/70 dark:bg-industrial-950 gap-3 text-xs"
          >
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-bold text-slate-900 dark:text-slate-100">
                  {item.name}
                </span>
                <span className="text-[10px] text-slate-400 font-mono">({item.brand})</span>
              </div>
              <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-[11px] font-mono">
                <span>پارت‌نامبر: {item.partNumber}</span>
                <span>•</span>
                <span>تعداد: {item.quantity} عدد</span>
              </div>
            </div>

            <div className="flex items-center justify-between sm:justify-end gap-3 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-200/60 dark:border-industrial-800">
              <span className="font-bold text-slate-900 dark:text-white font-sans text-xs sm:text-sm">
                {formatPrice(item.unitPrice * item.quantity)}
              </span>
              {item.slug && (
                <Link
                  href={`/products/${item.slug}`}
                  className="text-techBlue-600 dark:text-blue-400 hover:underline text-[11px] font-bold"
                >
                  مشاهده برگه مشخصات قطعه ←
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* مشخصات رهگیری باربری و نشانی پروژه */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 p-3.5 rounded-xl border border-slate-200/80 dark:border-industrial-800/80 bg-slate-50/50 dark:bg-industrial-950/60 text-xs">
        <div>
          <span className="text-[10px] text-slate-400 block mb-0.5 font-mono">SHIPPING & LOGISTICS</span>
          {order.trackingCode ? (
            <p className="text-slate-700 dark:text-slate-300">
              ارسال از طریق <strong className="text-slate-900 dark:text-white">{order.shippingCompany}</strong> با کد رهگیری بارنامه:{" "}
              <span className="font-mono font-bold text-safety-600 dark:text-safety-400 dir-ltr inline-block">
                {order.trackingCode}
              </span>
            </p>
          ) : (
            <p className="text-slate-500 dark:text-slate-400">
              وضعیت حمل: در انتظار تکمیل اقلام و تحویل به بارانداز آهن‌مکان
            </p>
          )}
        </div>

        <div>
          <span className="text-[10px] text-slate-400 block mb-0.5 font-mono">DELIVERY ADDRESS</span>
          <p className="text-slate-700 dark:text-slate-300 truncate">
            {order.destinationAddress}
          </p>
        </div>
      </div>

      {/* مبالغ و دکمه‌های اقدام فاکتور */}
      <div className="pt-3 border-t border-slate-100 dark:border-industrial-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2">
          <span className="text-slate-500 dark:text-slate-400">مبلغ کل فاکتور:</span>
          <span className="text-sm sm:text-base font-black text-slate-900 dark:text-white font-sans">
            {formatPrice(order.totalAmount)}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            className="px-3.5 h-9 rounded-lg border border-slate-200 dark:border-industrial-700 bg-white dark:bg-industrial-900 hover:bg-slate-100 dark:hover:bg-industrial-800 text-slate-800 dark:text-slate-200 font-bold transition-colors shadow-2xs"
          >
            دانلود پیش‌فاکتور رسمی (PDF)
          </button>
          <a
            href="tel:02188880000"
            className="px-3.5 h-9 rounded-lg bg-industrial-900 hover:bg-industrial-800 text-white dark:bg-white dark:text-industrial-950 dark:hover:bg-slate-200 font-bold transition-colors inline-flex items-center justify-center"
          >
            پیگیری با کارشناس فروش
          </a>
        </div>
      </div>

    </div>
  );
}