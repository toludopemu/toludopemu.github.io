import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { ContactSection } from "@/components/ContactSection"
import { ArrowLeft, TrendingUp } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { caseStudies } from "@/lib/data"

export async function generateStaticParams() {
    return caseStudies.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params
    const study = caseStudies.find(s => s.slug === slug)
    if (!study) return {}
    return {
        title: `${study.client} Case Study`,
        description: study.challenge.slice(0, 160),
    }
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const study = caseStudies.find(s => s.slug === slug)
    if (!study) notFound()

    return (
        <div className="pt-24">
            {/* Header */}
            <section className="py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-background via-primary/10 to-background">
                <div className="container max-w-4xl">
                    <Button variant="ghost" size="sm" className="mb-8 text-muted-foreground hover:text-primary" asChild>
                        <Link href="/case-studies"><ArrowLeft className="mr-2 h-4 w-4" /> All Case Studies</Link>
                    </Button>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {study.tags.map((t) => <Badge key={t} variant="gradient" className="text-xs">{t}</Badge>)}
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-3">{study.client}</h1>
                    <p className="text-primary/70 text-lg">{study.industry}</p>
                </div>
            </section>

            {/* Results bar */}
            <section className={`py-10 px-6 md:px-12 lg:px-24 bg-gradient-to-r ${study.color}`}>
                <div className="container max-w-4xl">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {study.results.map((r) => (
                            <div key={r.label} className="text-center text-white">
                                <p className="text-3xl font-extrabold">{r.value}</p>
                                <p className="text-sm opacity-80 mt-1">{r.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="py-24 px-6 md:px-12 lg:px-24">
                <div className="container max-w-4xl space-y-16">
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${study.color} flex items-center justify-center`}>
                                <TrendingUp size={16} className="text-white" />
                            </div>
                            <h2 className="text-2xl font-bold">The Challenge</h2>
                        </div>
                        <p className="text-muted-foreground text-lg leading-relaxed">{study.challenge}</p>
                    </div>
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${study.color} flex items-center justify-center`}>
                                <TrendingUp size={16} className="text-white" />
                            </div>
                            <h2 className="text-2xl font-bold">The Strategy</h2>
                        </div>
                        <p className="text-muted-foreground text-lg leading-relaxed">{study.strategy}</p>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold mb-6">SEO Tactics Used</h2>
                        <ul className="space-y-3">
                            {study.tactics?.map((t, i) => (
                                <li key={i} className="flex items-start gap-3 p-4 rounded-xl border bg-card">
                                    <span className={`mt-0.5 w-6 h-6 rounded-full bg-gradient-to-br ${study.color} flex items-center justify-center text-white text-xs font-bold shrink-0`}>{i + 1}</span>
                                    <span className="text-sm">{t}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold mb-6">Key Takeaways</h2>
                        <ul className="space-y-3">
                            {study.takeaways?.map((t, i) => (
                                <li key={i} className="flex items-start gap-3 text-muted-foreground">
                                    <span className="text-primary mt-0.5 text-lg">→</span>
                                    {t}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            <ContactSection />
        </div>
    )
}
