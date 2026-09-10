import { ElevatorPassport } from "../types";
import { Badge } from "@/components/ui/badge";

interface ServicesComplianceCardProps {
  passport: ElevatorPassport;
}

export function ServicesComplianceCard({ passport }: ServicesComplianceCardProps) {
  return (
    <div className="rounded-2xl border-2 border-slate-200 dark:border-industrial-800 bg-white dark:bg-industrial-900 p-5 sm:p-6 shadow-xs space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-100 dark:border-industrial-800 gap-3">
        <div>
          <span className="text-[10px] font-bold text-safety-600 dark:text-safety-400 font-mono tracking-wider block mb-1">
            LEGAL & SAFETY COMPLIANCE STATUS
          </span>
          <h3 className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white">
            وضعیت قانونی تاییدیه استاندارد و پوشش بیمه آسانسور ساختمان
          </h3>
        </div>

        <Badge variant="success" className="self-start sm:self-auto">
          قرارداد سرویس فعال (اشتراک طلایی)
        </Badge>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
        <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-industrial-950 border border-slate-100 dark:border-industrial-800 space-y-1">
          <span className="text-[11px] text-slate-400 block">گواهی استاندارد ملی (ISIRI 6303):</span>
          <span className="font-bold text-slate-900 dark:text-white block text-sm">
            معتبر تا {passport.standardExpiryDate}
          </span>
          <span className="text-[10px] text-emerald-600 dark:text-emerald-400 block">
            کد رهگیری آزمون در سامانه استاندارد ثبت شده
          </span>
        </div>

        <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-industrial-950 border border-slate-100 dark:border-industrial-800 space-y-1">
          <span className="text-[11px] text-slate-400 block">بیمه‌نامه مسئولیت مدنی حوادث:</span>
          <span className="font-bold text-slate-900 dark:text-white block text-sm">
            شماره: {passport.insurancePolicyNumber}
          </span>
          <span className="text-[10px] text-emerald-600 dark:text-emerald-400 block">
            پوشش دیه کامل برای سرنشینان فعال است
          </span>
        </div>

        <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-industrial-950 border border-slate-100 dark:border-industrial-800 space-y-1">
          <span className="text-[11px] text-slate-400 block">نوبت سرویس ماهانه پیش‌رو:</span>
          <span className="font-bold text-safety-600 dark:text-safety-400 block text-sm">
            {passport.nextServiceDate}
          </span>
          <span className="text-[10px] text-slate-400 block">
            تکنسین منطقه جهت هماهنگی تماس خواهد گرفت
          </span>
        </div>
      </div>
    </div>
  );
}