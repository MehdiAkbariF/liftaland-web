import Link from "next/link";
import { getFeaturedProducts } from "@/features/products/api";
import { ProductCard } from "@/features/products/components/product-card";

export async function PartsSynergy() {
  const products = await getFeaturedProducts();

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* پشتوانه قطعات */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-slate-200 dark:border-industrial-800 gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2.5 h-2.5 rounded-full bg-techBlue-500" />
            <span className="text-xs font-bold text-techBlue-600 dark:text-blue-400 tracking-wider">
              GENUINE PARTS BACKBONE
            </span>
          </div>
          <h2 className="text-xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            پشتوانه تامین مستقیم قطعات استاندارد در خدمات
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-md leading-relaxed">
          تفاوت بارز خدمات لیفتالند: تمام قطعات تعویضی در فرآیند تعمیر و بازسازی، مستقیماً از انبار فنی با پارت‌نامبر سازنده و سرتیفیکیت معتبر آزمایشگاهی تامین می‌شوند.
        </p>
      </div>

      {/* نمایش نمونه قطعات شناسنامه‌دار */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* بنر لینک به کاتالوگ */}
      <div className="rounded-xl border border-slate-200 dark:border-industrial-800 bg-slate-50 dark:bg-industrial-900/60 p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-1">
            آیا تکنسین یا شرکت آسانسوری هستید و به دیتاشیت قطعات نیاز دارید؟
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            مشخصات فنی و پارت‌نامبرهای موتور، تابلو فرمان، پاراشوت و درب‌ها را در کاتالوگ تخصصی بررسی کنید.
          </p>
        </div>
        <Link
          href="/products"
          className="inline-flex items-center justify-center px-4 h-9 rounded-lg bg-industrial-900 hover:bg-industrial-800 text-white dark:bg-white dark:text-industrial-950 dark:hover:bg-slate-200 text-xs font-bold transition-colors shrink-0"
        >
          ورود به کاتالوگ قطعات ←
        </Link>
      </div>
    </section>
  );
}