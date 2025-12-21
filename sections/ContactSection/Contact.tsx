import { ContactForm } from "@/components/Contact/ContactForm";
import { ContactInfo } from "@/components/Contact/ContactInfo";
import styles from "./Contact.module.css";

export function Contact() {
    const currentYear = new Date().getFullYear();

    return (
        <section className={styles.sectionContainer} id="contact" aria-label="Contact">
            <div className={styles.maxContainer}>
                <div
                    className={styles.headerWrapper}
                >
                    <h2 className={styles.sectionTitle}>CONTACT</h2>
                    <span className={styles.subtitle}>// TRANSMISSION</span>
                </div>

                <div className={styles.contentGrid}>
                    <ContactInfo />
                    <div
                        className={styles.formCard}
                    >
                        <div className={styles.bgPulse} />

                        <ContactForm />
                    </div>
                </div>
                <footer
                    className={styles.footerCopyright}
                >
                    <p>© {currentYear} Jerome Haynes. All systems nominal.</p>
                </footer>
            </div>
        </section>
    );
}
