"use client";

import { useState, useEffect } from "react";
import { ProjectHeader } from "@/components/Projects/ProjectHeader";
import { ProjectCard } from "@/components/Projects/ProjectCard";
import { ProjectModal } from "@/components/Projects/ProjectModal";
import { Project } from "@/types/projects";
import { PROJECTS } from "@/data/projects";
import styles from "./Projects.module.css";

export function Projects() {
    const [clickedId, setClickedId] = useState<number | null>(null);
    const [modalProject, setModalProject] = useState<Project | null>(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

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
        if (isMobile) {
            setModalProject(PROJECTS.find(p => p.id === id) || null);
            setClickedId(id);
        } else {
            setClickedId(id);
        }
    };

    const handleCloseModal = () => {
        setModalProject(null);
        // Start card return animation slightly before modal finishes
        setTimeout(() => setClickedId(null), 300);
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
                            clickedId={clickedId}
                            isMobile={isMobile}
                            onCardClick={handleCardClick}
                            onExitComplete={(p) => {
                                if (clickedId === p.id && !modalProject) {
                                    setModalProject(p);
                                }
                            }}
                        />
                    ))}
                </div>
            </div>
            <ProjectModal
                project={modalProject}
                isMobile={isMobile}
                onClose={handleCloseModal}
            />
        </section>
    );
}

