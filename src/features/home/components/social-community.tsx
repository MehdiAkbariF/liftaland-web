export function SocialCommunity() {
  const reels = [
    {
      title: "تست عملکرد پاراشوت تدریجی در پروژه ۱۲ توقف",
      tag: "آزمون میدانی",
      views: "۴.۲K",
      duration: "۰۱:۱۵",
      topic: "تست سرعت و فک‌های ترمز",
    },
    {
      title: "عیب‌یابی خطای سنسور دورانزیستور درایو VVVF",
      tag: "آموزش رفع خطا",
      views: "۶.۸K",
      duration: "۰۰:۵۲",
      topic: "تنظیم پارامترهای موتورخانه",
    },
    {
      title: "چک‌لیست ۱۰ گانه قبل از ورود بازرس استاندارد",
      tag: "نکات استاندارد",
      views: "۹.۱K",
      duration: "۰۲:۰۴",
      topic: "میکروسوییچ‌ها و بافر چاهک",
    },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="rounded-2xl border border-slate-200 dark:border-industrial-800 bg-white dark:bg-industrial-900 p-5 sm:p-8 shadow-sm">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-5 border-b border-slate-100 dark:border-industrial-800">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-full p-[2px] bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 shrink-0">
              <div className="w-full h-full rounded-full bg-white dark:bg-industrial-950 flex items-center justify-center p-1">
                <div className="w-full h-full rounded-full bg-slate-100 dark:bg-industrial-900 flex items-center justify-center text-xs font-black text-slate-900 dark:text-white">
                  LIFT
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-1.5 mb-0.5">
                <span className="font-extrabold text-sm sm:text-base text-slate-900 dark:text-white font-mono dir-ltr">
                  @liftaland
                </span>
                <span className="w-4 h-4 rounded-full bg-techBlue-600 text-white flex items-center justify-center text-[9px]">
                  ✓
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                مرکز ویدیویی مستندات چاهک، آزمون‌های سقوط و آموزش‌های فنی هفتگی
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 sm:gap-6 self-start md:self-auto">
            <div className="text-left border-l pl-4 border-slate-200 dark:border-industrial-800 hidden sm:block">
              <span className="block text-[11px] text-slate-400">دنبال‌کنندگان فعال:</span>
              <span className="text-sm font-bold text-slate-800 dark:text-slate-200">
                ۲۴,۰۰۰+ نفر از اهالی صنعت
              </span>
            </div>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 h-10 px-5 rounded-lg bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-500 hover:to-pink-500 text-white text-xs font-bold transition-all shadow-sm"
            >
              <span>مشاهده و دنبال کردن پیج</span>
              <span className="text-xs">←</span>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
          {reels.map((reel, idx) => (
            <a
              key={idx}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col justify-between rounded-xl overflow-hidden border border-slate-200 dark:border-industrial-800 bg-slate-950 text-white min-h-[220px] p-4 transition-all hover:border-pink-500 dark:hover:border-pink-500 hover:shadow-md"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/30 z-0" />
              
              <div className="relative z-10 flex items-center justify-between">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-white/20 backdrop-blur-md text-white">
                  {reel.tag}
                </span>
                <span className="text-[11px] font-mono text-slate-300 bg-black/40 px-1.5 py-0.5 rounded">
                  {reel.duration}
                </span>
              </div>

              <div className="relative z-10 my-auto flex justify-center py-4">
                <div className="w-11 h-11 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-rose-600 transition-all">
                  <svg className="w-5 h-5 translate-x-[-1px]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>

              <div className="relative z-10">
                <span className="text-[10px] text-pink-300 block mb-1">
                  {reel.topic}
                </span>
                {/* اصلاح به h3 برای استاندارد سئو و دسترسی‌پذیری */}
                <h3 className="text-xs sm:text-sm font-bold text-white leading-snug group-hover:text-pink-200 transition-colors mb-2">
                  {reel.title}
                </h3>
                <div className="flex items-center justify-between text-[10px] text-slate-300 pt-2 border-t border-white/15">
                  <span>{reel.views} بازدید متخصصین</span>
                  <span className="text-pink-400 font-semibold group-hover:translate-x-[-2px] transition-transform">
                    پخش ویدیو ←
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}