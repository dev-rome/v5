import { Terminal } from "lucide-react";
import { BIO } from "@/data/about";
import styles from "./AboutComponents.module.css";

export function BioTerminal() {
    return (
        <article
            className={styles.terminalCard}
        >
            <div className={styles.scanline} />
            <div className={styles.terminalHeader}>
                <Terminal className="w-4 h-4" />
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
