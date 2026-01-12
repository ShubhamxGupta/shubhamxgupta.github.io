"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import Image from "next/image";

interface Skill {
  name: string;
  level: string;
  icon: string;
  color: string;
}

const skills: Skill[] = [
  {
    name: "Python",
    level: "Expert",
    icon: "/skills/python.png",
    color: "bg-blue-50 dark:bg-blue-900/20",
  },
  {
    name: "PyTorch",
    level: "Advanced",
    icon: "/skills/pytorch.png",
    color: "bg-orange-50 dark:bg-orange-900/20",
  },
  {
    name: "TensorFlow",
    level: "Intermediate",
    icon: "/skills/Tensorflow.png",
    color: "bg-yellow-50 dark:bg-yellow-900/20",
  },
  {
    name: "C++",
    level: "Advanced",
    icon: "/skills/cpp.png",
    color: "bg-blue-50 dark:bg-blue-900/20",
  },
  {
    name: "Computer Vision",
    level: "Advanced",
    icon: "/skills/OpenCV_Logo_with_text.png",
    color: "bg-indigo-50 dark:bg-indigo-900/20",
  },
  {
    name: "NLP",
    level: "Intermediate",
    icon: "/skills/nlp.png",
    color: "bg-pink-50 dark:bg-pink-900/20",
  },
  {
    name: "SQL",
    level: "Intermediate",
    icon: "/skills/sql.png",
    color: "bg-blue-50 dark:bg-blue-900/20",
  },
  {
    name: "React",
    level: "Intermediate",
    icon: "/skills/react.png",
    color: "bg-cyan-50 dark:bg-cyan-900/20",
  },
  {
    name: "Next.js",
    level: "Intermediate",
    icon: "/skills/nextjs.png",
    color: "bg-slate-50 dark:bg-slate-900/20",
  },
  {
    name: "FastAPI",
    level: "Advanced",
    icon: "/skills/fastapi.png",
    color: "bg-emerald-50 dark:bg-emerald-900/20",
  },
  {
    name: "Docker",
    level: "Intermediate",
    icon: "/skills/docker.png",
    color: "bg-blue-50 dark:bg-blue-900/20",
  },
  {
    name: "Git",
    level: "Advanced",
    icon: "/skills/git.png",
    color: "bg-slate-50 dark:bg-slate-900/20",
  },
];

export default function Skills() {
  return (
    <Section
      id="skills"
      className="relative bg-slate-50 dark:bg-slate-900/50 overflow-hidden"
    >
      {/* Decorative Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-5 dark:opacity-10">
        <Image
          src="/images/ui/ai-flow.png"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <p className="text-slate-600 dark:text-slate-400">
            Technologies I use to build intelligent systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{
                scale: 1.05,
                y: -5,
                boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)",
              }}
              className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col items-center justify-center text-center gap-3 group"
            >
              <div
                className={`relative w-16 h-16 p-3 rounded-full flex items-center justify-center transition-colors ${skill.color}`}
              >
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <div>
                <span className="font-semibold text-slate-800 dark:text-slate-200 block">
                  {skill.name}
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  {skill.level}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
