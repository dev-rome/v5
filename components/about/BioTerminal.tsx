"use client";

import { motion } from "motion/react";
import { Terminal } from "lucide-react";
import styles from "./AboutComponents.module.css";

export function BioTerminal() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.terminalCard}
        >
            <div className={styles.scanline} />
            <div className={styles.terminalHeader}>
                <Terminal className="w-4 h-4" />
                <span>bio_decryption.exe</span>
            </div>
            <div className={styles.terminalBody}>
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
