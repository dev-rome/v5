"use client";

import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";
import { ParticleBackground } from "../../components/Hero/ParticleBackground";
import { HeroAvatar } from "../../components/Hero/HeroAvatar";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.heroSection} id="hero">
      <ParticleBackground />
      <div className={styles.contentContainer}>
        <div className={styles.avatarWrapper}>
          <HeroAvatar />
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className={styles.heroDescription}
        >
          Frontend Engineer driven by a deep love for coding and making visions come to life.
          Crafting pixel-perfect experiences with modern stacks, ready for the next mission.
        </motion.p>
      </div>
      <motion.button
        className={styles.scrollButton}
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        aria-label="Scroll to About section"
      >
        <ArrowDown className="w-5 h-5" />
      </motion.button>
    </section>
  );
}
