import Image from "next/image";
import { ProjectComponentProps } from "@/types/projects";
import styles from "./ProjectMainContent.module.css";

export function ProjectMainContent({ project }: ProjectComponentProps) {
    return (
        <section className={styles.mainContent}>
            <div className={styles.projectImageWrapper}>
                {project.image ? (
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className={styles.projectImage}
                        priority
                        sizes="(max-width: 1024px) 100vw, 70vw"
                    />
                ) : (
                    <div className={styles.imageFallback}>
                        <span className={styles.fallbackChar} style={{ color: project.color }}>{project.title[0]}</span>
                    </div>
                )}
            </div>
            <div className={styles.contentSection}>
                {project.content && (
                    <>
                        <div className={styles.sectionBlock}>
                            <h2 className={styles.sectionTitle}>The Challenge</h2>
                            {project.content.challenge.text && <p className={styles.textBlock}>{project.content.challenge.text}</p>}
                            {project.content.challenge.list && (
                                <ul className={styles.contentList}>
                                    {project.content.challenge.list.map((item, i) => (
                                        <li key={i} className={styles.contentListItem}>{item}</li>
                                    ))}
                                </ul>
                            )}
                            {project.content.challenge.closingText && <p className={`${styles.textBlock} ${styles.closingText}`}>{project.content.challenge.closingText}</p>}
                        </div>

                        <div className={styles.sectionBlock}>
                            <h2 className={styles.sectionTitle}>The Solution</h2>
                            {project.content.solution.text && <p className={styles.textBlock}>{project.content.solution.text}</p>}
                            {project.content.solution.list && (
                                <ul className={styles.contentList}>
                                    {project.content.solution.list.map((item, i) => (
                                        <li key={i} className={styles.contentListItem}>{item}</li>
                                    ))}
                                </ul>
                            )}
                            {project.content.solution.closingText && <p className={`${styles.textBlock} ${styles.closingText}`}>{project.content.solution.closingText}</p>}
                        </div>
                        <div className={styles.sectionBlock}>
                            <h2 className={styles.sectionTitle}>The Outcome</h2>
                            {project.content.outcome.text && <p className={styles.textBlock}>{project.content.outcome.text}</p>}
                            {project.content.outcome.list && (
                                <ul className={styles.contentList}>
                                    {project.content.outcome.list.map((item, i) => (
                                        <li key={i} className={styles.contentListItem}>{item}</li>
                                    ))}
                                </ul>
                            )}
                            {project.content.outcome.closingText && <p className={`${styles.textBlock} ${styles.closingText}`}>{project.content.outcome.closingText}</p>}
                        </div>
                    </>
                )}
            </div>
        </section>
    );
}
