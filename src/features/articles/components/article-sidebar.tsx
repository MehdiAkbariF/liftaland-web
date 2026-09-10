import Link from "next/link";
import { Article } from "../types";

interface ArticleSidebarProps {
  article: Article;
}

export function ArticleSidebar({ article }: ArticleSidebarProps) {
  return (
    <div className="rounded-2xl border border-slate-200 dark:border-industrial-800 bg-white dark:bg-industrial-900 p-5 sm:p-6 shadow-xs sticky top-20 space-y-5 text-xs">
      
      {/* راهنمای سرفصل‌های این مقاله */}
      <div className="pb-4 border-b border-slate-100 dark:border-industrial-800 space-y-2">
        <span className="text-[10px] font-bold text-slate-400 font-mono block">
          TABLE OF CONTENTS
        </span>
        <h4 className="font-bold text-slate-900 dark:text-white text-xs">
          سرفصل‌های بررسی‌شده در این مقاله:
        </h4>
        <ul className="space-y-1.5 text-slate-600 dark:text-slate-400 text-[11px]">
          {article.sections.map((sec, i) => (
            <li key={i} className="hover:text-techBlue-600 dark:hover:text-blue-400 transition-colors">
              • {sec.heading}
            </li>
          ))}
        </ul>
      </div>

      {/* خدمت مرتبط در صورت بروز این مشکل در ساختمان */}
      {article.relatedServiceSlug && (
        <div className="p-4 rounded-xl border border-safety-200 dark:border-safety-800/40 bg-safety-50/40 dark:bg-safety-950/20 space-y-2">
          <span className="text-[10px] font-bold text-safety-700 dark:text-safety-400 block font-mono">
            ENGINEERING SERVICE SOLUTION
          </span>
          <h4 className="text-xs font-bold text-slate-900 dark:text-white leading-snug">
            {article.relatedServiceTitle}
          </h4>
          <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
            در صورت بروز این چالش در ساختمان، تیم مهندسی لیفتالند آماده ممیزی حضوری است.
          </p>
          <Link
            href={`/services/${article.relatedServiceSlug}`}
            className="inline-flex items-center gap-1 font-bold text-safety-700 dark:text-safety-400 hover:underline pt-1 text-[11px]"
          >
            <span>مشاهده راهکار اجرایی و ثبت درخواست</span>
            <span>←</span>
          </Link>
        </div>
      )}

      {/* قطعه استاندارد مرتبط با موضوع مقاله */}
      {article.relatedProductSlug && (
        <div className="p-4 rounded-xl border border-slate-200 dark:border-industrial-800 bg-slate-50/70 dark:bg-industrial-950 space-y-2">
          <span className="text-[10px] font-bold text-techBlue-600 dark:text-blue-400 block font-mono">
            COMPATIBLE HARDWARE
          </span>
          <h4 className="text-xs font-bold text-slate-900 dark:text-white leading-snug">
            {article.relatedProductTitle}
          </h4>
          <Link
            href={`/products/${article.relatedProductSlug}`}
            className="inline-flex items-center gap-1 font-bold text-techBlue-600 dark:text-blue-400 hover:underline pt-1 text-[11px]"
          >
            <span>بررسی پارت‌نامبر و مشخصات قطعه</span>
            <span>←</span>
          </Link>
        </div>
      )}

      {/* مشاوره مستقیم با کارشناس ناظر */}
      <div className="pt-3 border-t border-slate-100 dark:border-industrial-800 text-center">
        <span className="text-[11px] text-slate-400 block mb-1">
          نیاز به استعلام یا طرح پرسش فنی دارید؟
        </span>
        <a
          href="tel:02188880000"
          className="text-xs font-bold text-slate-800 dark:text-slate-200 hover:text-safety-500 inline-flex items-center gap-1.5"
        >
          <span>مشاوره با مهندس ناظر:</span>
          <span className="dir-ltr font-bold font-sans">۰۲۱ - ۸۸۸۸ ۰۰۰۰</span>
        </a>
      </div>

    </div>
  );
}