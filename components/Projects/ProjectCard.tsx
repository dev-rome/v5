"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { ProjectCardProps } from "@/types/projects";
import styles from "./ProjectCard.module.css";

export function ProjectCard({ project, clickedId, isMobile, onCardClick, onExitComplete }: ProjectCardProps) {
    return (
        <div className={styles.projectCardWrapper}>
            <AnimatePresence
                mode="wait"
                onExitComplete={() => {
                    if (clickedId === project.id) {
                        onExitComplete(project);
                    }
                }}
            >
                {clickedId !== project.id && (
                    <motion.div
                        onClick={() => onCardClick(project.id)}
                        className={styles.projectCard}
                        whileHover={{ y: -5, borderColor: project.color, transition: { duration: 0.2 } }}
                        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                        initial={isMobile ? { opacity: 0 } : { y: -20, opacity: 0 }}
                        whileInView={isMobile ? { opacity: 1 } : { y: 0, opacity: 1 }}
                        viewport={{ once: true, margin: "-50px" }}
                        exit={isMobile ? {
                            opacity: 0,
                            transition: { duration: 0.2 }
                        } : {
                            y: -800,
                            opacity: 0,
                            scale: 0.95,
                            transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
                        }}
                    >
                        <div
                            className={styles.imageContainer}
                            style={{ borderBottom: `2px solid ${project.color}` }}
                        >
                            {project.image ? (
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    className={styles.projectImage}
                                    width={500}
                                    height={500}
                                />
                            ) : (
                                <div className={styles.imagePlaceholder} style={{ color: project.color }}>
                                    0{project.id}
                                </div>
                            )}
                            <div className={styles.cardHoverOverlay}>
                                <ArrowUpRight size={32} />
                            </div>
                        </div>
                        <div className={styles.contentBody}>
                            <h3 className={styles.projectTitle}>{project.title}</h3>
                            <p className={styles.projectDescShort}>{project.shortDesc}</p>
                            <div className={styles.techStack}>
                                {project.tech.map(t => (
                                    <span key={t} className={styles.techTag}>{t}</span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
