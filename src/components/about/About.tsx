"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Section from "@/components/ui/Section";

import { useRef } from "react";
import { TubeLight } from "@/components/ui/TubeLight";

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <Section
      id="about"
      className="bg-white dark:bg-slate-950 relative overflow-hidden"
    >
      <div ref={sectionRef} className="relative w-full py-10">
        <TubeLight sectionRef={sectionRef} />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center gap-20 xl:gap-32"
        >
          {/* Image Side */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 group perspective-1000">
              {/* Photo 3 (Left Wing) */}
              <div
                className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 z-10 bg-slate-200 origin-bottom-right
              rotate-[-6deg] translate-x-[-10px] scale-95 opacity-80
              group-hover:rotate-[-12deg] group-hover:translate-x-[-50%] group-hover:scale-100 group-hover:opacity-100"
              >
                <Image
                  src="/images/profile/photo3.jpg"
                  alt="Shubham Gupta 3"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Photo 2 (Right Wing) */}
              <div
                className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 z-20 bg-slate-200 origin-bottom-left
              rotate-[6deg] translate-x-[10px] scale-95 opacity-80
              group-hover:rotate-[12deg] group-hover:translate-x-[50%] group-hover:scale-100 group-hover:opacity-100"
              >
                <Image
                  src="/images/profile/photo2.png"
                  alt="Shubham Gupta 2"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Photo 1 (Center) */}
              <div
                className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 z-30 bg-slate-200
              rotate-0 scale-100
              group-hover:scale-105 group-hover:-translate-y-2 group-hover:shadow-blue-500/20"
              >
                <Image
                  src="/images/profile/photo1.jpg"
                  alt="Shubham Gupta 1"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
              About Me
            </h2>
            <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed">
              <p>
                Hi, I&apos;m Shubham Gupta - a passionate Computer Science
                graduate from Vellore Institute of Technology, Chennai, with a
                CGPA of 8.3/10.
              </p>
              <p>
                My expertise lies in Artificial Intelligence and Machine
                Learning, demonstrated by my research and projects in Deep
                Learning and Computer Vision. I&apos;m proficient in Python,
                PyTorch, and TensorFlow, and have hands-on experience with
                modern architectures like Transformers and GANs, enabling me to
                build intelligent and scalable applications.
              </p>
              <p>
                I&apos;m driven by curiosity and a passion for continuous
                learning in the rapidly creating field of Generative AI.
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
      </div>
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
