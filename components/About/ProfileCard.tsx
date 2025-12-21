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
                    <User className={styles.userIcon} aria-hidden="true" />
                </div>
                <div>
                    <h3 className={styles.profileName}>Jerome Haynes</h3>
                    <p className={styles.profileRole}>Software Engineer</p>
                </div>
            </div>
            <dl className={styles.infoStack}>
                <div className={styles.infoBox}>
                    <dt className={styles.infoLabel}>Current Guild</dt>
                    <dd className={styles.infoValue}>Freelance / Open to Work</dd>
                </div>
                <div className={styles.infoBox}>
                    <dt className={styles.infoLabel}>Specialization</dt>
                    <dd className={styles.infoValue}>Frontend Engineer</dd>
                </div>
            </dl>
        </article>
    );
}
