import { Product } from "./types";

export const FEATURED_PRODUCTS: Product[] = [
  {
    id: "p1",
    slug: "sicor-mr12-traction-machine",
    name: "موتور گیربکس سیسیور MR12",
    partNumber: "SIC-MR12-5.5KW",
    brand: "Sicor (ایتالیا)",
    category: "traction",
    categoryLabel: "موتور و محرکه",
    shortDescription: "موتور گیربکس دو سرعته و VVVF مناسب آسانسورهای ۶ تا ۸ نفره با راندمان مکانیکی بالا.",
    price: 185000000,
    isAvailable: true,
    standard: "EN 81-20 / EN 81-50",
    specs: [
      { key: "توان نامی", value: "۵.۵ کیلووات (۷.۵ اسب)" },
      { key: "ظرفیت بار", value: "۶۳۰ کیلوگرم (۸ نفره)" },
      { key: "سرعت خطی", value: "۱.۰ متر بر ثانیه" },
      { key: "قطر فلکه", value: "۴۸۰ میلی‌متر" },
    ],
    compatibility: ["تابلوهای فرمان آریان", "تابلو آرمان فراز", "اینورتر یاسکاوا و جفران"],
  },
  {
    id: "p2",
    slug: "arian-arcode-controller",
    name: "تابلو فرمان آریان سیستم با درایو آرکد",
    partNumber: "ARN-ARC-15KW",
    brand: "آریان آسانسور",
    category: "controller",
    categoryLabel: "تابلو فرمان و درایو",
    shortDescription: "سیستم کنترل پیشرفته تلفیقی درایو و برد کنترلر با قابلیت Direct Landing و مصرف بهینه انرژی.",
    price: 142000000,
    isAvailable: true,
    standard: "استاندارد ملی ایران / CE",
    specs: [
      { key: "توان درایو", value: "۱۵ کیلووات پیوسته" },
      { key: "حداکثر توقف", value: "تا ۳۲ توقف کلکتیو دان/سلکتیو" },
      { key: "پروتکل ارتباطی", value: "CAN-Bus سریال" },
      { key: "سیستم نجات اضطراری", value: "UPS اتوماتیک یکپارچه" },
    ],
    compatibility: ["موتورهای گیرلس و گیربکس‌دار سنکرون و آسنکرون"],
  },
  {
    id: "p3",
    slug: "dynatech-qube-safety-gear",
    name: "ترمز ایمنی (پاراشوت) تدریجی دیناتک مدل Qube",
    partNumber: "DYN-QUBE-2200",
    brand: "Dynatech (اسپانیا)",
    category: "safety",
    categoryLabel: "سیستم‌های ایمنی و ترمز",
    shortDescription: "پاراشوت تدریجی دو جهته با عملکرد هماهنگ فک‌ها و ترمز مطمئن در سقوط‌های آزاد غیرمجاز.",
    price: 34500000,
    isAvailable: true,
    standard: "EN 81-50 Certified",
    specs: [
      { key: "حداکثر جرم کل مجاز (P+Q)", value: "۲,۵۰۰ کیلوگرم" },
      { key: "حداکثر سرعت عملکرد", value: "۲.۵ متر بر ثانیه" },
      { key: "ضخامت ریل مجاز", value: "۹ الی ۱۶ میلی‌متر" },
    ],
    compatibility: ["ریل‌های T89 ،T125 ،T127 ماشین‌کاری شده"],
  },
];

export async function getFeaturedProducts(): Promise<Product[]> {
  // شبیه‌سازی API لایه بدون افزودن پیچیدگی ساختگی
  return FEATURED_PRODUCTS;
}

export async function getProductBySlug(slug: string): Promise<Product | undefined> {
  return FEATURED_PRODUCTS.find((p) => p.slug === slug);
}