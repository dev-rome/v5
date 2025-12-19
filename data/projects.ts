import { Project } from "@/types/projects";

export const PROJECTS: Project[] = [
    {
        id: 1,
        title: "Recipe Finder",
        shortDesc: "A smart culinary companion that bridges the gap between your pantry and your next meal.",
        description: "A recipe finder app that allows you to search for recipes by name, ingredients, or filter prep time and cooking time. I utilized dynamic Next.js routing and focused heavily on optimizing page performance and speed.",
        tech: ["Next.js", "Tailwind", "TypeScript", "Storybook"],
        links: { demo: "https://fm-recipe-finder.vercel.app/", repo: "https://github.com/dev-rome/FM-Recipe-Finder" },
        color: "#ff6b6b",
        image: "/images/recipe-finder.png"
    },
    {
        id: 2,
        title: "Weather App",
        shortDesc: "A purpose-built meteorological dashboard designed for clarity and immediacy.",
        description: "A weather app that allows you to search for weather by city name, view 7 day forecast, current weather conditions, and hourly forecast. The application was built with a strong emphasis on speed and performance.",
        tech: ["Next.js", "Weather API", "Tailwind", "TypeScript", "Shadcn"],
        links: { demo: "https://fm-weather-app-cyan.vercel.app/", repo: "https://github.com/dev-rome/FM-Weather-App" },
        color: "#4cc9f0",
        image: "/images/weather-app.png"
    },
    {
        id: 3,
        title: "Timber and Hatchet",
        shortDesc: "A high-performance recruitment platform connecting US enterprises with elite nearshore talent.",
        description: "A company leveraging Astro, React, and Tailwind CSS to hire nearshore engineers.",
        tech: ["Astro", "React", "Tailwind CSS", "JavaScript"],
        links: { demo: "https://astro-website-v1.netlify.app/", repo: "https://github.com/dev-rome/Website-Project-v1" },
        color: "#a8dadc",
        image: "/images/timber-and-hatchet.png"
    },
    {
        id: 4,
        title: "Dictionary Web App",
        shortDesc: "A pure linguistics tool prioritizing focus, typography, and speed.",
        description: "A web app integrating the Free Dictionary API to provide quick and reliable word definitions.",
        tech: ["HTML", "CSS", "JavaScript", "Dictionary API"],
        links: { demo: "https://inquisitive-biscochitos-13dfd2.netlify.app/", repo: "https://github.com/dev-rome/Dictionary-Web-App" },
        color: "#fca311",
        image: "/images/dictionary-app.png"
    }
];
