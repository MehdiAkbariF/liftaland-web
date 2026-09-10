import type { Metadata } from "next";
import Link from "next/link";
import { getCustomerOrders } from "@/features/panel/api";
import { PanelSidebar } from "@/features/panel/components/panel-sidebar";
import { OrdersHeader } from "@/features/panel/components/orders-header";
import { OrderItemCard } from "@/features/panel/components/order-item-card";

export const metadata: Metadata = {
  title: "سفارش‌ها و پیش‌فاکتورهای من | پنل کارفرمایان لیفتالند",
  description: "پیگیری سفارشات قطعات آسانسور، بارنامه‌ها و پیش‌فاکتورهای رسمی صادره برای ساختمان.",
};

interface OrdersPageProps {
  searchParams: {
    status?: string;
  };
}

export default async function OrdersPage({ searchParams }: OrdersPageProps) {
  const orders = await getCustomerOrders(searchParams.status);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 pb-20">
      <div className="flex flex-col lg:flex-row items-start gap-6">
        
        {/* سایدبار پنل کارفرما */}
        <PanelSidebar />

        {/* محتوای سفارش‌ها */}
        <div className="flex-1 w-full space-y-5">
          
          <OrdersHeader totalOrders={orders.length} />

          {orders.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-slate-300 dark:border-industrial-800 bg-white dark:bg-industrial-900 p-8 text-center space-y-3">
              <span className="text-2xl block">📦</span>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                هیچ سفارشی در این وضعیت یافت نشد
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
                جهت ثبت استعلام قیمت یا خرید قطعات استاندارد دارای پارت‌نامبر، به کاتالوگ مراجعه فرمایید.
              </p>
              <Link
                href="/products"
                className="inline-flex items-center justify-center px-4 h-9 rounded-lg bg-industrial-900 text-white dark:bg-white dark:text-industrial-950 text-xs font-bold"
              >
                مشاهده کاتالوگ قطعات آسانسور
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {orders.map((order) => (
                <OrderItemCard key={order.id} order={order} />
              ))}
            </div>
          )}

        </div>

      </div>
    </div>
  );
}