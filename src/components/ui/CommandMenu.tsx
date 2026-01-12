"use client";

import { useEffect, useState } from "react";
import { Command } from "cmdk";
import { useRouter } from "next/navigation";
import {
  Search,
  Home,
  Briefcase,
  FileText,
  MapPin,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function CommandMenu() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

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
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-slate-900/20 dark:bg-black/40 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.2 }}
            className="w-full max-w-[640px] relative z-10"
          >
            <Command
              label="Global Command Menu"
              className="w-full bg-white dark:bg-slate-900 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden"
            >
              <div className="flex items-center border-b border-slate-200 dark:border-slate-800 px-4">
                <Search className="w-5 h-5 text-slate-400 mr-3" />
                <Command.Input
                  className="flex-1 h-16 bg-transparent outline-none text-lg text-slate-900 dark:text-white placeholder:text-slate-400 font-sans"
                  placeholder="Type a command or search..."
                  autoFocus
                />
                <div className="flex items-center gap-2 text-xs text-slate-400 font-mono bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">
                  <span>ESC</span>
                </div>
              </div>

              <Command.List className="h-[300px] overflow-y-auto p-2 scrollbar-thin scrollbar-thumb-slate-200 dark:scrollbar-thumb-slate-800">
                <Command.Empty className="py-6 text-center text-sm text-slate-500 dark:text-slate-400">
                  No results found.
                </Command.Empty>

                <Command.Group
                  heading="Navigation"
                  className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 px-2 mt-2"
                >
                  <Item onSelect={() => runCommand(() => router.push("/"))}>
                    <Home className="w-4 h-4 mr-2" />
                    Home
                  </Item>
                  <Item
                    onSelect={() =>
                      runCommand(() => router.push("/case-studies"))
                    }
                  >
                    <Briefcase className="w-4 h-4 mr-2" />
                    Case Studies
                  </Item>
                  <Item
                    onSelect={() => runCommand(() => router.push("/writing"))}
                  >
                    <FileText className="w-4 h-4 mr-2" />
                    Writing / Blog
                  </Item>
                  <Item onSelect={() => runCommand(() => router.push("/now"))}>
                    <MapPin className="w-4 h-4 mr-2" />
                    Now Page
                  </Item>
                </Command.Group>

                <Command.Group
                  heading="Socials"
                  className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 px-2 mt-4"
                >
                  <Item
                    onSelect={() =>
                      runCommand(() =>
                        window.open(
                          "https://github.com/ShubhamxGupta",
                          "_blank"
                        )
                      )
                    }
                  >
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                    <ExternalLink className="w-3 h-3 ml-auto opacity-50" />
                  </Item>
                  <Item
                    onSelect={() =>
                      runCommand(() =>
                        window.open(
                          "https://linkedin.com/in/shubhamxgupta",
                          "_blank"
                        )
                      )
                    }
                  >
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                    <ExternalLink className="w-3 h-3 ml-auto opacity-50" />
                  </Item>
                  <Item
                    onSelect={() =>
                      runCommand(() => {
                        navigator.clipboard.writeText(
                          "shubhamxgupta1@gmail.com"
                        );
                        alert("Email copied to clipboard!");
                      })
                    }
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Copy Email
                    <span className="ml-auto text-xs opacity-50 font-mono">
                      shubhamxgupta1@gmail.com
                    </span>
                  </Item>
                </Command.Group>
              </Command.List>

              <div className="border-t border-slate-200 dark:border-slate-800 p-2 flex items-center justify-between text-xs text-slate-500 bg-slate-50 dark:bg-slate-900/50">
                <div className="flex gap-4">
                  <span className="flex items-center gap-1">
                    <kbd className="bg-slate-200 dark:bg-slate-700 px-1 rounded">
                      ↵
                    </kbd>{" "}
                    to select
                  </span>
                  <span className="flex items-center gap-1">
                    <kbd className="bg-slate-200 dark:bg-slate-700 px-1 rounded">
                      ↑↓
                    </kbd>{" "}
                    to navigate
                  </span>
                </div>
                <span className="font-mono opacity-50">G-CMD v1.0</span>
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
}: {
  children: React.ReactNode;
  onSelect: () => void;
}) {
  return (
    <Command.Item
      onSelect={onSelect}
      className="flex items-center px-3 py-3 rounded-lg text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 aria-selected:bg-blue-50 dark:aria-selected:bg-blue-900/20 aria-selected:text-blue-600 dark:aria-selected:text-blue-400 cursor-pointer transition-colors"
    >
      {children}
    </Command.Item>
  );
}
