"use client";

import {motion, useScroll, useTransform} from "framer-motion";
import React from "react";

export function TubeLight({
                              sectionRef,
                          }: Readonly<{
    sectionRef: React.RefObject<HTMLElement | null>;
}>) {
    const {scrollYProgress} = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const opacity = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [0, 0.9, 1, 0.9, 0]);
    const scaleX = useTransform(scrollYProgress, [0, 0.5, 1], [0.05, 2.2, 0.05]);

    return (
        <div className="absolute top-0 left-0 w-full flex justify-center pointer-events-none z-20 overflow-visible">
            <motion.div
                style={{opacity, scaleX}}
                className="relative w-1/4 md:w-1/5 h-1.5"
            >
                {/* Core Lamp */}
                <div className="absolute inset-0 bg-white dark:bg-indigo-100 rounded-full shadow-[0_0_12px_rgba(255,255,255,1),0_0_24px_rgba(129,140,248,0.8)]" />

                {/* Inner Glow Layer */}
                <div className="absolute -inset-0.5 bg-indigo-200/80 rounded-full blur-[2px]" />

                {/* Outer Radiant Glow */}
                <div className="absolute -inset-x-8 -top-3 -bottom-3 bg-indigo-500/40 dark:bg-indigo-400/40 rounded-full blur-lg" />
                <div className="absolute -inset-x-16 -top-6 -bottom-6 bg-purple-500/25 dark:bg-indigo-600/25 rounded-full blur-[32px]" />
            </motion.div>
        </div>
    );
}
