import styles from "./ProjectHeader.module.css";

export function ProjectHeader() {
    return (
        <div
            className={styles.headerWrapper}
        >
            <h2 className={styles.sectionTitle}>PROJECTS</h2>
            <span className={styles.subtitle}>// QUEST_LOG</span>
        </div>
    );
}
