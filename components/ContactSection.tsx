"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Send, Calendar, Linkedin, Mail } from "lucide-react"

export function ContactSection() {
    const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" })
    const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle")

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setStatus("sending")
        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            })

            if (response.ok) {
                setStatus("sent")
            } else {
                setStatus("error")
            }
        } catch (error) {
            console.error("Submission error:", error)
            setStatus("error")
        }
    }

    return (
        <section id="contact" className="py-24 px-6 md:px-12 lg:px-24 relative overflow-hidden bg-background">
            {/* Background decoration */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl -z-10" />

            <div className="container max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16 space-y-4"
                >
                    <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 uppercase tracking-widest text-[10px] font-bold py-1 px-4">Get In Touch</Badge>
                    <h2 className="text-4xl md:text-5xl font-bold">
                        Ready to Grow Your <span className="text-primary">Organic Presence?</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Whether you need a full SEO strategy, a technical audit, or a Digital PR campaign — let&apos;s talk about what growth looks like for your brand.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Left: CTA options */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <a
                            href="https://calendly.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-5 p-6 rounded-2xl border bg-card hover:bg-muted/50 transition-all group"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                <Calendar size={26} />
                            </div>
                            <div>
                                <p className="font-semibold text-lg">Book a Strategy Call</p>
                                <p className="text-muted-foreground text-sm">30-min discovery call via Calendly</p>
                            </div>
                        </a>
                        <a
                            href="mailto:toludopemu@gmail.com"
                            className="flex items-center gap-5 p-6 rounded-2xl border bg-card hover:bg-muted/50 transition-all group"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                <Mail size={26} />
                            </div>
                            <div>
                                <p className="font-semibold text-lg">Email Me Directly</p>
                                <p className="text-muted-foreground text-sm">toludopemu@gmail.com</p>
                            </div>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/toludopemu/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-5 p-6 rounded-2xl border bg-card hover:bg-muted/50 transition-all group"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                <Linkedin size={26} />
                            </div>
                            <div>
                                <p className="font-semibold text-lg">Connect on LinkedIn</p>
                                <p className="text-muted-foreground text-sm">linkedin.com/in/toludopemu</p>
                            </div>
                        </a>
                    </motion.div>

                    {/* Right: Contact form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        {status === "sent" ? (
                            <div className="p-12 rounded-3xl border bg-card flex flex-col items-center justify-center text-center space-y-4">
                                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                    <Send className="text-primary" size={28} />
                                </div>
                                <h3 className="text-2xl font-bold">Message Sent!</h3>
                                <p className="text-muted-foreground">Thanks for reaching out. I&apos;ll be in touch within 24 hours.</p>
                                <Button onClick={() => setStatus("idle")} variant="outline">Send another message</Button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6 p-8 rounded-3xl border bg-card shadow-sm">
                                <h3 className="text-xl font-semibold mb-2">Send a Message</h3>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Your Name</label>
                                        <Input
                                            required
                                            placeholder="Jane Smith"
                                            value={form.name}
                                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                                            className="rounded-xl"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Email Address</label>
                                        <Input
                                            required
                                            type="email"
                                            placeholder="jane@company.com"
                                            value={form.email}
                                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                                            className="rounded-xl"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Subject</label>
                                    <Input
                                        required
                                        placeholder="SEO Audit / Strategy Call"
                                        value={form.subject}
                                        onChange={(e) => setForm({ ...form, subject: e.target.value })}
                                        className="rounded-xl"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Message</label>
                                    <Textarea
                                        required
                                        rows={5}
                                        placeholder="Tell me about your project, goals, and timeline..."
                                        value={form.message}
                                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                                        className="rounded-xl resize-none"
                                    />
                                </div>
                                {status === "error" && <p className="text-destructive text-sm">Something went wrong. Please try again.</p>}
                                <Button
                                    type="submit"
                                    size="lg"
                                    className="w-full rounded-xl bg-primary text-primary-foreground hover:opacity-90 font-bold tracking-wide py-6"
                                    disabled={status === "sending"}
                                >
                                    {status === "sending" ? "Sending..." : <>Send Message <Send className="ml-2 h-4 w-4" /></>}
                                </Button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
