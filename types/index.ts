export interface NavItem {
    label: string;
    href: string;
}

export interface Metric {
    label: string;
    value: string;
    suffix?: string;
}

export interface Service {
    id: string;
    title: string;
    description: string;
    icon: string;
    details: string[];
    deliverables?: string[];
    results?: string[];
}

export interface CaseStudy {
    slug: string;
    title: string;
    client: string;
    industry: string;
    challenge: string;
    strategy: string;
    results: {
        label: string;
        value: string;
    }[];
    imageUrl: string;
    tags: string[];
    color: string;
    clientUrl?: string;
    tactics?: string[];
    takeaways?: string[];
    fullStory?: string;
    technicalStack?: string[];
}

export interface BlogPost {
    slug: string;
    title: string;
    date: string;
    readTime: string;
    excerpt: string;
    content: string;
    author: {
        name: string;
        image: string;
    };
    tags: string[];
    color: string;
    linkedInUrl?: string;
}
export interface PressFeature {
    id: string;
    title: string;
    platform: string;
    imageUrl: string;
    url?: string;
    type: "Article" | "Interview" | "Speaking" | "Award" | "Charity" | "Video";
}
export interface Experience {
    role: string;
    company: string;
    period: string;
    location: string;
    url: string;
    responsibilities?: string;
    clients?: string;
    bullets: string[];
    color: string;
}

export interface CommunityContribution {
    id: string;
    title: string;
    organization: string;
    period: string;
    url?: string;
    type: "Mentoring" | "Community";
    icon: string;
}
