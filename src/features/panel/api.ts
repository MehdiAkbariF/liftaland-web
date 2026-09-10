import { PanelData, PanelOrder } from "./types";

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
  recentServices: [
    {
      id: "srv-1",
      serviceTitle: "سرویس دوره‌ای ماهانه (چک‌لیست ۴۲ گانه)",
      technicianName: "مهندس حسینی (پروانه ۹۱۴)",
      date: "۱۴۰۳/۰۴/۰۲",
      status: "completed",
      checklistScore: "۴۲ از ۴۲ نقطه کنترل شد (بدون عیب)",
    },
  ],
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