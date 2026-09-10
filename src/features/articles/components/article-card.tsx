import Link from "next/link";
import { Article } from "../types";
import { Badge } from "@/components/ui/badge";

interface ArticleCardProps {
  article: Article;
}

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <article className="flex flex-col justify-between rounded-2xl border border-slate-200 dark:border-industrial-800 bg-white dark:bg-industrial-900 p-6 shadow-2xs hover:border-slate-300 dark:hover:border-industrial-700 transition-all group">
      <div>
        {/* متاداده مقاله: دسته‌بندی و زمان مطالعه */}
        <div className="flex items-center justify-between gap-2 mb-3.5 pb-2.5 border-b border-slate-100 dark:border-industrial-800 text-xs">
          <Badge variant="tech">{article.categoryLabel}</Badge>
          <div className="flex items-center gap-1.5 text-slate-400 font-mono text-[11px]">
            <span>⏳</span>
            <span>{article.readTime}</span>
          </div>
        </div>

        {/* تیتر مقاله ژورنالی */}
        <Link href={`/articles/${article.slug}`} className="block">
          <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white group-hover:text-techBlue-600 dark:group-hover:text-blue-400 transition-colors leading-snug mb-3">
            {article.title}
          </h3>
        </Link>

        {/* چکیده تحریریه */}
        <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3 mb-5">
          {article.summary}
        </p>
      </div>

      {/* اطلاعات نویسنده و ناظر */}
      <div className="pt-4 border-t border-slate-100 dark:border-industrial-800 flex items-center justify-between text-xs">
        <div>
          <span className="text-[10px] text-slate-400 block font-mono">AUTHOR</span>
          <span className="font-bold text-slate-900 dark:text-slate-100 text-xs">
            {article.author}
          </span>
        </div>

        <Link
          href={`/articles/${article.slug}`}
          className="inline-flex items-center gap-1 font-extrabold text-industrial-900 dark:text-white group-hover:text-safety-600 dark:group-hover:text-safety-400 transition-colors text-xs"
        >
          <span>مطالعه مقاله کامل</span>
          <span>←</span>
        </Link>
      </div>
    </article>
  );
}