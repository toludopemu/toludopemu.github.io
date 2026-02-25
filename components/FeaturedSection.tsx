"use client"

import Image from "next/image"
import { ExternalLink, Newspaper, Mic, Award, Heart, Video, Monitor } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { pressFeatures } from "@/lib/data"

const typeIcons = {
    Article: Newspaper,
    Interview: Mic,
    Speaking: Monitor,
    Award: Award,
    Charity: Heart,
    Video: Video,
}

export function FeaturedSection() {
    return (
        <section id="featured" className="py-24 px-6 md:px-12 lg:px-24 bg-muted/30">
            <div className="container">
                <div className="text-center mb-16 space-y-4">
                    <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 uppercase tracking-widest text-[10px] font-bold py-1 px-4">
                        Press & Appearances
                    </Badge>
                    <h2 className="text-3xl sm:text-4xl font-bold">Featured In & Speaking</h2>
                    <p className="text-muted-foreground text-sm sm:text-lg max-w-2xl mx-auto">
                        Sharing SEO insights, mentoring talent, and contributing to the global search community.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {pressFeatures.map((feature) => {
                        const Icon = typeIcons[feature.type] || Newspaper
                        return (
                            <div key={feature.id}>
                                <Card className="group h-full overflow-hidden border border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-xl">
                                    <div className="relative aspect-[4/3] overflow-hidden">
                                        <Image
                                            src={feature.imageUrl}
                                            alt={feature.title}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                                            {feature.url && (
                                                <a
                                                    href={feature.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="w-full flex items-center justify-center gap-2 py-2 bg-white text-black rounded-lg font-bold text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform"
                                                >
                                                    View Source <ExternalLink size={14} />
                                                </a>
                                            )}
                                        </div>
                                        <div className="absolute top-3 left-3">
                                            <div className="bg-background/80 backdrop-blur-md p-2 rounded-xl border border-border shadow-sm">
                                                <Icon size={18} className="text-primary" />
                                            </div>
                                        </div>
                                    </div>
                                    <CardContent className="p-5 space-y-3">
                                        <div className="flex justify-between items-start gap-2">
                                            <p className="text-xs font-bold uppercase tracking-widest text-primary">
                                                {feature.platform}
                                            </p>
                                            <Badge variant="secondary" className="text-[10px] uppercase tracking-tighter h-5 px-2">
                                                {feature.type}
                                            </Badge>
                                        </div>
                                        <h3 className="font-bold text-base leading-tight group-hover:text-primary transition-colors line-clamp-2">
                                            {feature.title}
                                        </h3>
                                    </CardContent>
                                </Card>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
