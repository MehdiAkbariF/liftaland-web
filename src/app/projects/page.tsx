import type { Metadata } from "next";
import Link from "next/link";
import { getProjects } from "@/features/projects/api";
import { ProjectsHeader } from "@/features/projects/components/projects-header";
import { ProjectCard } from "@/features/projects/components/project-card";

export const metadata: Metadata = {
  title: "نمونه‌کارها و پروژه‌های مهندسی آسانسور | نوسازی، استاندارد و بازرسی | لیفتالند",
  description:
    "مستندات پروژه‌های اجرایی آسانسور شامل نوسازی برج‌های مسکونی با موتورهای گیرلس، رفع عدم‌انطباق و اخذ استاندارد مراکز درمانی و پایش دوره‌ای مجتمع‌های اداری.",
};

interface ProjectsPageProps {
  searchParams: {
    category?: string;
  };
}

export default async function ProjectsPage({ searchParams }: ProjectsPageProps) {
  const projects = await getProjects(searchParams.category);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 space-y-6 pb-20">
      
      {/* سربرگ و فیلترهای دسته‌بندی پروژه‌ها */}
      <ProjectsHeader />

      {/* گرید کارت‌های پرونده فنی پروژه‌ها */}
      <div className="space-y-5">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* بنر اقدام کارشناسی حضوری پروژه شما */}
      <section className="rounded-2xl border-2 border-safety-500 bg-industrial-900 text-white dark:bg-industrial-900 p-6 sm:p-8 text-center shadow-md">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-base sm:text-xl font-extrabold mb-2">
            آیا مایلید وضعیت آسانسور ساختمان شما هم به صورت مهندسی ممیزی شود؟
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
            کارشناسان ارشد لیفتالند می‌توانند جهت ارزیابی لرزش کابین، چک‌لیست استاندارد و برآورد هزینه‌های نوسازی، در محل پروژه شما حضور یابند.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center h-11 px-6 rounded-lg bg-safety-500 hover:bg-safety-600 text-industrial-950 font-extrabold text-xs sm:text-sm transition-colors shadow-2xs"
            >
              ثبت درخواست کارشناسی حضوری پروژه
            </Link>
            <a
              href="tel:02188880000"
              className="w-full sm:w-auto inline-flex items-center justify-center h-11 px-5 rounded-lg border border-slate-400 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm transition-colors gap-2"
            >
              <span>مشاوره تلفنی با سرپرست پروژه‌ها:</span>
              <span className="dir-ltr font-sans">۰۲۱ - ۸۸۸۸ ۰۰۰۰</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}