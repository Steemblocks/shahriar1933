"use client";

import Link from "next/link";
import { Star, GitPullRequest, CircleCheck, ExternalLink } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { motion } from "framer-motion";

interface Project {
    title: string;
    description: string;
    links: { label: string; href: string; primary?: boolean }[];
    badge?: { icon: React.ReactNode; text: string; type: "featured" | "contribution" };
    stats?: React.ReactNode[];
    type?: "featured" | "contribution" | "normal";
}

const projects: Project[] = [
    {
        title: "Steem Blocks",
        description:
            "Steem-based Blockchain Explorer v5 — A comprehensive blockchain explorer for the Steem network with advanced analytics and real-time data visualization.",
        links: [{ label: "Visit App", href: "https://steemblocks.com", primary: true }],
        badge: { icon: <Star className="w-3 h-3" />, text: "Featured", type: "featured" },
        type: "featured",
    },
    {
        title: "AuthSteem — Vue 3 Migration",
        description:
            "Contributed to the open-source AuthSteem signer app by migrating the entire codebase from Vue 2 to Vue 3, enhancing performance and maintainability.",
        links: [
            { label: "View Pull Request", href: "https://github.com/steemfans/authsteem/pull/4", primary: true },
            { label: "Visit App", href: "https://auth.steem.fans" },
        ],
        badge: { icon: <GitPullRequest className="w-3 h-3" />, text: "Contribution", type: "contribution" },
        stats: ["Vue 2 → Vue 3", "Refactoring", <span key="merged" className="flex items-center gap-1"><CircleCheck className="w-3 h-3" /> Merged</span>],
        type: "contribution",
    },
    {
        title: "Steem-Burn-Pool",
        description: "React dashboard for tracking STEEM burn analytics with real-time updates and visualizations.",
        links: [
            { label: "Visit App", href: "https://burn.steemblocks.com/", primary: true },
            { label: "GitHub", href: "https://github.com/Steemblocks/Steem-Burn-Pool" },
        ],
    },
    {
        title: "Mobile Responsiveness Fixes — steem.com",
        description:
            "Fixed critical mobile UX issues for Steemit's official website including header overlap, mobile menu improvements, and responsive grid layouts.",
        links: [{ label: "View Pull Request", href: "https://github.com/steemit/steem.com/pull/2", primary: true }],
        badge: { icon: <GitPullRequest className="w-3 h-3" />, text: "Contribution", type: "contribution" },
        stats: ["+453 additions", "-427 deletions", <span key="merged" className="flex items-center gap-1"><CircleCheck className="w-3 h-3" /> Merged</span>],
        type: "contribution",
    },
    {
        title: "Steem-Local-Broadcast",
        description: "Steem Blockchain local broadcast tool using Steem-js library.",
        links: [{ label: "GitHub", href: "https://github.com/Steemblocks/Steem-Local-Broadcast", primary: true }],
    },
    {
        title: "Steem-WebSocket-Bridge-v2",
        description: "Lightweight WebSocket client/server for interacting with the Steem blockchain.",
        links: [{ label: "GitHub", href: "https://github.com/Steemblocks/Steem-WebSocket-Bridge-v2", primary: true }],
    },
    {
        title: "Steem-MissedBlocks-Telegram-Bot",
        description: "Witness watchdog bot for Steem with Telegram alerts for missed blocks.",
        links: [{ label: "GitHub", href: "https://github.com/Steemblocks/Steem-MissedBlocks-Telegram-Bot", primary: true }],
    },
    {
        title: "steem-pricefeed-docker",
        description: "Price feed publisher for Steem witnesses with Docker setup.",
        links: [{ label: "GitHub", href: "https://github.com/Steemblocks/steem-pricefeed-docker", primary: true }],
    },
    {
        title: "SteemBlocks (Original)",
        description: "The original Steem-based Blockchain Explorer project.",
        links: [{ label: "GitHub", href: "https://github.com/Steemblocks/SteemBlocks", primary: true }],
    },
];



function ProjectCard({ project, index }: { project: Project; index: number }) {
    const cardClass =
        project.type === "featured"
            ? "featured-card"
            : project.type === "contribution"
                ? "contribution-card"
                : "";

    const badgeClass =
        project.badge?.type === "featured"
            ? "bg-[rgba(245,158,11,0.1)] text-[var(--warning)] border-[rgba(245,158,11,0.2)]"
            : "bg-[rgba(34,197,94,0.1)] text-[var(--success)] border-[rgba(34,197,94,0.2)]";

    return (
        <motion.article
            className={`glass-card ${cardClass} p-5 sm:p-6 flex flex-col h-full ${project.type === "featured" ? "col-span-full" : ""}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
                y: -10,
                backgroundColor: "rgba(10, 10, 18, 0.9)",
                borderColor: "rgba(255, 255, 255, 0.2)",
                transition: { type: "spring", stiffness: 300, damping: 20 }
            }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94], delay: index * 0.1 }}
            style={{ transition: "border-color 0.3s ease, background-color 0.3s ease" }} // Allow CSS to handle colors if needed, but FM handles transform
        >
            {project.badge && (
                <span
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] sm:text-xs font-bold uppercase tracking-wide rounded-full border w-fit mb-3 ${badgeClass}`}
                >
                    <span>{project.badge.icon}</span>
                    <span>{project.badge.text}</span>
                </span>
            )}

            <h3 className="font-[family-name:var(--font-outfit)] font-semibold text-base sm:text-lg md:text-xl text-white mb-2">
                {project.title}
            </h3>

            <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed flex-grow mb-3">
                {project.description}
            </p>

            {project.stats && (
                <div className="flex flex-wrap gap-2 mb-3">
                    {project.stats.map((stat, i) => (
                        <span
                            key={i}
                            className={`text-[10px] sm:text-xs font-medium px-2 py-1 rounded-md ${i === project.stats!.length - 1
                                ? "bg-[rgba(34,197,94,0.1)] text-[var(--success)]"
                                : "bg-[rgba(255,255,255,0.05)] text-[var(--text-muted)]"
                                }`}
                        >
                            {stat}
                        </span>
                    ))}
                </div>
            )}

            <div className="flex flex-wrap gap-3 mt-auto pt-2">
                {project.links.map((link, i) => (
                    <Link
                        key={i}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-xs sm:text-sm font-semibold transition-colors duration-200 hover:underline hover:underline-offset-4 ${link.primary ? "text-[var(--primary)]" : "text-[var(--text-muted)] hover:text-[var(--text-secondary)]"
                            }`}
                    >
                        {link.label} <ExternalLink className="w-3 h-3 inline ml-0.5" />
                    </Link>
                ))}
            </div>
        </motion.article>
    );
}

export default function Projects() {
    return (
        <section id="projects" className="py-16 sm:py-20 md:py-24 px-4">
            <div className="max-w-[1200px] mx-auto">
                <h2 className="font-[family-name:var(--font-outfit)] font-bold text-2xl sm:text-3xl md:text-4xl text-center mb-3 sm:mb-4">
                    Featured Projects
                </h2>
                <p className="text-center text-sm sm:text-base text-[var(--text-muted)] max-w-xl mx-auto mb-8 sm:mb-12 px-2">
                    Explore my work in blockchain technology, web development, and open-source contributions
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.title} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
