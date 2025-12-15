import Link from "next/link";
import { Hand } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 overflow-hidden">
            {/* Grid background */}
            <div className="hero-grid" />

            <div className="relative z-10 text-center w-full max-w-[1400px] mx-auto">
                <h1 className="font-[family-name:var(--font-outfit)] font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 sm:mb-8 leading-tight tracking-tight">
                    Hi, I&apos;m <span className="text-gradient">Shahriar</span> <Hand className="inline-block w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 ml-3 text-[var(--primary)] animate-pulse" />
                </h1>

                <p className="text-lg sm:text-xl md:text-2xl text-[var(--text-secondary)] w-full max-w-4xl mx-auto mb-8 sm:mb-12 leading-relaxed px-4">
                    Full-Stack Developer • Prompt Engineer • Blockchain Specialist
                    <br className="mt-4" />
                    Building innovative AI-powered applications and contributing to the Steem blockchain ecosystem.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
                    <Link
                        href="#projects"
                        className="min-w-[180px] inline-flex items-center justify-center gap-2 px-8 py-4 font-[family-name:var(--font-outfit)] font-semibold text-base sm:text-lg rounded-full bg-white text-[var(--bg-dark)] transition-all duration-300 hover:bg-gradient-to-r hover:from-[var(--primary)] hover:to-[var(--secondary)] hover:text-white hover:-translate-y-1 hover:shadow-xl hover:shadow-[var(--primary-glow)]"
                    >
                        Explore My Work
                    </Link>
                    <Link
                        href="#contact"
                        className="min-w-[180px] inline-flex items-center justify-center gap-2 px-8 py-4 font-[family-name:var(--font-outfit)] font-semibold text-base sm:text-lg rounded-full border border-[var(--glass-border)] text-white transition-all duration-300 hover:border-[var(--primary)] hover:text-[var(--primary)] hover:-translate-y-1 hover:bg-white/[0.03]"
                    >
                        Contact Me
                    </Link>
                </div>
            </div>
        </section>
    );
}
