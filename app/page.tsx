import { Hero } from "@/sections/HeroSection/Hero";
import { About } from "@/sections/AboutSection/About";
import { Methodology } from "@/sections/MethodologySection/Methodology";
import { Projects } from "@/sections/ProjectsSection/Projects";
// import { Contact } from "@/components/sections/Contact";
import { FloatingControls } from "@/components/FloatingControls";
import styles from "./Layout.module.css";

export default function Home() {
  return (
    <main className={styles.pageMain}>
      <FloatingControls />
      <Hero />
      <About />
      <Methodology />
      <Projects />
      {/* <Contact /> */}
    </main>
  );
};
