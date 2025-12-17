import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Methodology } from "@/sections/Methodology";
// import { Projects } from "@/components/sections/Projects";
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
      {/* <Projects /> */}
      {/* <Contact /> */}
    </main>
  );
};
