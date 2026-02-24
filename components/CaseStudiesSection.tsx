"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, TrendingUp, ExternalLink } from "lucide-react"
import { caseStudies } from "@/lib/data"

export function CaseStudiesSection() {
    return (
        <section id="case-studies" className="py-24 px-6 md:px-12 lg:px-24 bg-muted/30">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16 space-y-4"
                >
                    <Badge variant="gradient">Case Studies</Badge>
                    <h2 className="text-4xl font-bold">Impact-Driven Results</h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Real campaigns, real numbers. Every project is built around business value and measurable outcomes.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {caseStudies.map((study, i) => (
                        <motion.div
                            key={study.slug}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                        >
                            <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                                {/* Gradient header bar */}
                                <div className={`h-1.5 bg-gradient-to-r ${study.color}`} />
                                <CardHeader className="pb-3">
                                    <div className="flex items-start justify-between gap-4">
                                        <div>
                                            <p className="text-sm text-muted-foreground">{study.industry}</p>
                                            <div className="flex items-center gap-2 mt-1">
                                                <CardTitle className="text-2xl">{study.client}</CardTitle>
                                                {study.clientUrl && (
                                                    <a
                                                        href={study.clientUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="p-1.5 rounded-lg bg-primary/5 text-primary hover:bg-primary hover:text-primary-foreground transition-colors group/link"
                                                        title={`Visit ${study.client} website`}
                                                    >
                                                        <ExternalLink size={14} className="group-hover/link:scale-110 transition-transform" />
                                                    </a>
                                                )}
                                            </div>
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
                                    <h3 className="font-bold text-lg leading-tight line-clamp-1">{study.title}</h3>
                                    <div>
                                        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">Challenge</p>
                                        <p className="text-sm line-clamp-2">{study.challenge}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">Strategy</p>
                                        <p className="text-sm line-clamp-2">{study.strategy}</p>
                                    </div>
                                    {/* Results */}
                                    <div className="grid grid-cols-3 gap-3 pt-2">
                                        {study.results.map((r) => (
                                            <div key={r.label} className="text-center p-3 rounded-xl bg-muted">
                                                <p className={`text-xl font-bold bg-gradient-to-r ${study.color} bg-clip-text text-transparent`}>{r.value}</p>
                                                <p className="text-[10px] text-muted-foreground mt-1 uppercase tracking-tighter font-bold">{r.label}</p>
                                            </div>
                                        ))}
                                    </div>
                                    <Button variant="ghost" size="sm" className="w-full mt-2 group font-bold" asChild>
                                        <Link href={`/case-studies/${study.slug}`}>
                                            View Full Case Study
                                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                        </Link>
                                    </Button>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
