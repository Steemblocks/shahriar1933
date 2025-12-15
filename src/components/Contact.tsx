"use client";

import Link from "next/link";
import { Mail, Github } from "lucide-react";
import { useInView } from "@/hooks/useInView";

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
];

export default function Contact() {
    const { ref, isInView } = useInView({ threshold: 0.2 });

    return (
        <section id="contact" className="py-16 sm:py-20 md:py-24 px-4">
            <div className="max-w-[1200px] mx-auto">
                <h2 className="font-[family-name:var(--font-outfit)] font-bold text-2xl sm:text-3xl md:text-4xl text-center mb-3 sm:mb-4">
                    Get In Touch
                </h2>
                <p className="text-center text-sm sm:text-base text-[var(--text-muted)] max-w-xl mx-auto mb-8 sm:mb-12 px-2">
                    Feel free to reach out for collaborations, projects, or just a friendly chat
                </p>

                <div
                    ref={ref}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-2xl mx-auto"
                >
                    {contacts.map((contact, index) => (
                        <div
                            key={contact.label}
                            className={`glass-card p-5 sm:p-6 flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4 text-center sm:text-left transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                                }`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            <span className="text-3xl sm:text-4xl flex-shrink-0">{contact.icon}</span>
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
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
