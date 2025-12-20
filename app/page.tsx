import { Hero } from "@/sections/HeroSection/Hero";
import { About } from "@/sections/AboutSection/About";
import { Methodology } from "@/sections/MethodologySection/Methodology";
import { Projects } from "@/sections/ProjectsSection/Projects";
import { Testimonials } from "@/sections/TestimonialsSection/Testimonials";
import { Contact } from "@/sections/ContactSection/Contact";
import styles from "./Layout.module.css";

export default function Home() {
  return (
    <main className={styles.pageMain}>
      <Hero />
      <About />
      <Methodology />
      <Projects />
      <Testimonials />
      <Contact />
    </main>
  );
};
