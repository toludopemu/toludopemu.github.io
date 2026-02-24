import type { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { ContactSection } from "@/components/ContactSection"
import { Settings, FileText, TrendingUp, Cpu, Link, Megaphone, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
    title: "Services",
    description:
        "SEO services by Nofisat Tolu Dopemu: Technical SEO, Content Strategy, Digital PR, AI Automation, Growth Marketing and SEO Audits.",
}

const services = [
    {
        icon: Settings,
        title: "Technical SEO",
        description: "Building search-ready foundations that scale.",
        color: "from-rose-500 to-primary",
        border: "border-primary/20",
        bg: "from-rose-500/5 to-primary/5",
        includes: [
            "Full technical site crawl & audit",
            "Core Web Vitals analysis & remediation",
            "Schema markup implementation",
            "Hreflang & international SEO",
            "XML sitemap & robots.txt optimisation",
            "Site migration strategy & QA",
        ],
        deliverables: ["Prioritised issue matrix", "Annotated audit report", "30/60/90 day fix roadmap"],
        results: "Improved crawlability, indexation and ranking potential.",
    },
    {
        icon: FileText,
        title: "Content Strategy",
        description: "Intent-led content that drives rankings without cannibalization.",
        color: "from-violet-500 to-purple-500",
        border: "border-violet-500/20",
        bg: "from-violet-500/5 to-purple-500/5",
        includes: [
            "Keyword research & gap analysis",
            "Content cluster mapping",
            "Competitor content audit",
            "E-E-A-T content optimisation",
            "Brief creation & editorial support",
            "Content refresh & lifecycle management",
        ],
        deliverables: ["Cluster map & internal link plan", "Keyword briefing sheets", "Content calendar"],
        results: "Increased keyword visibility, traffic and topical authority.",
    },
    {
        icon: TrendingUp,
        title: "Growth Marketing",
        description: "Cross-channel strategies that combine SEO with commercial impact.",
        color: "from-emerald-500 to-teal-500",
        border: "border-emerald-500/20",
        bg: "from-emerald-500/5 to-teal-500/5",
        includes: [
            "Organic + paid collaboration (PPC/SEO)",
            "Conversion Rate Optimisation (CRO)",
            "Local SEO strategy",
            "Analytics setup (GA4 / GSC)",
            "Executive-level dashboards & reporting",
            "Cross-team project management",
        ],
        deliverables: ["Monthly performance reports", "Opportunity roadmap", "Attribution model"],
        results: "Sustainable organic growth with measurable revenue impact.",
    },
    {
        icon: Megaphone,
        title: "Digital PR & Link Building",
        description: "High-reach campaigns that build authority at scale.",
        color: "from-pink-500 to-rose-500",
        border: "border-pink-500/20",
        bg: "from-pink-500/5 to-rose-500/5",
        includes: [
            "Reactive & proactive PR ideation",
            "Data-led campaign creation",
            "Journalist outreach & media lists",
            "Backlink gap & competitor analysis",
            "Monthly link acquisition tracking",
            "Agency relationship management",
        ],
        deliverables: ["Coverage report", "Backlink profile analysis", "Domain authority growth tracking"],
        results: "Stronger domain authority and topically-relevant backlinks.",
    },
    {
        icon: Cpu,
        title: "AI & Automation Consulting",
        description: "Streamlining SEO workflows using AI tooling.",
        color: "from-amber-500 to-orange-500",
        border: "border-amber-500/20",
        bg: "from-amber-500/5 to-orange-500/5",
        includes: [
            "AI content generation workflow design",
            "Prompt engineering for SEO briefs",
            "GEO (Generative Engine Optimisation)",
            "Automated reporting pipelines",
            "Trend forecasting via AI tools",
            "Tool evaluation & stack recommendations",
        ],
        deliverables: ["AI workflow documentation", "Tool recommendation report", "Automation audit"],
        results: "Faster output, reduced manual work, competitive AI-readiness.",
    },
    {
        icon: Link,
        title: "SEO Audits",
        description: "Deep-dive audits that surface wins and long-term strategy.",
        color: "from-primary to-purple-600",
        border: "border-primary/20",
        bg: "from-primary/5 to-purple-500/5",
        includes: [
            "Technical SEO health check",
            "On-page & content audit",
            "Backlink profile review",
            "Competitor benchmark analysis",
            "Quick-win identification",
            "Strategic growth recommendations",
        ],
        deliverables: ["Scored audit document", "Priority action matrix", "Strategy session call"],
        results: "Clear picture of where you stand and exactly what to fix first.",
    },
]

export default function ServicesPage() {
    return (
        <div className="pt-24">
            {/* Header */}
            <section className="py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-background via-primary/10 to-background text-center">
                <div className="container max-w-3xl space-y-6">
                    <Badge variant="gradient">Services</Badge>
                    <h1 className="text-5xl font-extrabold text-foreground leading-tight">
                        SEO Services Built for{" "}
                        <span className="bg-gradient-to-r from-rose-400 to-primary bg-clip-text text-transparent">
                            Business Impact
                        </span>
                    </h1>
                    <p className="text-muted-foreground text-lg">
                        Every engagement is designed around measurable outcomes. No vanity metrics — just real, sustainable organic growth.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-24 px-6 md:px-12 lg:px-24">
                <div className="container max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8">
                    {services.map((s) => {
                        const Icon = s.icon
                        return (
                            <Card key={s.title} className={`border ${s.border} bg-gradient-to-br ${s.bg} hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}>
                                <CardHeader>
                                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center text-white mb-2`}>
                                        <Icon size={22} />
                                    </div>
                                    <CardTitle className="text-2xl">{s.title}</CardTitle>
                                    <CardDescription className="text-base">{s.description}</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div>
                                        <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-3">What&apos;s Included</p>
                                        <ul className="space-y-2">
                                            {s.includes.map((item) => (
                                                <li key={item} className="flex items-start gap-2 text-sm">
                                                    <CheckCircle className={`h-4 w-4 mt-0.5 shrink-0 bg-gradient-to-br ${s.color} rounded-full text-white`} />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-3">Deliverables</p>
                                        <div className="flex flex-wrap gap-2">
                                            {s.deliverables.map((d) => (
                                                <span key={d} className="text-xs border rounded-full px-3 py-1 text-muted-foreground">{d}</span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className={`p-3 rounded-xl bg-gradient-to-r ${s.color} text-white text-sm font-medium`}>
                                        🎯 {s.results}
                                    </div>
                                </CardContent>
                            </Card>
                        )
                    })}
                </div>
            </section>

            <ContactSection />
        </div>
    )
}
