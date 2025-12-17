"use client";

import { ArrowUpRight } from "lucide-react";
import styles from "./MethodologyCard.module.css";

interface MethodologyCardProps {
    number: string;
    title: string;
    description: string;
}

export function MethodologyCard({ number, title, description }: MethodologyCardProps) {
    return (
        <div className={styles.card}>
            <div className={styles.gradientBlob} />
            <div className={styles.bottomGradient} />
            <div className={styles.contentContainer}>
                <div className={styles.header}>
                    <span className={styles.number}>
                        {number}
                    </span>
                    <div className={styles.iconWrapper}>
                        <ArrowUpRight strokeWidth={1.5} size={20} />
                    </div>
                </div>
                <div className={styles.textBlock}>
                    <div className={styles.line} />
                    <h3 className={styles.title}>
                        {title}
                    </h3>
                    <p className={styles.description}>
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
}
