"use client";

import Section from "@/components/ui/Section";
import { motion } from "framer-motion";
import { Hammer, BookOpen, Target, Clock, Zap, MapPin } from "lucide-react";

export default function NowPage() {
  return (
    <div className="pt-24 pb-20 bg-slate-50 dark:bg-slate-950 min-h-screen">
      <Section className="mb-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-8 mb-8">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-2"
              >
                /now
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-slate-500 dark:text-slate-400"
              >
                A living snapshot of my current engineering focus.
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-right hidden sm:block"
            >
              <div className="flex items-center gap-2 text-sm font-bold text-slate-700 dark:text-slate-100 justify-end">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span>Online</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-400 mt-1 justify-end">
                <MapPin size={12} /> Jaipur, India
              </div>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Main Focus Card - Spans 2 cols */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="md:col-span-2 bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm"
            >
              <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-slate-400 mb-6">
                <Zap size={16} className="text-yellow-500" /> Current Obsession
              </h3>
              <p className="text-2xl md:text-3xl text-slate-800 dark:text-slate-100 leading-relaxed font-light">
                I am currently deep-diving into{" "}
                <strong className="font-bold text-blue-600 dark:text-blue-400">
                  Generative AI Engineering
                </strong>
                , specifically building robust systems at the intersection of
                traditional distributed systems and probabilistic ML models.
              </p>
            </motion.div>

            {/* Building Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-blue-600 text-white p-8 rounded-3xl shadow-lg relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-32 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />
              <h3 className="relative flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-blue-200 mb-6">
                <Hammer size={16} /> Building
              </h3>
              <ul className="relative space-y-4">
                <li className="flex items-start gap-3">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white shrink-0" />
                  <span className="font-medium">
                    Modernizing legacy Android infrastructure at Samsung PRISM.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white shrink-0" />
                  <span className="font-medium">
                    Experimenting with Agentic RAG workflows.
                  </span>
                </li>
              </ul>
            </motion.div>

            {/* Learning Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm"
            >
              <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-slate-400 mb-6">
                <BookOpen size={16} className="text-emerald-500" /> Learning
                Stack
              </h3>
              <ul className="space-y-4">
                <li className="group flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                  <span className="text-slate-700 dark:text-slate-300 font-medium">
                    Rust
                  </span>
                  <span className="text-xs text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">
                    Performance
                  </span>
                </li>
                <li className="group flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                  <span className="text-slate-700 dark:text-slate-300 font-medium">
                    System Design
                  </span>
                  <span className="text-xs text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">
                    DDIA
                  </span>
                </li>
                <li className="group flex items-center justify-between">
                  <span className="text-slate-700 dark:text-slate-300 font-medium">
                    Graph RAG
                  </span>
                  <span className="text-xs text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">
                    Research
                  </span>
                </li>
              </ul>
            </motion.div>

            {/* Goals Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="md:col-span-2 bg-slate-100 dark:bg-slate-900/50 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm border-dashed"
            >
              <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-slate-400 mb-6">
                <Target size={16} className="text-purple-500" /> Q1 2026 Targets
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
                  <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 text-xs font-bold">
                    1
                  </div>
                  <span className="text-slate-700 dark:text-slate-300 font-medium">
                    Contribute to open-source LLM tooling
                  </span>
                </div>
                <div className="flex items-center gap-3 bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
                  <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 text-xs font-bold">
                    2
                  </div>
                  <span className="text-slate-700 dark:text-slate-300 font-medium">
                    Publish 3 System Design/ML Case Studies
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 text-center"
          >
            <p className="text-xs font-mono text-slate-400">
              Last updated: Jan 11, 2026
            </p>
          </motion.div>
        </div>
      </Section>
    </div>
  );
}
