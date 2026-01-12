"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import { experienceData } from "@/data/experience";
import { clsx } from "clsx";

export default function Experience() {
  return (
    <Section id="resume" className="bg-white dark:bg-slate-950">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Resume
          </h2>
          <p className="text-slate-600 dark:text-slate-400">
            My educational and professional journey.
          </p>
        </motion.div>

        <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 md:ml-6 space-y-12">
          {experienceData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Icon */}
              <div
                className={clsx(
                  "absolute -left-[9px] md:-left-[11px] top-0 w-5 h-5 md:w-6 md:h-6 rounded-full border-4 border-white dark:border-slate-950",
                  item.type === "work" ? "bg-blue-600" : "bg-emerald-500"
                )}
              />

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {item.role}
                </h3>
                <span className="text-sm font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-900 px-3 py-1 rounded-full w-fit mt-2 sm:mt-0">
                  {item.period}
                </span>
              </div>

              <div className="text-base text-blue-600 dark:text-blue-400 font-medium mb-3">
                {item.company}
              </div>

              {item.description && (
                <p className="text-slate-600 dark:text-slate-400 mb-3">
                  {item.description}
                </p>
              )}

              {item.achievements && (
                <ul className="list-disc list-outside ml-4 text-slate-600 dark:text-slate-400 space-y-1">
                  {item.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/ShubhamGupta_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 text-white font-medium rounded-full shadow-lg hover:bg-blue-700 transition-colors"
          >
            Download Full Resume
          </a>
        </div>
      </div>
    </Section>
  );
}
