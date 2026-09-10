import { PanelData, PanelOrder, PanelServiceLog } from "./types";

export const CUSTOMER_ORDERS: PanelOrder[] = [
  {
    id: "ord-1",
    orderNumber: "LFT-90214",
    date: "۱۴۰۳/۰۴/۲۶",
    status: "shipped",
    statusLabel: "تحویل به باربری (در حال ارسال)",
    totalAmount: 34500000,
    paymentStatus: "paid",
    shippingCompany: "باربری وطن (شعبه جنوب)",
    trackingCode: "۹۸۳۱۴۲-VTN",
    destinationAddress: "تهران، سعادت‌آباد، خیابان سرو غربی، مجتمع مسکونی سروستان",
    items: [
      {
        name: "ترمز ایمنی (پاراشوت) تدریجی دیناتک مدل Qube",
        partNumber: "DYN-QUBE-2200",
        brand: "Dynatech (اسپانیا)",
        quantity: 1,
        unitPrice: 34500000,
        slug: "dynatech-qube-safety-gear",
      },
    ],
  },
  {
    id: "ord-2",
    orderNumber: "LFT-89104",
    date: "۱۴۰۳/۰۳/۱۵",
    status: "delivered",
    statusLabel: "تحویل شده به مدیر ساختمان",
    totalAmount: 88000000,
    paymentStatus: "paid",
    shippingCompany: "پیک اکسپرس صنعتی لیفتالند",
    trackingCode: "DEL-84192",
    destinationAddress: "تهران، سعادت‌آباد، خیابان سرو غربی، مجتمع مسکونی سروستان",
    items: [
      {
        name: "اینورتر تخصصی آسانسور یاسکاوا L1000A",
        partNumber: "YAS-L1000-11KW",
        brand: "Yaskawa (ژاپن)",
        quantity: 1,
        unitPrice: 88000000,
        slug: "yaskawa-l1000a-inverter",
      },
    ],
  },
  {
    id: "ord-3",
    orderNumber: "PRF-77312",
    date: "۱۴۰۳/۰۴/۲۸",
    status: "proforma",
    statusLabel: "پیش‌فاکتور رسمی (در انتظار تایید کارفرما)",
    totalAmount: 28500000,
    paymentStatus: "pending",
    destinationAddress: "تهران، سعادت‌آباد، خیابان سرو غربی، مجتمع مسکونی سروستان",
    items: [
      {
        name: "درب طبقه تمام‌اتوماتیک تلسکوپی ویتور مدل Augusta",
        partNumber: "WIT-AUG-T2-80",
        brand: "Wittur (آلمان)",
        quantity: 1,
        unitPrice: 28500000,
        slug: "wittur-augusta-landing-door",
      },
    ],
  },
];

export const CUSTOMER_SERVICE_LOGS: PanelServiceLog[] = [
  {
    id: "srv-log-1",
    serviceTitle: "سرویس و پایش دوره‌ای ماهانه (تیرماه ۱۴۰۳)",
    type: "monthly",
    technicianName: "مهندس علیرضا حسینی",
    technicianLicense: "پروانه اشتغال مهندسی: ۹۱۴۸-تهران",
    technicianPhone: "۰۹۱۲۱۱۱۰۰۰۰",
    date: "۱۴۰۳/۰۴/۰۲",
    time: "۱۰:۱۵ الی ۱۱:۴۵",
    status: "completed",
    checklistScore: "۴۲ از ۴۲ نقطه کنترلی تایید شد (۱۰۰٪ سلامت عملیاتی)",
    motorRoomStatus: "لنت‌های ترمز رگلاژ شد، سطح روغن گیربکس بررسی و آمپراژ موتور ۵.۲ آمپر ثبت گردید.",
    shaftStatus: "ریل‌ها تمیزکاری و روغن‌دان‌ها شارژ شدند، کشش سیم‌بکسل‌ها یکنواخت است.",
    cabinStatus: "سنسور پرده‌ای نوری و سیستم نجات اضطراری Blackout با موفقیت تست گردید.",
    notes: "آسانسور در شرایط ایمن و پایدار تحویل مدیر مجتمع شد؛ نوبت بعدی سرویس برای اوایل مرداد برنامه‌ریزی گردید.",
    signedByManager: true,
  },
  {
    id: "srv-log-2",
    serviceTitle: "آزمون ممیزی سالانه و تمدید گواهی استاندارد ادواری",
    type: "standard",
    technicianName: "مهندس احسان طاهری (ناظر ارشد لیفتالند)",
    technicianLicense: "پروانه نظارت استاندارد: STD-412",
    technicianPhone: "۰۹۱۲۲۲۲۰۰۰۰",
    date: "۱۴۰۲/۱۱/۲۰",
    time: "۰۹:۰۰ الی ۱۳:۳۰",
    status: "completed",
    checklistScore: "قبولی در ممیزی بازرس رسمی شرکت استاندارد کشوری",
    motorRoomStatus: "حفاظ کامل فلکه، روشنایی ۲۰۰ لوکس و کپسول CO2 تایید شد.",
    shaftStatus: "تست سقوط و عملکرد فک‌های ترمز ایمنی (پاراشوت) با بار نامی تایید گردید.",
    cabinStatus: "کلید استپ اضطراری و اینترکام کابین به موتورخانه تایید شد.",
    notes: "کد رهگیری گواهینامه استاندارد ملی صادر و در سامانه ثبت گردید. اعتبار تا ۱۴۰۳/۱۱/۲۰.",
    signedByManager: true,
  },
  {
    id: "srv-log-3",
    serviceTitle: "سرویس و پایش دوره‌ای ماهانه (خرداد ۱۴۰۳)",
    type: "monthly",
    technicianName: "مهندس علیرضا حسینی",
    technicianLicense: "پروانه اشتغال مهندسی: ۹۱۴۸-تهران",
    technicianPhone: "۰۹۱۲۱۱۱۰۰۰۰",
    date: "۱۴۰۳/۰۳/۰۴",
    time: "۱۱:۰۰ الی ۱۲:۳۰",
    status: "completed",
    checklistScore: "۴۲ از ۴۲ نقطه کنترل شد (تعویض کفشک هرزگرد انجام شد)",
    motorRoomStatus: "پایش حرارتی سیم‌پیچ موتورخانه با ترموویژن انجام شد (دمای نرمال ۵۱ درجه).",
    shaftStatus: "کفشک‌های لغزشی وزنه تعادل تعویض و لقی‌های اضافه حذف گردید.",
    cabinStatus: "روشنایی اضطراری و شستی‌های کابین نرمال هستند.",
    notes: "قطعه کفشک از انبار مرکزی با تخفیف اشتراک ماهانه تامین و تعویض شد.",
    signedByManager: true,
  },
];

export const MOCK_PANEL_DATA: PanelData = {
  passport: {
    buildingName: "مجتمع مسکونی سروستان",
    address: "تهران، سعادت‌آباد، خیابان سرو غربی، پلاک ۴۲",
    managerName: "مهندس علیرضا سلیمانی",
    phone: "۰۹۱۲۳۴۵۶۷۸۹",
    stops: 8,
    capacity: "۸ نفره (۶۳۰ کیلوگرم)",
    motorModel: "سیسیور MR12 - ۵.۵ کیلووات VVVF",
    controllerModel: "آریان سیستم با درایو آرکد ۱۵ کیلووات",
    standardStatus: "valid",
    standardExpiryDate: "۱۴۰۳/۱۱/۲۰",
    insurancePolicyNumber: "INS-982415-AS",
    insuranceExpiryDate: "۱۴۰۳/۱۱/۲۰",
    nextServiceDate: "۱۴۰۳/۰۵/۰۲ (۴ روز مانده)",
  },
  metrics: {
    activeOrders: 1,
    openTickets: 1,
    daysToNextService: 4,
  },
  recentOrders: CUSTOMER_ORDERS.slice(0, 1),
  recentServices: CUSTOMER_SERVICE_LOGS.slice(0, 1),
  recentTickets: [
    {
      id: "tkt-1",
      subject: "استعلام سازگاری سنسور دورانی انکودر تابلو",
      department: "پشتیبانی مهندسی درایو",
      status: "answered",
      updatedAt: "امروز، ساعت ۱۰:۳۰",
    },
  ],
};

export async function getPanelData(): Promise<PanelData> {
  return MOCK_PANEL_DATA;
}

export async function getCustomerOrders(statusFilter?: string): Promise<PanelOrder[]> {
  if (statusFilter && statusFilter !== "all") {
    return CUSTOMER_ORDERS.filter((o) => o.status === statusFilter);
  }
  return CUSTOMER_ORDERS;
}

export async function getCustomerServices(typeFilter?: string): Promise<PanelServiceLog[]> {
  if (typeFilter && typeFilter !== "all") {
    return CUSTOMER_SERVICE_LOGS.filter((s) => s.type === typeFilter);
  }
  return CUSTOMER_SERVICE_LOGS;
}