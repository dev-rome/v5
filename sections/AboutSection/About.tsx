import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProfileCard } from "../../components/About/ProfileCard";
import { SkillsGrid } from "../../components/About/SkillsGrid";
import { BioTerminal } from "../../components/About/BioTerminal";
import { MissionLog } from "../../components/About/MissionLog";
import styles from "./About.module.css";

export function About() {
  return (
    <section id="about" className={styles.sectionContainer} aria-labelledby="about-heading">
      <div className={styles.bgDecorRight} aria-hidden="true"/>
      <div className={styles.bgDecorLeft} aria-hidden="true"/>
      <div className={styles.maxContainer}>
        <SectionHeader
          title="About"
          subtitle="v5.0.1 // CLASSIFIED"
          titleId="about-heading"
        />
        <div className={styles.contentGrid}>
          <div className={styles.leftColumn}>
            <ProfileCard />
            <SkillsGrid />
          </div>
          <div className={styles.rightColumn}>
            <BioTerminal />
            <MissionLog />
          </div>
        </div>
      </div>
    </section>
  );
}
