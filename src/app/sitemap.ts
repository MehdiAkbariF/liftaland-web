import { MetadataRoute } from "next";
import { PRODUCTS_CATALOG } from "@/features/products/api";
import { SERVICES_DATA } from "@/features/services/api";
import { PROJECTS_DATA } from "@/features/projects/api";
import { ARTICLES_DATA } from "@/features/articles/api";

const BASE_URL = "https://liftaland.ir";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const currentDate = new Date().toISOString();

  // ۱. مسیرهای ثابت اصلی
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, lastModified: currentDate, changeFrequency: "daily", priority: 1.0 },
    { url: `${BASE_URL}/products`, lastModified: currentDate, changeFrequency: "daily", priority: 0.9 },
    { url: `${BASE_URL}/services`, lastModified: currentDate, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/projects`, lastModified: currentDate, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/articles`, lastModified: currentDate, changeFrequency: "daily", priority: 0.8 },
    { url: `${BASE_URL}/about`, lastModified: currentDate, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/contact`, lastModified: currentDate, changeFrequency: "monthly", priority: 0.7 },
  ];

  // ۲. مسیرهای داینامیک محصولات
  const productRoutes: MetadataRoute.Sitemap = PRODUCTS_CATALOG.map((p) => ({
    url: `${BASE_URL}/products/${p.slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  // ۳. مسیرهای داینامیک خدمات
  const serviceRoutes: MetadataRoute.Sitemap = SERVICES_DATA.map((s) => ({
    url: `${BASE_URL}/services/${s.slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  // ۴. مسیرهای داینامیک نمونه‌کارها
  const projectRoutes: MetadataRoute.Sitemap = PROJECTS_DATA.map((pr) => ({
    url: `${BASE_URL}/projects/${pr.slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // ۵. مسیرهای داینامیک مقالات
  const articleRoutes: MetadataRoute.Sitemap = ARTICLES_DATA.map((a) => ({
    url: `${BASE_URL}/articles/${a.slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    ...staticRoutes,
    ...productRoutes,
    ...serviceRoutes,
    ...projectRoutes,
    ...articleRoutes,
  ];
}