import Image from "next/image";
import Link from "next/link";
import { QuickSearch } from "./quick-search";
import { Badge } from "@/components/ui/badge";

export function HeroSection() {
  const operationalMetrics = [
    { title: "ضمانت اصالت قطعات", desc: "کد رهگیری و پلاک رسمی کارخانه سازنده", icon: "🛡️" },
    { title: "زمان اعزام اضطراری", desc: "کمتر از ۴۰ دقیقه با شبکه گشت ۲۴/۷", icon: "⚡" },
    { title: "انطباق آزمون‌ها", desc: "مطابق استانداردهای ملی و EN 81-20/50", icon: "📋" },
    { title: "تحویل مستقیم پروژه‌ای", desc: "ارسال سریع از انبار مرکزی آهن‌مکان", icon: "🚚" },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-industrial-950 text-white -mt-2 sm:-mt-4 min-h-[640px] lg:min-h-[700px] flex items-center">
      
      {/* ۱. تصویر محلی و پرسرعت آسانسور شیشه‌ای پانوراما (بدون وابستگی به اینترنت خارجی) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-elevator.jpg"
          alt="شفت و کابین آسانسور مدرن و تجهیزات حرکتی لیفتالند"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-100"
        />

        {/* گرادیانت تیره برای حفظ وضوح تصویر آسانسور و خوانایی کامل متون */}
        <div className="absolute inset-0 bg-gradient-to-t from-industrial-950 via-industrial-950/75 to-industrial-950/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-industrial-950/90 via-industrial-950/75 to-transparent" />
      </div>

      {/* ۲. محتوای شناور تمام‌عرض روی تصویر آسانسور */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 flex flex-col justify-between">
        
        {/* سربرگ هویت و تیتر اصلی */}
        <div className="w-full max-w-5xl mb-8 sm:mb-10">
          <div className="flex flex-wrap items-center gap-2.5 mb-4">
            <Badge variant="warning" className="shadow-xs">
              مرجع تخصصی صنعت آسانسور ایران
            </Badge>
            <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-200 bg-black/40 px-2.5 py-0.5 rounded-md backdrop-blur-md border border-white/15">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>پایش اصالت قطعات EN 81-20 / EN 81-50</span>
            </div>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.25] mb-4 text-white drop-shadow-md">
            معرفی خدمات تخصصی مهندسی و مرجع تامین قطعات آسانسور
          </h1>

          <p className="text-xs sm:text-base text-slate-200 leading-relaxed max-w-3xl font-medium drop-shadow-xs">
            لیفتالند نقطه اتصال مهندسان، شرکت‌های آسانسور و مدیران ساختمان است؛ با تمرکز بر دو محور اصلی: **معرفی و انتخاب قطعات استاندارد با پارت‌نامبر سازنده** و **آشنایی با خدمات مهندسی بازرسی، نگهداری و استانداردسازی.**
          </p>
        </div>

        {/* دو درگاه اصلی تمام‌عرض و متوازن */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-8 w-full">
          
          {/* درگاه ۱: معرفی و کاتالوگ قطعات */}
          <div className="group flex flex-col justify-between rounded-2xl border border-white/20 bg-slate-950/75 backdrop-blur-md p-6 hover:border-slate-300 hover:bg-slate-950/85 transition-all shadow-xl">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="w-10 h-10 rounded-xl bg-white/15 border border-white/25 text-white flex items-center justify-center font-bold text-lg group-hover:scale-105 transition-transform">
                  ⚙
                </span>
                <span className="text-[11px] font-bold text-slate-300 font-mono tracking-wider">
                  PARTS & HARDWARE
                </span>
              </div>

              <h2 className="text-base sm:text-xl font-extrabold text-white mb-2 group-hover:text-blue-300 transition-colors">
                معرفی و تامین قطعات و تجهیزات
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                بررسی پارت‌نامبرها، دیتاشیت‌های فنی، مشخصات موتورهای گیرلس و گیربکس، تابلوهای فرمان، ترمز ایمنی (پاراشوت) و سیستم‌های درب از برندهای معتبر با برگه آزمون.
              </p>
            </div>

            <Link
              href="/products"
              className="inline-flex items-center justify-center h-11 px-5 rounded-xl bg-white hover:bg-slate-100 text-industrial-950 text-xs sm:text-sm font-extrabold transition-all shadow-md gap-2 select-none"
            >
              <span>ورود به کاتالوگ و مشخصات قطعات</span>
              <span className="text-xs">←</span>
            </Link>
          </div>

          {/* درگاه ۲: معرفی خدمات تخصصی آسانسور */}
          <div className="group flex flex-col justify-between rounded-2xl border border-white/20 bg-slate-950/75 backdrop-blur-md p-6 hover:border-safety-500/80 hover:bg-slate-950/85 transition-all shadow-xl">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="w-10 h-10 rounded-xl bg-safety-500/20 border border-safety-500/40 text-safety-400 flex items-center justify-center font-bold text-lg group-hover:scale-105 transition-transform">
                  🏢
                </span>
                <span className="text-[11px] font-bold text-safety-400 font-mono tracking-wider">
                  ENGINEERING SERVICES
                </span>
              </div>

              <h2 className="text-base sm:text-xl font-extrabold text-white mb-2 group-hover:text-safety-300 transition-colors">
                معرفی خدمات تخصصی مهندسی
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                آشنایی با چک‌لیست سرویس ماهانه، مراحل استانداردسازی ادواری و اولیه، طرح‌های نوسازی (Modernization) و بازرسی عیب‌یابی ارتعاشات کابین با تعهد مکتوب.
              </p>
            </div>

            <Link
              href="/services"
              className="inline-flex items-center justify-center h-11 px-5 rounded-xl bg-safety-500 hover:bg-safety-600 text-industrial-950 text-xs sm:text-sm font-extrabold transition-all shadow-md gap-2 select-none"
            >
              <span>مشاهده و معرفی خدمات مهندسی</span>
              <span className="text-xs">←</span>
            </Link>
          </div>

        </div>

        {/* بخش پایین هیرو: دو ستون متقارن */}
        <div className="pt-6 border-t border-white/20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start w-full">
            
            <div className="w-full">
              <h3 className="text-xs font-bold text-slate-200 mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-safety-500" />
                <span>جستجوی مستقیم قطعه در کاتالوگ بر اساس پارت‌نامبر یا مدل:</span>
              </h3>
              <QuickSearch />
            </div>

            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-2.5 p-3 rounded-xl border border-white/15 bg-slate-950/60 backdrop-blur-md">
              {operationalMetrics.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-2 rounded-lg bg-white/5 border border-white/5">
                  <span className="text-sm shrink-0 mt-0.5">{item.icon}</span>
                  <div>
                    <span className="text-xs font-bold text-slate-100 block leading-tight">
                      {item.title}
                    </span>
                    <span className="text-[10px] text-slate-400 block leading-tight mt-0.5">
                      {item.desc}
                    </span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent absolute bottom-0 left-0 right-0" />
    </section>
  );
}