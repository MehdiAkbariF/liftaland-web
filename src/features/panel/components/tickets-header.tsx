"use client";

import { useRouter, useSearchParams } from "next/navigation";

const TABS = [
  { id: "all", label: "همه تیکت‌ها" },
  { id: "answered", label: "پاسخ‌داده‌شده" },
  { id: "open", label: "در انتظار بررسی" },
  { id: "closed", label: "حل‌شده و آرشیو" },
];

interface TicketsHeaderProps {
  totalTickets: number;
  onOpenNewTicket: () => void;
}

export function TicketsHeader({ totalTickets, onOpenNewTicket }: TicketsHeaderProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentTab = searchParams.get("status") || "all";

  const handleTabChange = (status: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (status === "all") {
      params.delete("status");
    } else {
      params.set("status", status);
    }
    router.push(`/panel/tickets?${params.toString()}`);
  };

  return (
    <div className="space-y-4 pb-4 border-b border-slate-200 dark:border-industrial-800">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-base sm:text-xl font-black text-slate-900 dark:text-white">
            میز مکاتبات و تیکت‌های مهندسی
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            ارتباط مستقیم مدیر ساختمان با سرپرستان فنی درایو، بازرسی استاندارد و تامین قطعات
          </p>
        </div>

        <button
          type="button"
          onClick={onOpenNewTicket}
          className="inline-flex items-center justify-center gap-1.5 px-4 h-10 rounded-xl bg-safety-500 hover:bg-safety-600 text-industrial-950 text-xs font-bold transition-all shadow-xs shrink-0 self-start sm:self-auto"
        >
          <span>+</span>
          <span>ثبت تیکت فنی جدید</span>
        </button>
      </div>

      {/* تب‌های فیلتر وضعیت تیکت */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none pt-1">
        {TABS.map((tab) => {
          const isActive = currentTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${
                isActive
                  ? "bg-industrial-900 text-white dark:bg-white dark:text-industrial-950 shadow-xs"
                  : "bg-slate-100 dark:bg-industrial-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-industrial-700"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}