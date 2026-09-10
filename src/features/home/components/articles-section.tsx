import Link from "next/link";
import { getFeaturedArticles } from "@/features/articles/api";

export async function ArticlesSection() {
  const articles = await getFeaturedArticles();
  const [featuredArticle, ...secondaryArticles] = articles;

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* سربرگ تحریریه */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-5 pb-3 border-b border-slate-200 dark:border-industrial-800 gap-2">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-techBlue-600 dark:bg-blue-400" />
            <span className="text-[11px] font-bold text-techBlue-600 dark:text-blue-400 tracking-wider font-mono">
              TECHNICAL EDITORIAL & INSIGHTS
            </span>
          </div>
          <h2 className="text-lg sm:text-2xl font-extrabold text-slate-900 dark:text-white">
            دانشنامه و یادداشت‌های فنی مهندسی آسانسور
          </h2>
        </div>
        <Link
          href="/articles"
          className="text-xs font-bold text-slate-700 dark:text-slate-300 hover:text-techBlue-600 dark:hover:text-blue-400 transition-colors"
        >
          ورود به آرشیو مقالات فنی ←
        </Link>
      </div>

      {/* چیدمان نامتقارن مجله‌ای (یک مقاله شاخص + فهرست ستونی) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        
        {/* مقاله شاخص و محوری (ستون راست - ۷ ستون) */}
        {featuredArticle && (
          <div className="lg:col-span-7 flex flex-col justify-between rounded-2xl border border-slate-200 dark:border-industrial-800 bg-white dark:bg-industrial-900 p-6 sm:p-7 relative overflow-hidden shadow-xs">
            <div className="relative z-10">
              <div className="flex items-center gap-2.5 mb-4">
                <span className="text-[11px] font-bold text-techBlue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-900/60 px-2.5 py-0.5 rounded-md">
                  مقاله برگزیده مهندسی
                </span>
                <span className="text-xs text-slate-400">•</span>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                  {featuredArticle.readTime}
                </span>
              </div>

              <Link href={`/articles/${featuredArticle.slug}`}>
                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white hover:text-techBlue-600 dark:hover:text-blue-400 transition-colors leading-snug mb-3">
                  {featuredArticle.title}
                </h3>
              </Link>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                {featuredArticle.summary}
              </p>

              {/* یادداشت تحریریه / چکیده تجربی */}
              <div className="p-3.5 rounded-xl border-r-4 border-techBlue-600 dark:border-blue-500 bg-slate-50 dark:bg-industrial-950/60 text-xs text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                <span className="font-bold block mb-1 text-slate-900 dark:text-slate-100">
                  محور بررسی فنی:
                </span>
                دستورالعمل عملیاتی عیب‌یابی ارتعاشات کابین بدون نیاز به تعویض قطعات پرهزینه، بر اساس چک‌لیست بازرسی آیین‌نامه استاندارد ملی.
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-industrial-800 flex items-center justify-between">
              <span className="text-xs text-slate-400">
                تاریخ انتشار: {featuredArticle.publishedAt}
              </span>
              <Link
                href={`/articles/${featuredArticle.slug}`}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-techBlue-600 dark:text-blue-400 hover:underline"
              >
                <span>مطالعه متن کامل یادداشت</span>
                <span>←</span>
              </Link>
            </div>
          </div>
        )}

        {/* فهرست ستونی مقالات مکمل (ستون چپ - ۵ ستون) */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-3">
          {secondaryArticles.map((article) => (
            <article
              key={article.id}
              className="flex-1 flex flex-col justify-between rounded-xl border border-slate-200 dark:border-industrial-800 bg-white dark:bg-industrial-900 p-4 sm:p-5 hover:border-slate-300 dark:hover:border-industrial-700 transition-all shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[10px] font-bold text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-industrial-800 px-2 py-0.5 rounded">
                    {article.category}
                  </span>
                  <span className="text-[11px] text-slate-400">{article.readTime}</span>
                </div>

                <Link href={`/articles/${article.slug}`}>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white hover:text-techBlue-600 dark:hover:text-blue-400 transition-colors leading-snug mb-2">
                    {article.title}
                  </h4>
                </Link>

                <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
                  {article.summary}
                </p>
              </div>

              <div className="pt-3 mt-3 border-t border-slate-100 dark:border-industrial-800/60 flex items-center justify-between text-[11px]">
                <span className="text-slate-400">{article.publishedAt}</span>
                <Link
                  href={`/articles/${article.slug}`}
                  className="font-semibold text-slate-800 dark:text-slate-200 hover:text-techBlue-600 dark:hover:text-blue-400 transition-colors"
                >
                  مطالعه ←
                </Link>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}