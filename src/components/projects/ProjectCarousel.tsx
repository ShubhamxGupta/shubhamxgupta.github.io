"use client";

import {useState, useEffect} from "react";
import {motion, PanInfo} from "framer-motion";
import {ArrowLeft, ArrowRight, ExternalLink, Sparkles} from "lucide-react";
import {projectsData} from "@/data/projects";
import Image from "next/image";
import {SiGithub} from "@icons-pack/react-simple-icons";
import {Magnetic} from "@/components/ui/Magnetic";

function getRelativeIndex(index: number, activeIndex: number, total: number): number {
    let relative = index - activeIndex;
    if (relative > total / 2) relative -= total;
    if (relative < -total / 2) relative += total;
    return relative;
}

function getCardStyle(relativeIndex: number, isMobile: boolean) {
    if (relativeIndex === 0) {
        return {
            zIndex: 30,
            scale: 1,
            x: 0,
            rotateY: 0,
            opacity: 1,
            filter: "brightness(1)",
        };
    }

    if (Math.abs(relativeIndex) === 1) {
        const direction = relativeIndex;
        return {
            zIndex: 20,
            scale: 0.86,
            x: direction * (isMobile ? 32 : 320),
            rotateY: direction * (isMobile ? -6 : -20),
            opacity: 0.65,
            filter: "brightness(0.8)",
        };
    }

    return {
        zIndex: 0,
        scale: 0.6,
        x: relativeIndex > 0 ? 600 : -600,
        rotateY: 0,
        opacity: 0,
        filter: "brightness(0)",
    };
}

export function ProjectCarousel() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const nextProject = () => {
        setActiveIndex((prev) => (prev + 1) % projectsData.length);
    };

    const prevProject = () => {
        setActiveIndex(
            (prev) => (prev - 1 + projectsData.length) % projectsData.length
        );
    };

    const handleDragEnd = (
        _event: MouseEvent | TouchEvent | PointerEvent,
        info: PanInfo
    ) => {
        if (info.offset.x > 50) {
            prevProject();
        } else if (info.offset.x < -50) {
            nextProject();
        }
    };

    return (
        <div className="relative w-full flex flex-col items-center">
            <div className="relative w-full h-130 md:h-145 flex items-center justify-center overflow-visible perspective-distant py-6">
                {/* Navigation Buttons */}
                <div className="absolute left-2 md:left-8 z-40">
                    <Magnetic strength={0.3}>
                        <button
                            onClick={prevProject}
                            aria-label="Previous project"
                            className="p-3.5 rounded-full bg-stone-100/90 dark:bg-[#1c1917]/90 backdrop-blur-xl border border-stone-200/80 dark:border-stone-800/80 text-stone-700 dark:text-stone-300 hover:text-stone-950 dark:hover:text-white transition-all shadow-xl active:scale-95 flex items-center justify-center cursor-pointer"
                        >
                            <ArrowLeft size={18} />
                        </button>
                    </Magnetic>
                </div>

                <div className="absolute right-2 md:right-8 z-40">
                    <Magnetic strength={0.3}>
                        <button
                            onClick={nextProject}
                            aria-label="Next project"
                            className="p-3.5 rounded-full bg-stone-100/90 dark:bg-[#1c1917]/90 backdrop-blur-xl border border-stone-200/80 dark:border-stone-800/80 text-stone-700 dark:text-stone-300 hover:text-stone-950 dark:hover:text-white transition-all shadow-xl active:scale-95 flex items-center justify-center cursor-pointer"
                        >
                            <ArrowRight size={18} />
                        </button>
                    </Magnetic>
                </div>

                {projectsData.map((project, index) => {
                    const relativeIndex = getRelativeIndex(index, activeIndex, projectsData.length);
                    const style = getCardStyle(relativeIndex, isMobile);
                    const isActive = index === activeIndex;

                    return (
                        <motion.div
                            key={project.id}
                            className="absolute w-[88vw] sm:w-120 md:w-130 h-120 md:h-130 rounded-3xl overflow-hidden shadow-2xl flex flex-col bg-white dark:bg-[#1c1917] border border-stone-200/90 dark:border-stone-800/90 transition-colors"
                            drag={isMobile ? "x" : false}
                            dragConstraints={{left: 0, right: 0}}
                            dragElastic={0.08}
                            onDragEnd={handleDragEnd}
                            initial={false}
                            animate={{
                                zIndex: style.zIndex,
                                x: style.x,
                                scale: style.scale,
                                rotateY: style.rotateY,
                                opacity: style.opacity,
                                filter: style.filter,
                            }}
                            transition={{duration: 0.5, ease: [0.16, 1, 0.3, 1]}}
                            style={{
                                transformStyle: "preserve-3d",
                                boxShadow: isActive
                                    ? "0 25px 60px -15px rgba(99, 102, 241, 0.25)"
                                    : "0 10px 30px -10px rgba(0, 0, 0, 0.3)",
                            }}
                        >
                            {/* Media Display Area */}
                            <div className="relative w-full h-[52%] bg-stone-100 dark:bg-stone-950 overflow-hidden group">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    sizes="(max-width: 768px) 88vw, 520px"
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent pointer-events-none" />

                                {/* Top Badge */}
                                {project.tags?.[0] && (
                                    <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-stone-900/80 backdrop-blur-md border border-white/10 text-xs font-medium text-stone-200 flex items-center gap-1.5">
                                        <Sparkles size={12} className="text-indigo-400" />
                                        <span>{project.tags[0]}</span>
                                    </div>
                                )}
                            </div>

                            {/* Content Information Area */}
                            <div className="p-6 md:p-7 flex flex-col h-[48%] justify-between bg-white dark:bg-[#1c1917]">
                                <div>
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="text-xl sm:text-2xl font-bold text-stone-900 dark:text-[#fafaf9] tracking-tight">
                                            {project.title}
                                        </h3>
                                        <div className="flex items-center gap-2">
                                            {project.github && (
                                                <a
                                                    href={project.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    aria-label={`View GitHub repository for ${project.title}`}
                                                    className="p-2 rounded-xl bg-stone-100 dark:bg-[#292524] text-stone-600 dark:text-stone-300 hover:text-stone-950 dark:hover:text-white border border-stone-200/80 dark:border-stone-700/80 transition-all active:scale-[0.96]"
                                                >
                                                    <SiGithub size={16} />
                                                </a>
                                            )}
                                            {project.link && (
                                                <a
                                                    href={project.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    aria-label={`View live website for ${project.title}`}
                                                    className="p-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white transition-all shadow-xs active:scale-[0.96]"
                                                >
                                                    <ExternalLink size={16} />
                                                </a>
                                            )}
                                        </div>
                                    </div>

                                    <p className="text-stone-600 dark:text-stone-300 text-xs sm:text-sm line-clamp-3 leading-relaxed mb-4">
                                        {project.description}
                                    </p>
                                </div>

                                {/* Tech Stack Chips */}
                                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-stone-200/60 dark:border-stone-800/60">
                                    {project.techStack?.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-2.5 py-0.5 text-[11px] font-mono font-medium bg-stone-100 dark:bg-[#292524] text-stone-700 dark:text-stone-300 rounded-md border border-stone-200/60 dark:border-stone-700/60"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            {/* Apple-style Pagination Indicators */}
            <div className="flex items-center gap-2 mt-4">
                {projectsData.map((project, i) => (
                    <button
                        key={`pagination-${project.id || project.title}`}
                        onClick={() => setActiveIndex(i)}
                        aria-label={`Go to slide ${i + 1}`}
                        className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                            i === activeIndex
                                ? "w-8 bg-indigo-500 shadow-md shadow-indigo-500/40"
                                : "w-2 bg-stone-300 dark:bg-stone-700 hover:bg-stone-400 dark:hover:bg-stone-600"
                        }`}
                    />
                ))}
            </div>
        </div>
    );
}
