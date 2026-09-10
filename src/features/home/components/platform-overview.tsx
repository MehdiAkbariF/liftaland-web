export function PlatformOverview() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="rounded-2xl border border-slate-200 dark:border-industrial-800 bg-white dark:bg-industrial-900 p-6 sm:p-8 lg:p-10 shadow-xs">
        
        {/* تیتر اصلی بخش مرجع */}
        <div className="mb-6 pb-4 border-b border-slate-100 dark:border-industrial-800">
          <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 font-mono tracking-wider block mb-1">
            LIFTALAND COMPREHENSIVE OVERVIEW
          </span>
          <h2 className="text-base sm:text-xl font-extrabold text-slate-900 dark:text-white leading-snug">
            لیفتالند؛ سامانه مرجع خدمات تخصصی مهندسی و زنجیره تامین قطعات آسانسور در ایران
          </h2>
        </div>

        {/* متن تفصیلی دو ستونی با تایپوگرافی خوانا */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          
          {/* ستون راست: حوزه خدمات مهندسی و استانداردسازی */}
          <div className="space-y-3.5">
            <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-safety-500" />
              <span>پایش مستمر ایمنی، سرویس دوره‌ای و اخذ گواهی استاندارد</span>
            </h3>
            <p>
              آسانسور یکی از حساس‌ترین سامانه‌های مکانیکی و الکتریکی در هر ساختمان است که با جان ساکنین و کاربران ارتباط مستقیم دارد. پلتفرم لیفتالند با هدف حذف رویه‌های سنتی و غیرشفاف، سامانه‌ای مدون برای **سرویس و نگهداری دوره‌ای ماهانه** بر مبنای چک‌لیست ۴۲ گانه اتحادیه و سازمان ملی استاندارد ایجاد کرده است.
            </p>
            <p>
              تیم‌های مهندسی لیفتالند علاوه بر پایش ماهانه، کلیه مراحل مربوط به **اخذ تاییدیه استاندارد ادواری و اولیه** را از بازرسی میدانی و رفع عدم‌انطباق‌ها (مانند لقی ریل‌ها، وضعیت میکروسوییچ‌های ایمنی، بافرها و فلکه هرزگرد) تا روز آزمون رسمی بازرس کشوری مدیریت می‌کنند تا هیچ‌گونه خللی در پوشش بیمه‌ای ساختمان رخ ندهد.
            </p>
          </div>

          {/* ستون چپ: اصالت پارت‌نامبر قطعات و پیوند با خدمات */}
          <div className="space-y-3.5">
            <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-techBlue-600 dark:bg-blue-400" />
              <span>تامین بی‌واسطه قطعات اورجینال با شناسه فنی کارخانه</span>
            </h3>
            <p>
              یکی از عمده‌ترین دلایل خرابی مکرر آسانسورها، استفاده از قطعات یدکی تقلبی یا ناسازگار در بازار است. لیفتالند به عنوان **مرجع معرفی و عرضه قطعات فنی**، قطعات حساس از جمله موتورهای گیرلس و گیربکس‌دار، تابلوهای فرمان هوشمند VVVF، پاراشوت و گاورنرهای استاندارد را تنها با پارت‌نامبر رسمی، دیتاشیت سازنده و گواهی اصالت آزمایشگاهی معرفی می‌کند.
            </p>
            <p>
              پیوند میان واحد خدمات و زنجیره تامین قطعات باعث می‌شود کارفرما در هنگام نوسازی (Modernization) یا تعمیرات اساسی، قطعه را مستقیماً و با قیمت کارشناسی دریافت کند و کلیه مراحل اجرایی از گارانتی معتبر و پشتیبانی ۲۴ ساعته برخوردار باشد.
            </p>
          </div>

        </div>

        {/* پلاک‌های فنی و استانداردهای مرجع زیر متن */}
        <div className="mt-8 pt-5 border-t border-slate-100 dark:border-industrial-800 flex flex-wrap items-center justify-between gap-3 text-[11px] text-slate-500 dark:text-slate-400">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-semibold text-slate-700 dark:text-slate-300">استانداردهای مرجع:</span>
            <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-industrial-800 font-mono">ISIRI 6303-1</span>
            <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-industrial-800 font-mono">EN 81-20</span>
            <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-industrial-800 font-mono">EN 81-50</span>
          </div>
          <span className="font-medium text-safety-700 dark:text-safety-400">
            پوشش سراسری خدمات و تامین قطعات در تهران و کلان‌شهرها
          </span>
        </div>

      </div>
    </section>
  );
}