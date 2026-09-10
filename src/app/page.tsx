import Link from "next/link";
import { getFeaturedProducts } from "@/features/products/api";
import { getAllServices } from "@/features/services/api";
import { ProductCard } from "@/features/products/components/product-card";
import { HeroSection } from "@/features/home/components/hero-section";

export default async function HomePage() {
  const [products, services] = await Promise.all([
    getFeaturedProducts(),
    getAllServices(),
  ]);

  return (
    <div className="flex flex-col gap-12 sm:gap-16 pb-16">
      {/* 1. Hero Section متمرکز بر معرفی خدمات و قطعات */}
      <HeroSection />

      {/* 2. بخش قطعات پرکاربرد و پرمصرف */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 pb-4 border-b border-slate-200 dark:border-industrial-800 gap-2">
          <div>
            <span className="text-xs font-bold text-safety-600 dark:text-safety-400 tracking-wider">
              ORIGINAL COMPONENTS
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              قطعات مکانیکی و الکتریکی دارای تاییدیه بازرسی
            </h2>
          </div>
          <Link
            href="/products"
            className="text-xs font-bold text-slate-700 dark:text-slate-300 hover:text-techBlue-600 dark:hover:text-blue-400 transition-colors"
          >
            مشاهده تمام قطعات کاتالوگ ←
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* 3. بخش خدمات مهندسی */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="mb-6 pb-4 border-b border-slate-200 dark:border-industrial-800">
          <span className="text-xs font-bold text-safety-600 dark:text-safety-400 tracking-wider">
            TECHNICAL SERVICES
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
            خدمات پشتیبانی، استانداردسازی و بهینه‌سازی
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="flex flex-col justify-between rounded-xl border border-slate-200 dark:border-industrial-800 bg-white dark:bg-industrial-900 p-6 transition-all hover:border-slate-300 dark:hover:border-industrial-700"
            >
              <div>
                <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 block mb-1">
                  مخاطب: {service.targetAudience}
                </span>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  {service.problemSolved}
                </p>

                <div className="space-y-2 mb-6">
                  {service.steps.slice(0, 3).map((step, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-safety-500 mt-1.5 shrink-0" />
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-industrial-800">
                <span className="block text-xs text-slate-500 dark:text-slate-400 mb-3 font-medium">
                  زمان‌بندی: {service.timeline}
                </span>
                <Link
                  href={`/services/${service.slug}`}
                  className="w-full inline-flex items-center justify-center h-9 text-xs font-bold rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-900 dark:bg-industrial-800 dark:text-slate-100 dark:hover:bg-industrial-700 transition-colors"
                >
                  مشاهده جزئیات و ثبت درخواست
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. بخش اعتمادسازی مهندسی */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="rounded-xl border border-slate-200 dark:border-industrial-800 bg-slate-100/70 dark:bg-industrial-900/40 p-6 sm:p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-right">
            <div>
              <div className="text-safety-600 dark:text-safety-400 text-base font-bold mb-1">
                تطابق استاندارد EN 81
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                تمام قطعات حساس ایمنی از قبیل پاراشوت، گاورنر و بافرها تنها همراه با پلاک فلزی و سرتیفیکیت معتبر آزمایشگاهی معرفی و تامین می‌شوند.
              </p>
            </div>
            <div>
              <div className="text-safety-600 dark:text-safety-400 text-base font-bold mb-1">
                پارت‌نامبر و اصالت برند
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                اطلاعات فنی قطعات مستقیماً بر اساس کاتالوگ کارخانه سازنده درج شده تا تکنسین در انتخاب قطعه جایگزین با عدم تطابق روبرو نشود.
              </p>
            </div>
            <div>
              <div className="text-safety-600 dark:text-safety-400 text-base font-bold mb-1">
                پایش فنی پیش از تحویل
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                تست مقاومت عایقی سیم‌پیچ موتورها، سلامت انکودر و مدارات ایمنی تابلو فرمان پیش از ارسال به کارگاه ساختمانی کنترل می‌گردد.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}