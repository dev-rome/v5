"use client";

import { motion } from "motion/react";
import { Github, Linkedin } from "lucide-react";
import styles from "./ContactInfo.module.css";

export function ContactInfo() {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={styles.infoColumn}
        >
            <div className={styles.infoCard}>
                <p className={styles.description}>
                    I'm currently open to new opportunities and collaborations. Whether you have a project in mind or just want to connect, feel free to reach out.
                </p>
                <div className={styles.socialGrid}>
                    <a href="https://github.com/dev-rome" className={styles.socialLink} aria-label="Github" target="_blank" rel="noopener noreferrer">
                        <Github size={20} />
                    </a>
                    <a href="https://www.linkedin.com/in/jerome-haynes/" className={styles.socialLink} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                        <Linkedin size={20} />
                    </a>
                </div>
            </div>
        </motion.div>
    );
}
