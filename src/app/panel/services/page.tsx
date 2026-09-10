import type { Metadata } from "next";
import Link from "next/link";
import { getPanelData, getCustomerServices } from "@/features/panel/api";
import { PanelSidebar } from "@/features/panel/components/panel-sidebar";
import { ServicesHeader } from "@/features/panel/components/services-header";
import { ServicesComplianceCard } from "@/features/panel/components/services-compliance-card";
import { ServiceLogCard } from "@/features/panel/components/service-log-card";

export const metadata: Metadata = {
  title: "سوابق خدمات و بازرسی آسانسور | پنل کارفرمایان لیفتالند",
  description: "مشاهده چک‌لیست‌های ماهانه ثبت‌شده، نوبت سرویس بعدی و وضعیت گواهی استاندارد ساختمان.",
};

interface ServicesPageProps {
  searchParams: {
    type?: string;
  };
}

export default async function CustomerServicesPage({ searchParams }: ServicesPageProps) {
  const [panelData, serviceLogs] = await Promise.all([
    getPanelData(),
    getCustomerServices(searchParams.type),
  ]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 pb-20">
      <div className="flex flex-col lg:flex-row items-start gap-6">
        
        {/* سایدبار ناوبری پنل کارفرما */}
        <PanelSidebar />

        {/* محتوای پرونده خدمات */}
        <div className="flex-1 w-full space-y-6">
          
          <ServicesHeader totalLogs={serviceLogs.length} />

          {/* کارت پایش وضعیت قانونی و بیمه */}
          <ServicesComplianceCard passport={panelData.passport} />

          {/* لیست گزارش‌های بازرسی ثبت‌شده */}
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-industrial-800 text-xs">
              <span className="font-extrabold text-slate-900 dark:text-white">
                تاریخچه گزارش‌های ثبت‌شده توسط تکنسین‌های اعزامی
              </span>
              <Link
                href="/contact"
                className="text-safety-600 dark:text-safety-400 font-bold hover:underline"
              >
                درخواست اعزام کارشناس فوق‌العاده ←
              </Link>
            </div>

            {serviceLogs.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-slate-300 dark:border-industrial-800 bg-white dark:bg-industrial-900 p-8 text-center space-y-2">
                <span className="text-2xl block">📋</span>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  هیچ گزارشی در این دسته‌بندی ثبت نشده است.
                </p>
              </div>
            ) : (
              serviceLogs.map((log) => (
                <ServiceLogCard key={log.id} log={log} />
              ))
            )}
          </div>

        </div>

      </div>
    </div>
  );
}