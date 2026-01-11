"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Github } from "lucide-react";
import Link from "next/link";
import NeuralBackground from "@/components/ui/NeuralBackground";
import { HeroVisual } from "./HeroVisual";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-50 dark:bg-slate-950"
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
        <NeuralBackground />
      </div>

      <div className="container mx-auto px-6 relative z-20 -mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-blue-400 font-medium tracking-wide"
            >
              Hello, I&apos;m
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-4 text-5xl md:text-7xl font-bold text-white leading-tight"
            >
              Shubham Gupta
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
            >
              AI/ML Engineer
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-6 text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed"
            >
              Building intelligent systems and scalable solutions. Passionate
              about Deep Learning, Computer Vision, and Generative AI.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Link
                href="#projects"
                className="flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors shadow-lg shadow-blue-900/20"
              >
                View Projects
                <ArrowRight size={20} />
              </Link>

              <a
                href="/ShubhamGupta_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-medium hover:bg-white/20 transition-colors border border-white/10"
              >
                Resume
                <Download size={20} />
              </a>

              <a
                href="https://github.com/ShubhamxGupta"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-14 h-14 rounded-full border border-white/20 text-slate-300 hover:border-blue-400 hover:text-blue-400 transition-colors backdrop-blur-sm bg-white/5"
              >
                <Github size={24} />
              </a>
            </motion.div>
          </div>

          {/* Right Visual */}
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
