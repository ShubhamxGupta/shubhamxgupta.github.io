"use client";

import {motion} from "framer-motion";
import Image from "next/image";
import React, {useRef} from "react";
import {TubeLight} from "@/components/ui/TubeLight";
import {
    MapPin,
    GraduationCap,
    Compass,
    Sparkles,
    Quote,
    Layers,
    ArrowUpRight
} from "lucide-react";
import Link from "next/link";

export default function About() {
    const sectionRef = useRef<HTMLElement>(null);

    return (
        <section
            id="about"
            ref={sectionRef}
            className="relative pt-28 pb-28 sm:pt-36 sm:pb-36 overflow-hidden border-t border-stone-200/80 dark:border-stone-800/80"
        >
            {/* TubeLight ambient accent */}
            <TubeLight sectionRef={sectionRef} />

            <div className="relative w-full max-w-5xl mx-auto px-6 sm:px-8">
                {/* Section Header */}
                <div className="mb-14 text-center sm:text-left">
                    <motion.div
                        initial={{opacity: 0, y: 12}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-100 dark:bg-[#1c1917] border border-stone-200/80 dark:border-stone-800/80 text-stone-600 dark:text-stone-400 text-xs font-mono font-medium uppercase tracking-wider mb-4"
                    >
                        <Sparkles size={13} className="text-indigo-500" />
                        <span>About</span>
                    </motion.div>
                    <motion.h2
                        initial={{opacity: 0, y: 16}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{delay: 0.1}}
                        className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-stone-900 dark:text-[#fafaf9]"
                    >
                        Engineering with intention.
                    </motion.h2>
                    <motion.p
                        initial={{opacity: 0, y: 16}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{delay: 0.15}}
                        className="mt-3 text-base sm:text-lg text-stone-600 dark:text-stone-400 max-w-2xl font-normal leading-relaxed"
                    >
                        Bridging mathematical rigor and scalable software to build systems that remain performant under load and elegant under inspection.
                    </motion.p>
                </div>

                {/* Apple-grade Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
                    {/* Bento Tile 1: Single High-Res Portrait (md:col-span-5) */}
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.5}}
                        className="md:col-span-5 relative rounded-3xl overflow-hidden border border-stone-200/90 dark:border-stone-800/90 bg-stone-100 dark:bg-[#1c1917] shadow-xl group min-h-[380px] sm:min-h-[440px] flex flex-col justify-end p-6"
                    >
                        <Image
                            src="/images/profile/photo1.jpg"
                            alt="Shubham Gupta"
                            fill
                            sizes="(max-width: 768px) 100vw, 420px"
                            className="object-cover object-top transition-transform duration-700 group-hover:scale-105 filter contrast-[1.03]"
                            priority
                        />

                        {/* Subtle ambient gradient vignette */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0a09]/90 via-[#0c0a09]/30 to-transparent pointer-events-none" />

                        {/* Bottom Status Indicators */}
                        <div className="relative z-10 space-y-2">
                            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-900/80 backdrop-blur-md text-white text-xs font-medium border border-white/10 shadow-sm">
                                <MapPin size={12} className="text-indigo-400" />
                                <span>Jaipur / Bangalore, India</span>
                            </div>
                            <div className="block">
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/80 backdrop-blur-md text-emerald-300 text-xs font-medium border border-emerald-500/30 shadow-sm">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                    <span>Available for Engineering Roles</span>
                                </span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Bento Column (md:col-span-7) */}
                    <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {/* Bento Tile 2: Architectural Philosophy (Full width of right col) */}
                        <motion.div
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true}}
                            transition={{duration: 0.5, delay: 0.1}}
                            className="sm:col-span-2 p-7 rounded-3xl bg-stone-100/70 dark:bg-[#1c1917]/80 backdrop-blur-xl border border-stone-200/80 dark:border-stone-800/80 shadow-sm hover:border-indigo-500/30 transition-all flex flex-col justify-between"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-xs font-mono uppercase tracking-wider text-indigo-500 font-semibold flex items-center gap-1.5">
                                    <Quote size={14} /> Philosophy
                                </span>
                                <span className="text-xs font-mono text-stone-400">Core Belief</span>
                            </div>
                            <p className="text-lg sm:text-xl text-stone-800 dark:text-stone-200 font-medium leading-relaxed italic">
                                &ldquo;Software should be treated as engineering, not improvisation. I value systems that are mathematically grounded, observable by default, and crafted with invisible precision.&rdquo;
                            </p>
                            <div className="mt-5 pt-4 border-t border-stone-200/60 dark:border-stone-800/60 flex items-center justify-between text-xs text-stone-500 dark:text-stone-400">
                                <span>Deterministic Interfaces</span>
                                <span>·</span>
                                <span>High Throughput</span>
                                <span>·</span>
                                <span>Resilient Defaults</span>
                            </div>
                        </motion.div>

                        {/* Bento Tile 3: Academic Foundation */}
                        <motion.div
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true}}
                            transition={{duration: 0.5, delay: 0.18}}
                            className="p-6 rounded-3xl bg-stone-100/70 dark:bg-[#1c1917]/80 backdrop-blur-xl border border-stone-200/80 dark:border-stone-800/80 shadow-sm hover:border-indigo-500/30 transition-all flex flex-col justify-between"
                        >
                            <div>
                                <div className="w-10 h-10 rounded-2xl bg-indigo-500/10 dark:bg-indigo-500/15 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-4 border border-indigo-500/20">
                                    <GraduationCap size={20} />
                                </div>
                                <h3 className="text-base font-bold text-stone-900 dark:text-stone-100 tracking-tight">
                                    Academic Rigor
                                </h3>
                                <p className="text-xs text-stone-500 dark:text-stone-400 mt-1 font-mono">
                                    VIT Chennai · 8.5 CGPA
                                </p>
                                <p className="text-xs text-stone-600 dark:text-stone-300 mt-3 leading-relaxed">
                                    B.Tech in Computer Science with rigorous foundations in Deep Learning, Computer Vision, and Distributed Database Systems.
                                </p>
                            </div>
                            <div className="mt-4 pt-3 border-t border-stone-200/60 dark:border-stone-800/60 text-[11px] font-mono text-stone-500">
                                Graduating in 2027
                            </div>
                        </motion.div>

                        {/* Bento Tile 4: Current Trajectory / Now */}
                        <motion.div
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true}}
                            transition={{duration: 0.5, delay: 0.24}}
                            className="p-6 rounded-3xl bg-stone-100/70 dark:bg-[#1c1917]/80 backdrop-blur-xl border border-stone-200/80 dark:border-stone-800/80 shadow-sm hover:border-indigo-500/30 transition-all flex flex-col justify-between group"
                        >
                            <div>
                                <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 dark:bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4 border border-emerald-500/20">
                                    <Compass size={20} />
                                </div>
                                <div className="flex items-center justify-between">
                                    <h3 className="text-base font-bold text-stone-900 dark:text-stone-100 tracking-tight">
                                        Active Horizons
                                    </h3>
                                    <Link href="/now" className="text-stone-400 hover:text-indigo-400 transition-colors">
                                        <ArrowUpRight size={15} />
                                    </Link>
                                </div>
                                <p className="text-xs text-stone-500 dark:text-stone-400 mt-1 font-mono">
                                    Continuous Exploration
                                </p>
                                <p className="text-xs text-stone-600 dark:text-stone-300 mt-3 leading-relaxed">
                                    Deep-diving into multi-modal transformers, agentic orchestration, and sub-millisecond model inference runtimes.
                                </p>
                            </div>
                            <div className="mt-4 pt-3 border-t border-stone-200/60 dark:border-stone-800/60">
                                <Link
                                    href="/now"
                                    className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 inline-flex items-center gap-1 group-hover:gap-1.5 transition-all"
                                >
                                    <span>Read /now page</span>
                                    <span>→</span>
                                </Link>
                            </div>
                        </motion.div>
                    </div>

                    {/* Bento Tile 5: Engineering Craft Spectrum (Full 12 columns across bottom) */}
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.5, delay: 0.3}}
                        className="md:col-span-12 p-6 sm:p-7 rounded-3xl bg-stone-100/70 dark:bg-[#1c1917]/80 backdrop-blur-xl border border-stone-200/80 dark:border-stone-800/80 shadow-sm"
                    >
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
                            <div className="flex items-center gap-2">
                                <Layers size={18} className="text-indigo-500" />
                                <h3 className="text-base font-bold text-stone-900 dark:text-stone-100">
                                    Engineering Craft &amp; Focus Areas
                                </h3>
                            </div>
                            <span className="text-xs font-mono text-stone-500">
                                Across Machine Learning, Systems, &amp; Product
                            </span>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                            <div className="p-3.5 rounded-2xl bg-white/60 dark:bg-[#292524]/60 border border-stone-200/60 dark:border-stone-800/60">
                                <div className="text-xs font-mono font-semibold text-indigo-600 dark:text-indigo-400">01 / ML Engineering</div>
                                <div className="text-sm font-semibold text-stone-800 dark:text-stone-200 mt-1">PyTorch &amp; CV</div>
                                <p className="text-[11px] text-stone-500 dark:text-stone-400 mt-1">Custom loss functions, vision pipelines, model optimization</p>
                            </div>

                            <div className="p-3.5 rounded-2xl bg-white/60 dark:bg-[#292524]/60 border border-stone-200/60 dark:border-stone-800/60">
                                <div className="text-xs font-mono font-semibold text-emerald-600 dark:text-emerald-400">02 / Scale &amp; Systems</div>
                                <div className="text-sm font-semibold text-stone-800 dark:text-stone-200 mt-1">APIs &amp; Concurrency</div>
                                <p className="text-[11px] text-stone-500 dark:text-stone-400 mt-1">FastAPI, real-time telemetry, asynchronous architecture</p>
                            </div>

                            <div className="p-3.5 rounded-2xl bg-white/60 dark:bg-[#292524]/60 border border-stone-200/60 dark:border-stone-800/60">
                                <div className="text-xs font-mono font-semibold text-amber-600 dark:text-amber-400">03 / Core Algorithms</div>
                                <div className="text-sm font-semibold text-stone-800 dark:text-stone-200 mt-1">Competitive Coding</div>
                                <p className="text-[11px] text-stone-500 dark:text-stone-400 mt-1">1934 Knight, dynamic programming, graph theory</p>
                            </div>

                            <div className="p-3.5 rounded-2xl bg-white/60 dark:bg-[#292524]/60 border border-stone-200/60 dark:border-stone-800/60">
                                <div className="text-xs font-mono font-semibold text-purple-600 dark:text-purple-400">04 / Modern Web</div>
                                <div className="text-sm font-semibold text-stone-800 dark:text-stone-200 mt-1">Next.js &amp; Motion</div>
                                <p className="text-[11px] text-stone-500 dark:text-stone-400 mt-1">Spatial interfaces, fluid animation, performance profiling</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
