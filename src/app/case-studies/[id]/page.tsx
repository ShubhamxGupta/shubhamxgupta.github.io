"use client";

import Section from "@/components/ui/Section";
import { caseStudies } from "@/data/caseStudies";
import CodeBlock from "@/components/ui/CodeBlock";
import {
  ArrowLeft,
  CheckCircle,
  AlertTriangle,
  Cpu,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";

export default function CaseStudyDetail() {
  const params = useParams();
  const study = caseStudies.find((s) => s.id === params.id);

  if (!study) {
    notFound();
  }

  return (
    <article className="pt-24 pb-20 bg-slate-50 dark:bg-slate-950 min-h-screen">
      {/* Header */}
      <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 pb-16 mb-16">
        <Section>
          <div className="max-w-4xl mx-auto">
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 mb-8 transition-colors text-sm font-bold uppercase tracking-wide"
            >
              <ArrowLeft size={16} /> Back to Specs
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold tracking-wider uppercase mb-6"
            >
              <Cpu size={14} /> Technical Spec
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-8 leading-tight tracking-tight"
            >
              {study.title}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800"
            >
              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-wider text-slate-400 mb-1">
                  Role
                </span>
                <span className="font-bold text-slate-900 dark:text-white text-sm">
                  {study.role}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-wider text-slate-400 mb-1">
                  Timeline
                </span>
                <span className="font-bold text-slate-900 dark:text-white text-sm">
                  {study.timeline}
                </span>
              </div>
              <div className="flex flex-col md:col-span-2">
                <span className="text-xs uppercase tracking-wider text-slate-400 mb-1">
                  Tech Stack
                </span>
                <div className="flex flex-wrap gap-2">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-700 px-2 py-0.5 rounded border border-slate-200 dark:border-slate-600"
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
        <div className="max-w-4xl mx-auto space-y-20">
          {/* Problem & Constraints */}
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                <AlertTriangle className="text-amber-500" size={24} /> The
                Challenge
              </h2>
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                {study.problem}
              </p>
            </div>
            <div className="bg-amber-50 dark:bg-amber-900/10 p-6 rounded-2xl border border-amber-100 dark:border-amber-900/30 h-fit">
              <h3 className="text-sm font-bold uppercase tracking-wider text-amber-700 dark:text-amber-500 mb-4">
                Key Constraints
              </h3>
              <ul className="space-y-3">
                {study.constraints.map((constraint, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-sm text-slate-700 dark:text-slate-300 font-medium"
                  >
                    <span className="text-amber-500 font-bold">•</span>
                    {constraint}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <hr className="border-slate-200 dark:border-slate-800" />

          {/* Solution (Markdown Support) */}
          <div className="max-w-none">
            <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-headings:text-slate-900 dark:prose-headings:text-white prose-p:text-slate-700 dark:prose-p:text-slate-300 prose-li:text-slate-700 dark:prose-li:text-slate-300 prose-code:bg-transparent prose-code:p-0">
              <ReactMarkdown
                components={{
                  code(props) {
                    const { children, className, ...rest } = props;
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
                }}
              >
                {study.solution}
              </ReactMarkdown>
            </div>
          </div>

          <hr className="border-slate-200 dark:border-slate-800" />

          {/* Tradeoffs */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
              Engineering Tradeoffs
            </h2>
            <div className="grid gap-6">
              {study.tradeoffs.map((tradeoff, i) => (
                <div
                  key={i}
                  className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm"
                >
                  <div className="bg-slate-50 dark:bg-slate-800/50 px-6 py-4 border-b border-slate-100 dark:border-slate-800 font-bold text-slate-900 dark:text-white">
                    {tradeoff.decision}
                  </div>
                  <div className="grid md:grid-cols-2">
                    <div className="p-6 border-b md:border-b-0 md:border-r border-slate-100 dark:border-slate-800 bg-emerald-50/10 dark:bg-emerald-900/5">
                      <span className="flex items-center gap-2 text-xs font-bold uppercase text-emerald-600 dark:text-emerald-400 mb-2">
                        <CheckCircle size={14} /> Pros
                      </span>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        {tradeoff.pros}
                      </p>
                    </div>
                    <div className="p-6 bg-red-50/10 dark:bg-red-900/5">
                      <span className="flex items-center gap-2 text-xs font-bold uppercase text-red-600 dark:text-red-400 mb-2">
                        <AlertTriangle size={14} /> Cons
                      </span>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        {tradeoff.cons}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Outcome */}
          <div className="bg-slate-900 dark:bg-blue-950 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 p-32 bg-blue-500 rounded-full blur-3xl opacity-20 pointer-events-none -mr-16 -mt-16"></div>

            <h2 className="relative text-2xl font-bold mb-8 flex items-center gap-3">
              <TrendingUp className="text-blue-400" /> Impact & Outcome
            </h2>

            <div className="relative grid sm:grid-cols-3 gap-6">
              {study.outcome.map((item, i) => (
                <div
                  key={i}
                  className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10"
                >
                  <p className="font-medium text-blue-100 leading-relaxed">
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
