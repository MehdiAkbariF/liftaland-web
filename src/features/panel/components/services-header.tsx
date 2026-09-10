import Link from "next/link";
import { PanelTicket } from "../types";
import { Badge } from "@/components/ui/badge";

interface TicketChatHeaderProps {
  ticket: PanelTicket;
  onToggleSidebar: () => void;
  showSidebar: boolean;
}

export function TicketChatHeader({
  ticket,
  onToggleSidebar,
  showSidebar,
}: TicketChatHeaderProps) {
  const statusBadge = {
    answered: { variant: "success" as const, label: "پاسخ ناظر" },
    open: { variant: "tech" as const, label: "در بررسی" },
    closed: { variant: "default" as const, label: "بسته" },
  }[ticket.status];

  return (
    <div className="shrink-0 px-3 sm:px-4 py-2.5 sm:py-3 border-b border-slate-200 dark:border-industrial-800 bg-white dark:bg-industrial-900 flex items-center justify-between gap-2 select-none">
      
      {/* سمت راست: دکمه بازگشت + تایتل */}
      <div className="flex items-center gap-2 sm:gap-3 min-w-0">
        <Link
          href="/panel/tickets"
          className="w-8 h-8 rounded-lg border border-slate-200 dark:border-industrial-700 hover:bg-slate-100 dark:hover:bg-industrial-800 flex items-center justify-center text-slate-700 dark:text-slate-200 shrink-0 text-sm font-bold"
          title="بازگشت به لیست تیکت‌ها"
        >
          →
        </Link>

        <div className="w-8 h-8 rounded-lg bg-industrial-900 dark:bg-white text-white dark:text-industrial-950 flex items-center justify-center font-black text-xs shrink-0">
          L
        </div>

        <div className="min-w-0">
          <h2 className="text-xs sm:text-sm font-black text-slate-900 dark:text-white truncate">
            {ticket.subject}
          </h2>
          <div className="flex items-center gap-1.5 text-[10px] text-slate-400">
            <span className="font-mono font-bold">{ticket.ticketNumber}</span>
            <span>•</span>
            <span className="truncate">{ticket.department}</span>
          </div>
        </div>
      </div>

      {/* سمت چپ: دکمه اطلاعات آسانسور و وضعیت */}
      <div className="flex items-center gap-1.5 shrink-0">
        <Badge variant={statusBadge.variant} className="text-[10px] py-0.5 px-2">
          {statusBadge.label}
        </Badge>

        <button
          type="button"
          onClick={onToggleSidebar}
          className={`h-7 sm:h-8 px-2 sm:px-2.5 rounded-lg border text-[11px] font-bold transition-all flex items-center gap-1 ${
            showSidebar
              ? "border-safety-500 bg-safety-50 dark:bg-safety-950/40 text-safety-700 dark:text-safety-400"
              : "border-slate-200 dark:border-industrial-700 bg-slate-50 dark:bg-industrial-950 text-slate-600 dark:text-slate-300"
          }`}
          title="مشخصات آسانسور مربوط به تیکت"
        >
          <span>🏢</span>
          <span className="hidden md:inline">مشخصات</span>
        </button>
      </div>

    </div>
  );
}