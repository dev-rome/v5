export function Skills() {
  const skills = [
    "HTML", "CSS", "JavaScript", "React/Next.js", "TypeScript", 
    "Storybook", "GraphQL", "TailwindCSS", "Vitest/Jest"
  ];

  return (
    <section className="py-24 w-full px-4 bg-black/80 border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold font-mono mb-12 text-center md:text-left">
          <span className="text-secondary">#</span> SKILL_TREE
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="group relative p-4 border border-white/10 hover:border-primary/50 bg-white/5 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="absolute top-0 right-0 p-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-2 h-2 bg-primary rounded-full shadow-[0_0_10px_var(--color-primary)]"></div>
              </div>
              <p className="text-center md:text-left font-mono text-sm group-hover:text-primary transition-colors">
                {skill}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
