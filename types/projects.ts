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
    challenge: { text: string; list?: string[]; closingText?: string };
    solution: { text: string; list?: string[]; closingText?: string };
    outcome: { text: string; list?: string[]; closingText?: string };
  };
}

export interface ProjectComponentProps {
  project: Project;
}
