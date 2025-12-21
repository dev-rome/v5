import { Project } from "@/types/projects";

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Recipe Finder",
    shortDesc:
      "A smart culinary companion that bridges the gap between your pantry and your next meal.",
    description:
      "\nThis project was completed as a Frontend Mentor challenge and used as a practical way to strengthen my skills in Next.js, particularly around dynamic routing, search and filtering, and overall frontend code quality.\n\nThe application allows users to discover recipes by searching and filtering through structured data, with a focus on responsiveness, performance, and clean UI interactions.",
    tech: ["Next.js", "Tailwind", "TypeScript", "Storybook"],
    links: {
      demo: "https://fm-recipe-finder.vercel.app/",
      repo: "https://github.com/dev-rome/FM-Recipe-Finder",
    },
    color: "#ff6b6b",
    image: "/images/recipe-finder.png",
    slug: "recipe-finder",
    content: {
      challenge: {
        text: "The goal was to build a recipe discovery experience that:",
        list: [
          "Supports searching by recipe name and ingredients",
          "Includes filtering by preparation and cooking time",
          "Maintains fast page transitions and a smooth user experience",
          "Stays close to the provided design while writing scalable, readable code",
        ],
      },
      solution: {
        text: "The application was built with Next.js and TypeScript, using a mix of styling and tooling to keep the codebase organized and flexible.\n\nKey highlights:",
        list: [
          "Dynamic routing for individual recipe pages",
          "Search and filtering logic powered by data from a local JSON file",
          "Styling with Tailwind CSS for layout and responsiveness, combined with CSS Modules for scoped component styles",
          "Storybook for developing and testing UI components in isolation",
        ],
      },
      outcome: {
        text: "The final result is a responsive, fast-loading recipe finder that meets the challenge requirements and feels intuitive to use.\n\nThrough this project, I strengthened my understanding of:",
        list: [
          "Next.js routing patterns",
          "Building filter-driven interfaces",
          "Writing clearer, more maintainable frontend code",
          "Integrating Storybook into a real project workflow",
        ],
      },
    },
  },
  {
    id: 2,
    title: "Weather App",
    shortDesc:
      "A purpose-built meteorological dashboard designed for clarity and immediacy.",
    description:
      "\nThis project was completed as a Frontend Mentor challenge and served as a hands-on way to deepen my experience with data fetching in Next.js, as well as building polished, responsive interfaces using Tailwind CSS and shadcn/ui.\n\nThe application provides detailed, real-time weather information with a strong emphasis on usability, clarity, and performance.",
    tech: ["Next.js", "Weather API", "Tailwind", "TypeScript", "Shadcn"],
    links: {
      demo: "https://fm-weather-app-cyan.vercel.app/",
      repo: "https://github.com/dev-rome/FM-Weather-App",
    },
    color: "#4cc9f0",
    image: "/images/weather-app.png",
    slug: "weather-app",
    content: {
      challenge: {
        text: "The goal was to build a weather dashboard that:",
        list: [
          "Fetches and displays accurate weather data from external APIs",
          "Supports searching by location",
          "Presents both hourly and 7-day forecasts in a clear, accessible format",
          "Allows users to switch between different measurement units without friction",
          "Maintains a clean and responsive UI across devices",
        ],
      },
      solution: {
        text: "The application was built with Next.js and TypeScript, using a modern UI stack and multiple data sources.\n\nKey highlights:",
        list: [
          "Weather data fetched from the OpenWeather API and Open-Meteo API",
          "Search functionality for retrieving weather by location",
          "Hourly forecast and 7-day forecast views",
          "Unit switching for Temperature (C/F), Wind speed (km/h/mph), and Precipitation (mm)",
          "Styling and layout handled with Tailwind CSS, with shadcn/ui components for consistency and accessibility",
        ],
      },
      outcome: {
        text: "The final result is a fully responsive weather application that delivers real-time forecasts in an intuitive and easy-to-navigate interface.\n\nThrough this project, I improved my ability to:",
        list: [
          "Work with multiple external APIs",
          "Manage complex data-driven UI states",
          "Build reusable UI components with Tailwind and shadcn",
          "Structure Next.js applications for clarity and scalability",
        ],
      },
    },
  },
  {
    id: 3,
    title: "Timber and Hatchet",
    shortDesc:
      "A high-performance recruitment platform connecting US enterprises with elite nearshore talent.",
    description:
      "\nThis project was completed under the guidance of a mentor to improve my frontend development skills. It is a recruitment platform built using Astro, React, JavaScript, and CSS. The goal was to learn best practices in component-based architecture, responsive design, and modern frontend workflows while collaborating with a UI/UX team to ensure design fidelity.",
    tech: ["Astro", "React", "CSS", "JavaScript"],
    links: {
      demo: "https://astro-website-v1.netlify.app/",
      repo: "https://github.com/dev-rome/Website-Project-v1",
    },
    color: "#a8dadc",
    image: "/images/timber-and-hatchet.png",
    slug: "timber-and-hatchet",
    content: {
      challenge: {
        text: "The project provided an opportunity to learn by building a real-world web application, focusing on:",
        list: [
          "Integrating dynamic content with React and Astro",
          "Applying responsive design principles",
          "Translating UI/UX designs into functional, interactive components",
          "Writing clean, readable, and performant code",
        ],
      },
      solution: {
        text: "I worked on the project using Astro for modern static site generation, React for interactive components, and standard CSS/JavaScript for styling and behavior. Other key contributions included:",
        list: [
          "Implementing responsive layouts for desktop and mobile",
          "Collaborating with the UI/UX team to translate designs into functional interfaces",
          "Applying mentor guidance on code quality, project structure, and best practices",
          "Experimenting with performance optimizations and dynamic content rendering",
        ],
      },
      outcome: {
        text: "Through this mentorship project, I gained hands-on experience in:",
        list: [
          "Writing scalable and maintainable frontend code",
          "Applying modern frontend tools like Astro and React",
          "Implementing responsive and accessible web interfaces",
          "Working closely with a UI/UX team to ensure design consistency",
          "Collaborating and learning from an experienced mentor",
        ],
        closingText:
          "This project helped solidify my understanding of frontend development in a real-world context and strengthened my ability to write professional, production-ready code while collaborating with designers.",
      },
    },
  },
  {
    id: 4,
    title: "Dictionary Web App",
    shortDesc:
      "A pure linguistics tool prioritizing focus, typography, and speed.",
    description:
      "\nThis project is a Frontend Mentor challenge aimed at building a modern, responsive dictionary application using HTML, CSS, and JavaScript. Users can search for any word and view detailed results, including phonetics, meanings, and audio pronunciations. The app also supports light and dark themes.",
    tech: ["HTML", "CSS", "JavaScript", "Dictionary API"],
    links: {
      demo: "https://inquisitive-biscochitos-13dfd2.netlify.app/",
      repo: "https://github.com/dev-rome/Dictionary-Web-App",
    },
    color: "#fca311",
    image: "/images/dictionary-app.png",
    slug: "dictionary-app",
    content: {
      challenge: {
        text: "The goal was to create a dictionary interface that includes:",
        list: [
          "A search input for users to look up words",
          "Display of definitions, parts of speech, and pronunciations",
          "A clean, responsive layout across devices",
          "Light and dark theme support",
        ],
      },
      solution: {
        text: "The application was implemented using:\n- HTML for semantic structure\n- CSS for responsive layouts, design, and theme switching\n- JavaScript for data fetching, dynamic UI updates, and managing theme state\n\nKey implementation details:",
        list: [
          "Fetching word definitions from the Free Dictionary API",
          "Handling user input and search interactions",
          "Displaying multiple meanings and parts of speech when available",
          "Managing light/dark theme toggle",
          "Gracefully handling cases where a word is not found",
          "Ensuring responsive behavior across desktop, tablet, and mobile screens",
        ],
      },
      outcome: {
        text: "The result is a responsive, user-friendly dictionary app that provides detailed word definitions and supports light and dark modes.\n\nThrough this project, I improved my skills in:",
        list: [
          "Working with asynchronous JavaScript and API data",
          "Manipulating the DOM for dynamic content",
          "Implementing theme toggling",
          "Structuring semantic HTML and responsive layouts",
          "Handling edge cases such as missing or invalid API results",
        ],
      },
    },
  },
];
