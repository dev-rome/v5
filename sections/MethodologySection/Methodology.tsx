"use client";

import { useState } from "react";
import { MethodologyCard } from "../../components/Methodology/MethodologyCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { METHODS } from "@/data/methodology";
import styles from "./Methodology.module.css";

export function Methodology() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section className={styles.section} id="methodology" aria-labelledby="methodology-heading">
            <div className={styles.container}>
                <SectionHeader
                    title="METHODOLOGY"
                    subtitle="// OPERATING_PROTOCOLS"
                    titleId="methodology-heading"
                />
                <ul className={styles.grid}>
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
                </ul>
            </div>
        </section>
    );
}
