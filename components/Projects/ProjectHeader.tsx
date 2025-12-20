"use client";

import { motion } from "motion/react";
import styles from "./ProjectHeader.module.css";

export function ProjectHeader() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.headerWrapper}
        >
            <h2 className={styles.sectionTitle}>PROJECTS</h2>
            <span className={styles.subtitle}>// QUEST_LOG</span>
        </motion.div>
    );
}
