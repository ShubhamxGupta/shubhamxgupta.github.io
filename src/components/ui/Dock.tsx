"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  FileText,
  Briefcase,
  MapPin,
  Code2,
  Terminal,
  Mail,
  User,
  Search,
} from "lucide-react";

// --- Dock Config ---
const DOCK_ITEMS = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/#about", icon: User },
  { name: "Skills", href: "/#skills", icon: Terminal },
  { name: "Projects", href: "/#projects", icon: Code2 },
  { name: "Case Studies", href: "/case-studies", icon: Briefcase },
  { name: "Writing", href: "/writing", icon: FileText },
  { name: "Now", href: "/now", icon: MapPin },
  { name: "Contact", href: "/#contact", icon: Mail },
];

export function Dock() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-end gap-2 px-4 py-3 rounded-2xl bg-white/10 dark:bg-slate-900/10 backdrop-blur-xl border border-white/20 dark:border-slate-800/20 shadow-2xl">
      {DOCK_ITEMS.map((item, index) => (
        <DockIcon
          key={item.name}
          item={item}
          index={index}
          hoveredIndex={hoveredIndex}
          setHoveredIndex={setHoveredIndex}
        />
      ))}

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
}: {
  item: (typeof DOCK_ITEMS)[0];
  index: number;
  hoveredIndex: number | null;
  setHoveredIndex: (idx: number | null) => void;
}) {
  const pathname = usePathname();
  const isActive =
    pathname === item.href || (item.href.startsWith("/#") && pathname === "/");
  const isHovered = hoveredIndex === index;

  return (
    <Link href={item.href}>
      <motion.div
        className="relative flex flex-col items-center justify-end cursor-none" // cursor-none hides default pointer
        onMouseEnter={() => setHoveredIndex(index)}
        onMouseLeave={() => setHoveredIndex(null)}
        layout // Animates layout changes (push neighbors)
        animate={{
          width: isHovered ? 80 : 50, // Expands width to push neighbors
          marginBottom: isHovered ? 10 : 0, // Slight lift
        }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
        {/* Icon Container */}
        <motion.div
          animate={{ scale: isHovered ? 1.5 : 1 }}
          className="w-12 h-12 rounded-2xl bg-slate-200 dark:bg-slate-800 flex items-center justify-center border border-white/10 shadow-sm relative z-10"
        >
          <item.icon className="w-6 h-6 text-slate-600 dark:text-slate-300" />
        </motion.div>

        {/* Target Box Cursor Replacement */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1.65 }} // Scale slightly larger than the 1.5x icon
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute top-0 w-12 h-12 pointer-events-none z-20"
            >
              {/* Corners */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-blue-500 rounded-tl-md" />
              <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-blue-500 rounded-tr-md" />
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-blue-500 rounded-bl-md" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-blue-500 rounded-br-md" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Tooltip */}
        <AnimatePresence>
          {isHovered && (
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: -60 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute left-1/2 -translate-x-1/2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-semibold px-2 py-1 rounded whitespace-nowrap pointer-events-none"
            >
              {item.name}
            </motion.span>
          )}
        </AnimatePresence>

        {/* Active Dot */}
        {isActive && !isHovered && (
          <span className="absolute -bottom-2 w-1 h-1 bg-slate-400 dark:bg-slate-500 rounded-full" />
        )}
      </motion.div>
    </Link>
  );
}

function SearchTrigger() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative flex flex-col items-center ml-2 pl-2 border-l border-white/10 dark:border-slate-700/50 cursor-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      layout
      animate={{
        width: isHovered ? 80 : 50,
        marginBottom: isHovered ? 10 : 0,
      }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      <motion.button
        animate={{
          scale: isHovered ? 1.5 : 1,
        }}
        onClick={() =>
          document.dispatchEvent(
            new KeyboardEvent("keydown", { key: "k", metaKey: true })
          )
        }
        className="w-12 h-12 rounded-2xl bg-slate-200 dark:bg-slate-800 flex items-center justify-center border border-white/10 shadow-sm relative z-10"
      >
        <Search className="w-6 h-6 text-slate-600 dark:text-slate-300" />
      </motion.button>

      {/* Target Box for Search */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1.65 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="absolute top-0 w-12 h-12 pointer-events-none z-20"
          >
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-blue-500 rounded-tl-md" />
            <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-blue-500 rounded-tr-md" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-blue-500 rounded-bl-md" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-blue-500 rounded-br-md" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Tooltip with Shortcut */}
      <AnimatePresence>
        {isHovered && (
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: -60 }} // Increased negative Y to avoid clipping
            exit={{ opacity: 0, y: 10 }}
            className="absolute left-1/2 -translate-x-1/2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-semibold px-2 py-1 rounded whitespace-nowrap pointer-events-none flex items-center gap-1"
          >
            Search
            <kbd className="bg-white/20 dark:bg-black/10 px-1 rounded text-[10px]">
              ⌘K
            </kbd>
          </motion.span>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
