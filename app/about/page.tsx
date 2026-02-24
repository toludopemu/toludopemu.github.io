import type { Metadata } from "next"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { ContactSection } from "@/components/ContactSection"
import { experience, communityContributions } from "@/lib/data"
import { Users, Globe, ExternalLink, Award, Heart, ShieldCheck } from "lucide-react"

export const metadata: Metadata = {
    title: "About",
    description:
        "Learn about Nofisat Tolu Dopemu's professional journey — from founding an award-winning travel brand to leading SEO strategy for Post Office Limited, PHD Media and NP Digital.",
}

const skills = [
    "Content Strategy", "Local SEO", "International SEO", "Backlink & Link Building",
    "Technical SEO", "AI Workflow", "Competitor Audit", "Digital PR", "GEO",
]

const tools = [
    "STAT", "Sitebulb", "SEMrush", "WordPress", "GA4", "Canva",
    "Botify", "Microsoft Excel", "Ahrefs", "Jira", "Buzzsumo", "Google Search Console",
]

const certifications = [
    "Tech SEO Pro (Kristina Azarenko)",
    "Technical SEO (Blue Array)",
    "Local SEO (SEMrush)",
    "PPC and SEO (SEMrush)",
    "Data Analytics Foundation Certificate",
]

export default function AboutPage() {
    return (
        <div className="pt-24">
            {/* Hero */}
            <section className="py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-background via-primary/10 to-background">
                <div className="container max-w-6xl grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <Badge variant="gradient">About Nofisat Tolu Dopemu</Badge>
                        <h1 className="text-5xl font-extrabold text-foreground leading-tight">
                            SEO Strategist. <br />
                            <span className="bg-gradient-to-r from-rose-400 to-primary bg-clip-text text-transparent">
                                Digital Innovator. Former Founder.
                            </span>
                        </h1>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                            I&apos;ve spent 4+ years bridging the gap between complex search data and business growth —
                            first as a founder, then as a strategist trusted by global brands. My edge? I always think like a business owner,
                            not just an SEO practitioner.
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                            Member of Women in Tech SEO, Media for All, FCDC, TOFU. 2× BIPOC Talent Mentor providing
                            8-week programmes in on-page SEO, keyword research and career development.
                        </p>
                    </div>
                    <div className="relative max-w-sm mx-auto lg:mx-0 lg:ml-auto">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary to-rose-600 rounded-3xl blur-2xl opacity-30 scale-105" />
                        <div className="relative overflow-hidden rounded-3xl border border-white/20 aspect-[3/4]">
                            <Image src="/1768121933380.jpeg" alt="Nofisat Tolu Dopemu" fill className="object-cover object-top" priority />
                        </div>
                    </div>
                </div>
            </section>

            {/* Experience Timeline */}
            <section className="py-24 px-6 md:px-12 lg:px-24">
                <div className="container max-w-4xl">
                    <div className="text-center mb-16 space-y-4">
                        <Badge variant="gradient">Experience</Badge>
                        <h2 className="text-4xl font-bold">Professional Journey</h2>
                    </div>
                    <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-border" />
                        <div className="space-y-12">
                            {experience.map((job, i) => (
                                <div key={i} className="relative pl-12 md:pl-20">
                                    {/* Dot */}
                                    <div className={`absolute left-2 md:left-6 top-1.5 w-5 h-5 rounded-full ${job.color} ring-4 ring-background`} />
                                    <div className="p-6 rounded-2xl border bg-card hover:shadow-lg transition-all duration-300">
                                        <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                                            <div>
                                                <h3 className="text-xl font-bold">{job.role}</h3>
                                                <a href={job.url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">
                                                    {job.company}
                                                </a>
                                                <span className="text-muted-foreground text-sm"> · {job.location}</span>
                                            </div>
                                            <Badge variant="outline" className="shrink-0 text-xs font-bold">{job.period}</Badge>
                                        </div>

                                        {job.clients && (
                                            <p className="text-xs font-bold uppercase tracking-wider text-primary mb-2">
                                                Clients: <span className="text-muted-foreground normal-case font-medium">{job.clients}</span>
                                            </p>
                                        )}

                                        {job.responsibilities && (
                                            <div className="mb-4">
                                                <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">Core Responsibilities</p>
                                                <p className="text-sm text-foreground/80 leading-relaxed font-medium italic underline decoration-primary/20 underline-offset-4">{job.responsibilities}</p>
                                            </div>
                                        )}

                                        <div className="space-y-2">
                                            <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">Key Achievements</p>
                                            <ul className="space-y-2 mt-3">
                                                {job.bullets.map((b, j) => (
                                                    <li key={j} className="flex gap-2 text-sm text-muted-foreground leading-relaxed">
                                                        <span className={`mt-1.5 w-1.5 h-1.5 rounded-full ${job.color} shrink-0`} />
                                                        {b}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Mentoring & Community Contribution */}
            <section className="py-24 px-6 md:px-12 lg:px-24 bg-muted/30">
                <div className="container max-w-4xl">
                    <div className="text-center mb-16 space-y-4">
                        <Badge variant="gradient">Giving Back</Badge>
                        <h2 className="text-4xl font-bold">Mentoring & SEO Community</h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            I am committed to fostering diversity in search and supporting the next generation of SEO talent.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {communityContributions.map((item) => (
                            <div key={item.id} className="p-8 rounded-3xl border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-xl group">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:scale-110 transition-transform">
                                        {item.icon === "Users" ? <Users size={24} /> : <Globe size={24} />}
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2">
                                            <Badge variant="secondary" className="text-[10px] uppercase tracking-tighter h-5">
                                                {item.type}
                                            </Badge>
                                            <span className="text-xs text-muted-foreground font-medium">{item.period}</span>
                                        </div>
                                        <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{item.title}</h3>
                                        <p className="text-sm font-semibold text-foreground/80">{item.organization}</p>
                                        {item.url && (
                                            <a
                                                href={item.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:underline pt-2"
                                            >
                                                Learn More <ExternalLink size={12} />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Community Impact Summary */}
                    <div className="mt-16 p-8 rounded-[40px] bg-gradient-to-br from-primary/10 to-rose-500/10 border border-primary/10 flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
                        <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-lg shrink-0">
                            <Heart className="text-rose-500" fill="currentColor" size={32} />
                        </div>
                        <div className="space-y-2">
                            <h4 className="text-lg font-bold">Community Impact</h4>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                Beyond active mentoring, I am a member of **Media for All**, **TOFU**, and **Women in Tech SEO**. I provide structured 8-week programmes focusing on on-page SEO, keyword research, and career development for BIPOC talent.
                            </p>
                        </div>
                        <div className="shrink-0 hidden md:block">
                            <ShieldCheck className="text-primary h-12 w-12 opacity-20" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills & Tools */}
            <section className="py-24 px-6 md:px-12 lg:px-24 bg-muted/30">
                <div className="container max-w-4xl">
                    <div className="grid md:grid-cols-3 gap-12">
                        <div>
                            <h3 className="text-xl font-bold mb-6">Core Skills</h3>
                            <div className="flex flex-wrap gap-2">
                                {skills.map((s) => (
                                    <span key={s} className="text-sm bg-primary/10 text-primary border border-primary/20 rounded-full px-3 py-1">{s}</span>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-6">Tools & Tech</h3>
                            <div className="flex flex-wrap gap-2">
                                {tools.map((t) => (
                                    <span key={t} className="text-sm bg-muted border rounded-full px-3 py-1 text-muted-foreground">{t}</span>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-6">Certifications</h3>
                            <ul className="space-y-2">
                                {certifications.map((c) => (
                                    <li key={c} className="flex gap-2 text-sm text-muted-foreground">
                                        <span className="text-primary mt-0.5">✓</span> {c}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <ContactSection />
        </div>
    )
}
