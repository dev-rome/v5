import { ContentSectionProps } from "@/types/projects";
import styles from "./ProjectMainContent.module.css";

export function ContentSection({ title, content }: ContentSectionProps) {
    return (
        <div className={styles.sectionBlock} aria-labelledby={`${title}-heading`}>
            <h2 className={styles.sectionTitle} id={`${title}-heading`}>{title}</h2>
            {content.text && <p className={styles.textBlock}>{content.text}</p>}
            {content.list && (
                <ul className={styles.contentList}>
                    {content.list.map((item, i) => (
                        <li key={i} className={styles.contentListItem}>{item}</li>
                    ))}
                </ul>
            )}
            {content.closingText && (
                <p className={`${styles.textBlock} ${styles.closingText}`}>
                    {content.closingText}
                </p>
            )}
        </div>
    );
}
