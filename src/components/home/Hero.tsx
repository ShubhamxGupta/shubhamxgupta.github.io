"use client";

import {useEffect, useState} from "react";
import {motion} from "framer-motion";
import {ArrowRight, FileText, Award, Code2, Cpu} from "lucide-react";
import Link from "next/link";
import {Magnetic} from "@/components/ui/Magnetic";

function AnimatedCounter({value, suffix = ""}: {value: number; suffix?: string}) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let startTime: number;
        const duration = 1600;
        const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(easeOut * value));
            if (progress < 1) {
                requestAnimationFrame(step);
            }
        };
        const handle = requestAnimationFrame(step);
        return () => cancelAnimationFrame(handle);
    }, [value]);

    return (
        <span className="tabular-nums font-bold tracking-tight">
            {count.toLocaleString()}{suffix}
        </span>
    );
}

export default function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-[90vh] flex flex-col justify-center items-center pt-24 md:pt-32 pb-20 overflow-hidden"
        >
            {/* Ambient Background Gradient Mesh */}
            <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
                <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[720px] h-[480px] bg-gradient-to-tr from-indigo-500/15 via-purple-500/10 to-emerald-500/10 blur-[120px] rounded-full" />
                <div className="absolute bottom-10 left-1/4 w-[360px] h-[300px] bg-indigo-500/10 dark:bg-indigo-600/10 blur-[100px] rounded-full" />
                <div className="absolute top-1/3 right-1/4 w-[320px] h-[280px] bg-emerald-500/8 dark:bg-emerald-500/10 blur-[90px] rounded-full" />
                {/* Subtle Grid texture */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
            </div>

            <div className="container max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
                {/* Live Status Pill */}
                <motion.div
                    initial={{opacity: 0, y: 12}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.4, ease: [0.23, 1, 0.32, 1]}}
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-100/90 dark:bg-[#1c1917]/90 border border-stone-200/80 dark:border-stone-800/80 text-stone-700 dark:text-stone-300 text-xs font-medium mb-8 shadow-xs"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span>Incoming Software Engineer @ <strong className="text-stone-900 dark:text-stone-100 font-semibold">Walmart Global Tech</strong></span>
                </motion.div>

                {/* Display Name */}
                <motion.h1
                    initial={{opacity: 0, y: 16}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.5, delay: 0.1, ease: [0.23, 1, 0.32, 1]}}
                    className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-stone-900 dark:text-[#fafaf9] leading-[1.06]"
                >
                    Shubham Gupta
                </motion.h1>

                {/* Tagline / Worldview */}
                <motion.p
                    initial={{opacity: 0, y: 16}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.5, delay: 0.2, ease: [0.23, 1, 0.32, 1]}}
                    className="mt-6 text-lg sm:text-xl md:text-2xl text-stone-600 dark:text-stone-300 max-w-2xl font-normal leading-relaxed text-balance"
                >
                    Software Engineer building intelligent systems at the intersection of{" "}
                    <span className="text-stone-900 dark:text-stone-100 font-semibold">Machine Learning</span>{" "}
                    &amp;{" "}
                    <span className="text-stone-900 dark:text-stone-100 font-semibold">distributed scale</span>.
                </motion.p>

                {/* Primary Action Buttons */}
                <motion.div
                    initial={{opacity: 0, y: 16}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.5, delay: 0.28, ease: [0.23, 1, 0.32, 1]}}
                    className="mt-8 flex flex-wrap items-center justify-center gap-3"
                >
                    <Magnetic strength={0.15}>
                        <Link
                            href="/#projects"
                            className="group inline-flex items-center gap-2 h-11 px-6 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm transition-all duration-200 shadow-md shadow-indigo-600/25 active:scale-95 shrink-0"
                        >
                            <span>Explore Selected Work</span>
                            <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                        </Link>
                    </Magnetic>

                    <Magnetic strength={0.15}>
                        <a
                            href="/ShubhamGupta_Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 h-11 px-5 rounded-xl bg-stone-100/90 dark:bg-[#1c1917]/90 hover:bg-stone-200/80 dark:hover:bg-[#292524] text-stone-800 dark:text-stone-200 font-medium text-sm border border-stone-200/80 dark:border-stone-800/80 transition-all duration-200 active:scale-95 shadow-xs shrink-0"
                        >
                            <FileText size={15} className="text-stone-500 dark:text-stone-400" />
                            <span>Resume</span>
                        </a>
                    </Magnetic>

                    {/* Quick Social & Professional Links */}
                    <div className="flex items-center gap-2">
                        <Magnetic strength={0.2}>
                            <a
                                href="https://github.com/ShubhamxGupta"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub Profile"
                                title="GitHub"
                                className="w-11 h-11 inline-flex items-center justify-center rounded-xl bg-stone-100/90 dark:bg-[#1c1917]/90 hover:bg-stone-200/80 dark:hover:bg-[#292524] text-stone-600 dark:text-stone-400 hover:text-indigo-600 dark:hover:text-indigo-400 border border-stone-200/80 dark:border-stone-800/80 hover:border-indigo-500/40 transition-all duration-200 active:scale-95 shadow-xs shrink-0"
                            >
                                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                                </svg>
                            </a>
                        </Magnetic>

                        <Magnetic strength={0.2}>
                            <a
                                href="https://linkedin.com/in/shubhamxgupta"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn Profile"
                                title="LinkedIn"
                                className="w-11 h-11 inline-flex items-center justify-center rounded-xl bg-stone-100/90 dark:bg-[#1c1917]/90 hover:bg-stone-200/80 dark:hover:bg-[#292524] text-stone-600 dark:text-stone-400 hover:text-indigo-600 dark:hover:text-indigo-400 border border-stone-200/80 dark:border-stone-800/80 hover:border-indigo-500/40 transition-all duration-200 active:scale-95 shadow-xs shrink-0"
                            >
                                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.4 1.4 0 0 0 0-2.8 1.4 1.4 0 0 0 0 2.8m1.39 9.74v-8.37H5.07v8.37h2.78z"/>
                                </svg>
                            </a>
                        </Magnetic>

                        <Magnetic strength={0.2}>
                            <a
                                href="https://x.com/ShubhamxGupta1"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="X (Twitter) Profile"
                                title="X (Twitter)"
                                className="w-11 h-11 inline-flex items-center justify-center rounded-xl bg-stone-100/90 dark:bg-[#1c1917]/90 hover:bg-stone-200/80 dark:hover:bg-[#292524] text-stone-600 dark:text-stone-400 hover:text-indigo-600 dark:hover:text-indigo-400 border border-stone-200/80 dark:border-stone-800/80 hover:border-indigo-500/40 transition-all duration-200 active:scale-95 shadow-xs shrink-0"
                            >
                                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                                </svg>
                            </a>
                        </Magnetic>
                    </div>
                </motion.div>

                {/* High-Impact Proof Points (Bento Row) */}
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.6, delay: 0.38, ease: [0.23, 1, 0.32, 1]}}
                    className="mt-14 w-full grid grid-cols-1 sm:grid-cols-3 gap-3.5"
                >
                    <div className="p-5 rounded-2xl bg-stone-100/60 dark:bg-[#1c1917]/60 backdrop-blur-xl border border-stone-200/80 dark:border-stone-800/80 flex flex-col items-center justify-center text-center group hover:border-indigo-500/40 transition-colors">
                        <div className="flex items-center gap-1.5 text-xs font-mono font-medium text-amber-500 mb-1">
                            <Award size={14} />
                            <span>LeetCode Knight</span>
                        </div>
                        <div className="text-3xl font-extrabold text-stone-900 dark:text-[#fafaf9]">
                            <AnimatedCounter value={1934} />
                        </div>
                        <p className="text-xs text-stone-500 dark:text-stone-400 mt-1">
                            Top 3.5% Globally · Contests
                        </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-stone-100/60 dark:bg-[#1c1917]/60 backdrop-blur-xl border border-stone-200/80 dark:border-stone-800/80 flex flex-col items-center justify-center text-center group hover:border-indigo-500/40 transition-colors">
                        <div className="flex items-center gap-1.5 text-xs font-mono font-medium text-indigo-500 mb-1">
                            <Code2 size={14} />
                            <span>Algorithms</span>
                        </div>
                        <div className="text-3xl font-extrabold text-stone-900 dark:text-[#fafaf9]">
                            <AnimatedCounter value={700} suffix="+" />
                        </div>
                        <p className="text-xs text-stone-500 dark:text-stone-400 mt-1">
                            Problems Solved Across Platforms
                        </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-stone-100/60 dark:bg-[#1c1917]/60 backdrop-blur-xl border border-stone-200/80 dark:border-stone-800/80 flex flex-col items-center justify-center text-center group hover:border-indigo-500/40 transition-colors">
                        <div className="flex items-center gap-1.5 text-xs font-mono font-medium text-emerald-500 mb-1">
                            <Cpu size={14} />
                            <span>Systems</span>
                        </div>
                        <div className="text-3xl font-extrabold text-stone-900 dark:text-[#fafaf9]">
                            <span>Enterprise &amp; ML</span>
                        </div>
                        <p className="text-xs text-stone-500 dark:text-stone-400 mt-1">
                            Real-time Observability &amp; AST Tools
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
