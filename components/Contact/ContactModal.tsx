"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ContactForm } from "./ContactForm";
import { ContactModalProps } from "@/types/contact";
import { X } from "lucide-react";
import styles from "./ContactModal.module.css";

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className={styles.backdrop}
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className={styles.modalContainer}
                    >
                        <div className={styles.modalContent}>
                            <div className={styles.bgPulse} />
                            <button
                                onClick={onClose}
                                className={styles.closeButton}
                                aria-label="Close modal"
                            >
                                <X className="w-5 h-5" />
                            </button>
                            <h2 className={styles.title}>INITIALIZE_COMMS</h2>
                            <p className={styles.subtitle}>Send a secure transmission. I'll respond ASAP.</p>
                            <ContactForm onSuccess={onClose} />
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
