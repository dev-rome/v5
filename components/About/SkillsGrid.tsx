"use client";

import { motion } from "motion/react";
import { Cpu } from "lucide-react";
import { SKILLS } from "@/data/about";
import styles from "./AboutComponents.module.css";

export function SkillsGrid() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={styles.skillsCard}
        >
            <h3 className={styles.skillsHeader}>
                <Cpu className="w-4 h-4 text-[var(--secondary)]" />
                SKILLS
            </h3>
            <div className={styles.skillsContainer}>
                {SKILLS.map((skill) => (
                    <span
                        key={skill}
                        className={styles.skillTag}
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </motion.div>
    );
}
