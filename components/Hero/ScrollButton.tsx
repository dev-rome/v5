"use client";

import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";
import styles from "../../sections/HeroSection/Hero.module.css"; // Reuse existing styles

export function ScrollButton() {
    return (
        <motion.button
            className={styles.scrollButton}
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            aria-label="Scroll to About section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.5 }}
        >
            <ArrowDown className="w-5 h-5" />
        </motion.button>
    );
}
