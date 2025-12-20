"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { X, ExternalLink, Github } from "lucide-react";
import { ProjectModalProps } from "@/types/projects";
import styles from "./ProjectModal.module.css";

export function ProjectModal({ project, isMobile, onClose, onExitComplete }: ProjectModalProps) {
    return (
        <AnimatePresence
            onExitComplete={onExitComplete}
        >
            {project && (
                <motion.div
                    key="modal-overlay"
                    className={styles.modalOverlay}
                    onClick={onClose}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <motion.div
                        className={styles.modalCard}
                        style={{ borderColor: project.color }}
                        onClick={(e) => e.stopPropagation()}
                        initial={isMobile ? { opacity: 0, scale: 0.95 } : { y: -1000, opacity: 0 }}
                        animate={{ y: 0, opacity: 1, scale: 1 }}
                        exit={isMobile ? { opacity: 0, scale: 0.95 } : {
                            y: -1000,
                            opacity: 0,
                            transition: { duration: 0.8, ease: "easeInOut" }
                        }}
                        transition={isMobile ? { duration: 0.2 } : {
                            type: "spring",
                            damping: 30,
                            stiffness: 400,
                            mass: 0.5
                        }}
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
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
