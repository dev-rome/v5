import { Cpu } from "lucide-react";
import { SKILLS } from "@/data/about";
import styles from "./AboutComponents.module.css";

export function SkillsGrid() {
    return (
        <div
            className={styles.skillsCard}
        >
            <h3 className={styles.skillsHeader}>
                <Cpu className="w-4 h-4 text-[var(--secondary)]" />
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
        </div>
    );
}
