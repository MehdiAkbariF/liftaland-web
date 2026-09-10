import { ProjectItem } from "./types";

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "proj-1",
    slug: "roma-residence-modernization",
    title: "نوسازی کامل و ارتقا به موتور گیرلس در برج مسکونی روما",
    category: "modernization",
    categoryLabel: "نوسازی و بازسازی (VVVF)",
    buildingType: "برج مسکونی لوکس",
    location: "تهران، منطقه ۱ (کامرانیه)",
    stops: 16,
    capacity: "۱۳ نفره (۱,۰۰۰ کیلوگرم)",
    travelHeight: "۵۲ متر ارتفاع کل تراول",
    ratedSpeed: "۱.۶ متر بر ثانیه",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
    ],
    videos: [
      {
        id: "v1",
        title: "تست حرکت بدون ضربه و تراز میلی‌متری با درایو آرکد در پنت‌هاوس",
        topic: "ویدیوی آزمون توقف (Direct Landing)",
        duration: "۰۱:۲۴",
        views: "۸.۴K",
        thumbnail: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80",
        videoSrc: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        instagramUrl: "https://instagram.com",
      },
      {
        id: "v2",
        title: "پایش صدای بلبرینگ‌های موتور گیرلس ساسی با دستگاه آنالیزور فرکانس",
        topic: "تست ارتعاشات و نویز موتورخانه",
        duration: "۰۰:۴۸",
        views: "۵.۱K",
        thumbnail: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
        videoSrc: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        instagramUrl: "https://instagram.com",
      },
    ],
    completionDate: "اردیبهشت ۱۴۰۳",
    challenge: "تکان‌های شدید هنگام توقف طبقات، صدای آزاردهنده موتورخانه در پنت‌هاوس ساختمان و مصرف برق ماهیانه بسیار بالا با موتور گیربکس قدیمی دو سرعته.",
    solution: "جایگزینی موتور گیربکس قدیمی با موتور گیرلس سنکرون مگنت دائم آلبرتو ساسی ایتالیا، نصب تابلو فرمان آریان آرکد با سیستم Direct Landing و تعویض کفشک‌ها به رولری ضد ارتعاش.",
    componentsUsed: ["موتور گیرلس Alberto Sassi Leo", "تابلو کنترل یکپارچه Arcode 15KW", "شستی‌های لمسی استیل ضدخش"],
    installedProducts: [
      {
        name: "موتور گیرلس آلبرتو ساسی مدل Leo",
        partNumber: "SAS-LEO-G300",
        productSlug: "alberto-sassi-leo-gearless",
      },
      {
        name: "تابلو فرمان آریان سیستم با درایو آرکد",
        partNumber: "ARN-ARC-15KW",
        productSlug: "arian-arcode-controller",
      },
    ],
    metricsComparison: [
      { label: "مصرف برق ماهیانه موتورخانه", before: "۲,۸۵۰ کیلووات ساعت", after: "۱,۲۸۰ کیلووات ساعت (۵۵٪ کاهش)" },
      { label: "صدای موتورخانه در بار کامل", before: "۷۶ دسی‌بل (نویز شدید)", after: "۴۹ دسی‌بل (بی‌صدا)" },
      { label: "خطای تراز ایستگاه طبقات", before: "±۲۵ میلی‌متر لبه‌دار", after: "کمتر از ±۲ میلی‌متر (Direct Landing)" },
    ],
    resultMetric: "کاهش ۵۵ درصدی مصرف برق و حذف ۱۰۰٪ لرزش کابین هنگام توقف",
    inspectionCertificate: "دارای تاییدیه رسمی بازرسی استاندارد ادواری ISIRI 6303-1",
  },
  {
    id: "proj-2",
    slug: "baharan-medical-standard-audit",
    title: "ممیزی، رفع ۲۴ عدم‌انطباق و اخذ استاندارد مجتمع پزشکی بهاران",
    category: "standard",
    categoryLabel: "اخذ گواهی استاندارد",
    buildingType: "کلینیک و مرکز درمانی پرتردد",
    location: "تهران، خیابان شریعتی",
    stops: 8,
    capacity: "۸ نفره برانکاردبر",
    travelHeight: "۲۶ متر ارتفاع چاهک",
    ratedSpeed: "۱.۰ متر بر ثانیه",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=800&q=80",
    ],
    videos: [
      {
        id: "v3",
        title: "آزمون رسمی درگیری فک‌های ترمز ایمنی (پاراشوت) در حضور ناظر استاندارد",
        topic: "ویدیوی آزمون استاندارد کشوری",
        duration: "۰۲:۱۰",
        views: "۱۱.۲K",
        thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
        videoSrc: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        instagramUrl: "https://instagram.com",
      },
    ],
    completionDate: "خرداد ۱۴۰۳",
    challenge: "تعلیق پوشش بیمه حوادث و اخطار پلمپ به دلیل رد شدن در بازرسی ادواری استاندارد کشوری ناشی از لقی فک‌های پاراشوت و فاصله ناایمن بافرهای چاهک.",
    solution: "اصلاح فاصله‌های ایمنی انتهای چاه، تعویض ترمز ایمنی به پاراشوت تدریجی دو جهته دیناتک اسپانیا، ایمن‌سازی روشنایی تونلی و سیم‌کشی اضطراری استپ چاه.",
    componentsUsed: ["پاراشوت تدریجی Dynatech Qube", "گاورنر دوجهته ویتور", "ضربه‌گیرهای هیدرولیک چاهک"],
    installedProducts: [
      {
        name: "ترمز ایمنی (پاراشوت) تدریجی دیناتک مدل Qube",
        partNumber: "DYN-QUBE-2200",
        productSlug: "dynatech-qube-safety-gear",
      },
    ],
    metricsComparison: [
      { label: "وضعیت عدم انطباق‌های بازرسی", before: "۲۴ بند اخطار قرمز", after: "صفر (قبولی بدون بند مشروط)" },
      { label: "شتاب ترمز پاراشوت در سقوط", before: "ناپایدار و خارج از رده", after: "۰.۶g نرم و منطبق بر EN 81-50" },
    ],
    resultMetric: "قبولی در اولین آزمون رسمی بازرس کشوری و تمدید کامل بیمه حوادث",
    inspectionCertificate: "کد رهگیری سامانه ملی استاندارد: STD-984214-THR",
  },
  {
    id: "proj-3",
    slug: "atlas-commercial-tower-maintenance",
    title: "قرارداد پایش و نگهداری دوره‌ای ۴ دستگاه آسانسور مجتمع تجاری اطلس",
    category: "maintenance",
    categoryLabel: "سرویس و نگهداری دوره‌ای",
    buildingType: "مجتمع تجاری و اداری با ترافیک پیوسته",
    location: "تهران، بزرگراه ستاری",
    stops: 12,
    capacity: "۱۰ نفره (۸۰۰ کیلوگرم)",
    travelHeight: "۳۸ متر",
    ratedSpeed: "۱.۶ متر بر ثانیه",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    ],
    videos: [
      {
        id: "v4",
        title: "پایش حرارتی بلبرینگ‌ها و فلکه با دوربین ترموویژن در ساعات اوج ترافیک",
        topic: "گزارش ویدیویی پایش پیشگیرانه",
        duration: "۰۰:۵۸",
        views: "۶.۳K",
        thumbnail: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80",
        videoSrc: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        instagramUrl: "https://instagram.com",
      },
    ],
    completionDate: "درحال اجرا (پایش مستمر)",
    challenge: "خرابی مکرر درب‌های طبقات در ساعات اوج خرید و توقف‌های پرهزینه که موجب نارضایتی و سردرگمی مراجعین مجتمع شده بود.",
    solution: "استقرار چک‌لیست دو بار در ماه، رگلاژ تسمه‌ها و قرقره‌های قفل درب با قطعات ویتور آلمان و پایش حرارتی ماهیانه سیم‌پیچ موتورها با ترموویژن.",
    componentsUsed: ["مکانیزم سردرب اتوماتیک Wittur", "فتوسل پرده‌ای نوری مقاوم", "روغن گیربکس صنعتی سیسیور"],
    installedProducts: [
      {
        name: "درب طبقه تمام‌اتوماتیک تلسکوپی ویتور مدل Augusta",
        partNumber: "WIT-AUG-T2-80",
        productSlug: "wittur-augusta-landing-door",
      },
    ],
    metricsComparison: [
      { label: "میانگین دفعات خرابی در ماه", before: "۶ الی ۸ بار توقف اضطراری", after: "کمتر از ۰.۲ بار (نزدیک به صفر)" },
      { label: "شاخص آماده‌به‌کار سیستم (Uptime)", before: "۸۹.۲٪ در ساعات اوج", after: "۹۹.۴٪ پایداری مداوم" },
    ],
    resultMetric: "رسیدن ضریب آماده‌به‌کار (Uptime) آسانسورها به ۹۹.۴٪ در طول ماه",
    inspectionCertificate: "تحت پوشش بیمه جامع حوادث سرنشینان با تعهد دیه کامل",
  },
];

export async function getProjects(category?: string): Promise<ProjectItem[]> {
  if (category && category !== "all") {
    return PROJECTS_DATA.filter((p) => p.category === category);
  }
  return PROJECTS_DATA;
}

export async function getProjectBySlug(slug: string): Promise<ProjectItem | undefined> {
  return PROJECTS_DATA.find((p) => p.slug === slug);
}