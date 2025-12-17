import { Project } from "@/types/projects";

export const PROJECTS: Project[] = [
    {
        id: 1,
        title: "Neon Nexus",
        shortDesc: "A cyberpunk-inspired dashboard for visualizing real-time crypto assets.",
        description: "Neon Nexus is a high-performance dashboard designed for traders who value aesthetics as much as data. Built with Next.js and D3.js, it visualizes real-time market data using intricate, glowing charts. The interface is fully responsive and features a custom-built theming engine.",
        tech: ["Next.js", "TypeScript", "D3.js", "Tailwind"],
        links: { demo: "#", repo: "#" },
        color: "#00ff9d"
    },
    {
        id: 2,
        title: "Void Commerce",
        shortDesc: "Headless e-commerce starter kit with a brutalist design system.",
        description: "An experimental e-commerce frontend built on top of Shopify's Storefront API. It abandons traditional e-commerce layouts for a brutalist, typography-centric design. Features include view transitions, optimistic UI updates, and a completely custom cart implementation.",
        tech: ["React", "Shopify API", "Framer Motion", "Zustand"],
        links: { demo: "#", repo: "#" },
        color: "#bd00ff"
    },
    {
        id: 3,
        title: "Synth AI",
        shortDesc: "Generative art platform powered by stable diffusion models.",
        description: "Synth AI allows users to generate, remix, and mint unique digital artworks. The platform integrates with multiple AI models to offer a wide range of styles. It features a node-based editor for combining different generation parameters.",
        tech: ["Vue.js", "Python", "WebSockets", "Three.js"],
        links: { repo: "#" },
        color: "#00d8ff"
    }
];
