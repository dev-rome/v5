import { SKILLS } from "@/data/about";
import { Cpu } from "lucide-react";
import styles from "./AboutComponents.module.css";

export function SkillsGrid() {
    return (
        <article
            className={styles.skillsCard}
        >
            <h3 className={styles.skillsHeader}>
                <Cpu className={styles.cpuIcon} aria-hidden="true"/>
                SKILLS
            </h3>
            <div className={styles.skillsContainer}>
                {SKILLS.map((skill) => (
                    <span
                        key={skill}
                        className={styles.skillTag}
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </article>
    );
}
