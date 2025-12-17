// import styles from "./Projects.module.css";

// export function Projects() {
//   const projects = [
//     {
//       title: "Project Alpha",
//       desc: "A high-performance web application.",
//       tech: ["Next.js", "Tailwind", "Supabase"]
//     },
//     {
//       title: "Neon Dash",
//       desc: "Interactive dashboard with real-time data.",
//       tech: ["React", "D3.js", "Framer Motion"]
//     },
//     {
//       title: "Cyber Store",
//       desc: "E-commerce platform with futuristic UI.",
//       tech: ["Shopify", "Remix"]
//     }
//   ];

//   return (
//     <section className={styles.sectionContainer}>
//       <div className={styles.maxContainer}>
//         <h2 className={styles.sectionTitle}>
//           <span className={styles.sectionNumber}>03.</span> QUEST_LOG
//         </h2>
//         <div className={styles.projectsGrid}>
//           {projects.map((project, i) => (
//             <div key={i} className={styles.projectCard}>
//               <div className={styles.imageContainer}>
//                 <span className={styles.placeholderText}>IMG_placeholder.png</span>
//               </div>
//               <div className={styles.contentBody}>
//                 <h3 className={styles.projectTitle}>{project.title}</h3>
//                 <p className={styles.projectDesc}>{project.desc}</p>
//                 <div className={styles.tagsContainer}>
//                   {project.tech.map((t, j) => (
//                     <span key={j} className={styles.techTag}>
//                       {t}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
