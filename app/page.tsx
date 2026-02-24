import type { Metadata } from "next"
import { HeroSection } from "@/components/HeroSection"
import { AboutSection } from "@/components/AboutSection"
import { ServicesSection } from "@/components/ServicesSection"
import { FeaturedSection } from "@/components/FeaturedSection"
import { CaseStudiesSection } from "@/components/CaseStudiesSection"
import { BlogPreviewSection } from "@/components/BlogPreviewSection"
import { ContactSection } from "@/components/ContactSection"

export const metadata: Metadata = {
    title: "Nofisat Tolu Dopemu | SEO Strategist & Digital Innovator",
    description:
        "Driving organic growth through strategic SEO & digital innovation. Trusted by Audi, Guardian, Johnnie Walker and Post Office Limited.",
}

export default function HomePage() {
    return (
        <>
            <HeroSection />
            <AboutSection />
            <ServicesSection />
            <FeaturedSection />
            <CaseStudiesSection />
            <BlogPreviewSection />
            <ContactSection />
        </>
    )
}
