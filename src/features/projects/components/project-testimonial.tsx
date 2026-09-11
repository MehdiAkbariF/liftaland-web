export function ProjectTestimonial() {
  return (
    <div className="rounded-2xl border border-slate-200 dark:border-industrial-800 bg-white dark:bg-industrial-900 p-6 sm:p-8 shadow-xs">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-5">
        
        {/* نشان اصالت رضایت‌نامه */}
        <div className="w-12 h-12 rounded-2xl bg-safety-500 text-industrial-950 flex items-center justify-center font-black text-2xl shrink-0 shadow-xs">
          ❝
        </div>

        <div className="space-y-2 flex-1">
          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-[2] text-justify font-medium">
            «پیش از اجرای این پروژه توسط تیم مهندسی لیفتالند، صدای زوزه موتورخانه در طبقات ۱۵ و ۱۶ مایه آزار دائمی ساکنین بود و هنگام توقف در طبقات تکان شدیدی احساس می‌شد. پس از نوسازی با موتور ساسی و تابلو آرکد، آرامش و سکوت مطلق به ساختمان برگشته و توقف‌ها کاملاً تراز و بدون ذره‌ای لرزش است. گواهی استاندارد ادواری نیز بدون حتی یک بند اخطار صادر شد.»
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-between gap-2 text-xs border-t border-slate-100 dark:border-industrial-800">
            <div>
              <span className="font-black text-slate-900 dark:text-white">مهندس هوشنگ مهدوی</span>
              <span className="text-slate-400 text-[11px] mr-2">• مدیر و رییس هیئت‌مدیره برج روما</span>
            </div>

            <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-bold font-mono">
              VERIFIED RESIDENTIAL ENDORSEMENT
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}