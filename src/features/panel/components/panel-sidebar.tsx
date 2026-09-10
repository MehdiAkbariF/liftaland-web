"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export function PanelSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("user_session");
    router.push("/");
  };

  const navItems = [
    { label: "میز کار و داشبورد", href: "/panel", icon: "📊" },
    { label: "سفارش‌ها و پیش‌فاکتورها", href: "/panel/orders", icon: "📦" },
    { label: "سوابق سرویس و بازرسی‌ها", href: "/panel/services", icon: "📋" },
    { label: "تیکت‌ها و مکاتبات فنی", href: "/panel/tickets", icon: "💬" },
    { label: "شناسنامه آسانسور ساختمان", href: "/panel/profile", icon: "🏢" },
  ];

  return (
    <aside className="w-full lg:w-64 shrink-0 rounded-2xl border border-slate-200 dark:border-industrial-800 bg-white dark:bg-industrial-900 p-5 shadow-xs space-y-6">
      {/* مشخصات کاربر جاری */}
      <div className="flex items-center gap-3 pb-4 border-b border-slate-100 dark:border-industrial-800">
        <div className="w-10 h-10 rounded-xl bg-industrial-900 dark:bg-white text-white dark:text-industrial-950 flex items-center justify-center font-bold text-sm">
          👤
        </div>
        <div className="overflow-hidden">
          <span className="text-xs font-bold text-slate-900 dark:text-white block truncate">
            مهندس علیرضا سلیمانی
          </span>
          <span className="text-[11px] text-slate-400 font-mono">۰۹۱۲۳۴۵۶۷۸۹</span>
        </div>
      </div>

      {/* منوی ناوبری پنل */}
      <nav className="space-y-1 text-xs">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl font-bold transition-colors ${
                isActive
                  ? "bg-industrial-900 text-white dark:bg-white dark:text-industrial-950 shadow-2xs"
                  : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-industrial-800"
              }`}
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* دکمه خروج */}
      <div className="pt-4 border-t border-slate-100 dark:border-industrial-800">
        <button
          type="button"
          onClick={handleLogout}
          className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-bold text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/30 transition-colors"
        >
          <span>🚪</span>
          <span>خروج از حساب</span>
        </button>
      </div>
    </aside>
  );
}