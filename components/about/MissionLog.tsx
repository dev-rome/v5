"use client";

import { motion } from "motion/react";
import { History } from "lucide-react";
import styles from "./AboutComponents.module.css";

export function MissionLog() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className={styles.missionCard}
        >
            <h3 className={styles.missionHeader}>
                <History className="w-4 h-4 text-[var(--accent)]" />
                MISSION_LOG
            </h3>
            <div className={styles.timelineContainer}>
                <div className={`${styles.timelineItem} group`}>
                    <div className={styles.nodeWrapper}>
                        <div className={`${styles.nodeDot} ${styles.primaryDot}`} />
                        <div className={styles.connectorLine} />
                    </div>
                    <div className={styles.contentBox}>
                        <div className={styles.verticalLine} />
                        <div className={styles.contentHeader}>
                            <div>
                                <h4 className={`${styles.roleTitle} group-hover:text-[var(--primary)]`}>Glassdoor</h4>
                                <p className={`${styles.roleSubtitle} ${styles.primaryText}`}>Front-End Software Engineer Intern</p>
                            </div>
                            <span className={styles.dateTag}>05/2025 – 08/2025</span>
                        </div>
                        <ul className={`${styles.taskList} ${styles.primaryMarker}`}>
                            <li>Migrated core UI modules (Left & Right Rail) to Next.js App Router.</li>
                            <li>Developed reusable UI components in Storybook for design consistency.</li>
                            <li>Integrated GraphQL for efficient, type-safe data fetching.</li>
                            <li>Implemented unit tests with Vitest, increasing coverage.</li>
                        </ul>
                    </div>
                </div>
                <div className={`${styles.timelineItem} group`}>
                    <div className={styles.nodeWrapper}>
                        <div className={`${styles.nodeDot} ${styles.secondaryDot}`} />
                        <div className={styles.connectorLine} />
                    </div>
                    <div className={styles.contentBox}>
                        <div className={styles.verticalLine} />
                        <div className={styles.contentHeader}>
                            <div>
                                <h4 className={`${styles.roleTitle} group-hover:text-[var(--secondary)]`}>The Hero Company</h4>
                                <p className={`${styles.roleSubtitle} ${styles.secondaryText}`}>Jr. Developer (Frontend)</p>
                            </div>
                            <span className={styles.dateTag}>03/2024 – 09/2025</span>
                        </div>
                        <ul className={`${styles.taskList} ${styles.secondaryMarker}`}>
                            <li>Authored 20+ responsive websites, increasing validation rates by 10%.</li>
                            <li>Maintained security/performance via MySQL Workbench & SSL management.</li>
                            <li>Managed SSL renewals to reduce security vulnerabilities.</li>
                        </ul>
                    </div>
                </div>
                <div className={`${styles.timelineItem} group`}>
                    <div className={styles.nodeWrapper}>
                        <div className={`${styles.nodeDot} ${styles.accentDot}`} />
                        <div className={styles.connectorLineFade} />
                    </div>
                    <div className={styles.contentBox}>
                        <div className={styles.verticalLine} />
                        <div className={styles.contentHeader}>
                            <div>
                                <h4 className={`${styles.roleTitle} group-hover:text-[var(--accent)]`}>Freelance</h4>
                                <p className={`${styles.roleSubtitle} ${styles.accentText}`}>Web Developer</p>
                            </div>
                            <span className={styles.dateTag}>01/2018 – 09/2025</span>
                        </div>
                        <ul className={`${styles.taskList} ${styles.accentMarker}`}>
                            <li>Developed 15+ websites for e-commerce and small businesses.</li>
                            <li>Achieved Top Rated Plus status and 100% Job Success Score on Upwork.</li>
                            <li>Improved revenue/trust by integrating secure payment gateways.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
