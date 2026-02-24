"use client"

import { motion } from "framer-motion"
import { Settings, FileText, TrendingUp, Cpu, Link, Megaphone } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

const services = [
    {
        icon: Settings,
        title: "Technical SEO",
        description: "Architecting search-ready foundations with crawlability audits, Core Web Vitals, schema markup and migration strategy.",
    },
    {
        icon: FileText,
        title: "Content Strategy",
        description: "Building content clusters that protect product pages, target intent, and drive visibility from top to bottom of funnel.",
    },
    {
        icon: TrendingUp,
        title: "Growth Marketing",
        description: "Holistic cross-channel strategies combining organic, paid and PR to maximise sustainable brand growth.",
    },
    {
        icon: Cpu,
        title: "AI & Automation",
        description: "Leveraging AI to build scalable SEO workflows, identify search trend shifts, and automate reporting.",
    },
    {
        icon: Link,
        title: "Digital PR & Link Building",
        description: "Data-driven campaigns securing high-quality backlinks, national media placements and domain authority growth.",
    },
    {
        icon: Megaphone,
        title: "SEO Audits",
        description: "Comprehensive technical and on-page audits that uncover quick wins and long-term opportunity roadmaps.",
    },
]

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export function ServicesSection() {
    return (
        <section id="services" className="py-24 px-6 md:px-12 lg:px-24 bg-background">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16 space-y-4"
                >
                    <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 uppercase tracking-widest text-[10px] font-bold py-1 px-4">Services</Badge>
                    <h2 className="text-4xl font-bold">What I Deliver</h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        From technical foundations to high-reach PR campaigns, every service is designed to create measurable business impact.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {services.map((service) => {
                        const Icon = service.icon
                        return (
                            <motion.div key={service.title} variants={itemVariants}>
                                <Card className="h-full border border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-lg group">
                                    <CardHeader>
                                        <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center mb-2 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                            <Icon size={24} />
                                        </div>
                                        <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                                        <CardDescription className="text-base text-muted-foreground leading-relaxed">
                                            {service.description}
                                        </CardDescription>
                                    </CardHeader>
                                </Card>
                            </motion.div>
                        )
                    })}
                </motion.div>
            </div>
        </section>
    )
}
