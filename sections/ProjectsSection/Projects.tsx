"use client";

import { useState, useEffect } from "react";
import { ProjectHeader } from "@/components/Projects/ProjectHeader";
import { ProjectCard } from "@/components/Projects/ProjectCard";
import { ProjectModal } from "@/components/Projects/ProjectModal";
import { Project } from "@/types/projects";
import { PROJECTS } from "@/data/projects";
import styles from "./Projects.module.css";

export function Projects() {
    const [modalProject, setModalProject] = useState<Project | null>(null);

    useEffect(() => {
        if (modalProject) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [modalProject]);

    const handleCardClick = (id: number) => {
        setModalProject(PROJECTS.find(p => p.id === id) || null);
    };

    const handleCloseModal = () => {
        setModalProject(null);
    };

    return (
        <section className={styles.sectionContainer} id="projects">
            <div className={styles.maxContainer}>
                <ProjectHeader />
                <div className={styles.projectsGrid}>
                    {PROJECTS.map((project) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            onCardClick={handleCardClick}
                        />
                    ))}
                </div>
            </div>
            <ProjectModal
                project={modalProject}
                onClose={handleCloseModal}
            />
        </section>
    );
}

