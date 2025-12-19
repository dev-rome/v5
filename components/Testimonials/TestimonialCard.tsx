import { Quote, Star } from "lucide-react";
import { TestimonialCardProps } from "@/types/testimonials";
import styles from "./TestimonialCard.module.css";

export function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
    const isFeatured = index === 2;

    return (
        <figure className={`${styles.cardWrapper} ${isFeatured ? styles.featuredWrapper : ''}`}>
            <div className={`${styles.card} ${isFeatured ? styles.featuredCard : ''}`}>
                <Quote className={styles.quoteIcon} size={48} aria-hidden="true" />
                <blockquote className={styles.quoteText}>
                    "{testimonial.quote}"
                </blockquote>
                <figcaption className={styles.clientInfo}>
                    <div className={styles.avatarPlaceholder} aria-hidden="true">
                        {testimonial.client.charAt(0)}
                    </div>
                    <div className={styles.clientDetails}>
                        <span className={styles.clientName}>{testimonial.client}</span>
                        <div
                            className={styles.rating}
                            aria-label={`Rated ${testimonial.rating || 5} out of 5 stars`}
                            role="img"
                        >
                            {[...Array(testimonial.rating || 5)].map((_, i) => (
                                <Star key={i} size={14} className={styles.stars} fill="currentColor" aria-hidden="true" />
                            ))}
                        </div>
                    </div>
                </figcaption>
            </div>
        </figure>
    );
}
