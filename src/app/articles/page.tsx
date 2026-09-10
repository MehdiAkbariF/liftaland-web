import type { Metadata } from "next";
import { getArticles } from "@/features/articles/api";
import { ArticlesHeader } from "@/features/articles/components/articles-header";
import { ArticleCard } from "@/features/articles/components/article-card";

export const metadata: Metadata = {
  title: "ژورنال مهندسی آسانسور | عیب‌یابی، بازرسی استاندارد و مقررات | لیفتالند",
  description:
    "مجموعه مقالات و پژوهش‌های تخصصی مهندسی آسانسور، چک‌لیست قبولی در بازرسی استاندارد ادواری ISIRI، متدولوژی عیب‌یابی لرزش کابین و راهنمای انتخاب سیستم‌های گیرلس.",
};

interface ArticlesPageProps {
  searchParams: {
    category?: string;
  };
}

export default async function ArticlesPage({ searchParams }: ArticlesPageProps) {
  const articles = await getArticles(searchParams.category);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 space-y-6 pb-20">
      
      {/* سربرگ ماست‌هد ژورنال مهندسی */}
      <ArticlesHeader />

      {/* گرید مقالات تحلیلی با استایل نشریه‌ای */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>

    </div>
  );
}