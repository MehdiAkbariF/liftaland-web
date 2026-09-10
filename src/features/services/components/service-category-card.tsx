import Link from "next/link";
import { ServiceItem } from "../types";

interface ServiceCategoryCardProps {
  service: ServiceItem;
  index: number;
}

export function ServiceCategoryCard({ service, index }: ServiceCategoryCardProps) {
  return (
    <article
      id={service.slug}
      className="flex flex-col justify-between rounded-2xl border border-slate-200 dark:border-industrial-800 bg-white dark:bg-industrial-900 p-6 sm:p-7 hover:border-slate-300 dark:hover:border-industrial-700 transition-all shadow-xs"
    >
      <div>
        {/* شناسه خدمت با کنتراست بالا و کاملاً سازگار با دارک‌مود */}
        <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-100 dark:border-industrial-800">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-bold bg-slate-100 dark:bg-industrial-800 text-slate-900 dark:text-slate-100 border border-slate-200 dark:border-industrial-700 font-mono">
              SRV-0{index + 1}
            </span>
            <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
              {service.title}
            </span>
          </div>
          <span className="text-[11px] text-slate-400">
            {service.targetAudience}
          </span>
        </div>

        {/* شرح عملیاتی */}
        <p className="text-xs sm:text-sm text-safety-600 dark:text-safety-400 font-bold mb-3 leading-normal">
          {service.tagline}
        </p>

        <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
          {service.problemSolved}
        </p>

        {/* چک‌لیست اقدامات اجرایی */}
        <div className="space-y-2 p-3.5 rounded-xl bg-slate-50 dark:bg-industrial-950 border border-slate-100 dark:border-industrial-800/80 mb-6">
          <span className="text-[11px] font-bold text-slate-600 dark:text-slate-400 block mb-1">
            شرح اقدامات و پروتکل فنی در محل:
          </span>
          {service.steps.map((step, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
              <span className="text-safety-500 font-bold shrink-0">✓</span>
              <span>{step}</span>
            </div>
          ))}
        </div>
      </div>

      {/* بخش تعهد زمانی و اکشن */}
      <div className="pt-4 border-t border-slate-100 dark:border-industrial-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div>
          <span className="block text-[11px] text-slate-400">تعهد زمانی اجرا و تحویل:</span>
          <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
            {service.timeline}
          </span>
        </div>

        <Link
          href={`/services/${service.slug}`}
          className="w-full sm:w-auto inline-flex items-center justify-center px-4 h-10 rounded-lg bg-industrial-900 hover:bg-industrial-800 text-white dark:bg-white dark:text-industrial-950 dark:hover:bg-slate-200 text-xs font-bold transition-colors gap-1.5 whitespace-nowrap shrink-0 shadow-xs"
        >
          <span>مشاهده چک‌لیست و فرم درخواست</span>
          <span>←</span>
        </Link>
      </div>
    </article>
  );
}