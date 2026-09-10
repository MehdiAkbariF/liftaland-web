import { PanelServiceLog } from "../types";
import { Badge } from "@/components/ui/badge";

interface ServiceLogCardProps {
  log: PanelServiceLog;
}

export function ServiceLogCard({ log }: ServiceLogCardProps) {
  return (
    <div className="rounded-2xl border border-slate-200 dark:border-industrial-800 bg-white dark:bg-industrial-900 p-5 sm:p-6 shadow-xs space-y-4">
      
      {/* سربرگ کارت: عنوان، تاریخ و تکنسین اعزامی */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-100 dark:border-industrial-800 text-xs">
        <div>
          <h3 className="text-sm font-extrabold text-slate-900 dark:text-white mb-1">
            {log.serviceTitle}
          </h3>
          <div className="flex items-center gap-2 text-slate-400 text-[11px]">
            <span>تاریخ بازدید: {log.date}</span>
            <span>•</span>
            <span>ساعت استقرار: {log.time}</span>
          </div>
        </div>

        <Badge variant={log.type === "standard" ? "tech" : "success"}>
          {log.type === "standard" ? "آزمون رسمی استاندارد" : "سرویس دوره‌ای ماهانه"}
        </Badge>
      </div>

      {/* مشخصات تکنسین اعزامی از طرف لیفتالند */}
      <div className="p-3 rounded-xl border border-slate-100 dark:border-industrial-800/80 bg-slate-50/70 dark:bg-industrial-950 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
        <div>
          <span className="text-slate-500 dark:text-slate-400">تکنسین اعزامی لیفتالند: </span>
          <strong className="text-slate-900 dark:text-white font-bold">{log.technicianName}</strong>
          <span className="text-[11px] text-slate-400 mr-2">({log.technicianLicense})</span>
        </div>

        <a
          href={`tel:${log.technicianPhone}`}
          className="text-techBlue-600 dark:text-blue-400 hover:underline font-bold text-[11px]"
        >
          تماس مستقیم با تکنسین: {log.technicianPhone}
        </a>
      </div>

      {/* تفکیک وضعیت بخش‌های سه‌گانه آسانسور */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
        <div className="p-3 rounded-xl border border-slate-100 dark:border-industrial-800 bg-white dark:bg-industrial-900 space-y-1">
          <span className="font-bold text-slate-900 dark:text-slate-100 block">
            ۱. وضعیت موتورخانه و محرکه:
          </span>
          <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
            {log.motorRoomStatus}
          </p>
        </div>

        <div className="p-3 rounded-xl border border-slate-100 dark:border-industrial-800 bg-white dark:bg-industrial-900 space-y-1">
          <span className="font-bold text-slate-900 dark:text-slate-100 block">
            ۲. وضعیت چاهک و ریل‌ها:
          </span>
          <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
            {log.shaftStatus}
          </p>
        </div>

        <div className="p-3 rounded-xl border border-slate-100 dark:border-industrial-800 bg-white dark:bg-industrial-900 space-y-1">
          <span className="font-bold text-slate-900 dark:text-slate-100 block">
            ۳. وضعیت کابین و درب‌ها:
          </span>
          <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
            {log.cabinStatus}
          </p>
        </div>
      </div>

      {/* نتیجه نهایی و یادداشت تحویل */}
      <div className="p-3 rounded-xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200/60 dark:border-emerald-800/40 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
        <div>
          <span className="font-bold text-emerald-800 dark:text-emerald-300 block mb-0.5">
            نتیجه آزمون چک‌لیست ۴۲ گانه:
          </span>
          <p className="text-[11px] text-emerald-700 dark:text-emerald-400">
            {log.checklistScore} — {log.notes}
          </p>
        </div>

        {log.signedByManager && (
          <span className="text-[10px] font-bold px-2 py-1 rounded bg-emerald-500 text-white shrink-0 self-start sm:self-auto">
            ✓ تایید شده با امضای مدیر ساختمان
          </span>
        )}
      </div>

      {/* اکشن‌های چاپ و دانلود */}
      <div className="pt-3 border-t border-slate-100 dark:border-industrial-800 flex items-center justify-end gap-2 text-xs">
        <button
          type="button"
          className="px-3 h-8 rounded-lg border border-slate-200 dark:border-industrial-700 bg-white dark:bg-industrial-900 hover:bg-slate-100 dark:hover:bg-industrial-800 text-slate-700 dark:text-slate-300 font-bold transition-colors shadow-2xs text-[11px]"
        >
          چاپ برگه چک‌لیست رسمی (PDF)
        </button>
      </div>

    </div>
  );
}