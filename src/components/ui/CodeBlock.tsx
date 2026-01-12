"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

interface CodeBlockProps {
  children: React.ReactNode;
  className?: string;
}

export default function CodeBlock({ children, className }: CodeBlockProps) {
  const [isCopied, setIsCopied] = useState(false);
  const language = className?.replace("language-", "") || "code";

  const copyToClipboard = async () => {
    if (typeof children === "string" || Array.isArray(children)) {
      const text = Array.isArray(children)
        ? children.join("")
        : String(children);

      try {
        await navigator.clipboard.writeText(text);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      } catch (err) {
        console.error("Failed to copy!", err);
      }
    }
  };

  return (
    <div className="relative group my-8 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-950 shadow-2xl">
      {/* Header / Toolbar */}
      <div className="flex items-center justify-between px-4 py-3 bg-slate-900/50 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50" />
          </div>
          <span className="text-xs font-mono font-medium text-slate-500 ml-2 uppercase tracking-wider">
            {language}
          </span>
        </div>

        <button
          onClick={copyToClipboard}
          className="flex items-center gap-2 px-2 py-1 rounded hover:bg-white/10 transition-colors text-xs font-medium text-slate-400 hover:text-white"
          title="Copy code"
        >
          {isCopied ? (
            <>
              <Check size={14} className="text-emerald-400" />
              <span className="text-emerald-400">Copied!</span>
            </>
          ) : (
            <>
              <Copy size={14} />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code Content */}
      <div className="p-5 overflow-x-auto">
        <pre className="!bg-transparent !p-0 !m-0 !rounded-none">
          <code
            className={`${className} font-mono text-sm leading-relaxed text-slate-300`}
          >
            {children}
          </code>
        </pre>
      </div>
    </div>
  );
}
