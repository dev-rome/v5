"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { NAV_ITEMS } from "@/constants/navigation";
import { DockActions } from "./DockActions";
import styles from "./FloatingDock.module.css";

export function FloatingDock() {
    const [activeSection, setActiveSection] = useState<string>("hero");

    useEffect(() => {
        let ticking = false;
        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const scrollPosition = window.scrollY + window.innerHeight / 2;

                    let newActive: string | null = null;

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

                    if (newActive) {
                        setActiveSection(newActive);
                    }
                    ticking = false;
                });
                ticking = true;
            }
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <nav
            className={styles.dockContainer}
            role="navigation"
        >
            <div className={styles.dockContent}>
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
                                style={{
                                    pointerEvents: "none",
                                    transform: "translateZ(0)",
                                    willChange: "transform"
                                }}
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            />
                        )}
                    </button>
                ))}
                <div className={styles.separator} />
                <DockActions />
            </div>
        </nav>
    );
}
