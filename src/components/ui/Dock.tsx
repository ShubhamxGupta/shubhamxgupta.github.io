"use client";

import {useState, useSyncExternalStore} from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {motion, AnimatePresence} from "framer-motion";
import {useTheme} from "next-themes";
import {
    Home,
    FileText,
    Briefcase,
    MapPin,
    Code2,
    Terminal as TerminalIcon,
    Mail,
    User,
    Search,
    Sun,
    Moon,
    Laptop,
} from "lucide-react";

// --- Dock Config ---
export const DOCK_ITEMS = [
    {name: "Home", href: "/", icon: Home},
    {name: "About", href: "/#about", icon: User},
    {name: "Skills", href: "/#skills", icon: TerminalIcon},
    {name: "Projects", href: "/#projects", icon: Code2},
    {name: "Case Studies", href: "/case-studies", icon: Briefcase},
    {name: "Writing", href: "/writing", icon: FileText},
    {name: "Now", href: "/now", icon: MapPin},
    {name: "Contact", href: "/#contact", icon: Mail},
];

export function Dock() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div
            className="fixed bottom-7 left-1/2 -translate-x-1/2 z-50 flex items-end gap-1.5 px-3 py-2.5 rounded-2xl bg-white/70 dark:bg-[#1c1917]/75 backdrop-blur-2xl border border-stone-200/70 dark:border-stone-800/80 shadow-2xl shadow-black/10 dark:shadow-black/40"
        >
            {DOCK_ITEMS.map((item, index) => (
                <DockIcon
                    key={item.name}
                    item={item}
                    index={index}
                    hoveredIndex={hoveredIndex}
                    setHoveredIndex={setHoveredIndex}
                />
            ))}

            {/* Divider */}
            <div className="h-7 w-px bg-stone-300/60 dark:bg-stone-800/80 mx-1 self-center" />

            {/* Terminal Trigger */}
            <TerminalTrigger />

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Search / Cmd+K Trigger */}
            <SearchTrigger />
        </div>
    );
}

function DockIcon({
                      item,
                      index,
                      hoveredIndex,
                      setHoveredIndex,
                  }: Readonly<{
    item: (typeof DOCK_ITEMS)[0];
    index: number;
    hoveredIndex: number | null;
    setHoveredIndex: (idx: number | null) => void;
}>) {
    const pathname = usePathname();
    const isActive =
        pathname === item.href || (item.href.startsWith("/#") && pathname === "/");
    const isHovered = hoveredIndex === index;

    return (
        <Link href={item.href} aria-label={item.name}>
            <motion.div
                className="relative flex flex-col items-center justify-end cursor-pointer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                layout
                animate={{
                    width: isHovered ? 64 : 44,
                    marginBottom: isHovered ? 8 : 0,
                }}
                transition={{type: "spring", stiffness: 400, damping: 25}}
            >
                {/* Icon Container */}
                <motion.div
                    animate={{scale: isHovered ? 1.35 : 1}}
                    className="w-10 h-10 rounded-xl bg-stone-100/90 dark:bg-[#292524]/90 flex items-center justify-center border border-stone-200/50 dark:border-stone-700/50 shadow-xs relative z-10 transition-colors"
                >
                    <item.icon className="w-5 h-5 text-stone-600 dark:text-stone-300" />
                </motion.div>

                {/* Target Box Cursor Replacement */}
                <AnimatePresence>
                    {isHovered && (
                        <motion.div
                            initial={{opacity: 0, scale: 0.8}}
                            animate={{opacity: 1, scale: 1.45}}
                            exit={{opacity: 0, scale: 0.8}}
                            className="absolute top-0 w-10 h-10 pointer-events-none z-20"
                        >
                            <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 border-indigo-500 dark:border-indigo-400 rounded-tl-sm" />
                            <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t-2 border-r-2 border-indigo-500 dark:border-indigo-400 rounded-tr-sm" />
                            <div className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b-2 border-l-2 border-indigo-500 dark:border-indigo-400 rounded-bl-sm" />
                            <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b-2 border-r-2 border-indigo-500 dark:border-indigo-400 rounded-br-sm" />
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Tooltip */}
                <AnimatePresence>
                    {isHovered && (
                        <motion.span
                            initial={{opacity: 0, y: 10}}
                            animate={{opacity: 1, y: -52}}
                            exit={{opacity: 0, y: 10}}
                            className="absolute left-1/2 -translate-x-1/2 bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 text-[11px] font-medium px-2 py-1 rounded-md shadow-lg whitespace-nowrap pointer-events-none"
                        >
                            {item.name}
                        </motion.span>
                    )}
                </AnimatePresence>

                {/* Active Dot */}
                {isActive && !isHovered && (
                    <span className="absolute -bottom-1.5 w-1 h-1 bg-indigo-500 dark:bg-indigo-400 rounded-full" />
                )}
            </motion.div>
        </Link>
    );
}

function TerminalTrigger() {
    const [isHovered, setIsHovered] = useState(false);

    const handleOpenTerminal = () => {
        if (typeof window !== "undefined") {
            window.dispatchEvent(new CustomEvent("toggle-terminal"));
        }
    };

    return (
        <motion.div
            className="relative flex flex-col items-center cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            layout
            animate={{
                width: isHovered ? 64 : 44,
                marginBottom: isHovered ? 8 : 0,
            }}
            transition={{type: "spring", stiffness: 400, damping: 25}}
        >
            <motion.button
                aria-label="Open Interactive Terminal"
                animate={{scale: isHovered ? 1.35 : 1}}
                onClick={handleOpenTerminal}
                className="w-10 h-10 rounded-xl bg-stone-100/90 dark:bg-[#292524]/90 flex items-center justify-center border border-stone-200/50 dark:border-stone-700/50 shadow-xs relative z-10 text-emerald-600 dark:text-emerald-400 cursor-pointer"
            >
                <TerminalIcon className="w-5 h-5" />
            </motion.button>

            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        initial={{opacity: 0, scale: 0.8}}
                        animate={{opacity: 1, scale: 1.45}}
                        exit={{opacity: 0, scale: 0.8}}
                        className="absolute top-0 w-10 h-10 pointer-events-none z-20"
                    >
                        <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 border-emerald-500 rounded-tl-sm" />
                        <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t-2 border-r-2 border-emerald-500 rounded-tr-sm" />
                        <div className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b-2 border-l-2 border-emerald-500 rounded-bl-sm" />
                        <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b-2 border-r-2 border-emerald-500 rounded-br-sm" />
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {isHovered && (
                    <motion.span
                        initial={{opacity: 0, y: 10}}
                        animate={{opacity: 1, y: -52}}
                        exit={{opacity: 0, y: 10}}
                        className="absolute left-1/2 -translate-x-1/2 bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 text-[11px] font-medium px-2 py-1 rounded-md shadow-lg whitespace-nowrap pointer-events-none"
                    >
                        Terminal
                    </motion.span>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

const emptySubscribe = () => () => {};

function ThemeToggle() {
    const mounted = useSyncExternalStore(
        emptySubscribe,
        () => true,
        () => false
    );
    const {resolvedTheme, setTheme} = useTheme();
    const [isHovered, setIsHovered] = useState(false);

    const toggleTheme = () => {
        setTheme(resolvedTheme === "dark" ? "light" : "dark");
    };

    return (
        <motion.div
            className="relative flex flex-col items-center cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            layout
            animate={{
                width: isHovered ? 64 : 44,
                marginBottom: isHovered ? 8 : 0,
            }}
            transition={{type: "spring", stiffness: 400, damping: 25}}
        >
            <motion.button
                aria-label="Toggle light/dark theme"
                animate={{scale: isHovered ? 1.35 : 1}}
                onClick={toggleTheme}
                className="w-10 h-10 rounded-xl bg-stone-100/90 dark:bg-[#292524]/90 flex items-center justify-center border border-stone-200/50 dark:border-stone-700/50 shadow-xs relative z-10 text-stone-600 dark:text-stone-300 cursor-pointer"
            >
                {mounted ? (
                    resolvedTheme === "dark" ? (
                        <Sun className="w-5 h-5 text-amber-400" />
                    ) : (
                        <Moon className="w-5 h-5 text-indigo-600" />
                    )
                ) : (
                    <Laptop className="w-5 h-5 text-stone-400" />
                )}
            </motion.button>

            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        initial={{opacity: 0, scale: 0.8}}
                        animate={{opacity: 1, scale: 1.45}}
                        exit={{opacity: 0, scale: 0.8}}
                        className="absolute top-0 w-10 h-10 pointer-events-none z-20"
                    >
                        <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 border-indigo-500 dark:border-indigo-400 rounded-tl-sm" />
                        <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t-2 border-r-2 border-indigo-500 dark:border-indigo-400 rounded-tr-sm" />
                        <div className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b-2 border-l-2 border-indigo-500 dark:border-indigo-400 rounded-bl-sm" />
                        <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b-2 border-r-2 border-indigo-500 dark:border-indigo-400 rounded-br-sm" />
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {isHovered && (
                    <motion.span
                        initial={{opacity: 0, y: 10}}
                        animate={{opacity: 1, y: -52}}
                        exit={{opacity: 0, y: 10}}
                        className="absolute left-1/2 -translate-x-1/2 bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 text-[11px] font-medium px-2 py-1 rounded-md shadow-lg whitespace-nowrap pointer-events-none"
                    >
                        {resolvedTheme === "dark" ? "Light Mode" : "Dark Mode"}
                    </motion.span>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

function SearchTrigger() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            className="relative flex flex-col items-center cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            layout
            animate={{
                width: isHovered ? 64 : 44,
                marginBottom: isHovered ? 8 : 0,
            }}
            transition={{type: "spring", stiffness: 400, damping: 25}}
        >
            <motion.button
                aria-label="Open global search (⌘K)"
                animate={{
                    scale: isHovered ? 1.35 : 1,
                }}
                onClick={() =>
                    document.dispatchEvent(
                        new KeyboardEvent("keydown", {key: "k", metaKey: true}),
                    )
                }
                className="w-10 h-10 rounded-xl bg-stone-100/90 dark:bg-[#292524]/90 flex items-center justify-center border border-stone-200/50 dark:border-stone-700/50 shadow-xs relative z-10 text-stone-600 dark:text-stone-300 cursor-pointer"
            >
                <Search className="w-5 h-5" />
            </motion.button>

            {/* Target Box for Search */}
            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        initial={{opacity: 0, scale: 0.8}}
                        animate={{opacity: 1, scale: 1.45}}
                        exit={{opacity: 0, scale: 0.8}}
                        className="absolute top-0 w-10 h-10 pointer-events-none z-20"
                    >
                        <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 border-indigo-500 dark:border-indigo-400 rounded-tl-sm" />
                        <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t-2 border-r-2 border-indigo-500 dark:border-indigo-400 rounded-tr-sm" />
                        <div className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b-2 border-l-2 border-indigo-500 dark:border-indigo-400 rounded-bl-sm" />
                        <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b-2 border-r-2 border-indigo-500 dark:border-indigo-400 rounded-br-sm" />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Tooltip with Shortcut */}
            <AnimatePresence>
                {isHovered && (
                    <motion.span
                        initial={{opacity: 0, y: 10}}
                        animate={{opacity: 1, y: -52}}
                        exit={{opacity: 0, y: 10}}
                        className="absolute left-1/2 -translate-x-1/2 bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 text-[11px] font-medium px-2 py-1 rounded-md shadow-lg whitespace-nowrap pointer-events-none flex items-center gap-1"
                    >
                        Search {" "}
                        <kbd className="bg-stone-700 dark:bg-stone-300 text-stone-200 dark:text-stone-800 px-1 rounded text-[9px] font-mono">
                            ⌘K
                        </kbd>
                    </motion.span>
                )}
            </AnimatePresence>
        </motion.div>
    );
}
