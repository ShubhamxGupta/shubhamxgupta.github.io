"use client";

import Section from "@/components/ui/Section";
import CodeBlock from "@/components/ui/CodeBlock";
import type {Post} from "@/data/writings";
import {ArrowLeft, Calendar, Clock, Feather, ExternalLink, Bookmark, Share2, Check} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import {motion, useScroll, useSpring} from "framer-motion";
import {useState} from "react";

export default function WritingDetailClient({post}: { post: Post }) {
    const {scrollYProgress} = useScroll();
    const scaleX = useSpring(scrollYProgress, {stiffness: 300, damping: 30});
    const [copied, setCopied] = useState(false);

    const handleShare = () => {
        if (typeof window !== "undefined") {
            navigator.clipboard.writeText(window.location.href);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    return (
        <article className="pt-24 pb-28 min-h-screen relative">
            {/* Top Reading Progress Line */}
            <motion.div
                style={{scaleX}}
                className="fixed top-0 left-0 right-0 h-1 bg-indigo-500 origin-left z-50"
            />

            <Section>
                <div className="max-w-3xl mx-auto px-6">
                    {/* Back Link */}
                    <Link
                        href="/writing"
                        className="inline-flex items-center gap-2 text-stone-500 hover:text-indigo-600 dark:hover:text-indigo-400 mb-10 transition-colors text-xs font-mono font-semibold uppercase tracking-wider group"
                    >
                        <ArrowLeft
                            size={14}
                            className="group-hover:-translate-x-1 transition-transform"
                        />
                        <span>Back to all writings</span>
                    </Link>

                    {/* Article Header */}
                    <header className="mb-10">
                        <div className="flex flex-wrap items-center gap-2 mb-4">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-100 dark:bg-[#1c1917] border border-stone-200/80 dark:border-stone-800/80 text-indigo-600 dark:text-indigo-400 text-xs font-mono font-medium">
                                <Feather size={12} />
                                {post.tags[0]}
                            </span>
                            {post.tags.slice(1).map((t) => (
                                <span
                                    key={t}
                                    className="px-2.5 py-1 rounded-full text-xs font-mono text-stone-500 bg-stone-100 dark:bg-[#1c1917] border border-stone-200/60 dark:border-stone-800/60"
                                >
                                    {t}
                                </span>
                            ))}
                        </div>

                        <motion.h1
                            initial={{opacity: 0, y: 12}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.4}}
                            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-stone-900 dark:text-[#fafaf9] mb-6 leading-tight"
                        >
                            {post.title}
                        </motion.h1>

                        <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-stone-200/80 dark:border-stone-800/80 text-xs font-mono text-stone-500 dark:text-stone-400">
                            <div className="flex items-center gap-4">
                                <span className="flex items-center gap-1.5">
                                    <Calendar size={14} /> {post.date}
                                </span>
                                <span>·</span>
                                <span className="flex items-center gap-1.5">
                                    <Clock size={14} /> {post.readTime}
                                </span>
                            </div>

                            <button
                                onClick={handleShare}
                                className="inline-flex items-center gap-1.5 hover:text-stone-900 dark:hover:text-stone-200 transition-colors cursor-pointer"
                            >
                                {copied ? (
                                    <>
                                        <Check size={14} className="text-emerald-500" />
                                        <span className="text-emerald-500">Link Copied!</span>
                                    </>
                                ) : (
                                    <>
                                        <Share2 size={14} />
                                        <span>Share article</span>
                                    </>
                                )}
                            </button>
                        </div>
                    </header>

                    {/* Featured Cover Image */}
                    {post.coverImage && (
                        <div className="relative aspect-16/9 rounded-3xl overflow-hidden mb-12 shadow-xl border border-stone-200/80 dark:border-stone-800/80">
                            <Image
                                src={post.coverImage}
                                alt={post.title}
                                fill
                                sizes="(max-width: 768px) 100vw, 768px"
                                className="object-cover"
                                priority
                            />
                        </div>
                    )}

                    {/* Markdown Body */}
                    <div className="space-y-6 text-stone-700 dark:text-stone-300 leading-relaxed text-base sm:text-lg">
                        <ReactMarkdown
                            components={{
                                code(props) {
                                    const {children, className, ...rest} = props;
                                    const match = /language-(\w+)/.exec(className || "");
                                    return match ? (
                                        <CodeBlock className={className} {...rest}>
                                            {children}
                                        </CodeBlock>
                                    ) : (
                                        <code
                                            className="bg-stone-100 dark:bg-stone-800 text-indigo-600 dark:text-indigo-400 px-1.5 py-0.5 rounded text-sm font-mono"
                                            {...rest}
                                        >
                                            {children}
                                        </code>
                                    );
                                },
                                h1: ({children}) => (
                                    <h1 className="font-display text-2xl sm:text-3xl font-bold text-stone-900 dark:text-[#fafaf9] mt-10 mb-4 tracking-tight">
                                        {children}
                                    </h1>
                                ),
                                h2: ({children}) => (
                                    <h2 className="font-display text-xl sm:text-2xl font-bold text-stone-900 dark:text-[#fafaf9] mt-10 mb-4 tracking-tight flex items-center gap-2.5">
                                        <span className="w-1.5 h-6 rounded-full bg-indigo-500 shrink-0" />
                                        <span>{children}</span>
                                    </h2>
                                ),
                                h3: ({children}) => (
                                    <h3 className="font-display text-lg sm:text-xl font-bold text-stone-900 dark:text-[#fafaf9] mt-8 mb-3 tracking-tight">
                                        {children}
                                    </h3>
                                ),
                                p: ({children}) => (
                                    <p className="my-4 text-stone-700 dark:text-stone-300 leading-relaxed">
                                        {children}
                                    </p>
                                ),
                                ul: ({children}) => (
                                    <ul className="list-disc list-outside pl-6 my-4 space-y-2 text-stone-700 dark:text-stone-300">
                                        {children}
                                    </ul>
                                ),
                                ol: ({children}) => (
                                    <ol className="list-decimal list-outside pl-6 my-4 space-y-2 text-stone-700 dark:text-stone-300">
                                        {children}
                                    </ol>
                                ),
                                hr: () => (
                                    <hr className="my-10 border-stone-200/80 dark:border-stone-800/80" />
                                ),
                                blockquote: ({children}) => (
                                    <blockquote className="border-l-2 border-indigo-500 pl-4 my-6 italic text-stone-600 dark:text-stone-400">
                                        {children}
                                    </blockquote>
                                ),
                            }}
                        >
                            {post.content}
                        </ReactMarkdown>
                    </div>

                    {/* Curated References & Further Reading */}
                    {post.references && post.references.length > 0 && (
                        <div className="mt-14 pt-8 border-t border-stone-200/80 dark:border-stone-800/80">
                            <h3 className="text-sm font-mono font-semibold uppercase tracking-wider text-stone-400 dark:text-stone-500 mb-4 flex items-center gap-2">
                                <Bookmark size={14} className="text-indigo-400" />
                                <span>References &amp; External Reading</span>
                            </h3>
                            <div className="space-y-2.5">
                                {post.references.map((ref) => (
                                    <a
                                        key={ref.url}
                                        href={ref.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-between p-3.5 rounded-xl bg-stone-100/70 dark:bg-[#1c1917]/70 border border-stone-200/80 dark:border-stone-800/80 text-xs sm:text-sm font-medium text-stone-700 dark:text-stone-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-400/40 transition-colors group"
                                    >
                                        <span>{ref.title}</span>
                                        <ExternalLink size={14} className="text-stone-400 group-hover:translate-x-0.5 transition-transform" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Author Footnote */}
                    <div className="mt-14 p-6 rounded-3xl bg-stone-100/70 dark:bg-[#1c1917]/70 border border-stone-200/80 dark:border-stone-800/80 flex items-center gap-4">
                        <div className="relative w-14 h-14 rounded-2xl overflow-hidden shrink-0 border border-stone-200 dark:border-stone-700">
                            <Image
                                src="/images/profile/photo1.jpg"
                                alt="Shubham Gupta"
                                fill
                                sizes="56px"
                                className="object-cover"
                            />
                        </div>
                        <div>
                            <div className="font-display font-bold text-stone-900 dark:text-[#fafaf9]">
                                Written by Shubham Gupta
                            </div>
                            <p className="text-xs text-stone-500 dark:text-stone-400 mt-0.5 leading-relaxed">
                                Software Engineer building intelligent systems at the intersection of Machine Learning and distributed scale.
                            </p>
                        </div>
                    </div>
                </div>
            </Section>
        </article>
    );
}
