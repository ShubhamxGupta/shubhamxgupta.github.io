"use client";

import Section from "@/components/ui/Section";
import {caseStudies} from "@/data/caseStudies";
import {motion} from "framer-motion";
import {ArrowRight, Box, Cpu} from "lucide-react";
import Link from "next/link";

export default function CaseStudiesPage() {
    return (
        <div className="pt-28 pb-28 min-h-screen">
            <Section className="mb-14">
                <div className="max-w-5xl mx-auto px-6">
                    <motion.div
                        initial={{opacity: 0, y: 10}}
                        animate={{opacity: 1, y: 0}}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-100 dark:bg-[#1c1917] border border-stone-200/80 dark:border-stone-800/80 text-stone-600 dark:text-stone-400 text-xs font-mono font-medium uppercase tracking-wider mb-4"
                    >
                        <Cpu size={13} className="text-indigo-500" />
                        <span>Engineering Specs</span>
                    </motion.div>
                    <motion.h1
                        initial={{opacity: 0, y: 10}}
                        animate={{opacity: 1, y: 0}}
                        transition={{delay: 0.1}}
                        className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-stone-900 dark:text-[#fafaf9] mb-4 tracking-tight"
                    >
                        System Architectures
                    </motion.h1>
                    <motion.p
                        initial={{opacity: 0, y: 10}}
                        animate={{opacity: 1, y: 0}}
                        transition={{delay: 0.2}}
                        className="text-base sm:text-lg text-stone-600 dark:text-stone-400 max-w-2xl leading-relaxed"
                    >
                        Technical breakdowns of complex systems, AST transformation pipelines, and high-throughput software architectures.
                    </motion.p>
                </div>
            </Section>

            <Section>
                <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-6">
                    {caseStudies.map((study, index) => (
                        <motion.div
                            key={study.id}
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{delay: 0.2 + index * 0.1}}
                            className="group flex flex-col bg-stone-100/70 dark:bg-[#1c1917]/80 rounded-3xl border border-stone-200/80 dark:border-stone-800/80 hover:border-indigo-500/40 dark:hover:border-indigo-500/40 transition-all shadow-xs hover:shadow-xl hover:-translate-y-1 overflow-hidden"
                        >
                            <div className="p-7 sm:p-8 flex-1 flex flex-col">
                                <div className="flex items-center justify-between mb-5">
                                    <div className="flex items-center gap-1.5 text-xs font-mono font-medium text-stone-500 dark:text-stone-400">
                                        <Box size={13} className="text-indigo-400" />
                                        <span>{study.timeline}</span>
                                    </div>
                                </div>

                                <h2 className="font-display text-2xl font-bold text-stone-900 dark:text-[#fafaf9] mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                    {study.title}
                                </h2>

                                <p className="text-stone-600 dark:text-stone-300 text-sm leading-relaxed mb-6 flex-1">
                                    {study.description}
                                </p>

                                <div className="flex flex-wrap gap-1.5 mb-6">
                                    {study.tags.slice(0, 3).map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-2.5 py-0.5 font-mono text-[11px] bg-stone-200/60 dark:bg-stone-800/80 text-stone-700 dark:text-stone-300 rounded-md border border-stone-300/40 dark:border-stone-700/40"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                    {study.tags.length > 3 && (
                                        <span className="px-2 py-0.5 text-stone-400 text-xs font-mono">
                                            +{study.tags.length - 3}
                                        </span>
                                    )}
                                </div>

                                <div className="mt-auto pt-5 border-t border-stone-200/60 dark:border-stone-800/60 flex items-center justify-between">
                                    <span className="text-xs font-mono text-stone-500 dark:text-stone-400">
                                        {study.role}
                                    </span>
                                    <Link
                                        href={`/case-studies/${study.id}`}
                                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 dark:text-indigo-400 group-hover:translate-x-1 transition-all"
                                    >
                                        <span>Technical Spec</span>
                                        <ArrowRight size={14} />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Section>
        </div>
    );
}
