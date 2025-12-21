import { SectionHeaderProps } from "@/types/ui";
import styles from "./SectionHeader.module.css";

export function SectionHeader({
    title,
    subtitle,
    titleId,
    className = "",
    titleClassName = "",
    subtitleClassName = ""
}: SectionHeaderProps) {
    return (
        <header className={`${styles.header} ${className}`}>
            <h2 id={titleId || undefined} className={`${styles.title} ${titleClassName}`}>{title}</h2>
            <span className={`${styles.subtitle} ${subtitleClassName}`}>{subtitle}</span>
        </header>
    );
}
