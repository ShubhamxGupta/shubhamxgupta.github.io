"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export function TubeLight({
  sectionRef,
}: {
  sectionRef: React.RefObject<HTMLDivElement | null>;
}) {
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Bell curve effect: 0 -> 1 -> 0
  // Bell curve effect: 0 -> 1 -> 0
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const scaleX = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1.5, 0]); // Closes completely (0) to wider (1.5)

  return (
    <div className="absolute top-0 left-0 w-full flex justify-center pointer-events-none z-20 overflow-visible">
      <motion.div
        style={{ opacity, scaleX }}
        className="relative w-1/4 h-1 md:h-2" // Slightly narrower base, responsive height
      >
        {/* Core Light - Sharp & Bright */}
        <div className="absolute inset-0 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,1)]" />

        {/* Inner Glow - Intense */}
        <div className="absolute -inset-1 bg-white/50 rounded-full blur-[4px]" />

        {/* Outer Glow - Blue/Purple Tint (reduced blur for sharpness) */}
        <div className="absolute -inset-4 bg-blue-500/40 rounded-full blur-[15px]" />
        <div className="absolute -inset-8 bg-purple-500/30 rounded-full blur-[30px]" />

        {/* Sharp Reflection Line */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[1px] bg-white mix-blend-overlay" />
      </motion.div>
    </div>
  );
}
