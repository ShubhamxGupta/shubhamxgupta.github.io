"use client";

import Section from "@/components/ui/Section";
import { writings } from "@/data/writings";
import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, Clock, Feather } from "lucide-react";

export default function WritingPage() {
  return (
    <div className="pt-24 pb-20 bg-white dark:bg-slate-950 min-h-screen">
      <Section className="mb-20">
        <div className="max-w-5xl mx-auto">
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
            className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6"
          >
            Insights{" "}
            <span className="text-slate-300 dark:text-slate-700">&</span>{" "}
            Reflections
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl"
          >
            Articles on system design patterns, React performance, and the
            evolving landscape of AI engineering.
          </motion.p>
        </div>
      </Section>

      <Section>
        <div className="max-w-5xl mx-auto grid gap-6">
          {writings.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="group"
            >
              <Link
                href={`/writing/${post.id}`}
                className="block bg-slate-50 dark:bg-slate-900/50 rounded-2xl p-8 border border- Slate-100 dark:border-slate-800 hover:border-blue-500/30 dark:hover:border-blue-500/30 transition-all hover:bg-white dark:hover:bg-slate-900 hover:shadow-lg"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} /> {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} /> {post.readTime}
                    </span>
                  </div>
                  <span className="inline-flex text-xs font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-2 py-1 rounded uppercase tracking-wide">
                    {post.tags[0]}
                  </span>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h2>

                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-0 max-w-3xl">
                  {post.excerpt}
                </p>
              </Link>
            </motion.article>
          ))}
        </div>
      </Section>
    </div>
  );
}
