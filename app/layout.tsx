import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/ThemeProvider"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"


export const metadata: Metadata = {
    metadataBase: new URL("https://toludope.github.io"),
    title: {
        default: "Nofisat Tolu Dopemu | SEO Strategist & Digital Innovator",
        template: "%s | Nofisat Tolu Dopemu",
    },
    description:
        "Nofisat Tolu Dopemu is an SEO Strategist and Digital Innovator with 4+ years of experience driving organic growth for global brands including Audi, Guardian, Johnnie Walker and Post Office Limited.",
    keywords: [
        "SEO Strategist",
        "Digital Marketing",
        "Organic Growth",
        "Technical SEO",
        "Content Strategy",
        "SEO Consultant UK",
        "Nofisat Tolu Dopemu",
    ],
    authors: [{ name: "Nofisat Tolu Dopemu", url: "https://toludope.github.io" }],
    openGraph: {
        title: "Nofisat Tolu Dopemu | SEO Strategist & Digital Innovator",
        description:
            "Driving organic growth through strategic SEO & digital innovation. Portfolio of high-impact work for global brands.",
        url: "https://toludope.github.io",
        siteName: "Nofisat Tolu Dopemu",
        images: [{ url: "/1768121933380.jpeg", width: 1200, height: 630, alt: "Nofisat Tolu Dopemu" }],
        locale: "en_GB",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Nofisat Tolu Dopemu | SEO Strategist",
        description: "Driving organic growth through strategic SEO & digital innovation.",
        images: ["/1768121933380.jpeg"],
    },
    robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`font-sans antialiased`}>
                <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
                    <Navbar />
                    <main className="min-h-screen">{children}</main>
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    )
}
