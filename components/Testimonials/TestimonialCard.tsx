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
                    &quot;{testimonial.quote}&quot;
                </blockquote>
                <figcaption className={styles.clientInfo}>
                    <div className={styles.avatarPlaceholder} aria-hidden="true">
                        {testimonial.client.charAt(0)}
                    </div>
                    <div className={styles.clientDetails}>
                        <span className={styles.clientName}>{testimonial.client}</span>
                        <ul
                            className={styles.rating}
                            aria-label={`Rated ${testimonial.rating || 5} out of 5 stars`}
                        >
                            {[...Array(testimonial.rating || 5)].map((_, i) => (
                                <li
                                    key={i}
                                    style={{ '--star-index': i } as React.CSSProperties}
                                >
                                    <Star size={14} className={styles.stars} fill="currentColor" aria-hidden="true" />
                                </li>
                            ))}
                        </ul>
                    </div>
                </figcaption>
            </div>
        </figure>
    );
}
