import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { FooterSignature } from "@/components/ui/FooterSignature";

export default function Footer() {
  return (
    <footer className="bg-slate-50 dark:bg-slate-900 pt-12 pb-40 border-t border-slate-200 dark:border-slate-800 overflow-hidden relative">
      <div className="container mx-auto px-6 flex flex-col items-center gap-6">
        {/* Massive Signature with Hover Effect */}
        <FooterSignature />

        <div className="flex gap-6 z-10">
          <SocialLink
            href="https://github.com/ShubhamxGupta"
            icon={<Github size={20} />}
            label="GitHub profile"
          />
          <SocialLink
            href="https://www.linkedin.com/in/shubhamxgupta/"
            icon={<Linkedin size={20} />}
            label="LinkedIn profile"
          />
          <SocialLink
            href="https://x.com/ShubhamxGupta1"
            icon={<Twitter size={20} />}
            label="Twitter / X profile"
          />
          <SocialLink
            href="mailto:shubhamxgupta1@gmail.com"
            icon={<Mail size={20} />}
            label="Email Shubham Gupta"
          />
        </div>
        <p className="text-slate-500 text-sm text-center z-10">
          © {new Date().getFullYear()} Shubham Gupta. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

function SocialLink({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:shadow-md transition-all"
    >
      {icon}
    </a>
  );
}
