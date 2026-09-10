export interface ArticleSection {
  heading: string;
  paragraphs: string[];
  checklist?: string[];
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  summary: string;
  category: "troubleshooting" | "standard" | "procurement" | "modernization";
  categoryLabel: string;
  readTime: string;
  publishedAt: string;
  author: string;
  authorRole: string;
  keyTakeaways: string[];
  sections: ArticleSection[];
  relatedServiceSlug?: string;
  relatedServiceTitle?: string;
  relatedProductSlug?: string;
  relatedProductTitle?: string;
}