import Image from "next/image";
import { ContentSection } from "./ContentSection";
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
                        <ContentSection title="The Challenge" content={project.content.challenge} />
                        <ContentSection title="The Solution" content={project.content.solution} />
                        <ContentSection title="The Outcome" content={project.content.outcome} />
                    </>
                )}
            </div>
        </section>
    );
}
