"use client";

import React, {useState} from "react";
import {useForm} from "react-hook-form";
import emailjs from "@emailjs/browser";
import {motion} from "framer-motion";
import {Mail, MapPin, Phone, Send, Loader2, CheckCircle2, Sparkles, ArrowUpRight} from "lucide-react";
import Section from "@/components/ui/Section";
import {clsx} from "clsx";

type FormData = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

export default function Contact() {
    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
    const {
        register,
        handleSubmit,
        reset,
        formState: {errors},
    } = useForm<FormData>();

    const onSubmit = async (data: FormData) => {
        setStatus("sending");
        try {
            const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_1t2353f";
            const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_ptdjfpp";
            const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "Fl7b-_RebQoV8iqIJ";

            await emailjs.send(serviceId, templateId, data, {
                publicKey: publicKey,
            });
            setStatus("success");
            reset();
            setTimeout(() => setStatus("idle"), 5000);
        } catch (error) {
            console.error("EmailJS Error:", error);
            setStatus("error");
        }
    };

    const renderSubmitContent = () => {
        if (status === "sending") {
            return (
                <>
                    <Loader2 className="animate-spin" size={16} />
                    <span>Sending message...</span>
                </>
            );
        }
        if (status === "success") {
            return (
                <>
                    <CheckCircle2 size={16} />
                    <span>Message delivered!</span>
                </>
            );
        }
        return (
            <>
                <Send size={15} />
                <span>Send Message</span>
            </>
        );
    };

    return (
        <Section
            id="contact"
            className="py-28 sm:py-36 relative overflow-hidden border-t border-stone-200/80 dark:border-stone-800/80"
        >
            <div className="max-w-5xl mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="mb-14 text-center sm:text-left">
                    <motion.div
                        initial={{opacity: 0, y: 12}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-100 dark:bg-[#1c1917] border border-stone-200/80 dark:border-stone-800/80 text-stone-600 dark:text-stone-400 text-xs font-mono font-medium uppercase tracking-wider mb-4"
                    >
                        <Sparkles size={13} className="text-indigo-500" />
                        <span>Contact</span>
                    </motion.div>
                    <motion.h2
                        initial={{opacity: 0, y: 16}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-stone-900 dark:text-[#fafaf9]"
                    >
                        Let&apos;s build together.
                    </motion.h2>
                    <motion.p
                        initial={{opacity: 0, y: 16}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{delay: 0.1}}
                        className="mt-3 text-base sm:text-lg text-stone-600 dark:text-stone-400 max-w-2xl font-normal leading-relaxed"
                    >
                        Whether you have an engineering challenge, research discussion, or technical opportunity — my inbox is always open.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Contact Channels (lg:col-span-5) */}
                    <motion.div
                        initial={{opacity: 0, x: -16}}
                        whileInView={{opacity: 1, x: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.4}}
                        className="lg:col-span-5 space-y-4"
                    >
                        <ContactInfoItem
                            icon={<Mail size={18} />}
                            label="Primary Email"
                            value="shubhamxgupta1@gmail.com"
                            href="mailto:shubhamxgupta1@gmail.com"
                            highlight
                        />
                        <ContactInfoItem
                            icon={<MapPin size={18} />}
                            label="Location Base"
                            value="Jaipur / Bangalore, India"
                            href="https://maps.app.goo.gl/WqGXgfNHutuimL9o9"
                        />
                        <ContactInfoItem
                            icon={<Phone size={18} />}
                            label="Direct Line"
                            value="+91 7014524673"
                            href="tel:+917014524673"
                        />
                    </motion.div>

                    {/* Clean Form Card (lg:col-span-7) */}
                    <motion.div
                        initial={{opacity: 0, x: 16}}
                        whileInView={{opacity: 1, x: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.4}}
                        className="lg:col-span-7"
                    >
                        <div className="p-6 sm:p-8 rounded-3xl bg-stone-100/70 dark:bg-[#1c1917]/80 backdrop-blur-xl border border-stone-200/80 dark:border-stone-800/80 shadow-xs">
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label
                                            htmlFor="contact-name"
                                            className="block text-xs font-mono font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-1.5"
                                        >
                                            Name
                                        </label>
                                        <input
                                            id="contact-name"
                                            {...register("name", {required: "Name is required"})}
                                            className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-[#292524] border border-stone-200/80 dark:border-stone-700/80 focus:border-indigo-500 dark:focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all placeholder:text-stone-400 text-stone-900 dark:text-[#fafaf9] text-sm"
                                            placeholder="Jane Doe"
                                        />
                                        {errors.name && (
                                            <span className="text-rose-500 text-xs mt-1 block">
                                                {errors.name.message}
                                            </span>
                                        )}
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="contact-email"
                                            className="block text-xs font-mono font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-1.5"
                                        >
                                            Email
                                        </label>
                                        <input
                                            id="contact-email"
                                            type="email"
                                            {...register("email", {
                                                required: "Email is required",
                                                pattern: {
                                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                    message: "Invalid email address",
                                                },
                                            })}
                                            className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-[#292524] border border-stone-200/80 dark:border-stone-700/80 focus:border-indigo-500 dark:focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all placeholder:text-stone-400 text-stone-900 dark:text-[#fafaf9] text-sm"
                                            placeholder="jane@company.com"
                                        />
                                        {errors.email && (
                                            <span className="text-rose-500 text-xs mt-1 block">
                                                {errors.email.message}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                <div>
                                    <label
                                        htmlFor="contact-subject"
                                        className="block text-xs font-mono font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-1.5"
                                    >
                                        Subject
                                    </label>
                                    <input
                                        id="contact-subject"
                                        {...register("subject", {required: "Subject is required"})}
                                        className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-[#292524] border border-stone-200/80 dark:border-stone-700/80 focus:border-indigo-500 dark:focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all placeholder:text-stone-400 text-stone-900 dark:text-[#fafaf9] text-sm"
                                        placeholder="Engineering Role / Project Collaboration"
                                    />
                                    {errors.subject && (
                                        <span className="text-rose-500 text-xs mt-1 block">
                                            {errors.subject.message}
                                        </span>
                                    )}
                                </div>

                                <div>
                                    <label
                                        htmlFor="contact-message"
                                        className="block text-xs font-mono font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-1.5"
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        id="contact-message"
                                        rows={4}
                                        {...register("message", {required: "Message is required"})}
                                        className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-[#292524] border border-stone-200/80 dark:border-stone-700/80 focus:border-indigo-500 dark:focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all placeholder:text-stone-400 text-stone-900 dark:text-[#fafaf9] text-sm resize-none"
                                        placeholder="Tell me about what you're building..."
                                    />
                                    {errors.message && (
                                        <span className="text-rose-500 text-xs mt-1 block">
                                            {errors.message.message}
                                        </span>
                                    )}
                                </div>

                                <button
                                    type="submit"
                                    disabled={status === "sending"}
                                    className={clsx(
                                        "w-full py-3 px-6 rounded-xl font-medium text-sm transition-all duration-200 flex items-center justify-center gap-2 active:scale-[0.98] cursor-pointer",
                                        status === "success"
                                            ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/25"
                                            : status === "error"
                                                ? "bg-rose-600 text-white shadow-md shadow-rose-600/25"
                                                : "bg-indigo-600 hover:bg-indigo-500 text-white shadow-md shadow-indigo-600/25"
                                    )}
                                >
                                    {renderSubmitContent()}
                                </button>
                            </form>
                        </div>
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
                             highlight = false,
                         }: Readonly<{
    icon: React.ReactNode;
    label: string;
    value: string;
    href: string;
    highlight?: boolean;
}>) {
    return (
        <a
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            className={clsx(
                "p-5 rounded-2xl border transition-all duration-200 flex items-center justify-between group block",
                highlight
                    ? "bg-indigo-50/50 dark:bg-indigo-950/25 border-indigo-200/80 dark:border-indigo-900/40 hover:border-indigo-400 dark:hover:border-indigo-700"
                    : "bg-stone-100/70 dark:bg-[#1c1917]/80 border-stone-200/80 dark:border-stone-800/80 hover:border-stone-300 dark:hover:border-stone-700"
            )}
        >
            <div className="flex items-center gap-3.5">
                <div
                    className={clsx(
                        "w-10 h-10 rounded-xl flex items-center justify-center border shadow-xs transition-colors",
                        highlight
                            ? "bg-indigo-500 text-white border-indigo-400"
                            : "bg-white dark:bg-[#292524] text-stone-600 dark:text-stone-300 border-stone-200/80 dark:border-stone-700/80"
                    )}
                >
                    {icon}
                </div>
                <div>
                    <div className="text-[11px] font-mono font-medium text-stone-500 dark:text-stone-400 uppercase tracking-wider">
                        {label}
                    </div>
                    <div className="text-sm font-semibold text-stone-900 dark:text-stone-100">
                        {value}
                    </div>
                </div>
            </div>
            <ArrowUpRight
                size={16}
                className="text-stone-400 group-hover:text-indigo-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
            />
        </a>
    );
}
