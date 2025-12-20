import { History } from "lucide-react";
import { MISSION_LOG } from "@/data/about";
import styles from "./AboutComponents.module.css";

export function MissionLog() {
    return (
        <div
            className={styles.missionCard}
        >
            <h3 className={styles.missionHeader}>
                <History className="w-4 h-4 text-[var(--accent)]" />
                MISSION_LOG
            </h3>
            <div className={styles.timelineContainer}>
                {MISSION_LOG.map((item, index) => (
                    <div key={index} className={`${styles.timelineItem} group`}>
                        <div className={styles.nodeWrapper}>
                            <div className={`${styles.nodeDot} ${index === 0 ? styles.primaryDot : index === 1 ? styles.secondaryDot : styles.accentDot}`} />
                            <div className={index === MISSION_LOG.length - 1 ? styles.connectorLineFade : styles.connectorLine} />
                        </div>
                        <div className={styles.contentBox}>
                            <div className={styles.verticalLine} />
                            <div className={styles.contentHeader}>
                                <div>
                                    <h4 className={`${styles.roleTitle} group-hover:text-[var(--${index === 0 ? 'primary' : index === 1 ? 'secondary' : 'accent'})]`}>
                                        {item.company}
                                    </h4>
                                    <p className={`${styles.roleSubtitle} ${index === 0 ? styles.primaryText : index === 1 ? styles.secondaryText : styles.accentText}`}>
                                        {item.role}
                                    </p>
                                </div>
                                <span className={styles.dateTag}>{item.period}</span>
                            </div>
                            <ul className={`${styles.taskList} ${index === 0 ? styles.primaryMarker : index === 1 ? styles.secondaryMarker : styles.accentMarker}`}>
                                {item.tasks.map((task, tIndex) => (
                                    <li key={tIndex}>{task}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
