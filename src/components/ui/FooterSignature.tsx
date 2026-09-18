"use client";

export function FooterSignature() {
    return (
        <div className="relative flex justify-center py-12 sm:py-16 overflow-hidden select-none w-full">
            <div
                className="relative inline-block group cursor-pointer"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                role="button"
                tabIndex={0}
                aria-label="Back to top"
                onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                    }
                }}
            >
                {/* Base Outline Layer + Blinking Terminal Cursor */}
                <div className="flex items-center">
                    <span
                        className="signature-outline font-display text-[clamp(2.25rem,7.2vw,6.5rem)] font-bold tracking-tighter text-transparent block whitespace-nowrap"
                    >
                        Shubham Gupta
                    </span>
                    <span
                        className="signature-cursor inline-block w-1.5 sm:w-2 md:w-2.5 h-[0.75em] bg-stone-400/50 dark:bg-stone-600/60 rounded-xs ml-2 sm:ml-3"
                        aria-hidden="true"
                    />
                </div>

                {/* Fill Reveal Layer (Travels from left to right with cursor border + glowing blinking cursor at end) */}
                <div
                    className="absolute top-0 left-0 bottom-0 overflow-hidden w-0 group-hover:w-full transition-[width] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] border-r-2 md:border-r-[3px] border-transparent group-hover:border-indigo-500 flex items-center pointer-events-none"
                    aria-hidden="true"
                >
                    <span
                        className="font-display text-[clamp(2.25rem,7.2vw,6.5rem)] font-bold tracking-tighter text-stone-900 dark:text-[#fafaf9] block whitespace-nowrap"
                    >
                        Shubham Gupta
                    </span>
                    <span
                        className="signature-cursor inline-block w-1.5 sm:w-2 md:w-2.5 h-[0.75em] bg-indigo-500 dark:bg-indigo-400 rounded-xs ml-2 sm:ml-3 shadow-[0_0_12px_rgba(99,102,241,0.8)]"
                    />
                </div>

                {/* Micro Back to Top Prompt */}
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0 pointer-events-none whitespace-nowrap">
                    <span className="text-[10px] font-mono tracking-wider uppercase text-indigo-600 dark:text-indigo-400 font-medium">
                        ↑ Back to top
                    </span>
                </div>
            </div>
        </div>
    );
}
