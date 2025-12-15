"use client";

import { useScroll, useTransform, motion, useSpring } from "framer-motion";

import { Code, Terminal, Box, Database, Cpu } from "lucide-react";

function FloatingElement({
    children,
    depth,
    className,
    x,
    y,
    rotate,
}: {
    children: React.ReactNode;
    depth: number;
    className?: string;
    x: number;
    y: number;
    rotate: number;
}) {
    const { scrollY } = useScroll();
    const yRange = useTransform(scrollY, [0, 5000], [0, depth * 500]);
    const rotateRange = useTransform(scrollY, [0, 5000], [rotate, rotate + 45]);

    // Smooth out the motion
    const smoothY = useSpring(yRange, { stiffness: 400, damping: 90 });
    const smoothRotate = useSpring(rotateRange, { stiffness: 400, damping: 90 });

    return (
        <motion.div
            style={{
                top: `${y}%`,
                left: `${x}%`,
                y: smoothY,
                rotate: smoothRotate,
                position: "absolute",
            }}
            className={`opacity-60 hover:opacity-80 transition-opacity duration-500 pointer-events-none ${className}`}
        >
            {children}
        </motion.div>
    );
}

export default function Background3D() {
    return (
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none select-none">
            {/* Gradient Overlay - moved behind elements or low opacity */}
            <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-dark)] via-transparent to-[var(--bg-dark)] z-20 opacity-40" />

            {/* Floating Code Editor Window */}
            <FloatingElement depth={-0.2} x={10} y={15} rotate={-10} className="z-10 hidden md:block">
                <div className="w-64 h-48 bg-[#1e1e2e] rounded-lg shadow-2xl border border-white/5 overflow-hidden transform perspective-1000 rotate-y-12">
                    <div className="h-6 bg-[#2a2a3b] flex items-center px-2 gap-1.5 border-b border-white/5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                    </div>
                    <div className="p-3 space-y-1.5 opacity-80">
                        <div className="h-2 w-16 bg-blue-400/30 rounded" />
                        <div className="h-2 w-32 bg-purple-400/30 rounded ml-4" />
                        <div className="h-2 w-24 bg-pink-400/30 rounded ml-4" />
                        <div className="h-2 w-20 bg-blue-400/30 rounded ml-4" />
                        <div className="h-2 w-12 bg-white/10 rounded" />
                    </div>
                </div>
            </FloatingElement>

            {/* Floating Browser Window */}
            <FloatingElement depth={0.3} x={80} y={25} rotate={15} className="z-10 hidden md:block">
                <div className="w-64 h-44 bg-white/5 backdrop-blur-md rounded-lg shadow-2xl border border-white/10 overflow-hidden transform perspective-1000 -rotate-y-12">
                    <div className="h-6 bg-white/5 flex items-center px-2 gap-2 border-b border-white/5">
                        <div className="flex gap-1">
                            <div className="w-2 h-2 rounded-full bg-white/20" />
                            <div className="w-2 h-2 rounded-full bg-white/20" />
                        </div>
                        <div className="flex-1 h-3 bg-white/10 rounded-full mx-2" />
                    </div>
                    <div className="p-4 grid grid-cols-2 gap-2 opacity-70">
                        <div className="h-20 bg-white/5 rounded" />
                        <div className="h-20 bg-white/5 rounded" />
                    </div>
                </div>
            </FloatingElement>

            {/* Abstract 3D Shapes & Icons */}
            <FloatingElement depth={0.5} x={85} y={15} rotate={10} className="z-10">
                <Box className="w-16 h-16 text-[var(--primary)] opacity-40" strokeWidth={1} />
            </FloatingElement>

            <FloatingElement depth={-0.3} x={15} y={45} rotate={-15} className="z-10">
                <Terminal className="w-20 h-20 text-[var(--secondary)] opacity-30" strokeWidth={1} />
            </FloatingElement>

            <FloatingElement depth={0.4} x={75} y={65} rotate={45} className="z-10">
                <Database className="w-12 h-12 text-blue-500 opacity-40" strokeWidth={1} />
            </FloatingElement>

            <FloatingElement depth={-0.4} x={5} y={75} rotate={-30} className="z-10">
                <Cpu className="w-14 h-14 text-purple-500 opacity-40" strokeWidth={1} />
            </FloatingElement>

            <FloatingElement depth={0.2} x={90} y={85} rotate={20} className="z-10">
                <Code className="w-24 h-24 text-[var(--primary)] opacity-30" strokeWidth={0.5} />
            </FloatingElement>

            <FloatingElement depth={-0.1} x={50} y={50} rotate={0} className="z-0">
                <div className="w-96 h-96 rounded-full bg-[var(--primary)] opacity-[0.05] blur-3xl filter" />
            </FloatingElement>
        </div>
    );
}
