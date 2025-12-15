export function Projects() {
  // Placeholder data - waiting for user input or using placeholders
  const projects = [
    {
      title: "Project Alpha",
      desc: "A high-performance web application.",
      tech: ["Next.js", "Tailwind", "Supabase"]
    },
    {
      title: "Neon Dash",
      desc: "Interactive dashboard with real-time data.",
      tech: ["React", "D3.js", "Framer Motion"]
    },
    {
      title: "Cyber Store",
      desc: "E-commerce platform with futuristic UI.",
      tech: ["Shopify", "Remix"]
    }
  ];

  return (
    <section className="py-24 w-full px-4 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold font-mono mb-12 flex items-center gap-2">
          <span className="text-primary">03.</span> QUEST_LOG
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div key={i} className="border border-white/10 bg-white/5 rounded-lg overflow-hidden group hover:border-accent/50 transition-colors">
              <div className="h-48 bg-neutral-900 w-full relative group-hover:bg-neutral-800 transition-colors flex items-center justify-center">
                 <span className="font-mono text-neutral-600 group-hover:text-neutral-500">IMG_placeholder.png</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">{project.title}</h3>
                <p className="text-neutral-400 text-sm mb-4">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, j) => (
                    <span key={j} className="text-xs font-mono px-2 py-1 bg-white/5 rounded text-neutral-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
