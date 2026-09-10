export interface MetricComparison {
  label: string;
  before: string;
  after: string;
}

export interface InstalledComponent {
  name: string;
  partNumber: string;
  productSlug?: string;
}

export interface ProjectVideo {
  id: string;
  title: string;
  topic: string;
  duration: string;
  views: string;
  thumbnail: string;
  videoSrc?: string; // آدرس فایل مستقیم ویدیو درون سایت
  instagramUrl?: string; // لینک کمکی اینستاگرام
}

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  category: "modernization" | "standard" | "maintenance" | "installation";
  categoryLabel: string;
  buildingType: string;
  location: string;
  stops: number;
  capacity: string;
  travelHeight?: string;
  ratedSpeed?: string;
  image: string;
  gallery?: string[];
  videos?: ProjectVideo[];
  completionDate: string;
  challenge: string;
  solution: string;
  componentsUsed: string[];
  installedProducts?: InstalledComponent[];
  metricsComparison?: MetricComparison[];
  resultMetric: string;
  inspectionCertificate?: string;
}