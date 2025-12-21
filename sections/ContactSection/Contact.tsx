import { SectionHeader } from "@/components/ui/SectionHeader";
import { ContactForm } from "@/components/Contact/ContactForm";
import { ContactInfo } from "@/components/Contact/ContactInfo";
import styles from "./Contact.module.css";

export function Contact() {
    const currentYear = new Date().getFullYear();

    return (
        <section className={styles.sectionContainer} id="contact" aria-labelledby="contact-heading">
            <div className={styles.maxContainer}>
                <SectionHeader
                    title="CONTACT"
                    subtitle="// TRANSMISSION"
                    titleId="contact-heading"
                    className={styles.contactHeader}
                    titleClassName={styles.contactTitle}
                    subtitleClassName={styles.contactSubtitle}
                />
                <div className={styles.contentGrid}>
                    <ContactInfo />
                    <div
                        className={styles.formCard}
                    >
                        <div className={styles.bgPulse} aria-hidden="true" />

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
