import { MISSION_LOG } from "@/data/about";
import { History } from "lucide-react";
import styles from "./AboutComponents.module.css";

export function MissionLog() {
    return (
        <article
            className={styles.missionCard}
        >
            <h3 className={styles.missionHeader}>
                <History className={styles.historyIcon} aria-hidden="true" />
                MISSION_LOG
            </h3>
            <ol className={styles.timelineContainer}>
                {MISSION_LOG.map((item, index) => {
                    // Determine style variant based on index (Primary, Secondary, Accent)
                    const variantIndex = index > 1 ? 2 : index;
                    const stylesConfig = [
                        { dot: styles.primaryDot, text: styles.primaryText, marker: styles.primaryMarker, titleHover: styles.titlePrimary },
                        { dot: styles.secondaryDot, text: styles.secondaryText, marker: styles.secondaryMarker, titleHover: styles.titleSecondary },
                        { dot: styles.accentDot, text: styles.accentText, marker: styles.accentMarker, titleHover: styles.titleAccent }
                    ][variantIndex];

                    return (
                        <li key={item.company} className={`${styles.timelineItem} group`}>
                            <div className={styles.nodeWrapper}>
                                <div className={`${styles.nodeDot} ${stylesConfig.dot}`} />
                                <div className={index === MISSION_LOG.length - 1 ? styles.connectorLineFade : styles.connectorLine} />
                            </div>
                            <div className={styles.contentBox}>
                                <div className={styles.verticalLine} />
                                <div className={styles.contentHeader}>
                                    <div>
                                        <h4 className={`${styles.roleTitle} ${stylesConfig.titleHover}`}>
                                            {item.company}
                                        </h4>
                                        <p className={`${styles.roleSubtitle} ${stylesConfig.text}`}>
                                            {item.role}
                                        </p>
                                    </div>
                                    <span className={styles.dateTag}>{item.period}</span>
                                </div>
                                <ul className={`${styles.taskList} ${stylesConfig.marker}`}>
                                    {item.tasks.map((task) => (
                                        <li key={task}>{task}</li>
                                    ))}
                                </ul>
                            </div>
                        </li>
                    );
                })}
            </ol>
        </article>
    );
}
