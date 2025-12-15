"use client";

import { motion } from "motion/react";
import { Terminal } from "lucide-react";

export function BioTerminal() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 md:p-8 rounded-2xl bg-black/40 border border-primary/20 relative overflow-hidden"
        >
            {/* Scanline overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(18,255,255,0.03)_1px,transparent_1px)] bg-[length:100%_4px] pointer-events-none" />

            <div className="flex items-center gap-2 mb-4 text-primary/50 text-xs font-mono">
                <Terminal className="w-4 h-4" />
                <span>bio_decryption.exe</span>
            </div>

            <div className="space-y-4 text-lg font-light text-neutral-200 leading-relaxed">
                <p>
                    Results-driven Frontend Engineer with hands-on experience building responsive, user-focused interfaces using React, Next.js, and TypeScript. I have contributed to projects at Glassdoor and as a freelance developer, crafting reusable, efficient UI components that enhance user experience, streamline development, and ensure smooth, reliable performance.
                </p>
                <p>
                    I love learning and building for the web, turning ideas into functional, engaging experiences that help clients bring their visions to life. Outside of coding, I enjoy streaming Valorant, playing and watching sports, going to the gym, and baking.
                </p>
            </div>
        </motion.div>
    );
}
