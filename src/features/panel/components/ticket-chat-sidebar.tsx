import { ElevatorPassport } from "../types";

interface TicketChatSidebarProps {
  passport: ElevatorPassport;
}

export function TicketChatSidebar({ passport }: TicketChatSidebarProps) {
  return (
    <div className="rounded-2xl border border-slate-200 dark:border-industrial-800 bg-white dark:bg-industrial-900 p-5 sm:p-6 shadow-xs sticky top-20 space-y-5 text-xs">
      
      {/* شناسنامه آسانسور پروژه */}
      <div className="pb-4 border-b border-slate-100 dark:border-industrial-800 space-y-2">
        <span className="text-[10px] font-bold text-safety-600 dark:text-safety-400 font-mono tracking-wider block">
          ASSOCIATED ELEVATOR
        </span>
        <h4 className="font-extrabold text-slate-900 dark:text-white text-sm">
          {passport.buildingName}
        </h4>
        <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-normal">
          {passport.address}
        </p>
      </div>

      {/* مشخصات قطعات نصب‌شده */}
      <div className="space-y-2.5 text-[11px]">
        <div className="flex justify-between text-slate-600 dark:text-slate-400">
          <span>تعداد توقف ساختمان:</span>
          <span className="font-bold text-slate-900 dark:text-white">{passport.stops} توقف</span>
        </div>
        <div className="flex justify-between text-slate-600 dark:text-slate-400">
          <span>موتور و محرکه:</span>
          <span className="font-bold text-slate-900 dark:text-white">{passport.motorModel}</span>
        </div>
        <div className="flex justify-between text-slate-600 dark:text-slate-400">
          <span>تابلو و درایو:</span>
          <span className="font-bold text-slate-900 dark:text-white">{passport.controllerModel}</span>
        </div>
      </div>

      {/* تعهد پاسخگویی SLA */}
      <div className="p-3 rounded-xl border border-slate-200 dark:border-industrial-800 bg-slate-50 dark:bg-industrial-950 space-y-1 text-[11px]">
        <span className="font-bold text-slate-900 dark:text-white block">
          تعهد زمان پاسخگویی مهندسی:
        </span>
        <p className="text-slate-500 dark:text-slate-400 leading-normal">
          تیکت‌های عادی ظرف کمتر از ۲۴ ساعت و تیکت‌های با اولویت بالا ظرف ۳ ساعت توسط ناظر پاسخ داده می‌شوند.
        </p>
      </div>

      {/* تماس مستقیم */}
      <div className="pt-2 text-center">
        <a
          href="tel:02188880000"
          className="text-xs font-bold text-safety-600 dark:text-safety-400 hover:underline"
        >
          خط تلفن کشیک شبانه‌روزی مهندسی
        </a>
      </div>

    </div>
  );
}