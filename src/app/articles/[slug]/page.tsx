import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getArticleBySlug, getArticles } from "@/features/articles/api";
import { ArticleContent } from "@/features/articles/components/article-content";
import { ArticleSidebar } from "@/features/articles/components/article-sidebar";
import { Badge } from "@/components/ui/badge";

interface ArticleDetailPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const articles = await getArticles();
  return articles.map((a) => ({
    slug: a.slug,
  }));
}

export async function generateMetadata({
  params,
}: ArticleDetailPageProps): Promise<Metadata> {
  const article = await getArticleBySlug(params.slug);
  if (!article) {
    return {
      title: "مقاله مورد نظر یافت نشد | لیفتالند",
    };
  }

  return {
    title: `${article.title} | ژورنال مهندسی لیفتالند`,
    description: article.summary,
  };
}

export default async function ArticleDetailPage({ params }: ArticleDetailPageProps) {
  const article = await getArticleBySlug(params.slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 space-y-6 pb-20">
      
      {/* سربرگ مقاله با عنوان نشریه */}
      <div className="w-full pb-5 border-b border-slate-200 dark:border-industrial-800 space-y-3">
        <nav className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-medium overflow-x-auto whitespace-nowrap scrollbar-none">
          <Link href="/" className="hover:text-slate-900 dark:hover:text-white transition-colors">
            صفحه اصلی
          </Link>
          <span className="text-slate-300 dark:text-slate-600">/</span>
          <Link href="/articles" className="hover:text-slate-900 dark:hover:text-white transition-colors">
            ژورنال مهندسی
          </Link>
          <span className="text-slate-300 dark:text-slate-600">/</span>
          <span className="text-slate-900 dark:text-slate-100 font-bold truncate">
            {article.title}
          </span>
        </nav>

        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="tech">{article.categoryLabel}</Badge>
          <span className="text-xs text-slate-400 font-mono">
            مدت مطالعه تخمینی: {article.readTime}
          </span>
        </div>

        <h1 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
          {article.title}
        </h1>
      </div>

      {/* چیدمان دو ستونی استاندارد نشریات مهندسی */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start relative">
        <div className="lg:col-span-8">
          <ArticleContent article={article} />
        </div>

        <aside className="lg:col-span-4 w-full sticky top-20 z-10">
          <ArticleSidebar article={article} />
        </aside>
      </div>

    </div>
  );
}