import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Terminal from "@/components/terminal/Terminal";
import ScrollProgress from "@/components/ui/ScrollProgress";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50`}
      >
        <ScrollProgress />
        <Navbar />
        <main className="min-h-screen flex flex-col">{children}</main>
        <Terminal />
        <Footer />
      </body>
    </html>
  );
}
