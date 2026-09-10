import { Product } from "../types";

interface ProductSpecTableProps {
  product: Product;
}

export function ProductSpecTable({ product }: ProductSpecTableProps) {
  return (
    <div className="space-y-6 text-xs sm:text-sm">
      
      {/* شرح کاربرد و بررسی فنی */}
      <div className="rounded-2xl border border-slate-200 dark:border-industrial-800 bg-white dark:bg-industrial-900 p-5 sm:p-7 shadow-2xs">
        <h2 className="text-base font-extrabold text-slate-900 dark:text-white mb-3">
          معرفی و مشخصات کاربری {product.name}
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          {product.fullDescription || product.shortDescription}
        </p>
      </div>

      {/* جدول پلاک‌خوانی مشخصات الکترومکانیکی */}
      <div className="rounded-2xl border border-slate-200 dark:border-industrial-800 bg-white dark:bg-industrial-900 overflow-hidden shadow-2xs">
        <div className="p-4 sm:p-5 border-b border-slate-100 dark:border-industrial-800 bg-slate-50/70 dark:bg-industrial-950/60 flex items-center justify-between">
          <h3 className="text-sm font-extrabold text-slate-900 dark:text-white">
            جدول مشخصات فنی و پلاک استاندارد کارخانه
          </h3>
          <span className="text-[11px] font-mono text-slate-400">NAMEPLATE DATA</span>
        </div>

        <div className="divide-y divide-slate-100 dark:divide-industrial-800">
          {product.specs.map((spec, idx) => (
            <div
              key={idx}
              className="grid grid-cols-1 sm:grid-cols-3 p-3.5 sm:p-4 text-xs hover:bg-slate-50/50 dark:hover:bg-industrial-950/40 transition-colors"
            >
              <span className="text-slate-500 dark:text-slate-400 font-medium">
                {spec.key}
              </span>
              <span className="sm:col-span-2 font-bold text-slate-900 dark:text-slate-100 mt-1 sm:mt-0 font-sans">
                {spec.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ماتریس سازگاری فنی با سایر قطعات */}
      <div className="rounded-2xl border border-slate-200 dark:border-industrial-800 bg-white dark:bg-industrial-900 p-5 sm:p-6 shadow-2xs">
        <h3 className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
          <span>⚙️</span>
          <span>سازگاری تاییدشده با سیستم‌ها و تجهیزات جانبی</span>
        </h3>
        <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
          این قطعه از نظر ابعاد شاسی، پالس‌های انکودر و مدارهای ایمنی با تجهیزات زیر آزمون شده است:
        </p>

        <div className="space-y-2">
          {product.compatibility.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300 p-2.5 rounded-lg bg-slate-50 dark:bg-industrial-950 border border-slate-100 dark:border-industrial-800/80"
            >
              <span className="text-emerald-500 font-bold shrink-0">✓</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* بخش دانلود اسناد و کاتالوگ‌های فنی */}
      {product.docs && product.docs.length > 0 && (
        <div className="rounded-2xl border border-slate-200 dark:border-industrial-800 bg-white dark:bg-industrial-900 p-5 sm:p-6 shadow-2xs">
          <h3 className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
            <span>📥</span>
            <span>نقشه‌ها و اسناد فنی قابل دریافت (Datasheet & Drawings)</span>
          </h3>

          <div className="space-y-2.5">
            {product.docs.map((doc, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-3 rounded-lg border border-slate-200 dark:border-industrial-800 bg-slate-50/50 dark:bg-industrial-950 hover:border-slate-300 transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <span className="w-7 h-7 rounded bg-rose-50 text-rose-600 dark:bg-rose-950/40 dark:text-rose-400 font-bold text-[10px] flex items-center justify-center font-mono">
                    {doc.type}
                  </span>
                  <div>
                    <span className="text-xs font-bold text-slate-800 dark:text-slate-200 block">
                      {doc.title}
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono">
                      حجم فایل: {doc.size}
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  className="px-3 h-8 rounded-md bg-slate-100 hover:bg-slate-200 dark:bg-industrial-800 dark:hover:bg-industrial-700 text-xs font-semibold text-slate-800 dark:text-slate-200 transition-colors"
                >
                  دانلود مستند
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}