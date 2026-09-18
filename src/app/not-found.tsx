"use client";

import {motion} from "framer-motion";
import Link from "next/link";
import {ArrowLeft, Home, Terminal as TerminalIcon} from "lucide-react";

export default function NotFound() {
    return (
        <div className="relative min-h-[85vh] flex items-center justify-center overflow-hidden px-6 py-20">
            {/* Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />

            <div className="relative z-10 max-w-lg w-full text-center flex flex-col items-center">
                {/* Status Pill */}
                <motion.div
                    initial={{opacity: 0, y: -15}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.4}}
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-100 dark:bg-[#1c1917] border border-stone-200/80 dark:border-stone-800/80 mb-6 shadow-xs"
                >
                    <span className="w-2 h-2 rounded-full bg-indigo-500" />
                    <span className="text-xs font-mono font-medium text-indigo-600 dark:text-indigo-400 tracking-wider uppercase">
                        Error 404 &bull; Not Found
                    </span>
                </motion.div>

                {/* 404 Text */}
                <motion.h1
                    initial={{opacity: 0, scale: 0.9}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{duration: 0.5, delay: 0.1}}
                    className="font-display text-8xl sm:text-9xl font-black tracking-tighter text-stone-900 dark:text-[#fafaf9] select-none mb-2"
                >
                    404
                </motion.h1>

                {/* Card */}
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.5, delay: 0.2}}
                    className="p-8 rounded-3xl bg-stone-100/80 dark:bg-[#1c1917]/80 backdrop-blur-xl border border-stone-200/80 dark:border-stone-800/80 shadow-xl w-full text-center"
                >
                    <h2 className="font-display text-xl sm:text-2xl font-bold text-stone-900 dark:text-[#fafaf9] mb-2">
                        Page Not Found
                    </h2>
                    <p className="text-stone-600 dark:text-stone-300 text-sm sm:text-base leading-relaxed mb-6">
                        The requested route does not exist or has been relocated within the portfolio.
                    </p>

                    {/* Navigation Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                        <Link
                            href="/"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm transition-all duration-200 shadow-md shadow-indigo-600/25 active:scale-95"
                        >
                            <Home size={15} />
                            <span>Return Home</span>
                        </Link>

                        <Link
                            href="/#projects"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-stone-100 hover:bg-stone-200 dark:bg-[#292524] dark:hover:bg-[#34302e] text-stone-800 dark:text-stone-200 font-medium text-sm border border-stone-200/80 dark:border-stone-700/80 transition-all duration-200 active:scale-95"
                        >
                            <ArrowLeft size={15} />
                            <span>View Projects</span>
                        </Link>
                    </div>

                    <div className="mt-6 pt-5 border-t border-stone-200/60 dark:border-stone-800/60 flex items-center justify-center gap-2 text-xs text-stone-400 font-mono">
                        <TerminalIcon size={13} className="text-indigo-500" />
                        <span>Press</span>
                        <kbd className="px-1.5 py-0.5 rounded bg-stone-200 dark:bg-stone-800 border border-stone-300/60 dark:border-stone-700/60 text-stone-700 dark:text-stone-300 font-sans">
                            ⌘K
                        </kbd>
                        <span>for Global Menu</span>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
