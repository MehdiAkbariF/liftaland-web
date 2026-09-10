import type { Metadata } from "next";
import { getPanelData } from "@/features/panel/api";
import { PanelSidebar } from "@/features/panel/components/panel-sidebar";
import { PanelElevatorPassport } from "@/features/panel/components/panel-elevator-passport";
import { PanelMetrics } from "@/features/panel/components/panel-metrics";
import { PanelRecentActivities } from "@/features/panel/components/panel-recent-activities";

export const metadata: Metadata = {
  title: "میز کار و داشبورد کاربری | سامانه مهندسی لیفتالند",
  description: "مدیریت اشتراک سرویس ماهانه آسانسور، پیگیری سفارشات قطعات و شناسنامه استاندارد ساختمان.",
};

export default async function PanelPage() {
  const data = await getPanelData();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 pb-20">
      <div className="flex flex-col lg:flex-row items-start gap-6">
        
        {/* سایدبار ناوبری پنل */}
        <PanelSidebar />

        {/* محتوای اصلی میز کار مهندسی */}
        <div className="flex-1 w-full space-y-6">
          
          {/* شناسنامه فنی آسانسور ساختمان */}
          <PanelElevatorPassport passport={data.passport} />

          {/* کارت‌های آماری و دسترسی سریع */}
          <PanelMetrics
            activeOrders={data.metrics.activeOrders}
            openTickets={data.metrics.openTickets}
            daysToNextService={data.metrics.daysToNextService}
          />

          {/* آخرین فعالیت‌ها و سوابق */}
          <PanelRecentActivities
            recentOrders={data.recentOrders}
            recentServices={data.recentServices}
          />

        </div>

      </div>
    </div>
  );
}