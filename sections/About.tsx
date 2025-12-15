"use client";

import { motion } from "motion/react";
import { ProfileCard } from "../components/about/ProfileCard";
import { SkillsGrid } from "../components/about/SkillsGrid";
import { BioTerminal } from "../components/about/BioTerminal";
import { MissionLog } from "../components/about/MissionLog";

export function About() {
  return (
    <section id="about" className="py-24 w-full px-4 md:px-8 bg-[#050505] relative overflow-hidden">

      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-12 flex items-end gap-4 border-b border-white/10 pb-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-mono text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            OPERATOR_DOSSIER
          </h2>
          <span className="text-neutral-600 font-mono text-sm mb-2">v5.0.1 // CLASSIFIED</span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* Left Column: Stats & Profile (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <ProfileCard />
            <SkillsGrid />
          </div>

          {/* Right Column: Bio & History (8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            <BioTerminal />
            <MissionLog />
          </div>
        </div>
      </div>
    </section>
  );
}
