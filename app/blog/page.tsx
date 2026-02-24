import type { Metadata } from "next"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Clock, Calendar } from "lucide-react"
import { blogPosts } from "@/lib/data"

export const metadata: Metadata = {
    title: "Blog",
    description: "SEO insights, strategy guides and campaign breakdowns from Nofisat Tolu Dopemu — no fluff, just actionable content.",
}

export default function BlogPage() {
    const posts = blogPosts
    return (
        <div className="pt-24">
            <section className="py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-background via-primary/10 to-background text-center">
                <div className="container max-w-3xl space-y-6">
                    <Badge variant="gradient">Blog</Badge>
                    <h1 className="text-5xl font-extrabold text-foreground leading-tight">
                        Insights &{" "}
                        <span className="bg-gradient-to-r from-rose-400 to-primary bg-clip-text text-transparent">
                            SEO Strategy
                        </span>
                    </h1>
                    <p className="text-muted-foreground text-lg">
                        Practical SEO insights from real campaigns — no fluff, just actionable strategy and honest lessons from the field.
                    </p>
                </div>
            </section>

            <section className="py-24 px-6 md:px-12 lg:px-24">
                <div className="container max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {posts.map((post) => (
                        <Card key={post.slug} className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden group">
                            <div className={`h-32 bg-gradient-to-br ${post.color} relative overflow-hidden`}>
                                <div className="absolute inset-0 opacity-20 bg-[url('/site-bg.svg')] bg-cover" />
                            </div>
                            <CardHeader>
                                <div className="flex gap-2 flex-wrap mb-2">
                                    {post.tags.map((t) => <Badge key={t} variant="outline" className="text-xs">{t}</Badge>)}
                                </div>
                                <CardTitle className="text-lg leading-snug group-hover:text-primary transition-colors">
                                    {post.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <p className="text-sm text-muted-foreground line-clamp-3">{post.excerpt}</p>
                                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                                    <span className="flex items-center gap-1"><Calendar size={12} />{post.date}</span>
                                    <span className="flex items-center gap-1"><Clock size={12} />{post.readTime}</span>
                                </div>
                                <Button variant="ghost" size="sm" className="p-0 h-auto group/btn" asChild>
                                    {post.linkedInUrl ? (
                                        <a href={post.linkedInUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                                            Read on LinkedIn
                                            <ArrowRight className="ml-2 h-3 w-3 group-hover/btn:translate-x-1 transition-transform" />
                                        </a>
                                    ) : (
                                        <Link href={`/blog/${post.slug}`}>
                                            Read Article
                                            <ArrowRight className="ml-2 h-3 w-3 group-hover/btn:translate-x-1 transition-transform" />
                                        </Link>
                                    )}
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>
        </div>
    )
}
