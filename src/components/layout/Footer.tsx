import {Mail, ArrowRight} from "lucide-react";
import {SiGithub, SiX} from "@icons-pack/react-simple-icons";
import {Linkedin} from "@/components/ui/LinkedinIcon";
import {FooterSignature} from "@/components/ui/FooterSignature";
import Link from "next/link";
import React from "react";

const NAV_LINKS = [
    {name: "Home", href: "/"},
    {name: "About", href: "/#about"},
    {name: "Skills", href: "/#skills"},
    {name: "Projects", href: "/#projects"},
    {name: "Case Studies", href: "/case-studies"},
    {name: "Writing", href: "/writing"},
    {name: "Now", href: "/now"},
    {name: "Contact", href: "/#contact"},
];

export default function Footer() {
    return (
        <footer
            className="pt-16 pb-36 border-t border-stone-200/80 dark:border-stone-800/80 overflow-hidden relative"
        >
            <div className="container max-w-5xl mx-auto px-6 flex flex-col items-center">
                {/* Memorable CTA Block */}
                <div className="w-full text-center py-10 mb-6 border-b border-stone-200/60 dark:border-stone-800/60">
                    <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-stone-900 dark:text-[#fafaf9] mb-3">
                        Have an idea or engineering role in mind?
                    </h2>
                    <p className="text-sm sm:text-base text-stone-500 dark:text-stone-400 max-w-md mx-auto mb-6">
                        Always interested in conversations around AI infrastructure, deep learning, and systems at scale.
                    </p>
                    <a
                        href="mailto:shubhamxgupta1@gmail.com"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium shadow-md shadow-indigo-600/25 transition-all active:scale-95 group"
                    >
                        <span>Send me an email</span>
                        <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>

                {/* Footer Navigation Links */}
                <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2.5 mb-8 text-xs sm:text-sm text-stone-600 dark:text-stone-400">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* Massive Signature with Hover Effect */}
                <FooterSignature />

                {/* Social Channels */}
                <div className="flex items-center gap-3 z-10 mb-8 mt-2">
                    <SocialLink
                        href="https://github.com/ShubhamxGupta"
                        icon={<SiGithub size={18} />}
                        label="GitHub Profile"
                    />
                    <SocialLink
                        href="https://www.linkedin.com/in/shubhamxgupta/"
                        icon={<Linkedin size={18} />}
                        label="LinkedIn Profile"
                    />
                    <SocialLink
                        href="https://x.com/ShubhamxGupta1"
                        icon={<SiX size={17} />}
                        label="Twitter / X Profile"
                    />
                    <SocialLink
                        href="mailto:shubhamxgupta1@gmail.com"
                        icon={<Mail size={18} />}
                        label="Email Shubham Gupta"
                    />
                </div>

                {/* Craft and Copyright Info */}
                <div className="text-center space-y-1.5 z-10">
                    <p className="text-xs font-mono text-stone-500 dark:text-stone-400">
                        Designed &amp; engineered by Shubham Gupta · Built with Next.js, Tailwind CSS, &amp; Framer Motion
                    </p>
                    <p className="text-xs font-mono text-stone-400 dark:text-stone-600">
                        © {new Date().getFullYear()} All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

function SocialLink({
                        href,
                        icon,
                        label,
                    }: Readonly<{
    href: string;
    icon: React.ReactNode;
    label: string;
}>) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="p-3 bg-stone-100 dark:bg-[#1c1917] rounded-xl border border-stone-200/80 dark:border-stone-800/80 text-stone-600 dark:text-stone-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-400/50 shadow-xs transition-all duration-200"
        >
            {icon}
        </a>
    );
}
