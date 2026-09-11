import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getProjectBySlug, getProjects } from "@/features/projects/api";
import { ProjectMediaGallery } from "@/features/projects/components/project-media-gallery";
import { ProjectBeforeAfter } from "@/features/projects/components/project-before-after";
import { ProjectTimeline } from "@/features/projects/components/project-timeline";
import { ProjectCommissioningTests } from "@/features/projects/components/project-commissioning-tests";
import { ProjectRoiImpact } from "@/features/projects/components/project-roi-impact";
import { ProjectTestimonial } from "@/features/projects/components/project-testimonial";
import { Badge } from "@/components/ui/badge";

interface ProjectDetailPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectDetailPageProps): Promise<Metadata> {
  const project = await getProjectBySlug(params.slug);
  if (!project) {
    return {
      title: "پروژه مورد نظر یافت نشد | لیفتالند",
    };
  }

  return {
    title: `${project.title} | مستندات و پرونده فنی پروژه | لیفتالند`,
    description: project.solution,
  };
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const project = await getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="w-full pb-16 sm:pb-20 space-y-6 sm:space-y-8">
      
      {/* ۱. سربرگ فشرده و ارگونومیک پرونده مهندسی (بهینه‌سازی ویژه موبایل) */}
      <section className="w-full border-b border-slate-200 dark:border-industrial-800 bg-slate-50/80 dark:bg-industrial-950/60 py-3 sm:py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-2.5 sm:space-y-3.5">
          
          {/* مسیر ناوبری فشرده */}
          <nav className="flex items-center gap-1.5 text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium overflow-x-auto whitespace-nowrap scrollbar-none">
            <Link href="/" className="hover:text-slate-900 dark:hover:text-white transition-colors">
              صفحه اصلی
            </Link>
            <span className="text-slate-300 dark:text-slate-600">/</span>
            <Link href="/projects" className="hover:text-slate-900 dark:hover:text-white transition-colors">
              پروژه‌ها
            </Link>
            <span className="text-slate-300 dark:text-slate-600">/</span>
            <span className="text-slate-900 dark:text-slate-100 font-bold truncate">
              {project.title}
            </span>
          </nav>

          {/* نشان‌ها و متاداده فشرده */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            <Badge variant="warning" className="text-[10px] sm:text-xs py-0.5 px-2">
              {project.categoryLabel}
            </Badge>
            <span className="text-[11px] font-bold text-slate-700 dark:text-slate-300">
              {project.buildingType}
            </span>
            <span className="text-slate-300 dark:text-slate-700">•</span>
            <span className="text-[11px] text-slate-500 dark:text-slate-400">
              {project.location}
            </span>
            <span className="text-slate-300 dark:text-slate-700 hidden sm:inline">•</span>
            <span className="text-[11px] text-slate-400 font-mono hidden sm:inline">
              تحویل: {project.completionDate}
            </span>
          </div>

          {/* تیتر بهینه و متوازن */}
          <h1 className="text-base sm:text-2xl lg:text-3xl font-black text-slate-900 dark:text-white tracking-tight leading-snug max-w-4xl">
            {project.title}
          </h1>

          {/* نوار ۴ گانه فشرده و یک‌سطری مشخصات شفت */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2.5 border-t border-slate-200/80 dark:border-industrial-800/80 text-[11px] sm:text-xs">
            <div className="flex items-center gap-1.5">
              <span className="text-slate-400">توقف:</span>
              <strong className="text-slate-900 dark:text-white">{project.stops} طبقه</strong>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-slate-400">ظرفیت:</span>
              <strong className="text-slate-900 dark:text-white">{project.capacity}</strong>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-slate-400">تراول:</span>
              <strong className="text-slate-900 dark:text-white">{project.travelHeight || "استاندارد"}</strong>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-slate-400">سرعت:</span>
              <strong className="text-slate-900 dark:text-white font-mono">{project.ratedSpeed || "۱.۰ m/s"}</strong>
            </div>
          </div>

        </div>
      </section>

      {/* کانتینر بدنه مستندات فنی و مهندسی */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
        
        {/* ۲. فریم‌ورک ۳ ستونی چالش، اقدام و دستاورد */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          <div className="rounded-2xl border border-slate-200 dark:border-industrial-800 bg-white dark:bg-industrial-900 p-4 sm:p-6 space-y-2 shadow-xs">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-rose-500" />
              <h2 className="text-xs font-bold text-rose-600 dark:text-rose-400 font-mono tracking-wider">
                ۱. چالش اولیه و عارضه‌یابی
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed text-justify">
              {project.challenge}
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 dark:border-industrial-800 bg-white dark:bg-industrial-900 p-4 sm:p-6 space-y-2 shadow-xs">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-techBlue-500" />
              <h2 className="text-xs font-bold text-techBlue-600 dark:text-blue-400 font-mono tracking-wider">
                ۲. راهکار اجرایی و مداخله فنی
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed text-justify">
              {project.solution}
            </p>
          </div>

          <div className="rounded-2xl border-2 border-safety-500/50 bg-white dark:bg-industrial-900 p-4 sm:p-6 space-y-2 shadow-xs ring-1 ring-safety-500/10">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-safety-500" />
              <h2 className="text-xs font-bold text-safety-600 dark:text-safety-400 font-mono tracking-wider">
                ۳. دستاورد کیفی نهایی
              </h2>
            </div>
            <p className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white leading-relaxed">
              {project.resultMetric}
            </p>
            {project.inspectionCertificate && (
              <div className="pt-2 border-t border-slate-100 dark:border-industrial-800 text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">
                ✓ {project.inspectionCertificate}
              </div>
            )}
          </div>
        </section>

        {/* ۳. اسلایدر تعاملی و کشویی مقایسه قبل و بعد */}
        <section>
          <ProjectBeforeAfter
            beforeImage="https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=1200&q=80"
            afterImage="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80"
            title={project.title}
          />
        </section>

        {/* ۴. گالری تصاویر چندگانه و ویدیو گالری آزمون‌های میدانی */}
        <section className="space-y-3">
          <div className="border-b border-slate-200 dark:border-industrial-800 pb-2">
            <h2 className="text-xs sm:text-sm font-black text-slate-900 dark:text-white">
              مستندات تصویری و ویدیویی کارگاه پروژه
            </h2>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
              شامل تصاویر شفت، موتورخانه و ویدیوی آزمون حرکت بدون ضربه و ترمز اضطراری
            </p>
          </div>

          <ProjectMediaGallery
            mainImage={project.image}
            gallery={project.gallery}
            videos={project.videos}
            projectTitle={project.title}
          />
        </section>

        {/* ۵. خط زمانی فازهای مهندسی پروژه */}
        <section>
          <ProjectTimeline />
        </section>

        {/* ۶. جدول شاخص‌های عملکردی قبل و بعد */}
        {project.metricsComparison && (
          <section className="rounded-2xl border border-slate-200 dark:border-industrial-800 bg-white dark:bg-industrial-900 overflow-hidden shadow-xs">
            <div className="p-4 sm:p-5 border-b border-slate-100 dark:border-industrial-800 bg-slate-50/70 dark:bg-industrial-950/60 flex items-center justify-between">
              <div>
                <h2 className="text-xs sm:text-sm font-black text-slate-900 dark:text-white">
                  ماتریس ارزیابی شاخص‌های فنی: پیش و پس از اجرای پروژه
                </h2>
                <span className="text-[11px] text-slate-400">سنجش دقیق مصرف برق، نویز و خطای تراز ایستگاه‌ها</span>
              </div>
              <span className="text-[10px] font-mono text-slate-400 bg-slate-100 dark:bg-industrial-800 px-2 py-0.5 rounded">
                VERIFIED METRICS
              </span>
            </div>

            <div className="divide-y divide-slate-100 dark:divide-industrial-800 text-xs">
              {project.metricsComparison.map((m, idx) => (
                <div key={idx} className="grid grid-cols-1 sm:grid-cols-3 p-3.5 sm:p-4 gap-2.5 items-center">
                  <span className="font-extrabold text-slate-800 dark:text-slate-200 text-xs sm:text-sm">
                    {m.label}
                  </span>
                  <div className="p-2 rounded-lg bg-rose-50/60 dark:bg-rose-950/20 border border-rose-200/50 dark:border-rose-800/30 text-rose-700 dark:text-rose-400 font-medium text-[11px]">
                    <span className="text-[10px] block text-rose-500">وضعیت قبل از مداخله:</span>
                    {m.before}
                  </div>
                  <div className="p-2 rounded-lg bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-200/50 dark:border-emerald-800/30 text-emerald-800 dark:text-emerald-300 font-extrabold text-[11px]">
                    <span className="text-[10px] block text-emerald-600 dark:text-emerald-400">نتیجه پس از تحویل:</span>
                    {m.after}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ۷. کارنامه آزمون‌های تحویل رسمی و استاندارد */}
        <section>
          <ProjectCommissioningTests />
        </section>

        {/* ۸. تحلیل اقتصادی و ROI پروژه */}
        <section>
          <ProjectRoiImpact />
        </section>

        {/* ۹. رضایت‌نامه رسمی مدیر مجتمع */}
        <section>
          <ProjectTestimonial />
        </section>

        {/* ۱۰. پکینگ‌لیست تجهیزات نصب‌شده با لینک به کاتالوگ */}
        {project.installedProducts && project.installedProducts.length > 0 && (
          <section className="rounded-2xl border border-slate-200 dark:border-industrial-800 bg-white dark:bg-industrial-900 p-4 sm:p-6 shadow-xs space-y-3.5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-100 dark:border-industrial-800 gap-1.5">
              <div>
                <h2 className="text-xs sm:text-sm font-black text-slate-900 dark:text-white">
                  فهرست تجهیزات استاندارد نصب‌شده در این پروژه (BOM Ledger)
                </h2>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">
                  تامین مستقیم از انبار مرکزی لیفتالند با پارت‌نامبر رسمی کارخانه سازنده:
                </p>
              </div>
              <span className="text-[10px] font-mono text-slate-400">100% GENUINE PARTS</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
              {project.installedProducts.map((prod, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-3 rounded-xl border border-slate-100 dark:border-industrial-800 bg-slate-50/70 dark:bg-industrial-950/60"
                >
                  <div className="min-w-0 pr-1">
                    <h3 className="font-bold text-slate-900 dark:text-white text-xs truncate">
                      {prod.name}
                    </h3>
                    <span className="text-[10px] font-mono text-slate-400 block">
                      پارت‌نامبر: {prod.partNumber}
                    </span>
                  </div>

                  {prod.productSlug && (
                    <Link
                      href={`/products/${prod.productSlug}`}
                      className="px-2.5 py-1 rounded-lg bg-white dark:bg-industrial-800 border border-slate-200 dark:border-industrial-700 text-techBlue-600 dark:text-blue-400 hover:bg-slate-50 dark:hover:bg-industrial-700 font-bold text-[10px] whitespace-nowrap shrink-0 transition-colors shadow-2xs"
                    >
                      بررسی قطعه ←
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ۱۱. بنر دعوت به کارشناسی پروژه مشابه */}
        <section className="rounded-2xl border-2 border-safety-500 bg-industrial-900 text-white dark:bg-industrial-900 p-6 sm:p-10 text-center shadow-lg">
          <div className="max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold text-safety-400 tracking-wider font-mono block">
              ON-SITE PROJECT AUDIT & INQUIRY
            </span>
            <h2 className="text-base sm:text-2xl font-black leading-snug">
              آسانسور ساختمان شما هم نیاز به ارتقا به سیستم‌های کم‌مصرف دارد؟
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              سرپرستان پروژه‌های لیفتالند آماده‌اند با بازدید حضوری اولیه، وضعیت موتورخانه و شفت ساختمان شما را بر اساس استانداردهای این پروژه ممیزی نمایند.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center h-11 px-6 rounded-xl bg-safety-500 hover:bg-safety-600 text-industrial-950 font-extrabold text-xs sm:text-sm transition-all shadow-xs"
              >
                ثبت درخواست بازدید کارشناسی پروژه
              </Link>
              <a
                href="tel:02188880000"
                className="w-full sm:w-auto inline-flex items-center justify-center h-11 px-5 rounded-xl border border-slate-400 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm transition-colors gap-2"
              >
                <span>تماس با سرپرست پروژه‌ها:</span>
                <span className="dir-ltr font-sans font-bold">۰۲۱ - ۸۸۸۸ ۰۰۰۰</span>
              </a>
            </div>
          </div>
        </section>

      </main>

    </div>
  );
}