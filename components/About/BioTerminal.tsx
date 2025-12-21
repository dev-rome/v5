import { BIO } from "@/data/about";
import { Terminal } from "lucide-react";
import styles from "./AboutComponents.module.css";

export function BioTerminal() {
    return (
        <article
            className={styles.terminalCard}
            aria-label="Developer biography presented in terminal-style format"
        >
            <div className={styles.scanline} />
            <div className={styles.terminalHeader}>
                <Terminal className={styles.terminalIcon} aria-hidden="true" />
                <span>bio_decryption.exe</span>
            </div>
            <div className={styles.terminalBody}>
                {BIO.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                ))}
            </div>
        </article>
    );
}
