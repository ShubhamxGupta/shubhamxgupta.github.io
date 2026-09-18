"use client";

import {ProjectCarousel} from "./ProjectCarousel";
import {motion} from "framer-motion";
import {Sparkles, ArrowRight} from "lucide-react";
import {SiGithub} from "@icons-pack/react-simple-icons";

export default function Projects() {
    return (
        <section
            id="projects"
            className="py-28 sm:py-36 relative overflow-hidden border-t border-stone-200/80 dark:border-stone-800/80"
        >
            <div className="container max-w-5xl mx-auto px-6 relative z-10">
                <div className="mb-14 text-center sm:text-left">
                    <motion.div
                        initial={{opacity: 0, y: 12}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-100 dark:bg-[#1c1917] border border-stone-200/80 dark:border-stone-800/80 text-stone-600 dark:text-stone-400 text-xs font-mono font-medium uppercase tracking-wider mb-4"
                    >
                        <Sparkles size={13} className="text-indigo-500" />
                        <span>Interactive Works</span>
                    </motion.div>
                    <motion.h2
                        initial={{opacity: 0, y: 16}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-stone-900 dark:text-[#fafaf9]"
                    >
                        Selected Projects &amp; Demos
                    </motion.h2>
                    <motion.p
                        initial={{opacity: 0, y: 16}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{delay: 0.1}}
                        className="mt-3 text-base sm:text-lg text-stone-600 dark:text-stone-400 max-w-2xl font-normal leading-relaxed"
                    >
                        Interactive experiments, physics engines, and web applications built with attention to latency and spatial design.
                    </motion.p>
                </div>

                {/* 3D Carousel Implementation */}
                <ProjectCarousel />

                <div className="text-center mt-12">
                    <a
                        href="https://github.com/ShubhamxGupta"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 transition-colors group"
                    >
                        <SiGithub size={16} />
                        <span>Explore full open-source archive on GitHub</span>
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>
            </div>
        </section>
    );
}
