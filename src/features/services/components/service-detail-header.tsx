import Link from "next/link";
import { ServiceItem } from "../types";
import { Badge } from "@/components/ui/badge";

interface ServiceDetailHeaderProps {
  service: ServiceItem;
}

export function ServiceDetailHeader({ service }: ServiceDetailHeaderProps) {
  return (
    <header className="w-full pt-1 pb-3 sm:pb-4 border-b border-slate-200 dark:border-industrial-800 space-y-2 sm:space-y-2.5">
      
      {/* مسیر ناوبری فشرده */}
      <nav className="flex items-center gap-1.5 text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium overflow-x-auto whitespace-nowrap scrollbar-none">
        <Link href="/" className="hover:text-slate-900 dark:hover:text-white transition-colors">
          صفحه اصلی
        </Link>
        <span className="text-slate-300 dark:text-slate-600">/</span>
        <Link href="/services" className="hover:text-slate-900 dark:hover:text-white transition-colors">
          خدمات تخصصی
        </Link>
        <span className="text-slate-300 dark:text-slate-600">/</span>
        <span className="text-slate-900 dark:text-slate-100 font-bold truncate">
          {service.title}
        </span>
      </nav>

      {/* متاداده و کد شناسه خدمت با بج‌های استاندارد بدون تیرگی */}
      <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
        <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-slate-100 dark:bg-industrial-800 text-slate-900 dark:text-slate-100 border border-slate-200 dark:border-industrial-700 font-mono">
          {service.code}
        </span>
        <Badge variant="warning" className="text-[10px] sm:text-xs py-0.5 px-2 font-mono">
          {service.standardReference}
        </Badge>
        <span className="text-[11px] text-slate-500 dark:text-slate-400">
          مخاطب: {service.targetAudience}
        </span>
      </div>

      {/* تیتر متوازن و شعار خدمت */}
      <h1 className="text-base sm:text-2xl lg:text-3xl font-black text-slate-900 dark:text-white tracking-tight leading-snug">
        {service.title}
      </h1>

      <p className="text-[11px] sm:text-xs text-safety-600 dark:text-safety-400 font-bold leading-normal max-w-2xl">
        {service.tagline}
      </p>

      {/* شاخص‌های تعهد در یک خط باریک */}
      <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-[11px] text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-100 dark:border-industrial-800/80">
        <div>
          <span>تعهد زمانی: </span>
          <strong className="text-slate-800 dark:text-slate-200">{service.timeline}</strong>
        </div>
        <div>
          <span>نظارت: </span>
          <strong className="text-slate-800 dark:text-slate-200">کارشناس دارای پروانه</strong>
        </div>
      </div>

    </header>
  );
}