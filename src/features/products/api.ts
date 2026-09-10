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
    fullDescription: "موتور آسانسور سیسیور مدل MR12 یکی از شناخته‌شده‌ترین و بادوام‌ترین محرکه‌های آسانسور در پروژه‌های مسکونی و اداری با ترافیک متوسط در ایران است. این موتور با پوسته چدنی مقاوم، فلکه کشش آلیاژی ضد سایش و لنت‌های ترمز بی‌صدا، حرکتی نرم و بدون ضربه را تضمین می‌کند و آزمون‌های سخت‌گیرانه استاندارد EN 81-20/50 را با موفقیت گذرانده است.",
    price: 185000000,
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    isAvailable: true,
    standard: "EN 81-20 / EN 81-50",
    origin: "ایتالیا (اصلی - دارای گواهی بازرسی مبدا)",
    warranty: "۲۴ ماه گارانتی رسمی تعویض قطعات مکانیکی",
    specs: [
      { key: "توان نامی موتور", value: "۵.۵ کیلووات (۷.۵ اسب بخار)" },
      { key: "ظرفیت بار نامی", value: "۶۳۰ کیلوگرم (۸ نفره استاندارد)" },
      { key: "سرعت نامی خطی", value: "۱.۰ متر بر ثانیه (۶۰ متر در دقیقه)" },
      { key: "قطر فلکه کشش اصلی", value: "۴۸۰ میلی‌متر با ۵ شیار ۱۰ میلی‌متر" },
      { key: "نوع سیستم تعلیق", value: "۱:۱ (سیستم مستقیم)" },
      { key: "جریان نامی الکتروموتور", value: "۱۳.۵ آمپر (ولتاژ ۳۸۰ ولت سه فاز)" },
      { key: "سطح نویز موتورخانه", value: "کمتر از ۵۸ دسی‌بل در بار کامل" },
    ],
    compatibility: [
      "تابلو فرمان‌های آریان سیستم (درایو آرکد و جفران)",
      "تابلو فرمان آرمان فراز پیمان با درایو یاسکاوا",
      "سیستم‌های تعلیق با سیم‌بکسل گوستاولف نمره ۱۰",
    ],
    docs: [
      { title: "کاتالوگ ابعاد مکانیکی و نقشه استقرار شاسی (PDF)", size: "۲.۴ مگابایت", type: "PDF" },
      { title: "گواهی آزمون انطباق استاندارد EN 81-50 آزمایشگاهی", size: "۱.۱ مگابایت", type: "PDF" },
    ],
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
    fullDescription: "تابلو فرمان آریان آرکد (Arcode) یک سیستم کنترل تلفیقی فوق‌پیشرفته و هوشمند است که اینورتر کنترل سرعت و مادربرد اصلی را در یک یونیت هماهنگ ادغام کرده است. این تابلو با سیستم Direct Landing، توقف کابین را بدون خزیدن (Creeping) و با نرمی خیره‌کننده انجام داده و تا ۵۰٪ در مصرف برق آسانسور صرفه‌جویی می‌کند.",
    price: 142000000,
    image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80",
    isAvailable: true,
    standard: "استاندارد ملی ایران ISIRI / CE",
    origin: "ایران (طراحی و تولید مهندسی مشترک)",
    warranty: "۲۴ ماه گارانتی بی‌قیدوشرط برد و درایو",
    specs: [
      { key: "توان پیوسته درایو", value: "۱۵ کیلووات (۲۰ اسب)" },
      { key: "حداکثر تعداد طبقات", value: "تا ۳۲ توقف کلکتیو دان و دوبلکس" },
      { key: "پروتکل ارتباطی کارکدک", value: "سریال CAN-Bus صنعتی با ۲ سیم" },
      { key: "سیستم نجات اضطراری", value: "UPS اتوماتیک هوشمند جهت نزدیک‌ترین طبقه" },
      { key: "قابلیت کنترل موتور", value: "موتورهای گیرلس و گیربکس‌دار Closed Loop" },
    ],
    compatibility: [
      "موتورهای گیرلس ساسی، بلولایت، زیلابگ و تورین",
      "موتورهای گیربکس دو سرعته و 3VF تا توان ۱۵ کیلووات",
      "انکودرهای افزایشی و انکودرهای انحصاری Endat",
    ],
    docs: [
      { title: "دفترچه راهنمای سیم‌کشی و نقشه‌های مدارهای ایمنی", size: "۴.۸ مگابایت", type: "PDF" },
      { title: "کدهای خطای درایو و پروتکل عیب‌یابی نمایشگر", size: "۱.۶ مگابایت", type: "PDF" },
    ],
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
    fullDescription: "پاراشوت تدریجی دیناتک اسپانیا مدل Qube یکی از ایمن‌ترین و دقیق‌ترین سامانه‌های ترمز اضطراری آسانسور در دنیاست. مکانیزم غلتکی و فک‌های فنربندی‌شده آن باعث می‌شود که شتاب توقف کابین هنگام اضافه سرعت، نرم و در محدوده استاندارد حفظ شود و آسیبی به مسافران یا آهن‌کشی چاه وارد نگردد.",
    price: 34500000,
    image: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80",
    isAvailable: true,
    standard: "EN 81-50 Certified / تاییدیه رسمی بازرسی استاندارد",
    origin: "اسپانیا (همراه با هولوگرام و پلاک فلزی)",
    warranty: "۳۶ ماه گارانتی عملکرد مکانیکی",
    specs: [
      { key: "حداکثر جرم مجاز سیستم (P+Q)", value: "۲,۵۰۰ کیلوگرم" },
      { key: "حداکثر سرعت عملکرد مجاز", value: "۲.۵ متر بر ثانیه" },
      { key: "ضخامت لبه ریل مجاز", value: "۹ الی ۱۶ میلی‌متر (ریل‌های T89 و T125)" },
      { key: "نوع عملکرد ترمز", value: "تدریجی دو جهته (Up/Down Progressive)" },
    ],
    compatibility: [
      "گاورنرهای دو جهته ویتور، پترلی و متروپلاست",
      "انواع ریل‌های آسانسور T89، T125 و T127 سوپر ساورا",
    ],
    docs: [
      { title: "سرتیفیکیت آزمون تایپ استاندارد اتحادیه اروپا", size: "۸۵۰ کیلوبایت", type: "PDF" },
      { title: "دستورالعمل نصب، رگلاژ فک‌ها و آچارکشی دوره‌ای", size: "۱.۹ مگابایت", type: "PDF" },
    ],
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
    image: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=800&q=80",
    isAvailable: true,
    standard: "EN 81-20 / CE",
    origin: "ایتالیا",
    warranty: "۲۴ ماه گارانتی رسمی",
    specs: [
      { key: "ظرفیت بار نامی", value: "۱,۰۰۰ کیلوگرم (۱۳ نفره)" },
      { key: "سرعت خطی", value: "۱.۶ الی ۲.۰ متر بر ثانیه" },
      { key: "قطر فلکه کشش", value: "۳۲۰ میلی‌متر" },
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
    shortDescription: "درایو ژاپنی فوق‌پایدار مخصوص آسانسورهای مسافری پرسرعت با قابلیت کنترل گشتاور در سرعت صفر.",
    price: 88000000,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    isAvailable: true,
    standard: "UL / CE / RoHS",
    origin: "ژاپن",
    warranty: "۱۸ ماه گارانتی",
    specs: [
      { key: "توان نامی", value: "۱۱ کیلووات (۱۵ اسب)" },
      { key: "جریان خروجی", value: "۲۶ آمپر پیوسته" },
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
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
    isAvailable: true,
    standard: "EN 81-58 / E120 حریق",
    origin: "آلمان / اتریش",
    warranty: "۲۴ ماه گارانتی مکانیزم",
    specs: [
      { key: "عرض بازشو", value: "۸۰ سانتی‌متر" },
      { key: "ارتفاع مفید", value: "۲۰۰ سانتی‌متر" },
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

export async function getRelatedProducts(currentId: string, category: string): Promise<Product[]> {
  return PRODUCTS_CATALOG.filter((p) => p.id !== currentId).slice(0, 3);
}