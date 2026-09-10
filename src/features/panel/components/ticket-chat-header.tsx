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
    answered: { variant: "success" as const, label: "پاسخ ناظر فنی" },
    open: { variant: "tech" as const, label: "در انتظار بررسی" },
    closed: { variant: "default" as const, label: "بسته شده" },
  }[ticket.status];

  return (
    <div className="shrink-0 px-4 py-3 border-b border-slate-200 dark:border-industrial-800 bg-white/95 dark:bg-industrial-900/95 backdrop-blur-md flex items-center justify-between gap-3 select-none">
      
      {/* سمت راست: دکمه بازگشت + هویت تیکت */}
      <div className="flex items-center gap-3 min-w-0">
        <Link
          href="/panel/tickets"
          className="w-8 h-8 rounded-xl border border-slate-200 dark:border-industrial-700 hover:bg-slate-100 dark:hover:bg-industrial-800 flex items-center justify-center text-slate-600 dark:text-slate-300 shrink-0 transition-colors"
          title="بازگشت به تیکت‌ها"
        >
          →
        </Link>

        {/* آواتار مهندسی دپارتمان */}
        <div className="w-9 h-9 rounded-xl bg-industrial-900 dark:bg-white text-white dark:text-industrial-950 flex items-center justify-center font-black text-xs shrink-0 shadow-2xs">
          L
        </div>

        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <h2 className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white truncate">
              {ticket.subject}
            </h2>
          </div>
          <div className="flex items-center gap-2 text-[11px] text-slate-400">
            <span className="font-mono">{ticket.ticketNumber}</span>
            <span>•</span>
            <span className="truncate">{ticket.department}</span>
          </div>
        </div>
      </div>

      {/* سمت چپ: بج وضعیت و دکمه بازکردن اطلاعات آسانسور */}
      <div className="flex items-center gap-2 shrink-0">
        <Badge variant={statusBadge.variant} className="hidden sm:inline-flex">
          {statusBadge.label}
        </Badge>

        <button
          type="button"
          onClick={onToggleSidebar}
          className={`h-8 px-3 rounded-lg border text-xs font-bold transition-all flex items-center gap-1.5 ${
            showSidebar
              ? "border-safety-500 bg-safety-50 dark:bg-safety-950/40 text-safety-700 dark:text-safety-400"
              : "border-slate-200 dark:border-industrial-700 bg-slate-50 dark:bg-industrial-950 text-slate-700 dark:text-slate-300"
          }`}
        >
          <span>🏢</span>
          <span className="hidden md:inline">مشخصات آسانسور</span>
        </button>
      </div>

    </div>
  );
}