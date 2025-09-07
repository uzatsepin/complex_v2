export interface IBlogPost {
  id: number;
  slug?: string;
  title: string;
  excerpt: string;
  content?: string;
  category: string;
  categoryStyle?: string;
  glowColor?: string;
  author: string;
  date: string;
  readTime: number;
  image: string;
  tags: string[];
  views: string;
  likes: number;
  isPopular: boolean;
}

export interface IService {
  id: number;
  title: string;
  description: string;
  icon: string;
  iconBg: string;
  iconColor?: string;
  gradient: string;
  badge?: string;
  features: string[];
  timeline: string;
  price: string;
  slug: string;
  detailedDescription?: string;
  benefits?: string[];
  techStack?: string[];
  process?: {
    step: string;
    description: string;
  }[];
  portfolio?: {
    title: string;
    image: string;
    description: string;
  }[];
  faqs?: {
    question: string;
    answer: string;
  }[];
}