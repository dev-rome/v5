"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { FileDown, Mail } from "lucide-react";
import { ContactModal } from "./Contact/ContactModal";
import styles from "./FloatingControls.module.css";

export function FloatingControls() {
    const [isContactOpen, setIsContactOpen] = useState(false);

    return (
        <>
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.5 }}
                className={styles.desktopContainer}
            >
                <a
                    href="/resume.pdf"
                    download
                    className={styles.controlButton}
                    aria-label="Download CV"
                >
                    <FileDown className="w-5 h-5" />
                    <span className={styles.tooltip}>
                        Download CV
                    </span>
                </a>
                <button
                    onClick={() => setIsContactOpen(true)}
                    className={styles.controlButton}
                    aria-label="Contact Me"
                >
                    <Mail className="w-5 h-5" />
                    <span className={styles.tooltip}>
                        Contact Me
                    </span>
                </button>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 20, x: "-50%" }}
                animate={{ opacity: 1, y: 0, x: "-50%" }}
                transition={{ delay: 1.5 }}
                className={styles.mobileContainer}
            >
                <a
                    href="/resume.pdf"
                    download
                    className={styles.mobileButton}
                >
                    <FileDown className="w-4 h-4" />
                    <span>CV</span>
                </a>
                <button
                    onClick={() => setIsContactOpen(true)}
                    className={styles.mobileButton}
                >
                    <Mail className="w-4 h-4" />
                    <span>Contact</span>
                </button>
            </motion.div>
            <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
        </>
    );
}
