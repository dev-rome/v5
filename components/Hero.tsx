"use client";

import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";
import { ParticleBackground } from "./ParticleBackground";
import { HeroAvatar } from "./HeroAvatar";

export function Hero() {
  return (
    <section className="h-screen w-full flex flex-col items-center justify-center relative overflow-hidden bg-black">
      <ParticleBackground />
      <div className="relative z-10 flex flex-col items-center gap-6">
        <div className="my-4">
          <HeroAvatar />
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-neutral-400 max-w-md text-center text-sm font-mono leading-relaxed px-4"
        >
          Frontend Engineer driven by a deep love for coding and making visions come to life.
          Crafting pixel-perfect experiences with modern stacks, ready for the next mission.
        </motion.p>

      </div>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-neutral-500 animate-bounce cursor-pointer hover:text-primary transition-colors focus:outline-none focus:text-primary"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        aria-label="Scroll to About section"
      >
        <ArrowDown className="w-5 h-5" />
      </motion.button>
    </section>
  );
}
