import { MetadataRoute } from "next"

export const dynamic = "force-static"

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://toludopemu.com"

    const caseStudySlugs = [
        "post-office-cruise-insurance",
        "post-office-digital-pr",
        "guardian-jobs-content-seo",
        "johnnie-walker-prince-street",
        "audi-local-seo-footfall",
        "tiger-recruitment-local-seo",
    ]

    const blogSlugs = [
        "modern-seo-ai-era",
        "content-cluster-strategy",
        "digital-pr-seo-backlinks",
        "seo-burnout-strategies",
        "geo-generative-engine-optimisation",
        "networking-for-introverts",
    ]

    return [
        { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
        { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
        { url: `${baseUrl}/services`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
        { url: `${baseUrl}/case-studies`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.85 },
        { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
        ...caseStudySlugs.map((slug) => ({
            url: `${baseUrl}/case-studies/${slug}`,
            lastModified: new Date(),
            changeFrequency: "monthly" as const,
            priority: 0.75,
        })),
        ...blogSlugs.map((slug) => ({
            url: `${baseUrl}/blog/${slug}`,
            lastModified: new Date(),
            changeFrequency: "monthly" as const,
            priority: 0.7,
        })),
    ]
}
