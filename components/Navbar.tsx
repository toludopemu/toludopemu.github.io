"use client"

import * as React from "react"
import { useState, useEffect } from "react" // Added useState and useEffect
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion" // Added AnimatePresence
import { LucideIcon, Menu, X, Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

// Define NavItem type
interface NavItem {
    name: string
    path: string
}

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const pathname = usePathname()
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const navItems: NavItem[] = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Services", path: "/services" },
        { name: "Case Studies", path: "/case-studies" },
        { name: "Blog", path: "/blog" },
    ]

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-12 lg:px-24",
                isScrolled ? "py-4 glass shadow-sm" : "py-6 bg-transparent"
            )}
        >
            <div className="container mx-auto flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex flex-col group">
                    <div className="text-2xl font-bold tracking-tight flex items-center gap-1">
                        <span className="text-foreground">Nofisat Tolu</span>
                        <span className="text-primary group-hover:opacity-80 transition-opacity">Dopemu</span>
                    </div>
                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground/80 -mt-1 group-hover:text-primary transition-colors">
                        SEO Strategist & Digital Innovator
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => {
                        const isActive = pathname === item.path
                        return (
                            <Link
                                key={item.name}
                                href={item.path}
                                className={cn(
                                    "text-sm font-medium transition-colors hover:text-primary",
                                    isActive ? "text-primary" : "text-muted-foreground"
                                )}
                            >
                                {item.name}
                            </Link>
                        )
                    })}
                </div>

                {/* Actions */}
                <div className="hidden md:flex items-center gap-4">
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        className="rounded-full w-10 h-10 hover:bg-primary/10 hover:text-primary transition-colors"
                    >
                        {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                    </Button>
                    <Button
                        className="rounded-full px-6 font-semibold bg-primary text-primary-foreground hover:opacity-90 transition-all"
                        asChild
                    >
                        <Link href="#contact">Book a Call</Link>
                    </Button>
                </div>

                {/* Mobile Toggle */}
                <div className="flex items-center gap-3 md:hidden">
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        className="rounded-full"
                    >
                        {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                    </Button>
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="text-foreground"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </Button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden glass border-t border-white/10 overflow-hidden"
                    >
                        <div className="flex flex-col p-6 gap-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.path}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={cn(
                                        "text-xl font-medium",
                                        pathname === item.path ? "text-primary" : "text-muted-foreground"
                                    )}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <Button
                                className="w-full mt-4 bg-primary text-primary-foreground font-bold"
                                size="lg"
                                asChild
                            >
                                <Link href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Book a Call</Link>
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}

