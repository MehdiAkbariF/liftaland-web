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
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
    completionDate: "اردیبهشت ۱۴۰۳",
    challenge: "تکان‌های شدید هنگام توقف طبقات، صدای آزاردهنده موتورخانه در پنت‌هاوس و مصرف برق ماهیانه بسیار بالا با موتور گیربکس قدیمی.",
    solution: "جایگزینی با موتور گیرلس سنکرون آلبرتو ساسی ایتالیا، نصب تابلو فرمان آریان آرکد با Direct Landing و تعویض کفشک‌ها به رولری.",
    componentsUsed: ["موتور گیرلس Alberto Sassi Leo", "تابلو کنترل یکپارچه Arcode 15KW", "شستی‌های لمسی استیل ضدخش"],
    resultMetric: "کاهش ۵۵ درصدی مصرف برق و حذف ۱۰۰٪ لرزش کابین هنگام توقف",
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
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
    completionDate: "خرداد ۱۴۰۳",
    challenge: "تعلیق پوشش بیمه حوادث و اخطار آتش‌نشانی به دلیل رد شدن در بازرسی ادواری استاندارد به علت خرابی بافرها و لقی فک‌های پاراشوت.",
    solution: "اصلاح فاصله‌های ایمنی انتهای چاه، تعویض ترمز ایمنی به پاراشوت تدریجی دیناتک، ایمن‌سازی روشنایی تونلی و تنظیم میکروسوییچ‌های شالتر.",
    componentsUsed: ["پاراشوت تدریجی Dynatech Qube", "گاورنر دوجهته ویتور", "ضربه‌گیرهای هیدرولیک چاهک"],
    resultMetric: "قبولی در اولین آزمون رسمی بازرس کشوری و تمدید کامل بیمه حوادث",
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
    capacity: "۱ نفره (۸۰۰ کیلوگرم)",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    completionDate: "درحال اجرا (پایش مستمر)",
    challenge: "خرابی مکرر درب‌های طبقات در ساعات اوج خرید و توقف‌های طولانی آسانسورها که موجب نارضایتی مراجعین مجتمع شده بود.",
    solution: "استقرار چک‌لیست دوبار در ماه، تعویض تسمه‌ها و قرقره‌های قفل درب با قطعات اورجینال سلکوم، و پایش حرارتی ماهیانه سیم‌پیچ موتورها.",
    componentsUsed: ["مکانیزم سردرب اتوماتیک Wittur", "فتوسل پرده‌ای نوری مقاوم", "روغن گیربکس صنعتی سیسیور"],
    resultMetric: "رسیدن ضریب آماده‌به‌کار (Uptime) آسانسورها به ۹۹.۴٪ در طول ماه",
  },
];

export async function getProjects(category?: string): Promise<ProjectItem[]> {
  if (category && category !== "all") {
    return PROJECTS_DATA.filter((p) => p.category === category);
  }
  return PROJECTS_DATA;
}