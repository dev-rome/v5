import { ParticleBackground } from "../../components/Hero/ParticleBackground";
import { HeroAvatar } from "../../components/Hero/HeroAvatar";
import { ScrollButton } from "../../components/Hero/ScrollButton";
import { Moon } from "../../components/Hero/Moon";
import styles from "./Hero.module.css";
import pbStyles from "../../components/Hero/ParticleBackground.module.css";

export function Hero() {
  return (
    <section className={styles.heroSection} id="hero" aria-label="Hero section">
      <div className={pbStyles.nightGradient} />
      <Moon />
      <ParticleBackground />
      <div className={styles.contentContainer}>
        <div className={styles.avatarWrapper}>
          <HeroAvatar />
        </div>
        <p className={styles.heroDescription}>
          Frontend Engineer driven by a deep love for coding and making visions come to life.
          Crafting pixel-perfect experiences with modern stacks, ready for the next mission.
        </p>
      </div>
      <ScrollButton />
    </section>
  );
}
