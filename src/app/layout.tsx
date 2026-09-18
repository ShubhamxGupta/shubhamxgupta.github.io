import type {Metadata} from "next";
import {Space_Grotesk, DM_Sans, JetBrains_Mono} from "next/font/google";
import Footer from "@/components/layout/Footer";
import Terminal from "@/components/terminal/Terminal";
import ScrollProgress from "@/components/ui/ScrollProgress";
import {CommandMenu} from "@/components/ui/CommandMenu";
import SpotlightCursor from "@/components/ui/SpotlightCursor";
import {Dock} from "@/components/ui/Dock";
import {MobileMenu} from "@/components/ui/MobileMenu";
import {ThemeProvider} from "@/components/theme/ThemeProvider";
import Script from "next/script";
import "./globals.css";
import React from "react";

const displayFont = Space_Grotesk({
    variable: "--font-display",
    subsets: ["latin"],
    weight: ["500", "600", "700"],
});

const sansFont = DM_Sans({
    variable: "--font-sans",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

const monoFont = JetBrains_Mono({
    variable: "--font-mono",
    subsets: ["latin"],
    weight: ["400", "500"],
});

export const metadata: Metadata = {
    title: "Shubham Gupta — Software Engineer & ML Systems Builder",
    description:
        "Personal portfolio of Shubham Gupta — Software Engineer building intelligent systems at the intersection of Machine Learning, distributed scale, and real-time platforms.",
    metadataBase: new URL("https://shubhamxgupta.github.io"),
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: "Shubham Gupta — Software Engineer & ML Systems Builder",
        description:
            "Software Engineer building intelligent systems at the intersection of Machine Learning, distributed scale, and real-time platforms.",
        type: "website",
        url: "https://shubhamxgupta.github.io",
        siteName: "Shubham Gupta",
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth" suppressHydrationWarning>
        <head>
            <link
                rel="apple-touch-icon"
                sizes="180x180"
                href="/apple-touch-icon.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="32x32"
                href="/favicon-32x32.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="16x16"
                href="/favicon-16x16.png"
            />
            <link rel="manifest" href="/site.webmanifest"/>
        </head>
        <body
            className={`${displayFont.variable} ${sansFont.variable} ${monoFont.variable} antialiased bg-[#fafaf9] dark:bg-[#0c0a09] text-[#1c1917] dark:text-[#fafaf9] font-sans relative transition-colors duration-300 selection:bg-indigo-500/20 selection:text-indigo-400`}
        >
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
            disableTransitionOnChange={false}
        >
            <Script
                id="json-ld"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Person",
                        name: "Shubham Gupta",
                        url: "https://shubhamxgupta.github.io",
                        jobTitle: "Software Engineer",
                        sameAs: [
                            "https://github.com/ShubhamxGupta",
                            "https://www.linkedin.com/in/shubhamxgupta",
                        ],
                        knowsAbout: [
                            "Artificial Intelligence",
                            "Machine Learning",
                            "Deep Learning",
                            "Computer Vision",
                            "Distributed Systems",
                            "Software Engineering",
                        ],
                    }),
                }}
            />
            <div className="hidden md:block">
                <SpotlightCursor/>
            </div>
            <CommandMenu/>
            <ScrollProgress/>

            {/* Navigation: macOS Dock */}
            <div className="hidden md:block">
                <Dock/>
            </div>
            <MobileMenu/>

            <main className="min-h-screen flex flex-col pb-28">{children}</main>

            <Terminal/>
            <Footer/>
        </ThemeProvider>
        </body>
        </html>
    );
}
