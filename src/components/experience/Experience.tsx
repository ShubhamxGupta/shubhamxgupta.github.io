"use client";

import {useState} from "react";
import {motion, AnimatePresence} from "framer-motion";
import Section from "@/components/ui/Section";
import {experienceData, ExperienceItem} from "@/data/experience";
import {clsx} from "clsx";
import Image from "next/image";
import {Briefcase, GraduationCap, Download, CheckCircle2, Sparkles} from "lucide-react";

export default function Experience() {
    const [filter, setFilter] = useState<"all" | "work" | "education">("all");

    const filteredItems =
        filter === "all"
            ? experienceData
            : experienceData.filter((item) => item.type === filter);

    return (
        <Section
            id="resume"
            className="py-28 sm:py-36 relative overflow-hidden border-t border-stone-200/80 dark:border-stone-800/80"
        >
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="mb-14 text-center sm:text-left">
                    <motion.div
                        initial={{opacity: 0, y: 12}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-100 dark:bg-[#1c1917] border border-stone-200/80 dark:border-stone-800/80 text-stone-600 dark:text-stone-400 text-xs font-mono font-medium uppercase tracking-wider mb-4"
                    >
                        <Sparkles size={13} className="text-indigo-500" />
                        <span>Track Record</span>
                    </motion.div>
                    <motion.h2
                        initial={{opacity: 0, y: 16}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-stone-900 dark:text-[#fafaf9]"
                    >
                        Experience &amp; Education
                    </motion.h2>
                    <motion.p
                        initial={{opacity: 0, y: 16}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{delay: 0.1}}
                        className="mt-3 text-base sm:text-lg text-stone-600 dark:text-stone-400 max-w-2xl font-normal leading-relaxed"
                    >
                        A history of production system engineering, research leadership, and academic depth.
                    </motion.p>
                </div>

                {/* Filter Tabs */}
                <div className="flex items-center gap-1.5 p-1 bg-stone-100 dark:bg-[#1c1917] rounded-xl border border-stone-200/80 dark:border-stone-800/80 w-fit mb-12 shadow-xs">
                    <button
                        onClick={() => setFilter("all")}
                        className={`relative px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors duration-200 z-10 cursor-pointer ${
                            filter === "all"
                                ? "text-stone-900 dark:text-stone-100"
                                : "text-stone-500 dark:text-stone-400 hover:text-stone-800 dark:hover:text-stone-200"
                        }`}
                    >
                        {filter === "all" && (
                            <motion.span
                                layoutId="activeExpTab"
                                className="absolute inset-0 bg-white dark:bg-[#292524] rounded-lg shadow-xs -z-10 border border-stone-200/60 dark:border-stone-700/60"
                                transition={{type: "spring", stiffness: 450, damping: 32}}
                            />
                        )}
                        All Journey
                    </button>
                    <button
                        onClick={() => setFilter("work")}
                        className={`relative inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors duration-200 z-10 cursor-pointer ${
                            filter === "work"
                                ? "text-stone-900 dark:text-stone-100"
                                : "text-stone-500 dark:text-stone-400 hover:text-stone-800 dark:hover:text-stone-200"
                        }`}
                    >
                        {filter === "work" && (
                            <motion.span
                                layoutId="activeExpTab"
                                className="absolute inset-0 bg-white dark:bg-[#292524] rounded-lg shadow-xs -z-10 border border-stone-200/60 dark:border-stone-700/60"
                                transition={{type: "spring", stiffness: 450, damping: 32}}
                            />
                        )}
                        <Briefcase size={14} />
                        Engineering Roles
                    </button>
                    <button
                        onClick={() => setFilter("education")}
                        className={`relative inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors duration-200 z-10 cursor-pointer ${
                            filter === "education"
                                ? "text-stone-900 dark:text-stone-100"
                                : "text-stone-500 dark:text-stone-400 hover:text-stone-800 dark:hover:text-stone-200"
                        }`}
                    >
                        {filter === "education" && (
                            <motion.span
                                layoutId="activeExpTab"
                                className="absolute inset-0 bg-white dark:bg-[#292524] rounded-lg shadow-xs -z-10 border border-stone-200/60 dark:border-stone-700/60"
                                transition={{type: "spring", stiffness: 450, damping: 32}}
                            />
                        )}
                        <GraduationCap size={14} />
                        Education
                    </button>
                </div>

                {/* Timeline Stack */}
                <div className="relative border-l-2 border-stone-200 dark:border-stone-800 ml-4 sm:ml-7 space-y-8">
                    <AnimatePresence>
                        {filteredItems.map((item: ExperienceItem, index: number) => (
                            <motion.div
                                key={item.id}
                                layout
                                initial={{opacity: 0, x: -16}}
                                animate={{opacity: 1, x: 0}}
                                exit={{opacity: 0, x: -16}}
                                transition={{duration: 0.35, delay: index * 0.04}}
                                className="relative pl-6 sm:pl-9"
                            >
                                {/* Timeline Node Logo */}
                                <div className="absolute -left-4.5 sm:-left-5.5 top-1.5 z-10 w-9 h-9 sm:w-11 sm:h-11">
                                    <div
                                        className={clsx(
                                            "w-full h-full rounded-full overflow-hidden border-2 bg-white dark:bg-[#1c1917] flex items-center justify-center shadow-sm transition-all duration-300",
                                            item.active
                                                ? "border-emerald-500 ring-3 ring-emerald-500/20"
                                                : "border-stone-200 dark:border-stone-700"
                                        )}
                                    >
                                        <Image
                                            src={item.logo}
                                            alt={item.company}
                                            width={44}
                                            height={44}
                                            className="object-cover w-full h-full"
                                        />
                                    </div>
                                </div>

                                {/* Experience Card (Flat, polished Apple-style) */}
                                <div className="p-6 rounded-2xl bg-stone-100/70 dark:bg-[#1c1917]/70 backdrop-blur-xl border border-stone-200/80 dark:border-stone-800/80 shadow-xs hover:border-indigo-500/40 dark:hover:border-indigo-500/40 transition-colors">
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5 mb-2">
                                        <h3 className="text-lg sm:text-xl font-bold text-stone-900 dark:text-stone-100 tracking-tight">
                                            {item.role}
                                        </h3>
                                        <span className="text-xs font-mono font-medium text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200/60 dark:border-indigo-800/60 px-3 py-0.5 rounded-full w-fit">
                                            {item.period}
                                        </span>
                                    </div>

                                    <div className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 mb-3">
                                        {item.company}
                                    </div>

                                    {item.description && (
                                        <p className="text-stone-600 dark:text-stone-300 text-sm leading-relaxed mb-4">
                                            {item.description}
                                        </p>
                                    )}

                                    {item.achievements && item.achievements.length > 0 && (
                                        <div className="space-y-2 pt-3 border-t border-stone-200/60 dark:border-stone-800/60">
                                            {item.achievements.map((achievement) => (
                                                <div
                                                    key={`${item.id}-${achievement}`}
                                                    className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-600 dark:text-stone-300"
                                                >
                                                    <CheckCircle2
                                                        size={15}
                                                        className="text-emerald-500 shrink-0 mt-0.5"
                                                    />
                                                    <span>{achievement}</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Download Complete Resume Button */}
                <div className="mt-14 text-center">
                    <a
                        href="/ShubhamGupta_Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-7 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm rounded-xl shadow-md shadow-indigo-600/25 transition-all active:scale-95"
                    >
                        <Download size={15} />
                        Download Complete Resume
                    </a>
                </div>
            </div>
        </Section>
    );
}
