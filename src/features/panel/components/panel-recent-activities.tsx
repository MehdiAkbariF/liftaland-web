import { PanelOrder, PanelServiceLog } from "../types";
import { formatPrice } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface PanelRecentActivitiesProps {
  recentOrders: PanelOrder[];
  recentServices: PanelServiceLog[];
}

export function PanelRecentActivities({
  recentOrders,
  recentServices,
}: PanelRecentActivitiesProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 text-xs">
      
      {/* آخرین سفارش قطعه */}
      <div className="rounded-2xl border border-slate-200 dark:border-industrial-800 bg-white dark:bg-industrial-900 p-5 sm:p-6 shadow-xs space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-industrial-800">
          <h3 className="font-extrabold text-slate-900 dark:text-white text-sm">
            آخرین سفارش قطعات و تجهیزات
          </h3>
          <span className="text-[11px] text-slate-400 font-mono">RECENT ORDER</span>
        </div>

        {recentOrders.map((order) => (
          <div key={order.id} className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-bold text-slate-900 dark:text-white">
                {order.partName}
              </span>
              <Badge variant="tech">{order.orderNumber}</Badge>
            </div>

            <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 text-[11px]">
              <span>پارت‌نامبر: {order.partNumber}</span>
              <span className="font-bold text-slate-900 dark:text-white">{formatPrice(order.amount)}</span>
            </div>

            <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-industrial-950 border border-slate-100 dark:border-industrial-800 flex items-center justify-between text-[11px]">
              <span className="text-slate-600 dark:text-slate-300">وضعیت: تحویل به باربری</span>
              <span className="font-mono text-safety-600 dark:text-safety-400 font-bold">{order.trackingCode}</span>
            </div>
          </div>
        ))}
      </div>

      {/* آخرین گزارش سرویس دوره‌ای */}
      <div className="rounded-2xl border border-slate-200 dark:border-industrial-800 bg-white dark:bg-industrial-900 p-5 sm:p-6 shadow-xs space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-industrial-800">
          <h3 className="font-extrabold text-slate-900 dark:text-white text-sm">
            آخرین گزارش بازرسی سرویس ماهانه
          </h3>
          <span className="text-[11px] text-slate-400 font-mono">INSPECTION LOG</span>
        </div>

        {recentServices.map((srv) => (
          <div key={srv.id} className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-bold text-slate-900 dark:text-white">
                {srv.serviceTitle}
              </span>
              <span className="text-[11px] text-slate-400">{srv.date}</span>
            </div>

            <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 text-[11px]">
              <span>تکنسین مسئول: {srv.technicianName}</span>
              <Badge variant="success">تایید شده</Badge>
            </div>

            <div className="p-2.5 rounded-lg bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200/60 dark:border-emerald-800/40 text-[11px] text-emerald-800 dark:text-emerald-300">
              {srv.checklistScore}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}