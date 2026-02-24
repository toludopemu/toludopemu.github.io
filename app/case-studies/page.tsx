import type { Metadata } from "next"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, TrendingUp } from "lucide-react"
import { ContactSection } from "@/components/ContactSection"

export const metadata: Metadata = {
    title: "Case Studies",
    description:
        "Real SEO results for Post Office Limited, Johnnie Walker, Guardian UK and more. See the strategies and measurable outcomes Nofisat Tolu Dopemu delivered.",
}

const caseStudies = [
    {
        slug: "post-office-cruise-insurance",
        client: "Post Office Limited",
        industry: "Financial Services / Insurance",
        problem: "Zero visibility for cruise insurance keywords in a competitive SERP landscape.",
        strategy: "Engineered a top-middle-bottom content cluster protecting existing product pages while expanding reach.",
        results: [
            { label: "Keywords Ranking", value: "193" },
            { label: "Starting Point", value: "0" },
            { label: "Timeframe", value: "6 Months" },
        ],
        tags: ["Content Strategy", "Technical SEO", "Financial Services"],
        color: "from-rose-500 to-primary",
    },
    {
        slug: "post-office-digital-pr",
        client: "Post Office Limited",
        industry: "Financial Services / Insurance",
        problem: "Required high-quality backlinks and brand authority to support key landing pages.",
        strategy: "Directed 7 data-led Digital PR campaigns including 'Pet Panics', 'Boomerang Life', 'Stolen Cars', 'Staycations'.",
        results: [
            { label: "Audience Reach", value: "9.3M+" },
            { label: "Placements", value: "1,400+" },
            { label: "Campaigns", value: "7" },
        ],
        tags: ["Digital PR", "Link Building"],
        color: "from-violet-500 to-purple-600",
    },
    {
        slug: "guardian-jobs-content-seo",
        client: "Guardian UK",
        industry: "Media & Publishing",
        problem: "Existing jobs content was not capturing search intent and underperforming historically.",
        strategy: "Enriched content with intent-focused, data-backed keywords and overhauled heading structure.",
        results: [
            { label: "Page Views", value: "+75%" },
            { label: "Benchmark", value: "3-Year Best" },
            { label: "SEO Investment", value: "+100%" },
        ],
        tags: ["Content SEO", "Media", "On-Page"],
        color: "from-emerald-500 to-teal-600",
    },
    {
        slug: "johnnie-walker-prince-street",
        client: "Johnnie Walker / Diageo",
        industry: "Retail & Experience",
        problem: "Low awareness and bookings for the premium Prince Street brand experience.",
        strategy: "Led keyword research and content gap analysis targeting high purchase-intent queries.",
        results: [
            { label: "Ticket Sales", value: "+75%" },
            { label: "SEO ROI", value: "High" },
        ],
        tags: ["SEO Strategy", "Retail", "Keyword Research"],
        color: "from-amber-500 to-orange-600",
    },
    {
        slug: "audi-local-seo-footfall",
        client: "Audi / PHD Media",
        industry: "Automotive",
        problem: "Needed to drive physical dealership visits through digital channels.",
        strategy: "Implemented a comprehensive local SEO strategy with enhanced GMB and location page optimisation.",
        results: [
            { label: "Footfall", value: "+40%" },
            { label: "Site Visibility", value: "+10%" },
            { label: "Conversions", value: "+5%" },
        ],
        tags: ["Local SEO", "Automotive", "Analytics"],
        color: "from-red-500 to-pink-600",
    },
    {
        slug: "tiger-recruitment-local-seo",
        client: "Tiger Recruitment",
        industry: "Recruitment",
        problem: "Needed faster organic traction in a competitive recruitment SERP.",
        strategy: "Built a local SEO strategy targeting high-value query clusters for key recruitment verticals.",
        results: [
            { label: "Sessions", value: "+20%" },
            { label: "Timeframe", value: "2 Months" },
            { label: "Organic Traffic", value: "+27%" },
        ],
        tags: ["Local SEO", "Recruitment"],
        color: "from-primary to-purple-600",
    },
]

export default function CaseStudiesPage() {
    return (
        <div className="pt-24">
            <section className="py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-background via-primary/10 to-background text-center">
                <div className="container max-w-3xl space-y-6">
                    <Badge variant="gradient">Case Studies</Badge>
                    <h1 className="text-5xl font-extrabold text-foreground leading-tight">
                        Results That{" "}
                        <span className="bg-gradient-to-r from-rose-400 to-primary bg-clip-text text-transparent">
                            Speak for Themselves
                        </span>
                    </h1>
                    <p className="text-muted-foreground text-lg">
                        Every case study is built around a real client challenge and a documented, measurable outcome.
                    </p>
                </div>
            </section>

            <section className="py-24 px-6 md:px-12 lg:px-24">
                <div className="container max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6">
                    {caseStudies.map((study) => (
                        <Card key={study.slug} className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                            <div className={`h-1.5 bg-gradient-to-r ${study.color}`} />
                            <CardHeader>
                                <div className="flex items-start justify-between gap-4">
                                    <div>
                                        <p className="text-sm text-muted-foreground">{study.industry}</p>
                                        <CardTitle className="text-2xl mt-1">{study.client}</CardTitle>
                                    </div>
                                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${study.color} flex items-center justify-center flex-shrink-0`}>
                                        <TrendingUp size={18} className="text-white" />
                                    </div>
                                </div>
                                <div className="flex gap-2 flex-wrap mt-2">
                                    {study.tags.map((t) => <Badge key={t} variant="outline" className="text-xs">{t}</Badge>)}
                                </div>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">Challenge</p>
                                    <p className="text-sm">{study.problem}</p>
                                </div>
                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">Strategy</p>
                                    <p className="text-sm">{study.strategy}</p>
                                </div>
                                <div className="grid grid-cols-3 gap-3 pt-2">
                                    {study.results.map((r) => (
                                        <div key={r.label} className="text-center p-3 rounded-xl bg-muted">
                                            <p className={`text-xl font-bold bg-gradient-to-r ${study.color} bg-clip-text text-transparent`}>{r.value}</p>
                                            <p className="text-xs text-muted-foreground mt-1">{r.label}</p>
                                        </div>
                                    ))}
                                </div>
                                <Button variant="ghost" size="sm" className="w-full mt-2 group" asChild>
                                    <Link href={`/case-studies/${study.slug}`}>
                                        View Full Case Study
                                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            <ContactSection />
        </div>
    )
}
