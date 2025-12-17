"use client";

import { motion } from "motion/react";
import { useState } from "react";

interface FlipCardProps {
    number: string;
    title: string;
    description: string;
}

export function FlipCard({ number, title, description }: FlipCardProps) {
    const [isFlipped, setIsFlipped] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="relative w-full h-[340px] perspective-1000 group cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => {
                setIsHovered(false);
                setIsFlipped(false);
            }}
            onClick={() => setIsFlipped(!isFlipped)}
        >
            <motion.div
                className="w-full h-full relative preserve-3d transition-all duration-500"
                animate={{ rotateY: isFlipped || isHovered ? 180 : 0 }}
                transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
                style={{ transformStyle: "preserve-3d" }}
            >
                {/* Front of Card */}
                <div className="absolute inset-0 w-full h-full backface-hidden">
                    <div className="w-full h-full p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex flex-col justify-between overflow-hidden relative">

                        {/* Ambient Background Gradient */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-[50px] pointer-events-none" />
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/10 rounded-full blur-[50px] pointer-events-none" />

                        <div className="relative z-10">
                            <span className="text-5xl md:text-6xl font-black text-white/5 font-mono absolute -top-4 -left-4 select-none">
                                {number}
                            </span>
                            <div className="h-1 w-12 bg-primary mb-6" />
                            <h3 className="text-xl md:text-2xl font-bold text-white uppercase tracking-wider">{title}</h3>
                        </div>

                        <div className="relative z-10 flex justify-end">
                            <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center">
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white/50">
                                    <path d="M6 1L6 11M11 6L1 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Back of Card */}
                <div
                    className="absolute inset-0 w-full h-full backface-hidden"
                    style={{ transform: "rotateY(180deg)" }}
                >
                    <div className="w-full h-full p-6 md:p-8 rounded-2xl bg-[#0A0A0A] border border-primary/30 flex flex-col justify-center relative overflow-hidden">
                        {/* Glowing borders */}
                        <div className="absolute inset-0 bg-primary/5 pointer-events-none" />

                        <div className="relative z-10">
                            <span className="text-secondary font-mono text-sm mb-4 block">{number} // {itemKey(title)}</span>
                            <p className="text-neutral-300 leading-relaxed text-sm md:text-base">
                                {description}
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

// Helper to create a computer-y key string from title
function itemKey(title: string) {
    return title.toUpperCase().replace(/\s+/g, '_');
}
