import { SuccessMessageProps } from "@/types/contact";
import { CheckCircle2 } from "lucide-react";
import styles from "./ContactForm.module.css";

export function SuccessMessage({ className = "" }: SuccessMessageProps) {
    return (
        <div
            role="status"
            aria-live="polite"
            className={`${styles.successWrapper} ${className}`}
        >
            <div className={styles.successIcon}>
                <CheckCircle2 size={32} />
            </div>
            <h3 className={styles.successTitle}>Transmission Received</h3>
            <p className={styles.successMessage}>I&apos;ll be in touch shortly.</p>
        </div>
    );
}
