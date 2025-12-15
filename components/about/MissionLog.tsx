"use client";

import { motion } from "motion/react";
import { History } from "lucide-react";

export function MissionLog() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md"
        >
            <h3 className="text-sm font-bold text-white mb-6 flex items-center gap-2">
                <History className="w-4 h-4 text-accent" />
                MISSION_LOG
            </h3>

            <div className="flex gap-8 overflow-x-auto pb-8 pt-4 px-4 snap-x snap-mandatory scrollbar-hide relative">
                {/* Timeline Line Background - visual only, spans width based on content */}

                {/* Glassdoor */}
                <div className="min-w-[320px] md:min-w-[400px] snap-center group">
                    <div className="flex items-center mb-4 relative">
                        {/* Timeline Node */}
                        <div className="w-3 h-3 rounded-full bg-primary border-2 border-black z-10 relative shadow-[0_0_10px_rgba(var(--primary),0.5)] group-hover:scale-125 transition-transform" />
                        {/* Connecting Line */}
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 w-[calc(100%+2rem)] h-[2px] bg-white/10" />
                    </div>

                    <div className="p-6 bg-white/5 rounded-xl border border-white/10 relative hover:bg-white/10 transition-colors">
                        {/* Vertical connector */}
                        <div className="absolute -top-4 left-1.5 w-[2px] h-4 bg-white/10" />

                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h4 className="text-white font-bold text-lg group-hover:text-primary transition-colors">Glassdoor</h4>
                                <p className="text-primary text-xs font-mono">Front-End Software Engineer Intern</p>
                            </div>
                            <span className="px-2 py-1 text-[10px] font-mono bg-white/5 rounded text-neutral-400">05/2025 – 08/2025</span>
                        </div>
                        <ul className="space-y-2 text-sm text-neutral-400 list-disc list-inside marker:text-primary/50">
                            <li>Migrated core UI modules (Left & Right Rail) to Next.js App Router.</li>
                            <li>Developed reusable UI components in Storybook for design consistency.</li>
                            <li>Integrated GraphQL for efficient, type-safe data fetching.</li>
                            <li>Implemented unit tests with Vitest, increasing coverage.</li>
                        </ul>
                    </div>
                </div>

                {/* The Hero Company */}
                <div className="min-w-[320px] md:min-w-[400px] snap-center group">
                    <div className="flex items-center mb-4 relative">
                        <div className="w-3 h-3 rounded-full bg-secondary border-2 border-black z-10 relative group-hover:scale-125 transition-transform" />
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 w-[calc(100%+2rem)] h-[2px] bg-white/10" />
                    </div>

                    <div className="p-6 bg-white/5 rounded-xl border border-white/10 relative hover:bg-white/10 transition-colors">
                        <div className="absolute -top-4 left-1.5 w-[2px] h-4 bg-white/10" />
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h4 className="text-white font-bold text-lg group-hover:text-secondary transition-colors">The Hero Company</h4>
                                <p className="text-secondary text-xs font-mono">Jr. Developer (Frontend)</p>
                            </div>
                            <span className="px-2 py-1 text-[10px] font-mono bg-white/5 rounded text-neutral-400">03/2024 – 09/2025</span>
                        </div>
                        <ul className="space-y-2 text-sm text-neutral-400 list-disc list-inside marker:text-secondary/50">
                            <li>Authored 20+ responsive websites, increasing validation rates by 10%.</li>
                            <li>Maintained security/performance via MySQL Workbench & SSL management.</li>
                            <li>Managed SSL renewals to reduce security vulnerabilities.</li>
                        </ul>
                    </div>
                </div>

                {/* Freelance */}
                <div className="min-w-[320px] md:min-w-[400px] snap-center group">
                    <div className="flex items-center mb-4 relative">
                        <div className="w-3 h-3 rounded-full bg-accent border-2 border-black z-10 relative group-hover:scale-125 transition-transform" />
                        {/* Last item line fades out or stops */}
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 w-[100px] h-[2px] bg-gradient-to-r from-white/10 to-transparent" />
                    </div>

                    <div className="p-6 bg-white/5 rounded-xl border border-white/10 relative hover:bg-white/10 transition-colors">
                        <div className="absolute -top-4 left-1.5 w-[2px] h-4 bg-white/10" />
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h4 className="text-white font-bold text-lg group-hover:text-accent transition-colors">Freelance</h4>
                                <p className="text-accent text-xs font-mono">Web Developer</p>
                            </div>
                            <span className="px-2 py-1 text-[10px] font-mono bg-white/5 rounded text-neutral-400">01/2018 – 09/2025</span>
                        </div>
                        <ul className="space-y-2 text-sm text-neutral-400 list-disc list-inside marker:text-accent/50">
                            <li>Developed 15+ websites for e-commerce and small businesses.</li>
                            <li>Achieved Top Rated Plus status and 100% Job Success Score on Upwork.</li>
                            <li>Improved revenue/trust by integrating secure payment gateways.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
