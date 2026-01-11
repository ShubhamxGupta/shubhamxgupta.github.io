"use client";

import Section from "@/components/ui/Section";
import { caseStudies } from "@/data/caseStudies";
import { motion } from "framer-motion";
import { ArrowRight, Box, Cpu, FileText } from "lucide-react";
import Link from "next/link";

export default function CaseStudiesPage() {
  return (
    <div className="pt-24 pb-20 bg-slate-50 dark:bg-slate-950 min-h-screen">
      <Section className="mb-16">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold tracking-wider uppercase mb-6"
          >
            <Cpu size={14} /> Engineering Specs
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight"
          >
            System <span className="text-slate-400 dark:text-slate-600">/</span>{" "}
            Architecture
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed"
          >
            Deep technical deep-dives into my most complex work. Focusing on
            specific engineering challenges and high-impact solutions.
          </motion.p>
        </div>
      </Section>

      <Section>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="group flex flex-col bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all shadow-sm hover:shadow-xl hover:-translate-y-1 overflow-hidden"
            >
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    <Box size={14} />
                    <span>{study.timeline}</span>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {study.title}
                </h2>

                <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed flex-1">
                  {study.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {study.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-medium rounded-md border border-slate-200 dark:border-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                  {study.tags.length > 3 && (
                    <span className="px-2 py-1 text-slate-400 text-xs font-medium">
                      +{study.tags.length - 3}
                    </span>
                  )}
                </div>

                <div className="mt-auto pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                    {study.role}
                  </span>
                  <Link
                    href={`/case-studies/${study.id}`}
                    className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
                  >
                    Technical Spec <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
}
