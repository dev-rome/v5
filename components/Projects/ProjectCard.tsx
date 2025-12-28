import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";
import { Project } from "@/types/projects";
import styles from "./ProjectCard.module.css";

export function ProjectCard({ project }: { project: Project }) {
    return (
        <article className={styles.projectCardWrapper}>
            <div
                className={styles.projectCard}
                data-id={project.id}
                style={{ '--project-color': project.color } as React.CSSProperties}
            >
                <Link
                    href={`/projects/${project.slug}`}
                    className={styles.cardLinkOverlay}
                    aria-label={`View case study for ${project.title}`}
                />
                <div className={styles.imageContainer}>
                    {project.image ? (
                        <Image
                            src={project.image}
                            alt={`${project.title} Project Image`}
                            className={styles.projectImage}
                            width={500}
                            height={500}
                        />
                    ) : (
                        <div className={styles.imagePlaceholder}>
                            0{project.id}
                        </div>
                    )}
                </div>
                <div className={styles.contentBody}>
                    <div className={styles.contentHeader}>
                        <h3 className={styles.projectTitle}>{project.title}</h3>
                        <p className={styles.projectDescShort}>{project.shortDesc}</p>
                    </div>

                    <div className={styles.cardFooter}>
                        <div className={styles.techStack}>
                            {project.tech.map(t => (
                                <span key={t} className={styles.techTag}>{t}</span>
                            ))}
                        </div>
                        <div className={styles.actionButtons}>
                            {project.links.repo && (
                                <a
                                    href={project.links.repo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.iconButton}
                                    onClick={(e) => e.stopPropagation()}
                                    aria-label="View Source Code"
                                >
                                    <Github size={18} />
                                </a>
                            )}
                            {project.links.demo && (
                                <a
                                    href={project.links.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.iconButton}
                                    onClick={(e) => e.stopPropagation()}
                                    aria-label="View Live Demo"
                                >
                                    <ExternalLink size={18} />
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}
