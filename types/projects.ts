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

export interface ProjectModalProps {
    project: Project | null;
    onClose: () => void;
}

export interface ProjectCardProps {
    project: Project;
    onCardClick: (id: number) => void;
}
