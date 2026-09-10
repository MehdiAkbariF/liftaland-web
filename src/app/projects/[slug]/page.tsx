import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getProjectBySlug, getProjects } from "@/features/projects/api";
import { ProjectDetailHeader } from "@/features/projects/components/project-detail-header";
import { ProjectSidebar } from "@/features/projects/components/project-sidebar";
import { ProjectMediaGallery } from "@/features/projects/components/project-media-gallery";

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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 space-y-6 pb-20">
      
      {/* سربرگ مشخصات پروژه */}
      <ProjectDetailHeader project={project} />

      {/* چیدمان دو ستونی: پرونده فنی (۸ ستون) + سایدبار استعلام (۴ ستون) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start relative">
        
        {/* ستون اصلی پرونده مهندسی */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* گالری تصاویر چندگانه و ویدیو گالری درون سایت + اینستاگرام */}
          <ProjectMediaGallery
            mainImage={project.image}
            gallery={project.gallery}
            videos={project.videos}
            projectTitle={project.title}
          />

          {/* ۱. شناسنامه فنی شفت و ساختار فیزیکی آسانسور پروژه */}
          <div className="rounded-2xl border border-slate-200 dark:border-industrial-800 bg-white dark:bg-industrial-900 p-5 sm:p-6 shadow-2xs">
            <h2 className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-safety-500" />
              <span>مشخصات فنی شفت و ساختار فیزیکی پروژه</span>
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              <div className="p-3 rounded-lg bg-slate-50 dark:bg-industrial-950 border border-slate-100 dark:border-industrial-800">
                <span className="text-[11px] text-slate-400 block mb-1">تعداد توقف:</span>
                <span className="font-bold text-slate-900 dark:text-white">{project.stops} ایستگاه</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-50 dark:bg-industrial-950 border border-slate-100 dark:border-industrial-800">
                <span className="text-[11px] text-slate-400 block mb-1">ظرفیت کابین:</span>
                <span className="font-bold text-slate-900 dark:text-white">{project.capacity}</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-50 dark:bg-industrial-950 border border-slate-100 dark:border-industrial-800">
                <span className="text-[11px] text-slate-400 block mb-1">ارتفاع تراول:</span>
                <span className="font-bold text-slate-900 dark:text-white">{project.travelHeight || "استاندارد"}</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-50 dark:bg-industrial-950 border border-slate-100 dark:border-industrial-800">
                <span className="text-[11px] text-slate-400 block mb-1">سرعت خطی:</span>
                <span className="font-bold text-slate-900 dark:text-white">{project.ratedSpeed || "۱.۰ m/s"}</span>
              </div>
            </div>
          </div>

          {/* ۲. تحلیل عارضه‌یابی چالش اولیه و اقدام اجرایی */}
          <div className="rounded-2xl border border-slate-200 dark:border-industrial-800 bg-white dark:bg-industrial-900 p-5 sm:p-7 shadow-2xs space-y-4 text-xs sm:text-sm">
            <div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-1.5 flex items-center gap-2">
                <span>⚠️</span>
                <span>عارضه‌یابی و چالش اولیه کارفرما:</span>
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed bg-slate-50 dark:bg-industrial-950 p-3.5 rounded-xl border border-slate-100 dark:border-industrial-800/80">
                {project.challenge}
              </p>
            </div>

            <div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-1.5 flex items-center gap-2">
                <span>🛠️</span>
                <span>راهکار مهندسی و اقدامات اجرایی لیفتالند:</span>
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed bg-slate-50 dark:bg-industrial-950 p-3.5 rounded-xl border border-slate-100 dark:border-industrial-800/80">
                {project.solution}
              </p>
            </div>
          </div>

          {/* ۳. جدول اندازه‌گیری شاخص‌ها: قبل و بعد از اجرای پروژه */}
          {project.metricsComparison && (
            <div className="rounded-2xl border border-slate-200 dark:border-industrial-800 bg-white dark:bg-industrial-900 overflow-hidden shadow-2xs">
              <div className="p-4 sm:p-5 border-b border-slate-100 dark:border-industrial-800 bg-slate-50/70 dark:bg-industrial-950/60 flex items-center justify-between">
                <h3 className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white">
                  مقایسه شاخص‌های عملکردی: قبل و بعد از اجرای پروژه
                </h3>
                <span className="text-[11px] font-mono text-slate-400">MEASURED METRICS</span>
              </div>

              <div className="divide-y divide-slate-100 dark:divide-industrial-800 text-xs">
                {project.metricsComparison.map((m, idx) => (
                  <div key={idx} className="grid grid-cols-1 sm:grid-cols-3 p-4 gap-2 items-center">
                    <span className="font-bold text-slate-800 dark:text-slate-200">{m.label}</span>
                    <span className="text-rose-600 dark:text-rose-400 font-medium">وضعیت قبل: {m.before}</span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold">وضعیت بعد: {m.after}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ۴. تجهیزات نصب‌شده با اتصال مستقیم به کاتالوگ قطعات (Product Synergy) */}
          {project.installedProducts && project.installedProducts.length > 0 && (
            <div className="rounded-2xl border border-slate-200 dark:border-industrial-800 bg-white dark:bg-industrial-900 p-5 sm:p-6 shadow-2xs">
              <h3 className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                <span>⚙️</span>
                <span>قطعات اورجینال تامین و نصب‌شده در این پروژه</span>
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
                مشخصات فنی و پارت‌نامبر قطعات استفاده شده در این پروژه را می‌توانید در کاتالوگ بررسی فرمایید:
              </p>

              <div className="space-y-2.5">
                {project.installedProducts.map((prod, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col sm:flex-row sm:items-center justify-between p-3.5 rounded-xl border border-slate-200 dark:border-industrial-800 bg-slate-50/70 dark:bg-industrial-950 gap-2"
                  >
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 dark:text-slate-100">
                        {prod.name}
                      </h4>
                      <span className="text-[11px] font-mono text-slate-400">
                        کد پارت‌نامبر: {prod.partNumber}
                      </span>
                    </div>

                    {prod.productSlug && (
                      <Link
                        href={`/products/${prod.productSlug}`}
                        className="inline-flex items-center gap-1 text-xs font-bold text-techBlue-600 dark:text-blue-400 hover:underline shrink-0"
                      >
                        <span>مشاهده مشخصات و قیمت قطعه</span>
                        <span>←</span>
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ۵. تاییدیه استاندارد نهایی */}
          {project.inspectionCertificate && (
            <div className="p-4 rounded-xl border border-emerald-200 dark:border-emerald-800/40 bg-emerald-50/50 dark:bg-emerald-950/30 text-xs text-emerald-800 dark:text-emerald-300 flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
              <span className="font-semibold">{project.inspectionCertificate}</span>
            </div>
          )}

        </div>

        {/* سایدبار چسبان استعلام پروژه مشابه (۴ ستون) */}
        <aside className="lg:col-span-4 w-full sticky top-20 z-10">
          <ProjectSidebar projectTitle={project.title} />
        </aside>

      </div>
    </div>
  );
}