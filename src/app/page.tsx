import Link from "next/link";
import { getFeaturedProducts } from "@/features/products/api";
import { getAllServices } from "@/features/services/api";
import { ProductCard } from "@/features/products/components/product-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default async function HomePage() {
  const [products, services] = await Promise.all([
    getFeaturedProducts(),
    getAllServices(),
  ]);

  return (
    <div className="flex flex-col gap-16 py-8 sm:py-12">
      {/* 1. Hero Section: شفافیت پیام در نگاه اول */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="rounded-2xl border border-slate-200 dark:border-industrial-800 bg-white dark:bg-industrial-900/60 p-6 sm:p-10 lg:p-12 relative overflow-hidden shadow-sm">
          {/* عنصر گرافیکی ظریف فنی چاهک آسانسور در بک‌گراند */}
          <div className="absolute left-0 top-0 bottom-0 w-1/3 bg-gradient-to-r from-transparent to-slate-50/20 dark:to-industrial-800/10 pointer-events-none hidden lg:block" />

          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <Badge variant="warning">زیرساخت ایمنی و قطعات مکانیکی و الکتریکی</Badge>
              <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">EN 81-20/50 COMPLIANT</span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight mb-4">
              تامین مطمئن قطعات آسانسور و خدمات مهندسی در یک پلتفرم
            </h1>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
              لیفتالند ارتباط مستقیم میان شرکت‌های فنی، سرویس‌کاران و کارفرمایان را با قطعات شناسنامه‌دار، استعلام پارت‌نامبر سازندگان معتبر و خدمات تخصصی نگهداری و اخذ استاندارد برقرار می‌کند.
            </p>

            {/* CTA دوگانه متناسب با دو نوع مخاطب */}
            <div className="flex flex-wrap items-center gap-3">
              <Link href="/products">
                <Button variant="safety" size="lg">
                  جستجو و کاتالوگ قطعات فنی
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" size="lg">
                  درخواست سرویس و بازرسی ادواری
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. بخش قطعات پرکاربرد و پرمصرف ماه */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 pb-4 border-b border-slate-200 dark:border-industrial-800 gap-2">
          <div>
            <span className="text-xs font-semibold text-safety-600 dark:text-safety-400 tracking-wider">
              ORIGINAL COMPONENTS
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              قطعات مکانیکی و الکتریکی دارای تاییدیه بازرسی
            </h2>
          </div>
          <Link
            href="/products"
            className="text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-techBlue-600 dark:hover:text-blue-400 transition-colors"
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

      {/* 3. بخش خدمات مهندسی: تشریح دقیق برای کارفرما و مدیر ساختمان */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="mb-6 pb-4 border-b border-slate-200 dark:border-industrial-800">
          <span className="text-xs font-semibold text-safety-600 dark:text-safety-400 tracking-wider">
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
              className="flex flex-col justify-between rounded-lg border border-slate-200 dark:border-industrial-800 bg-white dark:bg-industrial-900 p-6"
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
                <span className="block text-[11px] text-slate-400 mb-2 font-mono">
                  زمان‌بندی: {service.timeline}
                </span>
                <Link
                  href={`/services/${service.slug}`}
                  className="w-full inline-flex items-center justify-center h-9 text-xs font-medium rounded bg-slate-100 hover:bg-slate-200 text-slate-900 dark:bg-industrial-800 dark:text-slate-100 dark:hover:bg-industrial-700 transition-colors"
                >
                  مشاهده جزئیات و ثبت درخواست
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. بخش اعتمادسازی مهندسی (بدون بج‌های کلیشه‌ای) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="rounded-xl border border-slate-200 dark:border-industrial-800 bg-slate-100/70 dark:bg-industrial-900/40 p-6 sm:p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-right">
            <div>
              <div className="text-safety-600 dark:text-safety-400 font-mono text-lg font-bold mb-1">
                تطابق استاندارد EN 81
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                تمام قطعات حساس ایمنی از قبیل پاراشوت، گاورنر و بافرها تنها همراه با پلاک فلزی و سرتیفیکیت معتبر آزمایشگاهی عرضه می‌شوند.
              </p>
            </div>
            <div>
              <div className="text-safety-600 dark:text-safety-400 font-mono text-lg font-bold mb-1">
                پارت‌نامبر و اصالت برند
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                عدم استفاده از قطعات کارگاهی بدون هدر؛ قطعات بر اساس کد فنی کارخانه تامین و در سامانه ثبت می‌شوند.
              </p>
            </div>
            <div>
              <div className="text-safety-600 dark:text-safety-400 font-mono text-lg font-bold mb-1">
                پایش فنی پیش از تحویل
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                تست عایقی سیم‌پیچ موتورها، صحت انکودر و عملکرد مدارهای ایمنی تابلو پیش از ارسال به پروژه کنترل می‌گردد.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}