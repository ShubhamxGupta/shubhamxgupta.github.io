"use client";

import Section from "@/components/ui/Section";
import CodeBlock from "@/components/ui/CodeBlock";
import { writings } from "@/data/writings";
import { ArrowLeft, Calendar, Clock, Feather } from "lucide-react";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { motion } from "framer-motion";

export default function BlogPost() {
  const params = useParams();
  const post = writings.find((p) => p.id === params.id);

  if (!post) {
    notFound();
  }

  return (
    <article className="pt-24 pb-20 bg-white dark:bg-slate-950 min-h-screen">
      <Section>
        <div className="max-w-3xl mx-auto">
          <Link
            href="/writing"
            className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 mb-12 transition-colors text-sm font-bold uppercase tracking-wide group"
          >
            <ArrowLeft
              size={16}
              className="group-hover:-translate-x-1 transition-transform"
            />{" "}
            Back to Blog
          </Link>

          <header className="mb-12">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-bold tracking-wider uppercase mb-6"
            >
              <Feather size={14} /> Engineering Blog
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-8 leading-tight"
            >
              {post.title}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap items-center gap-6 text-sm text-slate-500 dark:text-slate-400 font-medium border-b border-slate-100 dark:border-slate-800 pb-8"
            >
              <span className="flex items-center gap-2">
                <Calendar size={16} className="text-slate-400" /> {post.date}
              </span>
              <span className="flex items-center gap-2">
                <Clock size={16} className="text-slate-400" /> {post.readTime}
              </span>
              <span className="px-2 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase rounded tracking-wide">
                {post.tags[0]}
              </span>
            </motion.div>
          </header>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="prose prose-lg dark:prose-invert max-w-none prose-slate prose-headings:font-bold prose-headings:text-slate-900 dark:prose-headings:text-white prose-p:leading-relaxed prose-p:text-slate-600 dark:prose-p:text-slate-300 prose-a:text-blue-600 dark:prose-a:text-blue-400 hover:prose-a:text-blue-500 prose-img:rounded-2xl"
          >
            <ReactMarkdown
              components={{
                code(props) {
                  const { children, className, node, ...rest } = props;
                  const match = /language-(\w+)/.exec(className || "");
                  return match ? (
                    <CodeBlock className={className} {...rest}>
                      {children}
                    </CodeBlock>
                  ) : (
                    <code
                      className="bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-sm font-mono text-pink-500 dark:text-pink-400"
                      {...rest}
                    >
                      {children}
                    </code>
                  );
                },
                h1: ({ children }) => (
                  <h1 className="text-3xl font-bold text-slate-900 dark:text-white mt-12 mb-6">
                    {children}
                  </h1>
                ),
                h2: ({ children }) => (
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-12 mb-6 flex items-center gap-3">
                    <span className="w-2 h-8 rounded-full bg-blue-500 shrink-0"></span>
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-4 border-b border-slate-200 dark:border-slate-800 pb-2">
                    {children}
                  </h3>
                ),
                ul: ({ children }) => (
                  <ul className="list-disc list-outside space-y-2 mb-8 ml-4 marker:text-blue-500">
                    {children}
                  </ul>
                ),
                ol: ({ children }) => (
                  <ol className="list-decimal list-outside space-y-2 mb-8 ml-4 marker:text-blue-500 marker:font-bold">
                    {children}
                  </ol>
                ),
                li: ({ children }) => (
                  <li className="pl-2 text-slate-700 dark:text-slate-300 leading-relaxed">
                    {children}
                  </li>
                ),
                strong: ({ children }) => (
                  <strong className="font-bold text-slate-900 dark:text-white">
                    {children}
                  </strong>
                ),
              }}
            >
              {post.content}
            </ReactMarkdown>
          </motion.div>

          {/* Footer / Signature */}
          <div className="mt-20 pt-12 border-t border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                {/* Placeholder for avatar if needed, or use Initials */}
                <div className="w-full h-full flex items-center justify-center font-bold text-slate-500">
                  SG
                </div>
              </div>
              <div>
                <p className="text-slate-900 dark:text-white font-bold">
                  Shubham Gupta
                </p>
                <p className="text-slate-500 dark:text-slate-400 text-sm">
                  Engineering robust systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </article>
  );
}
