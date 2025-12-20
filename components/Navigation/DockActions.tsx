"use client";

import { FileDown, Mail } from "lucide-react";
import styles from "./DockActions.module.css";

export function DockActions() {
    const scrollToContact = () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <a
                href="/resume.pdf"
                download
                className={styles.dockItem}
                aria-label="Download CV"
            >
                <FileDown size={20} />
                <span className={styles.tooltip}>Download CV</span>
            </a>
            <button
                type="button"
                onClick={scrollToContact}
                className={styles.dockItem}
                aria-label="Contact Me"
            >
                <Mail size={20} />
                <span className={styles.tooltip}>Contact</span>
            </button>
        </>
    );
}
