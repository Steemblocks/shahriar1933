"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Hand } from "lucide-react";
import { motion, Variants } from "framer-motion";

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] },
    },
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9, rotate: -5 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 1, ease: [0.2, 0.65, 0.3, 0.9], delay: 0.2 },
    },
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-40 pb-20 overflow-hidden">
      {/* Grid background */}
      <div className="hero-grid" />

      <div className="relative z-10 w-full max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0 items-center justify-items-center">
        <motion.div
          className="text-center md:text-left order-2 md:order-1 will-change-transform pr-0 md:pr-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={itemVariants}
            className="font-[family-name:var(--font-outfit)] font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 sm:mb-8 leading-tight tracking-tight shadow-[0_0_80px_rgba(255,255,255,0.1)]"
          >
            Hi, I&apos;m{" "}
            <span className="text-gradient drop-shadow-[0_0_30px_rgba(49,120,198,0.4)]">
              Shahriar
            </span>{" "}
            <Hand className="inline-block w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 ml-3 text-[var(--primary)] animate-pulse drop-shadow-[0_0_15px_rgba(49,120,198,0.8)]" />
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl md:text-2xl text-[var(--text-secondary)] mb-8 sm:mb-12 leading-relaxed max-w-2xl mx-auto md:mx-0"
          >
            Full-Stack Developer • Prompt Engineer • Web Developer • Blockchain
            Specialist
            <br className="mt-4" />
            Building innovative AI-powered applications and contributing to the
            Steem blockchain ecosystem.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center md:justify-start items-center"
          >
            <Link
              href="#projects"
              className="group min-w-[180px] inline-flex items-center justify-center gap-2 px-8 py-4 font-[family-name:var(--font-outfit)] font-semibold text-base sm:text-lg rounded-full bg-white text-[var(--bg-dark)] transition-all duration-300 hover:bg-gradient-to-r hover:from-[var(--primary)] hover:to-[var(--secondary)] hover:text-white hover:-translate-y-1 hover:shadow-xl hover:shadow-[var(--primary-glow)] relative overflow-hidden"
              suppressHydrationWarning
            >
              <span className="relative z-10">Explore My Work</span>
            </Link>
            <Link
              href="#contact"
              className="min-w-[180px] inline-flex items-center justify-center gap-2 px-8 py-4 font-[family-name:var(--font-outfit)] font-semibold text-base sm:text-lg rounded-full border border-[var(--glass-border)] text-white transition-all duration-300 hover:border-[var(--primary)] hover:text-[var(--primary)] hover:-translate-y-1 hover:bg-white/[0.03]"
              suppressHydrationWarning
            >
              Contact Me
            </Link>
          </motion.div>
        </motion.div>

        {/* Profile Image Column */}
        <motion.div
          className="flex justify-center items-center order-1 md:order-2 will-change-transform perspective-1000"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-[340px] lg:h-[340px] rounded-full overflow-hidden border-4 border-white/20 shadow-2xl group flex items-center justify-center bg-[#d13c36]">
            <Image
              src="/profile.png"
              alt="Shahriar"
              fill
              className="object-contain rounded-full will-change-transform relative z-10"
              priority
              sizes="(max-width: 768px) 256px, (max-width: 1024px) 288px, 340px"
            />

            {/* Floating Tech Bubbles */}
            <div className="absolute inset-0 z-0 pointer-events-none">
              {[
                {
                  name: "React",
                  color: "#61DAFB",
                  icon: (
                    <g fill="none" stroke="currentColor" strokeWidth="1.5">
                      <circle cx="12" cy="12" r="2.5" />
                      <ellipse
                        cx="12"
                        cy="12"
                        rx="9"
                        ry="3.5"
                        transform="rotate(0 12 12)"
                      />
                      <ellipse
                        cx="12"
                        cy="12"
                        rx="9"
                        ry="3.5"
                        transform="rotate(60 12 12)"
                      />
                      <ellipse
                        cx="12"
                        cy="12"
                        rx="9"
                        ry="3.5"
                        transform="rotate(120 12 12)"
                      />
                    </g>
                  ),
                  p: "top-8 left-8",
                },
                {
                  name: "Next.js",
                  color: "#ffffff",
                  icon: (
                    <path d="M12 2C6.5 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4 14h-1.5l-3-4v4H10V8h1.5l3 4V8H16v8z" />
                  ),
                  p: "top-12 right-12",
                },
                {
                  name: "TypeScript",
                  color: "#3178C6",
                  icon: (
                    <path d="M1.125 0C0.502 0 0 0.502 0 1.125v21.75C0 23.498 0.502 24 1.125 24h21.75c0.623 0 1.125-0.502 1.125-1.125V1.125C24 0.502 23.498 0 22.875 0H1.125zM15.563 16.804c0 1.765-1.554 2.932-3.832 2.932-1.343 0-2.455-0.344-3.197-0.796v-3.072l0.208-0.09c0.916 0.61 1.936 1.053 2.903 1.053 0.65 0 0.999-0.233 0.999-0.903 0-1.285-4.226-1.178-4.226-4.577 0-1.604 1.348-2.825 3.522-2.825 1.141 0 2.057 0.264 2.825 0.732v2.868l-0.18.096c-0.669-0.457-1.636-0.87-2.607-0.87-0.697 0-0.903 0.322-0.903 0.704 0 1.306 4.296 1.259 4.296 4.755zM21.577 19.53h-3.322v-9.36h-2.181V7.575h7.683v2.595h-2.181v9.36z" />
                  ),
                  p: "bottom-16 left-8",
                },
                {
                  name: "Node.js",
                  color: "#339933",
                  icon: <path d="M12 2l9 5v10l-9 5-9-5V7z" />,
                  p: "bottom-12 right-12",
                },
                {
                  name: "Steem",
                  color: "#6267FF",
                  icon: <path d="M12 2L4 7v10l8 5 8-5V7z" />,
                  p: "top-2 left-1/2 -translate-x-1/2",
                },
                {
                  name: "Rust",
                  color: "#DEA584",
                  icon: (
                    <path d="M12 2C6.5 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zm-1-13h2v14h-2zm-5 5h12v2H6z" />
                  ),
                  p: "bottom-4 left-1/2 -translate-x-1/2",
                },
                {
                  name: "Docker",
                  color: "#2496ED",
                  icon: (
                    <path d="M4 11h3v3H4zm4 0h3v3H8zm4 0h3v3h-3zm4 0h3v3h-3zm-8-4h3v3H8zm4 0h3v3h-3zM2 15h20v4H2z" />
                  ),
                  p: "top-1/2 -right-6",
                },
                {
                  name: "Git",
                  color: "#F05032",
                  icon: (
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 6h2v4h3l-4 4-4-4h3V8z" />
                  ),
                  p: "top-1/2 -left-6",
                },
                {
                  name: "PostgreSQL",
                  color: "#336791",
                  icon: (
                    <path d="M12 3c-4.42 0-8 1.79-8 4s3.58 4 8 4 8-1.79 8-4-3.58-4-8-4zM4 9v4c0 2.21 3.58 4 8 4s8-1.79 8-4V9c0 2.21-3.58 4-8 4s-8-1.79-8-4zm0 6v4c0 2.21 3.58 4 8 4s8-1.79 8-4v-4c0 2.21-3.58 4-8 4s-8-1.79-8-4z" />
                  ),
                  p: "top-20 -left-2",
                },
                {
                  name: "Redis",
                  color: "#DC382D",
                  icon: (
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 16c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z" />
                  ),
                  p: "bottom-20 -right-2",
                },
              ].map((tech, i) => (
                <FloatingTech key={tech.name} tech={tech} index={i} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function FloatingTech({ tech, index }: { tech: any; index: number }) {
  const [randomOffsets, setRandomOffsets] = useState({
    x1: 0,
    y1: 0,
    x2: 0,
    y2: 0,
    r1: 0,
    r2: 0,
    duration: 4,
  });

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Generate random values only on client
    setRandomOffsets({
      x1: (Math.random() - 0.5) * 40,
      y1: (Math.random() - 0.5) * 40,
      x2: (Math.random() - 0.5) * 40,
      y2: (Math.random() - 0.5) * 40,
      r1: (Math.random() - 0.5) * 20,
      r2: (Math.random() - 0.5) * 20,
      duration: 3 + Math.random() * 4,
    });
  }, []);

  if (!isMounted) {
    // Initial static render to match server
    return (
      <div
        className={`absolute ${tech.p} z-0 w-10 h-10 sm:w-12 sm:h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 shadow-lg`}
      >
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5 sm:w-6 sm:h-6"
          style={{ color: tech.color }}
        >
          {tech.icon}
        </svg>
      </div>
    );
  }

  return (
    <motion.div
      className={`absolute ${tech.p} z-0 w-10 h-10 sm:w-12 sm:h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 shadow-lg`}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 1, 1, 1], // Fade in then stay
        scale: [0.5, 1, 1, 1],
        x: [0, randomOffsets.x1, randomOffsets.x2, 0],
        y: [0, randomOffsets.y1, randomOffsets.y2, 0],
        rotate: [0, randomOffsets.r1, randomOffsets.r2, 0],
      }}
      transition={{
        opacity: { duration: 0.5, delay: index * 0.1 },
        scale: { duration: 0.5, delay: index * 0.1 },
        default: {
          duration: randomOffsets.duration,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
          delay: index * 0.2, // Stagger the start of movement
        },
      }}
    >
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 h-5 sm:w-6 sm:h-6"
        style={{ color: tech.color }}
      >
        {tech.icon}
      </svg>
    </motion.div>
  );
}
