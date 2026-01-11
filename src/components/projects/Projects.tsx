"use client";

import { ProjectCarousel } from "./ProjectCarousel";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 bg-slate-950 text-white relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(56,189,248,0.1)_0%,_transparent_70%)] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-sans tracking-tight">
            Selected <span className="text-blue-500">Works</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A showcase of complex systems, interactive experiments, and
            engineering problems solved.
          </p>
        </div>

        {/* 3D Carousel Implementation */}
        <ProjectCarousel />

        <div className="text-center mt-12">
          <a
            href="https://github.com/ShubhamxGupta"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-400 font-medium hover:underline inline-flex items-center gap-1"
          >
            View more on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
