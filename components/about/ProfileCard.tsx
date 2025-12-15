"use client";

import { motion } from "motion/react";
import { User } from "lucide-react";

export function ProfileCard() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md relative overflow-hidden group"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-lg bg-black border border-primary/30 flex items-center justify-center text-primary">
                    <User className="w-8 h-8" />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-white">Jerome Haynes</h3>
                    <p className="text-xs font-mono text-primary">Software Engineer</p>
                </div>
            </div>

            <div className="space-y-4">
                <div className="p-3 bg-black/40 rounded border border-white/5">
                    <p className="text-[10px] text-neutral-500 font-mono uppercase">Current Guild</p>
                    <p className="text-sm font-bold text-white">Freelance / Open to Work</p>
                </div>
                <div className="p-3 bg-black/40 rounded border border-white/5">
                    <p className="text-[10px] text-neutral-500 font-mono uppercase">Specialization</p>
                    <p className="text-sm font-bold text-white">Frontend Engineer</p>
                </div>
            </div>
        </motion.div>
    );
}
