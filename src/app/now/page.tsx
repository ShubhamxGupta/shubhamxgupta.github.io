"use client";

import Section from "@/components/ui/Section";
import {motion} from "framer-motion";
import {Hammer, BookOpen, Target, Zap, MapPin, Sparkles, Clock} from "lucide-react";

export default function NowPage() {
    return (
        <div className="pt-28 pb-28 min-h-screen">
            <Section className="mb-12">
                <div className="max-w-5xl mx-auto px-6">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-stone-200/80 dark:border-stone-800/80 pb-8 mb-10 gap-4">
                        <div>
                            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-100 dark:bg-[#1c1917] border border-stone-200/80 dark:border-stone-800/80 text-stone-600 dark:text-stone-400 text-xs font-mono font-medium uppercase tracking-wider mb-4">
                                <Sparkles size={13} className="text-indigo-500" />
                                <span>Status &amp; Trajectory</span>
                            </div>
                            <motion.h1
                                initial={{opacity: 0, y: 10}}
                                animate={{opacity: 1, y: 0}}
                                className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-stone-900 dark:text-[#fafaf9] mb-2"
                            >
                                /now
                            </motion.h1>
                            <motion.p
                                initial={{opacity: 0, y: 10}}
                                animate={{opacity: 1, y: 0}}
                                transition={{delay: 0.1}}
                                className="text-base text-stone-500 dark:text-stone-400"
                            >
                                A living snapshot of my current engineering focus and explorations.
                            </motion.p>
                        </div>

                        <motion.div
                            initial={{opacity: 0, x: 20}}
                            animate={{opacity: 1, x: 0}}
                            className="text-left sm:text-right"
                        >
                            <div className="flex items-center gap-2 text-sm font-semibold text-stone-800 dark:text-stone-200 sm:justify-end">
                                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                                <span>Active &amp; Engineering</span>
                            </div>
                            <div className="flex items-center gap-1.5 text-xs font-mono text-stone-400 mt-1 sm:justify-end">
                                <MapPin size={12} /> Jaipur / Bangalore, India
                            </div>
                        </motion.div>
                    </div>

                    {/* Bento Grid Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        {/* Main Focus Card - Spans 2 cols */}
                        <motion.div
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{delay: 0.15}}
                            className="md:col-span-2 bg-stone-100/70 dark:bg-[#1c1917]/80 p-7 sm:p-8 rounded-3xl border border-stone-200/80 dark:border-stone-800/80 shadow-xs"
                        >
                            <h2 className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-amber-500 mb-4">
                                <Zap size={15} /> Primary Focus
                            </h2>
                            <p className="text-xl sm:text-2xl text-stone-800 dark:text-stone-100 leading-relaxed font-normal">
                                I am currently deep-diving into{" "}
                                <strong className="font-bold text-indigo-600 dark:text-indigo-400">
                                    Machine Learning Systems Engineering
                                </strong>
                                , specifically designing deterministic interfaces, low-latency speculative inference pipelines, and distributed observability platforms.
                            </p>
                        </motion.div>

                        {/* Building Card */}
                        <motion.div
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{delay: 0.22}}
                            className="bg-indigo-600 text-white p-7 sm:p-8 rounded-3xl shadow-xl shadow-indigo-600/20 relative overflow-hidden flex flex-col justify-between"
                        >
                            <div>
                                <h2 className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-indigo-200 mb-5">
                                    <Hammer size={15} /> Active Builds
                                </h2>
                                <ul className="space-y-4 text-sm text-indigo-50">
                                    <li className="flex items-start gap-2.5">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white shrink-0" />
                                        <span>Designing real-time telemetry pipelines and trace context propagation tools.</span>
                                    </li>
                                    <li className="flex items-start gap-2.5">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white shrink-0" />
                                        <span>Experimenting with typed JSON generation boundary engines.</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-6 pt-4 border-t border-indigo-500/50 text-xs font-mono text-indigo-200">
                                Production &amp; Open Source
                            </div>
                        </motion.div>

                        {/* Learning Card */}
                        <motion.div
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{delay: 0.3}}
                            className="bg-stone-100/70 dark:bg-[#1c1917]/80 p-7 sm:p-8 rounded-3xl border border-stone-200/80 dark:border-stone-800/80 shadow-xs"
                        >
                            <h2 className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-emerald-500 mb-5">
                                <BookOpen size={15} /> Exploration Stack
                            </h2>
                            <ul className="space-y-3.5 text-xs sm:text-sm">
                                <li className="flex items-center justify-between pb-3 border-b border-stone-200/60 dark:border-stone-800/60">
                                    <span className="text-stone-800 dark:text-stone-200 font-medium">Rust &amp; Systems</span>
                                    <span className="text-[11px] font-mono text-stone-500 bg-stone-200/60 dark:bg-stone-800/80 px-2 py-0.5 rounded">Low Latency</span>
                                </li>
                                <li className="flex items-center justify-between pb-3 border-b border-stone-200/60 dark:border-stone-800/60">
                                    <span className="text-stone-800 dark:text-stone-200 font-medium">WebGPU &amp; Shaders</span>
                                    <span className="text-[11px] font-mono text-stone-500 bg-stone-200/60 dark:bg-stone-800/80 px-2 py-0.5 rounded">Compute</span>
                                </li>
                                <li className="flex items-center justify-between">
                                    <span className="text-stone-800 dark:text-stone-200 font-medium">Distributed Consensus</span>
                                    <span className="text-[11px] font-mono text-stone-500 bg-stone-200/60 dark:bg-stone-800/80 px-2 py-0.5 rounded">Raft &amp; DDIA</span>
                                </li>
                            </ul>
                        </motion.div>

                        {/* Current Targets Card - Spans 2 cols */}
                        <motion.div
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{delay: 0.38}}
                            className="md:col-span-2 bg-stone-100/70 dark:bg-[#1c1917]/80 p-7 sm:p-8 rounded-3xl border border-stone-200/80 dark:border-stone-800/80 shadow-xs"
                        >
                            <h2 className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-purple-500 mb-5">
                                <Target size={15} /> Active Targets
                            </h2>
                            <div className="grid sm:grid-cols-2 gap-3.5">
                                <div className="flex items-start gap-3 bg-white dark:bg-[#292524] p-4 rounded-2xl border border-stone-200/60 dark:border-stone-700/60">
                                    <div className="w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-950/60 flex items-center justify-center text-indigo-600 dark:text-indigo-400 text-xs font-mono font-bold shrink-0 mt-0.5">
                                        1
                                    </div>
                                    <span className="text-xs sm:text-sm text-stone-700 dark:text-stone-200 font-medium">
                                        Ship open-source AST transformation rules for declarative UI migration.
                                    </span>
                                </div>
                                <div className="flex items-start gap-3 bg-white dark:bg-[#292524] p-4 rounded-2xl border border-stone-200/60 dark:border-stone-700/60">
                                    <div className="w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-950/60 flex items-center justify-center text-indigo-600 dark:text-indigo-400 text-xs font-mono font-bold shrink-0 mt-0.5">
                                        2
                                    </div>
                                    <span className="text-xs sm:text-sm text-stone-700 dark:text-stone-200 font-medium">
                                        Publish comprehensive case studies on microservice telemetry and AST analysis.
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Timestamp */}
                    <div className="mt-14 pt-8 border-t border-stone-200/80 dark:border-stone-800/80 text-center">
                        <p className="text-xs font-mono text-stone-400 dark:text-stone-500 flex items-center justify-center gap-1.5">
                            <Clock size={12} />
                            <span>Last updated: September 2026 · Inspired by Derek Sivers /now page movement</span>
                        </p>
                    </div>
                </div>
            </Section>
        </div>
    );
}
