"use client";

import { useState } from "react";
import { MethodologyCard } from "../../components/Methodology/MethodologyCard";
import { METHODS } from "@/data/methodology";
import styles from "./Methodology.module.css";

export function Methodology() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section className={styles.section} id="methodology">
            <div className={styles.container}>
                <div
                    className={styles.header}
                >
                    <h2 className={styles.sectionTitle}>
                        METHODOLOGY
                    </h2>
                    <span className={styles.subtitle}>// OPERATING_PROTOCOLS</span>
                </div>
                <ol className={styles.grid}>
                    {METHODS.map((method, index) => (
                        <li
                            key={method.number}
                            className={`${styles.cardWrapper} ${hoveredIndex === index ? styles.cardWrapperHovered : ''}`}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <MethodologyCard {...method} />
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
}
