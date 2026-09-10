import Link from "next/link";
import { formatNumber } from "@/lib/utils";

interface PanelMetricsProps {
  activeOrders: number;
  openTickets: number;
  daysToNextService: number;
}

export function PanelMetrics({
  activeOrders,
  openTickets,
  daysToNextService,
}: PanelMetricsProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {/* کارت نوبت سرویس */}
      <div className="p-5 rounded-2xl border border-slate-200 dark:border-industrial-800 bg-white dark:bg-industrial-900 shadow-2xs space-y-1">
        <div className="flex items-center justify-between">
          <span className="text-xs text-slate-500 dark:text-slate-400">نوبت سرویس دوره‌ای:</span>
          <span className="text-lg">🛠️</span>
        </div>
        <div className="text-xl sm:text-2xl font-black text-safety-600 dark:text-safety-400 font-sans">
          {formatNumber(daysToNextService)} روز مانده
        </div>
        <span className="text-[11px] text-slate-400 block pt-1">
          تکنسین منطقه: مهندس حسینی
        </span>
      </div>

      {/* کارت سفارش‌های فعال */}
      <div className="p-5 rounded-2xl border border-slate-200 dark:border-industrial-800 bg-white dark:bg-industrial-900 shadow-2xs space-y-1">
        <div className="flex items-center justify-between">
          <span className="text-xs text-slate-500 dark:text-slate-400">سفارش‌های در حال ارسال:</span>
          <span className="text-lg">📦</span>
        </div>
        <div className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white font-sans">
          {formatNumber(activeOrders)} سفارش جاری
        </div>
        <Link
          href="/panel/orders"
          className="text-[11px] text-techBlue-600 dark:text-blue-400 hover:underline block pt-1 font-bold"
        >
          مشاهده کد رهگیری باربری ←
        </Link>
      </div>

      {/* کارت تیکت‌های پشتیبانی */}
      <div className="p-5 rounded-2xl border border-slate-200 dark:border-industrial-800 bg-white dark:bg-industrial-900 shadow-2xs space-y-1">
        <div className="flex items-center justify-between">
          <span className="text-xs text-slate-500 dark:text-slate-400">پیام‌های فنی و تیکت‌ها:</span>
          <span className="text-lg">💬</span>
        </div>
        <div className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white font-sans">
          {formatNumber(openTickets)} تیکت پاسخ‌داده‌شده
        </div>
        <Link
          href="/panel/tickets"
          className="text-[11px] text-techBlue-600 dark:text-blue-400 hover:underline block pt-1 font-bold"
        >
          مشاهده پاسخ سرپرست فنی ←
        </Link>
      </div>
    </div>
  );
}