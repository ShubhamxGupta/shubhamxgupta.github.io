"use client";

import {useState, useSyncExternalStore} from "react";
import {motion, AnimatePresence} from "framer-motion";
import {Menu, X, Sun, Moon, Terminal as TerminalIcon} from "lucide-react";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {DOCK_ITEMS} from "./Dock";
import {useTheme} from "next-themes";
import {SiGithub, SiX} from "@icons-pack/react-simple-icons";
import {Linkedin} from "@/components/ui/LinkedinIcon";
import {Mail} from "lucide-react";

export const SOCIALS = [
    {name: "GitHub", href: "https://github.com/ShubhamxGupta", icon: SiGithub},
    {name: "LinkedIn", href: "https://linkedin.com/in/shubhamxgupta", icon: Linkedin},
    {name: "X (Twitter)", href: "https://x.com/ShubhamxGupta1", icon: SiX},
    {name: "Email", href: "mailto:shubhamxgupta1@gmail.com", icon: Mail},
];

const emptySubscribe = () => () => {};

export function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const {resolvedTheme, setTheme} = useTheme();
    const mounted = useSyncExternalStore(
        emptySubscribe,
        () => true,
        () => false
    );

    const toggleMenu = () => setIsOpen(!isOpen);

    const handleOpenTerminal = () => {
        setIsOpen(false);
        if (typeof window !== "undefined") {
            window.dispatchEvent(new CustomEvent("toggle-terminal"));
        }
    };

    return (
        <>
            {/* Header / Toggle Button */}
            <div className="fixed top-5 right-5 z-50 flex items-center gap-2 md:hidden">
                {mounted && (
                    <button
                        onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
                        aria-label="Toggle theme"
                        className="p-2.5 rounded-full bg-white/80 dark:bg-[#1c1917]/80 backdrop-blur-md border border-stone-200/80 dark:border-stone-800/80 text-stone-700 dark:text-stone-300 shadow-sm"
                    >
                        {resolvedTheme === "dark" ? (
                            <Sun size={18} className="text-amber-400" />
                        ) : (
                            <Moon size={18} className="text-indigo-600" />
                        )}
                    </button>
                )}
                <motion.button
                    className="p-2.5 rounded-full bg-white/80 dark:bg-[#1c1917]/80 backdrop-blur-md border border-stone-200/80 dark:border-stone-800/80 text-stone-800 dark:text-stone-100 shadow-sm"
                    onClick={toggleMenu}
                    whileTap={{scale: 0.92}}
                    aria-label="Toggle Navigation Menu"
                >
                    {isOpen ? <X size={20} /> : <Menu size={20} />}
                </motion.button>
            </div>

            {/* Full Screen Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{opacity: 0, y: "-100%"}}
                        animate={{opacity: 1, y: 0}}
                        exit={{opacity: 0, y: "-100%"}}
                        transition={{type: "spring", stiffness: 320, damping: 32}}
                        className="fixed inset-0 z-40 bg-[#fafaf9]/98 dark:bg-[#0c0a09]/98 backdrop-blur-2xl flex flex-col pt-20 px-6 pb-8 md:hidden overflow-y-auto"
                    >
                        {/* Navigation Links */}
                        <nav className="flex flex-col gap-1.5 my-auto">
                            {DOCK_ITEMS.map((item, i) => {
                                const isActive =
                                    pathname === item.href ||
                                    (item.href.startsWith("/#") && pathname === "/");

                                return (
                                    <motion.div
                                        key={item.name}
                                        initial={{opacity: 0, x: -16}}
                                        animate={{opacity: 1, x: 0}}
                                        transition={{delay: 0.05 + i * 0.04}}
                                    >
                                        <Link
                                            href={item.href}
                                            className={`flex items-center gap-3.5 px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                                                isActive
                                                    ? "bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 font-semibold"
                                                    : "text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800/60"
                                            }`}
                                            onClick={() => setIsOpen(false)}
                                        >
                                            <item.icon size={20} className={isActive ? "text-indigo-600 dark:text-indigo-400" : "text-stone-400"} />
                                            <span>{item.name}</span>
                                        </Link>
                                    </motion.div>
                                );
                            })}

                            <motion.button
                                initial={{opacity: 0, x: -16}}
                                animate={{opacity: 1, x: 0}}
                                transition={{delay: 0.4}}
                                onClick={handleOpenTerminal}
                                className="flex items-center gap-3.5 px-4 py-3 rounded-xl text-base font-medium text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/30 transition-colors text-left"
                            >
                                <TerminalIcon size={20} />
                                <span>Interactive Terminal</span>
                            </motion.button>
                        </nav>

                        {/* Social Icons & Copyright */}
                        <div className="mt-8 pt-6 border-t border-stone-200/60 dark:border-stone-800/60">
                            <div className="flex justify-center gap-3">
                                {SOCIALS.map((social) => (
                                    <a
                                        key={social.name}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={social.name}
                                        className="p-3 rounded-xl bg-stone-100 dark:bg-[#1c1917] text-stone-600 dark:text-stone-300 hover:text-indigo-600 dark:hover:text-indigo-400 border border-stone-200/80 dark:border-stone-800/80 transition-colors"
                                    >
                                        <social.icon size={18} />
                                    </a>
                                ))}
                            </div>
                            <p className="text-center text-xs text-stone-400 dark:text-stone-500 mt-4">
                                © {new Date().getFullYear()} Shubham Gupta
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
