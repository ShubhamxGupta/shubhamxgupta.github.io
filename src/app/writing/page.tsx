"use client";

import {useState} from "react";
import Section from "@/components/ui/Section";
import {writings} from "@/data/writings";
import {motion, AnimatePresence} from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {Calendar, Clock, Feather, ArrowRight, Sparkles} from "lucide-react";

export default function WritingPage() {
    const [activeTag, setActiveTag] = useState("All");

    // Extract all unique tags
    const allTags = ["All", ...Array.from(new Set(writings.flatMap((w) => w.tags)))];

    const filteredWritings =
        activeTag === "All"
            ? writings
            : writings.filter((w) => w.tags.includes(activeTag));

    const featuredPost = writings.find((w) => w.featured) || writings[0];
    const regularPosts = filteredWritings.filter((w) => activeTag !== "All" || w.id !== featuredPost.id);

    return (
        <div className="pt-28 pb-28 min-h-screen">
            <Section className="mb-14">
                <div className="max-w-5xl mx-auto px-6">
                    {/* Header */}
                    <motion.div
                        initial={{opacity: 0, y: 12}}
                        animate={{opacity: 1, y: 0}}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-100 dark:bg-[#1c1917] border border-stone-200/80 dark:border-stone-800/80 text-stone-600 dark:text-stone-400 text-xs font-mono font-medium uppercase tracking-wider mb-4"
                    >
                        <Feather size={13} className="text-indigo-500" />
                        <span>Engineering Journal</span>
                    </motion.div>
                    <motion.h1
                        initial={{opacity: 0, y: 16}}
                        animate={{opacity: 1, y: 0}}
                        transition={{delay: 0.1}}
                        className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-stone-900 dark:text-[#fafaf9] mb-4"
                    >
                        Essays &amp; Technical Notes
                    </motion.h1>
                    <motion.p
                        initial={{opacity: 0, y: 16}}
                        animate={{opacity: 1, y: 0}}
                        transition={{delay: 0.15}}
                        className="text-base sm:text-lg text-stone-600 dark:text-stone-400 max-w-2xl font-normal leading-relaxed"
                    >
                        In-depth articles on machine learning systems design, low-latency telemetry, AST transformation tooling, and distributed software engineering.
                    </motion.p>
                </div>
            </Section>

            {/* Tag Filter Chips */}
            <Section className="mb-12">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="flex flex-wrap items-center gap-2">
                        {allTags.map((tag) => (
                            <button
                                key={tag}
                                onClick={() => setActiveTag(tag)}
                                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all duration-200 cursor-pointer ${
                                    activeTag === tag
                                        ? "bg-indigo-600 text-white shadow-xs shadow-indigo-600/20"
                                        : "bg-stone-100/80 dark:bg-[#1c1917]/80 text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200 border border-stone-200/70 dark:border-stone-800/70"
                                }`}
                            >
                                {tag}
                            </button>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Featured Article Spotlight (when All is selected) */}
            {activeTag === "All" && featuredPost && (
                <Section className="mb-14">
                    <div className="max-w-5xl mx-auto px-6">
                        <motion.div
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{delay: 0.2}}
                        >
                            <Link
                                href={`/writing/${featuredPost.id}`}
                                className="group relative block rounded-3xl overflow-hidden bg-stone-100/70 dark:bg-[#1c1917]/80 border border-stone-200/80 dark:border-stone-800/80 shadow-md hover:border-indigo-500/40 dark:hover:border-indigo-500/40 transition-all duration-300"
                            >
                                <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
                                    {/* Cover Image */}
                                    <div className="lg:col-span-6 relative aspect-16/10 lg:aspect-auto lg:h-full min-h-[260px] overflow-hidden">
                                        <Image
                                            src={featuredPost.coverImage}
                                            alt={featuredPost.title}
                                            fill
                                            sizes="(max-width: 1024px) 100vw, 500px"
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                            priority
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0a09]/60 via-transparent to-transparent pointer-events-none" />
                                        <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-stone-900/80 backdrop-blur-md text-indigo-400 text-xs font-mono font-semibold border border-white/10 flex items-center gap-1.5">
                                            <Sparkles size={12} />
                                            <span>Featured Article</span>
                                        </div>
                                    </div>

                                    {/* Content Info */}
                                    <div className="lg:col-span-6 p-7 sm:p-9 flex flex-col justify-between">
                                        <div>
                                            <div className="flex items-center gap-4 text-xs font-mono text-stone-500 dark:text-stone-400 mb-3">
                                                <span className="flex items-center gap-1">
                                                    <Calendar size={13} /> {featuredPost.date}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <Clock size={13} /> {featuredPost.readTime}
                                                </span>
                                            </div>

                                            <h2 className="font-display text-2xl sm:text-3xl font-bold text-stone-900 dark:text-[#fafaf9] group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors leading-tight mb-3">
                                                {featuredPost.title}
                                            </h2>

                                            <p className="text-stone-600 dark:text-stone-300 text-sm leading-relaxed mb-6">
                                                {featuredPost.excerpt}
                                            </p>
                                        </div>

                                        <div className="flex items-center justify-between pt-4 border-t border-stone-200/60 dark:border-stone-800/60">
                                            <div className="flex flex-wrap gap-1.5">
                                                {featuredPost.tags.map((tag) => (
                                                    <span
                                                        key={tag}
                                                        className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-stone-200/60 dark:bg-stone-800/80 text-stone-700 dark:text-stone-300"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                            <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                                                <span>Read Article</span>
                                                <ArrowRight size={14} />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    </div>
                </Section>
            )}

            {/* Regular Article Grid */}
            <Section>
                <div className="max-w-5xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <AnimatePresence>
                            {regularPosts.map((post, index) => (
                                <motion.article
                                    key={post.id}
                                    layout
                                    initial={{opacity: 0, y: 20}}
                                    animate={{opacity: 1, y: 0}}
                                    exit={{opacity: 0, scale: 0.95}}
                                    transition={{duration: 0.35, delay: index * 0.05}}
                                    className="group"
                                >
                                    <Link
                                        href={`/writing/${post.id}`}
                                        className="h-full flex flex-col justify-between rounded-3xl overflow-hidden bg-stone-100/60 dark:bg-[#1c1917]/70 border border-stone-200/80 dark:border-stone-800/80 hover:border-indigo-500/40 dark:hover:border-indigo-500/40 transition-all duration-300 hover:shadow-lg"
                                    >
                                        {/* Cover Image Thumbnail */}
                                        <div className="relative aspect-16/9 w-full overflow-hidden bg-stone-200 dark:bg-stone-900">
                                            <Image
                                                src={post.coverImage}
                                                alt={post.title}
                                                fill
                                                sizes="(max-width: 768px) 100vw, 450px"
                                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/50 via-transparent to-transparent pointer-events-none" />
                                            <span className="absolute top-3 left-3 z-10 text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-stone-900/80 backdrop-blur-md text-stone-200 border border-white/10">
                                                {post.tags[0]}
                                            </span>
                                        </div>

                                        {/* Article Details */}
                                        <div className="p-6 flex flex-col flex-1 justify-between">
                                            <div>
                                                <div className="flex items-center gap-3 text-xs font-mono text-stone-500 dark:text-stone-400 mb-2">
                                                    <span className="flex items-center gap-1">
                                                        <Calendar size={12} /> {post.date}
                                                    </span>
                                                    <span>·</span>
                                                    <span className="flex items-center gap-1">
                                                        <Clock size={12} /> {post.readTime}
                                                    </span>
                                                </div>

                                                <h3 className="font-display text-xl font-bold text-stone-900 dark:text-[#fafaf9] group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors leading-snug mb-2">
                                                    {post.title}
                                                </h3>

                                                <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 line-clamp-3 leading-relaxed">
                                                    {post.excerpt}
                                                </p>
                                            </div>

                                            <div className="mt-5 pt-3 border-t border-stone-200/60 dark:border-stone-800/60 flex items-center justify-between text-xs">
                                                <span className="font-mono text-stone-400">
                                                    {post.tags.slice(1).join(" · ") || post.tags[0]}
                                                </span>
                                                <span className="font-semibold text-indigo-600 dark:text-indigo-400 inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                                                    <span>Read</span>
                                                    <ArrowRight size={13} />
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                </motion.article>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            </Section>
        </div>
    );
}
