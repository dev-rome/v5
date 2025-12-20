"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { NAV_ITEMS } from "@/constants/navigation";
import { DockActions } from "./DockActions";
import styles from "./FloatingDock.module.css";

export function FloatingDock() {
    const [activeSection, setActiveSection] = useState<string>("hero");
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        let ticking = false;
        // PERFORMANCE TIP: This pattern is called "Throttling".
        // Instead of running logic on every single pixel scroll (which causes lag),
        // we use requestAnimationFrame to limit updates to the screen's refresh rate.
        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const scrollPosition = window.scrollY + window.innerHeight / 2;

                    let newActive = activeSection;

                    for (const item of NAV_ITEMS) {
                        const element = document.getElementById(item.id);
                        if (element) {
                            const { offsetTop, offsetHeight } = element;
                            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                                newActive = item.id;
                                break;
                            }
                        }
                    }

                    setActiveSection(newActive);
                    ticking = false;
                });
                ticking = true;
            }
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [activeSection]);

    const scrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
            setIsOpen(false);
        }
    };

    return (
        <motion.div
            className={styles.dockContainer}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            role="navigation"
        >
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className={`${styles.dockItem} ${styles.toggleButton} ${isOpen ? styles.toggleButtonActive : ''}`}
                aria-label={isOpen ? "Close Menu" : "Open Menu"}
            >
                <span className={styles.menuLabel}>{isOpen ? "CLOSE" : "MENU"}</span>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className={styles.dockContent}
                        initial={{ opacity: 0, width: 0, height: 0 }}
                        animate={{ opacity: 1, width: "auto", height: "auto" }}
                        exit={{ opacity: 0, width: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <div className={styles.separator} />
                        {NAV_ITEMS.map((item) => (
                            <button
                                key={item.label}
                                type="button"
                                onClick={() => scrollTo(item.id)}
                                className={`${styles.dockItem} ${activeSection === item.id ? styles.dockItemActive : ''}`}
                                aria-label={item.label}
                                aria-current={activeSection === item.id ? "page" : undefined}
                            >
                                <item.icon size={20} />
                                <span className={styles.tooltip}>{item.label}</span>
                                {activeSection === item.id && (
                                    <motion.div
                                        layoutId="active-dock-indicator"
                                        className="absolute inset-0 rounded-full border border-primary/50"
                                        style={{ pointerEvents: "none" }}
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}
                            </button>
                        ))}
                        <div className={styles.separator} />
                        <DockActions />
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}
