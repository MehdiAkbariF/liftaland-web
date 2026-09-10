"use client";

import { useState } from "react";
import { ElevatorPassport } from "../types";

interface ProfileFormProps {
  initialPassport: ElevatorPassport;
}

export function ProfileForm({ initialPassport }: ProfileFormProps) {
  const [passport, setPassport] = useState<ElevatorPassport>(initialPassport);
  const [isSaved, setIsSaved] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);

    setTimeout(() => {
      setIsSaving(false);
      setIsSaved(true);
      setTimeout(() => setIsSaved(false), 3500);
    }, 600);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 text-xs">
      
      {/* بخش ۱: اطلاعات مدیر ساختمان و صدور صورتحساب رسمی */}
      <div className="rounded-2xl border border-slate-200 dark:border-industrial-800 bg-white dark:bg-industrial-900 p-5 sm:p-6 shadow-xs space-y-4">
        <div className="flex items-center gap-2 pb-3 border-b border-slate-100 dark:border-industrial-800">
          <span className="text-base">👤</span>
          <h3 className="font-extrabold text-slate-900 dark:text-white text-xs sm:text-sm">
            ۱. مشخصات هویتی کارفرما و صدور فاکتور رسمی
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-slate-700 dark:text-slate-300 font-bold mb-1.5">
              نام و نام‌خانوادگی مدیر / کارفرما: *
            </label>
            <input
              type="text"
              required
              value={passport.managerName}
              onChange={(e) => setPassport({ ...passport, managerName: e.target.value })}
              className="w-full h-10 px-3 rounded-xl border border-slate-300 dark:border-industrial-700 bg-white dark:bg-industrial-950 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-safety-500"
            />
          </div>

          <div>
            <label className="block text-slate-700 dark:text-slate-300 font-bold mb-1.5">
              شماره تلفن همراه (جهت پیامک نوبت سرویس و اضطراری): *
            </label>
            <input
              type="tel"
              required
              value={passport.phone}
              onChange={(e) => setPassport({ ...passport, phone: e.target.value })}
              className="w-full h-10 px-3 rounded-xl border border-slate-300 dark:border-industrial-700 bg-white dark:bg-industrial-950 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-safety-500 font-sans"
            />
          </div>
        </div>
      </div>

      {/* بخش ۲: نشانی و مشخصات ساختمان */}
      <div className="rounded-2xl border border-slate-200 dark:border-industrial-800 bg-white dark:bg-industrial-900 p-5 sm:p-6 shadow-xs space-y-4">
        <div className="flex items-center gap-2 pb-3 border-b border-slate-100 dark:border-industrial-800">
          <span className="text-base">🏢</span>
          <h3 className="font-extrabold text-slate-900 dark:text-white text-xs sm:text-sm">
            ۲. مشخصات و نشانی مجتمع ساختمانی
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-slate-700 dark:text-slate-300 font-bold mb-1.5">
              نام مجتمع / ساختمان: *
            </label>
            <input
              type="text"
              required
              value={passport.buildingName}
              onChange={(e) => setPassport({ ...passport, buildingName: e.target.value })}
              className="w-full h-10 px-3 rounded-xl border border-slate-300 dark:border-industrial-700 bg-white dark:bg-industrial-950 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-safety-500"
            />
          </div>

          <div>
            <label className="block text-slate-700 dark:text-slate-300 font-bold mb-1.5">
              نوع کاربری ساختمان:
            </label>
            <select
              className="w-full h-10 px-3 rounded-xl border border-slate-300 dark:border-industrial-700 bg-white dark:bg-industrial-950 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-safety-500"
            >
              <option value="residential">مسکونی</option>
              <option value="commercial">اداری / تجاری</option>
              <option value="medical">پزشکی / کلینیک</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-slate-700 dark:text-slate-300 font-bold mb-1.5">
            نشانی دقیق پستی ساختمان (جهت اعزام تکنسین و تحویل قطعات): *
          </label>
          <input
            type="text"
            required
            value={passport.address}
            onChange={(e) => setPassport({ ...passport, address: e.target.value })}
            className="w-full h-10 px-3 rounded-xl border border-slate-300 dark:border-industrial-700 bg-white dark:bg-industrial-950 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-safety-500"
          />
        </div>
      </div>

      {/* بخش ۳: پلاک الکترومکانیکی آسانسور (مشخصات فنی چاهک و موتورخانه) */}
      <div className="rounded-2xl border border-slate-200 dark:border-industrial-800 bg-white dark:bg-industrial-900 p-5 sm:p-6 shadow-xs space-y-4">
        <div className="flex items-center gap-2 pb-3 border-b border-slate-100 dark:border-industrial-800">
          <span className="text-base">⚙️</span>
          <h3 className="font-extrabold text-slate-900 dark:text-white text-xs sm:text-sm">
            ۳. پلاک مشخصات فنی و قطعات نصب‌شده آسانسور
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <label className="block text-slate-700 dark:text-slate-300 font-bold mb-1.5">
              تعداد توقف (ایستگاه‌ها): *
            </label>
            <input
              type="number"
              min="2"
              max="40"
              required
              value={passport.stops}
              onChange={(e) => setPassport({ ...passport, stops: parseInt(e.target.value, 10) || 2 })}
              className="w-full h-10 px-3 rounded-xl border border-slate-300 dark:border-industrial-700 bg-white dark:bg-industrial-950 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-safety-500 font-sans font-bold"
            />
          </div>

          <div>
            <label className="block text-slate-700 dark:text-slate-300 font-bold mb-1.5">
              ظرفیت اسمی کابین:
            </label>
            <input
              type="text"
              value={passport.capacity}
              onChange={(e) => setPassport({ ...passport, capacity: e.target.value })}
              placeholder="مثال: ۸ نفره (۶۳۰ کیلو)"
              className="w-full h-10 px-3 rounded-xl border border-slate-300 dark:border-industrial-700 bg-white dark:bg-industrial-950 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-safety-500"
            />
          </div>

          <div className="sm:col-span-2">
            <label className="block text-slate-700 dark:text-slate-300 font-bold mb-1.5">
              مدل و توان موتور و محرکه:
            </label>
            <input
              type="text"
              value={passport.motorModel}
              onChange={(e) => setPassport({ ...passport, motorModel: e.target.value })}
              placeholder="مثال: سیسیور MR12 - ۵.۵ کیلووات"
              className="w-full h-10 px-3 rounded-xl border border-slate-300 dark:border-industrial-700 bg-white dark:bg-industrial-950 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-safety-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-slate-700 dark:text-slate-300 font-bold mb-1.5">
            برند تابلو فرمان و مدل اینورتر (درایو):
          </label>
          <input
            type="text"
            value={passport.controllerModel}
            onChange={(e) => setPassport({ ...passport, controllerModel: e.target.value })}
            placeholder="مثال: تابلو آریان سیستم با درایو آرکد ۱۵ کیلووات"
            className="w-full h-10 px-3 rounded-xl border border-slate-300 dark:border-industrial-700 bg-white dark:bg-industrial-950 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-safety-500"
          />
        </div>
      </div>

      {/* بخش ۴: اطلاعات تاییدیه استاندارد و بیمه‌نامه */}
      <div className="rounded-2xl border border-slate-200 dark:border-industrial-800 bg-white dark:bg-industrial-900 p-5 sm:p-6 shadow-xs space-y-4">
        <div className="flex items-center gap-2 pb-3 border-b border-slate-100 dark:border-industrial-800">
          <span className="text-base">🛡️</span>
          <h3 className="font-extrabold text-slate-900 dark:text-white text-xs sm:text-sm">
            ۴. وضعیت تاییدیه استاندارد ملی و بیمه‌نامه حوادث
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-slate-700 dark:text-slate-300 font-bold mb-1.5">
              تاریخ اعتبار گواهی استاندارد ادواری:
            </label>
            <input
              type="text"
              value={passport.standardExpiryDate}
              onChange={(e) => setPassport({ ...passport, standardExpiryDate: e.target.value })}
              placeholder="مثال: ۱۴۰۳/۱۱/۲۰"
              className="w-full h-10 px-3 rounded-xl border border-slate-300 dark:border-industrial-700 bg-white dark:bg-industrial-950 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-safety-500 font-sans"
            />
          </div>

          <div>
            <label className="block text-slate-700 dark:text-slate-300 font-bold mb-1.5">
              شماره بیمه‌نامه مسئولیت مدنی حوادث آسانسور:
            </label>
            <input
              type="text"
              value={passport.insurancePolicyNumber}
              onChange={(e) => setPassport({ ...passport, insurancePolicyNumber: e.target.value })}
              placeholder="مثال: INS-982415-AS"
              className="w-full h-10 px-3 rounded-xl border border-slate-300 dark:border-industrial-700 bg-white dark:bg-industrial-950 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-safety-500 font-mono"
            />
          </div>
        </div>
      </div>

      {/* دکمه ذخیره و فیدبک آنی */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-2">
        <div>
          {isSaved && (
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
              <span>✓</span>
              <span>مشخصات آسانسور ساختمان با موفقیت در سامانه مهندسی به‌روزرسانی شد.</span>
            </span>
          )}
        </div>

        <button
          type="submit"
          disabled={isSaving}
          className="px-8 h-11 rounded-xl bg-safety-500 hover:bg-safety-600 text-industrial-950 text-xs font-extrabold transition-all shadow-xs disabled:opacity-50 flex items-center justify-center gap-2"
        >
          {isSaving ? (
            <span className="inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
          ) : (
            <span>ذخیره تغییرات شناسنامه فنی</span>
          )}
        </button>
      </div>

    </form>
  );
}