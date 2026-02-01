"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { DOCK_ITEMS } from "./Dock";
import { SOCIALS } from "./SocialFloater";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Search / Toggle Button */}
      <motion.button
        className="fixed top-6 right-6 z-[60] p-3 rounded-full bg-white/10 dark:bg-slate-900/10 backdrop-blur-md border border-white/20 dark:border-slate-800/20 shadow-lg text-slate-800 dark:text-white md:hidden"
        onClick={toggleMenu}
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </motion.button>

      {/* Full Screen Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-50 bg-slate-50/95 dark:bg-slate-950/95 backdrop-blur-xl flex flex-col pt-24 px-6 pb-8 md:hidden overflow-y-auto"
          >
            {/* Navigation Links */}
            <nav className="flex flex-col gap-2 mb-12">
              {DOCK_ITEMS.map((item, i) => {
                const isActive =
                  pathname === item.href ||
                  (item.href.startsWith("/#") && pathname === "/");

                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      className={`flex items-center gap-4 p-4 rounded-xl text-lg font-medium transition-colors ${
                        isActive
                          ? "bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                          : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      <item.icon size={24} />
                      {item.name}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            {/* Social Icons */}
            <div className="mt-auto">
              <div className="flex flex-wrap justify-center gap-4">
                {SOCIALS.map((social, i) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 + i * 0.05 }}
                    className="p-3 rounded-full bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 border border-slate-200 dark:border-slate-800"
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
              <p className="text-center text-xs text-slate-400 mt-6">
                © {new Date().getFullYear()} Shubham Gupta
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
