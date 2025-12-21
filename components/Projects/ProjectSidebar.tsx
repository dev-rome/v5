import Link from "next/link";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import { ProjectComponentProps } from "@/types/projects";
import styles from "./ProjectSidebar.module.css";

export function ProjectSidebar({ project }: ProjectComponentProps) {
    return (
        <aside className={styles.sidebar}>
            <Link href="/#projects" className={styles.backButton}>
                <ArrowLeft size={16} />
                Back to Projects
            </Link>
            <div>
                <h1 className={styles.projectTitle}>{project.title}</h1>
                <p className={styles.projectDesc} style={{ marginTop: '1rem' }}>{project.shortDesc}</p>
            </div>
            <div className={styles.statGrid}>
                <div className={styles.statItem}>
                    <span className={styles.statLabel}>Role</span>
                    <span className={styles.statValue}>Frontend Engineer</span>
                </div>
                <div className={styles.statItem}>
                    <span className={styles.statLabel}>Stack</span>
                    <div className={styles.techStack}>
                        {project.tech.map(t => (
                            <span key={t} className={styles.techTag}>{t}</span>
                        ))}
                    </div>
                </div>
            </div>
            <div className={styles.linksContainer}>
                {project.links.demo && (
                    <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className={`${styles.linkButton} ${styles.primaryLink}`}>
                        <ExternalLink size={20} />
                        Live Demo
                    </a>
                )}
                {project.links.repo && (
                    <a href={project.links.repo} target="_blank" rel="noopener noreferrer" className={`${styles.linkButton} ${styles.secondaryLink}`}>
                        <Github size={20} />
                        Source Code
                    </a>
                )}
            </div>
            <div className={styles.logoChar} style={{ color: project.color }}>
                {project.title[0]}
            </div>
        </aside>
    );
}
