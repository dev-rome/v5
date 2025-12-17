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
}

export interface ProjectModalProps {
    project: Project | null;
    isMobile: boolean;
    onClose: () => void;
    onExitComplete: () => void;
}

export interface ProjectCardProps {
    project: Project;
    clickedId: number | null;
    isMobile: boolean;
    onCardClick: (id: number) => void;
    onExitComplete: (project: Project) => void;
}
