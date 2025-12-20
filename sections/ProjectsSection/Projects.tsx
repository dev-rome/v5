"use client";

import { ProjectHeader } from "@/components/Projects/ProjectHeader";
import { ProjectCard } from "@/components/Projects/ProjectCard";
import { PROJECTS } from "@/data/projects";
import styles from "./Projects.module.css";

export function Projects() {
    return (
        <section className={styles.sectionContainer} id="projects">
            <div className={styles.maxContainer}>
                <ProjectHeader />
                <div className={styles.projectsGrid}>
                    {PROJECTS.map((project) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

