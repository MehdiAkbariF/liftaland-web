import Link from "next/link";
import { ProjectItem } from "../types";
import { Badge } from "@/components/ui/badge";

interface ProjectDetailHeaderProps {
  project: ProjectItem;
}

export function ProjectDetailHeader({ project }: ProjectDetailHeaderProps) {
  return (
    <div className="w-full pb-4 border-b border-slate-200 dark:border-industrial-800 space-y-3">
      {/* مسیر ناوبری (Breadcrumbs) */}
      <nav className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-medium overflow-x-auto whitespace-nowrap scrollbar-none">
        <Link href="/" className="hover:text-slate-900 dark:hover:text-white transition-colors">
          صفحه اصلی
        </Link>
        <span className="text-slate-300 dark:text-slate-600">/</span>
        <Link href="/projects" className="hover:text-slate-900 dark:hover:text-white transition-colors">
          نمونه‌کارها و پروژه‌ها
        </Link>
        <span className="text-slate-300 dark:text-slate-600">/</span>
        <span className="text-slate-900 dark:text-slate-100 font-bold truncate">
          {project.title}
        </span>
      </nav>

      {/* متاداده و شناسه مهندسی پروژه */}
      <div className="flex flex-wrap items-center gap-2">
        <Badge variant="warning">{project.categoryLabel}</Badge>
        <Badge variant="default">{project.buildingType}</Badge>
        <Badge variant="default">{project.location}</Badge>
        <span className="text-xs text-slate-400 font-mono">
          تحویل: {project.completionDate}
        </span>
      </div>

      <h1 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
        {project.title}
      </h1>
    </div>
  );
}