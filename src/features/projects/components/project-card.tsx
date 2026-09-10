import Image from "next/image";
import { ProjectItem } from "../types";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  project: ProjectItem;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="flex flex-col lg:flex-row rounded-2xl border border-slate-200 dark:border-industrial-800 bg-white dark:bg-industrial-900 overflow-hidden shadow-xs hover:border-slate-300 dark:hover:border-industrial-700 transition-all">
      
      {/* عکس پروژه با کادر و نسبت استاندارد */}
      <div className="relative aspect-[16/10] lg:aspect-auto lg:w-96 shrink-0 bg-slate-100 dark:bg-industrial-950 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 1024px) 100vw, 400px"
          className="object-cover"
          loading="lazy"
        />

        {/* برچسب‌های شناور روی تصویر با استایل کامپکت و هماهنگ */}
        <div className="absolute top-3 right-3 left-3 flex items-center justify-between pointer-events-none">
          <span className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-slate-900/90 dark:bg-industrial-950/90 text-white border border-white/20 backdrop-blur-xs shadow-xs">
            {project.buildingType}
          </span>
          <span className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-slate-900/90 dark:bg-industrial-950/90 text-slate-200 border border-white/20 backdrop-blur-xs">
            {project.location}
          </span>
        </div>
      </div>

      {/* محتوای پرونده فنی */}
      <div className="p-5 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
        <div>
          {/* مشخصات شفت، دسته و تاریخ تحویل */}
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500 dark:text-slate-400 mb-2.5">
            <div className="flex items-center gap-2">
              <Badge variant="warning">{project.categoryLabel}</Badge>
              <span>•</span>
              <span className="font-medium text-slate-700 dark:text-slate-300">{project.stops} توقف</span>
              <span>•</span>
              <span className="font-medium text-slate-700 dark:text-slate-300">ظرفیت: {project.capacity}</span>
            </div>
            <span className="text-[11px]">تحویل: {project.completionDate}</span>
          </div>

          <h3 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white mb-3 leading-snug">
            {project.title}
          </h3>

          {/* چالش اولیه و راهکار فنی */}
          <div className="space-y-2.5 text-xs text-slate-600 dark:text-slate-300">
            <div>
              <strong className="text-slate-900 dark:text-white block mb-0.5">چالش اولیه ساختمان:</strong>
              <p className="leading-relaxed text-slate-500 dark:text-slate-400">{project.challenge}</p>
            </div>

            <div>
              <strong className="text-slate-900 dark:text-white block mb-0.5">راهکار اجرایی لیفتالند:</strong>
              <p className="leading-relaxed text-slate-700 dark:text-slate-300">{project.solution}</p>
            </div>
          </div>

          {/* تجهیزات شاخص نصب‌شده با بج استاندارد پیش‌فرض */}
          <div className="pt-3 mt-3 border-t border-slate-100 dark:border-industrial-800/80">
            <span className="text-[11px] font-bold text-slate-400 block mb-1.5">
              تجهیزات و پارت‌نامبرهای استاندارد تامین‌شده:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {project.componentsUsed.map((comp, idx) => (
                <Badge key={idx} variant="default" className="text-[11px] font-normal">
                  ✓ {comp}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* شاخص دستاورد نهایی */}
        <div className="pt-3 border-t border-slate-100 dark:border-industrial-800 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <span className="text-emerald-600 dark:text-emerald-400 font-bold">دست‌آورد پروژه:</span>
            <span className="font-extrabold text-slate-900 dark:text-slate-100">
              {project.resultMetric}
            </span>
          </div>
        </div>
      </div>

    </article>
  );
}