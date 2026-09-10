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
  image: string;
  completionDate: string;
  challenge: string;
  solution: string;
  componentsUsed: string[];
  resultMetric: string;
}