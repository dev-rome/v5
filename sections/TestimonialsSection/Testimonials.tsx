import { TestimonialCard } from "@/components/Testimonials/TestimonialCard";
import { TESTIMONIALS } from "@/data/testimonials";
import styles from "./Testimonials.module.css";

export function Testimonials() {
    return (
        <section className={styles.sectionContainer} id="testimonials" aria-labelledby="testimonials-heading">
            <div className={styles.maxContainer}>
                <div
                    className={styles.headerWrapper}
                >
                    <h2 id="testimonials-heading" className={styles.sectionTitle}>TESTIMONIALS</h2>
                    <span className={styles.subtitle}>// ENDORSEMENTS</span>
                </div>

                <div className={styles.testimonialsGrid}>
                    {TESTIMONIALS.map((testimonial, index) => (
                        <article
                            key={testimonial.id}
                        >
                            <TestimonialCard testimonial={testimonial} index={index} />
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
