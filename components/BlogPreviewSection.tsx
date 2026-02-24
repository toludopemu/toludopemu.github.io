"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Clock, Calendar } from "lucide-react"
import { blogPosts } from "@/lib/data"

export function BlogPreviewSection() {
    const posts = blogPosts.slice(0, 3)
    return (
        <section id="blog" className="py-24 px-6 md:px-12 lg:px-24 bg-muted/30">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4"
                >
                    <div className="space-y-4">
                        <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 uppercase tracking-widest text-[10px] font-bold py-1 px-4">Insights</Badge>
                        <h2 className="text-4xl font-bold">Latest Content</h2>
                        <p className="text-muted-foreground text-lg max-w-lg">
                            Practical SEO insights from real campaigns — no fluff, just actionable strategy.
                        </p>
                    </div>
                    <Button variant="outline" className="rounded-full border-border bg-card hover:bg-muted font-bold" asChild>
                        <Link href="/blog">
                            View All Articles <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {posts.map((post, i) => (
                        <motion.div
                            key={post.slug}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                        >
                            <Card className="h-full border border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-lg group flex flex-col">
                                <div className="h-2 bg-primary/10 group-hover:bg-primary transition-colors" />
                                <CardHeader className="flex-none">
                                    <div className="flex gap-2 flex-wrap mb-3">
                                        {post.tags.map((t) => <Badge key={t} variant="secondary" className="text-[10px] uppercase font-bold tracking-wider py-0.5">{t}</Badge>)}
                                    </div>
                                    <CardTitle className="text-lg leading-snug group-hover:text-primary transition-colors line-clamp-2">
                                        {post.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="flex-1 flex flex-col justify-between space-y-4">
                                    <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">{post.excerpt}</p>
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-wider text-muted-foreground/60">
                                            <span className="flex items-center gap-1.5"><Calendar size={14} className="text-primary" />{post.date}</span>
                                            <span className="flex items-center gap-1.5"><Clock size={14} className="text-primary" />{post.readTime}</span>
                                        </div>
                                        <Button variant="ghost" size="sm" className="p-0 h-auto group/btn font-bold text-foreground hover:text-primary hover:bg-transparent" asChild>
                                            {post.linkedInUrl ? (
                                                <a href={post.linkedInUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                                                    Read on LinkedIn
                                                    <ArrowRight size={14} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                                                </a>
                                            ) : (
                                                <Link href={`/blog/${post.slug}`} className="flex items-center">
                                                    Read More
                                                    <ArrowRight size={14} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                                                </Link>
                                            )}
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
