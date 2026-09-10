import Link from "next/link";
import { PanelTicket } from "../types";
import { Badge } from "@/components/ui/badge";

interface TicketItemCardProps {
  ticket: PanelTicket;
}

export function TicketItemCard({ ticket }: TicketItemCardProps) {
  const priorityBadge = {
    critical: { variant: "warning" as const, label: "بحرانی (P1)" },
    high: { variant: "tech" as const, label: "اولویت بالا" },
    normal: { variant: "default" as const, label: "عادی" },
  }[ticket.priority];

  const statusBadge = {
    answered: { variant: "success" as const, label: "پاسخ کارشناس ناظر داده شد" },
    open: { variant: "tech" as const, label: "در انتظار بررسی مهندسی" },
    closed: { variant: "default" as const, label: "حل‌شده / بایگانی" },
  }[ticket.status];

  const lastMessage = ticket.messages[ticket.messages.length - 1];

  return (
    <div className="rounded-2xl border border-slate-200 dark:border-industrial-800 bg-white dark:bg-industrial-900 p-5 sm:p-6 shadow-xs hover:border-slate-300 dark:hover:border-industrial-700 transition-all space-y-3">
      
      {/* ردیف اول: کد رهگیری، دپارتمان و نشان وضعیت */}
      <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
        <div className="flex items-center gap-2">
          <span className="font-mono font-extrabold text-slate-900 dark:text-white">
            {ticket.ticketNumber}
          </span>
          <span className="text-slate-300 dark:text-slate-700">•</span>
          <span className="text-slate-500 dark:text-slate-400 font-medium">
            {ticket.department}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <Badge variant={priorityBadge.variant}>{priorityBadge.label}</Badge>
          <Badge variant={statusBadge.variant}>{statusBadge.label}</Badge>
        </div>
      </div>

      {/* عنوان تیکت */}
      <Link href={`/panel/tickets/${ticket.id}`} className="block">
        <h3 className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white hover:text-techBlue-600 dark:hover:text-blue-400 transition-colors leading-snug">
          {ticket.subject}
        </h3>
      </Link>

      {/* خلاصه آخرین پیام رد و بدل شده */}
      {lastMessage && (
        <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed bg-slate-50 dark:bg-industrial-950 p-3 rounded-xl border border-slate-100 dark:border-industrial-800/80">
          <strong className="text-slate-800 dark:text-slate-200">{lastMessage.senderName}: </strong>
          {lastMessage.text}
        </p>
      )}

      {/* فوتر کارت و دکمه ورود به صفحه گفتگوی تخصصی */}
      <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[11px] text-slate-400">
        <span>آخرین به‌روزرسانی: {ticket.updatedAt}</span>

        <Link
          href={`/panel/tickets/${ticket.id}`}
          className="inline-flex items-center gap-1.5 font-extrabold text-industrial-900 dark:text-white hover:text-safety-600 dark:hover:text-safety-400 transition-colors text-xs self-end sm:self-auto"
        >
          <span>مشاهده و ارسال پیام در صفحه گفتگو</span>
          <span>←</span>
        </Link>
      </div>

    </div>
  );
}