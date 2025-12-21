import { User } from "lucide-react";
import styles from "./AboutComponents.module.css";

export function ProfileCard() {
    return (
        <article
            className={styles.profileCard}
        >
            <div className={styles.profileGradient} />
            <div className={styles.profileHeader}>
                <div className={styles.avatarBox}>
                    <User className="w-8 h-8" />
                </div>
                <div>
                    <h3 className={styles.profileName}>Jerome Haynes</h3>
                    <p className={styles.profileRole}>Software Engineer</p>
                </div>
            </div>
            <div className={styles.infoStack}>
                <div className={styles.infoBox}>
                    <p className={styles.infoLabel}>Current Guild</p>
                    <p className={styles.infoValue}>Freelance / Open to Work</p>
                </div>
                <div className={styles.infoBox}>
                    <p className={styles.infoLabel}>Specialization</p>
                    <p className={styles.infoValue}>Frontend Engineer</p>
                </div>
            </div>
        </article>
    );
}
