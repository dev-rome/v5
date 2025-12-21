import { notFound } from "next/navigation";
import { PROJECTS } from "@/data/projects";
import { ProjectSidebar } from "@/components/Projects/ProjectSidebar";
import { ProjectMainContent } from "@/components/Projects/ProjectMainContent";
import styles from "./ProjectPage.module.css";

// Generate static params for SSG
export function generateStaticParams() {
    return PROJECTS.map((project) => ({
        slug: project.slug,
    }));
}

export default async function ProjectPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const project = PROJECTS.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    return (
        <main className={styles.pageContainer}>
            <div className={styles.layoutGrid}>
                <ProjectSidebar project={project} />
                <ProjectMainContent project={project} />
            </div>
        </main>
    );
}
