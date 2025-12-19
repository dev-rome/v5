"use client";

import { motion } from "motion/react";
import { SuccessMessageProps } from "@/types/contact";
import { CheckCircle2 } from "lucide-react";
import styles from "./ContactForm.module.css";

export function SuccessMessage({ className = "" }: SuccessMessageProps) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            role="status"
            aria-live="polite"
            className={`${styles.successWrapper} ${className}`}
        >
            <div className={styles.successIcon}>
                <CheckCircle2 size={32} />
            </div>
            <h3 className={styles.successTitle}>Transmission Received</h3>
            <p className={styles.successMessage}>I'll be in touch shortly.</p>
        </motion.div>
    );
}
