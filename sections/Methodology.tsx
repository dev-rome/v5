"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { MethodologyCard } from "../components/methodology/MethodologyCard";
import styles from "./Methodology.module.css";

export function Methodology() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const methods = [
        {
            number: "01",
            title: "Make It",
            description: "I bring designs to life directly in the browser, creating interactive experiences teams can rally around. I focus on transforming ideas into tangible, functional prototypes that showcase a project's potential in real-time."
        },
        {
            number: "02",
            title: "Collaborate",
            description: "I work closely with teams and clients to ensure clear communication and alignment. By fostering a shared vision, I help turn complex ideas into functional, cohesive solutions."
        },
        {
            number: "03",
            title: "Accessible",
            description: "I prioritize building inclusive and user-friendly experiences that cater to people of all abilities. By following accessibility standards and best practices, I ensure solutions are meaningful, equitable, and easy to use for everyone."
        },
        {
            number: "04",
            title: "Keep Learning",
            description: "I believe continuous learning is key to staying ahead in a constantly evolving industry. Whether it's exploring new technologies, refining existing skills, or adopting innovative practices, I stay curious and committed to growth."
        }
    ];

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
                    {methods.map((method, index) => (
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
