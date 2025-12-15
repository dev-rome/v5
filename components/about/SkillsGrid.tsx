"use client";

import { motion } from "motion/react";
import { Cpu } from "lucide-react";

export function SkillsGrid() {
    const skills = [
        "HTML", "CSS", "JavaScript", "React", "Next.js",
        "TypeScript", "Tailwind CSS", "Framer Motion",
        "Storybook", "GraphQL"
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md"
        >
            <h3 className="text-sm font-bold text-white mb-6 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-secondary" />
                SKILLS
            </h3>

            <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                    <span
                        key={skill}
                        className="px-3 py-1.5 text-xs font-mono text-primary bg-primary/10 border border-primary/20 rounded hover:bg-primary/20 transition-colors cursor-default"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </motion.div>
    );
}
