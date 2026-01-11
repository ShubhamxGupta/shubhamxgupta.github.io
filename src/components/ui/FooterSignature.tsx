"use client";

export function FooterSignature() {
  return (
    <div className="relative flex justify-center py-20 overflow-hidden select-none cursor-default">
      <div className="relative group">
        {/* Outline Layer (Base) */}
        <h1
          className="text-9xl md:text-[12rem] font-bold tracking-tighter text-transparent transition-colors duration-700"
          style={{
            WebkitTextStroke: "1px rgba(100, 116, 139, 0.2)", // Slate-500/20
          }}
        >
          Shubham.ai
        </h1>

        {/* Fill Layer (Reveal on Hover) */}
        <div className="absolute inset-0 overflow-hidden w-0 group-hover:w-full transition-[width] duration-700 ease-in-out border-r-2 border-transparent group-hover:border-blue-500">
          <h1 className="text-9xl md:text-[12rem] font-bold tracking-tighter text-slate-900 dark:text-white whitespace-nowrap">
            Shubham.ai
          </h1>
        </div>
      </div>
    </div>
  );
}
