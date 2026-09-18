"use client";

import React, {useEffect, useState} from "react";
import {Command} from "cmdk";
import {useRouter} from "next/navigation";
import {useTheme} from "next-themes";
import {
    Search,
    Home,
    Briefcase,
    FileText,
    MapPin,
    Mail,
    ExternalLink,
    Terminal,
    Sun,
    Moon,
    User,
    Code2,
} from "lucide-react";
import {SiGithub, SiX} from "@icons-pack/react-simple-icons";
import {Linkedin} from "@/components/ui/LinkedinIcon";
import {motion, AnimatePresence} from "framer-motion";

export function CommandMenu() {
    const [open, setOpen] = useState(false);
    const router = useRouter();
    const {resolvedTheme, setTheme} = useTheme();

    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen((open) => !open);
            }
        };

        document.addEventListener("keydown", down);
        return () => document.removeEventListener("keydown", down);
    }, []);

    // Prevent scrolling when open
    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    const runCommand = (command: () => void) => {
        setOpen(false);
        command();
    };

    return (
        <AnimatePresence>
            {open && (
                <div className="fixed inset-0 z-100 flex items-center justify-center px-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        onClick={() => setOpen(false)}
                        className="fixed inset-0 bg-black/40 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{opacity: 0, scale: 0.95, y: 10}}
                        animate={{opacity: 1, scale: 1, y: 0}}
                        exit={{opacity: 0, scale: 0.95, y: 10}}
                        transition={{duration: 0.2}}
                        className="w-full max-w-160 relative z-10"
                    >
                        <Command
                            label="Global Command Menu"
                            className="w-full bg-white dark:bg-[#1c1917] rounded-2xl shadow-2xl border border-stone-200/80 dark:border-stone-800/80 overflow-hidden"
                        >
                            <div className="flex items-center border-b border-stone-200/80 dark:border-stone-800/80 px-4">
                                <Search className="w-5 h-5 text-stone-400 mr-3" />
                                <Command.Input
                                    className="flex-1 h-14 bg-transparent outline-none text-base text-stone-900 dark:text-[#fafaf9] placeholder:text-stone-400"
                                    placeholder="Type a command or navigate..."
                                    autoFocus
                                />
                                <div
                                    className="flex items-center gap-1 text-[11px] text-stone-400 font-mono bg-stone-100 dark:bg-[#292524] px-2 py-0.5 rounded"
                                >
                                    <span>ESC</span>
                                </div>
                            </div>

                            <Command.List
                                className="h-80 overflow-y-auto p-2 scrollbar-thin scrollbar-thumb-stone-300 dark:scrollbar-thumb-stone-700"
                            >
                                <Command.Empty className="py-6 text-center text-sm text-stone-500 dark:text-stone-400">
                                    No results found.
                                </Command.Empty>

                                <Command.Group
                                    heading="Actions"
                                    className="text-xs font-mono font-semibold text-stone-400 uppercase tracking-wider mb-2 px-2 mt-2"
                                >
                                    <Item
                                        onSelect={() =>
                                            runCommand(() => {
                                                setTheme(resolvedTheme === "dark" ? "light" : "dark");
                                            })
                                        }
                                    >
                                        {resolvedTheme === "dark" ? (
                                            <>
                                                <Sun className="w-4 h-4 mr-2.5 text-amber-500" />
                                                <span>Switch to Light Theme</span>
                                            </>
                                        ) : (
                                            <>
                                                <Moon className="w-4 h-4 mr-2.5 text-indigo-500" />
                                                <span>Switch to Dark Theme</span>
                                            </>
                                        )}
                                    </Item>

                                    <Item
                                        onSelect={() =>
                                            runCommand(() => {
                                                if (typeof window !== "undefined") {
                                                    window.dispatchEvent(new CustomEvent("open-terminal"));
                                                }
                                            })
                                        }
                                    >
                                        <Terminal className="w-4 h-4 mr-2.5 text-emerald-500" />
                                        <span>Open Interactive Terminal</span>
                                    </Item>
                                </Command.Group>

                                <Command.Group
                                    heading="Navigation"
                                    className="text-xs font-mono font-semibold text-stone-400 uppercase tracking-wider mb-2 px-2 mt-4"
                                >
                                    <Item onSelect={() => runCommand(() => router.push("/"))}>
                                        <Home className="w-4 h-4 mr-2.5 text-stone-400" />
                                        <span>Home</span>
                                    </Item>
                                    <Item onSelect={() => runCommand(() => router.push("/#about"))}>
                                        <User className="w-4 h-4 mr-2.5 text-stone-400" />
                                        <span>About Me</span>
                                    </Item>
                                    <Item onSelect={() => runCommand(() => router.push("/#skills"))}>
                                        <Code2 className="w-4 h-4 mr-2.5 text-stone-400" />
                                        <span>Skills &amp; Technologies</span>
                                    </Item>
                                    <Item onSelect={() => runCommand(() => router.push("/#projects"))}>
                                        <Briefcase className="w-4 h-4 mr-2.5 text-stone-400" />
                                        <span>Featured Projects</span>
                                    </Item>
                                    <Item onSelect={() => runCommand(() => router.push("/case-studies"))}>
                                        <Briefcase className="w-4 h-4 mr-2.5 text-stone-400" />
                                        <span>Case Studies</span>
                                    </Item>
                                    <Item onSelect={() => runCommand(() => router.push("/writing"))}>
                                        <FileText className="w-4 h-4 mr-2.5 text-stone-400" />
                                        <span>Writing &amp; Articles</span>
                                    </Item>
                                    <Item onSelect={() => runCommand(() => router.push("/now"))}>
                                        <MapPin className="w-4 h-4 mr-2.5 text-stone-400" />
                                        <span>/now (Current Status)</span>
                                    </Item>
                                    <Item onSelect={() => runCommand(() => router.push("/#contact"))}>
                                        <Mail className="w-4 h-4 mr-2.5 text-stone-400" />
                                        <span>Contact</span>
                                    </Item>
                                </Command.Group>

                                <Command.Group
                                    heading="Socials & Connect"
                                    className="text-xs font-mono font-semibold text-stone-400 uppercase tracking-wider mb-2 px-2 mt-4"
                                >
                                    <Item
                                        onSelect={() =>
                                            runCommand(() =>
                                                window.open(
                                                    "https://github.com/ShubhamxGupta",
                                                    "_blank",
                                                    "noopener,noreferrer"
                                                )
                                            )
                                        }
                                    >
                                        <SiGithub className="w-4 h-4 mr-2.5" />
                                        <span>GitHub</span>
                                        <ExternalLink className="w-3.5 h-3.5 ml-auto opacity-50" />
                                    </Item>
                                    <Item
                                        onSelect={() =>
                                            runCommand(() =>
                                                window.open(
                                                    "https://linkedin.com/in/shubhamxgupta",
                                                    "_blank",
                                                    "noopener,noreferrer"
                                                )
                                            )
                                        }
                                    >
                                        <Linkedin className="w-4 h-4 mr-2.5" />
                                        <span>LinkedIn</span>
                                        <ExternalLink className="w-3.5 h-3.5 ml-auto opacity-50" />
                                    </Item>
                                    <Item
                                        onSelect={() =>
                                            runCommand(() =>
                                                window.open(
                                                    "https://x.com/ShubhamxGupta1",
                                                    "_blank",
                                                    "noopener,noreferrer"
                                                )
                                            )
                                        }
                                    >
                                        <SiX className="w-4 h-4 mr-2.5" />
                                        <span>Twitter / X</span>
                                        <ExternalLink className="w-3.5 h-3.5 ml-auto opacity-50" />
                                    </Item>
                                </Command.Group>
                            </Command.List>

                            <div
                                className="border-t border-stone-200/80 dark:border-stone-800/80 p-3 flex items-center justify-between text-xs text-stone-400 bg-stone-50 dark:bg-[#1c1917]/50"
                            >
                                <div className="flex gap-4 font-mono text-[11px]">
                                    <span className="flex items-center gap-1">
                                        <kbd className="bg-stone-200 dark:bg-stone-800 px-1 rounded">↵</kbd> select
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <kbd className="bg-stone-200 dark:bg-stone-800 px-1 rounded">↑↓</kbd> navigate
                                    </span>
                                </div>
                                <span className="font-mono text-[11px] opacity-60">⌘K Menu</span>
                            </div>
                        </Command>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}

function Item({
                  children,
                  onSelect,
              }: Readonly<{
    children: React.ReactNode;
    onSelect: () => void;
}>) {
    return (
        <Command.Item
            onSelect={onSelect}
            className="flex items-center px-3.5 py-2.5 rounded-xl text-sm text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-[#292524] aria-selected:bg-indigo-50 dark:aria-selected:bg-indigo-950/40 aria-selected:text-indigo-600 dark:aria-selected:text-indigo-400 cursor-pointer transition-colors"
        >
            {children}
        </Command.Item>
    );
}
