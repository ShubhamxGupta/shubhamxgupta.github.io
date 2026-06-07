"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import { experienceData } from "@/data/experience";
import { clsx } from "clsx";
import Image from "next/image";

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
              {/* Logo / Icon Container */}
              <div className="absolute -left-5 md:-left-6 top-0 z-10 w-10 h-10 md:w-12 md:h-12">
                <div
                  className={clsx(
                    "w-full h-full rounded-full overflow-hidden border-2 bg-white dark:bg-slate-900 flex items-center justify-center shadow-md transition-all duration-300",
                    item.active
                      ? "border-emerald-500 ring-4 ring-emerald-500/20"
                      : "border-slate-200 dark:border-slate-800 hover:border-blue-500"
                  )}
                >
                  <Image
                    src={item.logo}
                    alt={item.company}
                    width={48}
                    height={48}
                    className="object-cover w-full h-full"
                  />
                </div>

                {/* Active Indicator Pulse (Outside overflow-hidden so it's fully visible) */}
                {item.active && (
                  <span className="absolute -top-1 -right-1 flex h-4 w-4 z-20">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-white dark:border-slate-950"></span>
                  </span>
                )}
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {item.role}
                </h3>
                <span className="text-sm font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-900 px-3 py-1 rounded-full w-fit mt-2 sm:mt-0">
                  {item.period}
                </span>
              </div>

              <div className="text-base text-emerald-500 dark:text-blue-400 font-medium mb-3">
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
