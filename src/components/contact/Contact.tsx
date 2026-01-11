"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, Loader2, CheckCircle2 } from "lucide-react";
import Section from "@/components/ui/Section";
import { clsx } from "clsx";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function Contact() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setStatus("sending");
    try {
      await emailjs.send(
        "service_1t2353f",
        "template_ptdjfpp",
        data,
        "Fl7b-_RebQoV8iqIJ"
      );
      setStatus("success");
      reset();
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
    }
  };

  return (
    <Section id="contact" className="bg-white dark:bg-slate-950">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Get in Touch
          </h2>
          <p className="text-slate-600 dark:text-slate-400">
            Have a question or want to work together?
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <ContactInfoItem
              icon={<MapPin />}
              label="Address"
              value="Jaipur, India"
              href="https://maps.app.goo.gl/WqGXgfNHutuimL9o9"
            />
            <ContactInfoItem
              icon={<Phone />}
              label="Phone"
              value="+91 7014524673"
              href="tel:+917014524673"
            />
            <ContactInfoItem
              icon={<Mail />}
              label="Email"
              value="shubhamxgupta1@gmail.com"
              href="mailto:shubhamxgupta1@gmail.com"
            />
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-slate-50 dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Name
                </label>
                <input
                  {...register("name", { required: "Name is required" })}
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-blue-600 outline-none transition-all placeholder:text-slate-400 dark:text-white"
                  placeholder="Your Name"
                />
                {errors.name && (
                  <span className="text-red-500 text-sm mt-1">
                    {errors.name.message}
                  </span>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Email
                </label>
                <input
                  {...register("email", {
                    required: "Email is required",
                    pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
                  })}
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-blue-600 outline-none transition-all placeholder:text-slate-400 dark:text-white"
                  placeholder="name@example.com"
                />
                {errors.email && (
                  <span className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </span>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Subject
                </label>
                <input
                  {...register("subject", { required: "Subject is required" })}
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-blue-600 outline-none transition-all placeholder:text-slate-400 dark:text-white"
                  placeholder="Project Inquiry"
                />
                {errors.subject && (
                  <span className="text-red-500 text-sm mt-1">
                    {errors.subject.message}
                  </span>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Message
                </label>
                <textarea
                  {...register("message", { required: "Message is required" })}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-blue-600 outline-none transition-all placeholder:text-slate-400 dark:text-white resize-none"
                  placeholder="Your message..."
                />
                {errors.message && (
                  <span className="text-red-500 text-sm mt-1">
                    {errors.message.message}
                  </span>
                )}
              </div>

              <button
                type="submit"
                disabled={status === "sending" || status === "success"}
                className={clsx(
                  "w-full flex items-center justify-center gap-2 py-4 rounded-lg font-medium transition-all text-white",
                  status === "success"
                    ? "bg-green-600"
                    : "bg-blue-600 hover:bg-blue-700",
                  "disabled:opacity-70 disabled:cursor-not-allowed"
                )}
              >
                {status === "sending" ? (
                  <>
                    <Loader2 className="animate-spin" size={20} />
                    Sending...
                  </>
                ) : status === "success" ? (
                  <>
                    <CheckCircle2 size={20} />
                    Message Sent!
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={20} />
                  </>
                )}
              </button>

              {status === "error" && (
                <p className="text-red-500 text-center text-sm">
                  Failed to send message. Please try again.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}

function ContactInfoItem({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-4 p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors group"
    >
      <div className="p-3 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <div>
        <h4 className="text-sm font-medium text-slate-400 uppercase tracking-wider">
          {label}
        </h4>
        <p className="text-lg font-semibold text-slate-900 dark:text-white">
          {value}
        </p>
      </div>
    </a>
  );
}
