"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import ProjectCard from "./ProjectCard";
import { projectsData } from "@/data/projects";

export default function Projects() {
  return (
    <Section id="projects" className="bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-slate-600 dark:text-slate-400">
            A selection of projects I've worked on.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/ShubhamxGupta"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 font-medium hover:underline inline-flex items-center gap-1"
          >
            View more on GitHub
          </a>
        </div>
      </div>
    </Section>
  );
}
