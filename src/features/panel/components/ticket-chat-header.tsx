import Link from "next/link";
import { PanelTicket } from "../types";
import { Badge } from "@/components/ui/badge";

interface TicketChatHeaderProps {
  ticket: PanelTicket;
}

export function TicketChatHeader({ ticket }: TicketChatHeaderProps) {
  const statusBadge = {
    answered: { variant: "success" as const, label: "پاسخ ناظر فنی" },
    open: { variant: "tech" as const, label: "در انتظار بررسی" },
    closed: { variant: "default" as const, label: "بسته شده" },
  }[ticket.status];

  return (
    <div className="shrink-0 px-3 sm:px-4 py-2.5 sm:py-3 border-b border-slate-200 dark:border-industrial-800 bg-white dark:bg-industrial-900 flex items-center justify-between gap-2 select-none">
      
      {/* سمت راست: دکمه بازگشت + تایتل و مشخصات تیکت */}
      <div className="flex items-center gap-2 sm:gap-3 min-w-0">
        <Link
          href="/panel/tickets"
          className="w-8 h-8 rounded-lg border border-slate-200 dark:border-industrial-700 hover:bg-slate-100 dark:hover:bg-industrial-800 flex items-center justify-center text-slate-700 dark:text-slate-200 shrink-0 text-sm font-bold transition-colors"
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

      {/* سمت چپ: نشان وضعیت رسمی */}
      <div className="flex items-center gap-1.5 shrink-0">
        <Badge variant={statusBadge.variant} className="text-[10px] py-0.5 px-2">
          {statusBadge.label}
        </Badge>
      </div>

    </div>
  );
}