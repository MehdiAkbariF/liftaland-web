import { Article } from "./types";

export const ARTICLES_DATA: Article[] = [
  {
    id: "a1",
    slug: "reasons-for-elevator-cabin-vibration",
    title: "علل اصلی لرزش و ارتعاش کابین آسانسور در حین حرکت",
    summary: "بررسی لقی کفشک‌های ریل، تاب‌برداشتگی آهن‌کشی، خطاهای تنظیم درایو VVVF و روش‌های استاندارد رفع لرزش طبقات.",
    category: "عیب‌یابی فنی",
    readTime: "۵ دقیقه مطالعه",
    publishedAt: "۱۴۰۳/۰۴/۱۵",
  },
  {
    id: "a2",
    slug: "periodic-standard-inspection-checklist",
    title: "چک‌لیست گام‌به‌گام قبولی در بازرسی استاندارد ادواری آسانسور",
    summary: "آشنایی با ۳۰ ایراد متداول که منجر به رد شدن آسانسور در سامانه مدیریت استاندارد و تعلیق پوشش بیمه می‌شود.",
    category: "استاندارد و قوانین",
    readTime: "۷ دقیقه مطالعه",
    publishedAt: "۱۴۰۳/۰۴/۰۸",
  },
  {
    id: "a3",
    slug: "gearless-vs-geared-traction-comparison",
    title: "مقایسه فنی و اقتصادی موتورهای گیرلس و گیربکس‌دار",
    summary: "بررسی مصرف انرژی، صدای موتورخانه، راندمان حرکتی و ارزش افزوده نصب سیستم‌های بدون گیربکس در پروژه‌های نوسازی.",
    category: "راهنمای خرید قطعات",
    readTime: "۶ دقیقه مطالعه",
    publishedAt: "۱۴۰۳/۰۳/۲۸",
  },
];

export async function getFeaturedArticles(): Promise<Article[]> {
  return ARTICLES_DATA;
}