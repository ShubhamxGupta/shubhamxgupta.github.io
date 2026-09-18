"use client";

import {motion} from "framer-motion";
import Section from "@/components/ui/Section";
import {Brain, Cpu, Globe, Award, Sparkles} from "lucide-react";
import {LeetCodeCard} from "@/components/ui/LeetCodeCard";
import {TheSvgIcon} from "@/components/ui/TheSvgIcon";

interface SkillItem {
    name: string;
    iconName: string;
    badge: string;
    description: string;
}

interface SkillCluster {
    title: string;
    icon: React.ComponentType<{ size?: number; className?: string }>;
    color: string;
    skills: SkillItem[];
}

const skillClusters: SkillCluster[] = [
    {
        title: "Machine Learning & Vision",
        icon: Brain,
        color: "text-indigo-500",
        skills: [
            {
                name: "Python",
                iconName: "python",
                badge: "Primary Language",
                description: "NumPy, Pandas, Scikit-learn, Multi-threading & Async",
            },
            {
                name: "PyTorch",
                iconName: "pytorch",
                badge: "Deep Learning",
                description: "Custom Neural Architectures, Torchvision, CUDA optimization",
            },
            {
                name: "TensorFlow",
                iconName: "tensorflow",
                badge: "Framework",
                description: "Model Training, TF-Lite, Quantization & Serving",
            },
            {
                name: "Computer Vision",
                iconName: "opencv",
                badge: "Specialization",
                description: "OpenCV, YOLO, CNNs, Real-time Feature Tracking",
            },
        ],
    },
    {
        title: "Distributed Systems & Scale",
        icon: Cpu,
        color: "text-emerald-500",
        skills: [
            {
                name: "C++",
                iconName: "cplusplus",
                badge: "Core Systems",
                description: "Modern C++, STL, Low-latency concurrency & Data Structures",
            },
            {
                name: "FastAPI & Python APIs",
                iconName: "fastapi",
                badge: "Backend Engine",
                description: "High-throughput async handlers, typed schemas, JWT auth",
            },
            {
                name: "Docker",
                iconName: "docker",
                badge: "Containerization",
                description: "Multi-stage reproducible builds, orchestration, isolated envs",
            },
            {
                name: "PostgreSQL & SQL",
                iconName: "postgresql",
                badge: "Data Tier",
                description: "Relational schema design, query optimization, indexing strategies",
            },
        ],
    },
    {
        title: "Modern Web & Developer Platforms",
        icon: Globe,
        color: "text-amber-500",
        skills: [
            {
                name: "Next.js",
                iconName: "nextdotjs",
                badge: "Full Stack",
                description: "App Router, SSR, Turbopack, Tailwind CSS, TypeScript",
            },
            {
                name: "React",
                iconName: "react",
                badge: "Interface Architecture",
                description: "Modern hooks, concurrent rendering, spatial micro-interactions",
            },
            {
                name: "Git & Automation",
                iconName: "git",
                badge: "DevOps & CI/CD",
                description: "Trunk-based workflows, GitHub Actions, semantic release",
            },
            {
                name: "Kotlin & Compose",
                iconName: "kotlin",
                badge: "Mobile Systems",
                description: "Static analysis AST tooling, Android modernization rules",
            },
        ],
    },
];

export default function Skills() {
    return (
        <Section
            id="skills"
            className="relative py-28 sm:py-36 overflow-hidden border-t border-stone-200/80 dark:border-stone-800/80"
        >
            <div className="max-w-5xl mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="mb-14 text-center sm:text-left">
                    <motion.div
                        initial={{opacity: 0, y: 12}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-100 dark:bg-[#1c1917] border border-stone-200/80 dark:border-stone-800/80 text-stone-600 dark:text-stone-400 text-xs font-mono font-medium uppercase tracking-wider mb-4"
                    >
                        <Sparkles size={13} className="text-indigo-500" />
                        <span>Technical Arsenal</span>
                    </motion.div>
                    <motion.h2
                        initial={{opacity: 0, y: 16}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{delay: 0.1}}
                        className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-stone-900 dark:text-[#fafaf9]"
                    >
                        Skills &amp; Capabilities
                    </motion.h2>
                    <motion.p
                        initial={{opacity: 0, y: 16}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{delay: 0.15}}
                        className="mt-3 text-base sm:text-lg text-stone-600 dark:text-stone-400 max-w-2xl font-normal leading-relaxed"
                    >
                        Tools, runtimes, and engineering frameworks I leverage to design intelligent machine learning pipelines and resilient platforms.
                    </motion.p>
                </div>

                {/* Categorized Bento Clusters */}
                <div className="space-y-12">
                    {skillClusters.map((cluster, clusterIdx) => {
                        const Icon = cluster.icon;
                        return (
                            <motion.div
                                key={cluster.title}
                                initial={{opacity: 0, y: 24}}
                                whileInView={{opacity: 1, y: 0}}
                                viewport={{once: true}}
                                transition={{duration: 0.5, delay: clusterIdx * 0.1}}
                            >
                                <div className="flex items-center gap-2.5 mb-5">
                                    <div className="p-1.5 rounded-lg bg-stone-100 dark:bg-[#1c1917] border border-stone-200/80 dark:border-stone-800/80">
                                        <Icon size={16} className={cluster.color} />
                                    </div>
                                    <h3 className="text-base sm:text-lg font-bold text-stone-900 dark:text-stone-100 tracking-tight">
                                        {cluster.title}
                                    </h3>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                    {cluster.skills.map((skill) => (
                                        <div
                                            key={skill.name}
                                            className="p-5 rounded-2xl bg-stone-100/60 dark:bg-[#1c1917]/70 backdrop-blur-xl border border-stone-200/80 dark:border-stone-800/80 shadow-xs hover:border-indigo-500/40 dark:hover:border-indigo-500/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
                                        >
                                            <div>
                                                <div className="flex items-start justify-between mb-4">
                                                    <div className="w-11 h-11 rounded-xl bg-white dark:bg-[#292524] p-2 flex items-center justify-center border border-stone-200/80 dark:border-stone-700/60 shadow-xs group-hover:scale-105 transition-transform">
                                                        <TheSvgIcon name={skill.iconName} size={24} />
                                                    </div>
                                                    <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-full bg-stone-200/60 dark:bg-stone-800/80 text-stone-700 dark:text-stone-300 border border-stone-300/40 dark:border-stone-700/40">
                                                        {skill.badge}
                                                    </span>
                                                </div>

                                                <h4 className="font-bold text-stone-900 dark:text-stone-100 text-base mb-1">
                                                    {skill.name}
                                                </h4>

                                                <p className="text-xs text-stone-500 dark:text-stone-400 leading-relaxed">
                                                    {skill.description}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Algorithmic Excellence / LeetCode Showcase */}
                <motion.div
                    initial={{opacity: 0, y: 24}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.5, delay: 0.2}}
                    className="mt-20 pt-12 border-t border-stone-200/80 dark:border-stone-800/80"
                >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                        <div>
                            <div className="flex items-center gap-2 mb-1">
                                <Award size={18} className="text-amber-500" />
                                <h3 className="font-display text-2xl font-bold text-stone-900 dark:text-stone-100 tracking-tight">
                                    Algorithmic Problem Solving
                                </h3>
                            </div>
                            <p className="text-sm text-stone-600 dark:text-stone-400">
                                Live verified performance metrics from competitive programming contests and platforms.
                            </p>
                        </div>
                    </div>

                    <LeetCodeCard />
                </motion.div>
            </div>
        </Section>
    );
}
