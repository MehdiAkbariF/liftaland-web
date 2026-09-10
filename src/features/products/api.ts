import { Product } from "./types";

export const PRODUCTS_CATALOG: Product[] = [
  {
    id: "p1",
    slug: "sicor-mr12-traction-machine",
    name: "موتور گیربکس سیسیور MR12",
    partNumber: "SIC-MR12-5.5KW",
    brand: "Sicor (ایتالیا)",
    category: "traction",
    categoryLabel: "موتور و محرکه",
    shortDescription: "موتور گیربکس دو سرعته و VVVF مناسب آسانسورهای ۶ تا ۸ نفره با راندمان مکانیکی بالا و حداقل لرزش فلکه.",
    price: 185000000,
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80",
    isAvailable: true,
    standard: "EN 81-20 / EN 81-50",
    specs: [
      { key: "توان نامی", value: "۵.۵ کیلووات (۷.۵ اسب)" },
      { key: "ظرفیت بار", value: "۶۳۰ کیلوگرم (۸ نفره)" },
      { key: "سرعت خطی", value: "۱.۰ متر بر ثانیه" },
      { key: "قطر فلکه کشش", value: "۴۸۰ میلی‌متر" },
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
    image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=600&q=80",
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
    shortDescription: "پاراشوت تدریجی دو جهته با عملکرد هماهنگ فک‌ها و ترمز مطمئن در سقوط‌های آزاد و اضافه سرعت غیرمجاز.",
    price: 34500000,
    image: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=80",
    isAvailable: true,
    standard: "EN 81-50 Certified",
    specs: [
      { key: "حداکثر جرم کل مجاز (P+Q)", value: "۲,۵۰۰ کیلوگرم" },
      { key: "حداکثر سرعت عملکرد", value: "۲.۵ متر بر ثانیه" },
      { key: "ضخامت ریل مجاز", value: "۹ الی ۱۶ میلی‌متر" },
    ],
    compatibility: ["ریل‌های T89 ،T125 ،T127 ماشین‌کاری شده"],
  },
  {
    id: "p4",
    slug: "alberto-sassi-leo-gearless",
    name: "موتور گیرلس آلبرتو ساسی مدل Leo",
    partNumber: "SAS-LEO-G300",
    brand: "Alberto Sassi (ایتالیا)",
    category: "traction",
    categoryLabel: "موتور و محرکه",
    shortDescription: "موتور بدون گیربکس آهنربای دائم (PMSM) با بازدهی ۹۲٪ مناسب پروژه‌های بدون موتورخانه (MRL) و برج‌ها.",
    price: 295000000,
    image: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=600&q=80",
    isAvailable: true,
    standard: "EN 81-20 / CE",
    specs: [
      { key: "ظرفیت بار", value: "۱,۰۰۰ کیلوگرم (۱۳ نفره)" },
      { key: "سرعت خطی", value: "۱.۶ الی ۲.۰ متر بر ثانیه" },
      { key: "قطر فلکه", value: "۳۲۰ میلی‌متر" },
      { key: "نوع انکودر", value: "Heidenhain سینوسی-کسینوسی" },
    ],
    compatibility: ["درایوهای Yaskawa L1000A و Arcode"],
  },
  {
    id: "p5",
    slug: "yaskawa-l1000a-inverter",
    name: "اینورتر تخصصی آسانسور یاسکاوا L1000A",
    partNumber: "YAS-L1000-11KW",
    brand: "Yaskawa (ژاپن)",
    category: "controller",
    categoryLabel: "تابلو فرمان و درایو",
    shortDescription: "درایو ژاپنی فوق‌پایدار مخصوص آسانسورهای مسافری پرسرعت با قابلیت کنترل گشتاور در سرعت صفر (Zero Speed Torque).",
    price: 88000000,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80",
    isAvailable: true,
    standard: "UL / CE / RoHS",
    specs: [
      { key: "توان نامی", value: "۱۱ کیلووات (۱۵ اسب)" },
      { key: "جریان خروجی", value: "۲۶ آمپر پیوسته" },
      { key: "قابلیت تحریک", value: "موتورهای القایی و سنکرون گیرلس" },
    ],
    compatibility: ["کلیه بردهای فرمان استاندارد ایرانی و اروپایی"],
  },
  {
    id: "p6",
    slug: "wittur-augusta-landing-door",
    name: "درب طبقه تمام‌اتوماتیک تلسکوپی ویتور مدل Augusta",
    partNumber: "WIT-AUG-T2-80",
    brand: "Wittur (آلمان)",
    category: "doors",
    categoryLabel: "درب‌های اتوماتیک",
    shortDescription: "مکانیزم درب طبقه کم‌صدا با قفل ایمنی استاندارد و مقاومت بالا در برابر تغییر شکل در اثر پاخور مسافرین.",
    price: 28500000,
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80",
    isAvailable: true,
    standard: "EN 81-58 / E120 حریق",
    specs: [
      { key: "عرض بازشو", value: "۸۰ سانتی‌متر" },
      { key: "ارتفاع مفید", value: "۲۰۰ سانتی‌متر" },
      { key: "نوع بازشو", value: "تلسکوپی ۲ لته چپ/راست‌بازشو" },
    ],
    compatibility: ["سردرب‌های ویتور، سلکوم و یاران"],
  },
];

export interface GetProductsResult {
  products: Product[];
  total: number;
  totalPages: number;
  currentPage: number;
  limit: number;
}

export async function getProducts(options?: {
  category?: string;
  query?: string;
  brand?: string;
  sort?: string;
  page?: number;
  limit?: number;
}): Promise<GetProductsResult> {
  let list = [...PRODUCTS_CATALOG];

  if (options?.category && options.category !== "all") {
    list = list.filter((p) => p.category === options.category);
  }

  if (options?.query) {
    const q = options.query.toLowerCase().trim();
    list = list.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.partNumber.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.shortDescription.toLowerCase().includes(q)
    );
  }

  if (options?.brand && options.brand !== "all") {
    list = list.filter((p) => p.brand.toLowerCase().includes(options.brand!.toLowerCase()));
  }

  if (options?.sort === "price-asc") {
    list.sort((a, b) => a.price - b.price);
  } else if (options?.sort === "price-desc") {
    list.sort((a, b) => b.price - a.price);
  }

  const total = list.length;
  const limit = options?.limit && options.limit > 0 ? options.limit : 6;
  const totalPages = Math.max(1, Math.ceil(total / limit));
  const currentPage = options?.page && options.page > 0 ? Math.min(options.page, totalPages) : 1;

  const startIndex = (currentPage - 1) * limit;
  const paginatedProducts = list.slice(startIndex, startIndex + limit);

  return {
    products: paginatedProducts,
    total,
    totalPages,
    currentPage,
    limit,
  };
}

export async function getFeaturedProducts(): Promise<Product[]> {
  return PRODUCTS_CATALOG.slice(0, 3);
}

export async function getProductBySlug(slug: string): Promise<Product | undefined> {
  return PRODUCTS_CATALOG.find((p) => p.slug === slug);
}