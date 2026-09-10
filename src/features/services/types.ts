export interface ChecklistGroup {
  category: string;
  items: string[];
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceItem {
  id: string;
  slug: string;
  code: string;
  title: string;
  tagline: string;
  targetAudience: string;
  problemSolved: string;
  timeline: string;
  standardReference: string;
  steps: string[];
  checklistGroups: ChecklistGroup[];
  deliverables: string[];
  faqs: ServiceFAQ[];
}