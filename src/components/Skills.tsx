"use client";

import { useInView } from "@/hooks/useInView";
import { Bot, Code2, Terminal, Cpu, Search, Bug, Zap, GitPullRequest, Wrench, Layers, TestTube, Gauge, FileText, ShieldCheck, MessageSquareCode } from "lucide-react";

export default function Skills() {
    const { ref, isInView } = useInView({ threshold: 0.2 });

    const aiTools = [
        { name: "Antigravity", role: "Advanced Agentic Coding", icon: <Bot className="w-6 h-6 text-blue-400" /> },
        { name: "Cursor", role: "AI-First Code Editor", icon: <Terminal className="w-6 h-6 text-white" /> },
        { name: "GitHub Copilot", role: "Intelligent Autocomplete", icon: <Cpu className="w-6 h-6 text-purple-400" /> },
    ];

    const workflows = [
        {
            title: "Prompt Engineering",
            description: "Crafting precise context-aware prompts to guide AI agents for optimal code generation.",
            icon: <MessageSquareCode className="w-6 h-6 text-purple-400" />,
        },
        {
            title: "Code Refactoring",
            description: "Modernizing legacy codebases and optimizing performance through intelligent restructuring.",
            icon: <Code2 className="w-6 h-6 text-[var(--primary)]" />,
        },
        {
            title: "Smart Debugging",
            description: "Diagnosing complex issues and applying instant fixes to restore functionality and stability.",
            icon: <Wrench className="w-6 h-6 text-orange-400" />,
        },
        {
            title: "Feature Implementation",
            description: "Accelerating development cycles by rapidly scaffolding and integrating new application features.",
            icon: <Layers className="w-6 h-6 text-green-400" />,
        },
        {
            title: "Automated Review",
            description: "Deep static analysis and logic verification to ensure best practices and security.",
            icon: <Search className="w-6 h-6 text-[var(--secondary)]" />,
        },
        {
            title: "Test Generation",
            description: "Generating comprehensive unit and integration tests to ensure code reliability.",
            icon: <TestTube className="w-6 h-6 text-pink-400" />,
        },
        {
            title: "Performance Tuning",
            description: "Identifying bottlenecks and enhancing algorithmic efficiency for maximum speed.",
            icon: <Gauge className="w-6 h-6 text-cyan-400" />,
        },
        {
            title: "Documentation",
            description: "Auto-generating technical documentation and strengthening type safety definitions.",
            icon: <FileText className="w-6 h-6 text-gray-300" />,
        },
        {
            title: "Security Hardening",
            description: "Proactively identifying vulnerabilities and implementing security best practices.",
            icon: <ShieldCheck className="w-6 h-6 text-red-500" />,
        },
    ];

    return (
        <section id="skills" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            <div className="max-w-[1400px] mx-auto">
                <div ref={ref} className={`transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
                    <h2 className="font-[family-name:var(--font-outfit)] font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center mb-16">
                        AI-Powered <span className="text-gradient">Workflow</span>
                    </h2>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                        {/* AI Agents Column */}
                        <div className="lg:col-span-1 space-y-6">
                            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                <Bot className="w-6 h-6 text-[var(--primary)]" />
                                AI Agents
                            </h3>
                            <div className="space-y-4">
                                {aiTools.map((tool) => (
                                    <div key={tool.name} className="glass-card p-4 rounded-xl flex items-center gap-4 hover:border-[var(--primary)]/30 transition-colors">
                                        <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                                            {tool.icon}
                                        </div>
                                        <div>
                                            <div className="font-bold text-lg text-white">{tool.name}</div>
                                            <div className="text-sm text-[var(--text-secondary)]">{tool.role}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Capabilities Grid */}
                        <div className="lg:col-span-2">
                            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                <GitPullRequest className="w-6 h-6 text-[var(--secondary)]" />
                                Engineering Capabilities
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {workflows.map((item) => (
                                    <div key={item.title} className="glass-card p-6 rounded-xl hover:bg-white/[0.03] transition-colors group">
                                        <div className="mb-4 w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                                            {item.icon}
                                        </div>
                                        <h4 className="font-bold text-lg text-white mb-2">{item.title}</h4>
                                        <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
