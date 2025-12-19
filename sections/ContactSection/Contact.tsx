"use client";

import { motion } from "motion/react";
import { ContactForm } from "@/components/Contact/ContactForm";
import { ContactInfo } from "@/components/Contact/ContactInfo";
import styles from "./Contact.module.css";

export function Contact() {
    const currentYear = new Date().getFullYear();

    return (
        <section className={styles.sectionContainer} id="contact" aria-label="Contact">
            <div className={styles.maxContainer}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={styles.headerWrapper}
                >
                    <h2 className={styles.sectionTitle}>CONTACT</h2>
                    <span className={styles.subtitle}>// TRANSMISSION</span>
                </motion.div>

                <div className={styles.contentGrid}>
                    <ContactInfo />
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className={styles.formCard}
                    >
                        <div className={styles.bgPulse} />

                        <ContactForm />
                    </motion.div>
                </div>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className={styles.footerCopyright}
                >
                    <p>© {currentYear} Jerome Haynes. All systems nominal.</p>
                </motion.div>
            </div>
        </section>
    );
}
