export interface ProjectSectionContent {
  text: string;
  list?: string[];
  closingText?: string;
}

export interface ContentSectionProps {
  title: string;
  content: ProjectSectionContent;
}

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
  slug: string;
  content?: {
    challenge: ProjectSectionContent;
    solution: ProjectSectionContent;
    outcome: ProjectSectionContent;
  };
}

export interface ProjectComponentProps {
  project: Project;
}
