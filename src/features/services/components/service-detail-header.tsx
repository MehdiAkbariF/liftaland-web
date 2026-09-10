import Link from "next/link";
import { ServiceItem } from "../types";

interface ServiceDetailHeaderProps {
  service: ServiceItem;
}

export function ServiceDetailHeader({ service }: ServiceDetailHeaderProps) {
  return (
    <header className="w-full pt-2 pb-6 border-b border-slate-200 dark:border-industrial-800">
      {/* مسیر ناوبری (Breadcrumbs) */}
      <nav className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 mb-4 font-medium">
        <Link href="/" className="hover:text-slate-900 dark:hover:text-white transition-colors">
          صفحه اصلی
        </Link>
        <span className="text-slate-300 dark:text-slate-600">/</span>
        <Link href="/services" className="hover:text-slate-900 dark:hover:text-white transition-colors">
          خدمات تخصصی
        </Link>
        <span className="text-slate-300 dark:text-slate-600">/</span>
        <span className="text-slate-900 dark:text-slate-100 font-bold">
          {service.title}
        </span>
      </nav>

      {/* متاداده فنی و کد شناسه خدمت */}
      <div className="flex flex-wrap items-center gap-2 mb-3">
        <span className="px-2.5 py-0.5 rounded text-xs font-bold bg-slate-100 dark:bg-industrial-800 text-slate-900 dark:text-slate-100 border border-slate-200 dark:border-industrial-700 font-mono">
          {service.code}
        </span>
        <span className="px-2.5 py-0.5 rounded text-xs font-semibold  dark:bg-safety-950/40 text-safety-700 dark:text-safety-400 border border-safety-200 dark:border-safety-800/40 font-mono">
          {service.standardReference}
        </span>
        <span className="text-xs text-slate-500 dark:text-slate-400">
          مخاطب: {service.targetAudience}
        </span>
      </div>

      {/* تیتر اصلی و شعار فنی */}
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-tight mb-3">
        {service.title}
      </h1>

      <p className="text-xs sm:text-sm text-safety-600 dark:text-safety-400 font-bold leading-relaxed mb-4 max-w-3xl">
        {service.tagline}
      </p>

      {/* شاخص‌های تعهدات خدماتی */}
      <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600 dark:text-slate-300 pt-3 border-t border-slate-100 dark:border-industrial-800/80">
        <div>
          <span className="text-slate-400">تعهد زمانی اجرا: </span>
          <span className="font-bold text-slate-800 dark:text-slate-100">{service.timeline}</span>
        </div>
        <div>
          <span className="text-slate-400">نظارت اجرایی: </span>
          <span className="font-bold text-slate-800 dark:text-slate-100">کارشناس رسمی دارای پروانه</span>
        </div>
      </div>
    </header>
  );
}