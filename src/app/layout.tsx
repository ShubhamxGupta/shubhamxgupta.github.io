import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Terminal from "@/components/terminal/Terminal";
import ScrollProgress from "@/components/ui/ScrollProgress";
import { CommandMenu } from "@/components/ui/CommandMenu";
import SpotlightCursor from "@/components/ui/SpotlightCursor";
import Script from "next/script";
import "./globals.css";

const sans = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shubham Gupta | AI/ML Engineer",
  description:
    "Portfolio of Shubham Gupta - AI/ML Engineer & Computer Science Graduate. Specializing in Deep Learning, Computer Vision, and Generative AI.",
  openGraph: {
    title: "Shubham Gupta | AI/ML Engineer",
    description:
      "Portfolio of Shubham Gupta - AI/ML Engineer & Computer Science Graduate. Specializing in Deep Learning, Computer Vision, and Generative AI.",
    type: "website",
  },
};

// ... (other imports remain the same)

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        {/* ... (links remain the same) */}
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
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`${sans.variable} ${mono.variable} antialiased bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 font-sans`}
      >
        <Script
          // ... existing script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Shubham Gupta",
              url: "https://shubhamxgupta.github.io",
              jobTitle: "AI/ML Engineer",
              sameAs: [
                "https://github.com/ShubhamxGupta",
                "https://www.linkedin.com/in/shubhamxgupta",
              ],
              knowsAbout: [
                "Artificial Intelligence",
                "Machine Learning",
                "Deep Learning",
                "Computer Vision",
                "Generative AI",
                "Software Engineering",
              ],
            }),
          }}
        />
        <SpotlightCursor />
        <CommandMenu />
        <ScrollProgress />
        <Navbar />
        <main className="min-h-screen flex flex-col">{children}</main>
        <Terminal />
        <Footer />
      </body>
    </html>
  );
}
