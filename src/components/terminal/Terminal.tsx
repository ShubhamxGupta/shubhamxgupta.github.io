"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Terminal as TerminalIcon,
  X,
  Maximize2,
  Minimize2,
} from "lucide-react";
import { clsx } from "clsx";

interface Command {
  input: string;
  output: React.ReactNode;
}

export default function Terminal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const [history, setHistory] = useState<Command[]>([
    {
      input: "welcome",
      output:
        "Welcome to SG-Terminal v1.0. Type 'help' to see available commands.",
    },
  ]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

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

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();

    let output: React.ReactNode = "";

    switch (cmd) {
      case "help":
        output = (
          <div className="space-y-1 text-slate-300">
            <p>Available commands:</p>
            <div className="grid grid-cols-[100px_1fr] gap-2">
              <span className="text-blue-400">about</span> Display information
              about me
              <span className="text-blue-400">skills</span> List technical
              skills
              <span className="text-blue-400">projects</span> Show featured
              projects
              <span className="text-blue-400">contact</span> Show contact
              details
              <span className="text-blue-400">clear</span> Clear terminal
              <span className="text-blue-400">exit</span> Close terminal
            </div>
          </div>
        );
        break;
      case "about":
        output =
          "Shubham Gupta | AI/ML Engineer. Passionate about Deep Learning, CV, and Generative AI.";
        break;
      case "skills":
        output =
          "Python, PyTorch, TensorFlow, C++, React, Next.js, Docker, Git, SQL, Computer Vision, NLP.";
        break;
      case "projects":
        output = (
          <ul className="list-disc list-inside">
            <li>Wifi-Card Generator</li>
            <li>Rubik's Cube</li>
            <li>Hug Bunny</li>
            <li>Claw Machine</li>
          </ul>
        );
        break;
      case "contact":
        output = "Email: shubhamxgupta1@gmail.com | Phone: +91 7014524673";
        break;
      case "clear":
        setHistory([]);
        setInput("");
        return;
      case "exit":
        setIsOpen(false);
        setInput("");
        return;
      case "":
        output = "";
        break;
      default:
        output = (
          <span className="text-red-400">
            Command not found: {cmd}. Type 'help' for options.
          </span>
        );
    }

    setHistory([...history, { input: cmd, output }]);
    setInput("");
  };

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 p-4 bg-slate-900 border border-slate-700 text-green-400 rounded-full shadow-lg hover:shadow-green-900/20 hover:scale-110 transition-all group"
          >
            <TerminalIcon size={24} />
            <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-slate-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              Open Terminal
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              width: isMaximized ? "100vw" : "min(600px, 90vw)",
              height: isMaximized ? "100vh" : "400px",
              borderRadius: isMaximized ? 0 : "12px",
              bottom: isMaximized ? 0 : "24px",
              right: isMaximized ? 0 : "24px",
            }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            className={clsx(
              "fixed z-50 bg-slate-950/95 backdrop-blur-md border border-slate-800 shadow-2xl overflow-hidden flex flex-col font-mono text-sm",
              isMaximized ? "inset-0" : "bottom-6 right-6"
            )}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-2 bg-slate-900 border-b border-slate-800 cursor-move">
              <div className="flex items-center gap-2">
                <div
                  className="w-3 h-3 rounded-full bg-red-500"
                  onClick={() => setIsOpen(false)}
                />
                <div
                  className="w-3 h-3 rounded-full bg-yellow-500"
                  onClick={() => setIsMaximized(!isMaximized)}
                />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-2 text-slate-400 text-xs">
                  sg-terminal — -zsh
                </span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <button
                  onClick={() => setIsMaximized(!isMaximized)}
                  className="hover:text-white"
                >
                  {isMaximized ? (
                    <Minimize2 size={14} />
                  ) : (
                    <Maximize2 size={14} />
                  )}
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="hover:text-white"
                >
                  <X size={14} />
                </button>
              </div>
            </div>

            {/* Body */}
            <div
              ref={scrollRef}
              className="flex-1 p-4 overflow-y-auto space-y-2 text-slate-300 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent"
              onClick={() => inputRef.current?.focus()}
            >
              {history.map((entry, i) => (
                <div key={i} className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">➜</span>
                    <span className="text-blue-400">~</span>
                    <span className="text-slate-100">{entry.input}</span>
                  </div>
                  {entry.output && (
                    <div className="pl-6 text-slate-400">{entry.output}</div>
                  )}
                </div>
              ))}

              <form
                onSubmit={handleCommand}
                className="flex items-center gap-2"
              >
                <span className="text-green-400">➜</span>
                <span className="text-blue-400">~</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="flex-1 bg-transparent border-none outline-none text-slate-100 placeholder-slate-600"
                  autoFocus
                />
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
