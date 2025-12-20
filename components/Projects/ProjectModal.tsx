"use client";

import Image from "next/image";
import { X, ExternalLink, Github } from "lucide-react";
import { Project } from "@/types/projects";
import styles from "./ProjectModal.module.css";

export function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
    if (!project) return null;

    return (
        <div
            className={styles.modalOverlay}
            onClick={onClose}
        >
            <div
                className={styles.modalCard}
                style={{ borderColor: project.color }}
                onClick={(e) => e.stopPropagation()}
            >
                <button className={styles.closeButton} onClick={onClose}>
                    <X size={24} />
                </button>
                <div
                    className={styles.modalImageHeader}
                    style={{ borderBottom: `2px solid ${project.color}` }}
                >
                    {project.image ? (
                        <Image
                            src={project.image}
                            alt={project.title}
                            className={styles.modalImage}
                            fill
                            sizes="(max-width: 768px) 100vw, 800px"
                        />
                    ) : (
                        <div className={styles.imagePlaceholder} style={{ color: project.color, fontSize: "5rem" }}>
                            0{project.id}
                        </div>
                    )}
                </div>
                <div className={styles.modalContent}>
                    <h3 className={styles.modalTitle}>{project.title}</h3>
                    <div className={styles.techStack} style={{ marginBottom: "1.5rem" }}>
                        {project.tech.map(t => (
                            <span key={t} className={styles.techTag} style={{ borderColor: project.color, color: project.color }}>
                                {t}
                            </span>
                        ))}
                    </div>
                    <p className={styles.modalDescription}>
                        {project.description}
                    </p>
                    <div className={styles.linkGroup}>
                        {project.links.demo && (
                            <a href={project.links.demo} className={styles.projectLink} target="_blank" rel="noopener noreferrer">
                                <ExternalLink size={18} />
                                Live Demo
                            </a>
                        )}
                        {project.links.repo && (
                            <a href={project.links.repo} className={styles.repoLink} target="_blank" rel="noopener noreferrer">
                                <Github size={18} />
                                Source Code
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
