"use client";

import { useInView } from "@/hooks/useInView";

export default function About() {
    const { ref, isInView } = useInView({ threshold: 0.2 });

    return (
        <section id="about" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-[1400px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Text Content */}
                    <div ref={ref} className={`transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
                        <h2 className="font-[family-name:var(--font-outfit)] font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 sm:mb-8">
                            About <span className="text-gradient">Me</span>
                        </h2>

                        <div className="space-y-6 text-lg sm:text-xl text-[var(--text-secondary)] leading-relaxed">
                            I&apos;m a passionate <span className="text-white font-medium">Full-Stack Developer</span> & <span className="text-white font-medium">Prompt Engineer</span> specializing in
                            blockchain technology and modern web applications. With deep expertise in TypeScript, React, and
                            Steem blockchain development, I create innovative solutions that bridge traditional web development
                            with decentralized technologies and AI-driven workflows.
                            <p>
                                Currently focused on building tools and applications for the Steem ecosystem, I contribute to open-source
                                projects and develop blockchain explorers, analytical dashboards, and developer tools that enhance the
                                blockchain experience for everyone.
                            </p>
                            <p>
                                Beyond coding, I am an active community member, constantly learning and sharing knowledge to help
                                grow the decentralized web.
                            </p>
                        </div>

                        {/* Tech Stack / Stats */}
                        <div className="mt-10 sm:mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
                            {[
                                { label: "Experience", value: "3+ Years" },
                                { label: "Projects", value: "20+" },
                                { label: "Contributions", value: "500+" },
                                { label: "Clients", value: "Global" }
                            ].map((stat, i) => (
                                <div key={i} className="glass-card p-4 rounded-xl text-center hover:bg-[var(--primary)]/5 transition-colors">
                                    <div className="font-bold text-xl sm:text-2xl text-white mb-1">{stat.value}</div>
                                    <div className="text-sm text-[var(--text-muted)]">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Visual / Card Side */}
                    <div className={`glass-card p-1 rounded-2xl transform transition-all duration-1000 delay-300 ${isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}>
                        <div className="bg-[var(--bg-deep)]/50 rounded-xl p-8 sm:p-12 h-full flex flex-col justify-center gap-8 relative overflow-hidden">
                            {/* Decorative background elements */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--primary)]/10 rounded-full blur-3xl -mr-32 -mt-32" />
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[var(--secondary)]/10 rounded-full blur-3xl -ml-32 -mb-32" />

                            <div className="relative z-10">
                                <h3 className="font-[family-name:var(--font-outfit)] font-bold text-2xl text-white mb-6">Technical Arsenal</h3>
                                <div className="flex flex-wrap gap-3">
                                    {[
                                        { name: "TypeScript", color: "#3178C6", path: "M3.7 3.7h16.6v16.6H3.7zM14 15h1.5v-3.5h1.2v-1.2h-3.9v1.2h1.2zm-2.8 0h1.5v-1.1c0-.4 0-.7-.3-.8-.3-.2-.7-.1-.9.1v-1.2c.5-.3 1.2-.4 1.8-.1.8.3 1.1 1 1 1.7v2.9h-1.5v-.5c-.3.4-.8.6-1.3.6-.9 0-1.5-.6-1.5-1.5 0-1 .7-1.5 1.8-1.5h1.4v-.2c0-.4-.2-.6-.7-.6-.4 0-.8.1-1.2.3v1.1z" },
                                        { name: "React", color: "#61DAFB", path: "M12 2.5c-5.5 0-7.3 3.6-7.3 5.4 0 1.9 1.8 5.6 7.3 5.6 5.5 0 7.3-3.7 7.3-5.6 0-1.8-1.8-5.4-7.3-5.4m0 9.9c-2.3 0-3.9-1.3-4.7-2.6.7-1.4 2.4-2.7 4.7-2.7 2.3 0 3.9 1.3 4.7 2.6-.7 1.4-2.4 2.7-4.7 2.7" }, // Simplified atomic shape
                                        { name: "Python", color: "#3776AB", path: "M12 2c-5.5 0-6 2.5-6 2.5v2.5h2.5V5s0-1 1.5-1 1.5.5 1.5 1.5v1h-3c-3 0-4.5 1.5-4.5 4s1.5 4 4.5 4h1.5v-1.5s0-1.5 1.5-1.5 1.5 0 1.5 1.5v1.5h1.5c3 0 4.5-1.5 4.5-4s-1.5-4-4.5-4h-2.5V5c0-3-.5-3-4.5-3z" }, // Conceptual snake shape
                                        { name: "Java", color: "#007396", path: "M5.5 16c1.5 2 7.5 2 9 0M7 10s2-4 6-1" }, // Conceptual cup/coffee
                                        { name: "HTML5", color: "#E34F26", path: "M3 3h18l-2 16-8 2-8-2z" }, // Shield
                                        { name: "Next.js", color: "#ffffff", path: "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4 14h-1.5l-3-4v4H10V8h1.5l3 4V8H16v8z" },
                                        { name: "Node.js", color: "#339933", path: "M12 2l9 5v10l-9 5-9-5V7z" }, // Hexagon
                                        { name: "Tailwind CSS", color: "#38B2AC", path: "M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" }, // Wave
                                        { name: "GraphQL", color: "#E10098", path: "M12 2L4.5 6.3v8.4L12 19l7.5-4.3V6.3L12 2zM12 4.3l5.5 3.2-5.5 3.2-5.5-3.2L12 4.3z" }, // Hexagon subset
                                        { name: "REST API", color: "#FF5733", path: "M4 4h16v16H4zM2 9h20M9 2v20" }, // Generic grid/server
                                        { name: "PostgreSQL", color: "#336791", path: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8 8-8 8zm-1-5h2v-3h3v-2h-3V7h-2v3H8v2h3z" }, // Database
                                        { name: "Redis", color: "#DC382D", path: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 16c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z" }, // Simple DB
                                        { name: "Docker", color: "#2496ED", path: "M4 11h3v3H4zm4 0h3v3H8zm4 0h3v3h-3zm4 0h3v3h-3zm-8-4h3v3H8zm4 0h3v3h-3zM2 15h20v4H2z" }, // Containers
                                        { name: "Git", color: "#F05032", path: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 6h2v4h3l-4 4-4-4h3V8z" }, // Arrow down/branch
                                        { name: "Tauri", color: "#FFC131", path: "M22,6.5H12v15h10V6.5z M2,6h8v16H2V6z M2,2h20v2H2V2z" }, // Conceptual layout/window
                                        { name: "Rust", color: "#DEA584", path: "M12 2C6.5 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zm-1-13h2v14h-2zm-5 5h12v2H6z" }, // Gear/Warning placeholder for Rust (Rust is complex, using generic reliable shape)
                                        { name: "Linux", color: "#FCC624", path: "M4 17l6-6-6-6M12 19h8" }, // Terminal/Console
                                        { name: "Nginx", color: "#009639", path: "M3 3v18h18V3H3zm13.7 14.3h-1.6l-6.4-9v9H7.1V5.7h1.6l6.4 9v-9h1.6v11.6z" }, // Letter N style
                                        { name: "Apache", color: "#D22128", path: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-1-4 4-1 1 4-4 1z" }, // Abstract feather-ish
                                        { name: "Steem", color: "#6267FF", path: "M12 2L4 7v10l8 5 8-5V7z" }, // Hexagon (Steem is also conceptually similar or just use text if icon hard)
                                    ].map((tech) => (
                                        <div key={tech.name} className="group relative flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[var(--primary)]/50 hover:bg-white/[0.08] transition-all duration-300 cursor-default">
                                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" style={{ color: tech.color }}>
                                                {tech.name === "React" ? (
                                                    <g fill="none" stroke="currentColor" strokeWidth="1.5">
                                                        <circle cx="12" cy="12" r="2.5" />
                                                        <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(0 12 12)" />
                                                        <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(60 12 12)" />
                                                        <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(120 12 12)" />
                                                    </g>
                                                ) : tech.name === "Java" ? (
                                                    <path d="M12 18c-2 1-5 1-6-1M12 6c2-1 4 0 4 2s-1 3-3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
                                                ) : tech.name === "Steem" ? (
                                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 15c-1.3 0-2.5-.5-3.5-1.3l.9-1.5c.7.6 1.6 1 2.6 1 1.7 0 2.5-1 2.5-2 0-1.7-2.9-2.1-2.9-3.9 0-1.2.9-2.1 2.5-2.1 1.1 0 2 .5 2.7.9l-.8 1.6c-.6-.4-1.2-.7-1.9-.7-1.1 0-1.8.8-1.8 1.6 0 1.6 2.9 2 2.9 3.9 0 1.5-1.2 2.5-3.2 2.5z" />
                                                ) : tech.name === "REST API" ? (
                                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                                                ) : tech.name === "Tauri" ? (
                                                    <path d="M2.2 4h19.5c.7 0 1.2-.5 1.2-1.2S22.5 1.7 21.8 1.7H2.2c-.7 0-1.2.5-1.2 1.2S1.6 4 2.2 4zM13.6 6.3h-3.2c-.3 0-.6.3-.6.6v14.9c0 .3.3.6.6.6h3.2c.3 0 .6-.3.6-.6V6.9c0-.4-.2-.6-.6-.6zM8.3 6.3H2.8c-.3 0-.6.3-.6.6v8.6c0 .3.3.6.6.6h5.4c.3 0 .6-.3.6-.6V6.9c-.1-.4-.3-.6-.5-.6z" />
                                                ) : tech.name === "Rust" ? (
                                                    <path d="M12 2C6.5 2 2 6.48 2 12s4.5 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zm-1-13h2v14h-2zm-5 5h12v2H6z" />
                                                ) : tech.name === "Linux" ? (
                                                    <path d="M4 17l6-6-6-6M12 19h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
                                                ) : (
                                                    <path d={tech.path} />
                                                )}
                                            </svg>
                                            <span className="text-sm font-medium text-[var(--text-secondary)] group-hover:text-white transition-colors">{tech.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="relative z-10 border-t border-white/10 pt-8">
                                <h3 className="font-[family-name:var(--font-outfit)] font-bold text-2xl text-white mb-6">Focus Areas</h3>
                                <ul className="space-y-4">
                                    {[
                                        "Decentralized Applications (dApps)",
                                        "Blockchain Integrated Solutions (Steem)",
                                        "API Design & Integration",
                                        "High-Performance Web Dashboards",
                                        "Cross-Platform Apps (Tauri/Electron)"
                                    ].map((area, i) => (
                                        <li key={i} className="flex items-center gap-3 text-[var(--text-secondary)]">
                                            <span className="w-2 h-2 rounded-full bg-[var(--secondary)]" />
                                            {area}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
