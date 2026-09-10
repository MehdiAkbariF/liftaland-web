import { PanelData } from "./types";

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
  recentOrders: [
    {
      id: "ord-1",
      orderNumber: "LFT-90214",
      partName: "ترمز ایمنی (پاراشوت) تدریجی دیناتک Qube",
      partNumber: "DYN-QUBE-2200",
      amount: 34500000,
      date: "۱۴۰۳/۰۴/۲۶",
      status: "shipped",
      trackingCode: "باربری وطن: ۹۸۳۱۴۲",
    },
  ],
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