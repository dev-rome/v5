"use client";

import { motion } from "motion/react";
import { TestimonialCard } from "@/components/Testimonials/TestimonialCard";
import { TESTIMONIALS } from "@/data/testimonials";
import styles from "./Testimonials.module.css";

export function Testimonials() {
    return (
        <section className={styles.sectionContainer} id="testimonials" aria-labelledby="testimonials-heading">
            <div className={styles.maxContainer}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={styles.headerWrapper}
                >
                    <h2 id="testimonials-heading" className={styles.sectionTitle}>TESTIMONIALS</h2>
                    <span className={styles.subtitle}>// ENDORSEMENTS</span>
                </motion.div>

                <div className={styles.testimonialsGrid}>
                    {TESTIMONIALS.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <TestimonialCard testimonial={testimonial} index={index} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
