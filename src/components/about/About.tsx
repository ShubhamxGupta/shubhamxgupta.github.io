"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Section from "@/components/ui/Section";
import { clsx } from "clsx";

export default function About() {
  return (
    <Section id="about" className="bg-white dark:bg-slate-950">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col md:flex-row items-center gap-12"
      >
        {/* Image Side */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
            {
              <Image
                src="/images/photo1.jpg"
                alt="Shubham Gupta"
                fill
                className="object-cover"
              />
            }
          </div>
        </div>

        {/* Content Side */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
            About Me
          </h2>
          <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed">
            <p>
              Hi, I&apos;m Shubham Gupta — a passionate Computer Science
              graduate from Vellore Institute of Technology, Chennai, with a
              CGPA of 8.3/10.
            </p>
            <p>
              My expertise lies in Artificial Intelligence and Machine Learning,
              demonstrated by my research and projects in Deep Learning and
              Computer Vision. I&apos;m proficient in Python, PyTorch, and
              TensorFlow, and have hands-on experience with modern architectures
              like Transformers and GANs, enabling me to build intelligent and
              scalable applications.
            </p>
            <p>
              I&apos;m driven by curiosity and a passion for continuous learning
              in the rapidly creating field of Generative AI.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <InfoItem label="Name" value="Shubham Gupta" />
            <InfoItem label="Role" value="AI/ML Engineer" />
            <InfoItem label="Location" value="Jaipur, India" />
            <InfoItem label="Email" value="shubhamxgupta1@gmail.com" />
          </div>
        </div>
      </motion.div>
    </Section>
  );
}

function InfoItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col">
      <span className="text-sm text-slate-400 uppercase tracking-wider font-semibold">
        {label}
      </span>
      <span className="text-slate-800 dark:text-slate-200 font-medium">
        {value}
      </span>
    </div>
  );
}
