import Link from "next/link"
import { Linkedin, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
    return (
        <footer className="bg-muted/10 border-t py-16 px-6 md:px-12 lg:px-24">
            <div className="container max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-24">
                    <div className="col-span-1 md:col-span-2 space-y-6">
                        <Link href="/" className="text-2xl font-bold tracking-tight">
                            Nofisat Tolu <span className="text-primary">Dopemu</span>
                        </Link>
                        <div className="space-y-2">
                            <p className="text-primary font-bold text-xs uppercase tracking-widest">
                                SEO Strategist & Digital Innovator
                            </p>
                            <p className="text-muted-foreground max-w-sm leading-relaxed">
                                Bridging the gap between search data and sustainable business growth through data-driven strategies.
                            </p>
                        </div>
                        <div className="flex gap-4">
                            <Link href="https://www.linkedin.com/in/toludopemu/" className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                                <Linkedin size={20} />
                            </Link>
                            <Link href="mailto:toludopemu@gmail.com" className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                                <Mail size={20} />
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xs font-bold uppercase tracking-widest text-foreground mb-6">Navigation</h3>
                        <ul className="space-y-4">
                            {[
                                { name: "Home", path: "/" },
                                { name: "About", path: "/about" },
                                { name: "Services", path: "/services" },
                                { name: "Case Studies", path: "/case-studies" },
                                { name: "Blog", path: "/blog" },
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link href={item.path} className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-6">
                        <h3 className="text-xs font-bold uppercase tracking-widest text-foreground mb-6">Contact</h3>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3 text-sm text-muted-foreground group">
                                <div className="w-8 h-8 rounded-lg bg-primary/5 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                    <MapPin size={16} />
                                </div>
                                United Kingdom
                            </li>
                            <li className="flex items-center gap-3 text-sm text-muted-foreground group">
                                <div className="w-8 h-8 rounded-lg bg-primary/5 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                    <Mail size={16} />
                                </div>
                                toludopemu@gmail.com
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60">
                    <p>© {new Date().getFullYear()} Nofisat Tolu Dopemu. Strategy & Growth Focused.</p>
                    <div className="flex gap-8">
                        <Link href="/privacy" className="hover:text-primary transition-colors">Privacy</Link>
                        <Link href="/terms" className="hover:text-primary transition-colors">Terms</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
