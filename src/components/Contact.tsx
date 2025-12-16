"use client";

import Link from "next/link";
import { Mail, Github, Phone } from "lucide-react";
import { motion } from "framer-motion";

const contacts = [
  {
    icon: <Mail className="w-8 h-8 sm:w-10 sm:h-10 text-[var(--primary)]" />,
    label: "Email",
    value: "steemblocks@gmail.com",
    href: "mailto:steemblocks@gmail.com",
  },
  {
    icon: <Github className="w-8 h-8 sm:w-10 sm:h-10 text-[var(--primary)]" />,
    label: "GitHub",
    value: "@Steemblocks",
    href: "https://github.com/Steemblocks",
    external: true,
  },
  {
    icon: <Phone className="w-8 h-8 sm:w-10 sm:h-10 text-[var(--primary)]" />,
    label: "WhatsApp",
    value: "+880 1749 081577",
    href: "https://wa.me/8801749081577",
    external: true,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 px-4">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="font-[family-name:var(--font-outfit)] font-bold text-2xl sm:text-3xl md:text-4xl text-center mb-3 sm:mb-4">
            Get In Touch
          </h2>
          <p className="text-center text-sm sm:text-base text-[var(--text-muted)] max-w-xl mx-auto mb-8 sm:mb-12 px-2">
            Feel free to reach out for collaborations, projects, or just a
            friendly chat
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
          {contacts.map((contact, index) => (
            <motion.div
              key={contact.label}
              className="glass-card p-5 sm:p-6 flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4 text-center sm:text-left"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                ease: "easeOut",
                delay: index * 0.05,
              }}
            >
              <span className="text-3xl sm:text-4xl flex-shrink-0">
                {contact.icon}
              </span>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">
                  {contact.label}
                </span>
                <Link
                  href={contact.href}
                  target={contact.external ? "_blank" : undefined}
                  rel={contact.external ? "noopener noreferrer" : undefined}
                  className="text-sm sm:text-base font-medium text-white hover:text-[var(--primary)] transition-colors duration-200"
                >
                  {contact.value}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
