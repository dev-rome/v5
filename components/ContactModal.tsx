"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Send } from "lucide-react";
import styles from "./ContactModal.module.css";

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

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

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    _subject: `New Portfolio Mission: ${formData.name}`, // Custom subject
                })
            });

            if (response.ok) {
                setSubmitted(true);
                setTimeout(() => {
                    setSubmitted(false);
                    onClose();
                    setFormData({ name: "", email: "", message: "" });
                }, 3000);
            } else {
                console.error("Transmission failed");
                alert("Transmission failed. Please try again or email manually.");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Transmission error. Check logs.");
        } finally {
            setIsSubmitting(false);
        }
    };

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
                            <div className={styles.modalDecorTop} />
                            <div className={styles.modalDecorBottom} />
                            <button
                                onClick={onClose}
                                className={styles.closeButton}
                                aria-label="Close modal"
                            >
                                <X className="w-5 h-5" />
                            </button>
                            <h2 className={styles.title}>INITIALIZE_COMMS</h2>
                            <p className={styles.subtitle}>Send a secure transmission. I'll respond ASAP.</p>
                            {submitted ? (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={styles.successWrapper}
                                >
                                    <div className={styles.successIcon}>
                                        <Send className="w-8 h-8" />
                                    </div>
                                    <h3 className={styles.successTitle}>Message Sent!</h3>
                                    <p className={styles.successMessage}>Transmission successful.</p>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className={styles.form}>
                                    <div className={styles.formGroup}>
                                        <label htmlFor="name" className={styles.label}>Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                                            className={styles.input}
                                            placeholder="Jane Doe"
                                        />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label htmlFor="email" className={styles.label}>Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                                            className={styles.input}
                                            placeholder="jane@example.com"
                                        />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label htmlFor="message" className={styles.label}>Message</label>
                                        <textarea
                                            id="message"
                                            required
                                            rows={4}
                                            value={formData.message}
                                            onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                                            className={styles.textarea}
                                            placeholder="Project details or just saying hello..."
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className={styles.submitButton}
                                    >
                                        {isSubmitting ? "TRANSMITTING..." : "SEND MESSAGE"}
                                        {!isSubmitting && <Send className="w-4 h-4" />}
                                    </button>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
