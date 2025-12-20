"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { ContactForm } from "./ContactForm";
import { ContactModalProps } from "@/types/contact";
import { X } from "lucide-react";
import styles from "./ContactModal.module.css";

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!mounted) return null;

    return createPortal(
        isOpen ? (
            <>
                <div
                    onClick={onClose}
                    className={styles.backdrop}
                />
                <div
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
                </div>
            </>
        ) : null,
        document.body
    );
}
