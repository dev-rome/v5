"use client";

import { useState } from "react";
import { FileDown, Mail } from "lucide-react";
import { ContactModal } from "../Contact/ContactModal";
import styles from "./DockActions.module.css";

export function DockActions() {
    const [isContactOpen, setIsContactOpen] = useState(false);

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
                onClick={() => setIsContactOpen(true)}
                className={styles.dockItem}
                aria-label="Contact Me"
            >
                <Mail size={20} />
                <span className={styles.tooltip}>Contact</span>
            </button>
            <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
        </>
    );
}
