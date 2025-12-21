"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProjectCard } from "@/components/Projects/ProjectCard";
import { PROJECTS } from "@/data/projects";
import styles from "./Projects.module.css";

export function Projects() {
    return (
        <section className={styles.sectionContainer} id="projects" aria-labelledby="projects-heading">
            <div className={styles.maxContainer}>
                <SectionHeader
                    title="PROJECTS"
                    subtitle="// QUEST_LOG"
                    titleId="projects-heading"
                />
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

