import { ElevatorPassport } from "../types";
import { Badge } from "@/components/ui/badge";

interface PanelElevatorPassportProps {
  passport: ElevatorPassport;
}

export function PanelElevatorPassport({ passport }: PanelElevatorPassportProps) {
  return (
    <div className="rounded-2xl border border-slate-200 dark:border-industrial-800 bg-white dark:bg-industrial-900 p-5 sm:p-7 shadow-xs space-y-5">
      {/* هدر شناسنامه با وضعیت استاندارد */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 dark:border-industrial-800 gap-3">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2.5 h-2.5 rounded-full bg-safety-500" />
            <span className="text-[11px] font-bold text-safety-600 dark:text-safety-400 font-mono tracking-wider">
              REGISTERED ELEVATOR PASSPORT
            </span>
          </div>
          <h2 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white">
            {passport.buildingName}
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            {passport.address}
          </p>
        </div>

        {/* وضعیت تاییدیه استاندارد */}
        <Badge variant="success" className="self-start sm:self-auto py-1 px-3">
          ✓ گواهی استاندارد معتبر تا {passport.standardExpiryDate}
        </Badge>
      </div>

      {/* مشخصات پلاک الکترومکانیکی آسانسور */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
        <div className="p-3 rounded-xl bg-slate-50 dark:bg-industrial-950 border border-slate-100 dark:border-industrial-800">
          <span className="text-[10px] text-slate-400 block mb-1">تعداد توقف:</span>
          <span className="font-bold text-slate-900 dark:text-white">{passport.stops} ایستگاه</span>
        </div>

        <div className="p-3 rounded-xl bg-slate-50 dark:bg-industrial-950 border border-slate-100 dark:border-industrial-800">
          <span className="text-[10px] text-slate-400 block mb-1">ظرفیت کابین:</span>
          <span className="font-bold text-slate-900 dark:text-white">{passport.capacity}</span>
        </div>

        <div className="p-3 rounded-xl bg-slate-50 dark:bg-industrial-950 border border-slate-100 dark:border-industrial-800">
          <span className="text-[10px] text-slate-400 block mb-1">بیمه‌نامه حوادث:</span>
          <span className="font-bold text-emerald-600 dark:text-emerald-400">دارای پوشش دیه کامل</span>
        </div>

        <div className="p-3 rounded-xl bg-slate-50 dark:bg-industrial-950 border border-slate-100 dark:border-industrial-800">
          <span className="text-[10px] text-slate-400 block mb-1">نوبت سرویس ماهانه:</span>
          <span className="font-bold text-safety-600 dark:text-safety-400">{passport.nextServiceDate}</span>
        </div>
      </div>

      {/* تجهیزات اصلی ثبت‌شده در سامانه */}
      <div className="p-4 rounded-xl border border-slate-200/80 dark:border-industrial-800/80 bg-slate-50/70 dark:bg-industrial-950/60 text-xs space-y-2">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
          <span className="text-slate-500 dark:text-slate-400">موتور و محرکه نصب‌شده:</span>
          <span className="font-bold text-slate-900 dark:text-slate-100">{passport.motorModel}</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pt-1.5 border-t border-slate-200/60 dark:border-industrial-800/60">
          <span className="text-slate-500 dark:text-slate-400">تابلو فرمان و درایو:</span>
          <span className="font-bold text-slate-900 dark:text-slate-100">{passport.controllerModel}</span>
        </div>
      </div>
    </div>
  );
}