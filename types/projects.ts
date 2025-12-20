export interface Project {
    id: number;
    title: string;
    description: string;
    shortDesc: string;
    tech: string[];
    links: {
        demo?: string;
        repo?: string;
    };
    color: string;
    image?: string;
}

export interface ProjectCardProps {
    project: Project;
}
