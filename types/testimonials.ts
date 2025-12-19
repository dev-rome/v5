export interface Testimonial {
    id: number;
    quote: string;
    client: string;
    role?: string;
    rating?: number;
}

export interface TestimonialCardProps {
    testimonial: Testimonial;
    index: number;
}
