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
        id: number;
        question: string;
        answer: string;
    }[];
}

export interface Iindustry {
    id: number;
    title: string;
    description: string;
    detailedDescription: string;
    icon: string;
    iconBg: string;
    iconColor: string;
    titleGradient: string;
    glowColor: string;
    pattern: string;
    isTop: boolean;
    projectsCount: number;
    growthRate: string;
    avgTimeline: string;
    successRate: number;
    technologies: string[];
    caseStudy: string;
}

export interface IReview {
    id: number;
    author: string;
    position: string;
    company: string;
    rating: number;
    content: string;
    projectType: string;
    projectIcon: string;
    date: string;
    category: string;
}

export interface IWorkStep {
    id: number;
    title: string;
    description: string;
    detailedDescription: string;
    duration: string;
    team: string;
    deliverables: string[];
    tools: string[];
    tasks: string[];
    results: string[];
    progress: number;
    icon: string;
    iconBg: string;
    iconColor: string;
    nodeBg: string;
    nodeInner: string;
    glowColor: string;
    isPopular: boolean;
}

export interface IProcessBenefits {
    id: number;
    title: string;
    description: string;
    icon: string;
    iconBg: string;
    iconColor: string;
}