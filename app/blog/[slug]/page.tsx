import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Clock, Calendar } from "lucide-react"
import { blogPosts, profileData } from "@/lib/data"

export async function generateStaticParams() {
    return blogPosts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params
    const post = blogPosts.find((p) => p.slug === slug)
    if (!post) return {}
    return {
        title: post.title,
        description: post.excerpt,
        openGraph: { title: post.title, type: "article" },
    }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const post = blogPosts.find((p) => p.slug === slug)
    if (!post) notFound()

    const paragraphs = post.content.trim().split("\n\n")

    return (
        <div className="pt-24">
            {/* Header */}
            <section className={`py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-background via-primary/10 to-background`}>
                <div className="container max-w-3xl">
                    <Button variant="ghost" size="sm" className="mb-8 text-muted-foreground hover:text-foreground" asChild>
                        <Link href="/blog"><ArrowLeft className="mr-2 h-4 w-4" /> All Articles</Link>
                    </Button>
                    <div className="flex flex-wrap gap-2 mb-6">
                        {post.tags.map((t) => <Badge key={t} variant="gradient" className="text-xs">{t}</Badge>)}
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-foreground leading-tight mb-6">{post.title}</h1>
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-3">
                            <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-white/20">
                                <Image src="/1768121933380.jpeg" alt="Nofisat Tolu Dopemu" fill className="object-cover object-top" />
                            </div>
                            <div>
                                <p className="text-sm font-medium text-foreground">{profileData.name}</p>
                                <p className="text-xs text-muted-foreground">SEO Strategist</p>
                            </div>
                        </div>
                        <div className="h-6 w-px bg-border" />
                        <span className="flex items-center gap-1 text-muted-foreground text-sm"><Calendar size={14} />{post.date}</span>
                        <span className="flex items-center gap-1 text-muted-foreground text-sm"><Clock size={14} />{post.readTime}</span>
                    </div>
                </div>
            </section>

            {/* Article */}
            <section className="py-16 px-6 md:px-12 lg:px-24">
                <div className="container max-w-3xl prose prose-lg dark:prose-invert max-w-none">
                    {paragraphs.map((para, i) => {
                        if (para.startsWith("**") && (para.endsWith("**") || para.includes("**\n"))) {
                            return <h2 key={i} className="text-2xl font-bold mt-10 mb-4">{para.replace(/\*\*/g, "")}</h2>
                        }
                        if (para.startsWith("- ")) {
                            const items = para.split("\n").filter(l => l.trim().startsWith("- "))
                            return (
                                <ul key={i} className="space-y-2 my-4">
                                    {items.map((item, j) => (
                                        <li key={j} className="flex items-start gap-2 text-muted-foreground">
                                            <span className="text-primary mt-1">→</span>
                                            <span dangerouslySetInnerHTML={{ __html: item.replace("- ", "").replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") }} />
                                        </li>
                                    ))}
                                </ul>
                            )
                        }
                        if (/^\d+\./.test(para)) {
                            const items = para.split("\n").filter(l => /^\d+\./.test(l))
                            return (
                                <ol key={i} className="space-y-2 my-4 list-none">
                                    {items.map((item, j) => (
                                        <li key={j} className="flex items-start gap-3">
                                            <span className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-bold shrink-0 mt-0.5">{j + 1}</span>
                                            <span className="text-muted-foreground" dangerouslySetInnerHTML={{ __html: item.replace(/^\d+\.\s/, "").replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") }} />
                                        </li>
                                    ))}
                                </ol>
                            )
                        }
                        return (
                            <p key={i} className="text-muted-foreground leading-relaxed mb-4"
                                dangerouslySetInnerHTML={{ __html: para.replace(/\*\*(.*?)\*\*/g, "<strong class='text-foreground'>$1</strong>") }}
                            />
                        )
                    })}
                </div>
            </section>

            {/* Author box */}
            <section className="py-12 px-6 md:px-12 lg:px-24">
                <div className="container max-w-3xl">
                    <div className="flex items-center gap-6 p-6 rounded-2xl border bg-card">
                        <div className="relative w-20 h-20 rounded-2xl overflow-hidden shrink-0 border">
                            <Image src="/1768121933380.jpeg" alt="Nofisat Tolu Dopemu" fill className="object-cover object-top" />
                        </div>
                        <div>
                            <p className="font-bold text-lg">{profileData.name}</p>
                            <p className="text-sm text-primary mb-2">SEO Strategist & Digital Innovator</p>
                            <p className="text-sm text-muted-foreground">
                                4+ years driving organic growth for global brands. Former founder. Member of Women in Tech SEO. 2× BIPOC Talent Mentor.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
