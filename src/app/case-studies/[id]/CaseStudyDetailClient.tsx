"use client";

import Section from "@/components/ui/Section";
import type {CaseStudy} from "@/data/caseStudies";
import {
    ArrowLeft,
    Box,
    CheckCircle2,
    XCircle,
    Cpu,
    TrendingUp,
    AlertTriangle,
} from "lucide-react";
import Link from "next/link";
import {motion} from "framer-motion";

export default function CaseStudyDetailClient({study}: { study: CaseStudy }) {
    return (
        <article className="pt-24 pb-28 min-h-screen">
            {/* Header */}
            <div className="border-b border-stone-200/80 dark:border-stone-800/80 pb-14 mb-14">
                <Section>
                    <div className="max-w-4xl mx-auto px-6">
                        <Link
                            href="/case-studies"
                            className="inline-flex items-center gap-2 text-stone-500 hover:text-indigo-600 dark:hover:text-indigo-400 mb-8 transition-colors text-xs font-mono font-semibold uppercase tracking-wider group"
                        >
                            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                            <span>Back to Architecture Specs</span>
                        </Link>

                        <motion.div
                            initial={{opacity: 0, y: 10}}
                            animate={{opacity: 1, y: 0}}
                            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-100 dark:bg-[#1c1917] border border-stone-200/80 dark:border-stone-800/80 text-indigo-600 dark:text-indigo-400 text-xs font-mono font-medium uppercase tracking-wider mb-4"
                        >
                            <Cpu size={13} />
                            <span>Technical Spec</span>
                        </motion.div>

                        <motion.h1
                            initial={{opacity: 0, y: 10}}
                            animate={{opacity: 1, y: 0}}
                            transition={{delay: 0.1}}
                            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 dark:text-[#fafaf9] mb-8 leading-tight tracking-tight"
                        >
                            {study.title}
                        </motion.h1>

                        <motion.div
                            initial={{opacity: 0, y: 10}}
                            animate={{opacity: 1, y: 0}}
                            transition={{delay: 0.2}}
                            className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-stone-100/70 dark:bg-[#1c1917]/70 rounded-2xl border border-stone-200/80 dark:border-stone-800/80 text-xs font-mono"
                        >
                            <div className="flex flex-col">
                                <span className="text-[11px] uppercase tracking-wider text-stone-400 mb-1">
                                    Role
                                </span>
                                <span className="font-semibold text-stone-900 dark:text-stone-100">
                                    {study.role}
                                </span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[11px] uppercase tracking-wider text-stone-400 mb-1">
                                    Timeline
                                </span>
                                <span className="font-semibold text-stone-900 dark:text-stone-100">
                                    {study.timeline}
                                </span>
                            </div>
                            <div className="flex flex-col md:col-span-2">
                                <span className="text-[11px] uppercase tracking-wider text-stone-400 mb-1">
                                    Tech Stack
                                </span>
                                <div className="flex flex-wrap gap-1.5">
                                    {study.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-2 py-0.5 rounded bg-stone-200/60 dark:bg-stone-800/80 text-stone-700 dark:text-stone-300 border border-stone-300/40 dark:border-stone-700/40"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </Section>
            </div>

            {/* Content */}
            <Section>
                <div className="max-w-4xl mx-auto px-6 space-y-16">
                    {/* Problem & Constraints */}
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="md:col-span-2">
                            <h2 className="font-display text-2xl font-bold text-stone-900 dark:text-[#fafaf9] mb-4 flex items-center gap-2.5">
                                <AlertTriangle className="text-amber-500" size={20} />
                                <span>The Engineering Challenge</span>
                            </h2>
                            <p className="text-base sm:text-lg text-stone-600 dark:text-stone-300 leading-relaxed">
                                {study.problem}
                            </p>
                        </div>
                        <div className="bg-amber-500/10 p-6 rounded-2xl border border-amber-500/20 h-fit">
                            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-3">
                                Key Constraints
                            </h3>
                            <ul className="space-y-2.5">
                                {study.constraints.map((constraint) => (
                                    <li
                                        key={constraint}
                                        className="flex gap-2.5 text-xs text-stone-700 dark:text-stone-300 font-medium"
                                    >
                                        <span className="text-amber-500 font-bold">•</span>
                                        <span>{constraint}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <hr className="border-stone-200/80 dark:border-stone-800/80" />

                    {/* Technical Solution */}
                    <div>
                        <h2 className="font-display text-2xl sm:text-3xl font-bold text-stone-900 dark:text-[#fafaf9] mb-6 flex items-center gap-2.5">
                            <Box className="text-indigo-500" size={22} />
                            <span>Architecture &amp; Technical Solution</span>
                        </h2>
                        <div className="whitespace-pre-line text-stone-600 dark:text-stone-300 leading-relaxed text-base">
                            {study.solution}
                        </div>
                    </div>

                    {/* Key Technical Decisions & Tradeoffs */}
                    <div>
                        <h2 className="font-display text-2xl font-bold text-stone-900 dark:text-[#fafaf9] mb-6">
                            Technical Decisions &amp; Trade-offs
                        </h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            {study.tradeoffs.map((tradeoff) => (
                                <div
                                    key={tradeoff.decision}
                                    className="p-6 rounded-2xl bg-stone-100/70 dark:bg-[#1c1917]/70 border border-stone-200/80 dark:border-stone-800/80 space-y-3"
                                >
                                    <h3 className="font-display font-bold text-stone-900 dark:text-stone-100 text-base">
                                        {tradeoff.decision}
                                    </h3>
                                    <div className="flex items-start gap-2 text-xs sm:text-sm text-stone-600 dark:text-stone-300">
                                        <CheckCircle2 size={15} className="text-emerald-500 shrink-0 mt-0.5" />
                                        <span><strong>Pro:</strong> {tradeoff.pros}</span>
                                    </div>
                                    <div className="flex items-start gap-2 text-xs sm:text-sm text-stone-500 dark:text-stone-400">
                                        <XCircle size={15} className="text-rose-400 shrink-0 mt-0.5" />
                                        <span><strong>Con:</strong> {tradeoff.cons}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Outcome & Impact */}
                    <div className="bg-indigo-950/80 rounded-3xl p-8 md:p-10 text-white relative overflow-hidden border border-indigo-900/60 shadow-xl">
                        <div className="absolute top-0 right-0 p-32 bg-indigo-500 rounded-full blur-3xl opacity-20 pointer-events-none -mr-16 -mt-16" />

                        <h2 className="relative font-display text-2xl font-bold mb-6 flex items-center gap-2.5">
                            <TrendingUp className="text-indigo-400" />
                            <span>Impact &amp; Engineering Outcomes</span>
                        </h2>

                        <div className="relative grid sm:grid-cols-3 gap-4">
                            {study.outcome.map((item) => (
                                <div
                                    key={item}
                                    className="bg-white/10 backdrop-blur-sm p-5 rounded-2xl border border-white/10"
                                >
                                    <p className="font-medium text-xs sm:text-sm text-indigo-100 leading-relaxed">
                                        {item}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Section>
        </article>
    );
}
