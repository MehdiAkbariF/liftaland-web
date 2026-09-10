import { Article } from "../types";
import { Badge } from "@/components/ui/badge";

interface ArticleContentProps {
  article: Article;
}

export function ArticleContent({ article }: ArticleContentProps) {
  return (
    <article className="space-y-8 text-slate-800 dark:text-slate-200">
      
      {/* ۱. شناسنامه تایید و داوری علمی مقاله (Peer-Review Box) */}
      <div className="rounded-xl border border-slate-200 dark:border-industrial-800 bg-slate-50/70 dark:bg-industrial-950 p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-industrial-900 text-white dark:bg-white dark:text-industrial-950 flex items-center justify-center font-black text-sm shrink-0">
            ✓
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-slate-900 dark:text-white">{article.author}</span>
              <span className="text-slate-400 text-[11px]">({article.authorRole})</span>
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
              ممیزی و تایید انطباق: کمیته فنی استاندارد و بازرسی لیفتالند
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 text-[11px] text-slate-400 font-mono">
          <span>انتشار: {article.publishedAt}</span>
          <span>•</span>
          <span>زمان مطالعه: {article.readTime}</span>
        </div>
      </div>

      {/* ۲. چکیده اجرایی و نکات کلیدی (Executive Summary) */}
      <div className="rounded-2xl border-2 border-slate-200 dark:border-industrial-800 bg-white dark:bg-industrial-900 p-6 shadow-xs space-y-3">
        <div className="flex items-center gap-2 mb-1">
          <Badge variant="warning">چکیده اجرایی و نکات کلیدی برای مهندسان</Badge>
          <span className="text-xs text-slate-400 font-mono">EXECUTIVE SUMMARY</span>
        </div>
        <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          {article.keyTakeaways.map((point, idx) => (
            <li key={idx} className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-safety-500 mt-2 shrink-0" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* ۳. بدنه اصلی متن ژورنالی همراه با سرفصل‌ها و جداول */}
      <div className="space-y-8">
        {article.sections.map((sec, idx) => (
          <section key={idx} className="space-y-4">
            <h2 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white flex items-center gap-2.5 pb-2 border-b border-slate-100 dark:border-industrial-800">
              <span className="text-safety-600 dark:text-safety-400 font-mono font-bold">
                § {idx + 1}.۰
              </span>
              <span>{sec.heading}</span>
            </h2>

            <div className="space-y-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-[2] text-justify">
              {sec.paragraphs.map((p, pIdx) => (
                <p key={pIdx}>{p}</p>
              ))}
            </div>

            {/* باکس هشدار بحرانی طبق استاندارد EN 81 */}
            <div className="p-4 rounded-xl border-r-4 border-amber-500 bg-amber-500/5 dark:bg-amber-400/5 border border-slate-200 dark:border-industrial-800 text-xs space-y-1">
              <span className="font-extrabold text-amber-700 dark:text-amber-400 block">
                الزام آیین‌نامه استاندارد ملی ISIRI 6303:
              </span>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                هرگونه تغییر در زاویه شیار فلکه کشش یا تغییر فنربندی ترمز بدون انجام محاسبات کشش (Traction Calculation) می‌تواند موجب سرخوردگی سیم‌بکسل و سوانح سقوط گردد.
              </p>
            </div>

            {/* چک‌لیست کاربردی بخش */}
            {sec.checklist && sec.checklist.length > 0 && (
              <div className="p-4 rounded-xl border border-slate-200 dark:border-industrial-800 bg-slate-50/80 dark:bg-industrial-950/60 space-y-2.5 text-xs">
                <span className="font-extrabold text-slate-900 dark:text-white block mb-1">
                  پروتکل‌های ممیزی در محل موتورخانه:
                </span>
                {sec.checklist.map((item, cIdx) => (
                  <div key={cIdx} className="flex items-start gap-2 text-slate-700 dark:text-slate-300">
                    <span className="text-emerald-500 font-bold shrink-0">✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            )}
          </section>
        ))}
      </div>

      {/* ۴. باکس استناد و رفرنس رسمی مقاله (Citation Reference) */}
      <div className="p-4 rounded-xl border border-slate-200 dark:border-industrial-800 bg-slate-50 dark:bg-industrial-950/40 text-xs text-slate-500 dark:text-slate-400 space-y-1">
        <span className="font-bold text-slate-800 dark:text-slate-200 block text-[11px]">
          ارجاع به این یادداشت پژوهشی:
        </span>
        <p className="font-mono text-[11px] dir-ltr text-left">
          Liftaland Eng. Journal, &quot;{article.slug}&quot;, Technical Standards Review, {article.publishedAt}.
        </p>
      </div>

    </article>
  );
}