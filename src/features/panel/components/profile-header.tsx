export function ProfileHeader() {
  return (
    <div className="space-y-2 pb-4 border-b border-slate-200 dark:border-industrial-800">
      <div className="flex items-center gap-2">
        <span className="w-2.5 h-2.5 rounded-full bg-safety-500" />
        <span className="text-[11px] font-bold text-safety-600 dark:text-safety-400 font-mono tracking-wider">
          BUILDING & ELEVATOR PASSPORT
        </span>
      </div>
      <h1 className="text-base sm:text-xl font-black text-slate-900 dark:text-white">
        شناسنامه فنی آسانسور و مشخصات مدیر مجتمع
      </h1>
      <p className="text-xs text-slate-500 dark:text-slate-400">
        تکمیل دقیق این اطلاعات به تکنسین‌های اعزامی لیفتالند کمک می‌کند با قطعات سازگار و پیش‌زمینه فنی در محل حاضر شوند.
      </p>
    </div>
  );
}