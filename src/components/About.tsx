"use client";

import { motion, Variants } from "framer-motion";

export default function About() {
  const techStack = [
    {
      name: "TypeScript",
      color: "#3178C6",
      path: "M1.125 0C0.502 0 0 0.502 0 1.125v21.75C0 23.498 0.502 24 1.125 24h21.75c0.623 0 1.125-0.502 1.125-1.125V1.125C24 0.502 23.498 0 22.875 0H1.125zM15.563 16.804c0 1.765-1.554 2.932-3.832 2.932-1.343 0-2.455-0.344-3.197-0.796v-3.072l0.208-0.09c0.916 0.61 1.936 1.053 2.903 1.053 0.65 0 0.999-0.233 0.999-0.903 0-1.285-4.226-1.178-4.226-4.577 0-1.604 1.348-2.825 3.522-2.825 1.141 0 2.057 0.264 2.825 0.732v2.868l-0.18.096c-0.669-0.457-1.636-0.87-2.607-0.87-0.697 0-0.903 0.322-0.903 0.704 0 1.306 4.296 1.259 4.296 4.755zM21.577 19.53h-3.322v-9.36h-2.181V7.575h7.683v2.595h-2.181v9.36z",
    },
    {
      name: "React",
      color: "#61DAFB",
      path: "M12 2.5c-5.5 0-7.3 3.6-7.3 5.4 0 1.9 1.8 5.6 7.3 5.6 5.5 0 7.3-3.7 7.3-5.6 0-1.8-1.8-5.4-7.3-5.4m0 9.9c-2.3 0-3.9-1.3-4.7-2.6.7-1.4 2.4-2.7 4.7-2.7 2.3 0 3.9 1.3 4.7 2.6-.7 1.4-2.4 2.7-4.7 2.7",
    },
    {
      name: "Python",
      color: "#3776AB",
      path: "M12 2c-5.5 0-6 2.5-6 2.5v2.5h2.5V5s0-1 1.5-1 1.5.5 1.5 1.5v1h-3c-3 0-4.5 1.5-4.5 4s1.5 4 4.5 4h1.5v-1.5s0-1.5 1.5-1.5 1.5 0 1.5 1.5v1.5h1.5c3 0 4.5-1.5 4.5-4s-1.5-4-4.5-4h-2.5V5c0-3-.5-3-4.5-3z",
    },
    {
      name: "Java",
      color: "#007396",
      path: "M5.5 16c1.5 2 7.5 2 9 0M7 10s2-4 6-1",
    },
    { name: "HTML5", color: "#E34F26", path: "M3 3h18l-2 16-8 2-8-2z" },
    {
      name: "Next.js",
      color: "#ffffff",
      path: "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4 14h-1.5l-3-4v4H10V8h1.5l3 4V8H16v8z",
    },
    { name: "Node.js", color: "#339933", path: "M12 2l9 5v10l-9 5-9-5V7z" },
    {
      name: "Tailwind CSS",
      color: "#38B2AC",
      path: "M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z",
    },
    {
      name: "GraphQL",
      color: "#E10098",
      path: "M12 2L4.5 6.3v8.4L12 19l7.5-4.3V6.3L12 2zM12 4.3l5.5 3.2-5.5 3.2-5.5-3.2L12 4.3z",
    },
    { name: "REST API", color: "#FF5733", path: "M4 4h16v16H4zM2 9h20M9 2v20" },
    {
      name: "PostgreSQL",
      color: "#336791",
      path: "M12 3c-4.42 0-8 1.79-8 4s3.58 4 8 4 8-1.79 8-4-3.58-4-8-4zM4 9v4c0 2.21 3.58 4 8 4s8-1.79 8-4V9c0 2.21-3.58 4-8 4s-8-1.79-8-4zm0 6v4c0 2.21 3.58 4 8 4s8-1.79 8-4v-4c0 2.21-3.58 4-8 4s-8-1.79-8-4z",
    },
    {
      name: "Redis",
      color: "#DC382D",
      path: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 16c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z",
    },
    {
      name: "Docker",
      color: "#2496ED",
      path: "M4 11h3v3H4zm4 0h3v3H8zm4 0h3v3h-3zm4 0h3v3h-3zm-8-4h3v3H8zm4 0h3v3h-3zM2 15h20v4H2z",
    },
    {
      name: "Git",
      color: "#F05032",
      path: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 6h2v4h3l-4 4-4-4h3V8z",
    },
    {
      name: "Tauri",
      color: "#FFC131",
      path: "M22,6.5H12v15h10V6.5z M2,6h8v16H2V6z M2,2h20v2H2V2z",
    },
    {
      name: "Rust",
      color: "#DEA584",
      path: "M12 2C6.5 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zm-1-13h2v14h-2zm-5 5h12v2H6z",
    },
    { name: "Linux", color: "#FCC624", path: "M4 17l6-6-6-6M12 19h8" },
    { name: "Steem", color: "#6267FF", path: "M12 2L4 7v10l8 5 8-5V7z" },
  ];

  const focusAreas = [
    "Decentralized Applications (dApps)",
    "Blockchain Integrated Solutions (Steem)",
    "API Design & Integration",
    "High-Performance Web Dashboards",
    "Cross-Platform Apps (Tauri/Electron)",
    "Custom Website Development",
    "Portfolio & Brand Identity",
    "Server Management & Hosting",
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 10 },
    },
  };

  return (
    <section id="about" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="font-[family-name:var(--font-outfit)] font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 sm:mb-8">
              About <span className="text-gradient">Me</span>
            </h2>

            <div className="glass-card p-6 sm:p-8 rounded-2xl mb-8">
              <div className="space-y-4 text-lg sm:text-lg text-[var(--text-secondary)] leading-relaxed">
                <p>
                  I&apos;m a passionate{" "}
                  <span className="text-white font-medium">
                    Full-Stack Developer
                  </span>{" "}
                  &{" "}
                  <span className="text-white font-medium">
                    Prompt Engineer
                  </span>{" "}
                  specialising in modern web applications and blockchain
                  technology. With deep expertise in TypeScript, React, Next,
                  Tauri, Electron, Tailwind, Rust, etc and the Steem blockchain
                  development, I can also create innovative solutions that
                  bridge traditional web development with decentralised
                  technologies and AI-driven workflows.
                </p>
                <p>
                  Currently focused on building tools and applications for the
                  Steem ecosystem, I contribute to open-source projects, refactoring, and
                  develop blockchain explorers, analytical dashboards, and
                  developer tools that enhance the blockchain experience for
                  everyone.
                </p>
                <p>
                  Beyond coding, I am an active community member, constantly
                  learning and sharing knowledge to help grow the decentralised
                  web.
                </p>
              </div>
            </div>

            {/* Tech Stack / Stats */}
            <div className="mt-10 sm:mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { label: "Experience", value: "3+ Years" },
                { label: "Projects", value: "20+" },
                { label: "Contributions", value: "100+" },
                { label: "Clients", value: "Global" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  className="glass-card p-4 rounded-xl text-center hover:bg-[var(--primary)]/5 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    ease: "easeOut",
                    delay: i * 0.1,
                  }}
                  whileHover={{
                    y: -5,
                    transition: { type: "spring", stiffness: 300 },
                  }}
                >
                  <div className="font-bold text-xl sm:text-2xl text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-[var(--text-muted)]">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual / Card Side */}
          <motion.div
            className="glass-card p-1 rounded-2xl"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            <div className="bg-[var(--bg-deep)]/50 rounded-xl p-6 sm:p-12 h-full flex flex-col justify-center gap-8 relative overflow-hidden">
              {/* Decorative background elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--primary)]/10 rounded-full blur-3xl -mr-32 -mt-32" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-[var(--secondary)]/10 rounded-full blur-3xl -ml-32 -mb-32" />

              <div className="relative z-10">
                <h3 className="font-[family-name:var(--font-outfit)] font-bold text-2xl text-white mb-6">
                  Technical Arsenal
                </h3>
                <motion.div
                  className="flex flex-wrap gap-3"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                >
                  {techStack.map((tech) => (
                    <motion.div
                      key={tech.name}
                      variants={itemVariants}
                      className="group relative flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[var(--primary)]/50 hover:bg-white/[0.08] transition-colors duration-300 cursor-default"
                      whileHover={{
                        scale: 1.05,
                        transition: {
                          type: "spring",
                          stiffness: 400,
                          damping: 10,
                        },
                      }}
                    >
                      <svg
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        style={{ color: tech.color }}
                      >
                        {tech.name === "React" ? (
                          <g
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                          >
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
                        ) : tech.name === "Java" ? (
                          <path
                            d="M12 18c-2 1-5 1-6-1M12 6c2-1 4 0 4 2s-1 3-3 3"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            fill="none"
                          />
                        ) : tech.name === "REST API" ? (
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                        ) : tech.name === "Tauri" ? (
                          <path d="M2.2 4h19.5c.7 0 1.2-.5 1.2-1.2S22.5 1.7 21.8 1.7H2.2c-.7 0-1.2.5-1.2 1.2S1.6 4 2.2 4zM13.6 6.3h-3.2c-.3 0-.6.3-.6.6v14.9c0 .3.3.6.6.6h3.2c.3 0 .6-.3.6-.6V6.9c0-.4-.2-.6-.6-.6zM8.3 6.3H2.8c-.3 0-.6.3-.6.6v8.6c0 .3.3.6.6.6h5.4c.3 0 .6-.3.6-.6V6.9c-.1-.4-.3-.6-.5-.6z" />
                        ) : tech.name === "Linux" ? (
                          <path
                            d="M4 17l6-6-6-6M12 19h8"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            fill="none"
                          />
                        ) : (
                          <path d={tech.path} />
                        )}
                      </svg>
                      <span className="text-sm font-medium text-[var(--text-secondary)] group-hover:text-white transition-colors">
                        {tech.name}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              <div className="relative z-10 border-t border-white/10 pt-8">
                <h3 className="font-[family-name:var(--font-outfit)] font-bold text-2xl text-white mb-6">
                  Focus Areas
                </h3>
                <motion.ul
                  className="space-y-4"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                >
                  {focusAreas.map((area, i) => (
                    <motion.li
                      key={i}
                      variants={itemVariants}
                      className="flex items-center gap-3 text-[var(--text-secondary)]"
                    >
                      <span className="w-2 h-2 rounded-full bg-[var(--secondary)]" />
                      {area}
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
