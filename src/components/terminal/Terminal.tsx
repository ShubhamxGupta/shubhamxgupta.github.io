"use client";

import React, {useState, useEffect, useRef} from "react";
import {motion, AnimatePresence} from "framer-motion";
import {
    X,
    Maximize2,
    Minimize2,
} from "lucide-react";
import {clsx} from "clsx";

interface Command {
    id: string;
    input: string;
    output: React.ReactNode;
}

export default function Terminal() {
    const [isOpen, setIsOpen] = useState(false);
    const [isMaximized, setIsMaximized] = useState(false);
    const [history, setHistory] = useState<Command[]>([
        {
            id: "cmd-welcome",
            input: "welcome",
            output:
                "Welcome to SG-Terminal v2.0. Type 'help' to see available commands.",
        },
    ]);
    const [input, setInput] = useState("");
    const scrollRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const handleOpen = () => setIsOpen(true);
        const handleToggle = () => setIsOpen((prev) => !prev);
        window.addEventListener("open-terminal", handleOpen);
        window.addEventListener("toggle-terminal", handleToggle);
        return () => {
            window.removeEventListener("open-terminal", handleOpen);
            window.removeEventListener("toggle-terminal", handleToggle);
        };
    }, []);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [history, isOpen]);

    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isOpen]);

    const getCommandOutput = (cmd: string): React.ReactNode => {
        switch (cmd) {
            case "help":
                return (
                    <div className="space-y-1 text-stone-300 font-mono text-xs">
                        <p>Available commands:</p>
                        <div className="grid grid-cols-[100px_1fr] gap-x-4 gap-y-1.5 pt-1">
                            <span className="text-indigo-400 font-semibold">about</span>
                            <span>Display engineering overview</span>
                            <span className="text-indigo-400 font-semibold">skills</span>
                            <span>List core technical competencies</span>
                            <span className="text-indigo-400 font-semibold">projects</span>
                            <span>Show featured projects</span>
                            <span className="text-indigo-400 font-semibold">contact</span>
                            <span>Show direct channels</span>
                            <span className="text-indigo-400 font-semibold">clear</span>
                            <span>Clear console history</span>
                            <span className="text-indigo-400 font-semibold">exit</span>
                            <span>Close console window</span>
                        </div>
                    </div>
                );
            case "about":
                return "Shubham Gupta — Software Engineer building intelligent systems at the intersection of ML, distributed scale, and real-time platforms.";
            case "skills":
                return "Python, PyTorch, C++, FastAPI, Next.js, React, Docker, OpenCV, Transformers, PostgreSQL.";
            case "projects":
                return (
                    <ul className="list-disc list-inside space-y-0.5 text-stone-300">
                        <li>Wifi-Card Generator — Elegant offline-first QR generation card</li>
                        <li>The 3D Cube — Interactive WebGL spatial puzzle engine</li>
                        <li>Claw Machine — Physics-based interactive browser arcade</li>
                        <li>Hug Bunny — Real-time physics canvas game</li>
                    </ul>
                );
            case "contact":
                return "Email: shubhamxgupta1@gmail.com | LinkedIn: /in/shubhamxgupta | GitHub: @ShubhamxGupta";
            case "":
                return null;
            default:
                return (
                    <span className="text-rose-400">
                        Command not found: {cmd}. Type &apos;help&apos; for available options.
                    </span>
                );
        }
    };

    const handleCommand = (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        const cmd = input.trim().toLowerCase();

        if (cmd === "clear") {
            setHistory([]);
            setInput("");
            return;
        }

        if (cmd === "exit") {
            setIsOpen(false);
            setInput("");
            return;
        }

        const output = getCommandOutput(cmd);
        setHistory((prev) => [
            ...prev,
            {id: `cmd-${Date.now()}-${prev.length}`, input: cmd, output},
        ]);
        setInput("");
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{opacity: 0, y: 100, scale: 0.95}}
                    animate={{
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        width: isMaximized ? "100vw" : "min(640px, 92vw)",
                        height: isMaximized ? "100vh" : "420px",
                        borderRadius: isMaximized ? 0 : "20px",
                        bottom: isMaximized ? 0 : "32px",
                        right: isMaximized ? 0 : "32px",
                    }}
                    exit={{opacity: 0, y: 100, scale: 0.95}}
                    transition={{type: "spring", stiffness: 350, damping: 28}}
                    className={clsx(
                        "fixed z-50 bg-[#0c0a09]/95 backdrop-blur-2xl border border-stone-800/80 shadow-2xl overflow-hidden flex flex-col font-mono text-sm",
                        isMaximized ? "inset-0" : "bottom-8 right-8"
                    )}
                >
                    {/* macOS Style Header */}
                    <div
                        className="flex items-center justify-between px-4 py-3 bg-[#1c1917]/90 border-b border-stone-800/80 select-none"
                    >
                        <div className="flex items-center gap-2">
                            <button
                                type="button"
                                aria-label="Close terminal"
                                className="w-3 h-3 rounded-full bg-rose-500 hover:brightness-110 transition-all cursor-pointer"
                                onClick={() => setIsOpen(false)}
                            />
                            <button
                                type="button"
                                aria-label={isMaximized ? "Restore terminal" : "Maximize terminal"}
                                className="w-3 h-3 rounded-full bg-amber-500 hover:brightness-110 transition-all cursor-pointer"
                                onClick={() => setIsMaximized(!isMaximized)}
                            />
                            <span className="w-3 h-3 rounded-full bg-emerald-500" />
                            <span className="ml-2 text-stone-400 text-xs font-mono">
                                sg-terminal — zsh
                            </span>
                        </div>
                        <div className="flex items-center gap-2 text-stone-400">
                            <button
                                type="button"
                                aria-label={isMaximized ? "Restore window" : "Maximize window"}
                                onClick={() => setIsMaximized(!isMaximized)}
                                className="hover:text-white p-1 rounded transition-colors cursor-pointer"
                            >
                                {isMaximized ? (
                                    <Minimize2 size={13} />
                                ) : (
                                    <Maximize2 size={13} />
                                )}
                            </button>
                            <button
                                type="button"
                                aria-label="Close window"
                                onClick={() => setIsOpen(false)}
                                className="hover:text-white p-1 rounded transition-colors cursor-pointer"
                            >
                                <X size={13} />
                            </button>
                        </div>
                    </div>

                    {/* Console Body */}
                    <div
                        ref={scrollRef}
                        className="flex-1 p-5 overflow-y-auto space-y-3 text-stone-300 text-xs font-mono"
                    >
                        {history.map((entry) => (
                            <div key={entry.id} className="space-y-1">
                                <div className="flex items-center gap-2">
                                    <span className="text-emerald-400 font-bold">➜</span>
                                    <span className="text-indigo-400 font-semibold">~</span>
                                    <span className="text-stone-100 font-medium">{entry.input}</span>
                                </div>
                                {entry.output && (
                                    <div className="pl-6 text-stone-400 leading-relaxed">{entry.output}</div>
                                )}
                            </div>
                        ))}

                        <form
                            onSubmit={handleCommand}
                            className="flex items-center gap-2 pt-1"
                        >
                            <span className="text-emerald-400 font-bold">➜</span>
                            <span className="text-indigo-400 font-semibold">~</span>
                            <input
                                ref={inputRef}
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                aria-label="Terminal command input"
                                placeholder="type 'help'..."
                                className="flex-1 bg-transparent border-none outline-none text-stone-100 font-mono text-xs placeholder:text-stone-600"
                            />
                        </form>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
