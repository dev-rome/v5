"use client";

import { motion } from "motion/react";
import { ProfileCard } from "../../components/about/ProfileCard";
import { SkillsGrid } from "../../components/about/SkillsGrid";
import { BioTerminal } from "../../components/about/BioTerminal";
import { MissionLog } from "../../components/about/MissionLog";
import styles from "./About.module.css";

export function About() {
  return (
    <section id="about" className={styles.sectionContainer}>
      <div className={styles.bgDecorRight} />
      <div className={styles.bgDecorLeft} />
      <div className={styles.maxContainer}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className={styles.headerWrapper}
        >
          <h2 className={styles.sectionTitle}>
            About
          </h2>
          <span className={styles.versionTag}>v5.0.1 // CLASSIFIED</span>
        </motion.div>
        <div className={styles.contentGrid}>
          <div className={styles.leftColumn}>
            <ProfileCard />
            <SkillsGrid />
          </div>
          <div className={styles.rightColumn}>
            <BioTerminal />
            <MissionLog />
          </div>
        </div>
      </div>
    </section>
  );
}
