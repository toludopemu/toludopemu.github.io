"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, ChevronDown, TrendingUp, Globe } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function HeroSection() {
    return (
        <section className="relative min-h-[90vh] lg:min-h-screen flex items-center pt-24 sm:pt-32 pb-12 sm:pb-20 px-6 md:px-12 lg:px-24 overflow-hidden bg-background">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-primary/5 rounded-full blur-[80px] sm:blur-[120px] -z-10 animate-pulse" />
            <div className="absolute bottom-0 left-0 w-[200px] sm:w-[400px] h-[200px] sm:h-[400px] bg-primary/5 rounded-full blur-[60px] sm:blur-[100px] -z-10" />

            <div className="container max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6 sm:space-y-8"
                >
                    <div className="space-y-4">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            {/* <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 uppercase tracking-widest text-[10px] font-bold py-1 px-4">
                                SEO Strategist & Digital Innovator
                            </Badge> */}
                        </motion.div>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.2] lg:leading-[1.1] tracking-tight text-foreground">
                            Bridging Search Data <br className="hidden sm:block" />
                            <span className="text-primary"> & Business Growth</span>
                        </h1>
                        <p className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-xl leading-relaxed">
                            SEO STRATEGIST & DIGITAL INNOVATOR  with 5+ years of experience across agency and in-house environments. I prioritise business impact and customer value above all else.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button size="xl" className="w-full sm:w-auto rounded-full px-8 bg-primary text-primary-foreground hover:opacity-90 font-bold tracking-wide shadow-lg shadow-primary/20" asChild>
                            <Link href="/case-studies">View Case Studies</Link>
                        </Button>
                        <Button size="xl" variant="outline" className="w-full sm:w-auto rounded-full px-8 border-primary/20 hover:bg-primary/5 text-foreground font-bold tracking-wide" asChild>
                            <Link href="#contact">Book a Strategy Call</Link>
                        </Button>
                    </div>

                    {/* Social proof/metrics */}
                    <div className="flex items-center gap-6 sm:gap-8 pt-4 border-t border-border w-fit">
                        <div className="flex flex-col">
                            <span className="text-xl sm:text-2xl font-bold">29+</span>
                            <span className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-widest font-semibold">Projects</span>
                        </div>
                        <div className="h-10 w-px bg-border" />
                        <div className="flex flex-col">
                            <span className="text-xl sm:text-2xl font-bold">+175%</span>
                            <span className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-widest font-semibold">Avg. Growth</span>
                        </div>
                    </div>
                </motion.div>

                {/* Visual Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="relative"
                >
                    <div className="relative aspect-square max-w-[500px] ml-auto">
                        {/* Main Image Container */}
                        <div className="absolute inset-0 rounded-[40px] overflow-hidden border border-border shadow-2xl bg-card">
                            <div className="absolute inset-0 bg-primary/5 z-10" />
                            <Image
                                src="/1768121933380.jpeg"
                                alt="Nofisat Tolu Dopemu"
                                fill
                                className="object-cover object-top hover:scale-105 transition-transform duration-700"
                                priority
                            />
                        </div>

                        {/* Floating Badges */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-6 -left-6 glass p-4 rounded-2xl shadow-xl z-20 border border-primary/20"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                                    <TrendingUp size={24} />
                                </div>
                                <div>
                                    <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">Content Growth</p>
                                    <p className="text-lg font-bold">+300%</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute -bottom-6 -right-6 glass p-4 rounded-2xl shadow-xl z-20 border border-primary/20"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                                    <Globe size={24} />
                                </div>
                                <div>
                                    <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">Market Reach</p>
                                    <p className="text-lg font-bold">Global</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

