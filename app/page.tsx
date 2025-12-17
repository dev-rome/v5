import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Methodology } from "@/sections/Methodology";
// import { Projects } from "@/components/sections/Projects";
// import { Contact } from "@/components/sections/Contact";
import { FloatingControls } from "@/components/FloatingControls";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen w-full relative">
      <FloatingControls />
      <Hero />
      <About />
      <Methodology />
      {/* <Projects /> */}
      {/* <Contact /> */}
    </main>
  );
};
