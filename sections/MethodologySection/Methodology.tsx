"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { MethodologyCard } from "../../components/Methodology/MethodologyCard";
import { METHODS } from "@/data/methodology";
import styles from "./Methodology.module.css";

export function Methodology() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={styles.header}
                >
                    <h2 className={styles.sectionTitle}>
                        METHODOLOGY
                    </h2>
                    <span className={styles.subtitle}>OPERATING_PROTOCOLS</span>
                </motion.div>
                <div className={styles.grid}>
                    {METHODS.map((method, index) => (
                        <motion.div
                            key={method.number}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`${styles.cardWrapper} ${hoveredIndex === index ? styles.cardWrapperHovered : ''}`}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <MethodologyCard {...method} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
