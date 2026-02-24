"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import CountUp from "react-countup"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const metrics = [
    { label: "Organic Growth", value: 300, suffix: "%", prefix: "+", },
    { label: "Projects Delivered", value: 50, suffix: "+", prefix: "", },
    { label: "Industries Served", value: 10, suffix: "+", prefix: "", },
    { label: "Audience Reach", value: 9.3, suffix: "M+", prefix: "", decimals: 1 },
]

const highlights = [
    "Agency & In-house SEO",
    "Former Founder",
    "Digital PR",
    "AI Workflow Integration",
    "Women in Tech SEO Member",
    "BIPOC Talent Mentor",
]

export function AboutSection() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: "-100px" })

    return (
        <section id="about" className="py-24 px-6 md:px-12 lg:px-24 bg-muted/30">
            <div className="container">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Image column */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7 }}
                        className="relative"
                    >
                        <div className="relative max-w-sm mx-auto lg:mx-0">
                            <div className="absolute inset-0 bg-primary/5 rounded-3xl blur-2xl opacity-40 shrink-0" />
                            <div className="relative overflow-hidden rounded-3xl border bg-card aspect-[3/4] hidden lg:block">
                                <Image
                                    src="/1768121933380.jpeg"
                                    alt="Nofisat Tolu Dopemu"
                                    fill
                                    className="object-cover object-top"
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Content column */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7 }}
                        className="space-y-8"
                    >
                        <div>
                            <Badge variant="outline" className="mb-4 text-primary border-primary/20 bg-primary/5 uppercase tracking-widest text-[10px] font-bold py-1 px-4">About Me</Badge>
                            <h2 className="text-4xl font-bold mb-4">
                                Bridging Search Data & Business Growth
                            </h2>
                            <p className="text-muted-foreground leading-relaxed text-lg">
                                SEO STRATEGIST & DIGITAL INNOVATION PROFESSIONAL with 4+ years of experience across agency and in-house environments.
                                As a former founder of an award-winning travel brand, I prioritise business impact and customer value above all else — bridging complex search data and actionable growth strategies.
                            </p>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                            {highlights.map((h) => (
                                <span key={h} className="text-xs font-semibold uppercase tracking-wider bg-primary/5 text-primary border border-primary/20 rounded-lg px-4 py-2 hover:bg-primary/10 transition-colors">
                                    {h}
                                </span>
                            ))}
                        </div>

                        {/* Metrics */}
                        <div ref={ref} className="grid grid-cols-2 gap-4">
                            {metrics.map((m) => (
                                <div key={m.label} className="p-6 rounded-2xl border bg-card hover:border-primary/30 transition-colors group">
                                    <p className="text-3xl font-extrabold text-primary group-hover:scale-105 transition-transform origin-left">
                                        {m.prefix}
                                        {inView ? (
                                            <CountUp end={m.value} duration={2.5} decimals={m.decimals || 0} />
                                        ) : (
                                            0
                                        )}
                                        {m.suffix}
                                    </p>
                                    <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mt-2">{m.label}</p>
                                </div>
                            ))}
                        </div>

                        <div className="pt-4">
                            <Button variant="ghost" className="group font-bold text-primary p-0 hover:bg-transparent" asChild>
                                <Link href="/about">
                                    Read Full Professional Story
                                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
