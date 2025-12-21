import { TestimonialCard } from "@/components/Testimonials/TestimonialCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TESTIMONIALS } from "@/data/testimonials";
import styles from "./Testimonials.module.css";

export function Testimonials() {
    return (
        <section className={styles.sectionContainer} id="testimonials" aria-labelledby="testimonials-heading">
            <div className={styles.maxContainer}>
                <SectionHeader
                    title="TESTIMONIALS"
                    subtitle="// ENDORSEMENTS"
                    titleId="testimonials-heading"
                />
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
