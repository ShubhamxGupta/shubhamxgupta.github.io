"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const CODE_LINES = [
  { text: "class", color: "text-purple-400" },
  { text: " Engineer", color: "text-yellow-300" },
  { text: ":\n", color: "text-slate-400" },

  { text: "    def", color: "text-purple-400" },
  { text: " build_future", color: "text-blue-400" },
  { text: "(", color: "text-slate-400" },
  { text: "self", color: "text-red-400" },
  { text: "):\n", color: "text-slate-400" },
  { text: "        return", color: "text-purple-400" },
  { text: ' "Innovation deployed"\n\n', color: "text-green-300" },

  { text: "class", color: "text-purple-400" },
  { text: " ShubhamGupta", color: "text-yellow-300" },
  { text: "(", color: "text-slate-400" },
  { text: "Engineer", color: "text-green-400" },
  { text: "):\n", color: "text-slate-400" },

  { text: "    def", color: "text-purple-400" },
  { text: " __init__", color: "text-blue-400" },
  { text: "(", color: "text-slate-400" },
  { text: "self", color: "text-red-400" },
  { text: "):\n", color: "text-slate-400" },

  { text: "        self.name", color: "text-sky-300" },
  { text: " =", color: "text-slate-400" },
  { text: ' "Shubham"\n', color: "text-green-300" },

  { text: "        self.role", color: "text-sky-300" },
  { text: " =", color: "text-slate-400" },
  { text: ' "AI Engineer"\n', color: "text-green-300" },

  { text: "        self.skills", color: "text-sky-300" },
  { text: " =", color: "text-slate-400" },
  { text: " [", color: "text-slate-400" },
  { text: '"PyTorch"', color: "text-green-300" },
  { text: ", ", color: "text-slate-400" },
  { text: '"Next.js"', color: "text-green-300" },
  { text: "]\n\n", color: "text-slate-400" },

  { text: "    def", color: "text-purple-400" },
  { text: " build_future", color: "text-blue-400" },
  { text: "(", color: "text-slate-400" },
  { text: "self", color: "text-red-400" },
  { text: "):\n", color: "text-slate-400" },
  { text: "        return", color: "text-purple-400" },
  { text: " super().build_future()", color: "text-slate-300" },
];

export function HeroVisual() {
  const [displayedText, setDisplayedText] = useState<typeof CODE_LINES>([]);

  // Simple typing effect simulation
  // In a real implementation, we might want char-by-char, but chunk-by-chunk is smoother for layout

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="hidden lg:block relative w-full h-[400px] perspective-1000"
    >
      {/* Floating Window Container */}
      <motion.div
        animate={{
          y: [-10, 10, -10],
          rotateX: [0, 5, 0],
          rotateY: [0, -5, 0],
        }}
        transition={{
          y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          rotateX: { duration: 5, repeat: Infinity, ease: "easeInOut" },
          rotateY: { duration: 6, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[320px] bg-slate-900/90 backdrop-blur-xl rounded-xl border border-slate-700/50 shadow-2xl overflow-hidden"
      >
        {/* Window Header */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-700/50 bg-slate-900/50">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
          <div className="ml-4 text-xs text-slate-500 font-mono">
            engineer.py
          </div>
        </div>

        {/* Code Content */}
        <div className="p-6 font-mono text-sm md:text-base leading-relaxed whitespace-pre overflow-x-auto overflow-y-auto max-h-[240px]">
          {CODE_LINES.map((chunk, i) => (
            <span key={i} className={chunk.color}>
              {chunk.text}
            </span>
          ))}
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="w-2 h-4 bg-blue-500 inline-block align-middle ml-1"
          />
        </div>

        {/* Shine Effect */}
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-white/5 to-transparent pointer-events-none" />
      </motion.div>

      {/* Background Glow */}
      <div className="absolute top-1/2 right-20 -translate-y-1/2 w-[400px] h-[400px] bg-blue-500/20 blur-[100px] rounded-full -z-10" />
    </motion.div>
  );
}
