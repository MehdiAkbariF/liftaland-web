import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-industrial-800 bg-slate-50 dark:bg-industrial-950 text-slate-600 dark:text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          <div className="md:col-span-1">
            <h4 className="font-bold text-sm text-slate-900 dark:text-slate-100 mb-3">
              لیفتالند (Liftaland)
            </h4>
            <p className="leading-relaxed mb-4">
              مرجع تخصصی مهندسی و تامین قطعات سیستم‌های بالابر و آسانسور بر اساس استانداردهای بین‌المللی EN 81-20 و EN 81-50.
            </p>
            <div className="text-[11px] text-slate-500 font-mono">
              ENGINEERED FOR VERTICAL MOBILITY
            </div>
          </div>

          <div>
            <h5 className="font-semibold text-slate-900 dark:text-slate-200 mb-3">
              دسته‌بندی تجهیزات
            </h5>
            <ul className="space-y-2">
              <li>
                <Link href="/products?category=traction" className="hover:underline">
                  موتورهای گیربکس و گیرلس
                </Link>
              </li>
              <li>
                <Link href="/products?category=controller" className="hover:underline">
                  تابلوهای فرمان و درایو VVVF
                </Link>
              </li>
              <li>
                <Link href="/products?category=safety" className="hover:underline">
                  پاراشوت، گاورنر و ضربه‌گیرها
                </Link>
              </li>
              <li>
                <Link href="/products?category=doors" className="hover:underline">
                  مکانیزم و درب‌های تمام‌اتوماتیک
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold text-slate-900 dark:text-slate-200 mb-3">
              خدمات اجرایی
            </h5>
            <ul className="space-y-2">
              <li>
                <Link href="/services/preventive-maintenance" className="hover:underline">
                  سرویس و بازرسی دوره‌ای ماهانه
                </Link>
              </li>
              <li>
                <Link href="/services/modernization" className="hover:underline">
                  نوسازی و بازسازی موتورخانه و کابین
                </Link>
              </li>
              <li>
                <Link href="/services/standard-certification" className="hover:underline">
                  اخذ گواهی استاندارد ادواری و اولیه
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold text-slate-900 dark:text-slate-200 mb-3">
              واحد فنی و پشتیبانی
            </h5>
            <div className="space-y-2 text-slate-600 dark:text-slate-400">
              <p>تلفن مهندسی فروش: ۰۲۱-۸۸۸۸۰۰۰۰</p>
              <p>اورژانس خرابی و توقف (۲۴/۷): ۰۲۱-۸۸۸۸۰۰۰۱</p>
              <p>مرکز لجستیک قطعات: تهران، شهرک صنعتی آهن‌مکان</p>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-200 dark:border-industrial-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().toLocaleDateString("fa-IR-u-nu-latn", { year: "numeric" })} تمامی حقوق متعلق به سامانه مهندسی لیفتالند است.</p>
          <div className="flex gap-4">
            <span className="text-slate-400">مطابق با استانداردهای ملی ISIRI</span>
          </div>
        </div>
      </div>
    </footer>
  );
}